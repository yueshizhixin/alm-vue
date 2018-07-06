<template>
  <div>
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-dialog title="" :visible.sync="visi" width="30%" center
                   :close-on-click-modal="false"
                   :modal-append-to-body="false"
                   :before-close="close"
        >
          <el-form :model="user" :rules="rules" ref="signForm" status-icon>
            <el-form-item prop="acc">
              <el-input placeholder="请输入6-16数字或字母组合" v-model="user.acc">
                <span slot="prepend">账 号</span>
              </el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input type="password" placeholder="请输入6-16数字或字母组合" v-model="user.pwd">
                <span slot="prepend">密 码</span>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :sm="10">
                  <el-button class="regBtn" type="info" @click="close">
                    <i class="iconfont icon-add"></i>
                    注&nbsp;册
                  </el-button>
                </el-col>
                <el-col :sm="{span:10,offset:4}">
                  <el-button class="regBtn" type="success" @click="sub('signForm')">
                    <i class="iconfont icon-more"></i>
                    登&nbsp;录
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

  import gol from "./../../GLOBAL"

  export default {
    name: "signInTempl",
    props: ['visi'],
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
      return {
        aniShow: false,//加载动画

        user: {
          acc: '',
          pwd: '',
        },
        rules: {
          acc: [
            {validator: valiAcc, trigger: 'blur'},
          ],
          pwd: [
            {validator: valiPwd, trigger: 'blur'},
          ],
        },
      };

    },
    methods: {
      sub(form) {
        this.$refs[form].validate(vali => {
          if (vali) {
            this.$refs[form].resetFields();
            this.$emit('signInEve', 'signInData')
          }
          else {
            return false;
          }
        })
      },
      close() {
        this.$refs['signForm'].resetFields();
        this.$emit('signInEve', 'close')
      }
    },

    mounted() {
      this.aniShow = true
    },
  }
</script>

<style scoped>
  .regBtn,i {
    width: 100%;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
  }
</style>
