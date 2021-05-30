import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const ChatHeader = () => {
    return (
        <ChatHeaderContainer>
            {/* Chat header left */}
            <ChatHeaderLeft>
                <ChatHeaderAvatar
                // add onclick
                />
                <AccessTimeIcon />
            </ChatHeaderLeft>

            {/* Chat header search */}
            <ChatHeaderSearch>
                <SearchIcon />
                <input placeholder="Search Channel" />
            </ChatHeaderSearch>

            {/* Chat header right */}
            <ChatHeaderRight>
                <HelpOutlineIcon />
            </ChatHeaderRight>

        </ChatHeaderContainer>
    );
};

export default ChatHeader;

const ChatHeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--hello-color);
    color: white;
`;

const ChatHeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const ChatHeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const ChatHeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #1fc8d1;
    text-align: center;
    display: flex;
    padding: 0 50px;
    border: 2px solid white;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const ChatHeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;