<template>
    <div @click="clickHandler" class=" fixed bottom-0 z-30 " :class="{dark:switchVant}">
        <div class=" w-screen h-screen bg-black opacity-40 z-40 " ref="drawerMask" v-if="visible"></div>
        <transition name="slide">
            <div v-show="visible" class=" w-10/12 h-screen bg-[#F5F5F5] text-black dark:text-white dark:bg-[#0F0F0F]  absolute left-0 bottom-0 z-50 "
                style="overflow-y: scroll;">
                <div>
                    <slot name="headerTwo">
                        <div class=" flex justify-between  mt-5 text-xl items-center mb-4">
                            <div class=" flex items-center pl-5">
                                <div class=" w-10 h-10 bg-black rounded-3xl mr-4">
                                    <img src="" alt="">
                                </div>
                                <span>583账户</span>
                                <icon icon="uiw:right"></icon>
                            </div>
                            <div class=" pr-5">
                                <Icon icon="teenyicons:scan-outline" />
                            </div>
                        </div>
                        <div class=" w-full h-screen">
                            <div class=" w-11/12 h-[34vw] vip rounded-2xl pt-3 pl-3" style="margin: 0 auto">
                                <div class=" flex items-center mb-1">
                                    <span class=" text-lg text-[#FDE6E0] font-bold mr-3">续费黑胶VIP</span>
                                    <div class=" w-16 h-3 bg-[#3E3936] rounded-xl">
                                        <div class=" w-4/6 h-full vipjdt rounded-xl"></div>
                                    </div>
                                    <span class=" text-xs text-[#8C817F] mr-3 ml-1">V4</span>
                                    <span class=" text-sm text-[#E1CDCE] p-1 rounded-2xl"
                                        style="border:1px solid #E1CDCE">会员中心</span>
                                </div>
                                <div class=" text-xs text-[#948888] mb-5">
                                    <p>礼品卡 | 毕业快乐</p>
                                </div>
                                <div class=" pt-5 w-[272px] flex justify-between" style="border-top: 0.1px solid #948888;">
                                    <p class=" text-xs text-[#948888]">受邀专享，黑胶VIP低至0.27元/天！</p>
                                    <span
                                        class=" w-8 h-8 rounded text-center -mt-3 mr-5 text-xs bg-[#E94804] text-white font-bold">受邀专享</span>
                                </div>
                            </div>
                            <div class=" w-full h-5 opacity-0"></div>
                            <div class=" w-11/12 pt-3 pl-3 rounded-2xl overflow-hidden bg-white dark:bg-[#383838] dark:text-white" style="margin: 0 auto">
                                <ul class=" w-full">
                                    <li class=" h-[10vw] flex justify-between items-center"
                                        style="border-bottom: 1px solid #F2F2F2;">
                                        <div class=" flex items-center">
                                            <icon icon="uiw:mail-o"></icon>
                                            <span class=" text-base ml-2">我的消息</span>
                                        </div>
                                        <div class=" mr-4">
                                            <icon icon="uiw:right"></icon>
                                        </div>
                                    </li>
                                    <li class=" h-[10vw] flex justify-between items-center"
                                        style="border-bottom: 1px solid #F2F2F2;">
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
                            <div class=" w-11/12 pt-3 pl-3 rounded-2xl overflow-hidden bg-white dark:bg-[#383838] dark:text-white" style="margin: 0 auto">
                                <div class=" pb-2" style="border-bottom: 1px solid #F2F2F2;">
                                    <span class=" text-xs text-[#AAAAAA]">音乐服务</span>
                                </div>
                                <ul class=" w-full mt-2">
                                    <li class=" h-[10vw] flex justify-between items-center"
                                        style="border-bottom: 1px solid #F2F2F2;">
                                        <div class=" flex items-center">
                                            <icon icon="emojione-monotone:dotted-six-pointed-star"></icon>
                                            <span class=" text-base ml-2">测趣</span>
                                        </div>
                                        <div class=" mr-4 flex">
                                            <span class=" text-xs text-[#AAA] mr-3">点击查看今日运势</span>
                                            <icon icon="uiw:right"></icon>
                                        </div>
                                    </li>
                                    <li class=" h-[10vw] flex justify-between items-center"
                                        style="border-bottom: 1px solid #F2F2F2;">
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
                            <div class=" w-11/12 pt-3 pl-3 rounded-2xl overflow-hidden bg-white dark:bg-[#383838] dark:text-white" style="margin: 0 auto">
                                <div class=" pb-2" style="border-bottom: 1px solid #F2F2F2;">
                                    <span class=" text-xs text-[#AAAAAA]">其他</span>
                                </div>
                                <ul class=" w-full mt-2">
                                    <li class=" h-[10vw] flex justify-between items-center"
                                        style="border-bottom: 1px solid #F2F2F2;">
                                        <div class=" flex items-center">
                                            <icon icon="ph:nut"></icon>
                                            <span class=" text-base ml-2">设置</span>
                                        </div>
                                        <div class=" mr-4 flex">
                                            <span class=" text-xs text-[#AAA] mr-3"></span>
                                            <icon icon="uiw:right"></icon>
                                        </div>
                                    </li>
                                    <li class=" h-[10vw] flex justify-between items-center"
                                        style="border-bottom: 1px solid #F2F2F2;">
                                        <div class=" flex items-center">
                                            <icon icon="ph:moon-light"></icon>
                                            <span class=" text-base ml-2">深色模式</span>
                                        </div>
                                        <div class=" mr-4">
                                            <v-switch :value.sync="switchVant" />
                                        </div>
                                    </li>
                                    <li class=" h-[10vw] flex justify-between items-center">
                                        <div class=" flex items-center">
                                            <icon
                                                icon="streamline:interface-time-alarm-notification-alert-bell-wake-clock-alarm">
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
export default {
    data() {
        return {
            switchVant:false,
        }
    },
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeDrawer() {
            this.$emit("dianji", false)
        },
        clickHandler(e) {
            if (e.target === this.$refs.drawerMask) {
                // this.visible = false
                // 使用vm.$emit给父组件传递参数
                this.closeDrawer()
                // this.$emit("updata:visible",false)
            }

        }
    }
}
</script>
<style scoped>
.slide-enter,
.slide-leave-to {
    transform: translateX(-110%);
}

.slide-enter-active,
.slide-leave-active {
    transition: all ease-in-out 0.5s;
}

.slide-enter-to,
.slide-leave {
    transform: translateX(0);
}</style>