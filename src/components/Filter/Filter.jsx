import PropTypes from "prop-types";
import FilterStyled from "./Filter.styled";

function Filter ({onChange}) {
    return (
      <FilterStyled>
        <label>Find contacts by name</label>
        <input type="text" onChange={onChange} />
      </FilterStyled>
    );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
