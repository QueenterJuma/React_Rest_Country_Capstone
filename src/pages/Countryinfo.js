import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeftCircle } from 'react-icons/bs';
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
      <NavLink to="/">
        <BsArrowLeftCircle className="back-icon" />
      </NavLink>
      {countryFiltered.length > 0 ? (
        <>
          <div className="content1 spi">
            <div className="box-img1">
              <img
                src={countryFiltered[0].coatOfArms.png}
                alt={countryFiltered[0].coatOfArms.alt}
                className="info-image spiner"
              />
            </div>
            <p className="banner-text">{countryFiltered[0].name.common}</p>
          </div>
          <div className="country-data">
            <ul>
              <li>
                <div className="val flex">
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
              <li className="new-Color">
                <div className="val flex">
                  Time zone:
                  {' '}
                  <p>
                    {countryFiltered[0].timezones && (
                      <span>{countryFiltered[0].timezones}</span>
                    )}
                    {' '}
                  </p>
                </div>
              </li>
              <li>
                <div className="val flex">
                  Capital:
                  {' '}
                  <p>
                    {countryFiltered[0].capital && (
                      <span>{countryFiltered[0].capital}</span>
                    )}
                  </p>
                </div>
              </li>
              <li className="new-Color">
                <div className="val flex">
                  Languages:
                  {' '}
                  <p>
                    {Object.values(countryFiltered[0].languages)
                      .map((item) => item)
                      .join(',')}
                  </p>
                </div>
              </li>
              <li>
                <div className="val flex">
                  Subregion:
                  {' '}
                  <p>
                    {countryFiltered[0].subregion && (
                      <span>{countryFiltered[0].subregion}</span>
                    )}
                  </p>
                </div>
              </li>
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
