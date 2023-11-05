const button = document.querySelector(".back-button");

button.addEventListener("click" ,function goback(){
    window.history.back();
});
    //    document.getElementById('paymentForm').addEventListener('submit', function (e) {
    //     document.getElementById('cardNumber').textContent = sessionStorage.getItem('cardNumber');
    //     document.getElementById('expDate').textContent = sessionStorage.getItem('expDate');
    //     document.getElementById('cvv').textContent = sessionStorage.getItem('cvv');
    //    })

