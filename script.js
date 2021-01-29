 
function howManyTickets(ticket, isIncrease){
    const incrementValue = document.getElementById(ticket +'-count');
    const count = parseInt(incrementValue.value);
    let newCount = count;
    if(isIncrease == true){
        newCount = count + 1;
    }
    if(isIncrease == false && count > 0){
        newCount = count - 1;
    }

    incrementValue.value = newCount;
    calculateTotal();
};

function calculateTotal(){
    const firstClassTicketCount = getInputValue('firstClass');
    const economyTicketCount =  getInputValue('economy');
    const subTotal = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subTotal').innerText = '$' + subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    const totalAmount = subTotal + tax;
    document.getElementById('total-amount').innerText = '$' + totalAmount;

}

function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}