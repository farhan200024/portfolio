<template>
  <div>
    <router-link to="/dashboard">go back</router-link>
    <h1>Education {{adminName}}</h1>
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