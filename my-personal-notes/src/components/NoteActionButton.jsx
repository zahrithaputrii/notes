import React from 'react';

function NoteActionButton({
  variant,
  onClick,
  children,
  testId,
}) {
  return (
    <button
      type="button"
      className={`note-item__${variant}-button`}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
}

export default NoteActionButton;