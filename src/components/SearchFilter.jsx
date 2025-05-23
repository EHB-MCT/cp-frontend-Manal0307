function SearchFilter({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Zoek op titel..."
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default SearchFilter;
