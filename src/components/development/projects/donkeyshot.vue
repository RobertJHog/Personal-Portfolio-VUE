<template>
  <div class="project-view">
    <img class="project-view-pic" src="../../../assets/images/donkeyshot.jpg" alt="DonkeyShot website">
    <div class="project-text">
      <span> For an old client I have built a company website based on his preferences.
        I have used an template as a starting point.
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Donkeyshot'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.project-view {
  position: absolute;
  right: 4em;
  width: 70em;
  height: 55em;
  bottom:14em;
  display: inline-block;
  /*border: solid 2px #0E0B16;*/
  border-radius: 15px;
  /*background-color: #db8237;*/
  box-shadow: 7.5px 7.5px 3.5px #888888;
  display: flex;
  flex-direction: column;
  /*opacity: .5;*/
  background-image: -moz-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: -webkit-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: -ms-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: linear-gradient(90deg, #0E0B16 5%, #2c3e50);
}

/*.project-view:hover {
  opacity: 1;
}*/

.project-view-pic {
  flex: 1;
  display: block;
  position: relative;
  width: 68em;
  height: 42em;
  left: 0em;
  padding: 1em 1em;
  border-radius: 15px;
}

.project-text {
  top: 0em;
  flex: 1;
  position: relative;
  width: 55em;
  color: white;
  font-size: 20px;
  line-height: 45px;
  padding: 1em;
}

@media screen and (min-width:768px) and (max-width:1024px) {
  .project-view {
    display: none;
  }
}

@media screen and (min-width:320px) and (max-width:480px) {
  .project-view {
    display: none;
  }
}

</style>
