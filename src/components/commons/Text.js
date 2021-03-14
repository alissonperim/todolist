import styled from 'styled-components'

export const Tipografia = styled((props)=> (
    <props.tag class={props.className}>{props.children}</props.tag>
))`
    font-size: ${props => props.size || '18px'};
    font-weight: ${props => props.weight || 'normal'};
`