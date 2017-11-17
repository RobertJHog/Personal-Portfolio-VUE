<template>
  <div class="top-container">
    <h1 class="portfolio-name"> R.J. Hogerbrugge </h1>
    <div class="switch-container">
      <h1 id="switch-dev"> WebDev </h1>
      <label class="switch">
        <input v-on:click="emit" type="checkbox">
        <span class="slider round"></span>
      </label>
      <h1 id="switch-sales"> Sales </h1>
    </div>
    <ActionButton></Actionbutton>
  </div>
</template>

<script>
import ActionButton from '@/components/ActionButton'
export default {
  name: 'TopContainer',
  components: {
    ActionButton
  },
  methods: {
    emit (value) {
      this.$emit('checked', value)
      console.log('emit?')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top-container {
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 10vh;
  top: 1em;
}

.switch-container {
  flex-basis: 50%;
}

.portfolio-name {
  flex-basis: 20%;
  position: relative;
  display: block;
  font-size: 40px;
  top: 0.25em;
}

#switch-sales {
  position: relative;
  display: inline-block;
  width: 5em;
  top: .6em;
}

#switch-dev {
  display: inline-block;
  position: relative;
  width: 5em;
  top: .6em;
}


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  top: 1.5em;
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
  .top-container {
    min-height: 7em;
    /*height: 10vh;*/
  }
  .switch-container {
    top: 1em;
    margin-left: -2em;
  }
  .portfolio-name {
    margin-top: 1.25em;
  }
}

@media screen and (max-width:980px) {
  .switch-container {
    left: 2em;
    top: .5em;
  }
}

@media screen and (max-width:736px) {
  .top-container {
    min-height: 15vh;
  }
  .portfolio-name {
    left: 20%;
    top: .5em;
  }
  .switch-container {
    max-height: 5vh;
    margin-right: 0em;
  }
  #switch-sales {
    top: 0em;
  }

  #switch-dev {
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
  .top-container {
    min-height: 10em;
  }
  .switch {
  }
  .portfolio-name {
    font-size: 25px;
    left: 0em;
    top:-2em;
  }
  .switch-container {
    height: 5em;
    display: flex;
    flex-direction: row;
    left: -1em;
    top: 5em;
  }
  #switch-sales {
    flex-basis: 25%;
    font-size: 22.5px;
  }

  #switch-dev {
    flex-basis: 25%;
    font-size: 22.5px;
  }

  .switch {
    flex-basis: 25%;
    margin-left:auto;
    margin-right: auto;
  }
}

@media screen and (max-width:320px) {
  .top-container {
    min-height: 10em;
  }
  .switch {
  }
  .portfolio-name {
    font-size: 25px;
    left: 0em;
    top:-2em;
  }
  .switch-container {
    height: 5em;
    display: flex;
    flex-direction: row;
    left: -4em;
    top: 5em;
  }
  #switch-sales {
    flex-basis: 25%;
    font-size: 22.5px;
  }

  #switch-dev {
    flex-basis: 25%;
    font-size: 22.5px;
  }

  .switch {
    flex-basis: 25%;
    margin-left:auto;
    margin-right: auto;
  }
}


</style>
