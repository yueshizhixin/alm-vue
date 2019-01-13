<template>
  <div>
    <el-row>
      <el-col :md="3" style=" overflow-y:scroll;  height:calc(100vh - 100px);">
        <el-row v-for="item of userTag">
          <el-col :md="24">
            <el-button class="aside-rightdivbutton">&nbsp;&nbsp;{{item}}</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="4" style=" overflow-y:scroll;  height:calc(100vh - 100px);">
        <el-row v-for="x of 15">
          <el-col :md="24">
            <el-button class="aside-rightdivbutton">&nbsp;&nbsp;{{x}}</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="17">
        <el-row>
          <el-col :md="24">
            <label>
              <input class="title inputShadow" v-model="title"/>
            </label>
          </el-col>
        </el-row>
        <el-row>
          <el-col :md="24">
            <mavon-editor :placeholder="placeholder" @save="save" v-model="value"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import glb from "@comp/GLOBAL"
  import commh from '@/assets/js/communicatHandler'

  export default {
    name: "save",
    data() {
      return {
        /**
         * 标签
         */
        userTag: [],

        /**
         * 笔记部分
         */
        title: '',
        placeholder: '请输入...',
        value: ''
      }
    },
    mounted() {
      this.title = new Date().toLocaleString()
      this.getUserTag()
    },
    methods: {
      getUserTag() {
        glb.get(this, '/note/user/tag', {}, (data) => {
          console.log(data)
          if (data.code === 401) {
            commh.$emit('http401')
          }
        });
      },

      save() {
        gol.alert_success(this, '保存成功')
      }
    }
  }
</script>

<style scoped>
  .aside-right {
    top: 80px;
    position: fixed;
  }

  .aside-right div {
    background-color: white;
    padding: 20px 0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
    margin-bottom: 10px;
  }

  .aside-rightdivbutton {
    border: 0;
    padding: 10px 20px;
    width: 100%;
    text-align: left;
    margin-left: 0;
  }

  div.el-input {
    min-height: 80px;
  }

  .title {
    min-height: 55px !important;
    font-size: 22px;
    margin-bottom: 5px;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
  }

  .inputShadow {
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.157), 0 0px 4px rgba(0, 0, 0, 0.227)
  }
</style>
