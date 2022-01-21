<template>
  <div id="alert" :class="{'alert-display':alertDisplay}">
    Comming Soon
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
  data: () => ({
    // alertDisplay: false
  }),
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped src="~/assets/css/component/alert.css"></style>