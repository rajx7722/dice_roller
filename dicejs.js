//dice roller

function rolldice(){
 const num = document.getElementById("num").value;
 const diceresult = document.getElementById("diceresult");
 const diceimages = document.getElementById("diceimages");
 const values= [];
 const images =[];

 for(i=0;i<num;i++){
    const value=Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png">`);
 }
 diceresult.textContent = `dice: ${values.join(`,`)}`;
 diceimages.innerHTML = images.join(`              `);
}