<template>
  <div class="saleswork-container">
    <div class="columns">
      <div class="column">
        <p class="title">Iron Mountain</p>
        <p class="title">2010 - 2016</p>
        <p class="subtitle"> Business Development Executive / Manager </p>
        <p class="job-text"> As Business Development Manager I was responsible for managing the corporate accounts of
          Iron Mountain Benelux and generating new revenue from existing and new accounts. This includes the commercial
           management of tenders, re-tenders, and price negotiations in addition to the relationship between Iron Mountain,
           our clients and internal stakeholders.
          <br><br>
          My main focus was on corporate organisations in banking & finance. I also have extensive experience in verticals such as
          pharmacy, government and education.
        </p>
      </div>
      <div class="column">
        <p class="title">De Breed & Partners</p>
        <p class="title">2007 - 2010</p>
        <p class="subtitle"> Consultant & Project Manager </p>
        <p class="job-text">  During my time at the De Breed & Partners I helped technology innovative companies (B2B) reaching their market and increase their revenue.
          In collaboration with our customers I thought out telemarketing strategies, advised customers on their proposition and trained telemarketers & junior consultants.
          I lead successful projects for:
          </p>
          <p> Document- & workflow management solutions </p>
          <p> WBSO, ESF, Innovatiebox grants </p>
          <p> Contract & Service Level Agreement managing tools </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesWork'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.saleswork-container {
  padding: 4em auto;
}

.title {
  margin-bottom: 1em;
}

.columns {
  margin: 0 auto;
}

.column {
  margin: 2em;
  width: 20em;
  height: 60vh;
  opacity: .5;
}

.column:hover {
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
