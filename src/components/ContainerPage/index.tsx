import image from '../../assets/images/side-image.jpg';
import { FormLogin } from '../FormLogin';
import { Header } from '../Header';

import styles from './styles.module.css';

export const ContainerPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <Header />
        <div className={styles.containerLogin}>
          <FormLogin />
        </div>
      </div>
      <div className={styles.divImage}>

      </div>
    </div>
  )
}