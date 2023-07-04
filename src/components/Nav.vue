<template>
<div name="nav">
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link> |
<router-link to="/contact">Contact</router-link><span v-if="adminName != ''"> |
<router-link to="/dashboard">Admin dashboard</router-link> |
<button @click="logout">Logout</button></span>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  name: 'HelloWorld',
  data() {
    return {
      adminName : this.$store.state.adminName,
    };
  },
  methods:{
    logout() {
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$store.commit('unsetAdmin')
        this.$store.commit('unsetAdminName')
        console.log(this.$store.state.isAdmin, this.$store.state.adminName)
        this.$router.push({ path: '/admin/07438345320' })
      })
      .catch(error => {
        console.log(error)
      });
    },
    mounted(){
      this.adminName = this.$store.state.adminName 
    }
  },
  watch:{
    $route (){
        this.adminName = this.$store.state.adminName; 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
