<template>
  <div class="home">
  <h1>Home</h1>
  <span v-if="adminName != ''">Admin cant fill in this form.</span>
  <br><br>
  <form :class="{'disabled': adminName != ''}">
  <label for="name">name</label>
  <input name="name" v-model="name">
  </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      adminName: this.$store.state.adminName,
      name     : ''
    };
  },
  methods: {
    created(){
      this.adminName = this.$store.state.adminName
    }
  }
}
</script>
<style>
.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
