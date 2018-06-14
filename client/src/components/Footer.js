import React from "react";

const Footer = (props) => {
    const {company, email} = props;
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-danger">Powered By {company}</span> |<span className="text-muted"> Contact By Email : {email}</span>
                </small>
            </div>
        </div>
    )
}

export default Footer;