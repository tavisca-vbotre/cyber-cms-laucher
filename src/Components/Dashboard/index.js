import React, { useEffect, useState } from 'react';
import {DashboardContainerStyled, BannerContainerStyled, BannerStyled, StyledHeaderTitleBg, HeaderTitleUserName, BoldPara} from './dashboard.styled';
import { Stack, dashboardConfig} from '../../config/contentstack.config';
import Header from '../../Components/Header';
import Slider from '../../Components/Slider';
import SliderCardAddAsset from '../../Components/Slider/SliderCards';
import Link from '../Link'
import { useHistory } from 'react-router-dom';

const Dashboard = () => 
{
    const history = useHistory();
    const [isLoading, setLoadingState] = useState(true);
    const [dashboardObj, setHomePageDetails] = useState(null);
    useEffect(getPageObject, []);

    function getPageObject(){
        var Query = Stack.ContentType(dashboardConfig.pageData).Query()
        .language(dashboardConfig.locale)
        .toJSON()
        .find()
        .then((result) => {
            setHomePageDetails(result[0][0]);
            setLoadingState(!isLoading);
            document.title = result[0][0].title
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="wrapper">
        {
            !isLoading ? (
                <DashboardContainerStyled>
                    <Header logoUrl={dashboardObj.logo.url} showBanner={dashboardObj.banner.show_banner_image}></Header>
                    <BannerContainerStyled>
                        <BannerStyled withBackground={dashboardObj.banner.show_banner_image} bannerImgUrl={dashboardObj.banner.banner_images[0].url}>
                        <StyledHeaderTitleBg 
                            withBackground={dashboardObj.banner.show_banner_image}
                            attachToBottom= {false}>
                            <HeaderTitleUserName>{dashboardObj.pagetitle}</HeaderTitleUserName>
                            <BoldPara>{dashboardObj.page_subtitle}</BoldPara>
                        </StyledHeaderTitleBg>
                        </BannerStyled>

                    </BannerContainerStyled>
                    <div className="content-area">
                        <div className="container">
                        <div className="body-content">
                    {
                        dashboardObj.dashboard_silder.length && (
                        <div className="dashboard-slider mob-margin">
                        <Slider
                            slideToshow={3}
                            variableW={false}
                            textHeader={dashboardObj.dashboard_slider_heading}
                            linkLeft={
                                <Link
                                label="DINE OPPLYSNINGER"
                                onClick={() =>
                                    history.push('/manage-your-data')
                                }
                                />
                            }
                            linkRight={
                                <Link
                                label="Kundeservice"
                                onClick={() => history.push('/manage-your-data')}
                                />
                            }
                            >
                            
                           {
                                dashboardObj.dashboard_silder[0].items.map((item, idx) => {
                                    return (
                                        <SliderCardAddAsset
                                                icon={item.image.url}
                                                label={item.title}
                                                onClick={() =>
                                                history.push({
                                                    pathname: '/manage-your-data',
                                                    state: {
                                                    id: idx
                                                    },
                                                })
                                                }
                                            />
                                    )
                                })
                           }
                            
                        </Slider>
                  </div>
                  )} 
                  </div></div></div>
              
                </DashboardContainerStyled>
            ) : (
                <div> Loading ... </div>
            )
        }


        </div>
        
    )
};

export default Dashboard