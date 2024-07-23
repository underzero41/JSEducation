const divEl = document.createElement('div');
const bodyEl = document.querySelector('body');
bodyEl.appendChild(divEl);
const parseData = JSON.parse(apiData);
parseData.message.forEach(element => {
    divEl.insertAdjacentHTML("beforeend", 
    `<figure>
    <img src="${element}" alt="Elephant at sunset" />
    <figcaption>An elephant at sunset</figcaption>
    </figure>`)
});

const urlEl = 'https://jsonplaceholder.typicode.com/users'
async function getData(urlEl) {
    const response = await fetch(urlEl);
    const json1 = await response.json();
    return json1;
}


try {
    const myData = await getData(urlEl);
    console.log(myData);
    myData.forEach(element => {
        divEl.insertAdjacentHTML("beforeend", `
            <h2>${element.name}</h2>
            <p>${element.email}</p>
            `)
    });
} catch (error) {
    console.log(`error ${error.message}`);
}