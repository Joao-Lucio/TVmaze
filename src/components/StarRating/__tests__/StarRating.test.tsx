import React from 'react';
import {render} from '@testing-library/react-native';
import { StarRating } from '../StarRating';

describe('StarRating',()=>{
  describe('rating was passed',()=>{
    it('show the average',()=>{
      const {getByText} = render(<StarRating rating={{average: 7}}/>);
      // debug();
      expect(getByText('7')).toBeTruthy();
    });
    it('show the starIcon',()=>{
      const {getByTestId} = render(<StarRating rating={{average: 7}}/>);
      // debug();
      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('rating was NOT passing',()=>{
    it('return nothing', ()=>{
      const {UNSAFE_root} = render(<StarRating />);

      expect(UNSAFE_root.children.length).toEqual(0);
    })
  });
});