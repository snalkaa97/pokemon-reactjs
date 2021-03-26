import React, { Component } from "react";
// import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
	render() {
		const breadcrumbList = [
			{ pageTitle: "Home", pageHref: "/stories" },
			{ pageTitle: "House Details", pageHref: "/agents" },
		];
		return (
			<div className="container">
				<div
					className="row align-item-center justify-content-center"
					style={{ height: "100vh" }}
				>
					<div className="col-auto">
						<Breadcrumb data={breadcrumbList} />
					</div>
				</div>
			</div>
		);
	}
}