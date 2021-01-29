 
//  document.getElementById('increment').addEventListener('click', function(){
//     howManyTickets(true);
// });
// document.getElementById('decrement').addEventListener('click', function(){
//     howManyTickets(false);
// });
 
 
//  function howManyTickets(isIncrease){
//         const incrementValue = document.getElementById('count-number');
//         const count = parseInt(incrementValue.value);
//         let newCount = count;
//         if(isIncrease == true){
//             newCount = count + 1;
//         }
//         if(isIncrease == false && count > 0){
//             newCount = count - 1;
//         }

//         incrementValue.value = newCount;
//  };


//  function howManyTickets(tickets, isIncrease){
//         const ticketCount = getInputValue(ticket);
//         let newCount = ticketCount;
//         if(isIncrease == true){
//             newCount = count + 1;
//         }
//         if(isIncrease == false && count > 0){
//             newCount = count - 1;
//         }

//         incrementValue.value = newCount;
//  };




// function getInputValue(ticket){
//     console.log(ticket);  
//     const ticketInput = document.getElementById(ticket + '-count');
//     const ticketCount = parseInt(ticketInput.value);
//     return ticketCount;
// } 


 
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
};