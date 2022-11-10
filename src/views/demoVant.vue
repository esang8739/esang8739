<template>
  <div class="bigBox">
    <!-- 最上方tag -->
    <div class="tag">
      <h1>我的求助</h1>
      <van-button
        icon="replay"
        color="#fff"
        plain
        style="border: none; background-color: #000"
      />
    </div>
    <!-- 个人信息展示 -->
    <div class="yourInfamation">
      <van-row>
        <van-col span="8">
          <van-image
            round
            width="100"
            height="100"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
        /></van-col>
        <van-col span="8"> <van-field v-model="name" readonly /> </van-col>
      </van-row>
    </div>
    <!-- 提示tag -->
    <div class="more">
      <van-button type="default">您收到2条消息</van-button
      ><van-icon name="comment-o" />
    </div>
    <!-- 朋友圈卡片 -->
    <div class="pyq">
      <div class="one">
        <p>
          多么美好的一个雨天呀！下雨天就是一个适合睡觉
          的天气，不睡觉都对不起老天爷赏脸。有什么办法 能让我避开老师睡觉吗？
          <van-icon name="question" />
        </p>
        <img
          src="../assets/images/one1.png"
          style="width: 100%; margin: 16px 0"
        /><van-cell-group>
          <van-field v-model="comment" placeholder="评论" />
        </van-cell-group>
      </div>
      <div class="two">
        <p style="font-size: 20px; font-weight: 550; color: rgb(103, 103, 103)">
          我又来啦，哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈啊哈
          哈哈哈哈啊哈哈哈哈，想不到吧。还是上面那个问 题，来人帮帮我。
          <van-icon id="dui" name="checked" />
        </p>
        <img
          src="../assets/images/one1.png"
          style="width: 100%; margin: 16px 0"
        />
        <p><span>爱打瞌睡：</span>来个人吧，来个人吧</p>
        <p><span>佳佳佳：</span>我不是人</p>
        <p><span>文助豪</span>&nbsp;回复&nbsp;<span>佳佳佳：</span>对</p>
        <p><span>曾俊：我证明楼上说得对</span></p>
        <p><span>爱打瞌睡：</span>牛蛙</p>
        <van-cell-group>
          <van-field v-model="comment2" placeholder="评论" />
        </van-cell-group>
      </div>
    </div>
    <!-- 下方导航栏 -->
    <div class="downNav">
      <van-row gutter="20">
        <van-col span="8"
          ><van-button type="default"
            ><van-icon name="bell" /> <br />动态
          </van-button></van-col
        >
        <van-col span="8"
          ><van-button type="default"
            ><van-icon name="friends" /> <br />求助
          </van-button></van-col
        >
        <van-col span="8"
          ><van-button type="default"
            ><van-icon name="manager" /> <br />个人中心
          </van-button></van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "爱打瞌睡",
      comment: "",
      comment2: "",
    };
  },
};
</script>
<style lang="less" scoped>
.bigBox {
  width: 100%;

  .tag {
    position: relative;
    text-align: center;
    background: #000;
    height: 80px;
    h1 {
      display: inline-block;
      color: #ffff;
      line-height: 80px;
    }
    .van-button {
      position: absolute;
      top: 20px;
      left: 423px;
    }
  }
}
.yourInfamation {
  position: relative;
  background: #000;
  height: 120px;

  .van-image {
    margin-left: 12px;
  }
  .van-field {
    position: absolute;
    top: 21px;
    left: 116px;
    width: 200px;
    color: #fff;

    background: #000;
  }
  /deep/.van-field__control {
    color: #fff;
    font-size: 20px;
  }
}
.more {
  height: 60px;
  text-align: center;
  .van-button {
    border: none;
    padding-top: 20px;
    color: rgb(135, 135, 135);
  }
}
.pyq {
  > div {
    padding: 24px 24px;
    margin: 20px auto;
    width: 80%;
    border-radius: 12px;
    box-shadow: 5px 5px 30px 1px rgba(216, 230, 239, 0.6);
  }
  p {
    font-size: 20px;
    font-weight: 550;
    color: rgb(103, 103, 103);
    .van-icon {
      color: red;
    }
  }
  .van-cell-group,
  .van-cell {
    border-radius: 8px;
  }
  .van-cell-group {
    border: 2px solid rgb(136, 136, 136);
  }
  .two {
    p {
      font-size: 15px;
      font-weight: normal;
      margin: 12px 0;
    }
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
#dui {
  color: rgb(14, 238, 18);
}
.downNav {
  height: 120px;
  border: 1px solid rgb(208, 207, 207);
}
.downNav {
  .van-button {
    margin-top: 42px;
    border: none;
    width: 100px;
    margin-left: 52px;
    .van-icon {
      font-size: 50px;
    }
  }
}
</style>
