<template>
    <div class=" w-screen h-screen">
        <!-- 头部 -->
        <div class=" w-full h-[16vw] bg-[pink] flex items-center px-[4vw]">
            <Icon icon="uiw:arrow-left" class=" text-xl mr-[4vw]"/>
            <p class=" text-base">MV排行榜</p>
        </div>
        <!-- 菜单 -->
        <div class=" w-full h-[16vw]">
            <ul class=" w-full h-full flex items-center">
                <li v-for="i in menu" :key="i.id" class=" w-[20vw] flex justify-center text-sm text-[#666666]">
                    {{ i }}
                </li>
            </ul>
        </div>
        <!-- 更新时间 -->
        <div>
            <p>
                <span>更新时间</span>
                <span></span>
                
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu:['内地','港台','欧美','韩国','日本'],//菜单数据
        }
    }
    
}
</script>
<style>

</style>