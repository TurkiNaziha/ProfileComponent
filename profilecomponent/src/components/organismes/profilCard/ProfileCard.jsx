import React, {useState} from 'react';
import Picture from '../../atoms/Picture/Picture';
import Label from '../../atoms/label/label';
import Input from '../../atoms/input/input';
import Button from '../../atoms/button/Button';
import TextField from "../../molecules/textField/TextField";
import './ProfilCard.css';   // <-- pulls everything

const ProfileCard = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');

    return (
        <div className="m-profile-card">
            {/* Picture Atom */}
            <Picture
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User profile"
                size="large"
                customClassName="m-profile-card__picture"
            />

            <div className="m-profile-card__info">
                {/* Input + Label */}
                <div className="m-profile-card__field">
                    <TextField
                        id="name"
                        label={name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />


                </div>

                <div className="m-profile-card__field">

                    <TextField
                        id="email"
                        label={email}
                        value={email}

                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Buttons */}
                <div className="m-profile-card__actions">
                    <Button
                        variant="success"
                        onClick={() => alert(`Saved: ${name}, ${email}`)}
                        customClassName="m-profile-card__button custom-btn "
                    >
                        Save Profile
                    </Button>

                    <Button
                        variant="danger"
                        onClick={() => {
                            setName('');
                            setEmail('');
                        }}
                        customClassName="m-profile-card__button"
                    >
                        Clear
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;