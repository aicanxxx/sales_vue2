<template>
  <div class="index-wrap">
    <div class="index-left left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        
        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="index-right left">
      <slide-show :slides="slides" :inv="inv"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item left" v-for="(item,index) in boardList" :class="[{'line-last':index % 2 !=0},'index-board-'+index]">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
            <div class="index-board-button">
              <a :href="item.url" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from './slideShow'
export default {
  components:{
      slideShow
  },
  created(){
    this.$http.get('api/getNewsList').then((res)=>{//post请求会出现问题
        this.newsList=res.data;
    },(err)=>{
        console.log(err);
    })
  },
  data () {
    return {
        boardList:[{
            title:'开放产品',
            desc:'这是一款开放产品',
            url:'/detail/count',
            saleout:false
        },{
            title:'品牌营销',
            desc:'品牌营销帮助你的产品更好的找到定位',
            url:'/detail/forecast',
            saleout:false
        },{
            title:'使命必达',
            desc:'快速迭代永远保持最前端的速度',
            url:'/detail/analysis',
            saleout:false
        },{
            title:'永攀高峰',
            desc:'帮你勇闯高峰，到达事业巅峰',
            url:'/detail/publish',
            saleout:false
        }],
        inv:2000,
        slides:[{
            src:require('../assets/slideShow/pic1.jpg'),
            title:'pic1',
            url:'/detail/count'
        },{
            src:require('../assets/slideShow/pic2.jpg'),
            title:'pic2',
            url:'/detail/forecast'
        },{
          src:require('../assets/slideShow/pic3.jpg'),
          title:'pic3',
          url:'/detail/analysis'
      },{
          src:require('../assets/slideShow/pic4.jpg'),
          title:'pic4',
          url:'/detail/publish'
      }],
        productList:{
            pc:{
                title:"PC产品",
                list:[{
                    name:'数据统计',
                    url:'/detail/count'
                },{
                    name:'数据预测',
                    url:"/detail/forecast"
                },{
                    name: '流量分析',
                    url: '/detail/analysis',
                    hot: true
                },{
                    name: '广告发布',
                    url: '/detail/publish'
                }]
            },
            app:{
                title:'手机应用类',
                last:true,
                list:[{
                    name: '91助手',
                    url: 'http://weixin.com'
                },{
                    name: '产品助手',
                    url: 'http://twitter.com',
                    hot: true
                },{
                    name: '智能地图',
                    url: 'http://maps.com'
                },{
                    name: '团队语音',
                    url: 'http://phone.com'
                }]
            }
        },
        newsList:[],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .index-wrap{
    width: 1200px;
    margin: 0 auto;
  }
  .index-left{
    width:300px;
    text-align: left;
  }
  .index-right{
    width:900px;
    text-align: left;
  }
  .index-left-block{
    margin: 0 15px 15px 15px;
    background-color: lavenderblush;
    font-family: "微软雅黑", "黑体", "宋体", sans-serif;
  }
  
  .index-left-block h2{
    font-size: 16px;
    color: white;
    padding: 5px 15px;
    background-color: thistle;
    margin-bottom: 20px;
  }
  .index-left-block h3{
    font-size: 14px;
    padding: 0 15px 5px 15px;
  }
  .index-left-block .hr{
    border-bottom: 1px solid thistle;
    margin-bottom: 20px;
  }
  .index-left-block ul{
    padding: 10px 20px;
  }
  .index-left-block li{
    padding-bottom: 5px;
  }
  .index-left-block a{
    color: #000;
    font-size:14px;
  }
  .hot-tag{
    background-color: red;
    color: white;
    font-size: 12px;
  }
  .lastest-news{
    min-height: 512px;
  }
  .index-board-list{
    overflow: hidden;
  }
  .index-board-item{
    width: 400px;
    box-shadow: 2px 3px 5px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner{
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-item-inner h2{
    font-size: 16px;
    padding-bottom: 15px;
  }
  .index-board-item-inner p{
    font-size: 12px;
    padding-bottom: 15px;
  }
  .index-board-button{
    width: 100px;
    height:30px;
    background-color: thistle;
    text-align: center;
    line-height: 30px;
  }
  .index-board-button .button{
    font-size: 14px;
    color: #fff;
  }
  .line-last{
    margin-right: 0;
  }
  .index-board-0{
    background: url("../assets/images/1.png") white 20px 20px no-repeat;
  }
  .index-board-1{
    background: url("../assets/images/2.png") white 20px 20px no-repeat;
  }
  .index-board-2{
    background: url("../assets/images/3.png") white 20px 20px no-repeat;
  }
  .index-board-3{
    background: url("../assets/images/4.png") white 20px 20px no-repeat;
  }
  .new-item{
    display: inline-block;
    width:230px;
    overflow: hidden;
    text-overflow: ellipsis;/*超出部分省略号*/
    white-space: nowrap;/*不允许换行*/
  }
</style>
