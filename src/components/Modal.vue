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
              <div class="buttonHolder">
                <button class="button cross" @click="$emit('close')">
                </button>
              </div>
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
<style lang="scss" scoped>

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
  height: 2em;
  width: 2.5em;
  display: block;
  margin: 0em 1em;
}


/*Button*/
.buttonHolder{
  margin:40px auto;
  width:400px;
}

.button{
	background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
	background-image: linear-gradient(top, #f4f1ee, #fff);
	border-radius: 50%;
	box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204,198,197,.5);
	height: 70px;
	// margin: 0 10px 30px 0;
	position: relative;
	width: 70px;
	-webkit-transition: all .1s linear;
	transition: all .1s linear;
}

.button:after{
	color:#e9e6e4;
	content: "";
	display: block;
	font-size: 30px;
	height: 30px;
	text-decoration: none;
	text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
	position: absolute;
	width: 30px;
}

.cross:after{
  content: "✖";
  left: 0.7em;
  top: .35em;
}

.button:hover{
	background-image: -webkit-linear-gradient(top, #fff, #f4f1ee);
	background-image: linear-gradient(top, #fff, #f4f1ee);
	color:#0088cc;
}

.cross:hover:after{
	color:#eb2f2f;
	text-shadow:0px 0px 6px #eb2f2f;
}

.button:active{
	background-image: -webkit-linear-gradient(top, #efedec, #f7f4f4);
	background-image: linear-gradient(top, #efedec, #f7f4f4);
	box-shadow: 0 3px 5px 0 rgba(0,0,0,.4), inset 0px -3px 1px 1px rgba(204,198,197,.5);
}

.button:active:after{
	color:#dbd2d2;
	text-shadow: 0px -1px 1px #bdb5b4, 0px 1px 1px white;
}

figure.image {
  // border: 2px solid white;
  border-radius: 20px;
  overflow: hidden;
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
  max-height: 80vh;
  margin: -20px auto 50px auto;
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
  margin: 0em
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
@media screen and (max-width:480px) {
  figure.image {
    display: none;
  }
  .modal-container {
    max-width: 90%;
  }
}

</style>
