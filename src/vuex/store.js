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
        image: '../../assets/images/homerun.jpg'},
      {id: 2,
        title: 'DonkeyShot',
        description: 'For a former sales client I have built a company website based on his preferences. I have used a HTML5up template as a starting point.',
        image: '../../assets/images/rolfportfolio.jpg'},
      {id: 3,
        title: 'Director Portfolio',
        description: 'For a friend I have built a portfolio website to showcase his movies. I have used a HTML5up template as starting point.',
        image: '../../assets/images/homerun.jpg'},
      {id: 4,
        title: 'My Portfolio',
        description: 'Using the Vue.js framework I have built my own portfolio site from the ground up. Going in my idea was to make a responsive single page application that feels like a menu. Unless on mobile there is no scrolling required.',
        image: '../../assets/images/rjhportfolio.jpg'},
      {id: 5,
        title: 'CVT Commodities',
        description: 'Work in progress',
        image: '../../assets/images/cvt.jpg'},
      {id: 6,
        title: 'Future Project',
        description: 'Coming soon',
        image: '../../assets/images/cvt.jpg'}
    ],
    components: [
      {id: 1, name: 'AboutMeDev'},
      {id: 2, name: ' DevProjects'},
      {id: 3, name: ' DevWork'},
      {id: 4, name: ' AboutMeSales'},
      {id: 5, name: ' SalesProjects'},
      {id: 6, name: ' SalesWork'}
    ],
    contentEnvironment: [
      {id: 1, sales: false}
    ]
  },
  mutations: {
    changeEnvironment (state, value) {
      if (state.contentEnvironment[0].sales === false) {
        state.contentEnvironment[0].sales = true
      } else (state.contentEnvironment[0].sales = false)
      console.log('Store CHANGE')
    }
  },
  getters: {
    currentEnvironment (state) {
      return state.contentEnvironment[0].sales
    }
  }
})
