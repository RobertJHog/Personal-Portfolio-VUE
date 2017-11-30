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
        description: 'During 4 months I have worked as a junior developer on the platform of Homerun. The main focus was transforming the excisting code (Angular 1.X) into  the newest version of Vue.js.',
        image: './static/images/homerun.jpg',
        siteurl: 'https://admin.homerun.co/login',
        devlogos: ['javascript: devicon-javascript-plain icon', 'html: devicon-html5-plain icon', 'sass: devicon-sass-plain icon', 'vue: devicon-vuejs-plain icon', 'laravel: devicon-laravel-plain icon'] },
      {id: 2,
        title: 'DonkeyShot',
        description: 'For a former sales client I have built a company website based on his preferences. I have used a HTML5up template as a starting point.',
        image: './static/images/donkeyshot.jpg',
        siteurl: 'http://www.donkeyshot.nl',
        devlogos: ['javascript: devicon-javascript-plain icon', 'html: devicon-html5-plain icon', 'sass: devicon-sass-plain icon'] },
      {id: 3,
        title: 'Director Portfolio',
        description: 'For a friend I have built a portfolio website to showcase his movies. I have used a HTML5up template as starting point.',
        image: './static/images/rolfportfolio.jpg',
        siteurl: 'http://www.rolfvaneijk.com',
        devlogos: ['javascript: devicon-javascript-plain icon', 'html: devicon-html5-plain icon', 'sass: devicon-sass-plain icon'] },
      {id: 4,
        title: 'My Portfolio',
        description: 'Using the Vue.js framework I have built my own portfolio site from the ground up. Going in my idea was to make a responsive single page application that feels like a menu. Unless on mobile there is no scrolling required.',
        image: './static/images/rjhportfolio.png',
        siteurl: 'rjhogerbrugge.herokuapp.com',
        devlogos: ['javascript: devicon-javascript-plain icon', 'html: devicon-html5-plain icon', 'sass: devicon-sass-plain icon', 'vue: devicon-vuejs-plain icon'] }
      // {id: 5,
      //   title: 'Future Project',
      //   description: 'Coming soon',
      //   image: '',
      //   siteurl: 'not available yet'}
    ],
    devJobs: [ {id: 1, company: 'Homerun', job: 'Junior Developer', duration: 'July 2017 -  November 2017', description1: 'During 4 months I have worked as a junior developer on the platform of Homerun. Under supervision they learned me the ropes on HTML, CSS, Javascript and mysql within a large web application.', description2: 'The main focus was transforming the main framework (Angular 1.X) into Vue.js. It was refactoring a lot of excisting code into the new framework.'},
               {id: 2, company: 'Future Company', job: 'Developer', duration: 'Asap', description1: 'Always open to new opportunities in webdevelopment with HTML5, CSS3 (Sass, Less), Javascript, Ruby and libraries/frameworks such as React, Vue, Angular, Rails. Very willing to learn new languages and frameworks.', description2: 'send me a message!'}],
    salesJobs: [ {id: 1, company: 'De Breed & Partners', job: 'Junior Developer', duration: 'July 2017 -  November 2017', description1: 'During 4 months I have worked as a junior developer on the platform of Homerun. Under supervision they learned me the ropes on HTML, CSS, Javascript and mysql within a large web application.', description2: 'The main focus was transforming the main framework (Angular 1.X) into Vue.js. It was refactoring a lot of excisting code into the new framework.'},
               {id: 2, company: 'Iron Mountain', job: 'Developer', duration: 'Asap', description1: 'Always open to new opportunities in webdevelopment with HTML5, CSS3 (Sass, Less), Javascript, Ruby and libraries/frameworks such as React, Vue, Angular, Rails. Very willing to learn new languages and frameworks.', description2: 'send me a message!'}],
    activeComponent: [
      {id: 1, name: 'AboutMeDev'}
    ],
    activeEnvironment: [
      {id: 1, sales: false}
    ],
    startComponent: [
      {id: 1, active: 'Intro'}
    ],
    isChecked: [
      {id: 1, checked: false}
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
    },
    changeStartComponent (state, value) {
      state.startComponent[0].active = value
      console.log('Store component CHANGE')
    },
    goHomeSales (state) {
      this.dispatch('changeComponent', 'AboutMeSales')
      this.dispatch('changeEnvironment', true)
      this.dispatch('changeStartComponent', 'Home')
    },
    setChecked (state, value) {
      state.isChecked[0].checked = value
      console.log('Store switch checked CHANGE')
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
    },
    changeStartComponent ({commit}, payload) {
      setTimeout(() => {
        commit('changeStartComponent', payload)
      }, 500)
    },
    goHomeSales ({commit}, payload) {
      setTimeout(() => {
        commit('goHomeSales', payload)
      }, 500)
    },
    setChecked ({commit}, payload) {
      setTimeout(() => {
        commit('setChecked', payload)
      }, 500)
      console.log('action checked')
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
    },
    latestProject (state) {
      return state.projects[0]
    },
    devJobs (state) {
      return state.devJobs
    },
    checked (state) {
      return state.isChecked[0].checked
    }
  }
})
