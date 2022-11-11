import { useDispatch, useSelector } from 'react-redux';
import { selectorUserName } from 'redux/auth/authSelector';
import authOperations from 'redux/auth/authOperations';
import { Wrapper, Text } from './UserMenu.styled';
import Button from '@mui/material/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectorUserName);
  return (
    <>
      <Wrapper>
        <Text>Hello, {name}</Text>
        <Button
          onClick={() => dispatch(authOperations.logOut())}
          variant="outlined"
          style={{
            color: 'white',
            borderColor: 'white',
          }}
        >
          log out
        </Button>
      </Wrapper>
    </>
  );
}