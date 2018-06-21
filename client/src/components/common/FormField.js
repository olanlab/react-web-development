import React from "react";

export default ({ input, label, type, required, className, meta : { error, touched } }) => {

	return (
		<div className={`form-group ${className}`}>
			<label className="title" >{label}</label>
			<input type={type} required={required} {...input} className="form-control"  />
			{touched && error && 
				(<div className="mt-2 text-danger title">{error}</div>)}
		</div>
	);
};
