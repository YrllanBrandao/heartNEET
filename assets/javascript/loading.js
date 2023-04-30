const loading = document.querySelector(".loading");
const MAX_WIDTH = window.innerWidth;

window.addEventListener("load", ()=>{
    loading.style.width = "100vw";

    const hideLoading = setTimeout(() =>{
        loading.style.display = "none";
    }, 400);

    hideLoading;
})
