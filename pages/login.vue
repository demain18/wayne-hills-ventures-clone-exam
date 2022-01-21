<template>
  <div>
    <video id="bg-video" autoplay muted loop>
      <source src="~assets/video/bg.mp4" type="video/mp4">
    </video>
    
    <div id="gnb">
      <div class="logo-wrap">
        <img src="~assets/img/logo-login.png" class="logo">
      </div>
    </div>

    <div id="cnt">
      <div class="login-wrap">
        <div class="gnb">
          <img  @click="routerPush('/')" src="~assets/img/icon/i-close.png" class="icon-close">
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import common from '~/mixins/common.js';
export default {
  mixins: [common],
  data: () => ({

  }),
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped src="~/assets/css/index.css"></style>
<style scoped src="~/assets/css/login.css"></style>