import { useForm, Controller, useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';
import { StyledForm, StyledLabel, StyledField } from './Filter.styled';

const FilterForm = ({ label, onChange }) => {
  const { control } = useForm();

  const filterValue = useWatch({
    control,
    name: 'filter',
    defaultValue: '',
  });

  return (
    <StyledForm>
      <StyledLabel htmlFor="filter">{label}</StyledLabel>
      <Controller
        control={control}
        name="filter"
        value={filterValue}
        render={({ field }) => (
          <StyledField
            type="text"
            id="filter"
            value={field.value}
            onChange={onChange}
          />
        )}
      />
    </StyledForm>
  );
};

FilterForm.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterForm;
