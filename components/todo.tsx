"use client";

import { Checkbox, IconButton } from "@material-tailwind/react";
import { Input } from "@mui/icons-material";
import { useState } from "react";

export default function todo() {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div className="w-full flex items-center gap-1">
      <Checkbox
        checked={completed}
        onChange={(e) => setCompleted(e.target.value)}
      ></Checkbox>

      {isEditing ? (
        <input
          className="flex-1 border-b-black border-b-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed && "line-through"}`}>{title}</p>
      )}

      {isEditing ? (
        <IconButton onClick={(e) => setIsEditing(false)}>
          <i className="fas fa-check"></i>
        </IconButton>
      ) : (
        <IconButton onClick={(e) => setIsEditing(true)}>
          <i className="fas fa-pen"></i>
        </IconButton>
      )}

      <IconButton>
        <i className="fas fa-trash"></i>
      </IconButton>
    </div>
  );
}
