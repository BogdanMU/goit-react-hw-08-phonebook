import { useDispatch } from 'react-redux';
import { createFilter } from 'redux/filterSlice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const onFilterInput = event => {
    const { value } = event.target;
    console.log(value);
    dispatch(createFilter(value));
  };

  return (
    <label htmlFor="filter">
      Find contacts by name
      <input type="text" name="filter" id="filter" onChange={onFilterInput} />
    </label>
  );
};
