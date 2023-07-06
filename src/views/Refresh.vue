<template>
    <div class=" w-full h-full  ">
        <!-- 头部 -->
        <div class=" w-screen flex justify-between h-[16vw] items-center text-white fixed top-0 " style="background-color: rgba(255, 255, 255, 0);">
            <div class=" flex items-center">
                <router-link :to="{ path: '/IndexView' }">
                    <icon icon="uiw:arrow-left" class=" text-xl mr-5"></icon>
                </router-link>
                <span>歌单</span>
            </div>
            <div class=" flex items-center">
                <icon icon="prime:search" class=" text-2xl mr-5"></icon>
                <icon icon="radix-icons:dots-vertical" class=" text-2xl"></icon>
            </div>
        </div>
        <div class=" w-full h-full px-4 bjs pt-[16vw]">
            <!-- 详情 -->
            <div class=" w-full">
                <div class=" w-full h-[34vw]  flex">
                    <div class=" w-[34vw] h-full relative">

                        <div class=" w-full h-full flex items-center ">
                            <img :src="songSheet.playlist?.coverImgUrl" alt=""
                                class=" w-[30vw] h-[30vw] rounded-lg z-[999]">
                        </div>
                        <div class=" absolute top-[3vw] right-[4vw] flex">
                            <icon icon="uiw:caret-right" class=" text-white text-sm"></icon>
                            <span class=" text-white text-xs">{{ Math.round((songSheet.playlist?.playCount) / 10000)
                            }}万</span>
                        </div>
                        <div class=" w-[26vw] h-[28vw] absolute top-[0vw] left-[2vw] rounded-xl z-[1]"
                            style="background-color: rgba(255, 255, 255, 0.2);"></div>
                    </div>
                    <div class=" w-[60vw] h-full  flex justify-between">
                        <div class=" w-[50vw] h-full ">
                            <div class=" h-[12vw]">
                                <p class=" text-white text-lg ">{{ songSheet.playlist?.name }}</p>
                            </div>
                            <div class=" flex items-center mt-[4vw] w-full">
                                <img :src="songSheet.playlist?.creator?.avatarUrl" alt=""
                                    class=" w-[9vw] h-[9vw] rounded-2xl mr-2">
                                <span class=" text-white opacity-80 text-xs mr-2">{{ songSheet.playlist?.creator.nickname
                                }}</span>
                                <div class=" flex   rounded-2xl items-center justify-center py-1 w-[16vw]"
                                    style="background-color: rgba(255, 255, 255, 0.2);">
                                    <Icon icon="ic:outline-plus" color="white" class=" opacity-80 mr-1 text-xl" />
                                    <span class=" text-sm text-white opacity-60 -ml-[1vw]">关注</span>
                                </div>
                            </div>
                            <div class=" w-full mt-2 flex">
                                <div class=" px-[1vw] py-[1px]  flex items-center justify-center rounded-md overflow-hidden mr-1"
                                    style="background-color: rgba(255, 255, 255, 0.2);"
                                    v-for="item in songSheet.playlist?.tags" :key="item.id">
                                    <span class=" text-xs text-white -mr-1">{{ item }}</span>
                                    <icon icon="prime:chevron-right" class=" text-white text-xl -mr-2"></icon>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class=" px-[2px] py-[2px] flex rounded-2xl mt-[2vw]"
                                style=" background-color: rgba(255, 255, 255, 0.3);">
                                <icon icon="prime:chevron-down" class=" text-[#FBFEFF] text-xl -mt-[1px]"></icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" my-3">
                    <p class=" text-sm text-[#fff] opacity-[0.6] yingcang">{{ songSheet.playlist?.description }}</p>
                </div>
                <div class=" flex justify-between">
                    <div class=" w-[26vw] py-1 bg-[#7D8CB7] rounded-3xl  flex items-center justify-center">
                        <icon icon="typcn:arrow-forward" class=" text-white text-3xl"></icon>
                        <span class=" text-white text-sm">{{ songSheet.playlist?.shareCount }}</span>
                    </div>
                    <div class=" w-[26vw] py-1 bg-[#7D8CB7] rounded-3xl  flex items-center justify-center">
                        <Icon icon="uis:comment-dots" color="white" class=" text-xl mr-2" />
                        <span class=" text-white text-sm">{{ songSheet.playlist?.commentCount }}</span>
                    </div>
                    <div class=" w-[26vw] py-1 bg-[#FF2F49] rounded-3xl  flex items-center justify-center">
                        <Icon icon="fa6-solid:folder-plus" color="white" class=" text-xl mr-2" />
                        <span class=" text-white text-sm">{{ songSheet.playlist?.subscribedCount }}</span>
                    </div>
                </div>
            </div>
            <!-- 歌单列表 -->
            <div class=" w-screen bg-white -ml-4 mt-8 h-4/6"
                style="border-top-left-radius: 6vw;border-top-right-radius: 6vw;">
                <div class=" flex justify-between px-[5vw] pt-[5vw] h-[16vw]">
                    <div class=" flex items-center">
                        <Icon icon="icon-park-solid:play" color="#ff4d3f" class=" text-2xl" />
                        <span class="  ml-[4vw] text-lg font-bold">播放全部</span>
                        <span class=" text-[#909196] text-xs items-center ml-[3vw]">({{ this.musicData.length }})</span>
                    </div>
                    <div class=" flex items-center">
                        <Icon icon="clarity:download-line" color="#2f2f31" class=" text-2xl mr-[5vw]" />
                        <icon icon="uiw:menu" class=" text-[#2E2E30] text-xl mr-[1vw]"></icon>
                    </div>
                </div>
                <div class=" h-full">
                    <ul>
                        <li class=" h-[16vw]  flex items-center justify-between px-[5vw]" v-for="(item, i) in musicData"
                            :key="item.id">
                            <div class=" flex items-center">
                                <span class=" text-xl text-[#979797] mr-[6vw] w-[6vw] text-center">{{ i + 1 }}</span>
                                <div class=" w-[60vw]">
                                    <p class=" yingcang ">
                                        <span class=" text-base ">{{ (item.name) }}</span>
                                        <span class=" text-[#959698] text-base">{{ }}</span>
                                    </p>
                                    <p class=" yingcang">
                                        <span
                                            class=" text-xs text-[#DEB973] border-[#DEB973] border-[1px] rounded mr-1 font-bold">超清母带</span>
                                        <span class=" text-xs text-[#7F7F7F] ">{{ item.ar[0].name }}</span>
                                    </p>
                                </div>
                            </div>
                            <div class=" flex items-center">
                                <div class=" m-0 p-0 w-[6vw] h-[5vw] flex items-center justify-center rounded-md mr-[6vw]"
                                    style="border: 2px solid #b2b2b2 ;">
                                    <Icon icon="fluent:play-12-filled" color="#b2b2b2" class=" text-xs" />
                                </div>
                                <icon icon="prime:ellipsis-v" class=" text-[#B2B2B2] text-2xl"></icon>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            id: 0,
            musicData: [],
            songSheet: [],
        }
    },
    methods: {
        local() {
            let url = window.location.href
            let index = url.lastIndexOf("/") + 1
            this.id = url.slice(index)
        }
    },
    async created() {
        this.local();
        axios
            .get(
                `https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=${this.id}`
            )
            .then((res) => {
                this.musicData = res.data.songs
                console.log(this.musicData)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=${this.id}`)
            .then((res) => {
                this.songSheet = res.data;
                console.log(this.songSheet)
            })
            .catch((err) => {
                console.log(err)
            })
    }

}
</script>
<style>
.bjs {
    background: rgb(95, 114, 170);
    background: linear-gradient(0deg, rgba(95, 114, 170, 1) 80%, rgba(72, 89, 141, 1) 100%);
}

.yingcang {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}</style>