// set name
let yourName = "Jack Wright"
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

let counts = [ 0, 0, 0 ]

// setup buttons
const buttonContainers = document.querySelectorAll(".button-container")
for (let i = 0; i < buttonContainers.length; i++) 
{
	for (let j = 0; j < buttonContainers[i].children.length; j++)
	{
		let currentButton = buttonContainers[i].children[j]

		if (currentButton.textContent == "+")
		{
			currentButton.addEventListener('click', function(e)
			{
				// add
				counts[i] += 1
				updateDisplays()
			})
		}
		else
		{
			currentButton.addEventListener('click', function(e)
			{
				// subtract	
				counts[i] -= 1

				if (counts[i] <= 0)
				{
					counts[i] = 0
				}
				updateDisplays()
			})
		}
	}
}

// select count displays
const gbDisplay = document.querySelector("#qty-gb")
const ccDisplay = document.querySelector("#qty-cc")
const sugarDisplay = document.querySelector("#qty-sugar")
const totalDisplay = document.querySelector("#qty-total")

function updateDisplays()
{
	gbDisplay.textContent = counts[0]
	ccDisplay.textContent = counts[1]
	sugarDisplay.textContent = counts[2]

	totalDisplay.textContent = counts[0] + counts[1] + counts[2]
}
/*

// set cookie counts
let gbCount = 0 
let ccCount = 0 
let sugarCount = 0
let totalCount = 0

// select buttons
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinBtn = document.querySelector('#minus-sugar')

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
*/