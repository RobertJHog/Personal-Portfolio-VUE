<template>
    <div class="wrapper">
      <div class="portfolio-title">
        <h1 class="intro-name">R.J. Hogerbrugge</h1>
      </div>
      <div class="message">
        <div class="level">
          <div class="level-left">
            <p class="control">
              <a class="bd-tw-button button dev">
                <span class="icon">
                  <i class="fa fa-laptop"></i>
                </span>
                  <router-link class="dev-button" :to="{ path: 'Home' }" @click="goHomeDev">Web Development</router-link>
              </a>
            </p>
          </div>
          <div class="level-center">
            <p> Welcome and make your choice. </p>
          </div>
          <div class="level-right">
            <p class="control">
              <a class="bd-tw-button button sales">
                <span class="icon">
                  <i class="fa fa-handshake-o"></i>
                </span>
                <router-link class="sales-button" :to="{ path: 'Home' }"> <span @click="goHomeSales"> Business Development </span></router-link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import Home from '@/components/Home'

export default {
  name: 'Intro',
  components: { Home },
  data () {
    return {}
  },
  methods: {
    goHomeDev () {
      this.$store.dispatch('changeComponent', 'AboutMeDev')
      this.$store.dispatch('changeEnvironment', false)
      this.$store.dispatch('changeStartComponent', 'Home')
    },
    goHomeSales () {
      this.$store.dispatch('goHomeSales')
      this.$store.dispatch('setChecked', true)
      console.log('go Home Sales Button!')
    }
  }
}
</script>

<style lang="scss">

html {
  background-color: #0E0B16;
}

html, body{
  height: 100%;
}

body {
	background-image: url(../../static/images/intropicreversed.jpg);
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	background-color: #999;
}

div, body{
  margin: 0;
  padding: 0;
  font-family: exo, sans-serif;
}

.wrapper {
  height: 100%;
  width: 100%;
}

.intro-title {
  margin-left: 25%;
}

.portfolio-title {
  font-family: 'Raleway', sans-serif;
  display: relative;
  float: left;
  padding: 1.5em;
  font-size: 50px;
  color: white;
  // font-weight: bolder;
  color: #c6e3ef;
}

.message {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height:25%;
  bottom: 0;
  display: block;
  position: absolute;
  background-color: rgba(0,0,0,0.6);
  color: #fff;
  padding: 0.5em;
}

a.sales.button {
  background-color: #697de3;
  color: white;
  font-size: 25px;
}

a.dev.button {
  background-color: #062F4F;
  color: white;
  font-size: 25px;
}

.fa.fa-handshake-o, .fa.fa-laptop{
  color: white;
}

.message a:not(.button):not(.tag) {
  text-decoration: none;
}

.level-left, .level-right {
  font-family: 'Raleway', sans-serif;
  color: red;
  font-size: 30px;
  margin: 1em;
}

.level-center {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  text-align: center;
}

.level-left, .level-right, .level-center {
  margin-top: 2em;
}

.dev-button a, .sales-button a {
  text-decoration: none;
}

// Button styling

$col-primary: #062F4F;
$corner-radius: 5px;

.button.dev, .button.sales {
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  text-align: center;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
  &:hover {
    color: white;
    box-shadow: 0 0 30px 0 transparentize($col-primary, 0.5);
    transition: all 0.2s ease-out;
    &:before {
      -webkit-transform: translateX(300px) skewX(-15deg);
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      -webkit-transition: .7s;
      transition: .7s;
    }
    &:after {
      -webkit-transform: translateX(300px) skewX(-15deg);
    	transform: translateX(300px) skewX(-15deg);
    	opacity: 1;
    	-webkit-transition: .7s;
    	transition: .7s;
    }
  }
  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
  &:before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: white;
    box-shadow: 0 0 15px 3px white;
    transform: (skewX(-20deg));
  }
}

</style>
