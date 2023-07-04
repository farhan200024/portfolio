<template>
  <div class="home">
  <h1>Home</h1>
  <span v-if="adminName != ''">logged in, {{adminName}}</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      adminName: this.$store.state.adminName
    };
  },
  methods: {
    created(){
      this.adminName = this.$store.state.adminName
    }
  }
}
</script>
