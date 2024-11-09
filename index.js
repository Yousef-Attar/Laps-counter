
document.addEventListener("DOMContentLoaded", function() {
    let saveEl = document.getElementById("save-el");
    let countEl = document.getElementById("count-el");
    let count = 0;
    let sumLaps = 0;
    let finishBtn = "The laps for today are: ";

    // Increment function
    function increment() {
        count += 1;
        countEl.textContent = count;
    }

    function save() {
        let countStr = count;
        sumLaps += count;

        if (count !== 0) {
            saveEl.textContent = "Last finished laps are " + countStr;
        } else {
            saveEl.textContent = "No finished laps!!";
        }

        if (count !== 0) {
            if (finishBtn === "The laps for today are: ") {
                finishBtn += " " + count;
            } else {
                finishBtn += " - " + count;
            }
        }

        countEl.textContent = 0;
        count = 0;
    }

    function finish() {
        if (sumLaps === 0) {
            saveEl.innerText = "You haven't finished any laps!";
        } else {
            saveEl.innerText = finishBtn + " = " + sumLaps;
        }

        finishBtn = "The laps for today are: ";
        count = 0;
        sumLaps = 0;
    }
    document.getElementById("increment-btn").addEventListener("click", increment);
    document.getElementById("save-btn").addEventListener("click", save);
    document.getElementById("finish-btn").addEventListener("click", finish);
});
