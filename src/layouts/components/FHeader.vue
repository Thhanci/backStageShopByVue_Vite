<template>
    <!-- 头部 -->
    <div class="f-header">
        
        <span class="logo">
            <el-icon><ElemeFilled /></el-icon>
            帝莎编程
        </span>

        <el-icon class="icon-btn"><Fold /></el-icon>

        <el-tooltip effect="dark" content="刷新" placement="bottom">
            <el-icon class="icon-btn" @click="handleRefresh"><Refresh /></el-icon>
        </el-tooltip>

         <div class="ml-auto flex items-center">        <!-- style="margin: auto;" -->
            
            <el-tooltip effect="dark" content="全屏" placement="bottom">
                <el-icon class="icon-btn" @click="toggle">
                    <FullScreen v-if="!isFullscreen"/>
                    <Aim v-else/>
                </el-icon>
            </el-tooltip>

              <el-dropdown class="dropdown" @command="handleCommand">
                <span class="flex items-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
                    {{ $store.state.user.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

         </div>

        <!-- {{ $store.state.user }} -->
        <!-- {{ $store.state.user.avatar }}  -->
        <!-- $store.state.user.avatar 图片已删除https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af03d1b2aeb.jpg -->
    </div>
</template>

<script setup>

    import { logout } from '~/api/manager';
    import { showModal,toast } from '~/composables/util';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { useFullscreen } from '@vueuse/core'

    const { 
        //是否全屏状态
        isFullscreen, 
        //切换全屏
        toggle 
    } = useFullscreen()


    const router = useRouter()
    const store = useStore()

    const handleCommand = (c)=>{
        // console.log(c)
        switch (c){
            case "logout":
                handleLogout()
                break;
            case "rePassword":
                console.log("修改密码")
                break;
        }
    }

    //刷新
    const handleRefresh = ()=>location.reload()


    function handleLogout(){
        showModal("是否要退出登录?").then(res=>{
            // console.log("退出登录")
            logout()
            .finally(()=>{
                //移除cookie里的token //清除当前用户状态vuex
                store.dispatch("logout")
                //跳转回登录页
                router.push("/login")
                //提示退出登录成功
                toast("退出登录成功")
            })
        })
        .catch(
            //点击取消
        )
    }



</script>

<style>
.f-header{
    @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 right-0 left-0;
    height: 64px;
}
.logo{
    width: 250px;
    @apply flex justify-center items-center text-xl font-thin; 
}
.icon-btn{
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
}

.icon-btn:hover{
    @apply bg-indigo-600
}

.f-header .dropdown{
    height: 64px;
    cursor: pointer;
    @apply flex justify-center items-center mx-5;
}
</style>