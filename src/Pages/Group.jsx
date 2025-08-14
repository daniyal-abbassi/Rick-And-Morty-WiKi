const Group = ({ total, name, setId, data }) => {
  return (
    <div className="input-group">
      <select
        name={name}
        className="form-select"
        onChange={(e) => setId(e.target.value)}
      >
        <option value="1" selected>
          ...Choose
        </option>
        {[...Array(total).keys()].map((index,link) => {
          return (
            <option key={link} value={link + 1}>
              {name} - {link + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Group;
