import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserProfileIcon, LeaderboardIcon } from '../../components/Icons';
import { colors, fonts } from '../../assets/styles';
import { GlobalRoutes } from '../../constants';
import { WrapperNavbar, TitleBar } from './GoBackNavbar';

const baseZIndex = 500;

const MapNavWrapper = styled(WrapperNavbar)`
    z-index: ${baseZIndex};
    background-color: ${colors.ziggurat};
    border-radius: 0.6em;
    box-shadow: 0 0 8px rgb(27 26 35 / 40%);
    pointer-events: all;
    color: ${colors.alto};
    margin: 4% 3% 0 3%;
`;
const MapNavTitleBar = styled(TitleBar)`
    background-color: ${colors.zirkon};
    border-radius: 0.6em;
    padding: 0 4%;
`;
const Title = styled.h1`
    font-family: ${fonts.greycliff};
    font-weight: bold;
    color: ${colors.alto};
    font-size: 1.5em;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & a {
        color: ${colors.alto};
        display: flex;
        align-items: center;
    }
    & a:first-child {
        margin-right: 1rem;
    }
`;

const MapNavbar: React.FC = () => {
    return (
        <MapNavWrapper>
            <MapNavTitleBar>
                <Title>QuizRunden</Title>
                <IconWrapper>
                    <Link to={'/leaderboard#'}>
                        <LeaderboardIcon />
                    </Link>
                    <Link to={GlobalRoutes.PROFILE}>
                        <UserProfileIcon />
                    </Link>
                </IconWrapper>
            </MapNavTitleBar>
        </MapNavWrapper>
    );
};

export { MapNavbar };
