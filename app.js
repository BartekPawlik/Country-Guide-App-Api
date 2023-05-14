let searchBtn = document.querySelector(".search-btn")
let countryInp = document.querySelector("#country-inp")
let result = document.querySelector('#result')

searchBtn.addEventListener("click", ()=>{
    let countryName = countryInp.value
  
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalUrl)
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        

        console.log(data[0])
       let capital = data[0].capital[0];
       let nameof = data[0].name.official;
        let map = data[0].flags.svg;
       let commonnme = data[0].name.common;
        let continent = data[0].continents[0];
        let population = data[0].population;
       let language = Object.values(data[0].languages).toString().split(",").join(",");
        result.innerHTML = `
        <img height:100 src="${map}" alt="">
        <h2><span>Country: </span>${commonnme} </h2>
        <h2><span>Oficial:</span> ${nameof}</h2>
        <h2> <span>Capital:</span> ${capital}</h2>
        <h2> <span>Language:</span> ${language}</h2>
        <h2> <span>Continent:</span> ${continent}</h2>
        <h2> <span>Population:</span> ${population}</h2>

        `
    });
    countryInp.value = ""

});