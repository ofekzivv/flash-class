<template>
  <div>
    <q-btn class="link-page" @click="logout()">התנתק</q-btn>
    <div ref="example-element">{{ counter }}</div>
  </div>
</template>

<script>
import authIndex from '../middleware/firebase/auth'


export default {
  name: 'Home',
  data() {
    return {
      counter: 0,
      exampleLeakyProperty: 'This represents a property that will leak memory if not cleaned up.'
    }
  },
  methods: {
    logout() {
      authIndex.logOut().then(() => {
        this.$router.push('/')
      }).catch(err => {
        console.error(err)
      })
    }
  },

  beforeCreate() {
    debugger
    console.log('before create: ', this.counter)
  },
  created() {
    console.log('created:' ,this.counter)
    setInterval(() => {
      this.counter++
    }, 1000)
    console.log('created: ', this.counter)
  },
  beforeMount() {
    console.log('before Mounted: ', this.counter)
  },
  mounted() {
    console.log('Mounted: ', this.counter)
  },
  beforeUpdate() {
    console.log('before-updating', this.counter)
  },
  updated() {
    // console.log('result: '+this.$refs['example-element'].textContent === this.counter)
  },
  beforeDestroy() {
    this.exampleLeakyProperty = null
    delete this.exampleLeakyProperty
  },
  destroyed() {
    console.log('destroyed: ', this.counter)
  }
}
</script>
