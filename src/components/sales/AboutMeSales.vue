<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box border-solid">
        <p class="title">Honors & Awards</p>
        <br>
        <figure class="image is-1by2 im-logo">
          <img src="../../assets/images/ironmountain.png" alt="My pic">
        </figure>
        <p class="subtitle awards"> Sales Quota Award - 2011 </p>
        <p class="subtitle awards"> Global Chairman's Club - 2012 </p>
        <p class="subtitle awards"> Global Chairman's club - 2015 </p>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box border-solid">
        <figure class="image is-1by2">
          <img class="my-pic" src="../../assets/images/RJHogerbruggeSales.jpg" alt="My pic">
        </figure>
        <p class="title">About me</p>
        <br>
        <p class="aboutme">Starting out as a sales trainee for a management consultancy firm l quickly learned the ropes of
          cold-acquisition and lead-generation. As an external telemarketer I have spent over a thousand hours tele
          prospecting for multiple customers offering high end solutions in both hardware & software. Within two years
          promoted to Senior Consultant leading a team of over 10 sales trainees & junior consultants.
        <br><br>
          At Iron Mountain my main focus was managing customers and selling complex solutions for records management, document management & tape management
          in the Benelux. These roles require consultative based selling involving six figure deals and prospecting on both tactical and
          strategic level. My experience within the company has greatly improved my skills in negotiation, managing demanding internal/external
          customers and achieving demanding targets.
        </p>
      </div>
    </div>
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box border-solid">
        <p class="title">Business Development</p>
          <p class="subtitle">Solution Selling</p>
          <p class="subtitle">Business2Business</p>
          <p class="subtitle">Tenders</p>
          <p class="subtitle">Sales Management & Coaching</p>
          <p class="subtitle">Telesales</p>
          <p class="subtitle">Advanced negotiation</p>
      </div>
      <div class="tile is-child box border-solid">
        <p class="title">Account Management</p>
          <p class="subtitle">Corporate & Midmarket accounts</p>
          <p class="subtitle">Strategic Account Management</p>
          <p class="subtitle">Customer Service</p>
          <p class="subtitle">Project Management</p>
          <p class="subtitle">Risk Management</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMeSales'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.im-logo {
  bottom: 4em;
}

.awards {
  font-size: 24px;
}

.language-icons {
  margin: 1em auto;
}

.aboutme {
  font-size: 20px;
  padding-top: 2em;
}

.tile {
  padding: 1em;
  margin-top: 0em;
}

.subtitle {
  padding: .25em;
}

.title {
  margin-bottom: 2em;
  margin-top: .75em;
}

.border-solid {
  border: #697de3 solid 4px;
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
}

.image .my-pic {
  border-radius: 10px;
  height: 8em;
  width: 8em;
  float: left;
  margin: 0 auto;
  border: 2px solid #d0772b;
  -webkit-box-shadow: 2px 7px 4px #777;
  -moz-box-shadow: 2px 7px 4px #777;
  box-shadow: 2px 7px 4px #777;
}

.image.is-4by3 {
  padding-top: 50%;
}

.project-pic img {
  border-radius: 10px;
}

.image.is-16by9 {
  width: 100%;
  height: 100%;
}

.front-logos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /*width: 20em;*/
  justify-content: center;
  margin: 2em auto;
}

.logo {
  height: 3.5em;
  width: 3em;
  display: block;
  margin: 1em 1em;
}

@media screen and (max-width:480px) {
  .logo {
    width: 2.4em;
  }
}
</style>
