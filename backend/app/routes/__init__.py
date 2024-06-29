from flask import Flask
from .auth_routes import auth_bp
from .furniture_routes import furniture_bp
from .booking_routes import booking_bp
from .payment_routes import payment_bp
from .profile_route import profile_bp  # Ensure correct import
from .cart_route import cart_bp  # Ensure correct import
from .main import main_bp

def create_app():
    app = Flask(__name__)

    # Register all your Blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(furniture_bp)
    app.register_blueprint(booking_bp)
    app.register_blueprint(payment_bp)
    app.register_blueprint(profile_bp)  
    app.register_blueprint(cart_bp)  
    app.register_blueprint(main_bp)

    return app
