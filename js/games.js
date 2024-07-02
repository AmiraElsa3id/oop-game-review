import {Ui, cards} from './ui.js'
const homePage =document.querySelector('.home');
const navList=document.querySelectorAll(".navbar .container ul li a");
let myHome;
let data;
let myUi;
let preVelement = navList[0]

navList.forEach((navItem)=>{
navItem.addEventListener("click", async function(){
    if(this===preVelement) return;
    preVelement.classList.remove("active");
    this.classList.add("active");
    preVelement=this;
    let category=this.innerText
    myHome=new Home(category);
    data = await myHome.getgames();
    myUi = new Ui(data);
    myUi.displayGames();
    // console.log( myHome.getgames());
    console.log(category)
})
});
class Home{
    constructor(category){
        this.category=category?category.toLowerCase():"MMORPG";
    }
    getApi(){
        console.log(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`)
        return `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`
    }
    async getgames(){
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
    class Game{
 constructor(){
    myHome= new Home();
    // myHome.category = "MMORPG";
    async function getData(){
         data = await myHome.getgames();
         myUi = new Ui(data);
         myUi.displayGames();
         
    };
        getData();
        // this.gameName=gamesList[index].title;
        // this.id=gamesList[index].id;
        // this.shortDescription=gamesList[index].short_description;
        // this.thumbnail=gamesList[index].thumbnail_url;
        // this.category=gamesList[index].genre;
        // this.platform=gamesList[index].platform;
}

}
export {Game ,homePage };
