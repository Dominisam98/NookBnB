from app.models import db, Home


# Adds a demo user, you can add other users here if you want
def seed_homes():
    demoHome = Home(
        name='Beach House',
        price=100,
        address='9030 sw 20th st',
        city='Chicago',
        state='Florida',
        country='USA',
        userId=1
        )

    demoHomeTwo = Home(
        name='Farm House',
        price=150,
        address='9030 sw 20th st',
        city='Pembroke Pines',
        state='Florida',
        country='USA',
        userId=1
        )

    demoHomeThree = Home(
        name='Sweet House',
        price=150,
        address='9030 sw 20th st',
        city='Cool town',
        state='AR',
        country='USA',
        userId=1
        )

    demoHomeFour = Home(
        name='Christmas House',
        price=150,
        address='9030 sw 20th st',
        city='Cali Town',
        state='New York',
        country='USA',
        userId=2
        )

    demoHomeFive = Home(
        name='Jamaica House',
        price=150,
        address='9030 sw 20th st',
        city='Los angeles',
        state='New York',
        country='USA',
        userId=2
        )


    db.session.add(demoHome)
    db.session.add(demoHomeTwo)
    db.session.add(demoHomeThree)
    db.session.add(demoHomeFour)
    db.session.add(demoHomeFive)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_homes():
    db.session.execute('TRUNCATE HOMES RESTART IDENTITY CASCADE;')
    db.session.commit()
