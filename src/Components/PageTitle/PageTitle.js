import React from 'react';
import { PageTitleStyled, PageTitleContainer } from './PageTitle.styled';

/**
 * @param {string} title - i18n key
 * @param {string} subtitle - i18n key
 * @param {string} color - Must be in theme config
 *  @param {string} fontSize - Must be in theme config
 */
const PageTitle = ({ title, subtitle, color, fontSize }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled color={color} fontSize={fontSize}>
        {title}
      </PageTitleStyled>
      <PageTitleStyled color={color} fontSize={fontSize} bold={600}>
        {subtitle}
      </PageTitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
