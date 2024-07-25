const urlEl = './datas.json';
async function getData(urlEl) {
    try {
        const response = await fetch(urlEl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
 
}
document.addEventListener('DOMContentLoaded', async (e) => {
    const data = await getData(urlEl);
    const listEl = document.querySelector('.main__catalog');
    data.forEach(element => {
        listEl.insertAdjacentHTML("beforeend", `
            <article class="product">
            <a href="singlePage.html" class="product__link">
                <img src="${element.img}" alt="product">
                <div class="product__content">
                    <p class="product__text">
                        ${element.title}
                    </p>
                    <p class="product__price">
                        $${element.price}
                    </p>
                </div>
            </a>
        </article>`)
    });
});


