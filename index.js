// waits for the DOM to load

    
   let $submitButton = document.getElementById("submit-btn")

   $submitButton.addEventListener("click", function(e){
    e.preventDefault()
    let salesTax = $('#sales-tax').val()
    let downPayment = $('#down-payment').val()    
    let tradeIn = $('#trade-value').val()    
    let loanTerm = $('#loan-term').val()    
    let interestRate = $('#interest-rate').val()    

    console.log(salesTax, downPayment, tradeIn, loanTerm, interestRate)
})

