from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# import db & models
from models import db, MenuItem

app = Flask(__name__.split('.')[0])
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///chimetestdb.db"
db.init_app(app)

@app.route("/get/menuitems", methods=["GET"])
def get_menuitems():
    result = MenuItem.query.all()
    
    return {
        "menu items": [(dict(row.items())) for row in result]
    }, 200

@app.route("/post/menuitems", methods=["POST"])
def post_menuitems():

    return "created", 201

with app.app_context():
	db.create_all()

if __name__ == "__main__":
    app.run()
