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
  // const data = Array.isArray(Data)
  //   ? Data.filter((item) => item.name.common.toLowerCase().includes(FilterTerm))
  //   : [];
  // console.log(Data);
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
            <p className="next">
              <BsFillArrowRightCircleFill className="next-icon" />
            </p>
            <img src={item.flags.png} alt={item.flags.alt} className="-image" />
            <div className="homeinfo-content">
              <h3>
                {item.name.common}
                {' '}
              </h3>
              <p>
                {' '}
                <span>{item.population}</span>
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default HomeInfo;
