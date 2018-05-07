<template>
  <div class="vuex_test">
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <input type="text" v-model="count">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
  export default{ 
    computed: mapGetters([
      'count'
    ]),
    methods: mapActions([
      'add',
      'minus'
    ])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .vuex_test{
    width: 500px;
    height: 100px;
    box-shadow: 0px 0px 10px #999;
    margin: auto;
    padding-top: 40px;
    button{
      width: 30px;
      height: 30px;
      font-size: 20px;
    }
    input{
      width: 30px;
      height: 30px;
      font-size: 20px;
      margin-left: 50px;
    }
  }
</style>
