import React, {useState} from 'react';
import {Form, Upload } from 'antd';
import './ProfileModal.css';
import { PlusOutlined } from '@ant-design/icons';


export function ProfileModal(data) {
    const specificUser = data.data.data.data
    const [profilePicture, setProfilePicture] = useState(specificUser.picURL)

    //this is just to show a few methods for strings, although not all usernames will be first initial letter, last name, number.
    const firstInitial = specificUser.username.charAt(0).toUpperCase();
    const lastName = specificUser.username.substring(1,7);

   console.log(specificUser)
    return (
        <div>
            <h3>Edit your Profile:</h3>
            <Form className="wholeForm">
                <label className="labels" for="username">Username:
                    <input value={specificUser.username} disabled className='input' type="text" id="username" name="username">
                    </input>
                </label>
                {profilePicture ? <label className='labels'>Current Picture:<img className="proPic" src={profilePicture}></img></label> : 
                <Form.Item className="labels" label="Profile Picture" valuePropName="fileList">
                    <Upload className="pictureCard" action="/upload.do" listType='pictureCard'>
                        <div className='uploader'>
                        <PlusOutlined width={100}/>
                            <div className="upload">Upload</div>
                        </div>
                    </Upload>
                </Form.Item>}
                

                <label className="labels" for="fname">First Initial:
                    <input className='input' type="text" id="fInitial" name="fInitial" value={firstInitial}>
                    </input>
                </label>
                <label className="labels" for="lname">Last Name:
                    <input className='input' type="text" id="lname" name="lname" value={lastName}>
                    </input>
                </label>
            </Form>
        </div>
    )
}