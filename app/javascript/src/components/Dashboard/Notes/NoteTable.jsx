import React from "react";

import Card from "./Cards";
import { NOTE_LIST } from "./constants";

function NoteTable() {
  return (
    <div>
      {NOTE_LIST.map((content, index) => {
        return (
          <Card key={index} title={content.title} stat={content.stat}>
            {content.message}
          </Card>
        );
      })}
    </div>
  );
}

export default NoteTable;
