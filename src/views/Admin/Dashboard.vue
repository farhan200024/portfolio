<template>
  <div>
    <h1>Admin Dashboard</h1>
    <span v-if="adminName != ''">logged in, {{adminName}}</span>
    <br><br>
    <router-link to="/education">education</router-link>
  </div>
</template>

<script>
export default {
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
};
</script>
vue