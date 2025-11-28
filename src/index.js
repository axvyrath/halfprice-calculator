const calculateButton = document.getElementById('calculate-btn')
const resultContainer = document.getElementById('result-container')
const userInput = document.getElementById('user-input')

const invalidInputHTML = `
    <h3>Please provide a valid input</h3>
	<p>Minimum price = 0.25 baht</p>
`

function createOutputHTML(originalPrice, helpPrice, userPrice) {
	return `
        <hr />
        <h3>Your original price ${originalPrice} baht</h3>
        <h3>has been reduced to ${userPrice} baht</h3>
        <p>Program help ${helpPrice} baht</p>
        <hr />
    `
}

function onCalculateButtonClick() {
	const price = parseFloat(userInput.value)
	if (Number.isNaN(price) || price < 0.25) {
		resultContainer.innerHTML = invalidInputHTML
		return
	}

	const halfPrice = price / 2
	const helpPrice = 0.25 * Math.floor(halfPrice / 0.25)
	const userPrice = price - helpPrice

	resultContainer.innerHTML = createOutputHTML(price, helpPrice, userPrice)
}

calculateButton.addEventListener('click', onCalculateButtonClick)
