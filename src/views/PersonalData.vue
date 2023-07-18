<template>
    <div class=" w-screen bg-[#F5F5F5]">
        <div class=" w-full h-[16vw] flex items-center bg-white px-[4vw] mb-[4vw]">
            <router-link :to="{ path: '/JSX' }">
                <Icon icon="prime:arrow-left" class=" text-2xl mr-[2vw]"></Icon>
            </router-link>
            <span class=" text-base">我的资料</span>
        </div>
        <div class=" w-full bg-white px-[4vw] mb-[4vw]">
            <ul class=" w-full">
                <li class=" w-full h-[16vw] flex items-center justify-between " style="border-bottom: 1px solid #F3F3F3;">
                    <span class=" text-base">头像</span>
                    <img :src="avatarUrl" alt="" class=" w-[14vw] h-[14vw] rounded-[50%]">
                </li>
                <li class=" w-full h-[16vw] flex items-center justify-between" style="border-bottom: 1px solid #F3F3F3;">
                    <span class=" text-base">昵称</span>
                    <span class=" text-[#999] text-sm">{{ nickname }}</span>
                </li>
                <li class=" w-full h-[16vw] flex items-center justify-between" style="border-bottom: 1px solid #F3F3F3;">
                    <span class=" text-base">性别</span>
                    <span class=" text-[#999] text-sm">{{ gender === 1 ? '男' : '女' }}</span>
                </li>
                <li class=" w-full h-[16vw] flex items-center justify-between">
                    <span class=" text-base">二维码</span>
                    <Icon icon="mingcute:qrcode-line" color="#999" class=" text-2xl" />
                </li>
            </ul>
        </div>
        <div class=" w-full bg-white px-[4vw] mb-[4vw]">
            <ul class=" w-full">
                <li class=" w-full h-[16vw] flex items-center justify-between " style="border-bottom: 1px solid #F3F3F3;">
                    <span class=" text-base">生日</span>
                    <span class=" text-[#999] text-sm">{{ birthday1 }}</span>
                </li>
                <li class=" w-full h-[16vw] flex items-center justify-between " style="border-bottom: 1px solid #F3F3F3;">
                    <span class=" text-base">地区</span>
                    <span class=" text-[#999] text-sm"></span>
                </li>
                <li class=" w-full h-[16vw] flex items-center justify-between " style="border-bottom: 1px solid #F3F3F3;">
                    <span class=" text-base">大学</span>
                    <span class=" text-[#999] text-sm">未填写</span>
                </li>
                <li class=" w-full h-[16vw] flex items-center justify-between " style="border-bottom: 1px solid #F3F3F3;">
                    <span class=" text-base">音乐标签</span>
                    <span class=" text-[#999] text-xs py-[1vw] px-[1vw] border-[1px] rounded-md">最爱粤语歌</span>
                </li>
                <li class=" w-full h-[16vw] flex items-center justify-between ">
                    <span class=" text-base">简介</span>
                    <span class=" text-[#999] text-sm">还没有简介</span>
                </li>
            </ul>
        </div>
        <div class=" w-full bg-white px-[4vw] mb-[4vw]">
            <ul>
                <li class=" w-full h-[16vw] flex items-center justify-between " style="border-bottom: 1px solid #F3F3F3;">
                    <span>个人主页隐私设置</span>
                </li>
                <li class=" w-full h-[16vw] flex items-center justify-between " style="border-bottom: 1px solid #F3F3F3;">
                    <span>主页模块顺序设置</span>
                </li>
            </ul>
        </div>
        <div class=" w-full bg-white px-[4vw] mb-[4vw]">
            <ul>
                <li class=" w-full h-[16vw] flex items-center justify-between ">
                    账号和绑定设置
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { getUserAccount, getUserDetail } from '@/request/index'
export default {
    data() {
        return {
            avatarUrl: '',//头像
            nickname: '',//昵称
            gender: '',//性别
            birthday: '',//生日
            birthday1: '',
            city: '',//城市
            province: '',//省份
        }
    },

    async created() {
        const res = await getUserAccount()
        const res1 = await getUserDetail(res.data.account.id)
        console.log(res1)
        this.avatarUrl = res1.data.profile.avatarUrl
        this.nickname = res1.data.profile.nickname
        this.gender = res1.data.profile.gender
        this.birthday = res1.data.profile.birthday
    },
    mounted() {
        const birthday = new Date(this.birthday * 1000);
        const year = birthday.getFullYear();
        const month = birthday.getMonth() + 1;
        const day = birthday.getDate();

        this.birthday1 = `${year}-${month}-${day}`;
        console.log(this.gender)
    }
}
</script>