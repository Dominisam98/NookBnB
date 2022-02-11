from app.models import db, Booking

def seed_bookings():
    demoBooking = Booking(
        startDate="02/03/2022",
        endDate="02/07/2022",
        userId=1,
        homeId=1
        )


    db.session.add(demoBooking)
    db.session.commit()

def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
    db.session.commit()
