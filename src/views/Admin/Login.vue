<template>
  <div>
    <h1>Admin login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((e) => {
          console.log(e);
          this.$store.commit('setAdmin')
          this.$store.commit('setAdminName', e.user.email);
          console.log(this.$store.state.isAdmin, this.$store.state.adminName)
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.error(error); //add alert
        });
    },
  },
};
</script>
vue