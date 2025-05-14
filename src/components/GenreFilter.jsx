function GenreFilter({ value, onChange }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="All">Alle genres</option>
      <option value="Adventure">Avontuur</option>
      <option value="Fantasy">Fantasie</option>
      <option value="Classic">Klassiek</option>
    </select>
  );
}

export default GenreFilter;
