<template>
    <div @click="clickHandler" class=" fixed bottom-0 z-[997]">
        <div class=" w-screen h-screen bg-black opacity-40 z-[998] fixed bottom-0" ref="drawerMask" v-if="visible"></div>
        <transition name="slide">
            <div v-show="visible"
                class=" w-screen h-[132vw] bg-white absolute dark:bg-[#363636] dark:text-[#fff] left-0 bottom-0 rounded-t-3xl z-[999]">
                <div>
                    <slot name="current">
                        <div class=" w-full flex flex-col pb-2 border-b ">
                            <p class=" mt-4 ml-4 text-base font-bold">当前播放</p>
                            <div class=" w-full h-[16vw]  flex items-center justify-between px-[4vw]">
                                <div class=" flex items-center justify-center">
                                    <Icon class="mr-[1.5vw] text-xl text-[#ADADAD]" icon="icon-park-outline:loop-once"/>
                                    <span>列表循环</span>
                                </div>
                                <div class=" flex items-center justify-center text-xl text-[#ADADAD]">
                                    <Icon
                                    icon="streamline:interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload" class=" mr-[4vw]"/>
                                    <Icon icon="lucide:folder-plus" class=" mr-[4vw]"/>
                                    <Icon icon="fa6-regular:trash-can" />
                                </div>
                            </div>
                            <!-- <Icon icon="uiw:close" @click.native="closeDrawer" class=" mr-4 mt-4"></Icon> -->
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

        }
    }
}
</script>
<style scoped>
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
</style>