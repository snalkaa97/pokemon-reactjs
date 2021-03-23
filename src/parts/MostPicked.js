import Button from "elements/Button";
import Fade from "react-reveal";
export default function MostPicked(props) {
	// console.log(props.data);
	return (
		<section className="container" ref={props.refMostPicked}>
			<Fade bottom>
				<h4 className="mb-3">Most Picked</h4>
				<div className="container-grid">
					{props.data.map((item, index) => {
						return (
							<div
								key={`mostpicked${index}`}
								className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
							>
								<Fade bottom delay={500 * index}>
									<div className="card card-feature">
										<div className="tag">${item.price}</div>
										<span className="font-weight-light">per {item.unit}</span>
									</div>
									<figure className="img-wrapper">
										<img
											src={item.imageUrl} //memang ga ada gambar
											alt={item.name}
											className="img-cover"
										/>
									</figure>
									<div className="meta-wrapper">
										<Button
											type="link"
											className="streched-link d-block text-white"
											href={`/properties/${item._id}`}
										>
											<h5>{item.name}</h5>
										</Button>
										<span>
											{item.city}, {item.country}
										</span>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</Fade>
		</section>
	);
}
