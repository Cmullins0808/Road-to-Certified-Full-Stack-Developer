let year = 2026;

function isLeapYear(year)
{
if((year % 4 === 0  && year % 100 !== 0) || (year % 400 === 0)) {
  return `${year} is a leap year.`;
} else {
   return `${year} is not a leap year.`;
   }
}
console.log(isLeapYear(year));

let result = isLeapYear(year);

console.log(result);
