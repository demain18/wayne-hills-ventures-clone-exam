<template>
  <div>
    <video id="bg-video" autoplay muted loop>
      <!-- <source src="~assets/video/bg.mp4" type="video/mp4"> -->
    </video>
    
    <div id="gnb">
      <div class="logo-wrap">
        <img src="~assets/img/logo-header.png" class="logo">
      </div>
      <div class="btn-wrap">
        <button @click="eventSignUp()" class="btn btn-sign-up">Sign Up</button>
        <button @click="eventLogIn()" class="btn btn-login">Log in <img src="~assets/img/icon/profile.png" class="icon"></button>
      </div>
    </div>

    <div id="cnt">
      <div class="content-wrap">
        <img src="~assets/img/cnt-title.png" class="title">
        <p class="content">Fast and convenient video creation A.I <img src="~assets/img/icon/play.png" class="icon-play"></p>
      </div>
      <div class="banner-wrap">
        <div class="banner">
          <img src="~assets/img/main-illust.png" class="illust">
          <div class="content">
            <p class="sub"> A.I video made from text </p>
            <p class="title"> Creating A.I video </p>
            <p class="txt"> *Please log in to download the video. </p>
          </div>
        </div>  
      </div> 
    </div>

    <Footer/>
  </div>
</template>

<script>
import common from '~/mixins/common.js';
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export default {
  mixins: [common],
  data: () => ({

  }),
  mounted() {

  },
  methods: {
    eventSignUp() {
      $cookies.set('loginStep', 1);
      this.routerPush('/login');
    },
    eventLogIn() {
      $cookies.set('loginStep', 0);
      this.routerPush('/login');
    }
  }
}
</script>

<style scoped src="~/assets/css/index.css"></style>