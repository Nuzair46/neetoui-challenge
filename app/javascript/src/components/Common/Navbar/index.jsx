import React from "react";

import { Toastr } from "neetouiv2";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";
import { Sidebar } from "neetouiv2/layouts";

import { NAV_LINKS } from "./constants";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/login";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        isCollapsed={true}
        organizationInfo={{}}
        navLinks={NAV_LINKS}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit",
              onClick: () => {
                window.location.href = "/my/profile";
              }
            },
            {
              label: "Logout",
              onClick: handleLogout
            }
          ],
          name: "Kieran Miller",
          email: "kieran@miller.com",
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg"
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
