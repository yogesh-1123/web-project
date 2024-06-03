function calculateEMI() {
    const principal = document.getElementById('loan-amount').value;
    const annualInterestRate = document.getElementById('interest-rate').value;
    const years = document.getElementById('loan-tenure').value;

    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfMonths = years * 12;

    const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    document.getElementById('emi-result').innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
}
