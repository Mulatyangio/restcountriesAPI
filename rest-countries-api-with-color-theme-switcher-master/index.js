fetch(data.json)
.then(response => response.json())
.then(data =>{
    
    listCountries(data)});
    
    function listCountries(countries){
        document.querySelector(".countries").innerHTML=""


                countries.forEach(country => {
                    let liElement=document.createElement("li")
                    liElement.innerHTML `
                    <img src="${country.image}" alt="${country.name}">
                    <h3>${country.name}</h3>
                    <p>${country.population}</p>
                    <p>${country.region}</p>
                    <p>${country.capital}</p>
                    `

        })
    }