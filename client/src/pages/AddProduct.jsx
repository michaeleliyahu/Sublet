import { AddAPhotoOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

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
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const WrapBox = styled.div`

`

const Option = styled.option``;
const AddProduct = () => {
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
                            <Input/>
                        </FillTextTitle>
                    </TitleBox>
                    <DescBox>
                        <Title>Description</Title>
                        <FillTextDesc>
                            <Input/>
                        </FillTextDesc> 
                    </DescBox>
                </WrapBox>
                <Filter>
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
                    <Select>
                        <Option disabled>
                            sublet/rent
                        </Option>
                        <Option>sublet</Option>
                        <Option>rent</Option>
                        <Option>all</Option>
                    </Select>
                    <Select>
                        <Option disabled>
                        inStock
                        </Option>
                        <Option>Yes</Option>
                        <Option>No</Option>
                    </Select>
                </Filter>
            </Wrapper>
        <Newsletter/>
    </Container>
  )
}

export default AddProduct