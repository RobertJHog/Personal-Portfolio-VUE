<template>
  <div class="aboutme">
    <img class="my-pic" src="../../assets/images/RJHogerbruggeDev.jpg" alt="My pic">
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
  display: block;
  width: 30em;
  margin-left: 33em;
  margin-top: 4em;
  font-size: 20px;
  /*height: 63em;*/
}

.aboutme p {
  line-height: 40px;
}

.my-pic {
  border-radius: 100%;
  height: 10em;
  border: 3px solid #2c3e50
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
    margin-top: 4em;
    line-height: 40px;
  }

  .temporary-intro p {
    width: 25em;
  }
  .aboutme {
    margin-left: 0em;
    margin-top: 4em;
    font-size: 20px;
  }
  .my-pic {
    margin-left: 17em;
  }
}

@media screen and (max-width:980px) {
  .temporary-intro {
    margin-left: 5em;
    margin-top: 2em;
    width: 25em;
  }

  .aboutme {
    margin-left: 0em;
    margin-top: 4em;
    font-size: 20px;
  }
  .my-pic {
    margin-left: 10em;
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
    font-size: 14px;

  }

  .temporary-intro p {
    width: 20em;
  }

}

</style>
