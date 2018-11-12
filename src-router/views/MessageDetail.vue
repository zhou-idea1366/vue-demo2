<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>

</template>

<script>

  const allMessageDetails = [
    {id: 1, title: 'message001', content: 'message content 001'},
    {id: 2, title: 'message002', content: 'message content 002'},
    {id: 3, title: 'message003', content: 'message content 003'},
  ]

  export default {

    computed: {
      messageDetail () {
        const id = this.$route.params.id * 1
        return allMessageDetails.find(md => md.id===id)
      }
    }

    //当请求路由不变知识参数有变化时，不会干掉当前组件对象
    /*mounted () {
      this.showUI(this.$route)
    },
    watch: {
      $route (value) {
        this.showUI(value)
      }
    },

    methods: {
      showUI (route) {
        const id = route.params.id * 1
        const messageDetail = allMessageDetails.find(md => md.id===id)
        this.messageDetail = messageDetail
      }
    }
*/
  }

</script>

<style scoped>


</style>
