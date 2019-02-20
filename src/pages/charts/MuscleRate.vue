<template>
  <!--骨骼肌率start-->
  <div>
    <div class="nav-card-title">
      <div class="nav-card-titleone">体脂率</div>
      <div class="nav-card-titletwo">
        <p>推荐值：<span>45kg</span></p>
      </div>
    </div>
    <div class="nav-card-content">
      <div id="MuscleRate" :style="{width: '100%', height: '300px'}"></div>
    </div>
  </div>
  <!--骨骼肌率end-->
</template>

<script>
export default {
  name: 'MuscleRate',
  mounted () {
    this.MuscleRateCreate()
  },
  methods: {
    MuscleRateCreate () {
      let MuscleRate = this.$echarts.init(document.getElementById('MuscleRate'))
      MuscleRate.setOption({
        title: { text: '' },
        tooltip: {},
        xAxis: {
          data: [ '1', '2', '3', '4', '5', '6' ]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/style/css/common.css';
</style>
