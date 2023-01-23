import logIn from '../../assets/images/log-in.svg';
import lock from '../../assets/images/lock.svg';
import mail from '../../assets/images/mail.svg';
import mailFocus from '../../assets/images/mail-focus.svg';
import lockFocus from '../../assets/images/lock-focus.svg';
import check from '../../assets/images/check.svg';

import styles from './styles.module.css'
import { ChangeEvent, useState } from 'react';

export const FormLogin = () => {
  const [ isOnFocusMail, setIsOnFocusMail ] = useState(false);
  const [ isOnFocusLock, setIsOnFocusLock ] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
   setIsChecked(!isChecked);    
  }

  return (
    <section className={styles.container}>
      <div className={styles.contentInfo}>
        <div className={styles.login}>
          <img src={logIn} alt="" />
          <h1>Faça seu login</h1>
        </div>
        <p className={styles.loginDescription}>Entre com suas informações de cadastro.</p>
      </div>
      <main>
        <form className={styles.form}>
          <div className={styles.containerInput}>
            <label htmlFor="email">E-mail</label>
            <div className={styles.contentInput}>
              <img src={isOnFocusMail ? mailFocus : mail} alt="" />
              <input
                type="text"
                id='email'
                name='email'
                placeholder='Digite seu e-mail'
                className={styles.input}
                onFocus={() => setIsOnFocusMail(true)}
                onBlur={() => setIsOnFocusMail(false)}
              />
            </div>
          </div>
          <div className={styles.containerInput}>
            <label htmlFor="password">Senha</label>
            <div className={styles.contentInput}>
              <img src={isOnFocusLock ? lockFocus : lock} alt="" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder='Digite sua senha'
                className={styles.input}
                onFocus={() => setIsOnFocusLock(true)}
                onBlur={() => setIsOnFocusLock(false)}
              />
            </div>
          </div>
          <div className={`${styles.containerCheckbox} ${isChecked && styles.active}`}>
            <div>
              <label htmlFor="rememberMe">
              <div>
                <img className={styles.imgCheck} src={check} alt="" />
              </div>
                Lembre-me
              </label>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                onChange={handleCheckbox}
              />
            </div>
            <a href="#">Esqueci minha senha</a>
          </div>
          <button type='submit'>Entrar</button>
        </form>
      </main>
      <span className={styles.register}>Não tem uma conta? <span>Registre-se</span></span>
    </section>
  )
}