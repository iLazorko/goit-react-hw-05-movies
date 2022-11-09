export const SearchForm = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="searchValue" placeholder="Enter movie name" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
