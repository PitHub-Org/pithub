
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SUBSCRIPTION_PLANS,
  formatPlanPrice,
} from './subscriptionPlans';
import '../../styles/Subscription.css';

const SubscriptionPage = () => {
  const [selectedPlanId, setSelectedPlanId] = useState(
    'twelve-month'
  );

  const navigate = useNavigate();

  const selectedPlan = SUBSCRIPTION_PLANS.find(
    (plan) => plan.id === selectedPlanId
  );

  const continueToPayment = () => {
    if (!selectedPlan) return;

    navigate('/subscription/payment', {
      state: { plan: selectedPlan },
    });
  };

  return (
    <section className="subscription-page">
      <div className="subscription-heading">
        <span className="subscription-eyebrow">
          PITHUB STORAGE
        </span>

        <h1>Choose your subscription</h1>

        <p>
          Choose the plan that works for you. You can review
          your selection before continuing.
        </p>
      </div>

      <div
        className="subscription-plan-grid"
        role="radiogroup"
        aria-label="Subscription duration"
      >
        {SUBSCRIPTION_PLANS.map((plan) => {
          const isSelected = selectedPlanId === plan.id;

          return (
            <button
              type="button"
              key={plan.id}
              className={`subscription-plan-card${
                isSelected ? ' is-selected' : ''
              }${plan.featured ? ' is-featured' : ''}`}
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelectedPlanId(plan.id)}
            >
              <span className="subscription-plan-topline">
                <span
                  className="subscription-radio"
                  aria-hidden="true"
                >
                  {isSelected ? '✓' : ''}
                </span>

                {plan.featured && (
                  <span className="subscription-plan-badge">
                    YEARLY PLAN
                  </span>
                )}
              </span>

              <span className="subscription-plan-name">
                {plan.name}
              </span>

              <span className="subscription-plan-duration">
                {plan.months} months
              </span>

              <span className="subscription-plan-price">
                {formatPlanPrice(plan.price)}
              </span>

              <span className="subscription-plan-description">
                {plan.description}
              </span>

              <span className="subscription-plan-detail">
                <strong>{plan.storageGb} GB</strong>
                {' '}storage allowance
              </span>
            </button>
          );
        })}
      </div>

      <div className="subscription-selection-summary">
        <div>
          <span className="subscription-muted-label">
            YOUR SELECTION
          </span>

          <h2>{selectedPlan?.name}</h2>

          <p>
            {selectedPlan?.storageGb} GB storage allowance
            {' · '}
            {selectedPlan?.months} months
          </p>
        </div>

        <div className="subscription-summary-price">
          {formatPlanPrice(selectedPlan?.price)}
        </div>
      </div>

      <div className="subscription-notice" role="note">
        <span
          className="subscription-notice-icon"
          aria-hidden="true"
        >
          i
        </span>

        <p>
          Subscription pricing has not been finalized.
          This is a frontend preview; no subscription or
          payment will be created.
        </p>
      </div>

      <div className="subscription-actions">
        <button
          type="button"
          className="subscription-primary-button"
          onClick={continueToPayment}
        >
          Continue to payment
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
};

export default SubscriptionPage;
