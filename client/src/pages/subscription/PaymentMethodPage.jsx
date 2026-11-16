
import React, { useState } from 'react';
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { formatPlanPrice } from './subscriptionPlans';
import '../../styles/Subscription.css';

const PaymentMethodPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States',
    cardholder: '',
    cardNumber: '',
    expiry: '',
    securityCode: '',
  });

  if (!plan) {
    return <Navigate to="/subscription" replace />;
  }

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo only. Do not send, log, or persist form values.
    // Real card processing must use a secure payment provider.
    navigate('/subscription/confirmation', {
      state: {
        plan,
        demo: true,
      },
    });
  };

  return (
    <section className="subscription-page subscription-payment-page">
      <div className="subscription-heading">
        <span className="subscription-eyebrow">
          STEP 2 OF 3
        </span>

        <h1>Payment method</h1>

        <p>
          Review your plan and complete this sample form
          to preview the checkout flow.
        </p>
      </div>

      <div className="subscription-checkout-layout">
        <form
          className="subscription-form-card"
          onSubmit={handleSubmit}
        >
          <div
            className="subscription-demo-warning"
            role="alert"
          >
            <strong>
              Demo form — do not enter real payment information.
            </strong>

            <span>
              This page does not process payments. Form entries
              are used only in this page and are not sent or saved.
            </span>
          </div>

          <fieldset className="subscription-fieldset">
            <legend>
              <span>1</span> Billing information
            </legend>

            <div className="subscription-form-grid">
              <label className="subscription-field subscription-field-wide">
                Full name
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  placeholder="Alex Example"
                />
              </label>

              <label className="subscription-field subscription-field-wide">
                Email address
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  placeholder="alex@example.com"
                />
              </label>

              <label className="subscription-field subscription-field-wide">
                Billing address
                <input
                  name="address"
                  value={form.address}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  placeholder="123 Example Street"
                />
              </label>

              <label className="subscription-field">
                City
                <input
                  name="city"
                  value={form.city}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  placeholder="City"
                />
              </label>

              <label className="subscription-field">
                ZIP / postal code
                <input
                  name="postalCode"
                  value={form.postalCode}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  placeholder="12345"
                />
              </label>

              <label className="subscription-field subscription-field-wide">
                Country
                <select
                  name="country"
                  value={form.country}
                  onChange={updateField}
                >
                  <option>United States</option>
                  <option>Philippines</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="subscription-fieldset">
            <legend>
              <span>2</span> Payment details (sample only)
            </legend>

            <div className="subscription-form-grid">
              <label className="subscription-field subscription-field-wide">
                Name on card
                <input
                  name="cardholder"
                  value={form.cardholder}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  placeholder="Sample Cardholder"
                />
              </label>

              <label className="subscription-field subscription-field-wide">
                Card number (use sample digits only)
                <input
                  name="cardNumber"
                  inputMode="numeric"
                  value={form.cardNumber}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  minLength={12}
                  maxLength={19}
                  pattern="[0-9 ]{12,19}"
                  placeholder="0000 0000 0000 0000"
                />
              </label>

              <label className="subscription-field">
                Expiration (MM/YY)
                <input
                  name="expiry"
                  value={form.expiry}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                  placeholder="MM/YY"
                />
              </label>

              <label className="subscription-field">
                Security code (sample only)
                <input
                  name="securityCode"
                  inputMode="numeric"
                  value={form.securityCode}
                  onChange={updateField}
                  autoComplete="off"
                  required
                  minLength={3}
                  maxLength={4}
                  pattern="[0-9]{3,4}"
                  placeholder="123"
                />
              </label>
            </div>
          </fieldset>

          <div className="subscription-form-actions">
            <Link
              className="subscription-secondary-button"
              to="/subscription"
            >
              Back to plans
            </Link>

            <button
              className="subscription-primary-button"
              type="submit"
            >
              Review confirmation
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>

        <aside className="subscription-order-card">
          <span className="subscription-muted-label">
            ORDER SUMMARY
          </span>

          <h2>{plan.name}</h2>

          <div className="subscription-order-line">
            <span>Duration</span>
            <strong>{plan.months} months</strong>
          </div>

          <div className="subscription-order-line">
            <span>Storage allowance</span>
            <strong>{plan.storageGb} GB</strong>
          </div>

          <div className="subscription-order-total">
            <span>Total</span>
            <strong>{formatPlanPrice(plan.price)}</strong>
          </div>

          <p className="subscription-order-footnote">
            Final pricing and payment processing will be
            configured in a future update.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default PaymentMethodPage;
