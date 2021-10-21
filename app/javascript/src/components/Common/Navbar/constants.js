import React from "react";

import { UserCircle, NeetoInsights } from "@bigbinary/neeto-icons";

import { NotesIcon } from "../Icons";

export const NAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: () => NotesIcon
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: () => <UserCircle color="#1e1e20" size={24} />
  },
  {
    label: "Settings",
    to: "/my/profile",
    icon: () => <NeetoInsights color="#1e1e20" size={24} />
  }
];
