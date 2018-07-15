<template>
  <div class="HelloWorld">
    <h1>{{msg}}</h1>
    <Counter :num="num"></Counter>   <!-- v-bind的缩写 -->
    <p>Parent:{{num}}</p>

    <p>Param:{{$route.params.helloId}} </p>    <!--获取动态路由参数-->

    <p>
      <button @click="$router.push('/goodsList')"> 跳转</button>
    </p>

  </div>
</template>

<script>
import Counter from './component-message-demo' //同级目录使用 .／

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '点我加减！！！',
      num:10
    }
  },
  components:{   //声明组件
    Counter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
