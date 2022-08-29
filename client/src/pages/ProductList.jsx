import {AddBoxOutlined } from '@material-ui/icons';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const AddProdect = styled.div`
align-items: center;
display: flex;
justify-content: center;
height: 200px;
font-size: 14px;
`;
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    return (    
    <Container>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled>
                        Room number
                    </Option>
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                </Select>
                <Select>
                    <Option disabled>
                        Garden
                    </Option>
                    <Option>Yes</Option>
                    <Option>No</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disabled>
                         Newest
                    </Option>
                    <Option>Price</Option>
                    <Option>proce2</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat}/>
        <Link to={`/AddProdect`}>
            <AddProdect>
                <AddBoxOutlined/>
            </AddProdect>
        </Link>
        <Newsletter/>
    </Container>
  )
}

export default ProductList