// First, tell us your name
let yourName = "Jack Wright" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gbCount = 0 // Gingerbread
let ccCount = 0 // Chocolate Chip
let sugarCount = 0 // Sugar Sprinkle
let totalCount = 0

// select credit
const credit = document.querySelector('#credit')

// select buttons
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinBtn = document.querySelector('#minus-sugar')

// select quantities
const gbDisplay = document.querySelector("#qty-gb")
const ccDisplay = document.querySelector("#qty-cc")
const sugarDisplay = document.querySelector("#qty-sugar")
const totalDisplay = document.querySelector("#qty-total")

// Code to update name display
credit.textContent = `Created by ${yourName}`

// gingerbread plus
gbPlusBtn.addEventListener('click', function() 
{
	gbCount += 1

	gbDisplay.textContent = gbCount
	updateTotal()
})

// chocolate plus
ccPlusBtn.addEventListener('click', function() 
{
	ccCount += 1

	ccDisplay.textContent = ccCount
	updateTotal()
})

// sugar plus
sugarPlusBtn.addEventListener('click', function() 
{
	sugarCount += 1

	sugarDisplay.textContent = sugarCount
	updateTotal()
})

// gingerbread minus
gbMinBtn.addEventListener('click', function() 
{
	gbCount -= 1
	if (gbCount <= 0)
	{
		gbCount = 0
	}

	gbDisplay.textContent = gbCount
	updateTotal()
})

// chocolate minus
ccMinBtn.addEventListener('click', function() 
{
	ccCount -= 1
	if (ccCount <= 0)
	{
		ccCount = 0
	}

	ccDisplay.textContent = ccCount
	updateTotal()
})

// sugar minus
sugarMinBtn.addEventListener('click', function() 
{
	sugarCount -= 1
	if (sugarCount <= 0)
	{
		sugarCount = 0
	}

	sugarDisplay.textContent = sugarCount
	updateTotal()
})

// total function
function updateTotal() 
{
	totalCount = gbCount + ccCount + sugarCount

	totalDisplay.textContent = totalCount
}