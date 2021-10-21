import React from "react";

import { Pagination } from "neetouiv2";

import { Scrollable } from "neetouiv2/layouts";

import ContactCardBody from "./ContactCardBody";
import ContactCardHeader from "./ContactCardHeader";

const ContactCard = ({ setShowToast }) => {
  return (
    <div className="px-9">
      <Scrollable className="w-full">
        <table className="neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions">
          <thead>
            <ContactCardHeader />
          </thead>
          <tbody>
            <ContactCardBody setDelToast={setShowToast} />
          </tbody>
        </table>
      </Scrollable>
      <div className="flex flex-row items-center justify-end w-full mb-8">
        <Pagination count={300} pageNo={3} pageSize={25} navigate={() => {}} />
      </div>
    </div>
  );
};

export default ContactCard;
