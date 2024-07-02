const gameData = document.getElementById("gameData");
const games = document.querySelector(".games");
const detailsContent = document.getElementById("detailsContent");
const loading = document.querySelector(".loading");
let cards;
import { details} from "./details.js";
class Ui {
    constructor(data) {
        this.data = data;
        // console.log(this.data)
    }
    displayGames() {
        details.classList.add("d-none");
        games.classList.remove("d-none");
        // homePage.classList.remove("d-none");
        setTimeout(() => {
            loadinganimation();
            let box = "";
            this.data.forEach((element) => {
                box += `
            <div class="col">
            <div data-id = "${element.id
                    }" class="card h-100 bg-transparent" role="button">
            <div class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src=${element.thumbnail
                    }>
               </figure>
               <figcaption>
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small">${element.title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text small text-center opacity-50">
                  ${element.short_description.split(0, 5)}
                  </p>
               </figcaption>
            </div>
            <footer class="card-footer small hstack justify-content-between">
               <span class="badge badge-color">${element.genre}</span>
               <span class="badge badge-color">${element.platform}</span>
            </footer>
         </div>
      </div>`;});
            gameData.innerHTML = box;}
            , 250);

        loadinganimation();
    }

    displayGameDetails() {
        details.classList.remove("d-none");
        games.classList.add("d-none");
        // homePage.classList.add("d-none");
        setTimeout(() => {
            loadinganimation();
            let box = "";
                box += `
                  <div class="col-md-4">
      <img src=${this.data.thumbnail} class="w-100" alt="image details">
   </div>
   <div class="col-md-8">
      <h3>Title: ${this.data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${this.data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${this.data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> Live</span> </p>
      <p class="small">${this.data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href=${this.data.game_url}>Show Game</a>
   </div>`;
        
   detailsContent.innerHTML= box;
},250);
loadinganimation();

}


}

function loadinganimation() {
    loading.classList.toggle("d-none");
}

export { Ui, cards };
