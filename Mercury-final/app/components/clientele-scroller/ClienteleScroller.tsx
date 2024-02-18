'use client'
import React, { useState } from "react";
import ClienteleScrollerApi from "./clienteleScrollerApi";
// import ClienteleScrollerChildContainer from "./ClienteleScrollerChildContainer";
import './ClienteleScrollerCSS.css';

interface ClienteleScrollerProps {
    scrollerApiId: number;
    // slideDirection?: string;
}

const ClienteleScroller: React.FC<ClienteleScrollerProps> = ({scrollerApiId}) => {
    const [clienteleScrollerData] = useState(ClienteleScrollerApi);

    return (
        <>

                <div className="mainContainer">
                    <div className="innerContainer"> {/* Marque */}
                        <ul className="ulGroup"> {/* Marque Group */}
                            {
                                clienteleScrollerData.map((currentElement) => (
                                    <li key={currentElement.id} className="liItem"><img src={currentElement.clienteleImage} alt="image" /></li>
                                ))
                            }
                        </ul>
                        <ul className="ulGroup">
                            {
                                clienteleScrollerData.map((currentElement) => (
                                    <li key={currentElement.id} className="liItem"><img src={currentElement.clienteleImage} alt="image" /></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

        </>
    );
};

export default ClienteleScroller;
