import React from "react";

const MyProfile = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Your Profile</h1>
            <p className="text-center">This is your profile page where you can view and edit your information.</p>
            
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">User Information</h5>
                            <p className="card-text"><strong>Name:</strong> John Doe</p>
                            <p className="card-text"><strong>Email:</strong> johndoe@example.com</p>
                            <p className="card-text"><strong>Bio:</strong> A brief bio about yourself goes here.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Edit Profile</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bio">Bio</label>
                                    <textarea className="form-control" id="bio" rows="3" placeholder="Tell us about yourself"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
