


const inputs = document.querySelectorAll('.input');
const error = document.getElementById('alert');

const buttons = () => {
    const loanForm = document.getElementById("loan-form");

    loanForm.addEventListener("submit", (e) => {
        e.preventDefault(); // To make sure the page doesn't reload when the submit button is pushed
        if (inputs[0].value !== "" && inputs[1].value !== "" && inputs[2].value !== "") {
            calculateResults();
        } else {
            error.style.display = 'block';
        }
    });
    
    loanForm.addEventListener("reset", resetOutputs);
}

const hideAlert = () => {
    inputs.forEach(x => {
        x.addEventListener('input', () => {
            error.style.display = 'none';
        });
    });
}

const calculateResults = () => {

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
}

const resetOutputs = () => {
    const elements = document.querySelectorAll(".title");
    elements.forEach((el) => {
        el.textContent = "";
    });
    error.style.display = 'none';
}

const app = () => {
    buttons();
    hideAlert();
    calculateResults();
    resetOutputs();
};
app();
