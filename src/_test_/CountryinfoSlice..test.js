import { reducer} from '../../redux/Country/CountryInfoSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    countryFiltered: [],
    isLoading: false,
  });
});
