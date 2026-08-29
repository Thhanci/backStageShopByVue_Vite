<template>
    <div>
        后台首页

        {{ $store.state.user.username }}

        <el-button @click="handleLogout">退出登录</el-button>

<!-- 
        <el-button @click="set">设置</el-button>
        <el-button @click="get">读取</el-button>
        <el-button @click="remove">删除</el-button>
 -->


        <!-- <el-button @click="addCount">{{count}}</el-button>
        <el-button type="primary" @click="addCount2">{{ form.count }}</el-button> -->
        <!-- <hello-world/> -->
         
    </div>
</template>

<script setup>

    import { logout } from '~/api/manager';
    import { showModal,toast } from '~/composables/util';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRouter()
    const store = useStore()

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




    // import { useCookies } from '@vueuse/integrations/useCookies'
    // const cookie=useCookies()

    // console.log(cookie);

    // function set(){
    //     cookie.set("admin-token","123456")
    // }
    // function get(){
    //     console.log(cookie.get("admin-token")) 
    // }
    // function remove(){
    //     cookie.remove("admin-token")
    // }






    // import HelloWorld from '~/components/HelloWorld.vue'
    // import {ref,reactive} from 'vue'

    // let count=ref(1)

    // function addCount(){
    //     console.log("addCount");
    //     count.value++;
    //     console.log(count.value);
    // }

    // const form = reactive({
    //     count:2
    // })

    // function addCount2(){
    //     form.count++;
    // }

</script>