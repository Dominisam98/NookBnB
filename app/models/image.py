from .db import db
from sqlalchemy import DateTime
import datetime

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(500), nullable=False)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    homeId = db.Column(db.Integer, db.ForeignKey('homes.id'))
    homes = db.relationship("Home", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "homeId": self.homeId,
            "url": self.url,
        }
