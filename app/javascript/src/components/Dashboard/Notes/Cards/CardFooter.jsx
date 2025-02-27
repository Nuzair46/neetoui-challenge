import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Label, Tooltip, Typography } from "neetouiv2";
import PropTypes from "prop-types";

const CardFooter = ({ stat }) => {
  return (
    <div className="flex justify-between mt-4">
      <Label className="border rounded-sm py-1 px-2 neeto-ui-bg-gray-100">
        Getting Started
      </Label>
      <Typography className="flex justify-evenly">
        {<Clock width="16" />}{" "}
        <Tooltip placement={"bottom-end"} content={"Wednesday, 10:30AM"}>
          <p className="inline-block mx-1"> {stat} 2 hours ago</p>
        </Tooltip>
        <img
          src="https://randomuser.me/api/portraits/women/90.jpg"
          width="24"
          className="inline-block rounded-full"
        />
      </Typography>
    </div>
  );
};

CardFooter.propTypes = {
  stat: PropTypes.string
};

export default CardFooter;
