<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h1> {{ name }} </h1>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <span> {{ description }}
              </span>
              <span> {{ siteurl }}
              </span>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <figure class="image is-4by3">
                <img :src="image">
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
  props: ['name', 'image', 'siteurl', 'description']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border: #d0772b solid 2px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  padding: 2em;
}

.modal-body {
  margin: 20px 0;
  padding: 2em;
}

.modal-footer {
  padding: 2em;
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
