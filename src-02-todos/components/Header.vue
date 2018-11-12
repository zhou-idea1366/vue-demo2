<template>

  <div>
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
    </div>
  </div>

</template>

<script>

  export default {
    props: {
      addTodo: {
        type:Function,
        required:true
      }
    },
    data () {
      return {
        title:''
      }
    },

    methods: {
      add () {
        //根據輸入的數據，封裝一個todo對象
        const title = this.title.trim()
        if(!title) {
          return alert('請輸入 ')
        }
        const todo = {
          title,
          complete:false
        }
        //調用addtodo()添加todo
        this.addTodo(todo)
        //清除輸入
        this.title=''
      }
    }


  }

</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }



</style>
