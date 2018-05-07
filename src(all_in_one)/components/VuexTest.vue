<template>
  <div class="vuex_test">
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="odd">O</button>
    <input type="text" v-model="count">
    <div>当前数字大小：{{count}}; 是：{{type}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["count", "type"]),
  methods: mapActions(["add", "minus", "odd"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.vuex_test {
  width: 500px;
  height: 100px;
  box-shadow: 0px 0px 10px #999;
  margin: auto;
  padding-top: 40px;
  button {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
  input {
    width: 30px;
    height: 30px;
    font-size: 20px;
    margin-left: 50px;
  }
  div {
    line-height: 50px;
    font-size: 20px;
  }
}
</style>
