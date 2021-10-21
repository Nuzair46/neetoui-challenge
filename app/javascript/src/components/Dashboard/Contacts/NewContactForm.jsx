import React from "react";

import { Formik, Form } from "formik";
import { Input, Select } from "neetouiv2";

import { CONTACT_ROLE } from "./constants";

export default function NewContactForm({ onClose, refetch }) {
  const handleSubmit = () => {
    try {
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik onSubmit={handleSubmit}>
      <Form className="w-full space-y-6">
        <div className="flex justify-between space-x-6">
          <Input
            label="First Name"
            name="fname"
            placeholder="Enter first name"
            required
          />
          <Input
            label="Last Name"
            name="lname"
            placeholder="Enter last name"
            required
          />
        </div>
        <Input
          label="Email Address"
          name="email"
          placeholder="Enter your email address"
          required
        />
        <div>
          <Select
            placeholder="Select Role"
            required
            isSearchable
            label="Assigned Contact"
            name="contactList"
            options={CONTACT_ROLE}
          />
        </div>
      </Form>
    </Formik>
  );
}
