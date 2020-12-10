import PropTypes from "prop-types";

function Filter({ filter, onChange }) {
  return (
    <label>
      Find Contacts by name
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Enter name for search"
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
