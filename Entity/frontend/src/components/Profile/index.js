import React, { useState } from "react";
import "./Profile.css"
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector(state => state.session.user)
    return (
        <>
            <div className="container">
                <div className="profile-window">
                    <div className="side">
                        <div className="card">
                            <div className="profile-picture-container"><img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img></div>
                            <div className="name-container">
                                <h1>{`${user.firstName} ${user.lastName}`}</h1>
                                <h3>{`@${user.username}`}</h3>
                            </div>
                        </div>
                        <div className="user-info-container">
                            <div>Online Status:</div>
                            <div>Home Institution:</div>
                            <div>Field of Study:</div>
                            <div>Portfolio</div>
                            <div>About Me:</div>
                        </div>
                        <div className="interact-container">
                            <button><i className="fa-solid fa-plus"></i></button>
                            <button><i className="fa-regular fa-envelope"></i></button>
                            <button><i className="fa-regular fa-heart"></i></button>
                        </div>
                        <div className="explore">
                            <h3>Explore:</h3>
                            <div className="explore-people">
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                            </div>
                            <div className="explore-institutions">
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                            </div>
                            <div className="explore-groups">
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                                <img src="" onError={e => e.currentTarget.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></img>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="profile-nav">
                            <button><i className="fa-solid fa-scroll"></i></button>
                            <button><i className="fa-regular fa-images"></i></button>
                            <button><i className="fa-regular fa-folder-open"></i></button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Profile
