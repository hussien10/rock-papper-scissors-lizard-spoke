// the core logic
// computer role
function computerRandomRole() {
	return Math.ceil(Math.random() * 5);
}
function getTheShape(power) {
	return document.querySelectorAll("[data-power='" + power + "']")[0].outerHTML;
}
function diaplayPlayerChoice(id, value) {
	document.getElementById(id).innerHTML = value;
}
// display the result

// human role
var humanRole = "";
document.addEventListener("click", function handleClick(event) {
	document.querySelector(".start").style.display="none"
    document.querySelector(".result").style.display="block"
	if(event.target.parentNode.classList.contains("tools-container")||
    event.target.parentNode.parentNode.classList.contains("tools-container")){
        if (event.target.classList.contains("tool")) {
            humanRole = event.target.outerHTML;
        }
        if (event.target.parentNode.classList.contains("tool")) {
            console.log(event.target.parentNode);
            humanRole = event.target.parentNode.outerHTML;
        } else {
            diaplayPlayerChoice("human", humanRole)
        }
        diaplayPlayerChoice("human", humanRole);
        diaplayPlayerChoice("com", getTheShape(computerRandomRole()));
        winner()
    }

});
// play agin
function playAgain(){
    document.querySelector(".play").addEventListener("click",function(){
        document.querySelector(".start").style.display="block"
    document.querySelector(".result").style.display="none"
    })
}

// the winner

function winner(){
    if(diaplayPlayerChoice("human", humanRole).getAttribute("data-power")==1 &&
    diaplayPlayerChoice("com", getTheShape(computerRandomRole())).getAttribute("data-power")==5
    ){
        return true
    }
    else{
        return diaplayPlayerChoice("human", humanRole).getAttribute("data-power")>diaplayPlayerChoice("com", getTheShape(computerRandomRole())).getAttribute("data-power")
    }
}
// score
var score=0;
function score(winner){
    if(winner){
        score++
    }
    return score
}
document.querySelector(".score-number").innerHTML(score(winner()))
playAgain()
// set border
var tools = Array.from(document.querySelectorAll(".tool"));
tools.map((item) => {
	item.style.borderColor = item.getAttribute("data-color");
});
