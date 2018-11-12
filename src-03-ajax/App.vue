<template>
  <div >
    <h2 v-if="!repoName">LOADING.....</h2>
    <p v-else>Most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        repoName:'',
        repoUrl:''
      }
    },
    mounted () {
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
      //使用vue-resource 发异步ajax请求获取数据
      /*this.$http.get ('https://api.github.com/search/repositories?q=v&sort=stars')
        .then(response => {
          const result = reponse.data
          this.mostRepo = result.items[0]
          //更新数状态
          this.repoName = mostRepo.name
          this.repoUrl = mostRepo.html_url

        })
        .catch (response => {
          alert('请求出错。。。。')

        })*/

      //使用axios 发异步的ajax请求获取数据
      /*axios.get (url)
        .then(response => {
          const result = reponse.data
          this.mostRepo = result.items[0]
          //更新数状态
          this.repoName = mostRepo.name
          this.repoUrl = mostRepo.html_url

        })
        .catch (response => {
          alert('请求出错。。。。')

        })*/

      //用async  await
      try {
        const response = await axios.get(url)
        const result = reponse.data
        this.mostRepo = result.items[0]
        //更新数状态
        this.repoName = mostRepo.name
        this.repoUrl = mostRepo.html_url
      } catch (e) {
        alert('请求出错。。。。')
      }



    }

  }
</script>

<style>

</style>
