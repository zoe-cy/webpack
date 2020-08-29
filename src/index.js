// // es6 const

// // babel
// // npm i babel-core babel-loader babel-plugin-transform-runtime -D
// // npm i babel-preset-env babel-preset-stage-0 -D 
// // class Test{
// //     static info = "test"
// // }
// // console.log(Test.info)
// // import $ from 'jquery'

// // import './src/index.css'
// // import './src/index.less'
// // 路径找根目录下的node-modules 中的包名，可省
// // import 'bootstrap/dist/css/bootstrap.css'

// // 导入vue ,只提供routine-only,不完整
// // 方法一 import Vue from '../node_modules/vue/dist/vue.js'
// // 方法二 修改配置文件
// import Vue from '../node_modules/vue/types'

// //导入vue-router
// import VueRouter from '../node_modules/vue-router/types'
// Vue.use(VueRouter)

// // 打包vue文件，依赖 npm i vue-loader vue-template-compiler -D
// import app from './app.vue'
// import login from './login.vue'

// var router = new VueRouter({
//     routes:[
//         {path:'/',redirect:app},
//         {path:'/login',component:login}
//     ]
// })

// var vm = new Vue({
//    el:'#app',
//    data:{
//        msg:'hhh'
//    },
//    render:c => c(app),
//    router
// })

// // mintui
// import MintUI from '../node_modules/mint-ui/lib/mint-ui.common'
// import '../../webe/src/node_modules/mint-ui/lib/style.css'
// // 安装到vue
// Vue.use(MintUI)
console.log(1)