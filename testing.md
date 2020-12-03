# BrainGame! - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages](https://sabihaafroze.github.io/MP2/)

## Table of Contents

1. [**Automated Testing**](#automated-testing)
    - [**Validation services**](#validation-services)
2. [**Client Stories Testing**](#client-stories-testing)
3. [**Manual Testing**](#manual-testing)
    - [**Testing undertaken on desktop**](#testing-undertaken-on-desktop) 
    - [**Testing undertaken on tablet and phone devices**](#testing-undertaken-on-tablet-and-phone-devices)
4. [**Bugs discovered**](#bugs-discovered)
    - [**Solved bugs**](#solved-bugs)
    - [**Unsolved bugs**](#unsolved-bugs)
5. [**Further Testing**](#further-testing)

## Automated Testing

### Validation services
The following validation services were used to check the validity of the website code.
- [W3C Markup Validation]( https://validator.w3.org/) was used to validate HTML.
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.



## Client stories testing

The following section goes through each of the user stories from the UX section of [README.md](README.md)

**As a player, I want:**

1. **To find everything easily and operate smoothly.**

    - To clearly understand the age group there are two different icon for toddler and kid.
    - If they hover on it they can see the range of age and for tablet and other mobile device these hints are visible as there is no hover for them. 
    - Very clean and simple design for smooth operation.
    
2. **Large easy to click buttons and controls, so that my young fingers can use them easily on all devices.**

    - All buttons and texts are large enough for young fingers to operate and for mobile devices everything is responsive and sized carefully.
    
3. **Audio and/or visual feedback when I play the game, so that I can enjoy the game.**

    - For Numbers & maths game there are visual display for result like if the score is 0 then picture message is shown for not to give up. There is motivation for children everywhere.
    - For memory game there is audio control so that they can understand what is happening for flipping a card,matching a card or for victory etc..

4. **The ability to learn something from the game.**

    - Numbers & maths will learn the children to count.
    - Memory game will increase their brain development.

5. **A game that won't break as I use it**

    - The game will not break :
        - When selecting cards to match, no more than 2 cards can be selected at one time. 
        - The game cannot be broken by clicking cards very fast to flip more than 2 over at a time.
        - Braingame will not create weird displays if the game is reset at unexpected times. For example when an odd number of cards are flipped over.
        - The game was extensively tested by the developer’s kid and other kids as well.

**As a parent of a player, I want:**

1. **To know the game rules so that I can understand wether it is appropriate for my child or not.**
    
    - [This page](parent.html) is for the parents so that they can understand the website.

2. **A visually and operationally appealing game, so that I also have a positive experience when using it with my child.**
    
    - Much thought and time has been put into designing a clean and attractive game that brings a positive user experience to both kids and adults alike. 

6. **To know who made the game and how I can contact them.**

    - Email.js api is used to meet this purpose.Now one can easily contact us through it.

## Manual testing
Below is a detailed account of all the manual testing that has been done to confirm all areas of the site work as expected. 

### Testing undertaken on desktop

The background video starts a little bit late than other elements in every devices.

All steps on desktop were repeated in browsers: Firefox, Chrome and Internet explorer. In Firefox the memory game's cards front face are not adjusted for some reason.

Numbers & Maths game works properly in every devices.

Memory game also runs smoothly.

The game can not be loaded on inernet explorer.

### Testing undertaken on tablet and phone devices

All steps below were repeated to test mobile specific elements on the developers 1 iphone, 1 samsung phone and tablet. 

And also in the Chrome Developer Tools device simulators on all options and orientations.

The background video starts a little bit late than other elements in every devices.

Numbers & Maths game works properly in every devices.

Memory game also runs smoothly.

### Bugs discovered: 
#### Solved bugs

1. **Video background was not covered all the page in Mobile devices**

- For the css style video position absolute it was like that so after changing the property to fixed the bug was also fixed.

2. **Hint on hover on Toodler, kid & parent button**

- I have added hint on hover for toddler, kid & parent button but it was not working for mobile devices. 
Then I realized that there is no hover for tablet and mobile devices and I added media query to change the design for other devices.

3. **Blank form submission for numbers & maths game**

- I didn't find the way about avoiding blank submission for the quiz and then I come up on logical if statement and it nicely worked.

4. **Turns counter did not reset correctly if the game was reset when an odd number of cards were face-up**

- The turnsCounter relies on the flipCounter to tell it when to increase its count by 1, I had forgotten to reset the flipCounter to 0 as well on resetting the game. This caused the turns count to go up by 1 when only half a turn had been taken.
    So I reset the flipCounter to 0 as well as the turnsCounter whenever the game was reset.  

5. **On resetting the game, the new shuffled cards could be seen before cards finished flipping back over.**

- The game was programmed to animate the cards flipping back over, which takes around half a second. The newly shuffled cards could be seen as the cards flipped back over.
    To fix this I used the setTimeout function to delay displaying the cards until after the animation is complete. 

6. **Video background for home page loads a little bit late**

- I didn't understand why this is happening and what should I do.

7. **On internet explorer browser toddler.html and kid.html page do not load**

- I didn't understand what type of problem is that the two pictures of these two pages can not be seen and can't select the game so in internet explorer the game can not be run.

#### Unsolved bugs

1. **Audio bugs in Safari browser**

    - The Safari browser does not like auto playing audio files.

2. **Video background for home page loads a little bit late**

- I didn't understand why this is happening and what should I do.

3. **On internet explorer browser toddler.html and kid.html page do not load**

- I didn't understand what type of problem is that the two pictures of these two pages can not be seen and can't select the game so in internet explorer the game can not be run.


## Further testing: 

1. Asked fellow students, friends and family to look at the site on their devices and report any issues they found.
2. Braingame viewed on all devices and orientations available in Chrome DevTools.
