/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
  let currentTime = 0, waitingTime = 0;
  for(let customer of customers) {
    currentTime = (currentTime >= customer[0]) ? currentTime : customer[0];

    waitingTime += (currentTime+customer[1]  - customer[0]);

    currentTime += customer[1];
  }    

  return (waitingTime/customers.length).toFixed(5);
};