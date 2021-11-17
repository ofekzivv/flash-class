<template>
  <div>
    <q-card square class="shadow-24" style="width:300px;height:485px;">

      <q-card-section class="bg-deep-purple-7">
        <h4 class="text-h5 text-white q-my-md">הירשמו כאן</h4>
      </q-card-section>

      <q-card-section>
        <q-form class="q-px-sm q-pt-xl q-pb-lg">
          <q-input square clearable v-model="email" type="email" label="Email">

            <template v-slot:prepend>
              <q-icon name="email"/>
            </template>
          </q-input>
          <q-input square clearable v-model="username" type="username" label="Username">

            <template v-slot:prepend>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input square clearable v-model="password" type="password" label="Password">


            <template v-slot:prepend>
              <q-icon name="lock"/>
            </template>
          </q-input>
        </q-form>
      </q-card-section>

      <q-card-actions class="q-px-lg">
        <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="לחץ להרשמה"
               @click="register()"/>
      </q-card-actions>

      <q-card-section class="text-center q-pa-sm">
        <q-btn @click="moveLogin()">היכנס ממשתמש קיים</q-btn>
        <!--            <p><b><a </a></b></p>-->
        <!--            <p class="text-grey-6">היכנס ממשתמש קיים</p>-->
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import authIndex from '../../middleware/firebase/auth'

export default {
  name: "EmailPasswaord",
  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  methods: {
    async register() {
      await authIndex.registerToFB(this.email, this.password).then((res) => {
        window.user = res.user
        this.$router.push('/homePage')
      })
          .catch((error) => {
            console.log(error)
          });
    },

    moveLogin() {
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>

</style>