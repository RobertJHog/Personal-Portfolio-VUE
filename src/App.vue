<template>
  <div id="app">
    <b-loading :active.sync="isLoading" :canCancel="true"></b-loading>
    <NavBar></NavBar>
    <!-- <TopContainer @checked="onClickChild"></TopContainer> -->
      <keep-alive>
        <component v-bind:is="activeContainer"></component>
      </keep-alive>
      <VFooter></VFooter>
      <router-view/>
  </div>
</template>

<script>
import MainPageDev from '@/components/MainPageDev'
import MainPageSales from '@/components/MainPageSales'
import NavBar from '@/components/NavBar'
import VFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'MainPageDev': MainPageDev,
    'MainPageSales': MainPageSales,
    'NavBar': NavBar,
    'VFooter': VFooter
  },
  data () {
    return {
      salesComponent: false,
      isLoading: false
    }
  },
  created: function () {
    this.openLoading()
  },
  computed: {
    activeContainer () {
      return this.$store.state.contentEnvironment[0].sales ? 'MainPageSales' : 'MainPageDev'
    }
  },
  methods: {
    onClickChild (value) {
      if (this.checked === false) {
        this.checked = true
      } else {
        this.checked = false
      }
    },
    openLoading () {
      const vm = this
      vm.isLoading = true
      setTimeout(() => {
        vm.isLoading = false
      }, 0.25 * 1000)
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Fjalla One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0E0B16;
}

#main-container-dev {
  background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: linear-gradient(90deg, #EBDFDF 5%, #d0772b);
}

#main-container-sales {
  background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: linear-gradient(90deg, #EBDFDF 5%, #697de3);
  /*background-color: #5C5857;*/
}

.loading-overlay .loading-background {
  background: #0E0B16;
}

</style>
