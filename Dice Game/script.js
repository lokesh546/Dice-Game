 'use script';

const img=document.querySelector('.img-dice');
const score1=document.querySelector('.score1');
const score2 = document.querySelector(".score2");
const tscore1 = document.querySelector(".tscore1");
const tscore2 = document.querySelector(".tscore2");
const hold=document.querySelector(".hold");
const n1=document.querySelector('.new');
score1.textContent = 0;
score2.textContent = 0;
tscore1.textContent = 0;
tscore2.textContent = 0;
let player = 0;
let active = 0;
let playing=true;
img.classList.add('hidden');
let tscore = [0, 0];
n1.addEventListener('click',function(){
    score1.textContent=0;
    score2.textContent=0;
    tscore1.textContent=0;tscore2.textContent=0;
    document.querySelector(`.p0`).textContent = "Player 1";
    document.querySelector(`.p1`).textContent = "Player 2";
    player=0;
    active=0;
    tscore=[0,0];
    playing=true;
    img.classList.add('hidden');
})
const roll=document.querySelector('.roll')
roll.addEventListener('click',function(){
    if(playing){
    const dice=Math.trunc(Math.random()*6)+1;
    img.classList.remove('hidden');
    img.src=`./Dice Images/dice-${dice}.png`;
    if(dice!==1){
        player+=dice;
        if(active===0){
        score1.textContent=player;
        // document.querySelector('player1').classList.remove('active-1');
        }
        else{
        score2.textContent=player;
        // document.querySelector("player2").classList.remove("active-1");
        }
    } 
    else{
        if(active===0)
        {
            active=1;
            player=0;
            score1.textContent=player;
            // img.classList.add("hidden");
            document.querySelector(".player0").classList.remove("active-1");
            document.querySelector(".player1").classList.add("active-1");
        }
        else{
             active = 0;
             player = 0;
             score2.textContent = player;
            //  img.classList.add("hidden");
             document.querySelector(".player1").classList.remove("active-1");
             document.querySelector(".player0").classList.add("active-1");
        }
    }
}
})
let j=0;
hold.addEventListener('click',function(){
    if(playing){
    if(active===0){
        tscore[active]+=player;
        tscore1.textContent=tscore[active];
        active = 1;
        j=0;
        player = 0;
        score1.textContent = player;
        document.querySelector(".player0").classList.remove("active-1");
        document.querySelector(".player1").classList.add("active-1");
        img.classList.add("hidden");
        // if (tscore[active] >= 50) {
        //   document.querySelector(`.p${active}`).textContent = "Player 2 🥳Wins";
        //   img.classList.add("hidden");
        //   playing=false;
        // }
    }
    else{
        tscore[active]+=player;
        tscore2.textContent=tscore[active];
        active = 0;
        player = 0;
        j=1;
        score2.textContent = player;
        document.querySelector(".player1").classList.remove("active-1");
        document.querySelector(".player0").classList.add("active-1");
        img.classList.add("hidden");
        // if (tscore[active] >= 50) {
        //   document.querySelector(`.p${active}`).textContent = "Player 1 🥳Wins";

        //   img.classList.add("hidden");
        //   playing=false;
        // }
    }
     if (tscore[j] >= 100) {
       document.querySelector(`.p${j}`).textContent = `Player ${
         j + 1
       } 🥳Wins`;
       console.log("hello");
       img.classList.add("hidden");
       playing = false;
     }
}
})
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
document.querySelector('.head').addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
const t = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
overlay.addEventListener('click',t);
btn.addEventListener('click',t);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      t();
    }
  }
});



