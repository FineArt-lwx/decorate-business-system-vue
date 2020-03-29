<template>
  <div class="h60 bg-blue-1">
    <ul class="mt0 sub-menu-li h60">
      <li @click="to('/front')">首页</li>
      <li @click="to('/communityPage')">社团</li>
      <li @click="to('/activityPage')">活动</li>
      <li @click="to('/newsFlash')">新闻动态</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'BanerMenu',
  methods: {
    to(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
<style scoped>
.sub-menu-li {
  padding: 14px 80px;
}
.sub-menu-li li {
  list-style: none;
  padding: 0.3rem 1rem;
  margin-right: 50px;
  border-radius: 14px;
  float: left;
  color: #fff;
  line-height: 20px;
  font-size: 16px;
  /* background-color: blue; */
  cursor: pointer;
}
.sub-menu-li li:hover {
  background-color: rosybrown;
}
</style>