<template>
    <div @click="clickHandler" class=" fixed bottom-0 z-30">
        <div class=" w-screen h-screen bg-black opacity-40 z-40 " ref="drawerMask" v-if="visible"></div>
        <transition name="slide">
            <div v-show="visible" class=" w-screen h-52 bg-white absolute left-0 bottom-0 rounded-t-3xl z-50">
                <div>
                    <slot name="header">
                        <div class=" flex justify-between items-center pb-2 border-b ">
                            <p class=" mt-4 ml-4">推荐歌单</p>
                            <Icon icon="uiw:close" @click.native="closeDrawer" class=" mr-4 mt-4"></Icon>
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