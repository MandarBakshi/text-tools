from flask import Flask
from flask_cors import CORS

def createFlaskApp():
    flaskapp = Flask(__name__)

    from .routes.Views import views
    from .routes.Downloads import downloads
    flaskapp.register_blueprint(views)
    flaskapp.register_blueprint(downloads)

    CORS(flaskapp)

    return flaskapp