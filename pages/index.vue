<template>
  <div>
    <video id="bg-video" autoplay muted>
      <source src="~assets/video/bg.mp4" type="video/mp4">
    </video>
    
    <div id="gnb">
      <div class="logo-wrap">
        <img src="~assets/img/logo-header.png" class="logo">
      </div>
      <div class="btn-wrap">
        <button class="btn btn-sign-up">Sign Up</button>
        <button class="btn btn-login">Log in <img src="~assets/img/icon/profile.png" class="icon"> </button>
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

    <div id="ftr">
      <div class="content-wrap">
        <div class="col">
          <img src="~assets/img/logo-footer.png" class="logo">
          <div class="sns-wrap">
            <img src="~assets/img/icon/i-sns-facebook.png" class="icon">
            <img src="~assets/img/icon/i-sns-youtube.png" class="icon">
            <img src="~assets/img/icon/i-sns-instagram.png" class="icon">
          </div>
        </div>
        <div class="col">
          Waynehills Ventures, 2F Pinescare 3, 11, Magokjungang 8-ro 5-gil, Gangseo-gu, Seoul &nbsp;|&nbsp; CRN : 547-87-01358 &nbsp;|&nbsp; Founder : Lee Su-min
        </div>
        <div class="col">
          <img src="~assets/img/icon/i-copyright.png" class="icon-copyright">
          Copyright 2021 waynehills ventures all rights reserved &nbsp;|&nbsp; Terms and conditions &nbsp;|&nbsp; e-mail:waynehills.ventures@gmail.com &nbsp;|&nbsp; Powered by Shutterstock
        </div>
        <div class="select-lang">
          <img src="~assets/img/icon/i-global.png" class="icon">
          <div class="lang">English</div>
          <img src="~assets/img/icon/i-down-arrow.png" class="icon-arrow">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/css/index.css";
export default {
  data: () => ({

  }),
  mounted() {

  },
  methods: {
    // async api() {

    // }
  }
}
</script>