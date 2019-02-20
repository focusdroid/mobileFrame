<template>
  <!--体重记录start-->
  <div>
    <div class="nav-card-title">
      <div class="nav-card-titleone">体重</div>
      <div class="nav-card-titletwo">
        <p>
          <span class=";">推荐值：</span>
          <span class="nav-font-spantwo">45kg</span>
          <span class="ml10 nav-font-spanthree">单位：kg</span>
        </p>
      </div>
    </div>
    <div class="nav-card-content">
      <div id="weightCharts" :style="{width: '100%', height: '300px'}"></div>
    </div>
  </div>
  <!--体重记录end-->
</template>

<script>
export default {
  name: 'WeightCharts',
  mounted () {
    this.weightChartsCreate()
  },
  methods: {
    weightChartsCreate () {
      let weightCharts = this.$echarts.init(document.getElementById('weightCharts'))
      weightCharts.setOption({
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
  .nav-card-title {
    margin-top: 26px;
    .nav-card-titleone {
      fonr-size: 18px;
    }
    .nav-card-titletwo {

    }
  }
</style>
