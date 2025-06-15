# etch-a-sketch

16x16 grid of square divs - done with two for loops, one loop creates 16 rows, and the second loop which is inside the first creates 16 more columns per row
create them using JS, not copy pasting in HTML - done
Put all the square divs inside of a container div (this will be in the HTML) - done
Use CSS flexbox to align the squares into a grid, but don't use CSS grid - done, set container dimensions to 600x600 and using flex shrink and grow on the row-item and col-item at 1 to make every box evenly spaced
Be careful with borders and margins - done, adjusted margins and borders to be 0px unless specified so there's no doubling of borders
Hover event listeners that change the color of the square divs leaving a pixelated trail behind - used document.querySelectorAll to put all col-item divs into a node list, then used a for loop to assign an event listener for each square div with a mouseover event that re-classifies the item as col-list-fill, uses CSS styling to fill in the box black
Once that's working add button on top of screen that sends user a popup asking for number of square per side for new grid - working on from here down next time
This removes the old grid and generates a new on within the same total space as before
Upper limit for user input is 100
Minimum should be 1