module.exports = {
    getIndex
  }
  
  function getIndex () {
    var msg = `
<!DOCTYPE html>
<html>
<title>Snot Bot</title>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<meta charset="UTF-8">

<div class="w3-row w3-container"> 
  <div class="w3-fourth w3-container">
    <h3>Logo Here</h3>
  </div>
  <div class="w3-twofourths w3-container">
    <h1>Domain name here</h1>
  </div>
  <div class="w3-fourth">
    <h2></h2>
  </div>

</div>

<div class="w3-third w3-container w3-margin-bottom">
  <h1>Filters</h1>
</div> ` ;
    return msg;
  }