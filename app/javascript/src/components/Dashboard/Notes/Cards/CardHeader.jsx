import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Dropdown, Typography } from "neetouiv2";
import PropTypes from "prop-types";

const CardHeader = ({ title, setDelToast }) => {
  const handleDelete = () => {
    setDelToast(true);
  };

  return (
    <div className="flex justify-between">
      <Typography style="h4">{title}</Typography>
      <div className="flex flex-row items-center justify-end space-x-3">
        <Dropdown icon={MenuVertical} buttonStyle="icon" autoWidth>
          <li>Edit</li>
          <li onClick={handleDelete}>Delete</li>
        </Dropdown>
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  setDelToast: PropTypes.func
};

export default CardHeader;
