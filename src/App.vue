<template>

  <div >
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--路由链接-->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link  class="list-group-item" to="/home">Home</router-link>
          <!--<a href="#/about" class="list-group-item" >About</a>   -->
          <!--<a href="#/home" class="list-group-item">Home</a>   -->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--<div msg="atguigu">
              <h2>home组件</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <router-link to="/home/news">News</router-link>
                    &lt;!&ndash;<a href="#/home/news" class="">News</a>&ndash;&gt;
                  </li>
                  <li>
                    <router-link to="/home/message">Message</router-link>

                    &lt;!&ndash;<a href="#/home/message" class="activeClass">Message</a>&ndash;&gt;
                  </li>
                </ul>
                <div>
                  <ul>
                    <li>
                      <a href="#/home/message/detail/1" class="router-link-exact-active activeClass">message01</a>
                      &nbsp;<button>push查看</button>
                      &nbsp;<button>replace查看</button>
                    </li>
                    <li>
                      <a href="#/home/message/detail/3" class="">message03</a>
                      &nbsp;<button>push查看</button>
                      &nbsp;<button>replace查看</button>
                    </li>
                    <li>
                      <a href="#/home/message/detail/5" class="">message05</a>
                      &nbsp;<button>push查看</button>
                      &nbsp;<button>replace查看</button>
                    </li>
                  </ul>
                  <button>返回</button> <hr>
                  <ul>
                    <li>id: 1</li>
                    <li>title: message01</li>
                    <li>content: message01 content....</li>
                  </ul>
                </div>
              </div>
            </div>-->
            <!----显示路由组件-->
            <keep-alive>
              <router-view />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>


    <!--用于渲染当前路由组件-->
    <!--<router-view></router-view>-->

  </div>
</template>

<script>


  export default {


  }
</script>

<style>

</style>
