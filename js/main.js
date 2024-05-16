
// Get Transaction Type:
const transferType = document.querySelector("#transact-type");
// Get Transaction Forms:
const paymentCard = document.querySelector(".payment-card");
const transferCard = document.querySelector(".transfer-card");
const depositCard = document.querySelector(".deposit-card");

transferType.addEventListener("change", function(){
    // Check for Transaction type and Display Form:
    switch(transferType.value){
        case "payment":
            paymentCard.style.display = "block";
            paymentCard.nextElementSibling.style.display = "none";
            break;
        case "transfer":
            transferCard.previousElementSibling.style.display = "none";
            transferCard.style.display = "block";
            transferCard.nextElementSibling.style.display = "none";
            break;
    }
})