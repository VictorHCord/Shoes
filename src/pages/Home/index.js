import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaShoppingBasket } from 'react-icons/fa';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

class Home extends Component {
  state = {
    /* vai armazenar os produtos */
    products: [],
  };

  /* Vai fazer a requisição para a api */
  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <FaShoppingBasket size={16} color="#fff" />3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);