<template>
  <div class="saleswork-container">
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
          <p class="subtitle"> WBSO, ESF, Innovatiebox grants </p>
          <p class="subtitle"> Contract & Service Level Agreement managing tools </p>
        </article>
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
  margin: 0em 3em 4em 3em;
}

.title {
  margin-bottom: 1em;
}

.job-text {
  padding-bottom: 2em;
}

.border-solid {
  border: #697de3 solid 4px;
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
  border-radius: 20px;
}

.tile {
  margin: 2em;
  width: 30em;
  opacity: .5;
}

.tile:hover {
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
