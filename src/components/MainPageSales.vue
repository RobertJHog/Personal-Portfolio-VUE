<template>
  <div class="sales-container">
    <b-loading :active.sync="isLoading" :canCancel="false"></b-loading>
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

export default {
  name: 'MainPageSales',
  components: {
    SiteSwitch,
    AboutMeSales,
    SalesProjects,
    SalesWork,
    AboutMeDev
  },
  data () {
    return {
      component: 'AboutMeSales',
      isLoading: false
    }
  },
  created: function () {
    this.openLoading()
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
  methods: {
    openLoading () {
      const vm = this
      vm.isLoading = true
      setTimeout(() => {
        vm.isLoading = false
      }, 1.5 * 1000)
    }
  },
  transition: 'slide'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#main-container-sales {
  background-color: #062F4F;
}

.sales-container {
  height: 100vh;
}

/*Transitions*/

.fadeOpacity-enter-active { transition: opacity 1s ease-out;}
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
