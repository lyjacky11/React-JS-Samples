function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Product = /*#__PURE__*/function (_React$Component) {
  "use strict";

  _inherits(Product, _React$Component);

  var _super = _createSuper(Product);

  function Product(props) {
    var _this;

    _classCallCheck(this, Product);

    _this = _super.call(this, props);
    _this.state = {
      qty: 0
    };
    _this.buy = _this.buy.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Product, [{
    key: "buy",
    value: function buy() {
      this.setState({
        qty: this.state.qty + 1
      });
      this.props.handleTotal(this.props.price);
    }
  }, {
    key: "show",
    value: function show() {
      this.props.handleShow(this.props.name, this.props.price);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, this.props.name, " ($", this.props.price, ")"), /*#__PURE__*/React.createElement("button", {
        onClick: this.buy
      }, "Buy"), /*#__PURE__*/React.createElement("button", {
        onClick: this.show
      }, "Show"), /*#__PURE__*/React.createElement("p", null, "Quantity: ", this.state.qty, " item(s)"), /*#__PURE__*/React.createElement("hr", null));
    }
  }]);

  return Product;
}(React.Component);

var ProductForm = /*#__PURE__*/function (_React$Component2) {
  "use strict";

  _inherits(ProductForm, _React$Component2);

  var _super2 = _createSuper(ProductForm);

  function ProductForm() {
    _classCallCheck(this, ProductForm);

    return _super2.apply(this, arguments);
  }

  _createClass(ProductForm, [{
    key: "submit",
    value: function submit(e) {
      e.preventDefault();
      var product = {
        name: this.refs.name.value,
        price: parseInt(this.refs.price.value)
      };

      if (this.refs.name.value != "" && this.refs.price.value != "") {
        this.props.handleCreate(product);
      } else {
        alert("Please complete product information!");
      }

      this.refs.name.value = "";
      this.refs.price.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: this.submit
      }, /*#__PURE__*/React.createElement("h4", null, "Create Product"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Product Name",
        ref: "name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Product Price",
        ref: "price"
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
        onClick: this.submit.bind(this)
      }, "Submit"), /*#__PURE__*/React.createElement("hr", null));
    }
  }]);

  return ProductForm;
}(React.Component);

var ProductList = /*#__PURE__*/function (_React$Component3) {
  "use strict";

  _inherits(ProductList, _React$Component3);

  var _super3 = _createSuper(ProductList);

  function ProductList(props) {
    var _this2;

    _classCallCheck(this, ProductList);

    _this2 = _super3.call(this, props);
    _this2.state = {
      total: 0,
      productList: [{
        name: "Android",
        price: 121
      }, {
        name: "Apple",
        price: 123
      }, {
        name: "Nokia",
        price: 65
      }]
    };
    _this2.calculateTotal = _this2.calculateTotal.bind(_assertThisInitialized(_this2));
    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductList, [{
    key: "createProduct",
    value: function createProduct(product) {
      this.setState({
        productList: this.state.productList.concat(product)
      });
    }
  }, {
    key: "calculateTotal",
    value: function calculateTotal(price) {
      this.setState({
        total: this.state.total + price
      });
    }
  }, {
    key: "showProduct",
    value: function showProduct(name, price) {
      alert("You selected: " + name + " ($" + price + ")");
    }
  }, {
    key: "render",
    value: function render() {
      var component = this;
      var products = this.state.productList.map(function (product) {
        return /*#__PURE__*/React.createElement(Product, {
          name: product.name,
          price: product.price,
          handleShow: component.showProduct,
          handleTotal: component.calculateTotal
        });
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProductForm, {
        handleCreate: this.createProduct
      }), products, /*#__PURE__*/React.createElement(Total, {
        total: this.state.total
      }));
    }
  }]);

  return ProductList;
}(React.Component);

var Total = /*#__PURE__*/function (_React$Component4) {
  "use strict";

  _inherits(Total, _React$Component4);

  var _super4 = _createSuper(Total);

  function Total() {
    _classCallCheck(this, Total);

    return _super4.apply(this, arguments);
  }

  _createClass(Total, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Total: $", this.props.total));
    }
  }]);

  return Total;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(ProductList, null), document.getElementById("root"));
