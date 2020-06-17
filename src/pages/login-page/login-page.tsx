import React, {useState} from 'react'
import { connect, ConnectedProps } from "react-redux";
import { Link } from 'react-router-dom'
import './login-page.scss'
import { TextField } from '@material-ui/core';

const addNewProductIcon = require('../../shared/icons/login.png')

interface RootState{
    loading: boolean
}

interface RootDispatch{
    login: (email: string, password: string) => void
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

export const LoginPage: React.FC<Props> = ({loading, login}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div className="login-page-container">
            <div className="login-form-container">
                <div className="login-form-header">
                    <p className="logo-text">mambo</p>
                    <p className="login-welcome-text">Добро пожаловать!</p>
                    <p className="login-welcome-text">Войдите в свой аккаунт или зарегистрируйтесь</p>
                </div>

                <div className="login-form">
                    <TextField label="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='login-input'/>
                    <TextField label="Пароль" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className='login-input'/>
                </div>
                <div className="login-action-buttons">
                    <button className='login-button' onClick={() => login(email, password)}>
                        <img className='login-icon' alt='login' src={addNewProductIcon}/>
                        Войти
                    </button>

                    <Link to="/register">
                        <button className='register-button'>
                            Регистрация
                        </button>
                    </Link>
                </div>
                <div className="login-partnership">
                    <p className='login-partnership-text'>Вы владелец магазина?</p><Link to='/partnership-request'><p className='login-partnership-text'>Оставьте заявку на сотрудничество</p></Link>
                </div>
            </div>
        </div>
    );
  }

const mapStateToProps = (state: RootState) => ({
    loading: state.loading,
});

const mapDispatchToProps:RootDispatch = ({
    login
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(LoginPage);