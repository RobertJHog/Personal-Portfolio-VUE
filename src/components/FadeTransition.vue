<template>
  <transition name="fadeOpacity">
  </transition>
</template>

<script>
export default {
  name: 'FadeTransition',
  data () {
    return {}
  },
  transition: 'fadeOpacity'
}
</script>

<style>

.fadeOpacity-enter-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}

</style>
