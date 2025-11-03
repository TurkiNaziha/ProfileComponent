import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/organismes/profilCard/ProfileCard';

const ProfileCardPage = () => {
    return (
        <div className="page-profile-card">
            <Navbar />
            <div className="page-profile-card__content">
                <h1 className="page-profile-card__title">Profile Card Demo</h1>
                <p className="page-profile-card__desc">
                    This page demonstrates atomic components: <strong>Button</strong>, <strong>Label</strong>, <strong>Input</strong>, <strong>Picture</strong>, and now <strong>List</strong> in a <strong>Navbar</strong>.
                </p>
                <ProfileCard />
            </div>
        </div>
    );
};



export default ProfileCardPage;