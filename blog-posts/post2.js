
const container = document.querySelector(".content")

const url = 'http://exam1.local/wp-json/wp/v2/posts/55'
   
async function fetchData() {
    const response = await fetch(url)
    const json = await response.json()

    console.log(json)

    container.innerHTML = `
    <h1 class="title">${json.title.rendered}</h1>
        <img class="header-img" src='${json.better_featured_image.source_url}'>
        <p class="text">${json.content.rendered}</p>
        `;
        
};
fetchData();