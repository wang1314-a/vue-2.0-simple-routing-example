// 导入vue及VueRouter
import Vue from 'vue'
import routes from './routes'
// 创建和挂载根实例
const app = new Vue({
  el: '#app',
  data: {
    // 指定当前路由
    currentRoute: window.location.pathname
  },
  // 计算属性
  computed: {
    // 实例化一个视图组件
    ViewComponent () {
      // 根据当前路由去动态匹配视图
      const matchingView = routes[this.currentRoute]
      // 通过判断路由，返回对应的视图页面
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  // 渲染函数，生成当前组件
  render (h) {
    return h(this.ViewComponent)
  }
})

// 添加一个监听器，把当前窗口的路径名赋值给当前路由
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
