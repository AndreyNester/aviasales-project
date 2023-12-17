function Checkbox(props) {
  const { id, description, selected } = props;
  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} checked={selected} />
      <span className="cusomCheckbox"> </span>
      <span>{description}</span>
    </label>
  );
}

export default Checkbox;
