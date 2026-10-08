/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const discount7 = 50;
  const discount3 = 20;
  const dailyRate = 40;

  let discount = 0;
  if (numberOfDays >= 7) {
    discount = discount7;
  } else if (numberOfDays >= 3) {
    discount = discount3;
  }
  
  return numberOfDays * dailyRate - discount;
}

module.exports = calculateRentalCost;
