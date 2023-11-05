        const cardholderNameInput = document.getElementById('cardholderName');
        const cardNumberInput = document.getElementById('cardNumber');
        // const expDateInput = document.getElementById('expDate');
        const expMonthInput = document.getElementById('expMonth');
        const expYearInput = document.getElementById('expYear');
        const cvvInput = document.getElementById('cvv');
        const cardName = document.querySelector('.cardName');
        const cardNumber = document.querySelector('.cardNumber');
        const exMonth = document.querySelector('.exMonth');
        const exYear = document.querySelector('.exYear');
        const cvv = document.querySelector('.cvc');

        sessionStorage.setItem('cardNumber', cardNumber);
            sessionStorage.setItem('expMonth', exMonth);
            sessionStorage.setItem('expYear', exYear);
            sessionStorage.setItem('cvv', cvv);

        const cardholderNameError = document.getElementById('cardholderNameError');
        const cardNumberError = document.getElementById('cardNumberError');
        // const expDateError = document.getElementById('expDateError');
        const expMonthError = document.getElementById('expMonthError');
        const expYearError = document.getElementById('expYearError');
        const cvvError = document.getElementById('cvvError');

        const cardholderNamePattern = /^[A-Za-z ]+$/;
        const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/; // Example pattern for a 16-digit card number
        // const expDatePattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/; // Example pattern for MM/YY
        const expMonthPattern = /^(0[1-9]|1[0-2])$/; // Example pattern for MM
        const expYearPattern = /^[0-9]{2}$/; // Example pattern for YY
        const cvvPattern = /^\d{3}$/; // Example pattern for CVV

       
       document.getElementById('paymentForm').addEventListener('submit', function (e) {

        let valid = true;

            if (!cardholderNamePattern.test(cardholderNameInput.value)) {
                valid = false;
                cardholderNameError.textContent = 'Invalid cardholder name';
            } else {
                cardholderNameError.textContent = '';
            }

            if (!cardNumberPattern.test(cardNumberInput.value)) {
                valid = false;
                cardNumberError.textContent = 'Invalid card number';
            } else {
                cardNumberError.textContent = '';
            }

            if (!expMonthPattern.test(expMonthInput.value)) {
                valid = false;
                expMonthError.textContent = 'Invalid expiration month';
            } else {
                expMonthError.textContent = '';
            }

            if (!expYearPattern.test(expYearInput.value)) {
                valid = false;
                expYearError.textContent = 'Invalid expiration year';
            } else {
                expYearError.textContent = '';
            }

            // if (cvvInput.value.length !== 3) {
            //     valid = false;
            //     cvvError.textContent = 'CVV must be 3 digits';
            // } else {
            //     cvvError.textContent = '';
            // }
            

            if (!cvvPattern.test(cvvInput.value)) {
                cvvError.textContent = 'CVC must be 3 digits with only numbers.';

            } else {
                cvvError.textContent = ''; // No error
            }

            if (valid) {
                // If the form is valid, redirect to another page
                window.location.href = 'thankYou.html'; // Replace 'success.html' with your desired page URL
                e.preventDefault();
            } else {
                e.preventDefault();
            }

        });
        
        cardNumberInput.addEventListener('input', () => {
            cardNumber.textContent = cardNumberInput.value;
        });

        cardholderNameInput.addEventListener('input', () => {
            cardName.textContent = cardholderNameInput.value;
        });


        expMonthInput.addEventListener('input', () => {
            exMonth.textContent = expMonthInput.value;
        });

        expYearInput.addEventListener('input', () => {
            exYear.textContent = expYearInput.value;
        });
        
        cvvInput.addEventListener('input', () => {
            cvv.textContent = cvvInput.value;
        });

        // cardNumberInput.addEventListener('input', () => {
        //     colorDiv.textContent = cardNumberInput.value;
        // });