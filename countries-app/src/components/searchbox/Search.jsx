export default function Search({ handleSearch }) {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="block w-4/12 py-4 pl-10 rounded-md border-0  text-gray-900  placeholder:text-gray-400 shadow-sm"
      placeholder="Search for a country ..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
