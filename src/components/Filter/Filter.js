import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return (
    <label>
      Find Contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
