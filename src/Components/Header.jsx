import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


export default function Header() {
  const [burberStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href='/'>
        <img src="./images/logo.svg" alt="logo"/>
      </a>

      <Menu>
        {cars && cars.map((car, index) =>(
          <a href="/" key={index}>{car}</a>
        ))}
      </Menu>

      <RightMenu>
        <a href='/'>Shop</a>
        <a href='/'>Account</a>
        <button onClick={() =>setBurgerStatus(true)}>Menu</button>
      </RightMenu>

      <BrugerNav show={burberStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)} />
        {cars && cars.map((car, index) =>(
          <li><a href="/" key={index}>{car}</a></li>
        ))}
        <li><a href="/">Exisiting Inventory</a></li>
        <li><a href="/">Used Inventory</a></li>
        <li><a href="/">Trade-in</a></li>
        <li><a href="/">Cybertruck</a></li>
        <li><a href="/">Roadaster</a></li>
      </BrugerNav>

    </Container>
  )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: rgb(255 255 255 / 68%);
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    margin-right: 10px;
  }
  button{
    font-weight: 600;
    margin-right: 10px;
    border: none;
    outline: none;
    background: transparent;
  }
`
const BrugerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 99999;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .5s;

  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, .2);

    a{
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  font-size: 1rem;
  display: flex;
  width: 199%;
  cursor: pointer;
`