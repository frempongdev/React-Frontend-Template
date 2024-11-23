export const calculateDays = (pickupDate, dropDate) => {
    // check if dates are valid and dropped after pickup

     // Convert to just the date without the time
     const pickup = new Date(pickupDate).setHours(0, 0, 0, 0);
     const drop = new Date(dropDate).setHours(0, 0, 0, 0);
     const today = new Date().setHours(0, 0, 0, 0);
 
     // Check if the pickup date is valid (not in the past and before the drop date)
     if (pickup > drop) {
         return -1;
     } else if (pickup < today) {
         return -1;
     } else {
         const oneDay = 24 * 60 * 60 * 1000;
         const diffDays = Math.round((drop - pickup) / oneDay);
 
         // If it's the same day, charge for one day
         return diffDays === 0 ? 1 : diffDays;
     }

}

export const calculatePrice = (days, price) => {

    return days * price
}