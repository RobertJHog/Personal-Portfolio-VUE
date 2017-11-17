<template>
  <div id="app">
    <TopContainer @checked="onClickChild"></TopContainer>
      <keep-alive>
        <component v-bind:is="activeComponent"></component>
      </keep-alive>
      <VFooter></Vfooter>
      <router-view/>
  </div>
</template>

<script>
import MainPageDev from '@/components/MainPageDev'
import MainPageSales from '@/components/MainPageSales'
import VFooter from './components/Footer'
import TopContainer from './components/TopContainer'

export default {
  name: 'app',
  components: {
    'MainPageDev': MainPageDev,
    'MainPageSales': MainPageSales,
    VFooter,
    TopContainer
  },
  data () {
    return {
      checked: false
    }
  },
  computed: {
    activeComponent () {
      return this.checked ? 'MainPageSales' : 'MainPageDev'
    }
  },
  methods: {
    onClickChild (value) {
      if (this.checked === false) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
  }
}
</script>

<style lang="scss">

body {
  background-color: #0E0B16;
}
#app {
  font-family: 'Fjalla One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0E0B16;
  box-sizing: border-box;
}

#main-container-dev {
  border: solid 1px black;
  min-height: 80vh;
  background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  /*background-color: #5C5857;*/
}

#main-container-sales {
  border: solid 1px black;
  min-height: 80vh;
  background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: linear-gradient(90deg, #EBDFDF 5%, #697de3);
  /*background-color: #5C5857;*/
}

#footer-container {
  min-height: 10vh;
  max-height: 20vh;
  position: relative;
  max-width: 100%;
  background-color: #0E0B16;
}

@media screen and (max-width:1690px) {
  /*#app {
    width: 100%;
    height: 100%;
  }*/
}

@media screen and (max-width:1280px) {

}

@media screen and (max-width:980px) {
  #app {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width:480px) {

}

@media screen and (min-width:321px) and (max-width:380px) {
  #switch-dev, #switch-sales {
    width:4em;
  }
}

@media screen and (max-width:320px) {
  body {
    min-height: 100%;
  }
  #app {
    height: 150vh;
  }
}

</style>
