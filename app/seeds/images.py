from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_images():
    demoImage = Image(
        url="https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF1bnRlZCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=1
        )
    demoImageTwo = Image(
        url="https://images.unsplash.com/photo-1617228133035-2347f159e755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=1
        )
    demoImageThree = Image(
        url="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=1
        )
    demoImageFour = Image(
        url="https://images.unsplash.com/photo-1602769921397-e870d926e1e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF1bnRlZCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=2
        )
    demoImageFive = Image(
        url="https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=2
        )
    demoImageSix = Image(
        url="https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3IlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=2
        )
    demoImageSeven = Image(
        url="https://images.unsplash.com/photo-1621620844577-e43740553901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGF1bnRlZCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=3
        )
    demoImageEight = Image(
        url="https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=3
        )
    demoImageNine = Image(
        url="https://images.unsplash.com/photo-1617978241112-898785df45b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=3
        )
    demoImageTen = Image(
        url="https://images.unsplash.com/photo-1542071519-65d063713e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhdW50ZWQlMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        homeId=4
        )
    demoImageEleven = Image(
        url="https://images.unsplash.com/photo-1615471618985-97108e2ba478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        homeId=4
        )
    demoImageTwelve = Image(
        url="https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        homeId=4
        )
    demoImageThirteen = Image(
        url="https://images.unsplash.com/photo-1564231959024-540bbf694d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGF1bnRlZCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        homeId=5
        )
    demoImageFourteen = Image(
        url="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        homeId=5
        )
    demoImageFifteen = Image(
        url="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
