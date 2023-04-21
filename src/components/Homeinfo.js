import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import {
  oceaniaCountries,
  filterByCapital,
} from '../redux/country/FetchCountry';

const HomeInfo = () => {
  const dispatch = useDispatch();
  const {
    Data, success, error, loading, oceania, FilterTerm,
  } = useSelector(
    (state) => state.country,
  );
  useEffect(() => {
    dispatch(oceaniaCountries());
    if (oceania) {
      dispatch(filterByCapital(oceania));
    }
    if (error) {
      dispatch(error);
    }
  }, [dispatch, error, success, oceania]);
  const data = Data.filter((item) => item.name.common.toLowerCase().includes(FilterTerm));
  return (
    <div className="homeinfo-container">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        data.length > 0
        && data.map((item) => (
          <Link
            className="homeinfo-card"
            key={item.name.common}
            to={`/${item.cioc}`}
          >
            <div className="next-info">
              <h3>
                {item.name.common}
                {' '}
              </h3>
              <p className="next">
                <BsFillArrowRightCircleFill className="next-icon" />
              </p>
            </div>
            <div className="flag-content">
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="flag-image"
              />
              <div className="homeinfo-content">
                <p className="flag-text">
                  {' '}
                  <span>{item.population}</span>
                </p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default HomeInfo;
