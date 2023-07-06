<template>
    <div class=" w-screen bg-[#F8F9FD] px-2 dark:bg-[#1B1B23] dark:text-[#E9E9E9]" :class="{ dark: switchCheckStatus }">
        <!-- 搜索框 -->
        <div class=" w-full h-[20vw] flex pt-2 pb-2 justify-around items-center">
            <router-link :to="{ path: '/IndexView' }">
                <icon icon="uiw:arrow-left" class=" text-2xl"></icon>
            </router-link>
            <div class=" relative">
                <icon icon="prime:search" class=" absolute top-[50%] translate-y-[-50%] left-4 text-lg"></icon>
                <input type="text"
                    class=" h-[10vw] w-[70vw] rounded-3xl pl-10 border-[1px] border-[#F2F3F5] dark:bg-[#313139] dark:border-[#1B1B23]"
                    placeholder="方便便">
            </div>
            <span class=" text-base">搜索</span>
        </div>
        <!-- 菜单 -->
        <div class=" w-full mb-5 ">
            <ul class=" flex justify-evenly">
                <li class=" flex w-[25vw] items-center justify-center" style="border-right: 1px solid #E2E5EA;">
                    <Icon icon="icon-park-solid:people" color="#fe3b39" class=" text-xl mr-2" />
                    <span class=" font-medium">歌手</span>
                </li>
                <li class=" flex w-[25vw] items-center justify-center" style="border-right: 1px solid #E2E5EA;">
                    <div class=" relative">
                        <Icon icon="ri:book-3-fill" color="#fe3a3b" class=" text-xl mr-2" />
                        <Icon icon="solar:music-note-bold" color="white"
                            class=" absolute top-[50%] translate-y-[-30%] left-[50%] translate-x-[-90%] text-xs" />
                    </div>
                    <span class=" font-medium">曲风</span>
                </li>
                <li class=" flex w-[25vw] items-center justify-center" style="border-right: 1px solid #E2E5EA;">
                    <Icon icon="solar:music-notes-bold" color="#fe3a3b " class=" text-xl mr-2" />
                    <span class=" font-medium">专区</span>
                </li>
                <li class=" flex w-[25vw] items-center justify-center">
                    <Icon icon="ph:microphone-fill" color="#fe3a3b" class=" text-xl mr-2" />
                    <span class=" font-medium">识曲</span>
                </li>
            </ul>
        </div>
        <!-- 搜索历史 -->
        <div class=" w-full">
            <div class=" flex justify-between items-center">
                <span class=" text-sm font-bold tracking-widest">搜索历史</span>
                <Icon icon="fa6-regular:trash-can" color="#adaeb0" class=" text-base mr-4" />
            </div>
            <div class=" w-full  mt-2 pb-4">
                <span
                    class=" text-[#555B67] text-xs p-[6px] bg-white rounded-xl dark:bg-[#32323A] dark:text-[#E9E9E9]">薛之谦</span>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class=" w-full">
            <div class=" flex justify-between items-center">
                <span class="text-sm font-bold tracking-widest">猜你喜欢</span>
                <Icon icon="clarity:refresh-line" color="#adaeb0" class=" text-base mr-4" />
            </div>
            <div class=" w-full  mt-2 pb-4">
                <span
                    class=" text-[#555B67] text-xs p-[6px] bg-white rounded-xl dark:bg-[#32323A] dark:text-[#E9E9E9]">薛之谦</span>
            </div>
        </div>
        <!-- 轮播图 -->
        <div class=" w-screen m-auto overflow-hidden">
            <div class=" w-full  ml-1  ">
                <van-swipe class="w-[80vw] ">
                    <van-swipe-item class=" bg-white rounded-2xl mr-4 px-4 dark:bg-[#32323A]"
                        v-for="one in res.slice(0, 10) " :key="one.id">

                        <div class=" flex items-center h-[16vw] border-b border-[#E5E5E5]">
                            <span class=" text-lg font-bold">{{ one?.name }}</span>
                            <div class=" flex items-center justify-center bg-[#F2F3F5] rounded-xl w-[14vw] h-[6vw] ml-2">
                                <icon icon="uiw:caret-right" class=" text-[#3D455A] text-sm "></icon>
                                <span class=" text-[#3D455A] text-xs dark:bg-[#3A3A42]">播放</span>
                            </div>
                        </div>
                        <ul class="">
                            <li class=" h-[14vw] flex items-center" v-for="(two, i) in (one.tracks).slice(0, 20)"
                                :key="two.id">

                                <span class=" text-lg mr-5 text-[#80848F]" :class="{ 'hong': i < 3 }">{{ i + 1 }}</span>
                                <span class=" text-base font-medium mr-2 yingcang" :class="{ 'bold': i < 3 }">{{ two?.name
                                }}</span>
                                <div class="  rounded-sm flex items-center justify-center overflow-hidden">
                                    <span class=" text-[#fff]  text-xs bg-[#FE3A3B] p-[2px]" v-if="i <= 2">热</span>
                                </div>

                            </li>
                        </ul>

                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
    </div>
</template>
<script>
import { fetchToplistDetail } from "../request/index.js";

export default {
    data() {
        return {
            res: [],
            switchCheckStatus:false,
        }
    },

    async created() {
        this.res = await fetchToplistDetail()
        console.log(this.res[0])
    },


}
</script>
<style>
.yingcang {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.hong {
    color: #F53F3E
}

.bold {
    font-size: 14px;
    font-weight: 700;
}
</style>