import * as React from 'react';
import styled from 'styled-components';

import { colors } from '../../assets/styles';

export interface IUserScoreItemProps {
    userName: string;
    userScore: number;
    userRank: number;
    isActive: boolean;
}

const Wrapper = styled.div<{ isActive: boolean }>`
    background-color: ${props =>
        props.isActive ? colors.bossanova : colors.alto};
    color: ${props => (props.isActive ? colors.alto : colors.bossanova)};
    border: 1px solid ${props =>
        props.isActive ? colors.bossanova : colors.bossanova};
    border-radius: 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    padding: 0.5rem 1.5rem;
    border-radius: 1rembackgroundColor: colors.bossanova,
    borderColor: colors.bossanova,
    textColor: colors.alto;
    margin: 0.3rem 0;
`;

const Text = styled.p`
    margin: 0;o
    display: inline-block;
    float: left
`;

const TextWithPadding = styled(Text)`
    padding-right: 1rem;
`;

const UserScoreItem: React.FC<IUserScoreItemProps> = props => {
    React.useEffect(() => {
        if (props.isActive) {
            location.href = 'leaderboard#myscore';
        }
    }, []);
    return (
        <Wrapper isActive={props.isActive}>
            <div>
                <TextWithPadding>{props.userRank}.</TextWithPadding>
                <Text>{props.userName}</Text>
            </div>
            <Text id={props.isActive ? 'myscore' : 'scoretext'}>
                {props.userScore}p
            </Text>
        </Wrapper>
    );
};

export { UserScoreItem };
