<template>
  <!-- Rounded switch -->
    <div class="switch-container">
      <h1 id="switch-dev"> WebDev </h1>
      <label class="switch">
        <input type="checkbox" v-model="checked" @change="switchEnvironment">
        <span class="slider round"></span>
      </label>
      <h1 id="switch-sales"> Sales </h1>
    </div>
</template>

<script>
export default {
  name: 'SiteSwitch',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    switchEnvironment (value) {
      this.$store.dispatch('changeEnvironment', value)
      console.log('component CHANGE')
    }
  }
}
</script>

<style scoped>

.switch-container {
  position: relative;
}

#switch-sales {
  position: relative;
  display: inline-block;
  width: 5em;
  text-align: right;
}

#switch-dev {
  display: inline-block;
  position: relative;
  width: 5em;
  text-align: left;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  top: .25em;
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
  background-color: #813772;
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
  background-color: #3273dc;
}

input:focus + .slider {
  box-shadow: 0 0 1px #3273dc;
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

@media screen and (min-width:480.1) and (max-width:1023px) {
    .switch-container {
      font-size: 24px;
    }

    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      top: .25em;
    }
}

@media screen and (max-width:480px) {

 .field .is-grouped {
    margin-right: 8vw;
  }

  .switch-container {
    font-size: 24px;
  }

  #switch-sales {
    position: relative;
    display: inline-block;
    width: 30vw;
    text-align: center;
  }

  #switch-dev {
    display: inline-block;
    position: relative;
    width: 30vw;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: .25em;
  }
}

@media screen and (max-width:360px) {

 .field .is-grouped {
    margin-right: 8vw;
  }

  .switch-container {
    /*font-size: 24px;*/
  }

  #switch-sales {
    position: relative;
    display: inline-block;
    width: 30vw;
    text-align: center;
  }

  #switch-dev {
    display: inline-block;
    position: relative;
    width: 30vw;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    top: .25em;
  }
}

</style>
