<template>
  <a target="_blank" href="https://www.linkedin.com/in/robert-jan-hogerbrugge-38ab3a9/" class="actionbutton">Contact me</a>
</template>

<script>
export default {
  name: 'ActionButton'
}
</script>

<style lang="scss" scoped>

$col-primary: #d0772b;
$corner-radius: 5px;

.actionbutton {
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Exo 2', sans-serif;
  font-weight: 300;
  font-size: 22px;

  display: inline-block;
  position: relative;
  text-align: center;
  color: $col-primary;
  border: 1px solid $col-primary;
  border-radius: $corner-radius;
  right: -28em;
  top: -2em;

  line-height: 3em;
  padding-left: 5em;
  padding-right: 5em;

  box-shadow: 0 0 0 0 transparent;

  transition: all 0.2s ease-in;

  &:hover {
    color: white;
    box-shadow: 0 0 30px 0 transparentize($col-primary, 0.5);
    background-color: $col-primary;

    transition: all 0.2s ease-out;

    &:before {
      -webkit-transform: translateX(300px) skewX(-15deg);
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      -webkit-transition: .7s;
      transition: .7s;
    }
    &:after {
      -webkit-transform: translateX(300px) skewX(-15deg);
    	transform: translateX(300px) skewX(-15deg);
    	opacity: 1;
    	-webkit-transition: .7s;
    	transition: .7s;
    }
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }

  &:before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;

    opacity: 0;
    background: white;
    box-shadow: 0 0 15px 3px white;
    transform: (skewX(-20deg));
  }
}

@media screen and (max-width:1680px) {
  .actionbutton {
    right: -4em;
    top: 1em;
  }
}

@media screen and (max-width:1280px) {
  .actionbutton {
    right: -16em;
    top: -4em;
    font-size: 16px;
  }
}

@media screen and (max-width:980px) {
  .actionbutton {
    // $col-primary: white;
    //
    // position: relative;
    // font-weight: 300;
    // font-size: 17px;
    //
    // display: inline-block;
    // position: relative;
    // text-align: center;
    // color: $col-primary;
    // border: 1px solid $col-primary;
    // border-radius: 0;
    // right: 0em;
    // top: -9em;
    // width: 100%;
    //
    // line-height: 2em;
    // padding-left: 0em;
    // padding-right: 0em;
  }
}

@media screen and (max-width:736px) {
  .actionbutton {
    $col-primary: white;

    position: fixed;
    font-weight: 300;
    font-size: 17px;

    display: inline-block;
    position: relative;
    text-align: center;
    color: $col-primary;
    border: 1px solid $col-primary;
    border-radius: 0;
    right: 0em;
    top: -9em;
    width: 100%;

    line-height: 2em;
    padding-left: 0em;
    padding-right: 0em;
  }
}

@media screen and (max-width:480px) {
  .actionbutton {
  }
}

// @media screen and (min-width:360px) and (max-width:480px) {
//   .actionbutton {
//     top: -9em;
//   }
// }

@media screen and (max-width:320px) {
  .actionbutton {
    top: -7.25em;
  }
}


</style>
