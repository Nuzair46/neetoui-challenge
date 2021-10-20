import React from "react";

import { Sidebar } from "@bigbinary/neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

import { NAV_LINKS } from "./constants";

const NavBar = () => {
  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        isCollapsed={true}
        organizationInfo={{}}
        navLinks={NAV_LINKS}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit"
            },
            {
              label: "Logout"
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
