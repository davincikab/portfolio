import React from 'react';

const Landing = () => {
    return(
        <div className="container-fluid landing-section"
            style={{ backgroundImage:'url(/bg_image.jfif)'}}
        >
            <div className="bg-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="">
                            <img src="/code.png" className="" alt="name"/>
                        </div>
                        <h2 className="">Home Coming</h2>
                        <p className="text-left">
                            If you feel completely stuck, start by keeping all files in a single folder. 
                            Eventually it will grow large enough that you will want to separate some files from the rest. By that time you’ll have enough knowledge to tell which files you edit together most often. 
                            In general, it is a good idea to keep files that often change together close to each other.
                        </p>
                    </div>

                    <div className="" style={{ width:'50vw'}}>
                        <img src="/code.png" className="" alt="name"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Landing;