import { AddAPhotoOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { addProduct } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    height: 600px;
    align-items: center;
    
`
const AddPhoto = styled.div`
    margin-left: 40px;
    height: 450px;
    width: 450px;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    border: none;
    width: 95%;
    height: 90%;
`;
const FillTextTitle = styled.div`
    height: 100px;
    width: 400px;
    border: 1px solid lightgray;
`
const FillTextDesc = styled.div`
    height: 200px;
    width: 400px;
    border: 1px solid lightgray;
`
const FillTextPrice = styled.div`
    height: 50px;
    width: 200px;
    border: 1px solid lightgray;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`
const TitleBox = styled.div`
    margin: 40px;
`  
const DescBox = styled.div`
    margin: 40px;
`  
const Filter = styled.div`
    padding: 15px;
`;

const Select = styled.select`
    margin: 40px;
    display: flex;  
    padding: 10px;
    width: 50;
    
`;
const WrapBox = styled.div`

`
const Button = styled.button`
    height: 50px;
    width: 50;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;
const Option = styled.option``;
const AddProduct = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [categories, setCategories] = useState("")
    const [size, setSize] = useState("")
    const [price, setPrice] = useState("")
    const {isFetching, error} = useSelector((state) => state.newProduct);

    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault()
        addProduct(dispatch, {title,desc,categories,size,price});
    };
  return (
    <Container>
        <Navbar/>
            <Wrapper>
                <AddPhoto>
                    <AddAPhotoOutlined/>
                </AddPhoto>
                <WrapBox>
                    <TitleBox>                   
                        <Title>Title</Title>
                        <FillTextTitle>
                            <Input
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FillTextTitle>
                    </TitleBox>
                    <DescBox>
                        <Title>Description</Title>
                        <FillTextDesc>
                            <Input
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </FillTextDesc> 
                    </DescBox>
                </WrapBox>
                <Filter>
                    <Select onChange={(e) => setSize(e.target.value)}>
                        <Option disabled selected>Room Number</Option>
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                        <Option>4</Option>
                    </Select>
                    <Select >
                        <Option disabled selected>Garden</Option>
                        <Option>Yes</Option>
                        <Option>No</Option>
                    </Select>
                    <Select onChange={(e) => setCategories(e.target.value)}>
                        <Option disabled selected>Category</Option>
                        <Option>Sublet</Option>
                        <Option>Rent</Option>
                        <Option>All</Option>
                    </Select>
                    <Select >
                        <Option disabled selected>In stock</Option>
                        <Option>Yes</Option>
                        <Option>No</Option>
                    </Select>
                </Filter>
                <TitleBox>                   
                        <Title>Price</Title>
                        <FillTextPrice>
                            <Input
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </FillTextPrice>
                </TitleBox>
                <Button onClick={handleClick} dispatch={isFetching}>CREATE</Button>
                {isFetching?
                (<Navigate replace to={`/products/${categories}`}/>)
                :
                (error && <Error>Something went wrong...</Error>)

                }
            </Wrapper>
        <Newsletter/>
    </Container>
  )
}

export default AddProduct