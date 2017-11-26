<template>
  <div class="sales-container">
    <b-loading :active.sync="isLoading" :canCancel="true"></b-loading>
      <transition name="fadeOpacity">
        <div id="main-container-sales">
            <component v-bind:is="activeComponent"></component>
        </div>
      </transition>
    </div>
</template>

<script>
import SiteSwitch from '@/components/SiteSwitch'
import AboutMeSales from '@/components/sales/AboutMeSales'
import SalesSkills from '@/components/sales/SalesSkills'
import SalesWork from '@/components/sales/SalesWork'
import SalesProjects from '@/components/sales/SalesProjects'
export default {
  name: 'MainPageSales',
  components: {
    SiteSwitch,
    AboutMeSales,
    SalesSkills,
    SalesProjects,
    SalesWork
  },
  data () {
    return {
      component: 'AboutMeSales'
    }
  },
  created: function () {
    this.openLoading()
  },
  mounted:
    function switchAboutMe () {
      this.$store.dispatch('changeComponent', 'AboutMeSales')
      console.log('component CHANGE AboutMeSales')
    },
  computed: {
    activeComponent () {
      return this.$store.getters.currentComponent
    }
    // currentEnvironment () {
    //   return this.$store.getters.currentEnvironment
    // }
  },
  methods: {
    openLoading () {
      const vm = this
      vm.isLoading = true
      setTimeout(() => {
        vm.isLoading = false
      }, 0.5 * 1000)
    }
  },
  transition: 'fadeOpacity'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fadeOpacity-enter-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button:hover,
button.hover {
  box-shadow: inset 0 0 0 1px #27496d,0 5px 15px #193047;
}

button:active,
button.active {
  box-shadow: inset 0 0 0 1px #27496d,inset 0 5px 30px #193047;
}


.nav-bar {
  position: absolute;
  margin-left: 8em;
  margin-top: 17em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button{
  align-self:center;
  background:transparent;
  padding:1rem 1rem;
  margin:1rem 1rem;
  transition:all .5s ease;
  color:#41403E;
  font-size:2rem;
  letter-spacing:1px;
  outline:none;
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  /*
  Above is shorthand for:
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius:15px 255px;
  */
}

button &:hover{
  box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
}

.lined-thick{
  border:solid 7px #41403E;
  flex: 1;
}

.dotted-thick{
 border:dotted 5px #41403E;
 flex: 1;
}

.dashed-thick{
border:dashed 5px #41403E;
flex: 1;
}

 .lined-thin{
 border:solid 2px #41403E;
 flex: 1;
}

.dotted-thin{
 border:dotted 2px #41403E;
 flex: 1;
}

.dashed-thin{
  border:dashed 2px #41403E;
  flex: 1;
}



@media screen and (max-width:1690px) {
  #main-container-sales {
    max-width: 100%;
    min-height: 100%;
  }
  .nav-bar {
    position: absolute;
    left: 20%;
    margin-top: -6em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
  }
  button {
    font-size: 1.25em;
    color: white;
    padding: .76em;
  }
  .lined-thick{
    border:solid 5px white;
    flex: 1;
  }

  .dotted-thick{
   border:dotted 3px white;
   flex: 1;
  }

  .dashed-thick{
  border:dashed 3px white;
  flex: 1;
  }

   .lined-thin{
   border:solid 2px white;
   flex: 1;
  }

  .dotted-thin{
   border:dotted 2px white;
   flex: 1;
  }

  .dashed-thin{
    border:dashed 2px white;
    flex: 1;
  }
}

@media screen and (max-width:1280px) {
}

@media screen and (max-width:980px) {
}

@media screen and (max-width:736px) {
  #main-container-sales {
    max-width: 100%;
    /*// min-height: 185vh;*/
  }
  .nav-bar {
    position: absolute;
    margin-left: -6em;
    margin-top: -4.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 90%;
  }

  button {
    font-size: .7em;
    color: white;
    padding: .5em;
  }
}

@media screen and (max-width:480px) {
}

@media screen and (max-width:320px) {
  button {
    padding: .25em;
  }
}

</style>
