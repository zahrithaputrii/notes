import React from 'react';
import NoteItem from './NoteItem';

function NotesList({
  notes,
  onDelete,
  onArchive,
  dataTestId = 'notes-list',
}) {
  const hasNotes = notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan
        </p>
      </div>
    );
  }

  const groupedNotes = notes.reduce((groups, note) => {
    const date = new Date(note.createdAt);

    const groupKey = `${date.toLocaleString('id-ID', {
      month: 'long',
    })} ${date.getFullYear()}`;

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(note);

    return groups;
  }, {});

  return (
    <div className="notes-list" data-testid={dataTestId}>
      {Object.entries(groupedNotes).map(
        ([groupKey, notesInGroup]) => (
          <section
            key={groupKey}
            className="notes-group"
            data-testid={`${groupKey}-group`}
          >
            <h3>{groupKey}</h3>

            <span
              data-testid={`${groupKey}-group-count`}
            >
              {notesInGroup.length} catatan
            </span>

            {notesInGroup.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))}
          </section>
        )
      )}
    </div>
  );
}

export default NotesList;