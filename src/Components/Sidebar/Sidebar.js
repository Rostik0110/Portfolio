import React from 'react';
import './Sidebar.css';
import Navigation from './Navigation.js'
import { ContactUs } from './ContactUs';

const Sidebar = () => {
    return (
        <div>
            <Navigation />
            <div className="sidebar-section">

                <img className="avatar" src="/img1.jpg" alt="me photo" />
                <div className="signature">
                    Shafar Rostislav Leonidovich
                </div>


                <div className="contact-section">
                    <h3 className="sidebar-title">Contacts</h3>
                    <div>
                        <span className="contacts-section-type">C:</span>
                        <a className="contacts-section-link" href="tel:+380965499335">+38 096 549 9335</a>
                    </div>
                    <div>
                        <span className="contacts-section-type">E:</span>
                        <a className="contacts-section-link" href="mailto:rostikshafar@gmail.com">rostikshafar@gmail.com</a>
                    </div>
                    <div>
                    <span className="contacts-section-type">Instagram:</span>
                    <a className="contacts-section-link" href="https://www.instagram.com/rostikshafar/">@rostikshafar</a>
                    </div>
                    <div>
                        <span className="contacts-section-type">Telegram:
                        </span>
                        <a className="contacts-section-link" href="https://t.me/Rostik54">@Rostik54</a>
                    </div>
                    <ContactUs/>

                </div>

            </div>
        </div>
    )

}

export default Sidebar;