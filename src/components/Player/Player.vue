<template>
    <div class=" w-screen h-[16vw] bg-[#F5F5F5] flex items-center justify-between px-[4vw] fixed bottom-0 z-[60]">
        <!-- 唱片 -->
        <div class="h-full relative flex items-center" :class="{ 'rotate-image': $player._playing }">
            <img src="/static/changpian1.png" alt="" class="w-[12vw] h-[12vw]">
            <img :src="$player._playing === false ? SongList[0].al.picUrl : $player._currentTrack.al.picUrl" alt=""
                class="w-[8vw] h-[8vw] rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        </div>
        <!-- 歌名 -->
        <div class=" w-[56vw]  h-full flex items-center" @click="drawerSU = !drawerSU">
            <p class=" text-sm yingcang">{{ $player._playing === false ? SongList[0].name :
                $player._currentTrack.name
            }}
                <span class=" text-xs ml-[2vw]">{{ $player._playing === false ? SongList[0].ar[0].name :
                    $player._currentTrack.ar[0].name }}</span>
            </p>
        </div>
        <!-- 按钮 -->
        <div class=" flex items-center">
            <div class=" mr-[4vw] relative  w-[8vw] h-[8vw] flex items-center justify-center" @click="Videostatus">
                <van-circle v-model="$player._progress" :rate="$player._duration" :stroke-width="160" size="8vw"
                    color="#3F475C" layer-color="#C7CACF" fill="#fff" />
                <div
                    class=" w-[7vw] h-[7vw] rounded-[50%] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                </div>
                <Icon :icon="$player._playing ? play_1[1] : play_1[0]"
                    class=" text-base text-[#3F475C] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                </Icon>
            </div>
            <div @click="drawerVisible = !drawerVisible">
                <Icon icon="iconamoon:playlist-fill" class=" text-2xl"></Icon>
            </div>
        </div>
        <!-- 展开歌单 -->
        <Current :visible="drawerVisible" @dianji="(e) => (drawerVisible = e)" class=" -ml-[4vw]">
            <template #current>

            </template>
            <div class=" w-full">
                <ul class=" w-full h-[102vw]" style="overflow-y: auto;">
                    <li class=" w-full h-[12vw]  flex items-center justify-between px-[4vw]" v-for="item in SongList"
                        :key="item.id" @click="dianjibofang(item.id)">
                        <p class=" flex items-center">
                            <span class="yingcang">{{ item.name }}</span>
                            <span class=" text-[#ACACAC] text-lg">-</span>
                            <span class=" text-xs text-[#ACACAC] yingcang">{{ item.ar[0].name }}</span>
                        </p>
                        <Icon icon="ei:close" color="#d2d2d2" class=" text-2xl" />
                    </li>
                </ul>
            </div>
        </Current>
        <!-- 歌曲详情 -->
        <SongUnfolding :visible="drawerSU" @SUdianji="(e) => (drawerSU = e)">
            <template #SongUnfolding>

            </template>
            <!-- 播放器按钮 -->
            <div class=" w-full absolute bottom-0">
                <!-- 关注评论 -->
                <div class=" flex h-[12vw] items-center justify-evenly">
                    <Icon icon="bi:heart" color="white" class=" text-2xl" />
                    <Icon
                        icon="streamline:interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload"
                        color="white" class=" text-2xl" />
                    <div class=" border-[2px] border-[#fff] rounded-[50%] w-[8vw] h-[8vw] flex items-center justify-center">
                        <span class=" text-base text-white">唱</span>
                    </div>
                    <Icon icon="uil:comment-lines" color="white" class=" text-3xl" />
                    <Icon icon="ri:more-2-fill" color="white" class=" text-3xl" />
                </div>
                <!-- 进度条 -->
                <div class=" my-[6vw] flex items-center justify-center">
                    <span class=" text-xs" style="color: rgba(255, 255, 255, .7);">{{
                        timeModification($player._progress) }}</span>
                    <vue-slider v-model="$player.progress" :duration="0" :process="true" tooltip="none"
                        :drag-on-click="true" :min="0" :max="$player._duration" :interval="0.1" :dotSize="10"
                        class="  mx-[3vw]" style="width: 68vw;height: 1vw;" />
                    <span class=" text-xs" style="color: rgba(255, 255, 255, .4);">{{
                        timeModification($player._duration) }}</span>
                </div>
                <!-- 播放暂停 -->
                <div class=" flex justify-evenly items-center mb-[6vw]">
                    <Icon icon="icon-park-outline:loop-once" color="white" class=" text-3xl" />
                    <Icon icon="ph:skip-forward-fill" color="white" class=" text-3xl" style="transform: rotateY(180deg);" />
                    <Icon :icon="$player._playing ? play_2[1] : play_2[0]" color="white" class=" text-5xl"
                        @click.native="open" />
                    <Icon icon="ph:skip-forward-fill" color="white" class=" text-3xl" />
                    <Icon icon="octicon:three-bars-16" color="white" class=" text-3xl"
                        @click.native="drawerVisible = !drawerVisible" />
                </div>
            </div>

        </SongUnfolding>
    </div>
</template>
<script>
import Current from '../Current/Current.vue';
import SongUnfolding from '@/components/SongUnfolding/SongUnfolding.vue'
import Player from './player';
import store from 'storejs'

export default {
    components: { Current, SongUnfolding },
    data() {
        return {
            player: new Player(),
            play_1: ['ph:play-fill', 'zondicons:pause'],//播放
            visible: true,
            drawerVisible: false,
            drawerSU: false,
            SongList: [],//歌曲列表
            value: 0,//滑块的值
            play_2: ['zondicons:play-outline', 'zondicons:pause-outline'],//播放状态
        };
    },
    created() {
        window.$player = this.player;
    },
    methods: {
        // 播放暂停事件
        Videostatus() {
            if ($player.list === undefined) {
                window.$player.replacePlaylist(
                    this.SongList.map((song) => song.id),
                    '',
                    ''
                )
            }
            else {
                $player.playOrPause()
            }
            console.log($player.lyricLines)
        },
        // 展开歌单点击播放
        dianjibofang(id) {
            window.$player.replacePlaylist(
                this.SongList.map((song) => song.id),
                '',
                '',
                id
            )
        },
        // 详情歌单播放暂停
        open() {
            if ($player.list === undefined) {
                window.$player.replacePlaylist(
                    this.SongList.map((song) => song.id),
                    '',
                    ''
                )
            }
            else {
                $player.playOrPause()
            }
        },
        // 时间修改
        timeModification(time) {
            const minutes = Math.floor(time / 60);
            return `${String(minutes).padStart(2, '0')}:${String(
                Math.floor(time % 60)
            ).padStart(2, '0')}`;
        },
    },
    async created() {
        this.SongList = store.get('All');
    },
}
</script>
<style>
.rotate-image {
    animation: rotation 10s infinite linear;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}


/* 进度条样式 */
.vue-slider-process {
    background: rgba(255, 255, 255, .7) !important;
}

.vue-slider-rail {
    background: rgba(255, 255, 255, .4) !important;
}

.vue-slider-dot-tooltip-top {
    display: none;
}
</style>