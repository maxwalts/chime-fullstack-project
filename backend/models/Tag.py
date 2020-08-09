from sqlalchemy import Column, Integer

from .Base import db

# Example model for your data structure
class Tag(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    tagname = db.Column(db.String(10), nullable=False)