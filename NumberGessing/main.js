 const randNum = Math.floor(Math.random() * 10 + 1);
 let guesses = 0;

 document.getElementById("btn").onclick = function(){

    let guess = document.getElementById("textbox").value
    guesses += 1;

    if (guess == randNum){
        alert(`${randNum} is the number. It took you ${guesses} guesses`);
    }
    else if (guess < randNum){
        alert("Too small! Try again!!");
    }
    else{
        alert("Too large");
    }


 }