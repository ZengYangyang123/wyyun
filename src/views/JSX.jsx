import styled from 'styled-components-vue';
import { getUserAccount, getUserDetail, Userdata } from '@/request/index'
const Wrapper = styled.div`
    .fen {
        background: rgb(254,252,253);
        background: linear-gradient(0deg, rgba(254,252,253,1) 0%, rgba(254,242,242,1) 100%);
        border: 1px solid #F2E6E6;
    }
    .qianhuang {
        background: rgb(254,253,249);
        background: linear-gradient(0deg, rgba(254,253,249,1) 0%, rgba(253,245,232,1) 100%);
        border:1px solid #F6F0D6;
    }
    .lan {
        background: rgb(252,253,255);
        background: linear-gradient(0deg, rgba(252,253,255,1) 0%, rgba(240,245,251,1) 100%);
        border:1px solid #E7ECF2;
    }
    .donghua {
        transition: all 1s;
    }

    .gao {
        height: 92vw;
    }

    .yc {
        opacity: 1;
    }

`
export default {
    render() {
        return <Wrapper>
            <div class=" w-screen h-screen pt-[70vw] relative">
                <img src={this.backgroundUrl} alt="" class=" w-full h-[70vw] absolute top-0" />
                {/* 头部 */}
                <div class=" w-screen h-[16vw]  flex items-center justify-between px-[4vw] fixed top-0 z-[999]">
                    <router-link to={`/IndexView`}>
                        <Icon icon="uiw:arrow-left" class=" text-white text-xl"></Icon>
                    </router-link>
                    <Icon icon="prime:ellipsis-v" class="text-white text-xl"></Icon>
                </div>
                <div class=" bg-[#F4F4F4] w-full px-[4vw] relative pt-[1px]">
                    {/* TA的照片 */}
                    <div class=" absolute right-[4vw] -top-[16vw] h-[8vw] border-[1px] border-white rounded-2xl px-[3vw] flex items-center ">
                        <span class=" text-white text-sm">TA的照片</span>
                    </div>
                    {/* 个人信息 */}
                    <div class=" w-full  bg-[#FFFFFF] rounded-lg -mt-[6vw] pt-[1px] donghua" style="box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1)">
                        {/* 头像 */}
                        <div class=" w-[20vw] h-[20vw] rounded-[50%] mx-[auto] -mt-[10vw] overflow-hidden">
                            <img src={this.avatarUrl} alt="" class=" w-full h-full" />
                        </div>
                        {/* 信息 */}
                        <div class= {`flex items-center flex-col mt-[2vw] w-full h-[40vw] overflow-hidden donghua ${this.isVisible ? 'gao' : ''}`}
                        >
                            <div class=" h-[7vw]">
                                <p class=" text-lg ">{this.nickname}</p>
                            </div>
                            <ul class="flex text-sm text-[#999999] my-[2vw]">
                                <li class="mr-[4vw]">
                                    <span class=" mr-[1vw]">{this.follows}</span>
                                    <span>关注</span>
                                </li>
                                <span class="text-xs text-[#E6E6E6]">|</span>
                                <li class="mx-[4vw]">
                                    <span class=" mr-[1vw]">{this.followeds}</span>
                                    <span>粉丝</span>
                                </li>
                                <span class="text-xs text-[#E6E6E6]">|</span>
                                <li class="ml-[4vw]">
                                    <span>Lv.{this.level}</span>
                                </li>
                            </ul>
                            <div class="flex mt-[2vw]">
                                <div class="h-[6vw] border-[1px] border-[#E6E6E6] rounded-md px-[2vw] flex items-center mr-[2vw]">
                                    <span class=" text-xs">IP: {this.province}</span>
                                </div>
                                <div class="h-[6vw] border-[1px] border-[#E6E6E6] rounded-md px-[1vw] flex items-center">
                                    <Icon icon="prime:angle-right" class="text-3xl"></Icon>
                                </div>
                            </div>
                            <div class="flex mt-[4vw] mb-[6vw]">
                                <div class=" h-[9vw] px-[4vw] border-[1px] border-[#E6E6E6] flex items-center rounded-2xl mr-[2vw]">
                                    <span class="text-sm font-bold">编辑资料</span>
                                </div>
                                <div class="flex items-center justify-center border-[1px] border-[#E6E6E6] rounded-[50%] h-[9vw] w-[9vw]"
                                    onClick={() => this.isVisible = !this.isVisible}
                                >
                                    <Icon icon="prime:chevron-down" class="text-2xl"></Icon>
                                </div>
                            </div>
                            <div class= {`w-full px-[4vw] donghua opacity-0 ${this.isVisible ? 'yc' : ''}`}>
                                <van-swipe class=" w-full overflow-hidden">
                                    <van-swipe-item class=" h-[20vh] bg-[#F5F5F5] mr-[2vw] rounded-lg flex flex-col items-center" style="width:30vw">
                                        <img src="" alt="" class=" w-[14vw] h-[14vw] rounded-[50%] my-[2vw] " />
                                        <p class="text-[#313131] text-xs">一颗狼星</p>
                                        <p class="text-xs text-[#929292] my-[2vw]">你可能喜欢</p>
                                        <div class="w-[20vw] h-[4vh] text-[#DD4949] border-[1px] border-[#DD4949] rounded-2xl flex items-center justify-center">
                                            <span class="mr-[2vw] text-lg">+</span>
                                            <span class="text-xs">关注</span>
                                        </div>
                                    </van-swipe-item>
                                </van-swipe>
                            </div>
                        </div>
                    </div>
                    {/* 内容 */}
                    <div class="">
                        <div>
                            <ul class="text-[#90949F] text-sm flex font-bold  justify-center items-center h-[16vw]">
                                <li class="">
                                    <span>主页</span>
                                </li>
                                <li class="mx-[14vw]">
                                    <span>动态</span>
                                </li>
                                <li>
                                    <span>播客</span>
                                </li>
                            </ul>
                        </div>
                        {/* 主页 */}
                        <div class="w-full ">
                            {/* 音乐品味 */}
                            <div class=" w-full bg-white rounded-lg px-[4vw] pt-[6vw] pb-[4vw] mb-[6vw]">
                                <p class=" text-base tracking-[1vw] font-bold">音乐品味</p>
                                <ul class="flex justify-between mt-[3vw]">
                                    <li class=" w-[26vw] h-[32vw] rounded-xl fen flex flex-col justify-between py-[2vw] pl-[2vw]">
                                        <div>
                                            <p class=" text-xs text-[#828085]">我的喜欢</p>
                                            <p class=" text-sm text-[#51555E] mt-[1vw]">371首</p>
                                        </div>
                                        <div class="flex">
                                            <Icon icon="uiw:heart-on" class=" text-sm text-[#B1B0AE] mr-[1vw]"></Icon>
                                            <p class=" text-xs text-[#B1B0AE]">喜欢的音乐</p>
                                        </div>
                                    </li>
                                    <li class=" w-[26vw] h-[32vw] rounded-xl qianhuang flex flex-col justify-between py-[2vw] pl-[2vw]">
                                        <div>
                                            <p class=" text-xs text-[#828085]">累计听歌</p>
                                            <p class=" text-sm text-[#51555E] mt-[1vw]">{this.listenSongs}首</p>
                                        </div>
                                        <div class="flex">
                                            <Icon icon="fa6-solid:ranking-star" class=" text-sm text-[#B1B0AE] mr-[1vw]"></Icon>
                                            <p class=" text-xs text-[#B1B0AE]">听歌排行</p>
                                        </div>
                                    </li>
                                    <li class=" w-[26vw] h-[32vw] rounded-xl lan flex flex-col justify-between py-[2vw] pl-[2vw]">
                                        <div>
                                            <p class=" text-xs text-[#828085]">本周关键词</p>
                                            <p class=" text-sm text-[#51555E] mt-[1vw]">属于你的音乐档案</p>
                                        </div>
                                        <div class="flex">
                                            <Icon icon="ant-design:hourglass-filled" class=" text-sm text-[#B1B0AE] mr-[1vw]"></Icon>
                                            <p class=" text-xs text-[#B1B0AE]">黑胶时光机</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* 创建的歌单 */}
                            <div class=" w-full bg-white rounded-lg p-[4vw] mb-[6vw]">
                                {/* 创建的歌单 */}
                                <div class=" flex items-center">
                                    <span class=" text-base tracking-[1vw] font-bold">创建的歌单</span>
                                    <span class=" text-xs text-[#9C9C9C]">({this.songSheet.slice(1, 8).length}个)</span>
                                </div>
                                {/* 歌单 */}
                                <div class="w-full">
                                    {this.songSheet.slice(1, 8).map(item =>
                                        <div class="w-full h-[16vw] flex my-[2vw]">
                                            <div class="mr-[2vw]">
                                                <img src={item.coverImgUrl} alt="" class=" w-[16vw] h-[16vw] rounded-xl" />
                                            </div>
                                            <div class=" flex flex-col justify-center">
                                                <p class=" text-[#333333] text-sm yingcang mb-[1vw]">{item.name}</p>
                                                <p class=" text-[#818181] text-xs">{item.trackCount}首</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* 收藏的歌单 */}
                            <div class=" w-full bg-white rounded-lg px-[4vw] py-[4vw] mb-[6vw]">
                                {/* 收藏的歌单 */}
                                <div class=" flex items-center">
                                    <span class=" text-base tracking-[1vw] font-bold">收藏的歌单</span>
                                    <span class=" text-xs text-[#9C9C9C]">({this.songSheet.slice(8).length})</span>
                                </div>
                                {/* 歌单 */}
                                <div class=" w-full">
                                    {this.songSheet.slice(8, 18).map(i =>
                                        <div class="w-full h-[16vw] flex my-[4vw]">
                                            <div class="mr-[2vw]">
                                                <img src={i.coverImgUrl} alt="" class=" w-[16vw] h-[16vw] rounded-xl" />
                                            </div>
                                            <div class=" flex flex-col justify-center">
                                                <p class=" text-[#333333] text-sm yingcang mb-[1vw]">{i.name}</p>
                                                <p class=" text-[#818181] text-xs">
                                                    <span>{i.trackCount}首</span>
                                                    ,
                                                    <span>By{i.creator.nickname}</span>
                                                    ,
                                                    <span>{(i.playCount / 10000).toFixed(1)}播放万次</span>
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {this.songSheet.slice(8).length > 10 ? <div class=" w-[92vw] h-[14vw] -ml-[8vw] flex items-center justify-center" style="border-top:1px solid #E6E6E6">
                                        <span class=" text-sm text-[#999999]">查看全部</span>
                                        <Icon icon="prime:chevron-right" class="text-[#999999] text-lg"></Icon>
                                    </div> : null}
                                </div>
                            </div>
                            {/* 基本信息 */}
                            <div class=" w-full bg-white rounded-lg p-[4vw] mb-[6vw]">
                                {/* 基本信息 */}
                                <div class=" flex items-center">
                                    <span class=" text-base tracking-[1vw] font-bold">基本信息</span>
                                </div>
                                {/* 信息 */}
                                <div class=" w-full text-sm text-[#909090]">
                                    <p class="my-[2vw]">
                                        <span>村龄：</span>
                                        <span class="text-[#656565]">4年(2018年08月注册)</span>
                                    </p>
                                    <p class="my-[2vw]">
                                        <span>性别：</span>
                                        <span class="text-[#656565]">{this.gender === 1 ? '男' : '女'}</span>
                                    </p>
                                    <p class="my-[2vw]">
                                        <span>年龄：</span>
                                        <span class="text-[#656565]">18</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 动态 */}
                        <div class="w-full h-[90vh] flex justify-center hidden">
                            <p class=" text-sm text-[#808080] mt-[10vw]">暂时还没有动态哦</p>
                        </div>
                        {/* 播客 */}
                        <div class="w-full h-[90vh] flex items-center flex-col hidden">
                            <p class=" text-sm font-bold tracking-[2px] mt-[20vw]">暂无声音</p>
                            <p class=" text-xs text-[#7C7C7C] tracking-[2px] my-[2vw]">开始录制你的第一个声音吧</p>
                            <div class="bg-[red] w-[32vw] h-[12vw] rounded-3xl flex items-center justify-center mt-[4vw]">
                                <span class=" text-white text-sm">去录制</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>

    },
    data() {
        return {
            isVisible: false,
            avatarUrl: '',//头像
            nickname: '',//昵称
            follows: '',//关注
            followeds: '',//粉丝
            level: '',//等级
            province: '',//省份
            backgroundUrl: '',//背景图片
            listenSongs: '',//累计听歌
            userId: '',//用户ID
            songSheet: [],//歌单
            gender: '',//性别
        }
    },
    async created() {
        const res = await getUserAccount()
        // 用户信息
        const res1 = await getUserDetail(res.data.account.id)
        // 歌单
        const res2 = await Userdata(res1.data.profile.userId)
        console.log(res2)
        this.avatarUrl = res1.data.profile.avatarUrl
        this.nickname = res1.data.profile.nickname
        this.follows = res1.data.profile.follows
        this.followeds = res1.data.profile.followeds
        this.level = res1.data.level
        this.province = res1.data.profile.province
        this.backgroundUrl = res1.data.profile.backgroundUrl
        this.listenSongs = res1.data.listenSongs
        this.userId = res1.data.profile.userId
        this.songSheet = res2.data.playlist
        this.createTime = res1.data.createTime
        this.gender = res1.data.profile.gender
    },
}