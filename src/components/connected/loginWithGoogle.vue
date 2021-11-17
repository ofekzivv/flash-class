<template>
  <q-btn class="glossy" round color="red" icon="G" @click="logWithGoogle()"/>
</template>

<script>

import authIndex from '../../middleware/firebase/auth'

export default {
  name: "loginWithGoogle",
  data() {
    return {}
  },
  methods: {
    logWithGoogle() {
      authIndex.SignWithGoogle().then(()=>{})
    }
  },

}
</script>

<style scoped>

</style>