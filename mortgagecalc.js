function formatCurrency(amount) {
    return '£' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest-rate').value);
    const loanTermYears = parseFloat(document.getElementById('loan-term').value);
    const monthlyIncome = parseFloat(document.getElementById('monthly-income').value);

    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = loanTermYears * 12;

    const monthlyPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterest = totalPaid - loanAmount;

    const incomeThreshold = monthlyIncome * 0.3;
    const remainingIncome = monthlyIncome - monthlyPayment;

    const isEligible = monthlyPayment <= incomeThreshold;

    const eligibilityMessage = document.getElementById('eligibility-message');
    eligibilityMessage.textContent = isEligible 
        ? "Loan approved: Monthly payment is within acceptable range."
        : "Loan denied: Monthly payment exceeds 30% of your income.";
    eligibilityMessage.className = 'eligibility-message ' + (isEligible ? 'eligible' : 'ineligible');

    document.getElementById('monthly-payment').textContent = formatCurrency(monthlyPayment);
    document.getElementById('income-threshold').textContent = formatCurrency(incomeThreshold);
    document.getElementById('remaining-income').textContent = formatCurrency(remainingIncome);
    document.getElementById('total-loan').textContent = formatCurrency(loanAmount);
    document.getElementById('total-interest').textContent = formatCurrency(totalInterest);
    document.getElementById('total-paid').textContent = formatCurrency(totalPaid);
}

calculateMortgage();