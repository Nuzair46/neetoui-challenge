import React from "react";

import { Checkbox } from "neetouiv2";

const ContactCardHeader = () => {
  return (
    <tr>
      <th>
        <Checkbox name="header" />
      </th>
      <th>Name & Role</th>
      <th>Email</th>
      <th>Created At</th>
      <th></th>
    </tr>
  );
};

export default ContactCardHeader;
