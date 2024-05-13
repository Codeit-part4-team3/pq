import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SignHeaderProps {
  children?: ReactNode;
}

export default function SignHeader({ children }: SignHeaderProps) {
  return (
    <Header>
      <Link to='/'>
        <Logo src='/images/landing.webp' alt='pq 메인 로고' />
      </Link>
      {children}
    </Header>
  );
}

const Header = styled.h1`
  font-size: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  padding: 8px 12px;

  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);

  font-style: normal;
`;
