import React, { useState } from 'react';
import { Modal } from 'antd';
import './ProfileMenu.css';
import { ProfileModal } from './profileModal/ProfileModal.js';

export function ProfileMenu(data) {
    const [editing, setEditing] = useState(false);

    const editingOnClick = () => {
        setEditing(!editing);
    }

    const handleOnCancel = () => {
        setEditing(false);
    }

    return (
        <>
            <div className="profileMenu">
                <h4 onClick={editingOnClick} className="title">My Profile</h4>
                <h4 className="title">Settings</h4>
                <h4 className="title">Help</h4>
            </div>
            {editing ?
                <Modal open={editing}
                    // onOk={onSubmit} 
                    onCancel={handleOnCancel}>
                    <ProfileModal data={data} />
                </Modal>
                : <></>}
        </>
    )
}