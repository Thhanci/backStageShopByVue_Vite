<template>
    <div>
        后台首页

        {{ $store.state.user.username }}


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