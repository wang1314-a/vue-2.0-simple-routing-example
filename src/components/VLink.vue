<template>
  // 利用a标签的v-bind进行绑定路径及样式是否为激活状态
  // 利用v-on：click绑定点击事件，进行跳转
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    // 这儿设置插槽
    <slot></slot>
  </a>
</template>

<script>
  // 外部引入路由规则
  import routes from '../routes'

  export default {
    // 从父组件中拿到值
    props: {
      // href属性设置
      href: {
        // 类型：字符串
        type:String,
        // 必需字段
        required: true 
      }
    },
    // 计算属性
    computed: {
      // 判断是否激活，如果为激活状态，则把当前路由传递给href
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      // 定义go方法
      go (event) {
        event.preventDefault()
        // 将当前href值赋给路由
        this.$root.currentRoute = this.href
        // 不刷新页面加载所要显示的内容
        window.history.pushState(
          // 状态
          null,
          // 字符串
          routes[this.href],
          // URL地址
          this.href
        )
      }
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
