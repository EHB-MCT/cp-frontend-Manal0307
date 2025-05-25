function GenreFilter({ value, onChange }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="All">Alle genres</option>
      <option value="avontuur">Avontuur</option>
      <option value="fantasie">Fantasie</option>
      <option value="klassiek">Klassiek</option>
      <option value="horror">Horror</option>
      <option value="mythologie">Mythologie</option>
      <option value="dierenverhaal">Dierenverhaal</option>
      <option value="romantiek">Romantiek</option>
    </select>
  );
}

export default GenreFilter;
