import React, { useState, useRef } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onClick={() => setIsExpanded(true)} className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            ref={inputRef}
          />
        )}
        <textarea
          // onClick={inputRef.current.focus()}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // when expanded, make textarea 3 rows
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab type="submit" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
