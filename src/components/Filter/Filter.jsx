import {
  CenterContainer,
  FilterTitile,
  ContFilter,
  FilterInput,
  FilterPlaceholder,
} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handeChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <CenterContainer>
      <FilterTitile>Contacts</FilterTitile>
      <ContFilter>
        <FilterInput
          placeholder=" "
          type="text"
          name="filter"
          onChange={handeChangeFilter}
        />
        <FilterPlaceholder htmlFor="filter">Find contact</FilterPlaceholder>
      </ContFilter>
    </CenterContainer>
  );
};

export default Filter;
