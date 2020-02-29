let nums = document.querySelectorAll("[data-number]");
let fOperand = document.querySelector("[data-first-operand]");
let sOperand = document.querySelector("[data-second-operand]");
let operationButtons = document.querySelectorAll("[data-operation");
let operationSign = document.querySelector("[data-operation-sign")
let allClearButton = document.querySelector("[data-all-clear]");
let equalButton = document.querySelector("[data-equal]");
let result = document.querySelector("[data-result]");
let dot = document.querySelector("[data-dot]");


let dotClicked = false;
let detected = false;
let operationType;
let setOfOperations = {
    "devision": function(a,b) {
        return a/b;
    },
    "multiplication": function(a,b) {
        return a*b;
    },
    "addition": function(a,b) {
        return a+b;
    },
    "subtraction": function(a,b) {
        return a-b;
    },
}


var calculator = () => {

    function allClear() {
        fOperand.innerHTML = "";
        sOperand.innerHTML = "";
        operationSign.innerHTML = "";
        result.innerHTML = "";
        detected = false;
    }

    allClearButton.addEventListener("click", function() {
        allClear();
    })


    function appendNumber() {
        nums.forEach(num => {
            num.addEventListener("click", function() {
                if (detected === false) {
                    fOperand.innerHTML += num.innerHTML;
                }
                if (detected === true){
                    sOperand.innerHTML += num.innerHTML;
                }        
            })
        })

        dot.addEventListener("click", () => {
                if (fOperand.innerHTML !== "" && !fOperand.innerHTML.includes(".")) {
                    if (detected === false) {
                        fOperand.innerHTML += dot.innerHTML;
                    }
                }
                if (sOperand.innerHTML !== "" && !sOperand.innerHTML.includes(".")) {
                    if (detected === true) {
                        sOperand.innerHTML += dot.innerHTML;
                    }
                }
        })

        operationButtons.forEach(button => {
            button.addEventListener("click", () => {
                operationType = button.dataset.operation;
                operationSign.innerHTML = button.innerHTML;
                detected = true;
            })
        })
    }
    appendNumber();

    function calc() {
        result.innerHTML = setOfOperations[operationType](Number(fOperand.innerHTML), Number(sOperand.innerHTML));
    }

    equalButton.addEventListener("click", calc)

}

calculator();