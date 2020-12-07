/* eslint-disable prefer-template */
/* eslint-disable camelcase */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './slider-cards.less';

const org = process.env.BRAND || 'none';
export const getIcon = () => {  
  return require(`../../../assets/images/cyber-add-white.svg`);
};

const SliderCardAddAsset = ({ icon, label, onClick }) => (
  <div className="threat-box add-detail-box">
    <a href="#" onClick={onClick}>
      <div className="add-detail-icon">
        <img src={icon} alt="" />
      </div>

      <div className="add-detail-btn">
        <img src={getIcon()} alt="" />
        <p>{label}</p>
      </div>
    </a>
  </div>
);


export default SliderCardAddAsset;
