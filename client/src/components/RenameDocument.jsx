import React, { useState } from 'react';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const INVALID_CHARS = /[\\/:*?"<>|]/;

export default function RenameDocument({ file}) {
    const lastDot = file.name.lastIndexOf('.');
	const ext = lastDot > 0 ? file.name.slice(lastDot) : '';
	const base = lastDot > 0 ? file.name.slice(0, lastDot) : file.name;

    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(base);
    const [error, setError] = useState('');
    const [saving, setSaving] = useState(false);

    const startEditing = () => {
        setValue(base);
        setError('');
        setEditing(true);
    };

    const save = async () => {
        const trimmed = value.trim();

        if (!trimmed) return setError("Name can't be empty.");
		if (trimmed.length > 100) return setError('Name must be 100 characters or less.');
		if (INVALID_CHARS.test(trimmed)) return setError('Name contains invalid characters.');
		if (trimmed + ext === file.name) return setEditing(false);

        setSaving(true);
        try {
            await updateDoc(doc(db, 'files', file.id), {
                name: trimmed + ext,
                updateAt: serverTimestamp()
            });
            setEditing(false);
            setError('');
        } catch (error) {
            console.error('Failed to rename file:', err);
            setError('Could not rename. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') save();
		if (e.key === 'Escape') setEditing(false);
    };

    if (!editing) {
		return (
			<button type="button" onClick={startEditing} title="Rename document">
				Rename
			</button>
		);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={handleKeyDown}
					autoFocus
					disabled={saving}
					aria-label="New document name"
					style={{ maxWidth: '180px' }}
				/>
				<span style={{ fontSize: '0.8rem', color: '#777' }}>{ext}</span>
				<button type="button" onClick={save} disabled={saving}>
					{saving ? 'Saving...' : 'Save'}
				</button>
				<button type="button" onClick={() => setEditing(false)} disabled={saving}>
					Cancel
				</button>
			</div>
			{error && <span role="alert" style={{ color: 'red', fontSize: '0.75rem' }}>{error}</span>}
		</div>
	);
}