import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create';
import { Add, Apps, BookmarkBorderOutlined, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import ChatSideBarOptions from './ChatSideBarOptions';
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const ChatSideBar = () => {
    
    const [user] = useAuthState(auth);
    const [channels, loading, error] = useCollection(db.collection("rooms"))

    return (
        <ChatSideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Hello {user.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        hello!
                    </h3>
                </SideBarInfo>
                <CreateIcon />
            </SideBarHeader>

            <ChatSideBarOptions Icon={InsertComment} title="Threads" />
            <ChatSideBarOptions Icon={Inbox} title="Mentions & reactions" />
            <ChatSideBarOptions Icon={Drafts} title="Saved items" />
            <ChatSideBarOptions Icon={BookmarkBorderOutlined} title="Channel browser" />
            <ChatSideBarOptions Icon={PeopleAlt} title="People & user groups" />
            <ChatSideBarOptions Icon={Apps} title="Apps" />
            <ChatSideBarOptions Icon={FileCopy} title="File browser" />
            <ChatSideBarOptions Icon={ExpandLess} title="Show less" />

            <hr />

            <ChatSideBarOptions Icon={ExpandMore} title="Channels"/>

            <hr />
            <ChatSideBarOptions Icon={Add} addChannelOption title="Add Channel"/>

            {channels?.docs.map(doc => (
                <ChatSideBarOptions key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </ChatSideBarContainer>
    );
};

export default ChatSideBar;

const ChatSideBarContainer = styled.div`
    color: black;
    background-color: var(--hello-color);
    flex: 0.3;
    border-top: 1px solid var(--hello-color);
    max-width: 260px;
    margin-top: 60px;
    overflow-y: scroll;

    >hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid white;
    }
`;

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid var(--hello-color) !important;
    padding-bottom: 10px;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: var(--hello-color);
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SideBarInfo = styled.div`
    flex: 1;

    >h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: lightgreen;
    }
`;