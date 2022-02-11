from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Spot

class NewHomeForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
