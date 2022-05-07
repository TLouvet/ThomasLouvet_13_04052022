import "./AccountCard.scss";

/**
 * Single Account wiew in user page
 * @param {string} title - account name
 * @param {string} amount - current balance amount
 * @param {string} description - account description 
 * @returns 
 */
export const AccountCard = ({ title, amount, description }) => (
  <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">{amount}</p>
      <p className="account-amount-description">{description}</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
  </section>
)