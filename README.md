# 2CHAINZ OR BOT
[![Build Status](https://travis-ci.com/rinaykumar/2chainz-or-bot.svg?branch=main)](https://travis-ci.com/rinaykumar/2chainz-or-bot)
![GitHub language count](https://img.shields.io/github/languages/count/rinaykumar/2chainz-or-bot)
![GitHub top language](https://img.shields.io/github/languages/top/rinaykumar/2chainz-or-bot)
![GitHub](https://img.shields.io/github/license/rinaykumar/2chainz-or-bot)

[2chainzorbot.com](https://www.2chainzorbot.com/) 

Two lyrics are real by rapper 2Chainz, one is fake from a bot in the style of 2Chainz.
<br/>
Can you identify the fake lyric?

![ui video demo](frontend/src/assets/img/ui-demo.gif)


2CHAINZ OR BOT is a fullstack web application built with Python and Flask for the backend, and with JavaScript, Node.js, React, CSS and HTML for the frontend. 
<br/>
<br/>
It's deployed on AWS Elastic Beanstalk, with a domain from AWS Route 53, and SSL certified with AWS Certificate Manager.

### Backend

A Markov chain creates a fake lyric based on a corpus of lyrics from over 300 2Chainz songs. 
The lyrics were scrapped using Python and Beautiful Soup from Genius.com with a Genius API token. 
<br/>
<br/>
The Python backend uses Markovify and the 2Chainz corpus to generate a fake lyric, which is then sent alongside two real 2Chainz lyrics to the frontend.

### Local Install
```bash
# after cloning repo, cd into frontend folder

# install node modules
npm i

# create build
npm run build

# cd into backend folder, install python requirements
python3 -m pip install -r requirements.txt

# set flask export
export FLASK_APP=app

# run local server
flask run
```

### Run lyrics scraper locally
```bash
# cd into backend/scrape_lyrics folder

# open scrape.py and replace the Genius API token with your own from Genius.com
GENIUS_API_TOKEN='XXXXXXXX.....'

# replace the write_lyrics_to_file in line 68 with any artist name and number of songs
write_lyrics_to_file('artist name', number)

# replace the text file in the lyrics folder with an empty file named 'artistname'.txt

# run the script
python3 scrape.py
```
