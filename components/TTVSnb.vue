<template>
  <div id="snb">
    <div class="btn btn-home">
      <img src="~assets/img/ttv-logo.png" class="icon-logo">
    </div>
    <div class="btn btn-active">
      <img src="~assets/img/icon/i-text.png" class="icon">
    </div>
    <div class="btn">
      <img src="~assets/img/icon/i-wand.png" class="icon">
    </div>
    <div class="btn">
      <img src="~assets/img/icon/i-download.png" class="icon">
    </div>
  </div>
</template>

<script>
// import common from '~/mixins/common.js';
export default {
  // mixins: [common],
  data: () => ({
    iconList: [
      {
        icon: 'i-text',
        active: false,
      },
      {
        icon: 'i-wand',
        active: false,
      },
      {
        icon: 'i-download',
        active: false,
      }
    ],
  })
}
</script>

<style scoped src="~/assets/css/ttv.css"></style>