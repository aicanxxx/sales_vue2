<template>
    <div class="register-form">
        <div class="g-form">
            <div class="g-form-line">
                <label class="form-label">用户名：</label>
                <input type="text" v-model="usernameModel" placeholder="请输入电子邮箱" @focus="isShow=true">
                <ul v-if="usernameModel&&isShow" :class="{'form-ul':filterBy.length===0}">
                    <li v-for="item in filterBy" @click="usernameGet(item)">{{dealMsg(usernameModel)}}@{{item}}</li>
                </ul>
                <span class="g-form-error" v-if="!isShow">{{userErrors.errorText}}</span>
            </div>
            <div class="g-form-line">
                <label class="form-label">密码：</label>
                <input type="password" v-model="passwordModel" placeholder="请输入密码">
                <span class="g-form-error" v-if="!isShow">{{passwordErrors.errorText}}</span>
            </div>
            <div class="g-form-line">
                <label class="form-label">确认密码：</label>
                <input type="password" v-model="passwordModel" placeholder="请输入密码">
                <span class="g-form-error" v-if="!isShow">{{passwordErrors.errorText}}</span>
            </div>
            <div class="g-form-line clear-margin">
                <div class="form-btn">
                    <a class="button" @click="onLogin">登录</a>
                    <a class="button">注册</a>
                    <a class="forgetPassword">忘记密码</a>
                </div>
                <p>{{errorText}}</p>
            </div>
        
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isShow:true,
                usernameModel:'',
                passwordModel:'',
                errorText:'',
                mail:['qq.com','163.com','126.com','189.cn','sina.com','hotmail.com','gmail.com']
            }
        },
        computed:{
            userErrors(){
                let errorText,status;
                if(!/@/g.test(this.usernameModel)){
                    status=false;
                    errorText='不包含@';
                }else{
                    status=true;
                    errorText='';
                }
                return {
                    status,
                    errorText
                }
            },
            passwordErrors(){
                let errorText,status;
                if(!/^\w{4,10}$/g.test(this.passwordModel)){
                    status=false;
                    errorText='密码必须为4-10位';
                }else{
                    status=true;
                    errorText='';
                }
                return {
                    status,
                    errorText
                }
            },
            filterBy(){
                var self=this;
                return this.mail.filter(function(item){
                    var index=self.usernameModel.indexOf('@');
                    if(index==-1){
                        return true;
                    }else{
                        return item.indexOf(self.usernameModel.slice(index+1))==0;
                    }
                });
            },

        },
        methods:{
            onLogin(){
                if(!this.userErrors.status||!this.passwordErrors.status){
                    this.errorText='部分选项未通过';
                }else{
                    this.errorText='';
                    this.$http.post('api/login').then((res)=>{
                        this.$emit('has-login',res.data)
                    },(error)=>{
                        console.log(error);
                    })
                }
            },
            dealMsg(){
                return this.usernameModel.slice(0,this.usernameModel.indexOf('@')==-1?this.usernameModel.length:this.usernameModel.indexOf('@'));
            },
            usernameGet(item){
                this.usernameModel = this.usernameModel.slice(0,this.usernameModel.indexOf('@')==-1?this.usernameModel.length:this.usernameModel.indexOf('@'))+'@'+item;
                this.isShow=false;
            }
        }
    }
</script>

<style scoped>
    .g-form-line{
        position: relative;
        margin-bottom: 20px;
    }
    .g-form-line label{
        display: inline-block;
        width:80px;
        font-size: 14px;
    }
    .g-form-line input{
        width:200px;
        border: 1px solid #ccc;
        padding: 5px;
    }
    .g-form-line ul{
        position: absolute;
        background: white;
        margin-left: 84px;
        /*margin-top: -1px;*/
        border: 1px solid #ccc;
        border-top:none;
        width: 190px;
        padding: 4px 10px;
        z-index: 15;
    }
    .g-form-line .form-ul{
        border:none;
    }
    .g-form-line li{
        list-style: none;
        line-height: 30px;
    }
    .g-form-line .form-btn{
        margin-left: 85px;
    }
    .g-form-line .button{
        display: inline-block;
        background: #1E90FF;
        border: 1px solid #1b809e;
        padding: 5px 15px;
        margin-right: 20px;
        color: white;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }
    .g-form-line .forgetPassword{
        text-decoration: underline;
        color: #ccc;
        font-size: 12px;
    }
    .g-form-line p{
        padding-top:10px ;
        padding-left: 84px;
        color: red;
        font-size: 12px;
    }
    .g-form-error{
        color: red;
        font-size: 14px;
        padding-left: 15px;
    }
    .clear-margin{
        margin-bottom: 0;
    }

</style>