<template>
  <div id="alert" :class="{'alert-display':alertDisplay}" :style="{backgroundColor: bgColor}">
    {{ comment }}
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters({
      alertDisplay: 'Alert/getAlert'
    }),
  },
  props: ['comment'],
  data: () => ({
    // alertDisplay: false
    // comment: 'comming soon.'

    // bgColor: '#650aa8',
    bgColor: '#ff5f0a',
  }),
  mounted() {

  },
  watch: {
    alertDisplay: function (to, from) {
      if(to==true) {
        setTimeout(() => {
          this.$store.commit('Alert/closeAlert');
        }, 3000);
      }
    },
  },
  methods: {

  },
}
</script>

<style scoped src="~/assets/css/component/alert.css"></style>