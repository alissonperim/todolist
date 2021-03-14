import styled from 'styled-components';

export const Container = styled(props => (
    <div {...props} />
))`
    width: 100%;
    padding: 20px;

    ${props => (`
        position: ${props.position || 'relative'};
        top: ${props.top || 'inherit'};
     `)}
`;