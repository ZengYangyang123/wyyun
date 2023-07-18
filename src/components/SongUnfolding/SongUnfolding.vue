<template>
    <div @click="clickHandler" class=" fixed top-0 left-0">
        <transition name="slide">
            <div v-show="visible" class=" w-screen h-screen bjsl">
                <div>
                    <slot name="SongUnfolding">
                        <!-- 头部 -->
                        <div class=" w-screen flex justify-between items-center px-[4vw] py-[4vw]">
                            <Icon icon="eva:arrow-ios-downward-fill" color="white" class=" text-3xl"
                                @click.native="closeDrawer" />
                            <div class=" flex flex-col items-center">
                                <p class=" text-base text-white">{{ $player._currentTrack.name ===  undefined ? Songname : $player._currentTrack.name }}</p>
                                <p>
                                    <span class=" text-base" style="color: rgba(255, 255, 255, .7);">{{ $player._currentTrack.name === undefined ? singer : $player._currentTrack.ar[0].name}}</span>
                                    <span class=" text-xs text-white px-[1vw]  bg-[#575B5C] rounded">关注</span>
                                </p>
                            </div>
                            <Icon icon="ri:share-circle-line" color="white" class=" text-2xl" />
                        </div>
                        <!-- 唱片 -->
                        <div class=" w-full flex flex-col -mt-[8vw]" v-if="!lyricsSwitching"
                            @click="lyricsSwitching = !lyricsSwitching">
                            <div class=" w-full h-[30vw] flex justify-center relative z-[2]">
                                <img src="/static/changpian2.png" alt=""
                                    class=" h-[30vw] absolute top-[50%] left-[50%] rotate"
                                    :class="{ 'rotatetwo': $player._playing }">
                            </div>
                            <div class=" w-full flex justify-center relative" :class="{ 'rotate-image': $player._playing }">
                                <img src="/static/changpian1.png" alt="" class=" h-[70vw]">
                                <img :src="$player._currentTrack.name === undefined ? Singinglistdata[0].al.picUrl : $player._currentTrack.al.picUrl"
                                    alt=""
                                    class=" absolute w-[44vw] h-[44vw] top-[50%] left-[50%] rounded-[50%] translate-x-[-50%] translate-y-[-50%]">
                            </div>
                        </div>
                        <!-- 歌词 -->
                        <div class=" w-full h-[90vw] flex items-center flex-wrap px-[6vw] justify-center overflow-hidden relative internalShadow"
                            v-if="lyricsSwitching" @click="lyricsSwitching = !lyricsSwitching">
                            <div class="absolute top-0 transition-all duration-1000" :style="{ top: -$player.lineHieght + 'vw' }">
                                <div v-for="(line, index) in $player.lyricLines" :key="index" class="text-[hsla(0,0%,88.2%,.8)] line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center" :style="{ color: index === $player.lineIndex ? '#fff' : 'hsla(0,0%,88.2%,.7)' }">
                                    {{line.txt }}
                                </div>
                            </div>
                        </div>
                    </slot>
                </div>
                <div>
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import store from 'storejs'

export default {
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            Singinglistdata: [],//歌单数据
            lyricsSwitching: false,//唱片与歌词切换
            Songname:'',//歌曲名
            singer:'',//歌手
            backgroundImageUrl:'',//图片
        }
    },
    async created() {
        this.Singinglistdata = store.get('All');//获取缓存的歌单
        this.Songname = this.Singinglistdata[0].name
        this.singer = this.Singinglistdata[0].ar[0].name
        this.backgroundImageUrl = this.Singinglistdata[0].al.picUrl
        
    },
    methods: {
        // 点击过渡动画
        closeDrawer() {
            this.$emit("SUdianji", false)
        },
        clickHandler(e) {
            if (e.target === this.$refs.drawerMask) {
                this.closeDrawer()
            }
        },
    },

}


</script>
<style>
/* 进场退场动画 */
.slide-enter,
.slide-leave-to {
    transform: translateY(110%);
}

.slide-enter-active,
.slide-leave-active {
    transition: all ease-in-out 0.5s;
}

.slide-enter-to,
.slide-leave {
    transform: translateY(0);
}


/* 背景色 */
.bjsl {
    background: rgb(63, 126, 251);
    background: linear-gradient(0deg, rgba(63, 126, 251, 1) 0%, rgba(38, 217, 197, 1) 100%);
}

/* 唱片旋转动画 */
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

/* 唱针动画 */
.rotate {
    transform-origin: left top;
    /* 设置旋转中心为左上角 */
    transform: rotate(-45deg);
    /* 进行逆时针旋转 */
    transition: all 1s;
}

.rotatetwo {
    transform: rotate(0deg);
    /* 进行逆时针旋转 */
}
</style>