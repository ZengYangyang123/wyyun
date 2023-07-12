<template>
    <div class=" w-screen h-screen relative">
        <!-- 头部 -->
        <div class=" flex w-full h-[16vw] items-center justify-between px-[4vw]">
            <icon icon="uiw:left" class=" text-2xl"></icon>
            <span class=" text-base text-[#656565]">游客登录</span>
        </div>
        <!-- 二维码 -->
        <div class=" flex flex-col items-center pt-[8vw]">
            <img src="/static/logo.fill.svg" alt="" class=" w-[40vw] mb-[6vw]">
            <div class=" w-[54vw] flex flex-col items-center ">
                <div class=" relative mb-[6vw]">
                    <div class=" w-[52vw] h-[52vw] absolute top-0 hidden" style="background-color: rgba(255, 255, 255, 0.8);">
                        <div class=" bjs w-[22vw] h-[9vw] rounded-2xl flex items-center justify-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                            <span class=" text-white text-sm">点击刷新</span>
                        </div>
                    </div>
                    <img :src="qrcode" alt="" class=" w-[52vw]  h-[52vw]">
                </div>
                <p class=" text-sm">
                    使用
                    <span class=" text-[#2C6FB3]">网易云音乐APP</span>
                    扫码登录
                </p>
            </div>
            <div class=" flex flex-col items-center hidden">
                <img src="/static/bg-1.png" alt="" class=" w-[180px] mb-[8vw]">
                <p class=" text-xl mb-[6vw]">扫描成功</p>
                <p class=" text-base">请在手机上确认登录</p>
            </div>
        </div>
        <!--底部图片 -->
        <div class=" absolute bottom-0">
            <img src="/static/bg-login.jpg" alt="">
        </div>

    </div>
</template>
<script>
import { getQrKey, getQrInfo, checkQrStatus } from '@/request';
import store from 'storejs'

export default {
    name: 'Login',
    data() {
        return {
            qrcode: ''
        }
    },
    async created() {
        const res = await getQrKey().catch((err) => {
            console.log(err);
        });
        const qrInfo = await getQrInfo(res.data.data.unikey).catch((err) =>
            console.log(err)
        );
        this.qrcode = qrInfo.data.data.qrimg;
        this.pollingCheck(res.data.data.unikey);
    },
    methods: {
        pollingCheck(key, interval = 2000) {
            const timer = setInterval(async () => {
                const res = await checkQrStatus(key);
                if (res.data.code === 800) {
                    alert('此二维码已过期，请刷新后重试!');
                    clearInterval(timer);
                } else if (res.data.code === 803) {
                    clearInterval(timer);
                    this.$router.push('/IndexView');
                    store.set('__m__cookie', res.data.cookie);
                }
            }, interval);
            this.$on('hook:beforeDestroy', () => clearInterval(timer));
        }
    },
    beforeDestroy() {
        // 页面销毁前做一些事
    }
}
</script>
<style>
.bjs {
    background: rgb(254, 87, 51);
    background: linear-gradient(90deg, rgba(254, 87, 51, 1) 0%, rgba(241, 20, 38, 1) 100%);
}
</style>