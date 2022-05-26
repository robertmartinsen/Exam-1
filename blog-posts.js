let loadBtn = document.querySelector('#load-more');
let currentPosts = 6;

loadBtn.onclick = () => {
    let cards = [...document.querySelectorAll('.container .content .card')];
    for (var i = currentPosts; i < currentPosts + 6; i++){
        cards[i].style.display = 'inline-block';
    }
    currentPosts += 6;

    if(currentPosts >= cards.length){
        loadBtn.style.display = 'none';
    }
}