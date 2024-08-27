// GET - вытащить
// POST - добавить
// PUT - редактировать
// DELETE - удалить

// AJAX
// FETCH('')
// AXIOS

// fetch('https://jsonplaceholder.typicode.com/posts',
//     {
//         method: 'GET',
//         // headers:{
//         // }
//     }
// )
// const parent = document.querySelector('.countries')
// const search = document.getElementById('input')
// const button = document.getElementById('button')
// const canada = document.querySelector('.canada')

// fetch('https://restcountries.com/v3.1/name/usa')
// .then(response=> response.json())
// .then(answer=> forUsa(answer))
// // .then(answer=>{
// //     console.log(answer[0]);
// //     usa.innerHTML += `
// //     <img src= ${answer[0].flags.svg}>
// //     <h2> ${answer[0].altSpellings[2]}</h2>
// //     <h2> ${answer[0].region} </h2>
// //     <h2> ${answer[0].population} </h2>
// //     <h2> ${answer[0].languages.eng} </h2>
// //     <h2> ${answer[0].currencies.USD.symbol} ${answer[0].currencies.USD.name} </h2>`
// // })
// fetch('https://restcountries.com/v3.1/name/canada')
// .then(response=> response.json())
// .then(answer=> forCanada(answer))
// // .then(answer=>{
// //     console.log(answer[0]);
// //     canada.innerHTML += `
// //     <img src= ${answer[0].flags.svg}>
// //     <h2> Canada </h2>
// //     <h2> ${answer[0].region} </h2>
// //     <h2> ${answer[0].population} </h2>
// //     <h2> ${answer[0].languages.eng} </h2>
// //     <h2> ${answer[0].currencies.CAD.symbol} ${answer[0].currencies.CAD.name}</h2>`
// // })

// function forUsa(answer){
//     console.log(answer[0]);
//     usa.innerHTML += `
//     <img src= ${answer[0].flags.svg}>
//     <h2> ${answer[0].altSpellings[2]}</h2>
//     <h2> ${answer[0].region} </h2>
//     <h2> ${answer[0].population} </h2>
//     <h2> ${answer[0].languages.eng} </h2>
//     <h2> ${answer[0].currencies.USD.symbol} ${answer[0].currencies.USD.name} </h2>`
// }

// function forCanada(answer){
//     console.log(answer[0]);
//     canada.innerHTML += `
//     <img src= ${answer[0].flags.svg}>
//     <h2> Canada </h2>
//     <h2> ${answer[0].region} </h2>
//     <h2> ${answer[0].population} </h2>
//     <h2> ${answer[0].languages.eng} </h2>
//     <h2> ${answer[0].currencies.CAD.symbol} ${answer[0].currencies.CAD.name}</h2>`
// }
// function getCountry(country){
//     const block = document.createElement('div')
//     block.classList.add('blocks')
//     const flag = document.createElement('img')
//     const name = document.createElement('h2')
//     name.textContent = country[0].altSpellings[2]
//     const popul = document.querySelector('h2')
//     popul.textContent = country[0].population
//     const laung = document.querySelector('h2')
//     laung.textContent = country[0].languages[0]
//     const valuta = document.createElement('h2')
//     valuta.textContent = country[0].currencies[0].symbol && country[0].currencies[0].name
// }
const parent = document.querySelector('.countries')
const search = document.getElementById('input')
const button = document.getElementById('button')
const select = document.querySelector('.select')
function getCountry(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response=> response.json())
    .then(answer=>{
        console.log(answer[0]);
        let elem = answer[0]
        const blocks = document.createElement('div')
        blocks.classList.add('block')
        blocks.innerHTML += `
        <img src=" ${elem.flags.svg}">
        <h2> ${elem.name.common} </h2>
        <h2> ${elem.region} </h2>
        <h2> ${elem.population} </h2>
        <h2> ${Object.values(elem.languages)}</h2>
        <h2> ${Object.values(elem.currencies)[0].symbol} ${Object.values(elem.currencies)[0].name}</h2>`
        parent.append(blocks)
    })
}
getCountry(`${search}`)
// getCountry('usa')
// getCountry('Mexico')
// getCountry('france')
// getCountry('germany')

function option() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries=>{
            countries.forEach(country=>{
                const option = document.createElement('option')
                option.value = country.name.common
                option.textContent = country.name.common
                select.append(option)
            })
        })
}
option()
select.addEventListener('change',()=>{
    const selectedCountry = select.value
    if (selectedCountry){
        getCountry(selectedCountry)
    }
});
button.addEventListener('click',()=>{
    const countryName = search.value
    if(countryName){
        getCountry(countryName)
    }
})

// URL,{
//     method: 'GET'
// }