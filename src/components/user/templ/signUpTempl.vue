<template>
  <div>
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-dialog title="" :visible.sync="visi" width="30%" center
                   :close-on-click-modal="false"
                   :modal-append-to-body="false"
                   :show-close="false"
        >
          <el-form :model="user" :rules="rules" ref="signForm" status-icon>
            <el-form-item prop="acc">
              <el-input placeholder="请输入6-16数字或字母组合" v-model="user.acc">
                <span slot="prepend">账 号</span>
              </el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input placeholder="请输入6-16数字或字母组合" v-model="user.pwd">
                <span slot="prepend">密 码</span>
              </el-input>
            </el-form-item>
            <el-form-item prop="pwd2">
              <el-input placeholder="请再次输入密码" v-model="user.pwd2">
                <span slot="prepend">密 码</span>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请填写图形验证码">
                <span slot="prepend">验 证</span>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :sm="10">
                  <el-button style="width: 100%;font-weight:600;" type="danger" @click="close">关&nbsp;&nbsp;闭
                  </el-button>
                </el-col>
                <el-col :sm="{span:10,offset:4}">
                  <el-button style="width: 100%;font-weight:600;" type="success" @click="sub('signForm')">
                    注&nbsp;&nbsp;册
                  </el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>

    </transition>
  </div>
</template>

<script>
  export default {
    name: "signUpTempl",
    props: ['visi'],
    data() {
      var valiAcc = (r, v, callback) => {
        if (v === '') {
          callback(new Error('1'));
        }
        setTimeout(() => {
          if (!Reg6to16_w.test(v)) {
            callback(new Error('2'));
          } else {
            callback();

          }
        }, 500);
      };
      let valiPwd2 = (rule, v, callback) => {
        if (v.trim() === '') {
          callback(new Error('请再次输入密码'));
        } else if (v !== this.user.pwd2) {
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };
      return {
        aniShow: false,//加载动画

        user: {
          acc: '',
          pwd: '',
          pwd2: '',
          vali: '',
        },

        rules: {
          acc: [
            {validator: valiAcc, trigger: 'blur'},
            // {min: 6, max: 16, message: '请输入6-16数字或字母组合', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            // {min: 6, max: 16, message: '请输入6-16数字或字母组合', trigger: 'blur'}
          ],
          pwd2: [
            {validator: valiPwd2, trigger: 'blur'},
            // {min: 6, max: 16, message: '请输入6-16数字或字母组合', trigger: 'blur'}
          ],
        },
      };

    },
    methods: {
      sub(form) {
        this.$refs[form].validate(vali => {
          if (vali) {
            alert('sub-true')
            this.$emit('signUpEve', 'signUpData')
          }
          else {
            console.log('sub-false')
            // this.$refs[signForm].resetFields();
            return false;
          }
        })
      },
      close() {
        // this.$refs['signForm'].resetFields();
        this.$emit('signUpEve', 'close')
      }
    },

    mounted() {
      this.aniShow = true
    },
  }
</script>

<style scoped>

</style>
