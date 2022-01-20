import React from 'react';

import styled from 'styled-components';

import WeatherImage from '../weather/WeatherImage';
import LocationInput from './LocationInput';
import LocationButton from './LocationButton';
import Title from '../../components/Title';

const ImageWrap = styled.div`
  margin-bottom: 1.5rem;
`;

const ButtonGrid = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  & > * {
    margin-bottom: 2rem;
  }
`;

const GridItem = styled.div`
  flex: 1 1 200px;
  position: relative;
`;

const LocationPage = () => (
  <>
    <Title>React Weather App</Title>
    <ImageWrap>
      <WeatherImage />
    </ImageWrap>
    <ButtonGrid>
      <GridItem>
        <LocationButton />
      </GridItem>
      <GridItem>
        <LocationInput />
      </GridItem>
    </ButtonGrid>
  </>
);

export default LocationPage;
