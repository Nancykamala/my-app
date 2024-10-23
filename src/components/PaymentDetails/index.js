function PaymentDetails() {
  return (
    <div>
      <h1>Payment Details</h1>
      <form>
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Cardholder Name" required />
        <input type="month" placeholder="Expiry Date" required />
        <input type="text" placeholder="CVV" required />
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentDetails;
