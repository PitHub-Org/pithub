
/**
 * Subscription plan configuration.
 * Update pricing here once the prices are finalized.
 * A null price means that pricing has not been configured.
 */
export const SUBSCRIPTION_PLANS = [
  {
    id: 'six-month',
    name: '6-Month Plan',
    months: 6,
    storageGb: 5,
    price: null,
    description: 'A flexible option for the next six months.',
  },
  {
    id: 'twelve-month',
    name: '12-Month Plan',
    months: 12,
    storageGb: 5,
    price: null,
    description: 'Plan ahead with a full year of storage.',
    featured: true,
  },
];

export const formatPlanPrice = (price) =>
  typeof price === 'number'
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)
    : 'Price TBD';
