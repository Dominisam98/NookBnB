from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_images():
    demoImage = Image(
        url="https://i.ibb.co/KVbtTpv/download-6.jpg",
        homeId=1
        )
    demoImageTwo = Image(
        url="https://i.ibb.co/cc9sVc6/download-1.jpg",
        homeId=1
        )
    demoImageThree = Image(
        url="https://i.ibb.co/mhdbwBm/Poppy-s-place-Had-so-much-fun-decorating-my-favorite-lil-squirrel-s-yard.jpg",
        homeId=1
        )
    demoImageFour = Image(
        url="https://i.ibb.co/zfG5QNd/download-3.jpg",
        homeId=2
        )
    demoImageFive = Image(
        url="https://i.ibb.co/m9ZBFwN/download-2.jpg",
        homeId=2
        )
    demoImageSix = Image(
        url="https://i.ibb.co/FVZdGBW/Lynn.jpg",
        homeId=2
        )
    demoImageSeven = Image(
        url="https://i.ibb.co/b1GCJRH/image.jpg",
        homeId=3
        )
    demoImageEight = Image(
        url="https://i.ibb.co/0mKp5dG/download-5.jpg",
        homeId=3
        )
    demoImageNine = Image(
        url="https://i.ibb.co/cc9sVc6/download-1.jpg",
        homeId=3
        )
    demoImageTen = Image(
        url="https://i.ibb.co/b1GCJRH/image.jpg",
        homeId=4
        )
    demoImageEleven = Image(
        url="https://i.ibb.co/KVbtTpv/download-6.jpg",
        homeId=4
        )
    demoImageTwelve = Image(
        url="https://i.ibb.co/KVbtTpv/download-6.jpg",
        homeId=4
        )
    demoImageThirteen = Image(
        url="https://i.ibb.co/7459Y48/download-4.jpg",
        homeId=5
        )
    demoImageFourteen = Image(
        url="https://i.ibb.co/cc9sVc6/download-1.jpg",
        homeId=5
        )
    demoImageFifteen = Image(
        url="https://i.ibb.co/0mKp5dG/download-5.jpg",
        homeId=5
        )


    db.session.add(demoImage)
    db.session.add(demoImageTwo)
    db.session.add(demoImageThree)
    db.session.add(demoImageFour)
    db.session.add(demoImageFive)
    db.session.add(demoImageSix)
    db.session.add(demoImageSeven)
    db.session.add(demoImageEight)
    db.session.add(demoImageNine)
    db.session.add(demoImageTen)
    db.session.add(demoImageEleven)
    db.session.add(demoImageTwelve)
    db.session.add(demoImageThirteen)
    db.session.add(demoImageFourteen)
    db.session.add(demoImageFifteen)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
