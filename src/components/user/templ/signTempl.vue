<template>
  <div>

    <el-dialog title="" :visible.sync="visi" center custom-class="sign-dia-comm"
               :close-on-click-modal="false"
               :modal-append-to-body="false"
               :before-close="close"

    >
      <el-form :model="user" :rules="rules" :ref="formName" status-icon
               style="max-width: 300px;min-width: 300px;margin: 0 auto;text-align: center">
        <el-form-item prop="acc">
          <el-input placeholder="请输入6-16数字或字母组合" v-model="user.acc" auto-complete="off">
            <span slot="prepend">账 号</span>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" placeholder="请输入6-16数字或字母组合" v-model="user.pwd" auto-complete="off">
            <span slot="prepend">密 码</span>
          </el-input>
        </el-form-item>

        <div v-if="sign==='up'">
          <el-form-item prop="pwd2">
            <el-input type="password" placeholder="请再次输入密码" v-model="user.pwd2" auto-complete="off">
              <span slot="prepend">密 码</span>
            </el-input>
          </el-form-item>
        </div>
        <el-form-item prop="captcha">
          <el-input v-model="user.captcha" placeholder="请填写验证码" auto-complete="off">
            <!--<span slot="append">验 证</span>-->
            <img id="imgVerify" @click="getVali()" slot="append" style="width: 100px;height: 35px;" src=""/>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :sm="10">

              <el-button class="regBtn" type="primary" @click="signUp('signForm')">
                <i class="iconfont icon-add"></i>
                注&nbsp;册
              </el-button>

            </el-col>
            <el-col :sm="{span:10,offset:4}">
              <el-button class="regBtn" type="success" @click="signIn('signForm')">
                <i class="iconfont icon-more"></i>
                登&nbsp;录
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import glb from "comp/GLOBAL"

  export default {
    name: "signTempl",
    props: {
      visi: Boolean,
      sign: String,
    },
    data() {
      let valiAcc = (r, v, callback) => {
        if (v === '') {
          callback(new Error('请填写账号'));
        }
        setTimeout(() => {
          if (!glb.regStrNormal.test(v)) {
            callback(new Error(glb.regTipNormal));
          } else {
            callback();
          }
        }, 500);
      };
      let valiPwd = (r, v, callback) => {
        if (v === '') {
          callback(new Error('请输入密码'));
        }
        if (!glb.regStrNormal.test(v)) {
          callback(new Error(glb.regTipNormal));
        } else {
          callback();
        }
      };
      let valiPwd2 = (r, v, callback) => {
        if (v.trim() === '') {
          callback(new Error('请再次输入密码'));
        } else if (v !== this.user.pwd) {
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };
      let valiCap = (r, v, callback) => {
        if (v.trim() === '' || v.trim().length !== 4) {
          callback(new Error('请输入4位验证码'));
        } else {
          callback();
        }
      };
      return {
        formName: 'signForm',//模板名称
        user: {
          acc: '',
          pwd: '',
          signType: 1,
          pwd2: '',
          captcha: '',//验证码
          opType: '',//操作标志
        },

        captcha: '',
        imgVerifyFlag: true,//加载一次验证码

        rules: {
          acc: [
            {validator: valiAcc, trigger: 'blur'},
          ],
          pwd: [
            {validator: valiPwd, trigger: 'blur'},
          ],
          pwd2: [
            {validator: valiPwd2, trigger: 'blur'},
          ],
          captcha: [
            {validator: valiCap, trigger: 'blur'},
          ],
        },
      };
    },
    mounted() {
    },
    updated() {
      if (this.imgVerifyFlag && this.sign) {
        this.imgVerifyFlag = false
        this.getVali()
      }
    },
    methods: {

      //获取验证码
      getVali() {
        console.log('获取验证码方法')
        document.getElementById("imgVerify").src = glb.preUrl + '/captcha/img?' + Math.random()
      },

      //注册
      signUp(form) {
        if (this.sign === 'in') {
          this.$emit('signGotoUp')
          this.$refs[form].resetFields();
        }
        else {
          this.$refs[form].validate(ok => {
            if (ok) {
              glb.post(this, '/user/act=sign?tag=signUp', this.user, (data) => {
                  if (data.code === 200) {
                    if (data.ok === 0) {
                      glb.alert_info(this, data.msg)
                      this.getVali()
                    }
                    else {
                      sessionStorage['isSign'] = 1
                      this.sendMsgToParent('up')
                    }
                  }
                }
              )
            }
            else {
              return false;
            }
          })
        }
      },
      //登录
      signIn(form) {
        if (this.sign === 'up') {
          this.$emit('signGotoIn')
          this.$refs[form].resetFields();
        }
        else {
          this.$refs[form].validate(ok => {
            if (ok) {
              glb.post(this, '/user/act=sign?tag=signIn', this.user, (data) => {
                  if (data.code === 200) {
                    if (data.ok === 0) {
                      glb.alert_info(this, data.msg)
                      this.getVali()
                    }
                    else {
                      sessionStorage['isSign'] = 1
                      this.sendMsgToParent('in')
                    }
                  }
                }
              )
            }
            else {
              return false;
            }
          })
        }
      },
      //关闭
      close() {
        this.imgVerifyFlag = true
        this.sendMsgToParent('')
        this.$refs[this.formName].resetFields();
      },

      sendMsgToParent(type) {
        this.user.opType = type
        this.$emit('signEve', this.user)
      }

    },

  }
</script>

<style scoped>
  .regBtn, i {
    width: 100%;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
  }
</style>
