let state = 'idle'
let user = null
let calculated = '1'


// Only allowed to change below
// To-do list below
// 1. Fix the logCalc function to correctly increment the value of calculated.
// 2. Ensure that the value is only logged to the console once after all calculations.
// 3. Call logCalc function to calculate the value of calculated.

let hasLoggedUser = false; // Flag to track if the message has been logged
const logCalc = () => {
  const isString = typeof calculated === 'string' && !isNaN(calculated)
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated
  calculated = calculatedAsNumber + 1
}

const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
  if (user && state === 'requesting' && calculated === 3 && !hasLoggedUser) {
    console.log(`User: ${user} (${calculated})`)
    hasLoggedUser = true; // Set the flag to true after logging the message
  }
}

// Only allowed to change code above
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()