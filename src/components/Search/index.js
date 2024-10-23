import { useSearch } from "@tanstack/react-router";

function SearchPage() {
  const search = useSearch();
  const productName = search.name;

  return (
    <div>
      <h1>Search Results</h1>
      <p>Results for: {productName}</p>
      {/* Add code to fetch and display matching products */}
    </div>
  );
}

export default SearchPage;
