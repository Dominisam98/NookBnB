from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    demoReview1 = Review(
        review='This home was nice!',
        userId=1,
        homeId=1
    )
    demoReview2 = Review(
        review='This home was nice!',
        userId=1,
        homeId=2
    )
    demoReview3 = Review(
        review='This home was nice!',
        userId=1,
        homeId=1
    )
    demoReview4 = Review(
        review='This home was nice!',
        userId=1,
        homeId=1
    )
    demoReview5 = Review(
        review='This home was nice!',
        userId=1,
        homeId=1
    )


    db.session.add(demoReview1)
    db.session.add(demoReview2)
    db.session.add(demoReview3)
    db.session.add(demoReview4)
    db.session.add(demoReview5)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
