<template>
  <div id="app">
    <!-- <div v-if="!preloading" class="main-container"> -->
      <div class="top-container">
        <h1 class="portfolio-name"> R.J. Hogerbrugge </h1>
        <div class="switch-container">
          <h1 id="switch-dev"> WebDev </h1>
          <label class="switch">
            <input type="checkbox" v-model="checked">
            <span class="slider round"></span>
          </label>
          <h1 id="switch-sales"> Sales </h1>
        </div>
        <ActionButton></Actionbutton>
      </div>
      <keep-alive>
        <component v-bind:is="activeComponent"></component>
      </keep-alive>
      <VFooter></Vfooter>
      <router-view/>
    <!-- </div> -->
    <!-- <LoadingScreen v-else="loading"></loadingScreen> -->
  </div>
</template>

<script>
import MainPageDev from '@/components/MainPageDev'
import MainPageSales from '@/components/MainPageSales'
import ActionButton from '@/components/ActionButton'
// import LoadingScreen from '@/components/LoadingScreen'
import VFooter from './components/Footer'
export default {
  name: 'app',
  components: {
    'MainPageDev': MainPageDev,
    'MainPageSales': MainPageSales,
    VFooter,
    ActionButton
    // LoadingScreen
  },
  data () {
    return {
      checked: false,
      preloading: true
    }
  },
  // mounted: {
  //   preloadYouContent().then(() => this.preloading = false )
  // },
  computed: {
    activeComponent () {
      return this.checked ? 'MainPageSales' : 'MainPageDev'
    }
  }
}
</script>

<style>

body {
  min-height: 100%;
  background-color: #0E0B16;
}
#app {
  font-family: 'Fjalla One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0E0B16;
}

#main-container-dev {
  border: solid 1px black;
  height: 80vh;
  background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  background-image: linear-gradient(90deg, #EBDFDF 5%, #d0772b);
  /*background-color: #5C5857;*/
}

#main-container-sales {
  border: solid 1px black;
  height: 80vh;
  background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: linear-gradient(90deg, #EBDFDF 5%, #697de3);
  /*background-color: #5C5857;*/
}

.top-container {
  max-width: 100%;
  position: relative;
  display: inline-block;
  height: 10vh;
  top: 1em;
  left: 10em;
}

#footer-container {
  height: 10vh;
  max-height: 20vh;
  position: relative;
  max-width: 100%;
  background-color: #0E0B16;
}

.switch-container {
  margin-right: 20em;
}

.portfolio-name {
  position: absolute;
  display: block;
  float: left;
  font-size: 40px;
  left: -17em;
  top: .5em;
}

#switch-sales {
  position: relative;
  display: inline-block;
  width: 5em;
  top: 1em;
}

#switch-dev {
  display: inline-block;
  position: relative;
  width: 5em;
  top: 1em;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  top: 2.5em;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: orange;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media screen and (max-width:1690px) {
  body {
    min-height: 100%;
  }
  /*#app {
    width: 100%;
    height: 100%;
  }*/
  .top-container {
    max-width: 100%;
    height: 10vh;
    top: 1em;
    left: 0em;
    margin-bottom: 5em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: 2.5em;
  }
  .portfolio-name {
    position: relative;
    display: inline-block;
    font-size: 30px;
    left: 1em;
    top: -.5em;
  }
  .switch-container {
    display: inline-block;
    position: relative;
    max-width: 100%;
    max-height: 5vh;
    left: 6em;
  }
  #switch-sales {
    position: relative;
    display: inline-block;
    width: 4em;
    top: -.5em;
  }

  #switch-dev {
    display: inline-block;
    position: relative;
    width: 4em;
    top: -.5em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: -.5em;
  }
}

@media screen and (max-width:1280px) {
  body {
    min-height: 100%;
  }
  /*#app {
    width: 100%;
    height: 100%;
  }*/
  .top-container {
    max-width: 100%;
    height: 10vh;
    top: 1em;
    left: 0em;
    margin-bottom: 5em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: 2.5em;
  }
  .portfolio-name {
    position: relative;
    display: inline-block;
    font-size: 30px;
    left: 1em;
    top: -.5em;
  }
  .switch-container {
    display: inline-block;
    position: relative;
    max-width: 100%;
    max-height: 5vh;
    left: 6em;
  }
  #switch-sales {
    position: relative;
    display: inline-block;
    width: 4em;
    top: -.5em;
  }

  #switch-dev {
    display: inline-block;
    position: relative;
    width: 4em;
    top: -.5em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: -.5em;
  }
}

@media screen and (max-width:980px) {
  body {
    min-height: 100%;
    min-width: 111vw;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .top-container {
    max-width: 100%;
    top: 1em;
    left: 0em;
    margin-bottom: 5em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: 2.5em;
  }
  .portfolio-name {
    position: relative;
    display: inline-block;
    font-size: 30px;
    left: 1em;
    top: -.5em;
  }
  .switch-container {
    display: inline-block;
    position: relative;
    max-width: 100%;
    max-height: 5vh;
    left: 6em;
  }
  #switch-sales {
    position: relative;
    display: inline-block;
    width: 4em;
    top: -.5em;
  }

  #switch-dev {
    display: inline-block;
    position: relative;
    width: 4em;
    top: -.5em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: -.5em;
  }
}

@media screen and (max-width:736px) {
  body {
    min-height: 100%;
  }
  #app {
    height: 130vh;
  }
  .aboutme {
    border-radius: 5px;
  }
  .top-container {
    max-width: 100%;
    min-height: 15vh;
    top: 1em;
    left: 0em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: 2.5em;
  }
  .portfolio-name {
    position: relative;
    display: inline-block;
    font-size: 30px;
    left: 20%;
    top: .5em;
  }
  .switch-container {
    display: inline-block;
    position: relative;
    max-width: 100%;
    max-height: 5vh;
    margin-right: 0em;
  }
  #switch-sales {
    position: relative;
    display: inline-block;
    width: 4em;
    top: 0em;
  }

  #switch-dev {
    display: inline-block;
    position: relative;
    width: 4em;
    top: 0em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: .5em;
  }
}

@media screen and (max-width:480px) {
  body {
    min-height: 100%;
  }

  .top-container {
    max-width: 100%;
    min-height: 20vh;
    top: 1em;
    left: 0em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: 2.5em;
  }
  .portfolio-name {
    position: relative;
    display: inline-block;
    font-size: 30px;
    left: 20%;
    top: .5em;
  }
  .switch-container {
    display: inline-block;
    position: relative;
    max-width: 100%;
    max-height: 5vh;
    left:0%;
  }
  #switch-sales {
    position: relative;
    display: inline-block;
    width: 4em;
    top: 0em;
  }

  #switch-dev {
    display: inline-block;
    position: relative;
    width: 4em;
    top: 0em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: .5em;
  }
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
  .top-container {
    min-height: 20vh;
  }
  .switch {
  }
  .portfolio-name {
    font-size: 25px;
  }
  .switch-container {
  }
  #switch-sales {
    font-size: 22.5px;
  }

  #switch-dev {
    font-size: 22.5px;
  }
  #footer-container {
    height: 15vh;
    width: 100vw;
  }
  .switch {
  }
}

</style>
