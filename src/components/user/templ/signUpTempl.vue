<template>
  <div>
    <transition name="el-zoom-in-top">
      <div v-show="aniShow" class="transition-box">
        <el-dialog title="" :visible.sync="visi" width="30%" center
                   :close-on-click-modal="false"
                   :modal-append-to-body="false"
                   :show-close="false"
        >
          <el-form v-model="user" :rules="rules" ref="signForm">
            <el-form-item prop="acc">
              <el-input placeholder="请输入6-16数字或字母组合" v-model="user.acc">
                <template slot="prepend">账号</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="">
              <el-input placeholder="请输入6-16数字或字母组合" v-model="user.acc">
                <template slot="prepend">密码</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请重复输入密码">
                <template slot="prepend">密码</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请填写图形验证码">
                <template slot="prepend">验证</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :sm="10">
                  <el-button style="width: 100%" type="danger" @click="$emit('signUpEve','close')">关&nbsp;&nbsp;闭
                  </el-button>
                </el-col>
                <el-col :sm="{span:10,offset:4}">
                  <el-button style="width: 100%" type="success" @click="sub('signForm')">
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
      return {
        aniShow: false,//加载动画
        user: {
          acc: '',
          pwd: '',
          vali: '',
        },
        rules: {
          acc: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 6, max: 16, message: '请输入6-16数字或字母组合', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      sub(form){
        this.$refs[form].validate(vali=>{
          if(vali){
            alert('true')
            this.$emit('signUpEve','signUpData')
          }
          else{
            alert('false')
            return false;
          }
        })
      }
    },

    mounted() {
      this.aniShow = true
    },
  }
</script>

<style scoped>

</style>
