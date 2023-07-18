<template>
    <div @click="clickHandler" class=" fixed bottom-0 z-[997] " :class="{ dark: switchVant }">
        <div class=" w-screen h-screen bg-black opacity-40 z-[998] " ref="drawerMask" v-if="visible"></div>
        <transition name="slide">
            <div v-show="visible"
                class=" w-10/12 h-screen bg-[#F5F5F5] text-black dark:text-white dark:bg-[#212121]  absolute left-0 bottom-0 z-[999] "
                style="overflow-y: scroll;">
                <div>
                    <slot name="headerTwo">
                        <div class=" flex justify-between  mt-5 text-xl items-center mb-4">
                            <router-link :to="{ path: '/JSX' }">
                                <div class=" flex items-center pl-5">
                                    <div class=" w-[8vw] h-[8vw] bg-black rounded-3xl mr-4 overflow-hidden">
                                        <img :src="avatarUrl" alt="" class=" w-full h-full">
                                    </div>
                                    <span class=" text-sm">{{ nickname }}</span>
                                    <icon icon="uiw:right" class=" text-base"></icon>
                                </div>
                            </router-link>
                            <div class=" pr-5">
                                <Icon icon="teenyicons:scan-outline" />
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
import { getUserAccount, getUserDetail } from '@/request/index'
export default {
    data() {
        return {
            nickname: '立即登录',//昵称
            avatarUrl: '/static/moren.webp'//头像
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

        },
    },
    async created() {
        const res = await getUserAccount()
        const res1 = await getUserDetail(res.data.account?.id)
        // console.log(res1)
        this.avatarUrl = res1.data.profile?.avatarUrl
        this.nickname = res1.data.profile?.nickname
    },
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
}
</style>