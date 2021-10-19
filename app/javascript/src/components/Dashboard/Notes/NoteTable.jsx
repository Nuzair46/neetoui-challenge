import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Dropdown, Typography, Label } from "@bigbinary/neetoui/v2";

import DeleteAlert from "./DeleteAlert";

function NoteTable() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

const Card = () => {
  const [delToast, setDelToast] = React.useState(false);
  const handleDelete = () => {
    setDelToast(true);
  };
  return (
    <div className="mb-4 rounded-sm neeto-ui-border-gray-300 neeto-ui-shadow-xs border neeto-ui-bg-white">
      <div className="p-4">
        <div className="flex justify-between">
          <Typography style="h4">How to claim the warranty?</Typography>
          <div className="flex flex-row items-center justify-end space-x-3">
            <Dropdown icon={MenuVertical} buttonStyle="icon" autoWidth>
              <li>Edit</li>
              <li onClick={handleDelete}>Delete</li>
            </Dropdown>
          </div>
        </div>
        <Typography className="text-sm leading-5 neeto-ui-text-gray-600 font-normal border-b pb-4 neeto-ui-border-gray-300">
          "Are you getting my texts???" she texted to him. He glanced at it and
          chuckled under his breath. Of course he was getting them, but if he
          wasn't getting
        </Typography>
        <div className="flex justify-between mt-4">
          <Label className="border rounded-sm py-1 px-2 neeto-ui-bg-gray-100">
            Getting Started
          </Label>
          <Label className="flex justify-evenly">
            {<Clock width="16" />}{" "}
            <p className="inline-block mx-1"> Created 2 hours ago</p>
            <img
              src="https://randomuser.me/api/portraits/women/90.jpg"
              width="24"
              className="inline-block rounded-full"
            />
          </Label>
        </div>
      </div>
      <DeleteAlert showToast={delToast} setShowToast={setDelToast} />
    </div>
  );
};

export default NoteTable;
