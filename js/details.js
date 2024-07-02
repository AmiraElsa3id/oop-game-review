const details=document.querySelector(".details");
const homepage=document.querySelector('.games');
const btnClose = document.getElementById('btnClose')
btnClose.addEventListener("click",function(){
    details.classList.add('d-none')
    homepage.classList.remove('d-none');

})
let data;
const gameData = document.getElementById("gameData");
import { Ui, cards } from "./ui.js";
homepage.addEventListener("click",async function(e){
    if(e.target.closest('.card').classList.contains("card")){
      const card = e.target.closest('.card');
      const cardId = card.getAttribute('data-id');
      console.log(cardId)
     let gameDetail =new GameDetails(cardId);
        data = await gameDetail.getDetails();
        console.log(data)
        let myUi= new Ui(data);
        myUi.displayGameDetails(details);
    }
   
    // })
    // console.log(e.target.closest('.card'));
})




class GameDetails{
    constructor(id){
        this.id=id
    }
    getApi(){
        // console.log(`https://free-to-play-games-database.p.rapidapi.com/api/games?id=${this.category}`)
        return `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`
    }
    async getDetails(){
        const url = this.getApi();
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bdd49923d3mshf19c17e06336dcdp12c689jsnc576408bf27c',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}


export {details ,GameDetails};