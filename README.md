# 2CHAINZ OR BOT
[![Build Status](https://travis-ci.com/rinaykumar/2chainz-or-bot.svg?branch=main)](https://travis-ci.com/rinaykumar/2chainz-or-bot)
![GitHub language count](https://img.shields.io/github/languages/count/rinaykumar/2chainz-or-bot)
![GitHub top language](https://img.shields.io/github/languages/top/rinaykumar/2chainz-or-bot)
![GitHub](https://img.shields.io/github/license/rinaykumar/2chainz-or-bot)

[2chainzorbot.com](https://www.2chainzorbot.com/) 

Two lyrics are real by rapper 2Chainz, one is fake from a bot in the style of 2Chainz.
<br/>
Can you identifiy the fake lyric?

![ui video demo](frontend/src/assets/img/ui-demo.gif)


2CHAINZ OR BOT is a fullstak web application built with Python3 and Flask for the backend, and with Node.js and React.js for the frontend. 
<br/>
<br/>
It's deployed on AWS Elastic Beanstalk, with a domain from AWS Route 53, and SSL certified with AWS Certificate Manager.

### Backend

A Markov chain creates a fake lyric based on a corpus of lyrics from over 300 2Chainz songs. 
The lyrics were scrapped using Python and Beautiful Soup from Genius.com with a Genius API token. 
<br/>
<br/>
The Python backend uses Markovify to create a Markov chain from the 2Chainz corpus and generates a fake lyric, which is then sent alongside two real 2Chainz lyrics to the frontend.
