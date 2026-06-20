import React from 'react';
import { showFormattedDate } from '../utils';
import NoteActionButton from './NoteActionButton';

function highlightText(text, keyword = '') {
  if (!keyword) return text;

  const regex = new RegExp(`(${keyword})`, 'gi');

  return text.split(regex).map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <mark key={index}>{part}</mark>
    ) : (
      part
    )
  );
}

function NoteItem({
  note,
  onDelete,
  onArchive,
  keyword,
}) {
  return (
    <div
      className="note-item"
      data-testid="note-item"
      data-note-id={note?.id}
    >
      <div
        className="note-item__content"
        data-testid="note-item-content"
      >
        <h3
          className="note-item__title"
          data-testid="note-item-title"
        >
          {highlightText(note.title, keyword)}
        </h3>

        <p
          className="note-item__date"
          data-testid="note-item-date"
        >
          {showFormattedDate(note.createdAt)}
        </p>

        <p
          className="note-item__body"
          data-testid="note-item-body"
        >
          {highlightText(note.body, keyword)}
        </p>
      </div>

      <div
        className="note-item__action"
        data-testid="note-item-action"
      >
        <NoteActionButton
          variant="delete"
          onClick={() => onDelete(note.id)}
          testId="note-item-delete-button"
        >
          Delete
        </NoteActionButton>

        <NoteActionButton
          variant="archive"
          onClick={() => onArchive(note.id)}
          testId="note-item-archive-button"
        >
          {note.archived
            ? 'Pindahkan'
            : 'Arsipkan'}
        </NoteActionButton>
      </div>
    </div>
  );
}

export default NoteItem;