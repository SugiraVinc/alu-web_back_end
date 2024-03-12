#!/usr/bin/env python3

"""
Module that instantiate the Babel object
in the app. store it on module-level"""

# Import the Babel module from flask_babel
from flask import Flask, render_template
from flask_babel import Babel

# an instance of the Babel class and assign
app = Flask(__name__)

# Store babel object in a variable named babel.
babel = Babel(app)


class Config:
    """
    A class Config  that has language attributes
    equal to en or fr"""
    # Define the languages needed
    LANGUAGES = ['en', 'fr']
    # Set default locale and timezones
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)

@app.route('/')
def index() -> str:
    """The home/index page
    """

    return render_template('1-index.html')

""" Run the flask app"""


if __name__ == '__main__':
    app.run(debug=True)
