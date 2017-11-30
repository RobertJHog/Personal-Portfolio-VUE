<template>

  <div class="saleswork-container">
      <div class="tile is-ancestor">
        <div v-for="job in salesJobs" class="tile is-parent">
          <article class="tile is-child is-2">
            <p class="title">{{ job.company }}</p>
            <p class="subtitle"> {{ job.job }} ({{job.duration }}) </p>
            <div class="job-description">
              <p class="job-text"> {{ job.description1 }} </p>
                <br>
              <p class="job-text"> {{ job.description2 }} </p>
            </div>
          </article>
        </div>
      </div>

<!--

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-6 is-child box border-solid">
          <p class="title">Iron Mountain</p>
          <p class="title">2010 - 2016</p>
          <p class="subtitle"> Business Development Manager </p>
          <p class="job-text"> As Business Development Manager I was responsible for managing the corporate accounts of
            Iron Mountain Benelux and generating new revenue from existing and new accounts. This includes the commercial
             management of tenders, re-tenders, and price negotiations in addition to the relationship between Iron Mountain,
             our clients and internal stakeholders.
            <br><br>
            My main focus was on corporate organisations in banking & finance. I also have extensive experience in verticals such as
            pharmacy, government and education.
          </p>
          <p class="subtitle"> Business Development Executive </p>
          <p class="job-text"> In this role I was responsible for generating new business and managing midmarket & corporate accounts
             in the Benelux. My main focus is on verticals such as government, pharmacy, financials & education providing solid solutions
             on Records Management, Digitalisation and Tape Management.
          </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-6 is-child box border-solid">
          <p class="title">De Breed & Partners</p>
          <p class="title">2007 - 2010</p>
          <p class="subtitle"> Consultant & Project Manager </p>
          <p class="job-text">  During my time at the De Breed & Partners I helped technology innovative companies (B2B) reaching their market and increase their revenue.
          In collaboration with our customers I thought out telemarketing strategies, advised customers on their proposition and trained telemarketers & junior consultants.
          I lead successful projects for:
          </p>
          <p class="subtitle"> Document- & workflow management solutions </p>
          <br>
          <p class="subtitle"> WBSO, ESF, Innovatiebox grants </p>
          <br>
          <p class="subtitle"> Contract & Service Level Agreement managing tools </p>
          <br>
        </article>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'SalesWork',
  data () {
    return {}
  },
  computed: {
    salesJobs () {
      return this.$store.getters.salesJobs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.saleswork-container {
  padding: 2em auto;
  min-height: 35em;
}

.title {
  margin-bottom: 1.5em;
  font-size: 24px;
}

.subtitle {
  padding: 0em;
  font-size: 20px;
}

.title, .subtitle {
  font-family: 'Raleway', sans-serif;
  color: white;
  text-align: left;
  font-weight: bolder;
}

.tile {
  margin: 0 2em;
  padding: 1em 0;
  width: 20em;
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
  color: white;
  text-align: left;
}

.job-description {
  opacity: .5;
}

.job-description:hover {
  opacity: 1;
}

@media screen and (max-width:480px) {
  .saleswork-container {
    top: 5em;
  }
  .column {
    margin-bottom: 6em;
    width: 86vw;
  }
}

</style>
