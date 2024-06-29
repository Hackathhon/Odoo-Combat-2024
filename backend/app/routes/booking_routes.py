from flask import Blueprint, render_template, redirect, url_for, flash
from ..extensions import db
from ..models import Item, Rental
from flask_login import current_user, login_required

booking_bp = Blueprint('booking', __name__)

@booking_bp.route("/book/<int:item_id>")
@login_required
def book_item(item_id):
    item = Item.query.get_or_404(item_id)
    if not item.available:
        flash('Item is not available', 'danger')
        return redirect(url_for('furniture.furniture_item', item_id=item_id))
    rental = Rental(user_id=current_user.id, item_id=item.id)
    db.session.add(rental)
    db.session.commit()
    flash('Item has been added to your cart', 'success')
    return redirect(url_for('furniture.furniture'))
