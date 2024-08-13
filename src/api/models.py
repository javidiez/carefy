from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), default=True)
    name = db.Column(db.String(250))
    last_name = db.Column(db.String(250)) 
    phone = db.Column(db.String(250)) 
    birthdate = db.Column(db.String(250)) 
    role = db.Column(db.String(250), nullable=False)
    
    patients = db.relationship('Patient', backref='user')
    companions = db.relationship('Companion', backref='user')

    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "is_active": self.is_active,
            "name": self.name,
            "last_name": self.last_name,
            "phone": self.phone
        }
    
class Patient(db.Model):
    __tablename__ = 'patients'
    id = db.Column(db.Integer, primary_key=True)
    name =  db.Column(db.String(250), nullable=False)
    last_name = db.Column(db.String(250), nullable=False)
    phone = db.Column(db.String(250), nullable=False)
    photo = db.Column(db.String(250), nullable=False)
    description =db.Column(db.String(250), nullable=False)
    birthdate = db.Column(db.String(250), nullable=False)
    dependency = db.Column(db.String(250), nullable=False)
    location =  db.Column(db.String(250), nullable=False)
    province = db.Column(db.String(250), nullable=False)
    availability = db.Column(db.String(250), nullable=False) 
    tags = db.Column(db.String(250), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    
    def __repr__(self):
        return f'<Patient {self.name} {self.last_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone": self.phone,
            "photo": self.photo,
            "description": self.description,
            "age": self.age,
            "dependency": self.dependency,
            "location": self.location,
            "province": self.province,
            "availability": self.availability,
            "tags": self.tags
        }
        
class Companion(db.Model):
    __tablename__ ='companions'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(250), nullable=False)
    photo = db.Column(db.String(250), nullable=False)
    location =  db.Column(db.String(250), nullable=False)
    province = db.Column(db.String(250), nullable=False)
    availability_hours = db.Column(db.Boolean, default=False)
    availability_days = db.Column(db.Boolean, default=False)
    availability_weeks = db.Column(db.Boolean, default=False)
    availability_live_in = db.Column(db.Boolean, default=False)
    experience = db.Column(db.String(250), nullable=False)
    service_cost = db.Column(db.Integer, nullable=False)
    facebook = db.Column(db.String(250))
    instagram = db.Column(db.String(250))
    twitter = db.Column(db.String(250)) 
    linkedin = db.Column(db.String(250))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))