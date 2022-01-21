<template>
  <div>
    <div id="cnt">
      <p class="title">api</p>
    </div>
  </div>
</template>

<script>
import "~/assets/css/info.css";
export default {
  data: () => ({

  }),
  mounted() {
    this.api();
  },
  methods: {
    async api() {
      try {
        const res = await this.$axios.$get('/api/info/citys');
        console.log(res.data);
      }
      catch (err) { console.log(err); }
    }
  }
}
</script>