import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { filterByCode } from '../redux/country/FetchCountry';
import { get } from '../redux/country/CountryInfoSlice';

const Countryinfo = () => {
  const { countryFiltered, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    if (code) {
      dispatch(filterByCode(code.toLowerCase()));
    }

    if (error) {
      dispatch(error);
    }
    return () => {
      dispatch(get());
    };
  }, [dispatch, code, error]);
  return (
    <div>
      <div>
        <BsArrowRightCircle />
      </div>
      {countryFiltered.length > 0 ? (
        <>
          <div className="info-container">
            <img
              src={countryFiltered[0].coatOfArms.png}
              alt={countryFiltered[0].coatOfArms.alt}
              className="info-image"
            />
            <p>{countryFiltered[0].name.common}</p>
          </div>
          <div className="country-data">
            <h1>
              <span>{countryFiltered[0].name.official}</span>
            </h1>
            <ul className="data">
              <li>
                <p>
                  Population:
                  {' '}
                  <span>
                    {countryFiltered[0].population}
                    {' '}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Time zone:
                  {' '}
                  <span>
                    {countryFiltered[0].timezones}
                    {' '}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Capital:
                  {' '}
                  <span>
                    {countryFiltered[0].capital}
                    {' '}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Languages:
                  {' '}
                  <span>
                    {Object.values(countryFiltered[0].languages)
                      .map((item) => item)
                      .join(',')}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Currency:
                  {' '}
                  <span>
                    {countryFiltered[0].currency}
                    {' '}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Subregion:
                  {' '}
                  <span>
                    {countryFiltered[0].subregion}
                    {' '}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Latitute:
                  {' '}
                  <span>
                    {countryFiltered[0].latitute}
                    {' '}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Longitude:
                  {' '}
                  <span>
                    {countryFiltered[0].longitude}
                    {' '}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Countryinfo;
