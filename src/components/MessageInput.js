import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const MessageInput = ({channelName, channelID, chatRef}) => {

    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault(); // to prevent refreshing

        if (!channelID) {
            return false;
        }

        db.collection('rooms').doc(channelID).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");
    }

    return (
        <MessageInputContainer>
            <form>
                <input onChange={e => setInput(e.target.value)} value={input} placeholder={`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </MessageInputContainer>
    );
};

export default MessageInput;

const MessageInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;