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
      // {id: 1,
      //   title: 'Homerun',
      //   description: 'During 4 months I have worked as a junior developer on the platform of Homerun. The main focus was transforming the excisting code (Angular 1.X) into  the newest version of Vue.js.',
      //   image: './static/images/homerun.jpg',
      //   siteurl: 'https://admin.homerun.co/login',
      //   devlogos: ['javascript: devicon-javascript-plain icon', 'html: devicon-html5-plain icon', 'sass: devicon-sass-plain icon', 'vue: devicon-vuejs-plain icon', 'laravel: devicon-laravel-plain icon'] },
      {id: 2,
        title: 'DonkeyShot',
        description: 'For a former sales client I have built a company website based on his preferences. It is a static colorful website with a lot of images based on a HTML5UP template.',
        image: './static/images/donkeyshot.jpg',
        siteurl: 'http://www.donkeyshot.nl',
        devlogos: ['javascript: devicon-javascript-plain icon', 'html: devicon-html5-plain icon', 'sass: devicon-sass-plain icon'] },
      {id: 3,
        title: 'Director Portfolio',
        description: 'My first own semi-official project. For a good friend I have built a portfolio website to showcase his movies. Here we made use of HTML5up to make a quick start and then style it to his wishes.',
        image: './static/images/rolfportfolio.jpg',
        siteurl: 'http://www.rolfvaneijk.com',
        devlogos: ['javascript: devicon-javascript-plain icon', 'html: devicon-html5-plain icon', 'sass: devicon-sass-plain icon'] },
      {id: 4,
        title: 'My Portfolio',
        description: 'Using the Vue.js framework I have built my own portfolio site from the ground up. Going in my idea was to make a responsive single page application that feels like a menu and the possibility to switch between professions.',
        image: './static/images/rjhportfolio.png',
        siteurl: '',
        devlogos: ['javascript: devicon-javascript-plain icon', 'html: devicon-html5-plain icon', 'sass: devicon-sass-plain icon', 'vue: devicon-vuejs-plain icon'] }
      // {id: 5,
      //   title: 'Future Project',
      //   description: 'Coming soon',
      //   image: '',
      //   siteurl: 'not available yet'}
    ],
    devJobs: [ {id: 1, company: 'Homerun', job: 'Junior Developer', duration: 'July 2017 -  November 2017', description1: 'During this period I have worked as a junior developer on the platform of Homerun. With senior support I further developed my HTML, CSS, Javascript and mysql skils within a large web application.', description2: 'The main focus was transforming the main framework (Angular 1.X) into Vue.js.'},
               {id: 2, company: 'Future Company', job: 'Developer', duration: 'Available', description1: 'Always open to new opportunities in web development with HTML5, CSS3 (Sass, Less), Javascript, Ruby and libraries/frameworks such as React, Vue, Angular, Rails. Very willing to learn new languages and frameworks.', description2: 'send me a message!'}],
    salesJobs: [ {id: 1, company: 'De Breed & Partners', job: 'Sales Consultant', duration: '2007-2010', description1: 'During my time at the De Breed & Partners I helped technology innovative companies (B2B) reach their market and increase their revenue. In collaboration with our customers I thought out telemarketing strategies, advised customers on their proposition and trained telemarketers & junior consultants.', description2: 'I lead successful projects for: Document- & workflow management solutions, (WBSO, ESF, Innovatiebox) grants and Contract & Service Level Agreement managing tools'},
               {id: 2, company: 'Iron Mountain', job: 'Business Development Manager', duration: '2010-2016', description1: 'As Business Development Manager I was responsible for managing the corporate accounts of Iron Mountain Benelux and generating new revenue from existing and new accounts. This includes the commercial management of tenders, re-tenders, and price negotiations in addition to the relationship between Iron Mountain, our clients and internal stakeholders.', description2: 'My main focus was on corporate organisations in banking & finance. I also have extensive experience in verticals such as pharmacy, government and education.'}],
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
    goHomeDev (state) {
      this.dispatch('changeComponent', 'AboutMeDev')
      this.dispatch('changeEnvironment', false)
      this.dispatch('changeStartComponent', 'Home')
    }
  },
  actions: {
    changeEnvironment ({commit}, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('changeEnvironment', payload)
          resolve()
        }, 500)
      })
    },
    changeComponent ({commit}, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('changeComponent', payload)
          resolve()
        }, 0)
      })
    },
    changeStartComponent ({commit}, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('changeStartComponent', payload)
          resolve()
        }, 500)
      })
    },
    goHomeSales ({commit}, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('goHomeSales', payload)
          resolve()
        }, 500)
      })
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
    salesJobs (state) {
      return state.salesJobs
    }
  }
})
