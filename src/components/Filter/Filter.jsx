import {
  CenterContainer,
  ContFilter,
  FilterInput,
  FilterPlaceholder,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectModalIsOpen } from 'redux/contacts/selectors';

const Filter = () => {
  const modal = useSelector(selectModalIsOpen);
  const dispatch = useDispatch();

  const handeChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    !modal && (
      <CenterContainer>
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
    )
  );
};

export default Filter;
