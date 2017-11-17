<template>
  <div class="aboutme">
    <img class="my-pic" src="../../assets/images/RJHogerbruggeSales.jpg" alt="My pic">
    <p class="intro-sales">Starting out as a sales trainee for a management consultancy firm l quickly learned the ropes of
      cold-acquisition and lead-generation. As an external telemarketer I have spent over a thousand hours tele
      prospecting for multiple customers offering high end solutions in both hardware & software. Within two years
      promoted to Senior Consultant leading a team of over 10 sales trainees & junior consultants. </br> </br>

      At Iron Mountain my main focus was managing customers and selling complex solutions for records management, document management & tape management
      in the Benelux. These roles require consultative based selling involving six figure deals and prospecting on both tactical and
      strategic level. My experience within the company has greatly improved my skills in negotiation, managing demanding internal/external
      customers and achieving demanding targets.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutMeSales'
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

@media screen and (max-width:1680px) {
  .aboutme {
    display: block;
    width: 30em;
    margin-left: 15em;
    margin-top: 4em;
    margin-bottom: 4em;
    font-size: 20px;
    /*height: 63em;*/
  }
}


@media screen and (min-width:320px) and (max-width:480px) {
  .aboutme {
    height: 100%;
    width: 100%;
    margin-left: 0em;
    margin-top: 2em;
    font-size: 16px;
  }
  .aboutme-photo-container {
    display: none;
  }
}

@media screen and (min-width:768px) and (max-width:1024px) {
  .aboutme {
    max-width: 100%;
  }
  .aboutme-photo-container {
    display: none;
  }
}

</style>
