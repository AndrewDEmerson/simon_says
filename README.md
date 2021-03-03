# Pre-work - *Simon Says*

**Simon Says** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Andrew Emerson**

Time spent: **5** hours spent in total

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Plays a song when you Win or Lose
- [X] Buttons flash at begining of game, and when a mistake is made.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://andrewdemerson.github.io/assets/SimonSaysWin.gif' title='Video Walkthrough Winning' width='' alt='Video Walkthrough Winning' />
<img src='https://andrewdemerson.github.io/assets/SimonSaysLose.gif' title='Video Walkthrough Winning' width='' alt='Video Walkthrough Winning' />

GIF created with [ScreenToGif](https://www.screentogif.com/).

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
   * MTU.edu: "Physics of Music - Notes; Chords - Frequency Ratios"
   * Wikipedia: "Piano Key Frequencies"
   * W3school.com
   * StackOverflow.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)  
  
  One challenge I faced was when I tried to add an image texture to the buttons. I wanted to use the same grayscale image for each of the buttons; with a color overlay applied via scripting. This would prevent me from having to make 2 sets of color images for each button: 12 in total for my game. Not knowing where to start, I looked on the internet to see what others had done to solve the problem. I found a variety of potential solution; recommending using images with on click attributes instead of buttons; and a several different solutions to apply a transparent gradient over an image. I experiment with these examples; modifying them to my needs, to see what worked best. Several options worked, but some were determined as to much for what I needed; I just wanted a plain color; and the common solution of applying a gradient of RGBA values was too much for this project. In the end, I found a rather simple solution; In the CSS sheet I set the buttons background to a URL pointing to the image, with a color below it. The image I created is black, with drawings on the alpha channel to give the buttons texture. This allows me to use the same image for every single button and state and modify the RGB value of the base color in order to convey the buttons meaning.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  
  
  After working on this project, I have questions about how to implement time-based systems and synchronous/asynchronous methods. In this project, I used to setTimout() method to schedule methods at certain times. I did run into issues where I want a function to happen after a event scheduled in the future has ran. I managed to implement the functionality by passing functions as a parameter to be scheduled after everything else in the function has run. I would like to learn other ways to preform event scheduling. I would also like to know more about the DOM tree and how it can be altered with JavaScript. I want to know what else can be modified with JavaScript and how to create dynamic websites. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)  
  
  If I had more time to work on this project, I would want to add some more features. I would a feature where the buttons swap places between each round of the game. I would also like to research more into the audio library I used and redesign how I generated chords. I would also like to look at adding background music that plays while playing the game. I would like to refactor the code I wrote, making it cleaner. I would make the code more modular, so I could add new features more easily and have an options box for the game that would allow the user to chose how they wanted to play the game.



## License

    Copyright [2021] [Andrew Emerson]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.