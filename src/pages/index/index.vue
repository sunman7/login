<template>
    <view class="main">
        <view class="top-banner">
            <view class="top-nav">
                <text>12:00</text>
                <img src="/static/444.png" alt="">
            </view>
            <img class="top-bg" src="static/login_top_bg.png" alt="">
            <img class="logo" src="static/logo.png" alt="">
        </view>
        <view class="content">
            <view class="content-box">
                <img class="logo" src="/static/logo.png"/>
                <view class="title">
                    <text>登 录</text>
                </view>
                <view class="login-input">

                    <text ref="tel">手机号或邮箱</text>
                    <input @click="setTelClass" type="text">


                    <text ref="pwd">密码</text>
                    <input type="text" @click="setPwdClass">

                    <a href="">忘记密码？</a>
                </view>
                <button type="submit" class="login-btn" size="default" @click="login" ref="loginBtn">登 录</button>
                <view class="register-view">没有账号？<a class="register">马上注册</a></view>
                <img src="static/login_bottom_bg.png" alt="">
            </view>
        </view>
    </view>

</template>

<script>
    export default {
        data() {
            return {
                timer: null,
                show: true,
                count: 10,
            };
        },
        onLoad() {

        },
        methods: {
            setTelClass() {
                this.$refs.tel.$el.style.transform = "translate(14px,-10px) scale(1.1)";
                this.$refs.tel.$el.style.transition = ".5s";

            },
            setPwdClass() {
                this.$refs.pwd.$el.style.transform = "translate(14px,-10px) scale(1.1)";
                this.$refs.pwd.$el.style.transition = ".5s";

            },
            login() {
                this.$axios({
                    method: "get",
                    url: "/"
                }).then(res => {
                    console.log(res);
                    console.log(res.data);
                }).catch(err => {
                    console.log(err);
                });

                if (!this.timer) {
                    this.count = 10;
                    this.show = false;
                    this.$refs.loginBtn.$el.style.background = "grey";
                    this.timer = setInterval(() => {
                        this.$refs.loginBtn.$el.innerHTML = this.count;
                        this.count--;
                        if (this.count < 0) {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                            this.$refs.loginBtn.$el.innerHTML = "登 录";
                            this.$refs.loginBtn.$el.style.background = "linear-gradient(90deg, rgba(1, 204, 149, 1) 0%, rgba(1, 185, 161, 1) 100%)";
                        }
                    }, 1000);
                }


            }
        }
    };
</script>

<style>
    .main {
        position: relative;
    }


    .active {
        transform: translate(10px, -20px) scale(1.1);
    }

    .top-bg {
        height: 40vh;
    }

    .top-nav > text {
        position: absolute;
        top: 10px;
        left: 20px;
        color: #fff;
    }

    .top-nav img {
        position: absolute;
        width: 25%;
        right: 20px;
        top: 10px;
    }

    .logo {
        position: absolute;
        top: 70px;
        width: 180px;
        right: 4%;
    }

    .login-btn {
        background: linear-gradient(90deg, rgba(1, 204, 149, 1) 0%, rgba(1, 185, 161, 1) 100%);
        color: #fff;
        width: 100%;
        border: none;
        border-radius: 8px;
        font-size: 20px;
        margin: 60px 0;
    }

    .register-view {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .register-view > a {
        color: #00BAA3;
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .content > .content-box {
        margin-top: -160px;
        position: relative;
        display: flex;
        background: #fff;
        flex-direction: column;
        width: 90%;
        border: none;
        border-radius: 8px;
    }

    .content > .content-box > .title {
        padding: 16px;
    }

    .title > text {
        font-size: 30px;
        font-weight: bold;
    }

    .login-input {
        padding: 8px 16px;
        position: relative;
        margin-bottom: 60px;
    }

    .login-input > text {
        font-size: 16px;
        padding: 12px 5px;
        display: block;
        transform: translate(5px, 25px);
        color: #CCCED3;
    }

    .login-input > a {
        position: absolute;
        right: 0;
        text-decoration: none;
        color: #00BAA3;
        font-size: 16px;
        padding-top: 20px;
    }

    .login-input input {
        border-bottom: 2px solid #CCCED3;
        padding: 4px;
    }

    .login-input input:hover {
        border-color: #00BAA3;
    }


</style>
