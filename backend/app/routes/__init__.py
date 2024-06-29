from flask import Blueprint

# Import your route modules
from .auth_routes import auth_bp
from .furniture_routes import furniture_bp
from .booking_routes import booking_bp
from .payment_routes import payment_bp
from .main import main_bp

# Create a function to register Blueprints
def register_routes(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(furniture_bp)
    app.register_blueprint(booking_bp)
    app.register_blueprint(payment_bp)
    app.register_blueprint(main_bp)

# Optionally, you can define a list of blueprints to export
__all__ = ['register_routes']
