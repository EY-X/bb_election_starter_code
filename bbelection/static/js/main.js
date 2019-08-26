document.addEventListener("DOMContentLoaded", function() {

    const candidates = document.querySelector('#candidates')
    const candidatesRequest = axios.get('https://bb-election-api.herokuapp.com')

    candidatesRequest.then(response => {
        for (let x = 0; x < response.data['candidates'].length; x++) {
            console.log(response.data['candidates'][x])
            let singleCandidate = response.data['candidates'][x]
            let candidate = document.createElement('li')
            candidate.innerHTML = ` Name: ${singleCandidate['name']} and Votes: ${singleCandidate['votes']}`
            candidates.appendChild(candidate)    
        }
        
    })
    

});



// In the main.js file, build an AJAX request that makes a GET request to the root path, and expects a JSON response.
// Make sure you're making this request within your DOMContentLoaded block
// Add a <ul> to your index.html file, with an id. This is what we'll attach our data to.
// In the .done((responseData) => {}) callback function for the AJAX request, loop over the candidates in responseData, and append a <li> element for each candidate into the DOM at our <ul> from the last step. You'll want to show the name and votes count of each candidate.