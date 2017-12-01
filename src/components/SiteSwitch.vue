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
      checked: 'webdev'
    }
  },
  mounted: function () {
    this.setChecked()
  },
  methods: {
    switchEnvironment (value) {
      console.log(this.salesEnvironment)
      if (this.salesEnvironment === true) {
        this.$store.dispatch('changeComponent', 'AboutMeSales')
        this.$store.dispatch('setChecked', true)
      } else {
        this.$store.dispatch('changeComponent', 'AboutMeDev')
        this.$store.dispatch('setChecked', false)
      }
      this.$store.dispatch('changeEnvironment', value)
      console.log('component CHANGE')
    },
    setChecked () {
      this.checked = false
    }
  }
}
</script>

<style>


.switch-container {
  position: relative;
  font-size: 26px;
  margin-top: 4vh;
  right: 15vw;
}

#switch-sales {
  position: relative;
  display: inline-block;
  width: 5em;
}

#switch-dev {
  display: inline-block;
  position: relative;
  width: 5em;
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

@media screen and (max-width:480px) {
  .switch-container {
    font-size: 24px;
    margin-top: 0em;
    left: 4em;
  }

  #switch-sales {
    position: relative;
    display: inline-block;
    width: 3em;
  }

  #switch-dev {
    display: inline-block;
    position: relative;
    width: 3em;
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
