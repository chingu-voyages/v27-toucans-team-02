// waits for the DOM to load

    
//    let $submitButton = document.getElementById("submit-btn")

//    $submitButton.addEventListener("click", function(e){
//     e.preventDefault()
//     let salesTax = $('#sales-tax').val()
//     let downPayment = $('#down-payment').val()    
//     let tradeIn = $('#trade-value').val()    
//     let loanTerm = $('#loan-term').val()    
//     let interestRate = $('#interest-rate').val()    

//     console.log(salesTax, downPayment, tradeIn, loanTerm, interestRate)
// })

//*Just to keep the track of the jQuery edits vs JS

document.getElementById("loan-form").addEventListener("submit", calculateResults);
document.getElementById("loan-form").addEventListener("reset", hideOutputs);
// ** First Try **
// function reset() {
//     document.querySelectorAll(".title").innerHTML = 0;
//     console.log("reset ran");
// }


// ** Second Try **
    // if (elements.display === "block") {
    //     elements.display = "none";
    // } else {
    //     elements.display = "block";
    // }
    
    // elements.forEach((el) => {
    //     if (elements.display === "block") {
    //         el.classList.add("show");
    //     } else {
    //         el.classList.add("hide");
    //     }
    //   });


// ** Third Try **

// function reset() {
//     const outputs = document.querySelectorAll(".is-1");
//     outputs.classList.add("hide");
// }

function calculateResults(e) {

    // Linking to inputs

    const carPrice = document.getElementById("car-price").value;
    const interestRate = document.getElementById("interest-rate").value;
    const loanTerm = document.getElementById("loan-term").value;

    // Calculating and using parse float to make sure a number will always be returned regarless of user input (even if they input letters)

    const principal = parseFloat(carPrice); // Converting the price variable to a floating point number 1st
    const calculateInterest = parseFloat(interestRate) / 100 / 12;
    const calculatePayments = parseFloat(loanTerm) * 12;

    // Calculating Monthly Payments

    const x = Math.pow(1 + calculateInterest, calculatePayments); // I had to Google this part, but I learned it helps to return the bast to the exponent power
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2); // Only shows 2 decimal spaces

    // Calculate Interest

    const totalInterest = (monthly * calculatePayments - principal).toFixed(2);

    // Calculate Total Payment

    const totalPayment = (monthly * calculatePayments).toFixed(2);

    //Display Results
    const formatter = new Intl.NumberFormat('us-EN');

    document.getElementById("monthlyPayment").innerHTML = "$" + formatter.format(monthlyPayment);
    document.getElementById("totalInterest").innerHTML = "$" + formatter.format(totalInterest);
    document.getElementById("totalAmount").innerHTML = "$" + formatter.format(totalPayment);

    e.preventDefault(); // To make sure the page doesn't reload when the submit button is pushed

        // Removing the hide class and showing the results

        const elements = document.querySelectorAll(".title");
        elements.forEach((el) => {
        el.classList.remove("hide");
      });
}


function hideOutputs() {
    const elements = document.querySelectorAll(".title");
    elements.forEach((el) => {
        el.classList.add("hide");
      });
}
hideOutputs();