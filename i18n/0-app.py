#!/usr/bin/env python3

"""
This is a basic Flask application that returns
"Hello world" when accessing the root URL ('/').
"""

# import flask module
from flask import Flask, render_template

# an instance of the Flask class and assign
# a variable to be the main entry point of the application
app = Flask(__name__)


# Define a route: URL path that the app responds to
@app.route('/')
def index() -> str:
    return render_template('0-index.html')


""" Run the flask app"""


if __name__ == '__main__':
    app.run(debug=True)
