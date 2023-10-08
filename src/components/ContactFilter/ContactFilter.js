import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterInput, FilterText } from './ContactFilter.styled';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        value={filter}
        onChange={evt => {
          dispatch(setFilter(evt.target.value));
        }}
      />
    </>
  );
};
