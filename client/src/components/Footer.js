import React from "react";

const Footer = (props) => {
    const {company, email} = props;
    return (
        <div>Powered By {company} | Contact By Email : {email}</div>
    )
}

export default Footer;