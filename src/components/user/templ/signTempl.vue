<template>
  <div>

    <el-dialog title="" :visible.sync="visi" center custom-class="sign-dia-comm"
               :close-on-click-modal="false"
               :modal-append-to-body="false"
               :before-close="close"

    >
      <el-form :model="user" :rules="rules" :ref="formName" status-icon style="max-width: 300px;min-width: 300px;margin: 0 auto;text-align: center">
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
          <el-form-item>
            <el-input placeholder="请填写图形验证码" auto-complete="off">
              <span slot="prepend">验 证</span>
            </el-input>
          </el-form-item>
        </div>

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
  import gol from "comp/GLOBAL"

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
          if (!gol.regStrNormal.test(v)) {
            callback(new Error(gol.regTipNormal));
          } else {
            callback();
          }
        }, 500);
      };
      let valiPwd = (r, v, callback) => {
        if (v === '') {
          callback(new Error('请输入密码'));
        }
        if (!gol.regStrNormal.test(v)) {
          callback(new Error(gol.regTipNormal));
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
      return {
        formName:'signForm',//模板名称
        user: {
          acc: '',
          pwd: '',
          pwd2: '',
          vali: '',//验证码
          signType:'',//操作标志
        },
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
        },
      };
    },
    methods: {

      signUp(form) {
        if (this.sign === 'in') {
          this.$emit('signGotoUp')
          this.$refs[form].resetFields();
        }
        else {
          this.$refs[form].validate(vali => {
            if (vali) {
              console.log('signUp vali ok')

              this.user.signType='up'
              this.$emit('signEve', this.user)
              // this.$refs[form].resetFields();
            }
            else {
              return false;
            }
          })
        }
      },
      signIn(form) {
        if (this.sign === 'up') {
          this.$emit('signGotoIn')
          this.$refs[form].resetFields();
        }
        else {
          this.$refs[form].validate(vali => {
            if (vali) {
              this.user.signType='in'
              this.$emit('signEve', this.user)
              // this.$refs[form].resetFields();
            }
            else {
              return false;
            }
          })
        }
      },
      close() {
        this.user.signType=''
        this.$emit('signEve', this.user)
        this.$refs[this.formName].resetFields();
      },
    },
    mounted() {
    },
    updated(){
    }
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
