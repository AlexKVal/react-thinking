var data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div className="filterableProductTable">
        <SearchBar />
        ProductTable
      </div>
    );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <div className="searchBar">
        <form>
          <input type="text" placeholder="Search..." />
          <div className="roundedOne">
            <input type="checkbox" value="None" id="roundedOne" name="check" />
            <label htmlFor="roundedOne">Only show products in stock</label>
          </div>
        </form>
      </div>
    );
  }
});

React.render(
  <FilterableProductTable />,
  document.getElementById('content')
);
