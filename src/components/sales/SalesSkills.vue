<template>
  <div class="sales-skills">
    <div class="skill-type">
      <h2> Business Development </h2>
      <p> Solution selling, Business2Business, tenders, coaching, sales management, telesales, advanced negotiation </p>
    </div>
    <div class="skill-type">
        <h2>Account Management </h2>
        <p>managing corporate & midmarket accounts, strategic account management, Customer relations  </p>
    </div>
    <div class="skill-type">
      <h2> Project Management </h2>
      <p> leadership, time management, risk management  </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesSkills'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.skill-type {
  margin-bottom: 4em;
}

.sales-skills {
  margin-top: 4em;
  display: block;
  width: 50em;
  margin-left: 5em;
  font-size: 130%;
  word-spacing: 1.5px;
  line-height: 35px;
}

@media screen and (min-width:320px) and (max-width:480px) {
  .dev-sales-container {
    max-width: 100%;
    height: 100%;
  }
  .skill-type {
    margin-bottom: 3em;
  }

  .sales-skills {
    margin-top: 10em;
    display: block;
    width: 100%;
    margin-left: 0em;
    margin-top: 4em;
  }
}

</style>
