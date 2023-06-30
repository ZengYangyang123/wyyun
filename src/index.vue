<template>
    <div class="w-screen overflow-hidden jbs">
        <!-- 头部 -->
        <div class=" w-screen  flex justify-between items-center pt-5 pb-4 fixed top-0 z-20 bg-white jbs">
            <Icon icon="prime:bars" class="text-4xl" @click="drawerSidebar = !drawerSidebar"></Icon>
            <div class="relative w-8/12 h-full flex items-center">
                <div class="w-full h-10 rounded-3xl pl-9 jbs1 relative">
                    <input type="text" placeholder="张杰" class="w-full h-10 rounded-3xl pl-9 absolute left-0 jbs2" />
                </div>
                <Icon icon="prime:search" class="text-2xl absolute top-2 left-2" color="#737373"></Icon>
                <Icon icon="tabler:scan" class="text-2xl absolute right-2 top-2" color="#737373"></Icon>
            </div>
            <Icon icon="ep:microphone" class="text-2xl"></Icon>
        </div>
        <!-- 轮播 -->
        <div class="w-11/12 m-auto mt-24 h-32">
            <div class="swiper-container h-full rounded-2xl relative">
                <div class="swiper-wrapper h-full">
                    <div v-for="item in menu" :key="item.id" class="swiper-slide h-full">
                        <img :src="item.pic" alt="" class="w-full h-full rounded-2xl" />
                    </div>
                </div>
                <div class="swiper-pagination w-full h-5 absolute bottom-0"></div>
            </div>
        </div>
        <!-- 菜单 -->
        <div class="w-11/12 m-auto mt-8 h-20">
            <van-swipe class=" w-full h-full overflow-hidden">
                <van-swipe-item class=" float-left" v-for="(i, x) in 2" :key="i.id">
                    <ul class="w-full h-16 flex justify-between">
                        <li class="w-2/12 h-full text-sm flex flex-col items-center justify-center" v-for="(n, index) in 5"
                            :key="n.id">
                            <Icon :icon="MenuButton[x][index][0]" style="color: red" class="text-4xl"></Icon>
                            <span>{{ MenuButton[x][index][1] }}</span>
                        </li>
                    </ul>
                </van-swipe-item>
            </van-swipe>

        </div>
        <!-- 推荐歌单 -->
        <div class="w-11/12 m-auto mt-8">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span class="font-bold">推荐歌单</span>
                    <icon icon="uiw:right"></icon>
                </div>
                <div @click="drawerVisible = !drawerVisible">
                    <icon icon="prime:ellipsis-v"></icon>
                </div>
            </div>
            <div class="w-full h-40 mt-2">
                <div class="swiper-container h-32 w-[32vw] ">
                    <div class="swiper-wrapper h-full  relative">
                        <van-swipe vertical class=" absolute -bottom-6 z-10 h-5 overflow-hidden" :autoplay="3000">
                            <van-swipe-item v-for=" to in newSong " :key="to.id" class=" text-sm yingcang">{{
                                to.resources[0].uiElement.subTitle.rcmdText }}</van-swipe-item>
                        </van-swipe>
                        <div class=" swiper-slide overflow-hidden rounded-xl h-28 marginright">
                            <Icon icon="ion:infinite-outline" class=" absolute top-0 z-10 right-2 text-white text-xl"
                                color=" white" />
                            <van-swipe class=" w-full h-32 " vertical :autoplay="3000">
                                <van-swipe-item v-for="item in newSong" :key="item.id" class=" bg-slate-300 h-32">
                                    <img :src="item.resources[0].uiElement.image.imageUrl" alt="" class=" w-full h-32">
                                </van-swipe-item>
                            </van-swipe>
                        </div>
                        <div v-for="item in songSheet" :key="item.id" class="swiper-slide   relative h-full marginright">

                            <!-- <div class=" h-[10vw] bg-white rounded-xl w-10/12 absolute -top-1 left-2"></div> -->
                            <div class=" w-full h-full absolute z-10">
                                <div class=" flex items-center absolute right-2 text-white">
                                    <icon icon="uiw:caret-right"></icon>
                                    <span>{{ Math.round(item.resources[0].resourceExtInfo.playCount / 10000) }}万</span>
                                </div>
                                <img :src="item.uiElement.image.imageUrl" alt="" class=" w-full h-32 rounded-xl">
                                <p class=" text-sm mt-2 yingcang">{{ item.uiElement.mainTitle.title }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- 新歌新碟 -->
        <div class="w-11/12 m-auto mt-10">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span class="font-bold">新歌新碟\数字专辑</span>
                    <icon icon="uiw:right"></icon>
                </div>
                <div>
                    <icon icon="prime:ellipsis-v"></icon>
                </div>
            </div>
            <div class="w-full h-[266px]">
                <div class="swiper-container h-full rounded-2xl w-full">
                    <div class="swiper-wrapper w-full">
                        <ul v-for="n in newSong" :key="n.id" class="swiper-slide w-full h-full">
                            <li v-for="(i, x) in n.resources" :key="i.id" class="w-[358px] h-20  mt-2 flex">
                                <div class="w-20 h-full ">
                                    <img :src="i.uiElement.image.imageUrl" alt="" class=" w-full h-full rounded-xl">
                                </div>
                                <div class="h-full flex justify-center flex-col ml-2 w-72">
                                    <p class=" font-bold mb-1">
                                        {{ i.uiElement.mainTitle.title }}
                                    </p>
                                    <p class=" flex justify-between ">
                                        <span class=" text-xs mr-4 rounded" :class="data[x][1]">{{ data[x][0] }}</span>
                                        <span class=" text-xs yingcang w-[100px] h-4">{{ i.uiElement.subTitle.title
                                        }}</span>
                                        <span class=" text-xs w-3/12 yingcang">{{ i.resourceExtInfo.artists[0].name
                                        }}</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 排行榜 -->
        <div class="w-11/12 m-auto mt-8">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span class="font-bold">排行榜</span>
                    <icon icon="uiw:right"></icon>
                </div>
                <div>
                    <icon icon="prime:ellipsis-v"></icon>
                </div>
            </div>
            <div class="w-full mt-3">
                <div class="swiper-container rounded-2xl h-[265px]">
                    <div class="swiper-wrapper h-full">
                        <ul v-for="i in theCharts" :key="i.id"
                            class="swiper-slide w-full h-full bg-white rounded-xl overflow-hidden">
                            <div class="w-full h-10  flex justify-between">
                                <div class="flex items-center">
                                    <span class=" text-xs ml-2">{{ i.uiElement.mainTitle.title }}</span>
                                    <icon icon="uiw:right"></icon>
                                </div>
                                <div class=" flex items-center">
                                    <p class=" text-xs mr-2">{{ i.uiElement.mainTitle.titleDesc }}</p>
                                </div>
                            </div>
                            <li v-for="(nst, i) in i.resources" :key="nst.id" class="w-full h-16 mx-2 my-2">
                                <div class=" h-full w-16 float-left">
                                    <img :src="nst.uiElement.image.imageUrl" alt="" class=" w-full h-full rounded-xl">
                                </div>
                                <div class="float-left w-72  h-full">
                                    <div class=" w-full  h-full">
                                        <div class=" w-2/12 float-left h-full flex items-center justify-center">
                                            <span :class="SerialNumber[i][1]">
                                                {{ SerialNumber[i][0] }}
                                            </span>
                                        </div>
                                        <div class=" w-6/12 float-left h-full overflow-hidden flex justify-center flex-col">
                                            <span class=" font-bold text-sm yingcang">{{
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
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 话题 -->
        <div class="w-11/12 m-auto mt-8">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span class="font-bold">热门话题</span>
                </div>
                <div>
                    <icon icon="prime:ellipsis-v"></icon>
                </div>
            </div>
            <div class=" w-full mt-3 h-[40vw]">
                <div class="swiper-container h-full w-[80vw]">
                    <div class="swiper-wrapper h-full">
                        <div v-for="(item, i) in subjectOfATalk" :key="item.id" class="swiper-slide   rounded-xl h-full"
                            :class="Background[i]">
                            <div class=" mt-3 ml-5 h-1/4">
                                <p class=" text-xl text-white flex">
                                    <Icon icon="mingcute:kakao-talk-fill" color="white" class=" text-2xl" />
                                    <span class=" yingcang">{{ item.resources[2].uiElement.mainTitle.title }}</span>
                                </p>
                                <p class=" text-xs" style="color: #ccc;">{{ item.resources[0].uiElement.subTitle?.title }}
                                </p>
                            </div>
                            <div class="flex mx-2 my-2 justify-around h-3/4">
                                <p class=" text-xs w-7/12 mr-3" style="color: #ededed;">{{ Copywriting[i] }}</p>
                                <img :src="item.resources[0].uiElement.image.imageUrl" alt=""
                                    class=" w-[20vw] h-[20vw] rounded-xl">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 音乐日历 -->
        <div class="w-11/12 m-auto mt-8 mb-8">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span class="font-bold">音乐日历</span>
                    <div class=" flex items-center ml-2 bg-slate-200 rounded-2xl">
                        <span class=" text-xs px-1 py-1 rounded-xl">今日{{ calendar.length }}条</span>
                        <icon icon="uiw:right" class=" text-xs"></icon>
                    </div>
                </div>
                <div>
                    <icon icon="prime:ellipsis-v"></icon>
                </div>
            </div>
            <div class=" w-full mt-4 bg-white rounded-2xl">
                <div v-for="(i, n) in calendar" :key="i.id" class=" flex justify-between">
                    <div class=" mt-5 ml-5">
                        <p class=" text-xs" style=" color: #b7b7b7;">
                            今天
                            <span class=" text-base" style=" color: #b7b7b7;">
                                {{ currentDate }}
                            </span>
                            <span class=" text-xs" :class="style[n]">{{ i.tag }}</span>
                        </p>
                        <p class=" text-base font-bold">{{ i.title }}</p>
                    </div>
                    <img :src="i.imgUrl" alt="" class=" my-5 mr-5 rounded-xl w-20 h-20">

                </div>
                <div></div>
            </div>
        </div>
        <!--  -->
        <Drawer :visible="drawerVisible" @dianji="(e) => (drawerVisible = e)">
            <!-- <Drawer :visible.sync="drawerVisible"> -->

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
        <!-- 底部导航栏 -->
        <!-- <div class=" w-screen h-16 bg-white fixed bottom-0 z-50">

        </div> -->
        <!-- 侧边栏 -->
        <!-- <Sidebar :slideTwo="drawerSidebar" @dianjiTwo="(e) => (drawerSidebar = e)">
            <template #headerTwo>

            </template>

        </Sidebar> -->
    </div>
</template>
<script>
import axios from 'axios';
import Swiper from 'swiper';
import '../node_modules/swiper/swiper.css';
import { Icon } from '@iconify/vue2';

export default {
    data() {
        //响应式数据
        return {
            drawerSidebar:false,
            drawerVisible: false,
            visible: true,
            slideTwo:true,
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
            style: [
                'red', 'blue'
            ],
            data: [
                ['超73%人播放', 'red'],
                ['Hi-Res', 'huang'],
                ['HQ', 'lan']
            ],
            MenuButton: [
                [
                    ['dashicons:calendar', '每日推荐'],
                    ['solar:radio-bold', '私人漫游'],
                    ['solar:book-bold', '歌单'],
                    ['icon-park-solid:ranking-list', '排行榜'],
                    ['mdi:audiobook', '有声书']
                ],
                [
                    ['ic:round-duo', '直播'],
                    ['icon-park-solid:people', '关注新歌'],
                    ['icon-park-solid:poker', '一歌一遇'],
                    ['ri:auction-fill', '收藏家'],
                    ['mingcute:game-2-fill', '游戏专区']
                ]
            ],


            swiper: null,
            swiper2: null,
            swiper3: null,
        };
    },
    methods: {
        //交互操作，响应事件函数
        // fn(e) {
        //     this.drawerVisible = e
        // }
    },
    created() {
        //生命周期钩子函数
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
            .then((res) => {
                // console.log(res.data.data.blocks[5].creatives.resources[0]);
                this.menu = res.data.data.blocks[0].extInfo.banners;
                this.songSheet = res.data.data.blocks[1].creatives;
                this.newSong = res.data.data.blocks[5].creatives;
                this.theCharts = res.data.data.blocks[3].creatives;
                this.subjectOfATalk = res.data.data.blocks[2].creatives;

                this.swiper.updata();
                this.swiper2.updata();
                this.swiper3.updata();
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get('https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000')
            .then((res) => {
                console.log(res)
                this.calendar = res.data.data.calendarEvents;
            })
            .catch((err) => {
                console.log(err)
            })
        this.currentDate = new Date().toLocaleDateString().slice(5);
    },
    mounted() {
        this.swiper = new Swiper('.swiper-container', {
            paginationClickable: true,
            touchMoveStopPropagation: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
        });
        this.swiper2 = new Swiper('.swiper-container2', {
            paginationClickable: true,
            touchMoveStopPropagation: false,
        });
        this.swiper3 = new Swiper('.swiper-container3', {
            paginationClickable: true,
            touchMoveStopPropagation: false,
        });
    },
    components: {
        Icon,
    },

};
</script>
<style>
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

.marginright {
    margin-right: 14px !important;
}
</style>