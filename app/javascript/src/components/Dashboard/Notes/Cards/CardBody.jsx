import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

const CardBody = ({ message }) => {
  return (
    <Typography className="text-sm leading-5 neeto-ui-text-gray-600 font-normal border-b pb-4 neeto-ui-border-gray-300">
      {message}
    </Typography>
  );
};

CardBody.propTypes = {
  message: PropTypes.node.isRequired
};

export default CardBody;
