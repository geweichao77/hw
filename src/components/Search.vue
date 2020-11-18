<template>
  <div class="search-container">
        <div class="search-container-head">
            <a href="#" @click="goback" class="goback">＜</a>
            <input type="text" class="search-container-head-input" placeholder="FreeBuds Pro">
            <span>搜索</span>
        </div>
        <div class="hot-search"><span>热门搜索</span></div>
        <p>
            <span>FreeBuds Pro</span>
            <span>荣耀30</span>
            <span>华为数码超品日</span>
        </p>
        <p>
            <span>荣耀X10</span>
            <span>nova 7</span>
            <span>荣耀Play4</span>
            <span>华为畅享游戏周</span>
        </p>
        <p>
            <span>MatePad  5G 10.4英寸</span>
            <span>笔记本新品</span>
            <span>畅享20</span>
        </p>
    </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped>
.search-container {
  width: 100%;
  height: 100%;
}

.search-container-head {
  height: 50px;
  width: 100%;
  line-height: 50px;
}

.search-container-head > a {
  display: inline-block;
  width: 15%;
  text-align: center;
}

.search-container-head-input {
  height: 70%;
  width: 65%;
  background-color: #f5f5f5;
  border-radius: 30px;
  border: none;
  outline: none;
  /* text-align: center; */
}

.search-container-head > span {
  display: inline-block;
  width: 15%;
  text-align: center;
}

input::-webkit-input-placeholder {
  color: #b9b3b3;
  font-size: 16px;
  padding-left: 35px;
}

.hot-search {
  height: 35px;
  line-height: 35px;
  font-weight: 700;
  width: 100%;
  font-size: 15px;
}

.hot-search > span {
  display: inline-block;
  width: 25%;
  text-align: center;
}

p {
  width: 100%;
}

p > span {
  display: inline-block;
  /* width: 25%; */
  white-space: nowrap;
  font-size: 13px;
  margin-left: 30px;
  line-height: 25px;
  background-color: #f9f9f9;
  margin-top: 15px;
}

.goback{
  color: #333;
  font-size: 25px;
}
</style>