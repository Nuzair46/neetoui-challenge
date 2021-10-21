import React from "react";

import { Typography } from "neetouiv2";

const CardBody = ({ children }) => {
  return (
    <Typography className="text-sm leading-5 neeto-ui-text-gray-600 font-normal border-b pb-4 neeto-ui-border-gray-300">
      {children}
    </Typography>
  );
};

export default CardBody;
