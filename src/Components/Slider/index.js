/* eslint-disable react/no-array-index-key */
/* eslint-disable no-class-assign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Slider from 'react-slick';

class Carousel extends Component {
  render() {
    const {
      textHeader = '',
      linkLeft,
      linkRight,
      children,
      slideToshow,
      variableW,
    } = this.props;
    const settings = {
      className: 'slider variable-width',
      dots: true,
      infinite: false,
      lazyLoad: 'ondemand',
      speed: 500,
      slidesToShow: slideToshow,
      variableWidth: variableW,
      slidesToScroll: slideToshow,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            dots: false,
          },
        },
      ],
    };

    return (
      <div>
        {textHeader ? (
          <h4 className="text-center sect-header">
            {textHeader.split('\r\n').map((line, index, array) => (
              <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h4>
        ) : (
          ''
        )}
        <Slider {...settings}>{children}</Slider>
        <div className="clear" />
        <div style={{ marginTop: '15px' }} />
        <div className="gridlayout desktop-only">
          <div className="grid-6 grid-md-6 grid-xs-6">
            {linkLeft ? linkLeft : <br />}
          </div>
          <div className="grid-6 grid-md-6 grid-xs-6 text-right">
            {linkRight ? linkRight : <br />}
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}

export default Carousel;
