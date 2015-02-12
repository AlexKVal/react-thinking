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
        <ProductTable products={this.props.products} />
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

var ProductTable = React.createClass({
  render: function() {
    return (
      <div className="productTable">
        <span>Name Price</span>
        <ProductCategoryRow />
        <ProductRow />
      </div>
    );
  }
});

var ProductCategoryRow = React.createClass({
  render: function() {
    return (
      <div className="productCategoryRow">
        <span>Sporting Goods</span>
      </div>
    );
  }
});

var ProductRow = React.createClass({
  render: function() {
    return (
      <div className="productRow">
        <span>Football $49.99</span>
      </div>
    );
  }
});

React.render(
  <FilterableProductTable products={data} />,
  document.getElementById('content')
);
