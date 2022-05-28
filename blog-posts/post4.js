const myUrl = new URL("https://www.muellerfitness.com");

myUrl.searchParams.append("id", "32");
myUrl.searchParams.append("title", "Best Back Exercises");

console.log(myUrl.search);

const container = document.querySelector(".content")

const url = 'https://exam1.local/wp-json/wp/v2/posts/32'
   
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