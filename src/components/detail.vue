<template>
    <div class="detail-wrap">
        <div class="detail-left left">
            <div class="product-board">
                <img :src="productIcon" >
                <ul>
                    <router-link v-for="item in products" tag="li" :to="item.path" active-class="active">{{item.name}}</router-link>
                </ul>
            </div>
        </div>
        <div class="detail-right left">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                products: [
                    {
                        name: '数据统计',
                        path: 'count',
                        active: false
                    },
                    {
                        name: '数据预测',
                        path: 'forecast',
                        active: false
                    },
                    {
                        name: '流量分析',
                        path: 'analysis',
                        active: false
                    },
                    {
                        name: '广告发布',
                        path: 'publish',
                        active: false
                    }
                ],
                imgMap: {
                    '/detail/count': require("../assets/images/1.png"),
                    '/detail/forecast': require("../assets/images/2.png"),
                    '/detail/analysis': require("../assets/images/3.png"),
                    '/detail/publish': require("../assets/images/4.png")
                }
            }
        },
        computed:{
            productIcon(){
                return this.imgMap[this.$route.path];
            }
        }
    }
</script>

<style>
    .detail-wrap{
        width:1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .detail-left{
        width: 200px;
        text-align: center;
    }
    .detail-right{
        width: 980px;
        margin-left: 20px;
    }
    .product-board{
        background: #fff;
        padding: 20px 0;
    }
    .product-board img{
        width: 100px;
        height: 100px;
        border:none;
    }
    .product-board ul{
        margin-top: 20px;
    }
    .product-board li{
        text-align: left;
        padding: 10px 15px;
        cursor: pointer;
    }
    .product-board li.active,
    .product-board li:hover {
        background: thistle;
        color: #fff;
    }
    .sales-board{
        background: #fff;
    }
    .sales-board-intro{
        text-align: left;
    }
    .sales-board-intro h2{
        font-size: 20px;
        padding: 10px 20px;
    }
    .sales-board-intro p{
        background: lavenderblush;
        font-size: 14px;
        padding: 10px 20px;
        line-height: 1.8;
    }
    .sales-board-form{
        margin: 20px;
    }
    .sales-board-line{
        clear: both;
        font-size: 14px;
        margin: 10px 0;
        text-align: left;
    }
    .sales-board-line-left{
        display: inline-block;
        width: 120px;
    }
    .sales-board-line-right {
        display: inline-block;
        width: 75%;
    }
    .button{
        display: inline-block;
        width:100px;
        height: 30px;
        background: thistle;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
    }
    .sales-board-des{
        border-top: 20px solid #eeeefe;
        padding: 20px;
        text-align: left;
    }
    .sales-board-des h2{
        font-size: 20px;
        color: #999;
        padding-bottom: 20px;
    }
    .sales-board-des h3{
        font-size: 18px;
        padding-bottom: 20px;
    }
    .sales-board-des p,.sales-board-des ul{
        font-size: 14px;
        padding-bottom: 20px;
    }
    .sales-board-des li{
        line-height: 1.8;
    }
    .buy-dialog-table{
        width: 100%;
        margin-top: 20px;
    }
    /*.sales-board-table th {
        background: #4fc08d;
        color: #fff;
    }
    .sales-board-table td {
        border: 1px solid #f0f2f5;
        padding: 15px;
    }*/
    /*
   
    .sales-board-table {
        width: 100%;
        margin-top: 20px;
    }
    .sales-board-table th {
        background: #4fc08d;
        color: #fff;
    }
    .sales-board-table td {
        border: 1px solid #f0f2f5;
        padding: 15px;
    }*/
</style>