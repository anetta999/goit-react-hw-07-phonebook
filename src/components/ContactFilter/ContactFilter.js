import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterInput, FilterText } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        onChange={evt => {
          dispatch(setFilter(evt.target.value));
        }}
      />
    </>
  );
};
