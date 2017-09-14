<template>
    <div id="app">
        <header>
            <div class="header-main">
                <figure class="left">
                    <router-link :to="{path:'/'}">
                        <img src="./assets/logo.png" alt="logo">
                    </router-link>
                </figure>
                <p class="name left">Sales-Platform</p>
                <nav>
                    <ul class="menu right">
                        <li v-if="!(username=='')">{{username}}</li>
                        <li @click="allClick('isShowLoginDialog')" v-if="username==''">登录</li>
                        <li class="nav-pile">|</li>
                        <li @click="quit()" v-if="!(username=='')">退出</li>
                        <li @click="allClick('isShowRegisterDialog')" v-if="username==''">注册</li>
                        <li class="nav-pile">|</li>
                        <li @click="allClick('isShowAboutDialog')">关于</li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </main>
        <footer>
            <p><span>2017 Sales-Platform</span></p>
        </footer>
        
        <my-dialog :isShow="isShowLoginDialog" @on-close="closeDialog('isShowLoginDialog')">
            <login-form @has-login="onSuccessLogin"></login-form>
        </my-dialog>
        <my-dialog :isShow="isShowRegisterDialog" @on-close="closeDialog('isShowRegisterDialog')">
            <register-form></register-form>
        </my-dialog>
        <my-dialog :isShow="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
            <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
        </my-dialog>
        
    </div>
</template>

<script>
    import Dialog from './components/dialog'
    import LoginForm from './components/dialog/loginForm'
    import RegisterForm from './components/dialog/registerForm'
    export default {
        components: {
            myDialog: Dialog,
            LoginForm,
            RegisterForm
        },
        data(){
            return {
                isShowLoginDialog:false,
                isShowRegisterDialog: false,
                isShowAboutDialog: false,
                username:''
            }
        },
        methods: {
            allClick(attr){
                this[attr]=true;
            },

            closeDialog(attr){
                this[attr] = false;
            },
            onSuccessLogin(data){
                this.closeDialog('isShowLoginDialog');
                this.username=data.username;
            },
            /*quit(){
             this.$http.get('/');
             this.username='';
             }*/
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: #eeeefe;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    .left {
        float: left;
    }
    
    .right {
        float: right;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    header {
        width: 100%;
        min-width: 1200px;
        height: 80px;
        background-color: pink;
        margin-bottom: 20px;
    }
    
    .header-main {
        width: 1200px;
        margin: 0 auto;
    }
    
    .header-main img, .header-main figure {
        width: 50px;
        height: 50px;
    }
    
    .header-main figure {
        padding-top: 15px;
        padding-right: 10px;
    }
    
    .header-main:after, main:after { /*伪类清除浮动*/
        display: block;
        clear: both;
        content: '\0020';
        height: 0;
        visibility: hidden;
    }
    
    .name {
        font-size: 36px;
        padding: 15px 10px;
        color: brown;
    }
    
    .menu {
        margin: 25px 0;
    }
    
    .menu li {
        display: inline-block;
        cursor: default;
    }
    
    .nav-pile {
        color: gray;
        padding: 0 10px;
    }
    
    footer {
        width: 100%;
        min-width: 1200px;
        height: 60px;
        background-color: lavenderblush;
        border-top: solid 1px thistle;
        margin-top: 20px;
    }
    
    footer p {
        font-size: 14px;
        color: black;
        padding: 22px 0;
    }
</style>
