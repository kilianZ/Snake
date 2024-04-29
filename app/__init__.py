from flask import Flask

# create flask app
app = Flask(__name__)
app.secret_key = "super secret key"

from . import routes
