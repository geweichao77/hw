<template>
  <div class="sort">
    <div class="sort-head">
        <p class="sort-head-p" @click="gosearch">
            <img src="../assets/Homeimg/sousuo.png" alt="" />
            <span>畅想20</span>
        </p>
        <img class="sort-head-p-img" src="../assets/Homeimg/sort-img1.png" alt=""/>
    </div>

    <div class="sort-content">
        <div class="sort-left">
            <div class="sort-left-div" v-for="(item, index) in list" :key="index">
                <span @click="tab(index, item.id)" :class="{ active: num == index }">{{ item.c1name }}</span>
            </div>
      </div>

      <div class="sort-right">
        <!-- 广告 -->
        <div v-if="ads.length > 0">
            <div class="sort-right-content-headimg" v-for="(item, index) in ads" :key="index">
                <img :src="item.url" alt="" />
            </div>
        </div>

        <!-- 数据 -->
        <div class="sort-right-content">
            <div v-for="(item, index) in contentlist" :key="index">
                <div class="sort-right-content-title">{{ item.cname }}</div>
                <div class="sort-right-content-box">
                    <div class="sort-right-content-img" v-for="(item, index) in item.data" :key="index" @click="gocart(index)">
                        <img :src="item.poster" alt="" @click="godetail(index,item.id)" />
                        <p style="fontsize: 13px; color: #666" class="title">{{ item.title }}</p>
                    </div>
                </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


import store from "../store/index.js";
export default {
computed: {
        detaillist() {
        return this.$store.state.detaillist;
    },
    cartlist() {
        return this.$store.state.cartlist;
    },
},

  data() {
    return {
        num: 0,
        list: [],
        contentlist: [],
        ads: [],
    };
  },

  methods: {
    tab(index, c1id) {
        console.log(index, c1id);
        this.num = index;

        if (c1id) {
            this.axios.get("/api/getDataByClass1", {params: { c1id },})
            .then((res) => {
            console.log(res.data);

            this.ads = res.data.ad;

            this.contentlist = res.data.lastData_;
        });
      }
    },
    gocart(index) {
        console.log(index);
    },
    gosearch() {
        this.$router.push("/search");
    },

    godetail(index,pid) {
        this.$router.push("/detail?pid="+pid);

        this.$store.state.detailindex = index;

        this.detaillist.push(this.cartlist[this.$store.state.detailindex]);
    },

    getData() {
        this.axios.get("/api/getDataByClass1", {params: { c1id: 888 },})
       
        .then((res) => {
            this.ads = res.data.ad;

            this.contentlist = res.data.lastData_;
          // console.log(res.data.lastData_);
        });
    },

    getClass1Data() {
        this.axios.get("/api/getClass1data").then((res) => {
        // console.log(res.data);

        this.list = res.data;
        });
    },
},

    created() {
        //左侧一级分类数据
        this.getClass1Data();

        //右侧所有的数据
        this.getData();
    },
};
</script>

<style scoped>
.sort {
  width: 100%;
  height: 100%;
}

.sort-head {
  width: 100%;
  height: 8%;
  /* padding-top: 5px; */
  text-align: center;
}

.sort-head-p {
  margin-left: 20px;
  width: 82%;
  height: 70%;
  background: #f5f5f5;
  border-radius: 30px;
  position: relative;
  top: 10%;
}

.sort-head-p img {
  position: absolute;
  left: 10px;
  top: 27%;
}

.sort-head-p span {
  color: rgb(194, 190, 190);
  font-size: 14px;
  line-height: 35px;
  /* margin-left: 10px; */
  position: absolute;
  left: 35px;
  top: 5%;
}

.sort-head-p-img {
  position: absolute;
  right: 10px;
  top: 10px;
}

.sort-content {
  width: 100%;
  height: 92%;
  display: flex;
  overflow: auto;
}

.sort-left {
  width: 30%;
  height: 100%;
  overflow: auto;
}

.sort-left-div {
  width: 100%;
  height: 51px;
}

.sort-left-div span {
  display: inline-block;
  width: 80%;
  margin-left: 15%;
  font-size: 15px;
  color: #000;
}

.active {
  border-right: 3px solid #e01d20;
}

.sort-right {
  width: 70%;
  height: 100%;
  overflow: auto;
}

.sort-right-content {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.sort-right-content-headimg,
.sort-right-content-headimg > img {
  width: 100%;
  height: 80px;
}

.sort-right-content-headimg {
  margin-bottom: 10px;
}

.sort-right-content-title {
  width: 100%;
  height: 46px;
  text-align: center;
  line-height: 46px;
}

.sort-right-content-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.sort-right-content-img {
  width: 33.3%;
  height: 124px;
  text-align: center;
}

.sort-right-content-img > img {
  width: 55px;
  height: 55px;
  margin-top: 20px;
}
.title {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font: 0.3rem normal normal;
}
</style>