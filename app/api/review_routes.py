from flask import Blueprint, request, jsonify
from app.models import Review, User, Home, db

from app.models import Review

review_routes = Blueprint("reviews", __name__)

#Create review
@review_routes.route("/new/", methods=["POST"])
def new_review():
    review = Review(
        userId = request.json["userId"],
        review = request.json["review"],
        homeId = request.json["homeId"]
    )
    db.session.add(review)
    db.session.commit()

    return jsonify(review.to_dict())

#post review
@review_routes.route("/<int:id>/edit", methods=["GET", "POST"])
def updated_review(id):
    reviewToUpdate = Review.query.get(id)
    reviewToUpdate.review = request.json["review"]

    db.session.commit()
    updated_review = Review.query.get(id)
    return jsonify(updated_review.to_dict())

#Delete review
@review_routes.route("/<int:id>", methods=['DELETE'])
def delete_review(id):
    review_to_delete = Review.query.get(id)

    db.session.delete(review_to_delete)
    db.session.commit()
    return jsonify(review_to_delete.to_dict())
