import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeftCircle } from 'react-icons/bs';
// import { Path } from 'three';
import { filterByCode } from '../redux/country/FetchCountry';

const Countryinfo = () => {
  const { countryFiltered } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { code } = useParams();
  // const navigate = useNavigate;
  useEffect(() => {
    if (code) {
      dispatch(filterByCode(code.toLowerCase()));
    }
  }, [dispatch, code]);

  // const handleClick = () => {
  //   navigate('/');
  //   Path.reload();
  // };
  return (
    <div>
      <div>
        {/* onClick={handleClick} */}
        <BsArrowLeftCircle className="back-icon" />
      </div>
      {countryFiltered.length > 0 ? (
        <>
          <div className="content1 spi">
            <div className="box-img1">
              <img
                src={countryFiltered[0].coatOfArms.png}
                alt={countryFiltered[0].coatOfArms.alt}
                className="info-image"
              />
            </div>
            <p className="banner-text">{countryFiltered[0].name.common}</p>
          </div>
          <div className="country-data">
            {/* <h1>
              <span>{countryFiltered[0].name.official}</span>
            </h1> */}
            <ul>
              <li>
                <div className="val">
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
                <div className="val">
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
                <div className="val">
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
                <div className="val">
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
                <div className="val">
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
