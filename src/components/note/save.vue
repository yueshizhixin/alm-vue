<template>
  <div>
    <el-row>
      <el-col :md="3" style=" overflow-y:auto;  height:calc(100vh - 100px);">
        <el-row v-for="x of 5">
          <el-col :md="24">
            <el-button class="aside-rightdivbutton">&nbsp;&nbsp;{{x}}</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="4">
        <el-input placeholder="请输入..." v-model="title">
        </el-input>
      </el-col>
      <el-col :md="17">
        <el-row>
          <el-col :md="6">
            <el-input placeholder="请输入..." v-model="title">
            </el-input>
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
  export default {
    name: "save",
    data() {
      return {
        title: '',
        placeholder: '请输入...',
        value: '- 非IE浏览器\n' +
          '接口返回的数据格式为\n' +
          '```\n' +
          '<xml ...>\n' +
          '  <string ...>\n' +
          '    [{data},{data},{data}]\n' +
          '  </string>\n' +
          '</xml>\n' +
          '```\n' +
          '```\n' +
          '//DOM解析器\n' +
          'var parser = new DOMParser();\n' +
          '//读取返回字符串\n' +
          'var _xml = parser.parseFromString(data, "text/xml");\n' +
          '//获取节点内容\n' +
          'var jsonXml = _xml.getElementsByTagName("string")[0].innerHTML;\n' +
          '//获得json数组\n' +
          'var jsonArr = JSON.parse(jsonXml);'
      }
    },
    methods: {
      save() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success',
          showClose: true,
        });
        console.log(this.value)
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
</style>
