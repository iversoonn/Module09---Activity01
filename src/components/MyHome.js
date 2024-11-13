import React from "react";

const MyHome = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center bg-primary text-white">
                <h1 className="display-4">Welcome to the Home Page</h1>
                <p className="lead">This is the home page of the simple navigation example.</p>
                <hr className="my-4" />
                <p>Explore more about our services and offerings.</p>
                <a className="btn btn-light btn-lg" href="#!" role="button">Learn more</a>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">Feature 1</h5>
                            <p className="card-text">Description of Feature 1.</p>
                            <a href="#!" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">Feature 2</h5>
                            <p className="card-text">Description of Feature 2.</p>
                            <a href="#!" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
                        <div className="card-body">
                            <h5 className="card-title">Feature 3</h5>
                            <p className="card-text">Description of Feature 3.</p>
                            <a href="#!" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer mt-5 py-3 bg-light text-center">
                <div className="container">
                    <span className="text-muted">© 2024 Your Company</span>
                </div>
            </footer>
        </div>
    );
};

export default MyHome;
