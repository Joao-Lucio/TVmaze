import React from 'react';
import {render} from '@testing-library/react-native';
import { SeasonModal } from '../SeasonModal';

describe('SeasonModal', ()=>{
  it('the component rendered', ()=>{
    render(<SeasonModal onSelectSeason={season => {console.log(season);}} selectedSeason='1' seasons={['1','2','3']}/>)
  })
})