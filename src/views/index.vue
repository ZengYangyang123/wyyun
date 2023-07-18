<template>
    <div class="w-screen overflow-hidden bg-[#FAFAFA] " :class="{ dark: switchCheckStatus }">
        <div class=" w-full zhuye h-screen overflow-scroll dark:bg-[#212121] dark:text-[#fff]">
            <!-- 头部 -->
            <div class=" w-screen  flex justify-between items-center py-5 fixed top-0 z-[50]  bg-slate-50 dark:bg-[#212121]">
                <div @click="drawerSidebar = !drawerSidebar; updateOverflow()">
                    <Icon icon="prime:bars" class="text-4xl"></Icon>
                </div>
                <div class="relative w-8/12 h-full flex items-center">

                    <div class="w-full h-10 rounded-3xl pl-9 jbs1 relative">
                        <router-link :to="{ path: '/SearchFor' }">
                            <input type="text" placeholder="张杰" class="w-full h-10 rounded-3xl pl-9 absolute left-0 jbs2" />
                        </router-link>
                    </div>

                    <Icon icon="prime:search" class="text-2xl absolute top-2 left-2" color="#737373"></Icon>

                    <Icon icon="tabler:scan" class="text-2xl absolute right-2 top-2" color="#737373"></Icon>

                </div>
                <Icon icon="ep:microphone" class="text-2xl"></Icon>
            </div>
            <!-- 轮播 -->
            <div class=" h-[39vw] mt-[26vw] overflow-hidden">
                <van-swipe class="my-swipe h-[39vw]  w-[100vw]" :autoplay="3000">
                    <van-swipe-item v-for="item in menu" :key="item.id"
                        class=" h-[39vw]  float-left rounded-2xl flex kuan overflow-hidden bg-[pink] ">
                        <img :src="item.pic" alt="" class=" w-full h-full" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 菜单 -->
            <div class=" mt-8 h-[28vw]  overflow-hidden">
                <van-swipe class=" w-screen h-[28vw] my-swipe">
                    <van-swipe-item class=" float-left flex  h-[28vw] mx-2 flex-col items-center"
                        v-for="(i, index) in menus" :key="i.id" style="width: 16vw !important;">
                        <div class=" relative">
                            <img :src="i.iconUrl" alt="" class="red-image">
                            <span v-if="index === 0"
                                class=" absolute top-[50%] translate-y-[-40%] left-[50%] translate-x-[-50%] text-[#fff]">{{
                                    currentDate2 }}</span>
                        </div>
                        <span class=" text-sm">{{ i.name }}</span>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 推荐歌单 -->
            <div class=" w-screen mt-8">
                <div class="flex justify-between px-4">
                    <div class="flex items-center">
                        <span class="font-bold">推荐歌单</span>
                        <icon icon="uiw:right"></icon>
                    </div>
                    <div @click="drawerVisible = !drawerVisible">
                        <icon icon="prime:ellipsis-v"></icon>
                    </div>
                </div>
                <div class=" w-[100vw] h-[46vw]  overflow-hidden mt-2 pl-3">
                    <van-swipe class=" my-swipe w-[36vw] h-full float-left">
                        <van-swipe-item class="  h-[46vw]  flex mr-2 ">
                            <div class='w-[32vw] relative'>
                                <div class='w-[34vw] h-[32vw] overflow-hidden'>
                                    <transition name="abc" v-for="(item, index) in songSheet" :key="item.id">
                                        <div v-if="visiblesss === index" class="">
                                            <img :src="item.uiElement.image.imageUrl" alt=""
                                                class=" w-[32vw] h-[32vw] rounded-xl">
                                            <div
                                                class="absolute top-[2vw] right-[2.5vw] font-[800] text-[#fff] flex items-center">
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <p class=' text-[#4d505e]  absolute z-40 h-[5vw] line-clamp-2 text-sm yingcang mt-2'>{{
                                    resourceData || (songSheet[0]?.uiElement?.mainTitle.title) }}</p>
                                <Icon icon="ion:infinite" color=" white" class=" absolute top-0 right-3 text-2xl" />
                            </div>
                        </van-swipe-item>


                        <van-swipe-item v-for="(item, i) in songSheet" :key="item.id"
                            class="  relative   h-[46vw] float-left  flex mr-2">
                            <router-link :to="{ path: `/Refresh/${id[i]}` }">
                                <div class=" w-full h-full absolute z-10">
                                    <div class=" flex items-center absolute right-2 text-white">
                                        <icon icon="uiw:caret-right"></icon>
                                        <span>{{ Math.round(item.resources[0].resourceExtInfo.playCount / 10000) }}万</span>
                                    </div>
                                    <img :src="item.uiElement.image.imageUrl" alt="" class=" w-[32vw] h-[32vw] rounded-xl">
                                    <p class=" text-sm mt-2 yingcang">{{ item.uiElement.mainTitle.title }}</p>
                                </div>
                            </router-link>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <!-- 新歌新碟 -->
            <div class=" w-screen m-auto mt-8">
                <div class="flex justify-between px-3">
                    <div class="flex items-center">
                        <span class="font-bold">新歌新碟\数字专辑</span>
                        <icon icon="uiw:right"></icon>
                    </div>
                    <div>
                        <icon icon="prime:ellipsis-v"></icon>
                    </div>
                </div>
                <div class="  mt-[1vw]  overflow-hidden h-[70vw]">
                    <van-swipe class=" my-swipe w-screen">
                        <van-swipe-item v-for="n in newSong" :key="n.id"
                            class=" float-left flex kuan1 flex-col pl-2 w-full">
                            <div v-for="(i, x) in n.resources" :key="i.id" class=" w-screen h-[20vw]  mt-2 flex ">
                                <div class="w-[20vw] h-full ">
                                    <img :src="i.uiElement.image.imageUrl" alt="" class=" w-full h-full rounded-xl">
                                </div>
                                <div class="h-full flex  flex-col ml-2 w-[70vw]">
                                    <p class=" font-bold py-3">
                                        {{ i.uiElement.mainTitle.title }}
                                    </p>
                                    <div class=" flex ">
                                        <p class=" flex ">
                                            <span class=" text-xs rounded mr-[3vw]" :class="data[x][1]">{{ data[x][0]
                                            }}</span>
                                            <span class=" text-xs yingcang w-[100px] h-4">{{ i.uiElement.subTitle.title
                                            }}</span>
                                        </p>
                                        <span class=" text-xs w-3/12 yingcang">{{ i.resourceExtInfo.artists[0].name
                                        }}</span>
                                    </div>
                                </div>
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <!-- 排行榜 -->
            <div class=" w-screen  mt-8  overflow-hidden">
                <div class="flex justify-between px-3">
                    <div class="flex items-center">
                        <span class="font-bold">排行榜</span>
                        <icon icon="uiw:right"></icon>
                    </div>
                    <div>
                        <icon icon="prime:ellipsis-v"></icon>
                    </div>
                </div>
                <div class=" w-screen mt-3 h-[70vw]">
                    <van-swipe class=" my-swipe rounded-2xl h-[60vw] ">
                        <van-swipe-item v-for="i in theCharts" :key="i.id"
                            class="  kuan2 rounded-xl px-2 bg-white dark:bg-[#2E2E2E] dark:text-[#fff]"
                            style="box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)">
                            <div class="w-full h-10  flex justify-between">
                                <div class="flex items-center">
                                    <span class=" text-xs ml-2">{{ i.uiElement.mainTitle.title }}</span>
                                    <icon icon="uiw:right"></icon>
                                </div>
                                <div class=" flex items-center">
                                    <p class=" text-xs mr-2">{{ i.uiElement.mainTitle.titleDesc }}</p>
                                </div>
                            </div>
                            <div v-for="(nst, i) in i.resources" :key="nst.id" class="w-full h-[16vw] mx-2 my-2">
                                <div class=" w-[16vw] h-full  float-left">
                                    <img :src="nst.uiElement.image.imageUrl" alt="" class=" w-[16vw] h-[16vw] rounded-xl">
                                </div>
                                <div class="float-left w-[70vw]  h-full">
                                    <div class=" w-full  h-full">
                                        <div class=" w-2/12 float-left h-full flex items-center justify-center">
                                            <span :class="SerialNumber[i][1]">
                                                {{ SerialNumber[i][0] }}
                                            </span>
                                        </div>
                                        <div class=" w-6/12 float-left h-full overflow-hidden flex  flex-col">
                                            <span class=" font-bold text-sm yingcang py-4">{{
                                                nst.uiElement.mainTitle.title }}</span>
                                            <span class=" text-xs">{{ nst.resourceExtInfo?.songData.artists[0].name
                                            }}</span>
                                        </div>
                                        <div style="color: red;justify-content: flex-end;align-items: center;"
                                            class=" text-sm w-3/12 float-left h-full flex">
                                            <span>{{ nst.uiElement.labelText.text }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <!-- 话题 -->
            <div class="w-11/12 m-auto mt-8 overflow-hidden">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <span class="font-bold">热门话题</span>
                    </div>
                    <div>
                        <icon icon="prime:ellipsis-v"></icon>
                    </div>
                </div>
                <div class=" w-full mt-3 h-[40vw] ">
                    <van-swipe class=" h-full w-[80vw]">
                        <van-swipe-item v-for="(item, i) in subjectOfATalk" :key="item.id"
                            class=" h-[40vw]   rounded-xl mr-3 " :class="Background[i]">
                            <div class=" mt-3 ml-5 h-1/4">
                                <p class=" text-xl text-white flex">
                                    <Icon icon="mingcute:kakao-talk-fill" color="white" class=" text-2xl" />
                                    <span class=" yingcang">{{ item.resources[2].uiElement.mainTitle.title }}</span>
                                </p>
                                <p class=" text-xs" style="color: #ccc;">{{ item.resources[0].uiElement.subTitle?.title
                                }}
                                </p>
                            </div>
                            <div class="flex mx-2 my-2 justify-around h-3/4">
                                <p class=" text-xs w-7/12 mr-3" style="color: #ededed;">{{ Copywriting[i] }}</p>
                                <img :src="item.resources[0].uiElement.image.imageUrl" alt=""
                                    class=" w-[20vw] h-[20vw] rounded-xl">
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <!-- 音乐日历 -->
            <div class="w-11/12 m-auto mt-8 mb-8 ">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <span class="font-bold">音乐日历</span>
                        <div class=" flex items-center ml-2 bg-slate-200 rounded-2xl ">
                            <span class=" text-xs px-1 py-1 rounded-xl">今日{{ calendar.length }}条</span>
                            <icon icon="uiw:right" class=" text-xs"></icon>
                        </div>
                    </div>
                    <div>
                        <icon icon="prime:ellipsis-v"></icon>
                    </div>
                </div>
                <div class=" w-full mt-4 bg-white rounded-2xl dark:bg-[#2E2E2E] dark:text-[#fff]"
                    style="box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)">
                    <div v-for="(i, n) in calendar" :key="i.id" class=" flex justify-between">
                        <div class=" mt-5 ml-5 w-[56vw]">
                            <p class=" text-xs" style=" color: #b7b7b7;">
                                今天
                                <span class=" text-base" style=" color: #b7b7b7;">
                                    {{ currentDate }}
                                </span>
                                <span class=" text-xs" :class="style[n]">{{ i.tag }}</span>
                            </p>
                            <p class=" text-base ">{{ i.title }}</p>
                        </div>
                        <img :src="i.imgUrl" alt="" class=" my-5 mr-5 rounded-xl w-20 h-20">
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <!--  -->
        <Drawer :visible="drawerVisible" @dianji="(e) => (drawerVisible = e)">

            <template #header>

            </template>
            <ul class=" ml-4">
                <li class=" flex text-xl mt-4 items-center">
                    <Icon icon="uiw:like-o" class=" mr-3" />
                    <p>优先推荐</p>
                </li>
                <li class=" flex text-xl mt-4 items-center">
                    <Icon icon="uiw:heart-on" class=" mr-3" />
                    <p>减少推荐</p>
                </li>
                <li class=" flex text-xl mt-4 items-center">
                    <Icon icon="mingcute:more-4-line" class=" mr-3" />
                    <p>更多内容</p>
                </li>
            </ul>
        </Drawer>
        <Sidebar :visible="drawerSidebar" @dianji="(e) => (drawerSidebar = e)">
            <template #headerTwo>

            </template>
            <div class=" w-full h-screen">
                <div class=" w-11/12 h-[34vw] vip rounded-2xl pt-3 pl-3" style="margin: 0 auto">
                    <div class=" flex items-center mb-1">
                        <span class=" text-lg text-[#FDE6E0] font-bold mr-3">续费黑胶VIP</span>
                        <div class=" w-[10vw] h-3 bg-[#3E3936] rounded-xl">
                            <div class=" w-4/6 h-full vipjdt rounded-xl"></div>
                        </div>
                        <span class=" text-xs text-[#8C817F] mr-3 ml-1">V4</span>
                        <span class=" text-sm text-[#E1CDCE] p-1 rounded-2xl" style="border:1px solid #E1CDCE">会员中心</span>
                    </div>
                    <div class=" text-xs text-[#948888] mb-5">
                        <p>礼品卡 | 毕业快乐</p>
                    </div>
                    <div class=" pt-3 w-[70vw] flex justify-between" style="border-top: 0.1px solid #948888;">
                        <p class=" text-xs text-[#948888]">受邀专享，黑胶VIP低至0.27元/天！</p>
                        <span
                            class=" w-[9vw] h-[9vw] rounded text-center -mt-2 mr-5 text-xs bg-[#E94804] text-white font-bold">受邀专享</span>
                    </div>
                </div>
                <div class=" w-full h-5 opacity-0"></div>
                <div class=" w-11/12 pt-3 pl-3 rounded-2xl overflow-hidden bg-white dark:bg-[#383838] dark:text-white"
                    style="margin: 0 auto">
                    <ul class=" w-full">
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="uiw:mail-o"></icon>
                                <span class=" text-base ml-2">我的消息</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="solar:cloud-outline"></icon>
                                <span class=" text-base ml-2">云贝中心</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="teenyicons:bulb-on-outline"></icon>
                                <span class=" text-base ml-2">创作者中心</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class=" w-full h-5 opacity-0"></div>
                <div class=" w-11/12 pt-3 pl-3 rounded-2xl overflow-hidden bg-white dark:bg-[#383838] dark:text-white"
                    style="margin: 0 auto">
                    <div class=" pb-2">
                        <span class=" text-xs text-[#AAAAAA]">音乐服务</span>
                    </div>
                    <ul class=" w-full mt-2">
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="emojione-monotone:dotted-six-pointed-star"></icon>
                                <span class=" text-base ml-2">测趣</span>
                            </div>
                            <div class=" mr-4 flex">
                                <span class=" text-xs text-[#AAA] mr-3">点击查看今日运势</span>
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="ep:ice-cream-round"></icon>
                                <span class=" text-base ml-2">云村有票</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="ph:cube-fill"></icon>
                                <span class=" text-base ml-2">多多西西口袋</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="ic:outline-local-mall"></icon>
                                <span class=" text-base ml-2">商城</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="icon-park-outline:electrocardiogram"></icon>
                                <span class=" text-base ml-2">Beat专区</span>
                            </div>
                            <div class=" mr-4 flex">
                                <span class=" text-xs text-[#AAA] mr-3">顶尖制作邀你创作</span>
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="tabler:school-bell"></icon>
                                <span class=" text-base ml-2">口袋彩铃</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="mingcute:game-2-line"></icon>
                                <span class=" text-base ml-2">游戏专区</span>
                            </div>
                            <div class=" mr-4 flex">
                                <span class=" text-xs text-[#AAA] mr-3">音乐浇灌治愈花园</span>
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class=" w-full h-5 opacity-0"></div>
                <div class=" w-11/12 pt-3 pl-3 rounded-2xl overflow-hidden bg-white dark:bg-[#383838] dark:text-white"
                    style="margin: 0 auto">
                    <div class=" pb-2">
                        <span class=" text-xs text-[#AAAAAA]">其他</span>
                    </div>
                    <ul class=" w-full mt-2">
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="ph:nut"></icon>
                                <span class=" text-base ml-2">设置</span>
                            </div>
                            <div class=" mr-4 flex">
                                <span class=" text-xs text-[#AAA] mr-3"></span>
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="ph:moon-light"></icon>
                                <span class=" text-base ml-2">深色模式</span>
                            </div>
                            <v-switch :value="switchCheckStatus" @input="(e) => (switchCheckStatus = e)" />
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="streamline:interface-time-alarm-notification-alert-bell-wake-clock-alarm">
                                </icon>
                                <span class=" text-base ml-2">定时关闭</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top">
                                </icon>
                                <span class=" text-base ml-2">个性装扮</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="iconoir:headset-charge"></icon>
                                <span class=" text-base ml-2">边听边存</span>
                            </div>
                            <div class=" mr-4 flex">
                                <span class=" text-xs text-[#AAA] mr-3">未开启</span>
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="icon-park-outline:radio"></icon>
                                <span class=" text-base ml-2">在线听歌免流量</span>
                            </div>
                            <div class=" mr-4">
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="ph:prohibit"></icon>
                                <span class=" text-base ml-2">音乐黑名单</span>
                            </div>
                            <div class=" mr-4 flex">
                                <span class=" text-xs text-[#AAA] mr-3"></span>
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="iconamoon:shield-yes-light"></icon>
                                <span class=" text-base ml-2">青少年模式</span>
                            </div>
                            <div class=" mr-4 flex">
                                <span class=" text-xs text-[#AAA] mr-3">未开启</span>
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                        <li class=" h-[10vw] flex justify-between items-center">
                            <div class=" flex items-center">
                                <icon icon="charm:clock-alarm"></icon>
                                <span class=" text-base ml-2">音乐闹钟</span>
                            </div>
                            <div class=" mr-4 flex">
                                <span class=" text-xs text-[#AAA] mr-3"></span>
                                <icon icon="uiw:right"></icon>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class=" w-full h-5 opacity-0"></div>
                <div class=" w-11/12 rounded-2xl bg-white h-[16vw] dark:bg-[#383838] flex items-center justify-center"
                    style="margin: 0 auto">
                    <span class=" text-xl text-[#E35553]">退出登录/关闭</span>
                </div>
                <div class=" w-full h-5 opacity-0"></div>
            </div>
        </Sidebar>
    </div>
</template>
<script>
import axios from 'axios';
import '../../node_modules/swiper/css/swiper.css';
import { Icon } from '@iconify/vue2';

export default {

    data() {
        //响应式数据
        return {
            menus: [],
            resourceData: '',
            visiblesss: 0,
            switchCheckStatus: false,
            drawerSidebar: false,
            drawerVisible: false,
            visible: true,
            menu: [],
            songSheet: [],
            newSong: [],
            theCharts: [],
            SerialNumber: [
                [1, 'one'],
                [2, 'two'],
                [3, 'three'],
            ],
            subjectOfATalk: [],
            Copywriting: [
                "日月星辰不及你眼里的温柔：为啥1000首突然变80首了",
                "生在南方的辣椒酱：孤独的时候听民谣，热闹的时候听民谣，下雨的时候听民谣，晴天的时候听民谣、因为有一种孤独，不为四季所动。",
                "THE-UNIVERSE-BY岈：一眼看过去都是VIP，你看我开心吗",
                "一度_common：上次像这样听着这些歌好像还是十年前，吹着风，带着耳机，半眯着仿佛回到了以前"
            ],
            Background: [
                'hese', 'shenlan', 'qingse', 'zise'
            ],
            calendar: [],
            currentDate: '',
            currentDate2: '',
            style: [
                'red', 'blue'
            ],
            data: [
                ['超73%人播放', 'red'],
                ['Hi-Res', 'huang'],
                ['HQ', 'lan']
            ],
            id: [],
            savedData: '',
        };
    },

    async created() {
        //生命周期钩子函数
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
            .then((res) => {
                // console.log(res.data.data.blocks);
                this.menu = res.data.data.blocks[0].extInfo.banners;
                this.songSheet = res.data.data.blocks[1].creatives;
                this.newSong = res.data.data.blocks[5].creatives;
                this.theCharts = res.data.data.blocks[3].creatives;
                this.subjectOfATalk = res.data.data.blocks[2].creatives;

                this.changeID()

            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get('https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000')
            .then((res) => {
                // console.log(res)
                this.calendar = res.data.data.calendarEvents;
            })
            .catch((err) => {
                console.log(err)
            })
        this.currentDate = new Date().toLocaleDateString().slice(5);
        this.currentDate2 = new Date().toLocaleDateString().slice(7);
        axios
            .get(
                'https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/dragon/ball'
            )
            .then((res) => {
                this.menus = res.data.data;
            })
            .catch((err) => {
                console.log(err)
            })
    },
    methods: {

        updateOverflow() {
            const body = document.querySelector('.zhuye');
            body.setAttribute('style', `overflow: ${this.drawerSidebar ? ' scroll' : ' hidden'}`);

        },
        animateItems() {
            setInterval(() => {
                this.visiblesss++;
                if (this.visiblesss === this.songSheet.length) {

                    this.visiblesss = 0;
                }
                this.resourceData = this.songSheet[this.visiblesss].uiElement?.mainTitle.title
            }, 3000);
        },//上下轮播效果
        changeID() {
            this.id = []
            for (let i = 0; i < this.songSheet.length; i++) {
                this.id.push(parseInt(this.songSheet[i].creativeId))
            }
            // console.log(this.id)
        },
    },
    mounted() {
        this.animateItems()
    },
    components: {
        Icon,
    },

};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;

.kuan {
    width: 90vw !important;
    margin: 0 5vw;
}

.kuan1 {
    width: 100vw !important;
}

.kuan2 {
    width: 96vw !important;
    margin: 0 2vw;
}


.van-swipe__track {
    display: flex;

}


.yingcang {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.yingcang2 {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.one {
    color: #C6922C;
}

.two {
    color: #7780A1;
}

.three {
    color: #C3784E;
}

.hese {
    background: rgb(189, 159, 148);
    background: linear-gradient(0deg, rgba(189, 159, 148, 1) 0%, rgba(164, 138, 125, 1) 100%);
}

.shenlan {
    background: rgb(167, 167, 169);
    background: linear-gradient(0deg, rgba(167, 167, 169, 1) 0%, rgba(145, 144, 149, 1) 100%);
}

.qingse {
    background: rgb(147, 147, 185);
    background: linear-gradient(0deg, rgba(147, 147, 185, 1) 0%, rgba(124, 124, 162, 1) 100%);
}

.zise {
    background: rgb(164, 148, 185);
    background: linear-gradient(0deg, rgba(164, 148, 185, 1) 0%, rgba(140, 124, 163, 1) 100%);

}

.red {
    color: red;
    background-color: rgb(249, 199, 199);
}

.blue {
    color: rgb(7, 7, 189);
    background-color: rgb(202, 202, 250);
}

.jbs {
    background: rgb(184, 255, 251);
    background: linear-gradient(45deg, rgba(184, 255, 251, 1) 0%, rgba(254, 185, 222, 1) 100%);
}

.jbs1 {
    background: rgb(184, 209, 255);
    background: linear-gradient(45deg, rgba(184, 209, 255, 1) 0%, rgba(254, 185, 222, 1) 100%);
}

.jbs2 {
    background-color: rgba(0, 0, 0, 0);
}

.huang {
    color: rgb(255, 170, 0);
    border: 1px solid rgb(255, 179, 0);
}

.lan {
    color: rgb(0, 149, 255)
}

/* .marginright {
    margin-right: 14px !important;
} */

.vip {
    background: rgb(61, 57, 56);
    background: linear-gradient(90deg, rgba(61, 57, 56, 1) 0%, rgba(94, 78, 78, 1) 100%);
}

.vipjdt {
    background: rgb(230, 203, 196);
    background: linear-gradient(90deg, rgba(230, 203, 196, 1) 72%, rgba(255, 255, 255, 1) 100%);
}

.abc-leave {
    transform: translateY(100%) scale(1);
}

.abc-leave-active {
    transition: all ease-in-out .6s;
}

.abc-leave-to {
    transform: translateY(-100%) scale(.7);
}


.abc-enter {
    opacity: 0;
    transform: translateY(100%) scale(.7);
}

.abc-enter-active {
    transition: all ease-in-out .6s;
}

.abc-enter-to {
    opacity: 1;
    transform: translateY(-100%) scale(1);
}

.red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
</style>