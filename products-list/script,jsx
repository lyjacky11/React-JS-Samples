class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {qty: 0};

        this.buy = this.buy.bind(this);
        this.show = this.show.bind(this);
    }

    buy() {
        this.setState({qty: this.state.qty + 1});
        this.props.handleTotal(this.props.price);
    }
    
    show() {
        this.props.handleShow(this.props.name, this.props.price);
    }

    render() {
        return (
            <div>
                <h4>{this.props.name} (${this.props.price})</h4>
                <button onClick={this.buy}>Buy</button>
                <button onClick={this.show}>Show</button>
                <p>Quantity: {this.state.qty} item(s)</p>
                <hr/>
            </div>
        );
    }
}

class ProductForm extends React.Component {
    submit(e) {
        e.preventDefault();
        
        var product = {
            name: this.refs.name.value,
            price: parseInt(this.refs.price.value)
        }

        if (this.refs.name.value != "" && this.refs.price.value != "") {
            this.props.handleCreate(product);
        }
        else {
            alert("Please complete product information!");
        }

        this.refs.name.value = "";
        this.refs.price.value = "";
    }
    
    render() {
        return (
            <form onSubmit={this.submit}>
                <h4>Create Product</h4>
                <input type="text" placeholder="Product Name" ref="name"/>
                <input type="text" placeholder="Product Price" ref="price"/>
                <br/><br/>
                <button onClick={this.submit.bind(this)}>Submit</button>
                <hr/>
            </form>
        );
    }
}

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            productList: [
                {name: "Android", price: 121},
                {name: "Apple", price: 123},
                {name: "Nokia", price: 65}
            ]
        };

        this.calculateTotal = this.calculateTotal.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    createProduct(product) {
        this.setState({
            productList: this.state.productList.concat(product)
        });
    }

    calculateTotal(price) {
        this.setState({total: this.state.total + price});
    }

    showProduct(name, price) {
        alert("You selected: " + name + " ($" + price + ")");
    }
    
    render() {
        var component = this;
        var products = this.state.productList.map(function(product) {
            return (
                <Product name={product.name} price={product.price} handleShow={component.showProduct} handleTotal={component.calculateTotal}/>
            );
        });

        return (
            <div>
                <ProductForm handleCreate={this.createProduct}/>
                {products}
                <Total total={this.state.total}/>
            </div>
        );
    }
}

class Total extends React.Component {
    render() {
        return (
            <div>
                <h3>Total: ${this.props.total}</h3>
            </div>
        );
    }
}

ReactDOM.render(<ProductList/>, document.getElementById("root"));
