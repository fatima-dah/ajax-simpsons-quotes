// This function loads pokemon data from the Pokemon API
function fetchsimpsonsJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes/`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons[0].quote);
  
        // Build a block of HTML
        const simpsonsHtml = `
          <p><strong>${simpsons[0].quote}</strong></p>
          <p> ${simpsons[0].character} </p>
          <img src="${simpsons[0].image}" />
          
        `;
        document.querySelector('#simpsons').innerHTML = simpsonsHtml;
        

       
      });
      
  }
  const simpson = document.getElementById('simpson');
  simpson.onclick = fetchsimpsonsJSON;
  console.log(simpson);



  
  fetchsimpsonsJSON();