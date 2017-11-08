<template>
  <div class="sales-work">
    <div class="job-description">
      <h2> Iron Mountain 2016 - 2016 </h2>
      <h3> Business Development Manager </h3>
      <p class="job-text"> As Business Development Manager I was responsible for managing the corporate accounts of Iron Mountain Benelux and generating new revenue from existing
        and new accounts. This includes the commercial management of tenders, re-tenders, and price negotiations in addition to the relationship between Iron Mountain, our clients
         and internal stakeholders.
         <br><br>
        My main focus was on corporate organisations in banking & finance. I also have extensive experience in verticals such as pharmacy, government and education.
      </p>
    </div>
    <div class="job-description">
      <h2> Iron Mountain 2010 - 2015 </h2>
      <h3> Business Development Executive </h3>
      <p class="job-text">In this role I was responsible for generating new business and managing midmarket & corporate accounts in the Benelux.
        My main focus is on verticals such as government, pharmacy, financials & education providing solid solutions on Records Management,
        Digitalisation and Tape Management. <br><br>
      </p>
    </div>
    <div class="job-description">
      <h2>De Breed & Partners 2007 - 2010 </h2>
      <h3>Consultant & Project Manager </h3>
      <p class="job-text"> During my time at the De Breed & Partners I helped technology innovative companies (B2B) reaching their market and increase their revenue.
        In collaboration with our customers I thought out telemarketing strategies, advised customers on their proposition and trained telemarketers & junior consultants.
        I lead successful projects for:
      </p>
         <br><br>
      <h3>
         •	Document- & workflow management solutions <br><br>
         •	WBSO, ESF, Innovatiebox grants <br><br>
         •	Contract & Service Level Agreement managing tools
      </h3>
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

.sales-work {
  margin-top: 10em;
  display: flex;
  flex-direction: row;
  width: 100em;
  margin-left: 35em;
  margin-top: 10em;
}

.job-description {
  flex: 1;
  width: 25em;
  padding: 0em 6em;
  opacity: 0.5;
}

.job-description:hover {
  opacity: 1;
}

.job-text {
  width: 20em;
  font-size: 20px;
}

@media screen and (min-width:320px) and (max-width:480px) {
  .sales-work {
    max-width: 100%;
    max-height: 100%;
    flex-direction: column;
    margin-left: 0em;
    margin-top: 3em;
  }

  .job-description {
    width: 94%;
    max-height: 35em;
    padding: 0em 6em;
    opacity: 1;
    flex: 1;
    padding: 0em;
  }

  /*.job-description h2, .job-description h3,  {
    width: 15em;
  }*/

  .job-description:hover {
    opacity: 1;
  }

  .job-text {
    width: 100%;
    font-size: 16px;
    padding: 8px;
  }
}

</style>
