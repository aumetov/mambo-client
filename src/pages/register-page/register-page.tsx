import React, {useState} from 'react'
import { connect, ConnectedProps } from "react-redux";
import { Link } from 'react-router-dom'
import './register-page.scss'
import { TextField } from '@material-ui/core';
import { register } from '../../serviceWorker';

interface RootState{
    loading: boolean
}

interface RootDispatch{
    // register: (email: string, password: string) => void
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

export const RegisterPage: React.FC<Props> = ({loading}) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onRegisterClick = () => {
        const userInfo = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password
        }

        // register(userInfo);
    }

    return (
        <div className="register-page-container">
            <div className="register-form-container">
                <div className="register-form-header">
                    <p className="logo-text">mambo</p>
                    <p className="register-text">Регистрация</p>
                </div>

                <div className="register-form">
                    <TextField label="Имя" value={firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} className='register-input'/>
                    <TextField label="Фамилия" value={lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} className='register-input'/>
                    <TextField label="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='register-input'/>
                    <TextField label="Телефон" value={phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} className='register-input'/>
                    <TextField label="Пароль" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className='register-input'/>
                </div>

                <div className="register-action-buttons">
                    <button className='register-button' onClick={onRegisterClick}>Регистрация</button>
                </div>
                <div className="register-partnership">
                    <p className='register-partnership-text'>Вы владелец магазина?</p><Link to='/partnership-request'><p className='register-partnership-text'>Оставьте заявку на сотрудничество</p></Link>
                </div>
            </div>
        </div>
    );
  }

const mapStateToProps = (state: RootState) => ({
    loading: state.loading,
});

const connector = connect(
    mapStateToProps,
);

export default connector(RegisterPage);