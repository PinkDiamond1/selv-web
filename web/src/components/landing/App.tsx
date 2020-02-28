import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { RandomGraphicElement } from '../'
import selv from '../../assets/selv.svg' 
import app from '../../assets/landing/app.png' 
import appMobile from '../../assets/landing/app-mobile.png' 

export default ({ }) => (
    <RandomGraphicElement elements={5}>
        <div className="app-section" id="the-app">
            <h4 data-aos="fade-up">Demo</h4>
            <h2 data-aos="fade-up">The App</h2>

            <div className="content-wrapper">
                <img data-aos="fade-up" src={app} alt="App" className="desktop" />
                <img data-aos="fade-up" src={appMobile} alt="App" className="mobile" />
                <div className="content-list">
                    <div className="content-item" data-aos="fade-up">
                        <span className="content-header-wrapper">
                            <img src={selv} alt="" />
                            <h5>Self Sovereign Identity</h5>
                        </span>
                        <p>Through Self Sovereign Identity, people, organisations and things are empowered to collect and share their own verified data and digital identity.</p>
                    </div>
                    <div className="content-item" data-aos="fade-up">
                        <span className="content-header-wrapper">
                            <img src={selv} alt="" />
                            <h5>One App – One Protocol</h5>
                        </span>
                        <p>This solution provides an easy and cheap way to comply with GDPR and similar privacy laws.</p>
                    </div>
                    <div className="content-item" data-aos="fade-up">
                        <span className="content-header-wrapper">
                            <img src={selv} alt="" />
                            <h5>A Unified Identity</h5>
                        </span>
                        <p>The Unified Identity Protocol not only enables people and organisations to have the benefits of identity, but devices, opening up a whole new world of business models and use cases.</p>
                    </div>
                </div>
            </div>

            <Link to={'/progress/demo/todos'}>
                <Button className="cta" data-aos="fade-up">
                    Try the demo
                </Button> 
            </Link>
        </div>
    </RandomGraphicElement>
);