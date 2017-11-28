<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <a :href="project.siteurl" class="project-title" target="_blank"> {{ project.title }} </a>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div class="description"> {{ project.description }} </div>
            </slot>
            <div class="front-logos">
              <img class="logo" src="../assets/images/logos/html5.png" alt="html logo">
              <img class="logo" src="../assets/images/logos/css3.png" alt="Css3 logo">
              <img class="logo" src="../assets/images/logos/javascript.png" alt="JS logo">
              <img class="logo" src="../assets/images/logos/vue.png" alt="Vue logo">
              <img class="logo" src="../assets/images/logos/react.png" alt="React logo">
            </div>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <figure class="image is-16by9">
                <img :src="project.image">
              </figure>
              <button class="modal-default-button" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'modal',
  props: ['project']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.description {
}

.project-title {
  font-size: 20px;
  font-weight: bolder;
}

.front-logos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em auto;
}

.logo {
  height: 1.75em;
  width: 2em;
  display: block;
  margin: 0em 1em;
}

figure.image {
  border: 2px solid white;
  border-radius: 20px;
  overflow: hidden;
  width: 32em;
  border: #697de3 solid 2px;
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .75);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 35em;
  margin: 0px auto;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border: #d0772b solid 4px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  padding: 2em;
}

.modal-body {
  margin: 20px 0;
  padding: 0em;
}

.modal-footer {
  padding: 0em 0em;
}

.modal-default-button {
  font-size: 16px;
  margin-top: 2em;
  border-radius: 5px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
