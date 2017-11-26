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
      }, 0.5 * 1000)
    }
  },
  transition: 'fadeOpacity'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sales-container {
  margin: 0 2em;
}

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

</style>
