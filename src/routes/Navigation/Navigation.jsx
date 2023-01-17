import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import CrownLogo from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../firebase/config"
import './navigation.styles.scss'


const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    const response = await signOutUser()
  }

  return (
    <Fragment>
      <div className="navigation">

        <Link className="logo-container" to='/'>
          <img src={CrownLogo} alt="Logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          {currentUser ? (
            <p className="nav-link" onClick={signOutHandler}>SIGN OUT</p>
          )
            : <Link className="nav-link" to='/auth'>SIGN IN</Link>
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation