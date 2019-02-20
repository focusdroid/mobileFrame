<template>
  <div>
    <nav class="nav">
      <div class="nav-back">
        <div class="nav-back-one">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="nav-back-two">&lt;</div>
        <div class="nav-back-three"></div>
      </div>
      <div class="nav-title">体重记录</div>
      <div class="nav-date">
        <div class="nav-date-one"></div>
        <div class="nav-date-two">icon日历</div>
        <div class="nav-date-three"></div>
      </div>
    </nav>
    <header class="nav-header-navtitle">
      <van-tabs type="card" @click="con" color="#427eff">
        <van-tab title="检查记录" name="inspect" class="mt20 plr10"></van-tab>
        <van-tab title="30天" name="Thirty" class="mt20 plr10"></van-tab>
        <van-tab title="90天" name="Ninety" class="mt20 plr10"></van-tab>
      </van-tabs>
      <div class="">
        <WeightCharts></WeightCharts>
        <FatPrcentage></FatPrcentage>
        <MuscleRate></MuscleRate>
      </div>
    </header>
  </div>
</template>
<script>
export default { // 曲线
  name: 'Curve',
  data () {
    return {
    }
  },
  components: {
    WeightCharts: () => import('../../pages/charts/WeightCharts'),
    FatPrcentage: () => import('../../pages/charts/FatPrcentage'),
    MuscleRate: () => import('../../pages/charts/MuscleRate')
  },
  mounted () {
  },
  methods: {
    con (index, title, name) {
      console.log(index, title, name)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/style/css/common.css';
  @import '../../assets/style/scss/default';
  .nav-header-navtitle {
    padding-top: 56px;
  }
  .nav-card-title {
    display: flex;
    width: 100%;
    .nav-card-titleone {
      width: 50%;
    }
    .nav-card-titletwo {
      width: 50%;
      display: flex;
    }
  }
</style>
<style>
  .van-tabs__nav--card {
    height: 36px;
    line-height: 36px;
  }
  .van-tabs--card .van-tabs__wrap {
    height: 37px;
  }
  .van-tab span {
    line-height: 36px;
  }
</style>
