import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import MyPhotos from "../../Assets/feed.svg?react";
import Stats from "../../Assets/estatisticas.svg?react";
import AddPhoto from "../../Assets/adicionar.svg?react";
import LogoutImg from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const {pathname} = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  React.useEffect(() => {
    
  }, [])

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MyPhotos />
          {mobile && "Minhas fotos"}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>

        <NavLink to="/conta/postar">
          <AddPhoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <LogoutImg />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
