<template>
  <div id="frame">
    <div id="snb">
    <div class="btn btn-home">
      <img src="~assets/img/ttv-logo.png" class="icon-logo">
    </div>
    <!-- <div class="btn btn-active">
      <img src="~assets/img/icon/i-text.png" class="icon">
    </div>
    <div class="btn">
      <img src="~assets/img/icon/i-wand.png" class="icon">
    </div>
    <div class="btn">
      <img src="~assets/img/icon/i-download.png" class="icon">
    </div> -->
    <div v-for="(item,index) in items" :key="index" :class="{'btn-active':index==itemNow}" @click="itemNow = index" class="btn">
      <img :src="require(`~/assets/img/icon/`+item.icon+`.png`)" class="icon">
    </div>
  </div>

    <div id="cnt">
      <div class="cnt-wrap">
        <div class="header-wrap">
          <p class="title">Step {{ itemNow+1 }}. {{ items[itemNow].name }}</p>
          <div class="auth-info">
            <img src="~assets/img/icon/profile-color.png" class="icon-profile">
            <span class="email">example@gmail.com</span>
            <img src="~assets/img/icon/i-down-arrow.png" class="icon-arrow">
          </div>
          <button v-if="itemNow==0" @click="itemNow = 1" class="ai-btn">Next</button>
          <button v-else-if="itemNow==1" @click="itemNow = 2" class="ai-btn">Next</button>
          <button v-else-if="itemNow==2" class="ai-btn">Next</button>
        </div>

        <div v-if="itemNow==0" class="content-wrap content-wrap-1">
          <textarea v-model="items[0].data.desc" @keyup="charCounting(0)" placeholder="Please enter 500-5,000 characters" class="text-wrap"></textarea>
          <div class="ftr-wrap">
            <p class="desc">*Enter your text and set it up, then click the Next Step button</p>
            <p class="character-count">Current number of characters : {{ items[0].data.charCount }}</p>
          </div>
        </div>

        <div v-else-if="itemNow==1" class="content-wrap">
          test
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import common from '~/mixins/common.js';
export default {
  mixins: [common],
  data: () => ({
    items: [
      {
        icon: 'i-text',
        active: false,
        name: 'Enter text',
        data: {
          desc: '',
          charCount: 0
        }
      },
      {
        icon: 'i-wand',
        active: false,
        name: 'Video editing',
        data: {}
      },
      {
        icon: 'i-download',
        active: false,
        name: 'Video download',
        data: {}
      }
    ],
    itemNow: 0,
  }),
  mounted() {

  },
  methods: {
    charCounting(i) {
      // console.log(this.items[0].data.desc.length)
      this.items[i].data.charCount = parseInt(this.items[i].data.desc.length);
      // console.log(this.items[i].data.charCount)
    }
  }
}
</script>

<style scoped src="~/assets/css/ttv.css"></style>