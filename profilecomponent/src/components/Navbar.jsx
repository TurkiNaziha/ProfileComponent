import React, { useState } from 'react';
import List from './atoms/List/List';
import Picture from './atoms/Picture/Picture';
import Label from './atoms/label/label';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownItems = [
        {
            label: 'Sign Up',
            onClick: () => alert('Redirect to Sign Up'),
        },
        {
            label: 'Settings',
            onClick: () => alert('Open Settings'),
        },
    ];

    return (
        <nav className="m-navbar">
            {/* Left: Brand Label */}
            <div className="m-navbar__brand">
                <Label customClassName="m-navbar__label">
                    MyApp
                </Label>
            </div>

            {/* Right: Profile Picture + Dropdown */}
            <div className="m-navbar__profile">
                <div className="m-navbar__picture-wrapper">
                    <Picture
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User avatar"
                        size="small"
                        customClassName="m-navbar__picture"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    />
                    {isDropdownOpen && (
                        <List
                            items={dropdownItems}
                            customClassName="m-navbar__dropdown"
                        />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;