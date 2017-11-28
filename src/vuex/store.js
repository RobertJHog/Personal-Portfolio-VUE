import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
// const state = {
//   projects: [],
//   components: [],
//   contentEnvironment: []
// }

// define the possible mutations that can be applied to our state
// const mutations = {
//
// }

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state: {
    projects: [
      {id: 1,
        title: 'Homerun',
        description: 'During 4 months I have worked as a junior developer on the platform of Homerun. Under supervision they learned me the ropes on HTML5, CSS3, Javascript, mysql and javascript libraries within a large web application. The main focus was transforming the main framework (Angular 1.X) into  the newest version of Vue.js. It was refactoring a lot of excisting code into the new framework',
        image: './static/images/homerun.jpg',
        siteurl: 'https://admin.homerun.co/login'},
        // devlogos: ['vue', 'laravel', 'javascript', ]
      {id: 2,
        title: 'DonkeyShot',
        description: 'For a former sales client I have built a company website based on his preferences. I have used a HTML5up template as a starting point.',
        image: './static/images/donkeyshot.jpg',
        siteurl: 'http://www.donkeyshot.nl'},
      {id: 3,
        title: 'Director Portfolio',
        description: 'For a friend I have built a portfolio website to showcase his movies. I have used a HTML5up template as starting point.',
        image: './static/images/rolfportfolio.jpg',
        siteurl: 'http://www.rolfvaneijk.com'},
      {id: 4,
        title: 'My Portfolio',
        description: 'Using the Vue.js framework I have built my own portfolio site from the ground up. Going in my idea was to make a responsive single page application that feels like a menu. Unless on mobile there is no scrolling required.',
        image: './static/images/rjhportfolio.png',
        siteurl: 'rjhogerbrugge.herokuapp.com'},
      {id: 5,
        title: 'CVT Commodities',
        description: 'Work in progress',
        image: './static/images/cvt.png',
        siteurl: 'not available yet'},
      {id: 6,
        title: 'Future Project',
        description: 'Coming soon',
        image: '',
        siteurl: 'not available yet'}
    ],
    activeComponent: [
      {id: 1, name: 'AboutMeDev'}
    ],
    activeEnvironment: [
      {id: 1, sales: false}
    ]
  },
  mutations: {
    changeEnvironment (state, value) {
      if (state.activeEnvironment[0].sales === false) {
        state.activeEnvironment[0].sales = true
      } else (state.activeEnvironment[0].sales = false)
      console.log('Store environment CHANGE')
    },
    changeComponent (state, value) {
      state.activeComponent[0].name = value
      console.log('Store component CHANGE')
    }
  },
  actions: {
    changeEnvironment ({commit}, payload) {
      setTimeout(() => {
        commit('changeEnvironment', payload)
      }, 500)
    },
    changeComponent ({commit}, payload) {
      setTimeout(() => {
        commit('changeComponent', payload)
      }, 500)
    }
  },
  getters: {
    currentEnvironment (state) {
      return state.activeEnvironment[0].sales
    },
    currentComponent (state) {
      return state.activeComponent[0].name
    },
    devProjects (state) {
      return state.projects
    }
  }
})
