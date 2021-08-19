import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authorizedUser, getUserName } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";

import UserMenuStyled from "./UserMenuStyled";
import logOutIcon from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";

const UserMenu = () => {
  const isAuth = useSelector(authorizedUser);
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    dispatch(logOut());
    history.push("auth");
  };

  return (
    <UserMenuStyled colors={colors}>
      {isAuth && (
        <>
          <span className="userNameLogo">
            {userName && userName[0].toUpperCase()}
          </span>
          <span className="userName">
            {userName &&
              userName[0].toUpperCase() + userName.substring(1).toLowerCase()}
          </span>
          <svg className="iconLogOut" onClick={signOut}>
            <use href={logOutIcon + "#icon-logOut"} />
          </svg>
        </>
      )}
    </UserMenuStyled>
  );
};

export default UserMenu;
