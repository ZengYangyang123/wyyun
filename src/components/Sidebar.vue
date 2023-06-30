<template>
    <div  @click="clickHandlerTwo" class=" fixed bottom-0 z-30">
        <div class=" w-screen h-screen bg-black opacity-40 z-40 " ref="drawerMaskTwo" v-if="visibleTwo"></div>
        <transition name="slideTwo">
            <div v-show="visibleTwo" class=" w-11/12 h-screen bg-white absolute left-0 bottom-0 z-50">
                <div>
                    <slot name="headerTwo">
                        <div class=" flex">
                            <img src="" alt="">
                            <p>
                                <span></span>
                                <icon icon="uiw:right"></icon>
                            </p>
                            <Icon icon="teenyicons:scan-solid" />
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
        sidebar: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        closeDrawerTwo() {
            this.$emit("dianjiTwo", false)
        },
        clickHandlerTwo(e) {
            if (e.target === this.$refs.drawerMaskTwo) {
                this.closeDrawerTwo()
            }
        }
    }
}
</script>
<style scoped>
.slide-enter,
.slide-leave-to {
    transform: translatex(110%);
}

.slide-enter-active,
.slide-leave-active {
    transition: all ease-in-out 0.5s;
}

.slide-enter-to,
.slide-leave {
    transform: translatex(0);
}
</style>