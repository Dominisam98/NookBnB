from flask import Blueprint, request, jsonify
from app.models import Home, Image, User, Review, db
from sqlalchemy import desc, or_
import os;

home_routes = Blueprint("homes", __name__)

#Get all homes
@home_routes.route("/")
def get_homes():
    homes = (Home.query.join(User, User.id == Home.userId)
    .add_columns(User.username).order_by(desc(Home.created_at)).all()
    )
    returnList = []
    for home in homes:
        newDict = home[0].to_dict()
        newDict["User"] = home[1]
        image = Image.query.filter(Image.homeId == home[0].id).all()
        newDict["images"] = [img.to_dict() for img in image]
        review = Review.query.filter(Review.homeId == home[0].id).order_by(desc(Review.created_at)).all()
        newDict["reviews"] = [rev.to_dict() for rev in review]
        returnList.append(newDict)
    return jsonify(returnList)


#Create listing
@home_routes.route("/new/", methods=["POST"])
def new_home_post():
    new_home = Home(
        userId=request.json["userId"],
        city=request.json["city"],
        country=request.json["country"],
        name=request.json["name"],
        price=request.json["price"],
        state=request.json["state"],
        address=request.json["address"]
    )

    db.session.add(new_home)
    db.session.commit()

    new_images1 = Image(
        url=request.json["url"]["1"],
        homeId=new_home.to_dict()["id"]
    )
    new_images2 = Image(
        url=request.json["url"]["2"],
        homeId=new_home.to_dict()["id"]
    )
    new_images3 = Image(
        url=request.json["url"]["3"],
        homeId=new_home.to_dict()["id"]
    )
    db.session.add(new_images1)
    db.session.add(new_images2)
    db.session.add(new_images3)
    db.session.commit()

    return new_home.to_dict()

#Get single home
@home_routes.route("/<int:id>")
def one_home(id):
    oneHome = Home.query.get(id).to_dict()
    user = User.query.filter(User.id == oneHome["userId"])
    images = Image.query.filter(Image.homeId == id)
    review = Review.query.filter(Review.homeId == id)
    oneHome["reviews"] = [rev.to_dict() for rev in review]
    oneHome["images"] = [image.to_dict() for image in images]
    oneHome["user"] = [one.to_dict() for one in user]
    return oneHome

#Edit home
@home_routes.route("/<int:id>/edit", methods=["POST"])
def updateHome(id):
    homeToUpdate = Home.query.get(id)
    homeToUpdate.price = request.json["price"]
    homeToUpdate.name = request.json["name"]

    db.session.commit()
    updatedHome = Home.query.get(id)
    return jsonify(updatedHome.to_dict())

#Delete home
@home_routes.route("/<int:id>", methods=["GET", "DELETE"])
def deletePost(id):
    homeToDelete = Home.query.get(id)

    db.session.delete(homeToDelete)
    db.session.commit()
    return jsonify(homeToDelete.to_dict())
