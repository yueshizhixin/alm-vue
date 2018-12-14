<template>
  <div>
    <el-row>

    </el-row>
    <el-input placeholder="请输入..." v-model="title" style="width: 50vw;">
      <template slot="prepend">标题</template>
    </el-input>

    <mavon-editor :placeholder="placeholder" @save="save" v-model="value"/>
  </div>
</template>

<script>
  export default {
    name: "save",
    data() {
      return {
        title:'',
        placeholder:'请输入...',
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
    methods:{
      save(){
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success',
          showClose:true,
        });
        console.log(this.value)
      }
    }
  }
</script>

<style scoped>
</style>
