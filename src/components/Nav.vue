<template>
<div name="nav">
<span v-if="$route.name != 'AdminLoginPage' && !isAdmin">
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/contact">Contact</router-link>
</span>

<span v-if="isAdmin">
  <router-link to="/dashboard">Admin dashboard</router-link> |
  <button @click="logout">Logout</button>
</span>

</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export default {
  name: 'HelloWorld',
  data() {
    return {
      isAdmin : this.$store.state.isAdmin
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
        this.$router.push({ path: '/admin/07438345320' })
      })
      .catch(error => {
        console.log(error)
      });
    },
    mounted(){
      this.isAdmin = this.$store.state.isAdmin 
    }
  },
  watch:{
    $route (){
        this.isAdmin = this.$store.state.isAdmin; 
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
