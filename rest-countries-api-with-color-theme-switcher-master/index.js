fetch('data.json')
.then(response => response.json())
.then(data =>{
    
    listCountries(data)});
    
    function listCountries(countries){
        document.querySelector(".countries").innerHTML=""


                countries.forEach(country => {
                    let liElement=document.createElement("div")
                    liElement.innerHTML= `
                    <img src="${country.flag}" alt="${country.name}">
                    <h3>${country.name}</h3>
                    <p>${country.population}</p>
                    <p>${country.region}</p>
                    <p>${country.capital}</p>
                    `
                    document.querySelector('.countries').append(liElement)

        })
    }


 const modeToggle=document.getElementById("mode-toggle")
 const body=document.body
 modeToggle.addEventListener('click',()=>{
    body.classList.toggle('dark-mode') 
    body.classList.toggle('light-mode')
 });