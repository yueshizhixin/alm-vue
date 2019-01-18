<template>
  <div>
    <el-row>
      <el-col :md="3" style=" overflow-y:scroll;  height:calc(100vh - 100px);">
        <el-row v-for="item of tags">
          <el-col :md="24">
            <el-button :key="item.id" class="aside-rightdivbutton">
              <span v-if="item.layer===2">&nbsp;&nbsp;</span>&nbsp;&nbsp;{{item.name}}
            </el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="18">
        <el-row>
          <el-col :md="24">
            <label>
              <input class="title inputShadow" v-model="note.title"/>
            </label>
          </el-col>
        </el-row>
        <el-row>
          <el-col :md="24">
            <mavon-editor :placeholder="note.placeholder" @save="save" v-model="note.content"/>
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
        tags: [],

        /**
         * 笔记部分
         */
        noteThumb: [],//某标签下笔记缩略

        note: {
          title: '',
          placeholder: '请输入...',
          content: ''
        }

      }
    },
    mounted() {
      this.note.title = new Date().toLocaleString()
      this.getTags()
    },
    methods: {
      getTags() {
        glb.get(this, '/tag', {}, (data) => {
          console.log(data)
          this.tags = []
          if (data.code === 200) {

            this.tags.push(...data.data)
            console.log(this.tags)
          }
        })
      },

      //显示某个笔记
      showNote(id) {
        this.note = this.noteThumb.find(x => x.id === id)
      },

      save() {
        glb.alert_success(this, '保存成功')
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

  .tagli {
    list-style: none;
    color: #606266;
    font-size: 14px;
    font-weight: 500;
  }

  .tagul {
    padding-left: 0;
  }

  .lihoveron {
    background: #606266;
    color: white;
    font-size: 14px;
    font-weight: 700;
  }

  .lihoverout {
    background: white;
    color: #606266;
    font-size: 14px;
    font-weight: 500;
  }

  .lidiv1 {
    padding: 10px 0 10px 20px;
  }

  .lidiv2 {
    padding: 10px 0 10px 40px;
  }

  .liopen {
    background: #606266;
    color: white;
    font-size: 14px;
  }
</style>
