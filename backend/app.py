import markovify
import random
from flask import Flask
import sys
import os.path

sys.path.append("/Library/Python/3.7/site-packages")

corpus = open('2chainz.txt').read()
corpus = markovify.NewlineText(corpus, state_size=5)

app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/line')
def generate_line():
    line = corpus.make_short_sentence(70, tries=300, max_overlap_ratio=40)
    return {'line': line}

@app.route('/random')
def get_real_line():
    s=open("2chainz.txt","r")
    m=s.readlines()
    l=[]
    for i in range(0,len(m)-1):
        x=m[i]
        z=len(x)
        a=x[:z-1]
        l.append(a)
    l.append(m[i+1])
    o=random.choice(l)
    return {'random': o}

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)