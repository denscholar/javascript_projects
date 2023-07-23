// const day = "sunday";

// switch (day) {
//     case 'monday':
//         console.log('today is monday');
//         break;

//     default:
//         console.log('There is no day accounted for today');
//         break;
// }

const bankBal = 20000;

switch (bankBal) {
    case 10000:
        const interest = 0.5;
        monthlyInt = bankBal * interest
        console.log(`Your balance of ${bankBal} has yielded interest of ${monthlyInt} for the month of January`);        
        break;

    default:
        console.log('There is no interest charged for this month');
        break;
}