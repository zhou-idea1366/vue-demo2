<template>

  <ul class="todo-main" >
      <Item v-for="(todo, index) in todos" :key="index" :todo="todo" :deleteTodo="deleteTodo" :index="index"/>

  </ul>

</template>

<script>
  import Item from './Item.vue'
  export default {
    //指定接收屬性的屬性名
    //接收的所有屬性都會成為組件對象的屬性
    props: ['todos','deleteTodo'],

    components:{
      Item
    }

  }

</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
