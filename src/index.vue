<template>
    <div class="w-screen overflow-hidden jbs">
        <!-- 头部 -->
        <div class="w-11/12 m-auto flex justify-between items-center mt-5">
            <Icon icon="prime:bars" class="text-4xl"></Icon>
            <div class="relative w-8/12 h-full flex items-center">
                <input type="text" placeholder="张杰" class="w-full h-10 rounded-3xl pl-8" style="border: 1px solid #000" />
                <Icon icon="prime:search" class="text-2xl absolute top-2 left-2"></Icon>
                <Icon icon="" class="text-2xl absolute right-2 top-2"></Icon>
            </div>
            <Icon icon="ep:microphone" class="text-2xl"></Icon>
        </div>
        <!-- 轮播 -->
        <div class="w-11/12 m-auto mt-5 h-32">
            <div class="swiper-container h-full rounded-2xl relative">
                <div class="swiper-wrapper">
                    <div v-for="item in menu" :key="item.id" class="swiper-slide">
                        <img :src="item.pic" alt="" class="w-full h-full rounded-2xl" />
                    </div>
                </div>
                <div class="swiper-pagination w-full h-5 absolute bottom-0"></div>
            </div>
        </div>
        <!-- 菜单 -->
        <div class="w-11/12 m-auto mt-5">
            <ul class="w-full h-16 flex justify-between">
                <li class="w-2/12 h-full text-sm flex flex-col items-center justify-center">
                    <Icon icon="dashicons:calendar" style="color: red" class="text-4xl"></Icon>
                    <span>每日推荐</span>
                </li>
                <li class="w-2/12 h-full text-sm flex flex-col items-center justify-center">
                    <Icon icon="solar:radio-bold" color="red" class=" text-4xl" />
                    <span>私人漫游</span>
                </li>
                <li class="w-2/12 h-full text-sm flex flex-col items-center justify-center">
                    <Icon icon="solar:book-bold" color="red" class=" text-4xl" />
                    <span>歌单</span>
                    <div></div>
                </li>
                <li class="w-2/12 h-full text-sm flex flex-col items-center justify-center">
                    <Icon icon="icon-park-solid:ranking-list" color="red" class=" text-4xl" />
                    <span>排行榜</span>
                </li>
                <li class="w-2/12 h-full text-sm flex flex-col items-center justify-center">
                    <Icon icon="mdi:audiobook" color="red" class=" text-4xl" />
                    <span>有声书</span>
                </li>
            </ul>
        </div>
        <!-- 推荐歌单 -->
        <div class="w-11/12 m-auto mt-5">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <span class="font-bold">推荐歌单</span>
                    <icon icon="uiw:right"></icon>
                </div>
                <div>
                    <icon icon="prime:ellipsis-v"></icon>
                </div>
            </div>
            <div class="w-full h-36 mt-2">
                <div class="swiper-container h-full w-32">
                    <div class="swiper-wrapper h-full">
                        <div v-for="item in songSheet" :key="item.id" class="swiper-slide  marginr relative">
                            <div class=" flex items-center absolute right-2 text-white">
                                <icon icon="uiw:caret-right"></icon>
                                <span>{{item.resources[0].resourceExtInfo.playCount/10000}}万</span>
                            </div>
                            <img :src="item.uiElement.image.imageUrl" alt="" class=" w-full h-32 rounded-xl">
                            <p class=" text-sm mt-2 yingcang">{{ item.uiElement.mainTitle.title }}</p>
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
                <div class="swiper-container h-full rounded-2xl">
                    <div class="swiper-wrapper">
                        <ul v-for="n in newSong" :key="n.id" class="swiper-slide w-full h-full">
                            <li v-for="i in n.resources" :key="i.id" class="w-full h-20  mt-2 flex">
                                <div class="w-20 h-full ">
                                    <img :src="i.uiElement.image.imageUrl" alt="" class=" w-full h-full rounded-xl">
                                </div>
                                <div class="h-full flex justify-center flex-col ml-2">
                                    <p class=" font-bold mb-1">{{ i.uiElement.mainTitle.title }}</p>
                                    <p>
                                        <span class=" text-sm">{{ i.uiElement.subTitle.title }}</span>
                                        <span class=" text-sm">{{ i.resourceExtInfo.artists[0].name }}</span>
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
            <div class=" w-full mt-3">
                <div class="swiper-container ">
                    <div class="swiper-wrapper">
                        <div v-for="(item, i) in subjectOfATalk" :key="item.id" class="swiper-slide w-full  rounded-xl "
                            :class="Background[i]">
                            <div class=" mt-3 ml-5">
                                <p class=" text-xl text-white flex">
                                    <Icon icon="mingcute:kakao-talk-fill" color="white" class=" text-2xl" />
                                    <span class=" yingcang">{{ item.resources[0].uiElement.mainTitle.title }}</span>
                                </p>
                                <p class=" text-xs" style="color: #ccc;">{{ item.resources[0].uiElement.subTitle?.title }}
                                </p>
                            </div>
                            <div class="flex mx-2 my-2 justify-around">
                                <p class=" text-xs w-7/12 mr-3" style="color: #ededed;">{{ Copywriting[i] }}</p>
                                <img :src="item.resources[0].uiElement.image.imageUrl" alt=""
                                    class=" w-3/12 h-20 rounded-xl">
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
                "一度_common：上次像这样听着这些歌好像还是十年前，吹着风，带着耳机，半眯着仿佛回到了以前，绿色草坪，蓝蓝天空，那一袭白裙再也看不清面庞"
            ],
            Background: [
                'hese', 'shenlan', 'qingse', 'zise'
            ],
            calendar: [],
            currentDate: '',
            style: [
                'red', 'blue'
            ],


            swiper: null,
            swiper2: null,
            swiper3: null,
        };
    },
    methods: {
        //交互操作，响应事件函数
    },
    created() {
        //生命周期钩子函数
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
            .then((res) => {
                // console.log(res.data.data.blocks[3].creatives);
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
.marginr {
    margin-right: 10px !important;
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
    background-color: #AE9986;
}

.shenlan {
    background-color: #8696AD;
}

.qingse {
    background-color: rgb(41, 140, 140);
}

.zise {
    background-color: rgb(148, 66, 148);

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
    background: rgb(245,117,255);
background: linear-gradient(45deg, rgba(245,117,255,1) 0%, rgba(102,229,255,1) 100%);
}
</style>