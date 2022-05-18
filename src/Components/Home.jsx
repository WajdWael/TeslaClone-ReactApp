import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Ordere Online for Tocuchless Delivery"
        backgroundImage="/images/model-s.jpg"
        leftBtn="Custom Order"
        rightBtn="Exisiting Inventory"
        />
        
      <Section
        title="Model Y"
        description="Ordere Online for Tocuchless Delivery"
        backgroundImage="/images/model-y.jpg"
        leftBtn="Custom Order"
        rightBtn="Exisiting Inventory"
      />
      <Section
        title="Model 3"
        description="Ordere Online for Tocuchless Delivery"
        backgroundImage="/images/model-3.jpg"
        leftBtn="Custom Order"
        rightBtn="Exisiting Inventory"
      />
      <Section
        title="Model X"
        description="Ordere Online for Tocuchless Delivery"
        backgroundImage="/images/model-x.jpg"
        leftBtn="Custom Order"
        rightBtn="Exisiting Inventory"
      />

      <Section
        title="Money-back guarantee"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="/images/solar-panel.jpg"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />

      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="/images/solar-roof.jpg"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImage="/images/accessories.jpg"
        leftBtn="Shop Now"
        rightBtn=""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`