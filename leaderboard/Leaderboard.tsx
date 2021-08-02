import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fonts } from '../../assets/styles';

import { Header } from '../../components/header/Header';

import { UserProfileIcon, ReturnArrowIcon } from '../../components/Icons';
import { UserScoreItem } from '../../components/Leaderboard/UserScoreItem';
import { GlobalRoutes } from '../../constants';
import { FooterContainer } from '../footer/FooterContainer';
import {
    getLeaderboard,
    ILeaderboardItem
} from '../../state/user/RequestUserData';
import { GlobalContext } from '../providers/GlobalContextProvider';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ScoreBoardView = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    margin-bottom: 1rem;
`;

const LeaderboardHeader = styled(Header)`
    color: ${colors.alto};
    import createHistory from 'history/createBrowserHistory' & a {
        display: flex;
        align-items: center;
        color: ${colors.alto};
    }
`;

const Title = styled.h2`
    font-family: ${fonts.greycliff};
    font-weight: bold;
`;

const Leaderboard: React.FC = () => {
    const { user } = React.useContext(GlobalContext);
    const [leaderboard, setLeaderboard] = useState([]);

    const fetchLeaderboard = async () => {
        const leaderboardResponse = await getLeaderboard();
        setLeaderboard(leaderboardResponse.response as ILeaderboardItem[]);
    };

    React.useEffect(() => {
        void fetchLeaderboard();
    }, []);

    return (
        <Container>
            <LeaderboardHeader>
                <Link to={GlobalRoutes.HOME}>
                    <ReturnArrowIcon />
                </Link>
                <Title>Poengtavle</Title>
                <Link to={GlobalRoutes.PROFILE}>
                    <UserProfileIcon />
                </Link>
            </LeaderboardHeader>
            {leaderboard && (
                <ScoreBoardView>
                    {leaderboard.map((userMap, index) => (
                        <UserScoreItem
                            key={userMap.username}
                            userName={userMap.username}
                            userScore={userMap.totalScore}
                            userRank={index + 1}
                            isActive={
                                userMap.username === user.name ||
                                userMap.username === user.userName
                            }
                        />
                    ))}
                </ScoreBoardView>
            )}
            <FooterContainer
                bgColor={colors.maze}
                logoColor={colors.alto}
                borderColor={colors.musli}
            />
        </Container>
    );
};

export { Leaderboard };
