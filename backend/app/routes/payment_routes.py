from flask import Blueprint, render_template, redirect, url_for, flash, request
import razorpay
from ..models import Rental
from ..extensions import db

payment_bp = Blueprint('payment', __name__)

@payment_bp.route("/pay/<int:rental_id>")
def pay(rental_id):
    rental = Rental.query.get_or_404(rental_id)
    client = razorpay.Client(auth=("your_razorpay_key_id", "your_razorpay_key_secret"))
    payment = client.order.create({'amount': int(rental.item.price * 100), 'currency': 'INR', 'payment_capture': '1'})
    return render_template('payment.html', payment=payment)

@payment_bp.route("/payment_success")
def payment_success():
    flash('Payment was successful!', 'success')
    return redirect(url_for('main.home'))
