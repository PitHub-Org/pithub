
import React from 'react';
import {
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { formatPlanPrice } from './subscriptionPlans';
import '../../styles/Subscription.css';

const SubscriptionConfirmationPage = () => {
  const location = useLocation();
  const { plan, demo } = location.state || {};

  if (!plan) {
    return <Navigate to="/subscription" replace />;
  }

  return (
    <section className="subscription-page subscription-confirmation-page">
      <div className="subscription-confirmation-card">
        <div
          className="subscription-confirmation-icon"
          aria-hidden="true"
        >
          ✓
        </div>

        <span className="subscription-eyebrow">
          STEP 3 OF 3
        </span>

        <h1>
          {demo
            ? 'Checkout preview complete'
            : 'Subscription confirmation'}
        </h1>

        <p className="subscription-confirmation-intro">
          Your selected plan is ready to review. This is a
          demonstration only; no payment has been processed
          and no subscription has been activated.
        </p>

        <div className="subscription-confirmation-status">
          <span className="subscription-status-dot" />
          Demo confirmation · Not paid
        </div>

        <div className="subscription-confirmation-details">
          <div>
            <span>Selected plan</span>
            <strong>{plan.name}</strong>
          </div>

          <div>
            <span>Duration</span>
            <strong>{plan.months} months</strong>
          </div>

          <div>
            <span>Storage allowance</span>
            <strong>{plan.storageGb} GB</strong>
          </div>

          <div>
            <span>Displayed price</span>
            <strong>{formatPlanPrice(plan.price)}</strong>
          </div>
        </div>

        <Link
          to="/dashboard"
          className="subscription-primary-button subscription-dashboard-button"
        >
          Return to dashboard
          <span aria-hidden="true">→</span>
        </Link>

        <p className="subscription-confirmation-footnote">
          Your dashboard and existing files have not been changed.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionConfirmationPage;
