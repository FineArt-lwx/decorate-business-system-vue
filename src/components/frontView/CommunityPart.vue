<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
    </div>
    <div style="position:relative;">
      <pan-thumb :image="avatar" class="panThumb" />
      <div class="communityTitle">
        <a class="ellipsis-one-line wg100 inlineblock font-color-3 font-weight900 " href="#">
          {{ text }}
        </a>
      </div>
      <div style="padding-top:48px;" class="progress-item font-gray-color lh24 ellipsis-two-line">
        社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介
        社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介
        社团简介社团简介社团简介社团简介社团简介社团简介
      </div>
    </div>
  </el-card>
</template>

<script>
// import { mapGetters } from 'vuex'
import PanThumb from '@/components/frontView/PanThumb'
import Mallki from '@/components/frontView/Mallki'

export default {
  name: 'CommunityPart',
  components: { PanThumb, Mallki },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      },
      text: '方冰颖asdffdsafdaojdasopjdsfoijsdofjoiaisdjfoiajidsifojoiajfoisjdfoasjodfoisaidfjsdo',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    }
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'avatar',
    //   'roles'
    // ])
  }
}
</script>

<style lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px!important;
    width: 70px!important;
    position: absolute!important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    /deep/ .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px){
    .mallki-text{
      display: none;
    }
  }
}
// .aaa {
//   font-weight: 800;
//   color: red;
//   position: relative;
//     display: inline-block;
//     line-height: 1;
// }
.communityTitle {
  position: absolute;
  left: 80px;
  width: 70%;
}
</style>
