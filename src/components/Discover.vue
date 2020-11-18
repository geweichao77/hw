<template>
  <div class="discover" @scroll="showtop">
    <div class="discover-head" id="top">
      <h2>发现频道</h2>
      <ul class="discover-head-ul">
        <li class="discover-head-li">
          <img src="../assets/Homeimg/discover-head-img.png" alt="" />
          <p>商城直播</p>
        </li>
        <li class="discover-head-li">
          <img src="../assets/Homeimg/discover-head-img1.png" alt="" />
          <p>邀请有礼</p>
        </li>
        <li class="discover-head-li">
          <img src="../assets/Homeimg/discover-head-img2.png" alt="" />
          <p>直播预告</p>
        </li>
        <li class="discover-head-li">
          <img src="../assets/Homeimg/discover-head-img3.png" alt="" />
          <p>粉丝互动</p>
        </li>
        <li class="discover-head-li">
          <img src="../assets/Homeimg/discover-head-img4.png" alt="" />
          <p>华为众测</p>
        </li>
      </ul>
      <h2 class="h2">商城头条</h2>
      <div class="discover-head-div">
        <span>声明</span>
        <img
          class="discover-head-img"
          src="../assets/Homeimg/gantanhao.png"
          alt=""
        />
      </div>
      <ul class="discover-head-ul1">
          <li class="discover-head-li1">
              <a href="#"><img src="../assets/Homeimg/discover-head-tab1.png" alt=""></a>
          </li>
          <li class="discover-head-li1">
              <a href="#"><img src="../assets/Homeimg/discover-head-tab1.png" alt=""></a>
          </li>
          <li class="discover-head-li1">
              <a href="#"><img src="../assets/Homeimg/discover-head-tab1.png" alt=""></a>
          </li>
          <li class="discover-head-li1">
              <a href="#"><img src="../assets/Homeimg/discover-head-tab1.png" alt=""></a>
          </li>
          <li class="discover-head-li1">
              <a href="#"><img src="../assets/Homeimg/discover-head-tab1.png" alt=""></a>
          </li>
      </ul>
      <ul class="journalism">
      <li >
           <a href="#"><img src="../assets/Homeimg/journalism-img1.png" alt=""></a>
      </li>
      <li class="journalism">
          <a href="#"><img class="journalism-img" src="../assets/Homeimg/journalism-img2.png" alt=""></a>
      </li>
      <li class="journalism">
          <a href="#"><img src="../assets/Homeimg/journalism-img3.png" alt=""></a>
      </li>
      <li class="journalism">
          <a href="#"><img src="../assets/Homeimg/journalism-img4.png" alt=""></a>
      </li>
    </ul>
    <ul class="journalism1">
      <li >
           <a href="#"><img src="../assets/Homeimg/journalism-img5.png" alt=""></a>
      </li>
      <li class="journalism">
          <a href="#"><img  src="../assets/Homeimg/journalism-img6.png" alt=""></a>
      </li>
      <li class="journalism">
          <a href="#"><img src="../assets/Homeimg/journalism-img7.png" alt=""></a>
      </li>
    </ul>
    </div>
    <a href="#top" class="gohead" v-show="gotop">
        <img src="../assets/Homeimg/gohead.png" alt="">
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gotop:false
    };
  },
  methods:{
    showtop(event){
      if(event.target.scrollTop>500){
        this.gotop=true;
      }
      if(event.target.scrollTop<500){
        this.gotop=false;
      }
    },
  }
};
</script>

<style scoped>
.discover {
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  overflow: auto;
  text-align: center;
  position: relative;
}

.discover-head {
  width: 100%;
  height: 50%;
  background: white;
  position: relative;
}

h2 {
  font-weight: 400;
  font-size: 21px;
  padding-top: 10px;
}

.discover-head-ul {
  margin-top: 5%;
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.discover-head-li {
  flex-shrink: 0;
  width: 20%;
}

.discover-head-li p {
  color: #9b9b9b;
  font-size: 15px;
}

.discover-head-li img {
  width: 46px;
  height: 46px;
}

.h2 {
  font-weight: 400;
  font-size: 21px;
  padding-top: 25px;
  display: inline-block;
}

.discover-head-div {
  display: inline-block;
  text-align: right;
  position: absolute;
  right: 10px;
  top: 50.5%;
}

.discover-head-div span {
  display: inline-block;
  font-size: 13px;
  color: #9b9b9b;
  vertical-align: middle;
}

.discover-head-img {
  display: inline-block;
  vertical-align: middle;
}

.discover-head-ul1 {
  margin-top: 5%;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  overflow: auto;
  margin-top: 0;
}

.discover-head-li1 {
  flex-shrink: 0;
  display: flex;
  width: 25%;
  height: 70%;
  overflow: auto;
  margin-left: 5px;

}

.discover-head-li1 img{
    margin-top: 9.5px;
    width: 100%;
    height: 80%;
}

.journalism{
    width: 100%;
}

.journalism img{
    width: 100%;
}

.journalism-img{
    margin:20px auto;
}

.gohead{
  display: inline-block;
  width: 52px;
  height: 52px;
  background-color: white;
  position: absolute;
  right: 20px;
  bottom: 70px;
  position: fixed;
  border-radius: 50%;
  text-align: center;
  line-height: 52px;
  z-index: 100;
}

.gohead img{
  width: 35px;
  height: 35px;
  margin-top: 10px;
}

</style>