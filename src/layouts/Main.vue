<template>
  <div class="container">
    <ul>
      <li>
      // 设置了两个路由路径
        <v-link href="/">Home</v-link>
        <v-link href="/about">About</v-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>
  // 外部引入路由规则
  import VLink from '../components/VLink.vue'

  export default {
    // 注册路由组件
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
