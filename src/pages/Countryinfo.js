import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { filterByCode } from '../redux/country/FetchCountry';

const Countryinfo = () => {
  const { countryFiltered } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect(() => {
    if (code) {
      dispatch(filterByCode(code.toLowerCase()));
    }
  }, [dispatch, code]);
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
                <div>
                  Population:
                  {' '}
                  <p>
                    {countryFiltered[0].population && (
                      <span>{countryFiltered[0].population}</span>
                    )}
                    {' '}
                  </p>
                </div>
              </li>
              <li>
                <div>
                  Time zone:
                  {' '}
                  <p>
                    {countryFiltered[0].timezones && (
                      <span>{countryFiltered[0].timezones}</span>
                    )}
                    {/* {countryFiltered[0].timezones} */}
                    {' '}
                  </p>
                </div>
              </li>
              <li>
                <div>
                  Capital:
                  {' '}
                  <p>
                    {/* {countryFiltered[0].capital} */}
                    {countryFiltered[0].capital && (
                      <span>{countryFiltered[0].capital}</span>
                    )}
                  </p>
                </div>
              </li>
              <li>
                <div>
                  Languages:
                  {' '}
                  <p>
                    {Object.values(countryFiltered[0].languages)
                      .map((item) => item)
                      .join(',')}
                  </p>
                </div>
              </li>
              {/* <li>
                <p>
                  Currency: <p>{countryFiltered[0].currency} </p>
                </p>
              </li> */}
              <li>
                <div>
                  Subregion:
                  {' '}
                  <p>
                    {/* {countryFiltered[0].subregion} */}
                    {countryFiltered[0].subregion && (
                      <span>{countryFiltered[0].subregion}</span>
                    )}
                  </p>
                </div>
              </li>
              {/* <li>
                <p>
                  Latitute: <p>{countryFiltered[0].latitute} </p>
                </p>
              </li>
              <li>
                <p>
                  Longitude: <span>{countryFiltered[0].longitude} </span>
                </p>
              </li> */}
            </ul>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Countryinfo;
