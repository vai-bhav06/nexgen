import React from 'react';


const pricingPlans = [
  {
    title: 'Starter',
    subtitle: '$99/mo',
    features: ['Basic bookkeeping', 'Quarterly tax filing', '1 consultation'],
  },
  {
    title: 'Growth',
    subtitle: '$199/mo',
    features: ['Everything in Starter + monthly reporting', 'Payroll management'],
  },
  {
    title: 'Scale',
    subtitle: 'Custom Quote',
    features: ['Full accounting suite', 'Dedicated advisor', 'Financial strategy'],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Pricing</h2>
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.title}</h3>
            <p className="subtitle">{plan.subtitle}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button className="pricing-btn">Sign up</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
