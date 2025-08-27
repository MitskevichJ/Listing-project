import React from 'react';
import PropTypes from 'prop-types';
import './Listing.css'; 

const Listing = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        if (!item.listing_id) return null; 

        const title = item.title && item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;

        let priceFormatted;
        if (item.currency_code === 'USD') {
          priceFormatted = `$${item.price}`;
        } else if (item.currency_code === 'EUR') {
          priceFormatted = `€${item.price}`;
        } else {
          priceFormatted = `${item.price} ${item.currency_code}`;
        }

        let quantityClass = 'item-quantity';
        if (item.quantity <= 10) {
          quantityClass += ' level-low';
        } else if (item.quantity <= 20) {
          quantityClass += ' level-medium';
        } else {
          quantityClass += ' level-high';
        }

        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage?.url_570xN} alt={item.title} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{title}</p>
              <p className="item-price">{priceFormatted}</p>
              <p className={quantityClass}>{item.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Listing;