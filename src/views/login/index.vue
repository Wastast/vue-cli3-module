<template>
  <div class="login">
    <div class="login-box">
      <div class="logo">
        <img src="@/assets/login/ab88e081ec9a239f0b8379f57a729cc.jpg" alt="没有图标" />
      </div>
      <div class="text">
        余村数字乡村
      </div>
      <div class="denglu">
        <el-form
          ref="form"
          :rules="loginRules"
          class="form-box"
          :model="loginForm"
          label-width="0.6rem"
        >
          <el-form-item prop="username">
            <span class="span el-icon-user-solid"> </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="请输入用户名"
              name="username"
              type="text"
            />
          </el-form-item>
          <el-form-item prop="password">
            <span class="span el-icon-lock"> </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              :show-password="true"
              @keyup.enter.native="login"
            />
          </el-form-item>
        </el-form>
      </div>
      <el-button @click="login()" class="loging" type="primary" :loading="loading">
        {{ loading ? '登录中' : '登录' }}
      </el-button>
    </div>
  </div>
</template>

<script>
import { TipsPop } from '@/utils/el_ui';
import { setToken } from '@/utils/auth.js';
export default {
  name: 'login',
  data() {
    // 用户名验证
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    // 密码验证
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 登录
    login() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.loading = true;
          let { username, password } = this.loginForm;
          if (password === '123456' && username === 'admin') {
            TipsPop({
              message: '登录成功'
            });
            setToken(1);
            this.loading = false;
          } else {
            TipsPop({
              message: '用户名或密码错误',
              type: 'info'
            });
            this.loading = false;
          }
        }
      });
    }
  },
  mounted() {},
  components: {}
};
</script>

<style scoped>
.login-box .denglu >>> .el-form-item {
  color: #454545;
  border-radius: 50px;
  background: #fff;
}
.login-box .denglu >>> .el-input input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  height: 0.94rem;
  color: #000;
  font-size: 0.32rem;
  padding: 0;
  text-indent: 1em;
  line-height: 0.8rem;
}
.login-box .denglu >>> .el-input {
  display: inline-block;
  height: 0.94rem;
  width: 85%;
}
.login-box .denglu >>> .el-form-item__content {
  line-height: 0.8rem;
  font-size: 0.28rem;
}
.login-box .denglu >>> .el-input .el-input__clear {
  font-size: 0.4rem;
  width: 0.5rem;
  line-height: 0.8rem;
  vertical-align: -webkit-baseline-middle;
}
</style>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/login/489F6A708413CF346F2BF557DCC079DD@2x.jpg');
  background-size: 100% 100%;
  .login-box {
    position: absolute;
    top: 0;
    left: px2rem(1220rem);
    width: px2rem(433rem);
    height: px2rem(617rem);
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    border-radius: 0 0 px2rem(20rem) px2rem(20rem);
    .logo {
      margin: px2rem(89rem) 0 0 px2rem(124rem);
      width: px2rem(181rem);
      height: px2rem(98rem);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      margin-top: px2rem(17rem);
      font-size: px2rem(38rem);
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-align: center;
    }
    .denglu {
      margin-top: px2rem(70rem);
      .form-box {
        width: px2rem(300rem);
        margin: 0 auto;
      }
      > div {
        width: px2rem(300rem);
        height: px2rem(50rem);
        line-height: px2rem(50rem);
        background: rgba(243, 247, 254, 1);
        border-radius: px2rem(50rem);
        margin-left: px2rem(64rem);
        box-sizing: border-box;
        padding-left: px2rem(31rem);
      }
      .span {
        position: relative;
        font-size: px2rem(24rem);
        color: rgba(0, 116, 124, 1);
        vertical-align: middle;
      }
      input {
        background: rgba(0, 0, 0, 0);
        font-size: px2rem(17rem);
        text-indent: 1em;
      }
      .password {
        margin-top: px2rem(24rem);
      }
    }
    .loging {
      display: block;
      width: px2rem(300rem);
      height: px2rem(50rem);
      border: 2px solid rgba(195, 238, 228, 1);
      background: linear-gradient(180deg, rgba(10, 195, 136, 1) 0%, rgba(8, 126, 140, 1) 100%);
      border-radius: px2rem(25rem);
      margin: px2rem(49rem) 0 0 px2rem(64rem);
      text-align: center;
      letter-spacing: px2rem(10rem);
      // line-height: px2rem(50rem);
      color: #fff;
      font-weight: bold;
      font-size: px2rem(16rem);
      cursor: pointer;
    }
  }
}
</style>
