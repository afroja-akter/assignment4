 
 // function for increment value and decrement and confirm message 

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

    if( newCount > 0){
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("confirm-button");
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
        modal.style.display = "block";
        }
        span.onclick = function() {
        modal.style.display = "none";
        }
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
           }
        }

    }
    else{
        var modal = document.getElementById("myModalTwo");
        var btn = document.getElementById("confirm-button");
        var span = document.getElementsByClassName("close")[1];

        btn.onclick = function() {
        modal.style.display = "block";
        }
        span.onclick = function() {
        modal.style.display = "none";
        }
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
           }
        }

    }
    
    calculateTotal();
};

// function for calculate total amount

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
// function for get input value

function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
