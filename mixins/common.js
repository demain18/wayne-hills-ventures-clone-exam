import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default {
  data: () => ({
    globalVal: true,
  }),
  mounted() {
    // console.log('test')
  },
  methods: {
    routerPush(path) {
      this.$router.push(path);
    }
  }
}