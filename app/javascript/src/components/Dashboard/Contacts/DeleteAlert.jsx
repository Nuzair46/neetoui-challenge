import React from "react";

import { Modal, Typography, Button, Toastr } from "neetouiv2";

export default function DeleteAlert({ showToast, setShowToast }) {
  const handleDelete = () => {
    Toastr.success("Contact successfully deleted.");
    setShowToast(false);
  };
  return (
    <Modal isOpen={showToast} onClose={() => setShowToast(false)}>
      <Modal.Header>
        <Typography style="h2">Delete Contact</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete this Contact? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={handleDelete} size="large" />
        <Button
          style="text"
          label="Cancel"
          onClick={() => setShowToast(false)}
          size="large"
        />
      </Modal.Footer>
    </Modal>
  );
}
