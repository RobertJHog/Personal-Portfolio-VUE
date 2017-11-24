<template>
  <div class="dev-container">
    <transition name="fadeOpacity">
      <div class="level" id="main-container-dev">
        <keep-alive>
          <component v-bind:is="component"></component>
        </keep-alive>
      </div>
    </transition>
  </div>
</template>

<script>
import SiteSwitch from '@/components/SiteSwitch'
import AboutMeDev from '@/components/development/AboutMeDev'
import DevWork from '@/components/development/DevWork'
import DevProjects from '@/components/development/DevProjects'
import NavBar from '@/components/NavBar'

export default {
  name: 'MainPageDev',
  components: {
    SiteSwitch,
    AboutMeDev,
    DevProjects,
    DevWork,
    NavBar
  },
  data () {
    return {
      component: 'AboutMeDev'
    }
  },
  computed: {
    componentSwitch (value) {
      this.component = value
      console.log('SWITCH!')
    }
  },
  transition: 'fadeOpacity'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.dev-container {
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

// NavBar



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
 left: 8em;
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

button:hover{
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

@media screen and (max-width:480px) {
}

@media screen and (max-width:320px) {
  button {
    padding: .25em;
  }
}

</style>
