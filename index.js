let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let sumLaps=0
let finishBtn="The laps for today are: "
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count
    sumLaps+=count 
    if(count!=0)
    saveEl.textContent ="Last finished laps are " + countStr
    else
    saveEl.textContent= "no finished laps!!"
    if(count!=0){
    if(finishBtn=="The laps for today are: ")
    finishBtn+=" " + count
    else
    finishBtn+=" - "+ count + " "}
    countEl.textContent = 0
    count = 0
      

}
function finish(){
    if (sumLaps === 0)
     document.getElementById("save-el").innerText=" you haven't finish any lap!" 
    else
     document.getElementById("save-el").innerText=finishBtn+" = "+ sumLaps
     finishBtn= "The laps for today are: "
     count=0
     sumLaps=0
}
