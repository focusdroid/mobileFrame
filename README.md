# 版本信息
```
# node 10.15.0
# npm 6.4.1
# cnpm 6.0.0
```
### 插件组成或文件组成
```
0. vue
1. vue-router
2. vuex
3. axios
4. vant（ui [https://www.npmjs.com/package/vant] ）
5. scss
6. rem.js/calc(以后项目首选)
7. border.js
8. reset.js
```

### 至今还缺少
```
0. 300ms延迟解决方案
1. vant ui框架的引入[2019/02/11 10:30已解决, 按需加载]
2. 折线图的解决方案({[https://v-charts.js.org/#/start] 使用按需加载})
3. loading方案
```

### 文件放置位置
```
0. 外部引入的文件，放在static下面的目录
1. 自定义的文件（js/css）放置在
2. components中放置文件的主要的页面文件（%注意命名%）
3. pages放置抽离出来的公共组件（%注意命名%）
4. 在view中放置自定义的组件（各种网络连接错误的页面）
```
