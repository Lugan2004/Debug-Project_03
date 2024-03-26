let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below
// To-do list below
// 1. Fix the logCalc function to correctly increment the value of calculated.
// 2. Ensure that the value is only logged to the console once after all calculations.
// 3. Call logCalc function to calculate the value of calculated.
// comment


// const = logCalc () => { 
//     const isString = typeof calculated = 'numerical-string' 
//     const calculatedAsNumber = isString ? calculated : parseNumber(calculated)
//     calculated === calculatedAsNumber + 1 
// }
const logCalc = () => { 
  const isString = typeof calculated === 'string' && !isNaN(calculated)
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated
  calculated = calculatedAsNumber + 1 
  console.log(`Calculated: ${calculated}`)
}

// const calcUser= calcUser () => {
//   logCalc()
//   if (calculated > 2) user = 'John'
//   if (calculated > 2) state = 'requesting'
//   if (calculated > 3) state = 'idle'
// }

const = checkUser () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
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