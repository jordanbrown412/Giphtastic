HW- {Giftastic}

Description on how to use app

*This is an app that allows the user to view a set of gifs that have been call from the giphy APi by pressing on any of the buttons that are on top of the page. It also lets the user create their own button that can then be clicked to create a new group of gifs to be shown.

Requirements

* The requirements of this assignment were to use the Giphy API and make a call and "GET" data from the API to displayed on the page dynamically. We also needed to add the functionality of making the gifs able to be paused or played by clicking the image.

Technologiess Used

* Jquery for Dom Manipulation
* Bootstrap for styling 
* AJAX to make a call to the API


Code Explanation

The way  I organized my code was by setting an array of animals at the to of my JS. I  used a for loop to create buttons for each value in the array that would be appended to a div in my html. I gave each button a data attribute equal to its array value. I then made a .on("click") for each button that made a call to the API and extracted the necessary info to display GIfs as well as their ratings dynamically.

I then created another .on("click") that housed my logic for the pause/play functionality of the app.

LAstly I created another .on("click") that took the  value from an input an created a button that ould go through the same AJAX call the other buttons did.