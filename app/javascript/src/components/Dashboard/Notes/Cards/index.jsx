import React from "react";

import PropTypes from "prop-types";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

import DeleteAlert from "../DeleteAlert";

const Card = ({ title, message, stat }) => {
  const [delToast, setDelToast] = React.useState(false);

  return (
    <div className="mb-4 rounded-sm neeto-ui-border-gray-300 neeto-ui-shadow-xs border neeto-ui-bg-white">
      <div className="p-4">
        <CardHeader title={title} setDelToast={setDelToast} />
        <CardBody message={message} />
        <CardFooter stat={stat} />
      </div>
      <DeleteAlert showToast={delToast} setShowToast={setDelToast} />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  stat: PropTypes.string
};

export default Card;
