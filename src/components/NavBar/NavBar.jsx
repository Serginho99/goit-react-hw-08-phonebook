import { selectorIsLoggedIn } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import NavAuth from './NavAuth';
import { Logo, Nav, NavList, LogoMenu } from './NavBar.styled';
import { FaBlenderPhone } from 'react-icons/fa';

export default function NavBar() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <>
      <Nav>
        <LogoMenu to="/">
          <FaBlenderPhone />
        </LogoMenu>{' '}
        <Logo to="/">
          <FaBlenderPhone />
          PhoneBook
        </Logo>{' '}
        {isLoggedIn && <NavList to="contacts">Contacts</NavList>}
        {!isLoggedIn ? <NavAuth /> : <UserMenu />}
      </Nav>
    </>
  );
}
