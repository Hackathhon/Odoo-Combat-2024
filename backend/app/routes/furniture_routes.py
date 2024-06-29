from flask import Blueprint, render_template
from ..models import FurnitureItem

furniture_bp = Blueprint('furniture', __name__)

@furniture_bp.route('/furniture')
def list_furniture():
    items = FurnitureItem.query.all()
    return render_template('furniture_list.html', items=items)
