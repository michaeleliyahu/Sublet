import React from 'react'
import styled from "styled-components"; 
import { FavoriteOutlined, Search } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
//fill box
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  `;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left> 
                <Language>left</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{ color: "gray", fontSize: 16 }}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    MICHAEL
                </Logo>
            </Center>
            <Right>
                <Link to={`/Register`}>
                  <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link to={`/Login`}>
                  <MenuItem>LOGIN</MenuItem>
                </Link>
                <Link to={`WishList`}>
                  <MenuItem>
                      <Badge badgeContent={4} color="primary">
                        <FavoriteOutlined />
                      </Badge>
                  </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar