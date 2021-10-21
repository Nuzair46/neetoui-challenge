import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Pane, Typography, Button, Toastr } from "neetouiv2";

import NewContactForm from "./NewContactForm";

export default function NewContactPane({
  fetchContacts,
  showPane,
  setShowPane
}) {
  const onClose = () => setShowPane(false);
  const handleSubmit = () => {
    onClose();
    Toastr.success("Contact successfully created.");
  };
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Pane.Body>
        <NewContactForm onClose={onClose} refetch={fetchContacts} />
      </Pane.Body>
      <Pane.Footer className="flex items-center space-x-2">
        <Button
          type="submit"
          label="Save Changes"
          icon={Check}
          iconPosition="right"
          size="large"
          style="primary"
          className="ml-2"
          onClick={handleSubmit}
        />
        <Button onClick={onClose} label="Cancel" size="large" style="text" />
      </Pane.Footer>
    </Pane>
  );
}
