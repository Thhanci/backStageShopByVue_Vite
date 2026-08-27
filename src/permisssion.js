import router from "~/router";//因为是./router/index 所以可以简写
import { getToken } from "~/composables/auth";
import { toast } from "./composables/util";

//全局前置守卫
router.beforeEach((to,from,next)=>{
    // console.log("全局前置守卫")
    
    // console.log("to",to,"from",from)

    const token = getToken()

    //没有登录，强制跳转回登录页
    if(!token && to.path !="/login"){
        toast("请先登录","error")
        return next({path:"/login"})
    }

    //防止重复登录
    if(token && to.path == "/login"){
        toast("请勿重复登录","error")
        return next({path:from.path ? from.path : "/"})
    }

    next()
}) 