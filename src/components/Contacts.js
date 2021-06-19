import React from 'react';
import { FaGithub, FaEnvelope, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Contacts = () => {
    return(
        <div className="section container" id="contacts">
            <div className="h3 title-header text-left mt-5 mx-4">
                Contacts
                <hr></hr>
            </div>

            <div className="contact-cards d-flex">
                <div className="card d-flex">
                    <FaEnvelope />
                    <div>
                        davidnganganjeri079@gmail.com
                    </div>
                </div>

                <div className="card d-flex">
                    <FaPhoneAlt />
                    <div>
                        +254 704 893 840
                    </div>
                </div>

                <div className="card d-flex">
                    <FaWhatsapp />
                    <div>
                        <a className="" href="https://wa.me/254704893840">Whatsapp</a>
                    </div>
                </div>

                <div className="card d-flex">
                    <FaGithub />
                    <div>
                        Github
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contacts;