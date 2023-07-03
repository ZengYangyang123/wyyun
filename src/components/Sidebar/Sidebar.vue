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