import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://images.uncyc.org/pt/thumb/2/29/Mr-bean-avatar.jpg/250px-Mr-bean-avatar.jpg" alt="avatar"/>
      Isaque Prestes
    </User>
  </Container>
);

export default Header;
