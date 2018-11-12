<template>
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoMain :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos"
                    :deleteCompleteTodos="deleteCompleteTodos"
                    :selectAllTodos="selectAllTodos"/>

      </div>
    </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Main from './components/Main.vue'
  import storageUtils from './utils/storageUtils'


  export default {
    data () {
      return {
        todos: storageUtils.readTodos()
//        todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
        /*[
          {title:'吃飯', complete:false},
          {title:'睡覺', complete:false},
          {title:'打代碼', complete:false},

        ]*/

      }
    },
    methods: {
      //添加
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      //删除
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      //删除已完成的todo
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)

      },
      //全选或全不选所有todo
      selectAllTodos (isCheck) {
        this.todos.forEach(todo => todo.complete = isCheck)
      }


    },

    watch: {
      todos: {
        deep:true,  //深度监视
        handler: function (value) {
//          localStorage.setItem('todos_key',JSON.stringify(value))
          storageUtils.saveTodos(value)
        }
      }
    },

    components:{
      TodoHeader:Header,
      TodoFooter:Footer,
      TodoMain:Main
    }
  }

</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
