let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
  case IS_PART_Time:
    empHrs = PART_TIME_HOURS;
    break;
  case IS_FULL_TIME:
    empHrs = FULL_TIME_HOURS;
    break;
  default:
    empHrs = 0;
function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_Time:
      return PART_TIME_HOURS;
      break;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
      break;
    default:
      return 0;
  }
}

empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log('Emp Wage: ' + empWage);}