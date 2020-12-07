
import React from 'react';
import './style.less';

const Link = ({ label, onClick }) => {
  return (
    <a className="link-text" onClick={onClick}>
      {label}
    </a>
  );
};

export default Link;
