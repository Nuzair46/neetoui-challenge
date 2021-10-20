import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Checkbox, Dropdown } from "neetouiv2";
import PropTypes from "prop-types";

import { CONTACT_LIST } from "../constants";

const ContactCardBody = ({ setDelToast }) => {
  const handleDelete = () => {
    setDelToast(true);
  };
  return Array(5)
    .fill()
    .map((_, index) => (
      <React.Fragment key={index}>
        {CONTACT_LIST.map((content, ind) => {
          return (
            <tr key={ind}>
              <td>
                <Checkbox name="1" />
              </td>
              <td className="space-x-2">
                <img
                  className="rounded-full inline-block"
                  width="40"
                  src={content.image}
                />
                <span>{content.name}</span>
              </td>
              <td>{content.email}</td>
              <td>{content.created}</td>
              <td>
                <div className="flex flex-row items-center justify-end space-x-3">
                  <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
                    <li>Edit</li>
                    <li onClick={handleDelete}>Delete</li>
                  </Dropdown>
                </div>
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    ));
};

ContactCardBody.propTypes = {
  setDelToast: PropTypes.func
};

export default ContactCardBody;
