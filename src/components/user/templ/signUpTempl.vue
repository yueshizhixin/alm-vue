<template>
  <div>
    <el-dialog title="提示" :visible.sync="visi" width="30%" center
               :close-on-click-modal="false"
               :modal-append-to-body="false"
               :show-close="false"
    >
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="$emit('signUpEve','signUpData')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "signUpTempl",
    props: ['visi'],
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped>

</style>
