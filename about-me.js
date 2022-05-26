
const container = document.querySelector(".content")

const url = 'https://exam1.local/wp-json/wp/v2/posts/36'
   
async function fetchData() {
    const response = await fetch(url, {mode: 'cors'})
    const json = await response.json()

    console.log(json)

    container.innerHTML = `
    <h1 class="title">${json.title.rendered}</h1>
        <img class="header-img" src='${json.better_featured_image.source_url}'>
        <p class="text">${json.content.rendered}</p>
        `;
        
};
fetchData();