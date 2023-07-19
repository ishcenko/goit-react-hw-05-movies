import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const MovieItem = styled.li`
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;  
  margin-left: auto;
  margin-right: auto;
  width: calc((100% - 120px) / 5);
`;

export const LinkStyled = styled(Link)`
color: black;
`;
export const Image = styled.img`
height: 400px;
margin: 0 auto;
`;
export const Title = styled.h3`
width: 260px;
text-wrap: wrap;
text-align: center;
margin: 0 auto;
`;