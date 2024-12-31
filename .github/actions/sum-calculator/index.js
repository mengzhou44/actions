const core = require('@actions/core')

try {
  // Get inputs
  const num1 = parseFloat(core.getInput('num1'))
  const num2 = parseFloat(core.getInput('num2'))

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Both inputs must be valid numbers')
  }

  // Calculate the sum
  const sum = num1 + num2

  // Set the output
  core.setOutput('sum', sum)

  console.log(`The sum of ${num1} and ${num2} is ${sum}`)
} catch (error) {
  core.setFailed(error.message)
}
