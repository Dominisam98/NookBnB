from .db import db
from sqlalchemy import DateTime
import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(500), nullable=False)
    created_at = db.Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(DateTime, default=datetime.datetime.utcnow)

    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship("User", back_populates="reviews", lazy='subquery')

    homeId = db.Column(db.Integer, db.ForeignKey('homes.id'))
    homes = db.relationship("Home", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "homeId": self.homeId,
            "review": self.review,
            "userId": self.userId,
            "user": self.user.to_dict()
        }
