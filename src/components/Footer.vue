<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Vue.js app</strong> by <a href="">RJ Hogerbrugge</a>
          <!-- <VuePower></VuePower> -->
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import VuePower from '@/components/VuePower'

export default {
  name: 'VFooter',
  components: {
    VuePower
  }
}
</script>

<style scoped>

.footer {
  margin: 0 2em;
}

</style>
