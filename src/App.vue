<template>
  <div id="app">
    <router-view>
      <component v-bind:is="startComponent"></component>
    </router-view>
  </div>
</template>

<script>

import Intro from '@/components/Intro'
import Home from '@/components/Home'

export default {
  name: 'app',
  components: {Intro, Home},
  data () {
    return {
      startComponent: 'Intro'
    }
  },
  methods: {},
  transition: 'fadeOpacity'
}
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Fjalla One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Transitions

.fadeOpacity-enter-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}

</style>
