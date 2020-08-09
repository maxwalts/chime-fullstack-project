from sqlalchemy import Column, Integer

from .Base import db

# Example model for your data structure
class MenuItem(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    # I think I will eventually add the tag to a menuitem object so it would be searchable
    tag = db.Column(db.String(10), nullable=True)