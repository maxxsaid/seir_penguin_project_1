# Project 1 Documentation

## by Max Said

## Introduction

A very simple website to test the player's knowledge of New York City. Welcome to New York City Trivia. Made for 2 players. Each player takes a turn answering a question about NYC, by picking out of 4 options provided.

## Technologies Used

-HTML
-CSS
-JS
-jQuery

## HTML

Made 4 different LI's for 4 different choices (a,b,c,d) and 2 IDs of players to keep track of scores.

## CSS

Added a backgroung image of NYC, and matched the color and font to fit the aesthetic I was going for.

Added a hover on LI's, so whenever a user hovers over the options, they get slightly bigger.

Added the transparency on DIVs, so the user could see the background but also not get distracted by it too much.

Added a pointer when the user hovers over the choices.

## JS & jQuery

Used ajax to pull API from Contentful.
Randomized every question.
Added an alert when the user clicks an option to give feedback.
Added a win scenario, where the first player to score 10 points wins the game. (an alert pops up)

## Challenges

#### I had trouble with

One of the problems I had was making it mobile friendly. Divs weren't aligning how I wanted them to, but I ended up fixing it by trying different methods. (flexbox/float/padding)

Another probelm I had was adding a pop up box instead of using "alert", but i couldn't figure it out.
