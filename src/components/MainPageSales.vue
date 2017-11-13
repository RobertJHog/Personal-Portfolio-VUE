<template>
  <transition name="fadeOpacity">
    <div id="main-container-sales">
      <div class="nav-bar">
        <button class="dashed-thin" v-on:click="component = 'AboutMeSales'"> About </button>
        <button class="lined-thin" v-on:click="component = 'SalesSkills'"> Skills </button>
        <button class="dotted-thick" v-on:click="component = 'SalesProjects'"> Projects </button>
        <button class="lined-thick" v-on:click="component = 'SalesWork'"> Work </button>
      </div>
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>
    </div>
  </transition>
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


/*@media (max-width:620px){
  body{
    h1{
      margin-top:2rem;
    }
    & section{
      display:flex;
      flex-direction:column;
      justify-content:center;
      margin-bottom:1rem;
      & button{
        align-self:center;
        margin-bottom:2rem;
      }
    }
  }
}*/

@media screen and (min-width:320px) and (max-width:480px) {
  #main-container-sales {
    max-width: 100%;
    height: 185vh;
  }
  .nav-bar {
    position: absolute;
    margin-left: 0em;
    margin-top: -4.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
  }
  button {
    font-size: .7em;
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

@media screen and (min-width:768px) and (max-width:1024px) {
  #main-container-dev {
    max-width: 100%;
    max-height: 100%;
  }
}

</style>
