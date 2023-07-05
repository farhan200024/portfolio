<template>
    <div class="home">
      <h1>Home</h1>
      <span v-if="adminName != ''">Admin cant fill in this form.</span>
        <form @submit.prevent="sendEmail" :class="{'disabled': adminName != ''}">
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'HomeView',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      adminName: this.$store.state.adminName,
    }
  },
  methods: {
    sendEmail: async function (e) {
      try {
        const a = await emailjs.sendForm('service_o7uf7aj', 'template_n0l1ak8', e.target, 'XOh-_5_Jiui_BnPao', {
          name: this.name,
          email: this.email,
          message: this.meessage
        })

        if (a.status == 200 && a.text == 'OK') {
          alert('email sent');
        }

      } catch (err) {
           if (err instanceof ReferenceError) {
            alert( "JSON Error: " + err.message );
           } else {
            throw err; // rethrow error
           }
      }

      this.name = ''
      this.email = ''
      this.message = ''
    },
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
