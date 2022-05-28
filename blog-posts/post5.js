const myUrl = new URL("https://www.muellerfitness.com");

myUrl.searchParams.append("id", "13");
myUrl.searchParams.append("title", "How to Build Muscle Faster and Easier");

console.log(myUrl.search);

const container = document.querySelector(".content")

const url = 'http://exam1.local/wp-json/wp/v2/posts/13'
   
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