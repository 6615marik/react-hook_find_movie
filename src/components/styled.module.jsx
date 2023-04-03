import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Form = styled.form`
  margin-top: 20px;
`;
export const Button = styled.button`
  margin: 10px;
  padding: 12px;
  background-color: hotpink;
  /* font-size: 24px; */
  border-radius: 4px;
  color: darkblue;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
export const Input = styled.input`
  padding: 12px;
  background-color: #fda6d1;
  /* font-size: 24px; */
  border-radius: 4px;
  color: darkblue;
  font-weight: bold;
  margin-right: 20px;
`;
export const Nav = styled.nav`
  padding: 32px;
  display: flex;
  text-decoration: none;
  gap: 20px;
  background-color: hotpink;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const LInk = styled(Link)`
  text-decoration: none;
  color: darkblue;
  font-size: 15px;
  font-weight: bold;
  a:hover {
    color: #040110;
  }
`;
export const Li = styled.li`
  text-decoration: none;
`;
