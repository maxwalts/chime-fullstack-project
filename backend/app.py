from flask import Flask, request, jsonify
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
    query = MenuItem.query.all()
    items = []

    for each in query:
        items.append({'name' : each.name, 'tag' : each.tag})

    return jsonify({'menu items' : items}), 200

@app.route("/post/menuitems", methods=["POST"])
def post_menuitems():
    request_data = request.get_json()

    name = request_data["name"]

    # I won't always be adding a tag to an item
    if 'tag' in request_data:
        tag = request_data["tag"]
        new_menuitem = MenuItem(name=name, tag=tag)
    else:
        new_menuitem = MenuItem(name=name)

    db.session.add(new_menuitem)
    db.session.commit()

    return "created", 201

with app.app_context():
	db.create_all()

if __name__ == "__main__":
    app.run()
