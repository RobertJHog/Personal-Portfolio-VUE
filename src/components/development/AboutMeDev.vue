<template>
  <div class="aboutme">
    <section class="temporary-intro">
      <div>
        <p>After ten awesome years in sales and business development I felt it was time for a change in my career.
           In a four month sabbatical I overthought my career and tried to figure out what gives me joy in life and how
           I would like to spend the next ten years of my life. <br> <br>I have spent a month learning the basics of programming
           languages such as HTML, CSS, Python and Ruby. The process gave me so much joy that I applied for a traineeship
           with Codaisseur to become a junior developer. From January until March 2017 I have spent over 500 hours at Codaisseur
           to develop my skillset as a programmer. <br><br> Now it's time to venture into the world of web development...
        </p>
      </div>
      <!-- <img class="my-pic" src="../../assets/images/RJHogerbruggeDev.jpg" alt="My pic"> -->
    </section>
    <!-- <div class="aboutme-photo-container grow">
      <img class="aboutdev-pic" src="../../assets/images/codaisseur-final.jpg" alt="Codaisseur final">
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'AboutMeDev'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.aboutme {
  height: 100%;
  max-height:100%;
  display:flex;
  flex-direction: row;
}

.aboutme:before {
  background: url("../../assets/images/rjgek.jpg") no-repeat center right fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.6;
}

.temporary-intro {
  width: 30em;
  height: 40em;
  font-size: 22px;
  flex-basis: 27.5%;
  margin-left: 30em;
  margin-top: 8em;
  line-height: 40px;
}

.temporary-intro p {
  width: 25em;
}

.aboutme-photo-container {
  display: inline-block;
  position: relative;
  flex: 1;
  margin-left: 14em;
  top: 12em;
  height: 30em;
  max-width: 40em;
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

.aboutdev-pic {
  max-width: 40em;
  opacity: 1;
}

.my-pic {
  border-radius: 100%;
  height: 10em;
  margin-left: 15em;
  margin-top: 10em;
  z-index: 99;
  box-shadow: 5px 5px 2.5px #888888;
}

.grow:hover
{
        -webkit-transform: scale(1.6);
        -ms-transform: scale(1.6);
        transform: scale(1.6);
}

@media screen and (max-width:1690px) {
  .aboutme {
    max-width: 100%;
    height: 100%;
  }

}

@media screen and (max-width:1280px) {
  .aboutme-photo-container {
    display: none;
  }
  .temporary-intro {
    width: 30em;
    height: 40em;
    font-size: 22px;
    flex-basis: 27.5%;
    margin-left: 10em;
    margin-top: 8em;
    line-height: 40px;
  }

  .temporary-intro p {
    width: 25em;
  }
}

@media screen and (max-width:980px) {
  .temporary-intro {
    margin-left: 10em;
    margin-top: 2em;
  }
}

@media screen and (max-width:738px) {

}


@media screen and (max-width:480px) {
  .aboutme {
    height: 140vh;
    max-height: 180vh;
  }
  .temporary-intro {
    width: 100vh;
    height: 140vh;
    font-size: 16px;
    flex-basis: 27.5%;
    margin-left: 1em;
    margin-top: 2em;
    line-height: 40px;
  }

  .temporary-intro p {
    width: 23em;
  }
}

@media screen and (max-width:320px) {
  .temporary-intro {
    width: 100vh;
    height: 140vh;
    font-size: 14px;
    flex-basis: 27.5%;
    margin-left: 1em;
    margin-top: 2em;
    line-height: 40px;
  }

  .temporary-intro p {
    width: 20em;
  }

}

</style>
