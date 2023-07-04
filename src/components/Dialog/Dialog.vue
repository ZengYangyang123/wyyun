<template>
    <div class=" w-[320px] fixed text-[16px] rouded-[12px] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div class=" pt-[26px] font-medium leading-[24px] text-center">{{ title }}</div>
        <div>
            <div class=" pt-[8px] text-[#646566] pb-[26px] px-[24px] text-[14px]">{{ message }}</div>
        </div>
        <div class=" flex text-center h-[48px] items-center border-t border-[#ebebf0] ">
            <div class=" flex-1 text-center border-r border-[#ebebf0] box-border leading-[48px]">
                <span>取消</span>
            </div>
            <div class=" flex-1 leading-[48px]">
                <span>确认</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Dialog',
    props:{
        title:{
            type:String
        },
        message:{
            type:String,
            required:true
        }
    }
}
</script>