<template>
<div>
  <q-card square class="shadow-24" style="width:300px;height:485px;">

    <q-card-section class="bg-deep-purple-7">
      <h4 class="text-h5 text-white q-my-md">הכנס משתמש</h4>
    </q-card-section>

    <q-card-section>
      <q-form class="q-px-sm q-pt-xl">
        <q-input square clearable v-model="email" type="email" label="Email">
          <template v-slot:prepend>
            <q-icon name="email"/>
          </template>
        </q-input>

        <q-input square clearable v-model="password" type="password" label="Password">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
      </q-form>
    </q-card-section>


    <q-card-section class="login-icons">
      <div class="text-center q-pa-md q-gutter-md">
        <q-btn round color="indigo-7">
          <q-icon name="fab fa-facebook-f" size="1.2rem"/>
        </q-btn>

      <login-with-google/>

      </div>

    </q-card-section>
    <q-card-actions class="q-px-lg">
      <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="היכנס" @click="login"/>
    </q-card-actions>

    <q-card-section class="text-center q-pa-sm">
      <q-btn @click="goRegister">לחץ כאן למעבר להרשמה</q-btn>
    </q-card-section>

  </q-card>
</div>
</template>

<script>
import authIndex from '../middleware/firebase/auth'
import LoginWithGoogle from "./connected/loginWithGoogle";

export default {
  name: "loginEmailPass",
  components: {LoginWithGoogle},
  data(){
    return{
      username: '',
      email: '',
      password: '',
    }
  },
  methods:{
    goRegister(){
      this.$router.push('/')
    },

    login() {
      authIndex.logIn(this.email, this.password).then((res)=>{
        window.user = res.user
        this.$router.push('/homePage')
      }).catch(err =>{
        console.error(err)
      })
    },
  },
  created() {
    if (window.user) {
      this.$router.push(`/homePage`)
    }
  }
}
</script>

<style scoped>

</style>