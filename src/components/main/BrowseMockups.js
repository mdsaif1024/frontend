import React, { useState } from 'react'
import app_config from '../../config'
import { Link } from 'react-router-dom';

const BrowseMockups = () => {

    const { mockupData } = app_config;

    const [selMockup, setSelMockup] = useState(null);

    const displaySelMockup = () => {
        return (
            <div>
                <div>
                <img src={mockupData.templates[selMockup].image} className='img-fluid' />
                </div>
                <Link to={"/user/mockupeditor/"+selMockup} className='btn btn-outline-primary btn-lg mt-5 w-100'>Use this Mockup</Link>
            </div>
        )
    }

    const displayMockupTemplates = () => {
        return mockupData.templates.map(({ name, category, type, image }, index) => (
            <div className="py-4 col-lg-4 col-md-12 mb-0" key={index} onClick={e => setSelMockup(index)}>
                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                    <img
                        src={image}
                        className="w-100"
                    />
                    <a href="#!">
                        <div
                            className="mask"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                        >
                            <div className="d-flex justify-content-start align-items-start h-100">
                                <h5>
                                    <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                                        {name}
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="hover-overlay">
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                            />
                        </div>
                    </a>
                </div>
            </div>
        ))
    }

    return (
        <div style={{backgroundColor: "#eee"}}>
            <div class="container py-5">

                <div className='row'>
                    {
                        selMockup !==null && (
                            <div class=" pt-5 mt-5 col-md-4">
                                {displaySelMockup()}
                            </div>

                        )
                    }
                    <div class="col-md"><section style={{ backgroundColor: "#eee" }}>
                        <div className="container py-0">
                            <h4 className="text-center mb-5 text-dark">
                                <strong>Use Your Mockup</strong>
                            </h4>
                            <div className="row">
                                {displayMockupTemplates()}
                            </div>
                        </div>
                    </section>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BrowseMockups