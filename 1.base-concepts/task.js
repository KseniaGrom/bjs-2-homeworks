"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let mountPercent = percent / 100 / 12;
  let sumCredit = amount - contribution;
  let mountPay = sumCredit * (mountPercent + (mountPercent / (((1 + mountPercent) ** countMonths) - 1)));
  let totalPay = mountPay * countMonths;
  return Number(totalPay.toFixed((2)));
}