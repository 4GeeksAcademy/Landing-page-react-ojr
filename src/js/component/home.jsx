import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	  <div className="home-container">
		<section className="welcome-section">
		  <h1 className="welcome-title">A Warm Welcome!</h1>
		  <p className="welcome-text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
		  </p>
		  <div className="cta-container">
			<button className="cta-button">Call to action!</button>
		  </div>
		</section>
		<div className="cards-container">
		  <div className="card">
			<div className="card-image">500 x 325</div>
			<h2 className="card-title">Card title</h2>
			<p className="card-text">
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.
			</p>
			<button className="find-out-button">Find Out More!</button>
		  </div>
		  <div className="card">
			<div className="card-image">500 x 325</div>
			<h2 className="card-title">Card title</h2>
			<p className="card-text">
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.
			</p>
			<button className="find-out-button">Find Out More!</button>
		  </div>
		  <div className="card">
			<div className="card-image">500 x 325</div>
			<h2 className="card-title">Card title</h2>
			<p className="card-text">
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.
			</p>
			<button className="find-out-button">Find Out More!</button>
		  </div>
		  <div className="card">
			<div className="card-image">500 x 325</div>
			<h2 className="card-title">Card title</h2>
			<p className="card-text">
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.
			</p>
			<button className="find-out-button">Find Out More!</button>
		  </div>
		</div>
	  </div>
	);
  };
export default Home;
