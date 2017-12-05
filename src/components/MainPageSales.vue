<template>
  <div class="sales-container">
    <div id="main-container-sales">
      <transition name="fadeOpacity">
        <component :is="activeComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import SiteSwitch from '@/components/SiteSwitch'
import AboutMeSales from '@/components/sales/AboutMeSales'
import SalesWork from '@/components/sales/SalesWork'
import SalesProjects from '@/components/sales/SalesProjects'
import AboutMeDev from '@/components/development/AboutMeDev'
import DevWork from '@/components/development/DevWork'
import DevProjects from '@/components/development/DevProjects'

export default {
  name: 'MainPageSales',
  components: {
    SiteSwitch,
    AboutMeSales,
    SalesProjects,
    SalesWork,
    AboutMeDev,
    DevWork,
    DevProjects
  },
  data () {
    return {
      component: 'AboutMeSales'
    }
  },
  mounted:
    function () {
      this.$store.dispatch('changeComponent', 'AboutMeSales')
      console.log('component CHANGE AboutMeSales')
    },
  computed: {
    activeComponent () {
      return this.$store.getters.currentComponent
    }
  },
  transition: 'fadeOpacity'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#main-container-sales {
  background-color: #062F4F;
  min-height: 100vh;
}

.sales-container {
  min-height: 100vh;
}

/*Transitions*/

.fadeOpacity-enter-active {
   transition: opacity 1s ease-in;
 }

.fadeOpacity-enter, .fadeOpacity-leave-active {opacity: 0;}

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

@media screen and (max-width:480px) {
  .sales-container {
    min-height: 220vh;
  }
}

</style>
