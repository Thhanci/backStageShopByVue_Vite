<template>
    <!-- 登录//24 分栏 -->
    <el-row class="login-container">

        <el-col :lg="16" :md="12" class="left">
            <div>
                <div>欢迎光临</div>
                <div>此站点是《vue3+vite实战商城后台开发》视频课程的演示地址</div>
            </div>
        </el-col>

        <el-col :lg="8" :md="12" class=" right">

            <h2 class="title">欢迎回来</h2>
            <div>
                <span ></span>
                <span>账号密码登录</span>
                <span ></span>
            </div>

            <div class="flex items-center justify-center">

                <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px] flex flex-col items-center justify-center  ">
                    
                    <el-form-item prop="username">
                        <el-input v-model="form.username" placeholder="请输入用户名" @keyup.enter="onKeyUp">
                            <template #prefix>
                                <el-icon><User /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
    
                    <el-form-item prop="password">
                        <el-input type="password" v-model="form.password" placeholder="请输入密码" @keyup.enter="onKeyUp" show-password>
                          <template #prefix>
                                <el-icon><Lock /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
    
                    <el-form-item>
                        <el-button round color="#626aef" class="w-[250px]" type="primary" @click="onSubmit" :loading="loading">登 录</el-button>
                    </el-form-item>
    
                </el-form>

            </div>


        </el-col>


    </el-row>

</template>

<script  setup>
    import { reactive, ref ,onMounted,onBeforeUnmount } from 'vue'
    // import { ElNotification } from 'element-plus'
    import { toast } from '~/composables/util'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    // import { login} from '~/api/manager'
    // import { useCookies } from '@vueuse/integrations/useCookies'
    // import{
    //     setToken
    // } from '~/composables/auth'

    const store = useStore()
    const router = useRouter()

    // import { User,Lock } from '@element-plus/icons-vue'
    // do not use same name with ref


    const form = reactive({
        username:"",
        password:""
    })

    const rules = {
        username:[
            {
                required:true,
                message:'用户名不能为空',
                trigger:'blur'
            },
            // {
            //     min:3,
            //     max:5,
            //     message:'用户名长度必须是3-5个字符',
            //     trigger:'blur'
            // }
        ],
        password:[
            {
                required:true,
                message:'密码不能为空',
                trigger:'blur'
            },
        ]
    }

    const formRef=ref(null)
    const loading=ref(false)


    const onSubmit = () => {
        formRef.value.validate((valid)=>{
            if(!valid){
                return false
            }

            loading.value=true

            store.dispatch("login",form).then(res=>{
                toast("登录成功")
                router.push("/")
            }).finally(()=>{
                loading.value=false
            })


            // login(form.username,form.password)
            // .then(res=>{
            //     console.log(res);
                
            //     //01提示成功

            //     toast("登录成功",undefined,undefined,2000)

            //     // ElNotification({
            //     //     title: 'success',
            //     //     message: "登录成功",
            //     //     type: 'success',
            //     //     duration:2000
            //     // })
                
            //     //02存储token
            //     setToken(res.token)
            //     // const cookie = useCookies()
            //     // cookie.set("admin-token",res.token)
                
            //     //获取用户相关信息
            //     // getinfo().then(res2=>{
            //     //     store.commit("SET_USERINFO",res2)
            //     //     console.log(res2);
            //     // })

            //     //03跳转到后台首页
            //     router.push("/")
            // })
            // .finally(()=>{
            //     loading.value=false
            // })


            // console.log("验证通过");
            // console.log(valid)
        })
        // console.log('submit!')
    }

//监听回车事件
function onKeyUp(e){
    // console.log(e)
    // if(e.key == "Enter")
        onSubmit()
}
// //添加键盘监听
// onMounted(()=>{
//     document.addEventListener("keyup",onKeyUp)
// })
// //移除键盘监听
// onBeforeUnmount(()=>{
//     document.removeEventListener("keyup",onKeyUp)
// })

</script>

<style scoped>
.login-container{
    @apply min-h-screen bg-indigo-500;
}
.login-container .left,.login-container .right{
    @apply flex items-center justify-center flex-col;
}
.login-container .right{
    @apply bg-light-50  flex-col;
}
.left>div>div:first-child{
    @apply text-left font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child{
    @apply text-gray-200 text-sm;
}
.right .title{
    @apply font-bold text-3xl text-gray-800;
}
.right>div:first-child{
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}
.right .line{
    @apply h-[1px] w-16 bg-gray-200;
}
</style>