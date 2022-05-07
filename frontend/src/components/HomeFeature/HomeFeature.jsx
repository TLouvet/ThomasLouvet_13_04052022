import './HomeFeature.scss';

/**
 * Home Feature with circled icon and sub text describing one of the bank features
 * @param {string} title  
 * @param {string} description
 * @param {string} alt
 * @param {string} image - static path to image
 * @returns 
 */
export const HomeFeature = ({ title, description, alt, image }) => (
  <div className="feature-item">
    <img src={image} alt={alt} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{description}</p>
  </div>
)