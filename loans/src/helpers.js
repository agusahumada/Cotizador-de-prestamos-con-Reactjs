export function calculateTotal(quantity, term) {
    //Quantities
    // 0 - 1000 = 25%;
    // 1001 - 5000 = 20%;
    // 5001 - 10000 = 15%;
    // +10000 = 10%;

    let totalQuantity;
    if (quantity <= 1000) {
        totalQuantity = quantity * .25;
    }else if(quantity > 1000 && quantity  <= 5000){
        totalQuantity = quantity * .20;
    }else if(quantity > 5000 && quantity  <= 10000){
        totalQuantity = quantity * .15;
    }else{
        totalQuantity = quantity * .10;
    }
    console.log(totalQuantity);
}