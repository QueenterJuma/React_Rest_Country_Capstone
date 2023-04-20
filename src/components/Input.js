import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { getFilterTerm } from '../redux/country/CountryInfoSlice';

const Input = () => {
  const { FilterTerm } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const handleValueChange = (event) => {
    dispatch(getFilterTerm(event.target.value.toLowerCase()));
  };
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={FilterTerm}
        onChange={handleValueChange}
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default Input;
