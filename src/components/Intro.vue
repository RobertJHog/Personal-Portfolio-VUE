<template>
  <div class="intro-container">
    <vue-particles
      class="particles"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <b-loading :active.sync="isLoading" :canCancel="false"></b-loading>
      <div class="wrapper">
        <div class="message">
          <div class="level">
            <div class="level-left">
              <p class="control">
                <a class="bd-tw-button button dev">
                  <span class="icon">
                    <i class="fa fa-laptop"></i>
                  </span>
                    <router-link class="dev-button" :to="{ path: 'Home' }" @click="goHomeDev">Proceed to portfolio</router-link>
                </a>
              </p>
            </div>
            <div class="level-center">
              <h1 class="intro-name">R.J. Hogerbrugge</h1>
              <p> Welcome and mind the switch.</p>
            </div>
            <div class="level-right">
              <div class="field is-grouped socialbuttons">
                <p class="control">
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="" target="_blank" href="https://github.com/RobertJHog">
                    <span class="icon">
                      <i class="fa fa-github"></i>
                    </span>
                    <span>
                      GitHub
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button contact-us" href="https://www.linkedin.com/in/robert-jan-hogerbrugge-38ab3a9/" target="_blank">
                    <span class="icon">
                      <i class="fa fa-linkedin"></i>
                    </span>
                    <span>Contact Me</span>
                  </a>
                </p>
              </div>
            </div>
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
    return {
      isLoading: false
    }
  },
  created: function () {
    this.openLoading()
  },
  methods: {
    goHomeDev () {
      this.$store.dispatch('goHomeDev')
      this.$store.dispatch('setChecked', false)
      console.log('go Home Dev Button!')
    },
    openLoading () {
      const vm = this
      vm.isLoading = true
      setTimeout(() => {
        vm.isLoading = false
      }, 1.5 * 1000)
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
}

#intro-container {
  // height: 300vh;
}

.loading-overlay .loading-background {
  background: #0E0B16;
}

.particles {
  z-index: -99;
}

.wrapper {
  width: 100%;
  height: 100%;
}

.intro-title {
  margin-left: 25%;
}

.intro-name {
  font-family: 'Raleway', sans-serif;
  font-size: 1.875em;
  color: #c6e3ef;
}

.level-center {
  margin-right: 5em;
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

a.dev.button {
  background-color: #062F4F;
  color: white;
  font-size: 1.563em;
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
  font-size: 1.75em;
  margin: 1em;
}

.level-center {
  font-family: 'Raleway', sans-serif;
  font-size: 1.25;
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

@media screen and (min-width: 1024px) {

}

@media screen and (min-width: 480.1px) and (max-width:1023px) {
  a.dev.button, a.sales.button {
    font-size: 1.4em;
    margin: 0 auto;
  }

  .level-center {
    margin-right: 0;
  }

  .field.is-grouped.socialbuttons {
    margin: 0 27vw;
  }

  .field.is-grouped.intropage {
    margin: 0 27vw;
  }

  a.dev.button {
    margin: 0 23vw;
  }

  .message {
    height: 35%;
  }
}

@media screen and (max-width:480px) {
  a.dev.button, a.sales.button {
    font-size: 1.4em;
    margin: 0 auto;
  }

  .level-center {
    margin-right: 0;
  }

  .field.is-grouped {
    margin-left: 10vw;
  }

  .message {
    height: 50%;
  }
}

@media screen and (max-width:360px) {
  a.dev.button {
    font-size: 1em;
    margin: 0 auto;
  }

  .level-center {
    margin-right: 0;
  }

  .field.is-grouped {
    margin-left: 0;
    font-size: 1em;
  }

  .level-right {
    margin: .5em;
  }

  .message {
    // bottom: 10em;
    height: 50%;
  }
}

</style>
