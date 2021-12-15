import React from "react";
import { Card } from "react-bootstrap";
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'

export const Footer = () => {
    return (
        <Card id="footer" className="bg-dark">
            <div className="">
                <BsInstagram onClick={"https://www.instagram.com/comidazipa/?hl=en"} className="" style={{ color: "white", marginRight: "10px" }} />
                <FaFacebookF className="" style={{ color: "white", marginRight: "10px"  }} />
                <FiTwitter style={{ color: "white", marginRight: "10px" }} /> 
                <ImWhatsapp style={{ color: "white"}}/>
            </div>
            <Card.Header className="text-end" style={{ color: "white" }}>Copyrights by Burguer House</Card.Header>
        </Card>
    )
}