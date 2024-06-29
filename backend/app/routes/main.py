from flask import Blueprint, render_template

# Create a Blueprint named 'main_bp'
main_bp = Blueprint('main', __name__)

# Define routes within the Blueprint
@main_bp.route('/')
@main_bp.route('/home')
def home():
    return render_template('index.html')
