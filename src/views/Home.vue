<template>
  <el-container>
    <el-header style="background-color: #3a5195; height: 80px">
      <!-- 头部菜单栏区域 -->
      <div class="top_nav">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="" />
        </div>
        <nav>
          <!-- 一级菜单栏 -->
          <ul class="oneNav">
            <li>
              学校概况
              <!-- 二级菜单栏 -->
              <div id="SecondaryNav">
                <ul>
                  <li>学校简介</li>
                  <li>组织机构</li>
                  <li>大事记</li>
                  <li>校园环境</li>
                  <li>大学精神</li>
                </ul>
                <ul>
                  <li>领导致辞</li>
                  <li>理念特色</li>
                  <li>领导关怀</li>
                  <li>影像东软</li>
                  <li>党群工作</li>
                </ul>
              </div>
            </li>
            <li>学院服务</li>
            <li>新闻中心</li>
            <li>招生就业</li>
            <li>人才培养</li>
            <li>服务指南</li>
            <li>友情链接</li>
          </ul>
        </nav>
      </div>
    </el-header>
    <el-aside width="320px" style="background-color: #3a5195"
      ><ul>
        <li>学校新闻</li>
        <li>通知通告</li>
        <li>聚焦东软</li>
        <li>媒体聚焦</li>
        <li>信息公开</li>
      </ul></el-aside
    >
    <el-main><router-view></router-view></el-main>
    <el-footer style="background-color: #5c5c5c; height: 200px">
      <!-- 页脚开始 -->
      <div class="footer">
        <!-- 页脚logo -->
        <div class="footerLogo">
          <img src="../assets/images/five.png" alt="" />
        </div>
        <!-- 页脚信息 -->
        <div class="footerText">
          <span>投诉举报方式：xf@nsu.edu.cn 、 028-64888000 </span><br />
          <span>地址：四川省 成都市 都江堰市 青城山镇东软大道1号 </span><br />
          <span>邮编：611844 </span><br />
          <span
            >[蜀ICP备12011972号-2](https://beian.miit.gov.cn/)<br />
            Copyright © 2002-2022 成都东软学院 All Rights Reserved</span
          >
        </div>
        <!-- 页脚图标 -->
        <div class="footerIfcon">
          <ul class="footerimg">
            <li>
              <a href="#"
                ><img src="../assets/images/f_contactus.png" alt=""
              /></a>
            </li>
            <li class="weixin">
              <a href="#"
                ><div id="erweima"></div>
                <img src="../assets/images/f_wx.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#"><img src="../assets/images/f_wb.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="../assets/images/f_tt.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="../assets/images/f_jb.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="../assets/images/f_lz.png" alt="" /></a>
            </li>
          </ul>
        </div></div
    ></el-footer>
  </el-container>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
a {
  cursor: hand;
}
.top_nav,
.footer {
  height: 80px;
  width: 1200px;
  margin: 0 auto;
  .logo {
    margin-left: 80px;
    line-height: 112px;
    width: 180px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.oneNav {
  li {
    width: 85px;
    display: inline-block;
    color: #ffff;
  }
}
nav {
  margin: -34px 280px;
}
#SecondaryNav {
  display: none;
  float: left;
  width: 400px;
  height: 350px;
  background-color: #3a5195;
  opacity: 0.8;
  ul {
    display: inline-block;
    margin: 8px 0px;
    li {
      display: block;
      margin: 40px 25px;
    }
  }
}
.oneNav > li:hover {
  background: #8da8ef;
}
.oneNav > li:nth-child(1):hover #SecondaryNav {
  display: block;
}
.footer {
  position: absolute;
  left: 50%;
  margin-left: -578px;
  color: #fff;
  > div {
    display: inline-block;
  }
  margin-top: 45px;
  img {
    display: inline-block;
    width: 130px;
    height: 130px;
  }
}

.footerText {
  margin-left: 25px;
}
.footerIfcon {
  margin-left: 80px;
  img {
    margin: 0 8px;
    width: 50px;
    height: 50px;
  }
  li {
    display: inline-block;
  }
}
#erweima {
  position: relative;
  top: -2px;
  left: -2px;
  width: 80px;
  height: 80px;
  border-bottom: none;
}
.weixin {
  height: 55px;
}
.weixin :hover #erweima {
  background: url(../assets/images/wxcode.jpg) no-repeat;
  transition: all 0.6s;
}
.footerIfcon img:hover {
  transition: all 0.4s;
  filter: drop-shadow(15px -5px 3px #0b0b0b);
}
/deep/.el-aside {
  overflow: none;
  position: absolute;
  top: 100px;
  left: 158px;
  height: 600px;
  ul {
    padding: 0;
  }
  li {
    display: block;
    height: 50px;
    padding-left: 38px;
    text-align: left;
    list-style: none;
    font-size: 20px;
    color: #fff;
    margin-top: 20px;
    line-height: 50px;
  }
}
.el-aside li:hover {
  background: url(../assets/images/bg.png) no-repeat;
  background-position: -73px 7px;
  box-shadow: -12px 6px #375cbc;
  transition: all 0.5s;
}
</style>
