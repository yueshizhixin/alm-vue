<template>
  <div style="padding: 20px;">
    <el-row>
      <el-col :md="4" style=" overflow-y:scroll;  height:calc(100vh - 100px);">
        <el-row>
          <el-col :md="24">
            <button @click="addTag"
                    style="width: 100%;height: 36px; border: 0;background: white;font-size: 15px;margin-bottom:10px;color:#606266;">
              <i class="el-icon-plus"></i>&nbsp;添加
            </button>
            <ul class="tagul">
              <li v-for="item of tags" class="tagli lihoveron"
                  :class="{'lihoveron':item.hover===1,'lihoverout':item.hover===0,'liopen':item.open===1 && !item.children.find(x=>x.open===1)}">
                <div class="lidiv1" @click="clcikTagStyle(item.id,item.layer)"
                     @mouseenter="mouseenterM(item.id,item.layer)"
                     @mouseleave="mouseleaveM(item.id,item.layer)">
                  <i v-show="item.open===0" class="el-icon-arrow-right">&nbsp;</i>
                  <i v-show="item.open===1 && item.children.length===0" class="el-icon-arrow-left">&nbsp;</i>
                  <i v-show="item.open===1 && item.children.length>0" class="el-icon-arrow-down">&nbsp;</i>
                  {{item.name}}
                </div>
                <ul v-show="item.children.length>0 && item.open===1" v-for="x of item.children" class="tagul">
                  <li class="tagli"
                      :class="{'lihoveron':x.hover===1,'lihoverout':x.hover===0,'liopen':x.open===1}">
                    <div class="lidiv2" @click="clcikTagStyle(x.id,x.layer)"
                         @mouseenter="mouseenterM(x.id,x.layer)"
                         @mouseleave="mouseleaveM(x.id,x.layer)">
                      <i v-show="x.open===0" class="el-icon-arrow-right">&nbsp;&nbsp;</i>
                      <i v-show="x.open===1" class="el-icon-arrow-left">&nbsp;&nbsp;</i>
                      {{x.name}}
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="20">
        <el-row>
          <el-col :md="24">
            <label>
              <input class="title inputShadow" v-model="note.title"/>
            </label>
          </el-col>
        </el-row>
        <el-row>
          <el-col :md="24">
            <mavon-editor ref="md" style="max-height: 680px;overflow: auto" :placeholder="note.placeholder"
                          v-model="note.content"
                          @save="save" @imgAdd="imgAdd"
            />
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!--添加标签-->
    <el-dialog center :visible.sync="dialogFormVisible"
               :close-on-click-modal="false"
               :modal-append-to-body="false"
               style="width: 800px;left: calc(50% - 400px);"
    >
      <el-form>
        <el-select v-model="addTagData.layer" style="width: 100%;">
          <el-option value="1" label="一级标签"/>
          <el-option value="2" label="二级标签"/>
        </el-select>
        <el-select v-show="addTagData.layer==='2'" v-model="addTagData.tagId1" style="margin-top: 30px;width: 100%;">
          <el-option v-for="item of tags" :value="item.id" :label="item.name"/>
        </el-select>
        <el-input v-model="addTagData.tagName" autocomplete="off" placeholder="标签" style="margin-top: 30px;"></el-input>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" style="width: 100%" @click="saveTag">添&nbsp;&nbsp;&nbsp;加
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

  import glb from "@comp/GLOBAL"


  export default {
    name: "save",
    data() {
      return {
        /**
         * 标签
         */
        tags: [],
        dialogFormVisible: false,//添加标签
        addTagData: {
          layer: "1",
          tagId1: 1,
          tagName: ''
        },
        /**
         * 笔记部分
         */

        note: {
          id: -1,
          title: '',
          placeholder: '请输入...',
          content: '',
          tagId1: 0,
          tagName1: '',
          tagId2: 0,
          tagName2: '',
          profile: '',
        },

        profileMaxLength: 100,//缩略最大长度

      }
    },
    created() {
      sessionStorage['needSign'] = 1
    },
    mounted() {
      this.note.id = Number(this.$route.params.id)
      if (Number.isNaN(this.note.id) || this.note.id < 0) {
        this.$router.push({path: '/note'})
      }
      this.note.id = Number(this.$route.params.id)
      this.note.title = new Date().toLocaleString()
      this.getTags()
      if (this.note.id > 0) {
        this.getNote()
      }
    },
    methods: {
      //hover效果
      mouseenterM(id, layer) {
        if (layer === 1) {
          this.tags.forEach(x => {
            if (x.id === id) {
              x.hover = 1
            }
            else {
              x.hover = 0
            }
            Array.from(x.children).forEach(y => {
              y.hover = 0
            })
          })
        } else if (layer === 2) {
          this.tags.forEach(x => {
            x.hover = 0
            Array.from(x.children).forEach(y => {
              if (y.id === id) {
                y.hover = 1;
              }
              else {
                y.hover = 0;
              }
            })
          })
        }
      },
      mouseleaveM(id, layer) {
        if (layer === 1) {
          this.tags.find(x => x.id === id).hover = 0
        }
        else if (layer === 2) {
          this.tags.forEach(x => {
            let item = x.children.find(y => y.id === id)
            if (item) {
              item.hover = 0
              return
            }
          })
        }
      },
      //标签点击
      clcikTagStyle(id, layer) {
        this.note.tagId1 = 0
        this.note.tagId2 = 0
        this.note.tagName1 = ''
        this.note.tagName2 = ''
        //第一层
        if (layer === 1) {
          let tag = this.tags.find(x => x.id === id);
          this.tags.forEach(x => x.open = 0);
          this.tags.forEach(x => {
            x.children.forEach(y => {
              y.open = 0
            })
          });
          tag.open = 1
          this.note.tagId1 = tag.id
          this.note.tagName1 = tag.name
        } else if (layer === 2) {
          this.tags.forEach(x => {
            x.open = 0;
            x.children.forEach(y => {
              y.open = 0;
              if (y.id === id) {
                y.open = 1
                x.open = 1
                this.note.tagId1 = x.id
                this.note.tagName1 = x.name
                this.note.tagId2 = y.id
                this.note.tagName2 = y.name
              }
            })
          })
        }
      },
      //添加标签
      addTag() {
        this.dialogFormVisible = true
      },
      saveTag() {
        glb.post(this, '/tag', this.addTagData, (data) => {
          if (data.code === 401) {
            glb.alert_info(this, '请登录')
            return
          }
          this.getTags()
          this.dialogFormVisible = false
        })
      },
      //获取所有标签
      getTags() {
        glb.get(this, '/tag', {}, (data) => {
          this.tags = []
          if (data.code === 200) {
            let layer1Arr = data.data.filter(x => x.layer === 1)
            let layer2Arr = data.data.filter(x => x.layer === 2)
            layer2Arr.forEach(x => {
              x.open = 0
              x.hover = 0
            })
            layer1Arr.forEach(x1 => {
              x1.children = (layer2Arr.filter(x2 => x2.parentId === x1.id) || [])
              x1.open = 0
              x1.hover = 0
              this.tags.push(x1)
            })
          }
        })
      },

      //显示某个笔记
      getNote() {
        glb.get(this, '/note/' + this.note.id, {}, (data) => {
          if (data.code === 200 && data.ok === 1) {
            this.note = data.data
            if (this.note.tagId1 > 0) {
              this.tags.find(x => x.id === this.note.tagId1).open = 1
            }
            if (this.note.tagId2 > 0) {
              this.tags.forEach(x => {
                x.children.forEach(y => {
                  if (y.id === this.note.tagId2) {
                    y.open = 1
                  }
                })
              })
            }

          }
          else {
            this.$router.push({path: '/'})
          }
        })
      },

      //保存
      save() {
        if (this.note.tagId1 === 0) {
          glb.alert_info(this, '请选择标签')
          return
        }
        this.note.profile = this.note.content.replace(/[^\u4e00-\u9fa5\s]/gi, "");
        if (this.note.profile && this.note.profile.length > this.profileMaxLength) {
          this.note.profile = this.note.profile.substring(0, this.profileMaxLength)
        }
        glb.post(this, '/note/' + this.note.id, this.note, (data) => {
          glb.alert_info(this, data.msg);
          if (data.code === 200) {
            if (data.ok === 1 && this.note.id === 0) {
              this.note.id = data.data.id
              this.$router.push({path: '/note/save/' + data.data.id})
            }
          }

        })
      },
      //图片保存
      imgAdd(fileName, data) {
        glb.noteImgUpload(this, fileName, data, (url) => {
          this.$refs.md.$img2Url(fileName, glb.cdn.url + url)
        })
      },

      test() {
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
    border: 0 solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    width: 100%;
  }

  .inputShadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
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
