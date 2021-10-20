import React from "react";

import { Input, Textarea, Select } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";

import notesApi from "apis/notes";

import { CONTACT_LIST, TAG_LIST } from "./constants";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik onSubmit={handleSubmit}>
      <Form className="w-full space-y-6">
        <Input label="Title" name="title" required />
        <Textarea label="Description" name="description" rows={1} required />
        <div>
          <Select
            placeholder="Select Role"
            required
            isSearchable
            label="Assigned Contact"
            name="contactList"
            options={CONTACT_LIST}
          />
        </div>
        <div>
          <Select
            placeholder="Select Role"
            isSearchable
            required
            label="Tags"
            name="tagList"
            options={TAG_LIST}
          />
        </div>
      </Form>
    </Formik>
  );
}
