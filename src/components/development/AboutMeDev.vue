<template>
  <div class="aboutme">
    <section class="star-wars">
      <div class="crawl">
        <p class="crawl-text">After ten awesome years in sales and business development I felt it was time for a change in my career.
           In a four month sabbatical I overthought my career and tried to figure out what gives me joy in life and how
           I would like to spend the next ten years of my life. <br> <br>I have spent a month learning the basics of programming
           languages such as HTML, CSS, Python and Ruby. The process gave me so much joy that I applied for a traineeship
           with Codaisseur to become a junior developer. From January until March 2017 I have spent over 500 hours at Codaisseur
           to develop my skillset as a programmer. <br><br> Now it's time to venture into the world of web development...
        </p>
      </div>
      <!-- <img class="my-pic" src="../../assets/images/RJHogerbruggeDev.jpg" alt="My pic"> -->
    </section>
    <div class="aboutme-photo-container">
      <img class="aboutdev-pic" src="../../assets/images/codaisseur-final.jpg" alt="Codaisseur final">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMeDev'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  /* Force the body to fill the entire screen */
  width: 40em;
  /*height: 100%;*/
  /* Hide elements that flow outside the viewable space */
  overflow: hidden;
  /* Black background for the screen */
  /*background: #000;*/
}

.aboutme {
  height: 77vh;
}

.aboutdev-pic {
  width: 60em;
  opacity: 1;
}

.aboutme-photo-container {
  display: inline-block;
  position: relative;
  left: 91.5em;
  bottom: 55em;
  width: 60em;
  padding: 1em;
  /*border: solid 2px #0E0B16;*/
  border-radius: 15px;
  /*background-color: #db8237;*/
  box-shadow: 7.5px 7.5px 3.5px #888888;
  display: flex;
  flex-direction: row;
  opacity: .75;
  background-image: -moz-linear-gradient(90deg, #d0772b 5%, #EBDFDF);
  background-image: -webkit-linear-gradient(90deg, #d0772b 5%, #EBDFDF);
  background-image: -ms-linear-gradient(90deg, #d0772b 5%, #EBDFDF);
  background-image: linear-gradient(90deg, #d0772b 5%, #EBDFDF);
}

.star-wars {
  /* Flexbox to center the entire element on the screen */
  display: flex;
  justify-content: center;
  /* This is a magic number based on the context in which this snippet is used and effects the perspective */
  width: 40em;
  height: 63em;
  margin-left: 35em;
  margin-top: 0em;
  /* This sets allows us to transform the text on a 3D plane, and is somewhat a magic number */
  perspective: 600px;
  /* The rest is totally up to personal styling preferences */
  /*color: #feda4a;*/
  font-size: 100%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  text-align: justify;
  overflow: hidden;
}

.crawl-text {
  width: 20em;
  font-size: 45px;
  line-height: 200%;
}

.crawl {
  /* Position the element so we can adjust the top property in the animation */
  position: relative;
  /* Making sure the text is fully off the screen at the start and end of the animation */
  top: 10em;
  /* Defines the skew origin at the very center when we apply transforms on the animation */
  transform-origin: 50% 100%;
}

/* We're calling this animation "crawl" */
@keyframes crawl {
  0% {
    /* The element starts below the screen */
    top: 1200px;
    /* Rotate the text 20 degrees but keep it close to the viewer */
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    /* This is a magic number, but using a big one to make sure the text is fully off the screen at the end */
    top: -6000px;
    /* Slightly increasing the rotation at the end and moving the text far away from the viewer */
    transform: rotateX(25deg) translateZ(-2500px);
  }
}

.crawl {
  /* Position the element so we can adjust the top property in the animation */
  position: relative;
  /* Defines the skew origin at the very center when we apply transforms on the animation */
  transform-origin: 50% 100%;
  /* Adds the crawl animation, which plays for one minute */
  animation: crawl 80s linear;
  z-index: 97;
}

.fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
}

.my-pic {
  border-radius: 100%;
  height: 10em;
  margin-left: 15em;
  margin-top: 10em;
  z-index: 99;
  box-shadow: 5px 5px 2.5px #888888;
}

@media screen and (max-width:1690px) {
  .aboutme {
    max-width: 100%;
    height: 100%;
  }
  .aboutme-photo-container {
    display: none;
  }

  .star-wars {
    /* Flexbox to center the entire element on the screen */
    display: flex;
    justify-content: center;
    /* This is a magic number based on the context in which this snippet is used and effects the perspective */
    width: 100%;
    /*height: 63em;*/
    margin-left: 0em;
    margin-top: 0em;
    /* This sets allows us to transform the text on a 3D plane, and is somewhat a magic number */
    perspective: 400px;
    /* The rest is totally up to personal styling preferences */
    /*color: #feda4a;*/
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 150%;
    text-align: justify;
    overflow: hidden;
  }
  .crawl {
    /* Position the element so we can adjust the top property in the animation */
    position: relative;
    /* Defines the skew origin at the very center when we apply transforms on the animation */
    transform-origin: 50% 100%;
    /* Adds the crawl animation, which plays for one minute */
    animation: crawl 40s linear;
    z-index: 97;
  }
}

@media screen and (max-width:1280px) {

}

@media screen and (max-width:767px) {

}


@media screen and (max-width:480px) {

}

@media screen and (max-width:320px) {
  .crawl-text {
    width: 100vh;
  }
}

</style>
