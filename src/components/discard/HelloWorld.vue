<template>
  <div class="hello">
    <div>{{$store.state.test}}</div>
    <button @click="start">start</button>
    <div>
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import VeLine from 'v-charts/lib/line.common' // 折线图（圆滑的线）
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '王旭'
    }
  },
  components: {
    VeLine
  },
  mounted () {
    console.log(Base64.encode(this.name))
    console.log(Base64.decode(Base64.encode(this.name)))
  },
  methods: {
    start () {
      this.$store.dispatch('change', 'xiaoxiao')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/style/css/common.css';
  @import '../../assets/style/scss/default';
  .hello {
    font-size: $font18;
    .test {
      font-size: $font18;
    }
    .test2 {
      font-size: 18px;
    }
  }
</style>
