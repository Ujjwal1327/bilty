import styles from './Login.module.css'
import { IoChevronBack } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";


const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p> <IoChevronBack />  <span> Back</span> </p>
        <h2>Login</h2>
        <p>Please log in into your account</p>
        <form action="">
          <div className={styles.email}>
            <label >User Name</label>
            <div>
              <input type="text" />
              <FcCheckmark className={styles.icon} />
            </div>
          </div>
          <div className={styles.password}>
            <div>
              <label >Password </label>
              <span>Forgot password</span>
            </div>
            <div>
              <input type="password" />
              <FaEye className={styles.icon} />
            </div>
          </div>
          <button>Login</button>
        </form>
      </div>
      <div className={styles.right}>
      <img src="../../../public/loginImage.svg" alt=""/>
      </div>
    </div>
  )
}

export default Login