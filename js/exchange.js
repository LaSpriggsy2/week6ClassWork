(function(){
	// logic here
    let userInput;
    let exchangeRate;//Pounds to Euro
    let priceOutput;
    const convertForm = document.getElementById('myForm');
    const msg = document.getElementById('msg');
    let convertTo = document.querySelector(".poundsOrEuros");
    convertTo.addEventListener("click", changeCurrency);
    convertForm.addEventListener("submit", (ev) =>{
        ev.preventDefault();
        console.dir(ev.target);
        console.dir(currency);
    

    // let poundsInput = document.getElementById(pounds);
    // let poundsToEuro = poundsInput*1.2;
    document.getElementById('currency').value;
    priceOutput = 0;
    exchangeRate = 1.2;
    userInput = parseFloat(document.getElementById('currency').value);
    if(isNaN(userInput)){
        msg.style.display = "block";
        msg.innerHTML = "You must enter a number";
        msg.setAttribute('class', 'error');
    }
    if(userInput === 0){
        msg.style.display = "block";
        msg.innerHTML = "You must enter more than zero."
        msg.setAttribute('class', 'error');
    }else{
        priceOutput = userInput * exchangeRate;
        msg.style.display = "block";
        priceOutput = priceOutput.toFixed(2);
        msg.innerHTML = "You will get &euro;"+priceOutput;
        msg.removeAttribute('class');
    }    
});
function changeCurrency(ev){

}
    //ends here
})();
