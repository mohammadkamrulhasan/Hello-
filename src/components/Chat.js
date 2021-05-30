import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomID } from '../features/appSlice';
import MessageInput from './MessageInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';

const Chat = () => {
    const chatRef = useRef(null);
    const roomID = useSelector(selectRoomID);

    const [roomDetails] = useDocument(
        roomID && db.collection("rooms").doc(roomID)
    );
    const [roomMessages, loading] = useCollection(
        roomID &&
        db
            .collection("rooms")
            .doc(roomID)
            .collection("messages")
            .orderBy("timestamp", "asc")
    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomID, loading])

    return (
        <ChatContainer>
            {roomID && roomMessages && (
                <>
                    <Header>
                        <HeaderLeft>
                            <h4><strong>#{roomDetails?.data().name}</strong></h4>
                            <StarBorderOutlined />
                        </HeaderLeft>
                        <HeaderRight>
                            <p>
                                <InfoOutlined /> Details
                            </p>
                        </HeaderRight>
                    </Header>

                    <Messages>
                        {roomMessages?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();

                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            )
                        })}
                        <ChatFooter ref={chatRef} />
                    </Messages>

                    <MessageInput
                        chatRef={chatRef}
                        channelName={roomDetails?.data().name}
                        channelID={roomID}
                    ></MessageInput>
                </>
            )}

        </ChatContainer>
    );
};

export default Chat;

const ChatFooter = styled.div`
    padding-bottom: 200px;
`;

const Messages = styled.div``;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    >h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    >h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 10px;
    }
`;
const HeaderRight = styled.div`
    >p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    >p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;