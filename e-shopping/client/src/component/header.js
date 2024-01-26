import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../index.css';
import { useCart } from './cartContext';

const HeaderContainer = styled.header`
  align-items: center;
`;
const Icon = styled.img`
  display:inline;
`
const Logo = styled.img`
  width: 100px; 
  margin-right: 20px;  
`;

const NavContainer = styled.nav`
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 9px 22px;
  font-size: 16px;
  border: 2px solid #000000;
  color: #000000;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
    &:hover {
    background-color: #000000;
    color: #ffffff;
`;
const HeaderTitle = styled.div`
  background:#000000;

`
const Title = styled.div`
  color:#ffffff;
  text-align:center;
  font-size:30px;
  text-transform:uppercase;
  padding:12px;
  font-weight: 800;
`
const CartCount = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 2px;
  display: inline;
  border-radius: 100%;
  margin-left: 6px;
`
const Header = ()=> {
  const {cartItems}  = useCart()
  return (
    <HeaderContainer>
      <NavContainer>
        <LeftContainer>
          <Link to="/">
            <Logo src="./img/logo.png" alt="logo" />
          </Link>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                Content
              </Link>
            </li>
          </ul>
        </LeftContainer>
        <Link to='/cart'>
          <Button><Icon src='./img/icon1.png' alt='icon1'/> Cart  
          {<CartCount>{cartItems.length}</CartCount>}
          </Button>
        </Link>
      </NavContainer>
      <HeaderTitle>
        <Title>Shopping on this site</Title>
      </HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;

