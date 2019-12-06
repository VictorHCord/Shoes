import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaShoppingBasket, FaSpinner } from 'react-icons/fa';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

function Home({ amount, addToCartRequest }) {
  // Meus states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  /* Vai fazer a requisição para a api */
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    addToCartRequest(id);

    setLoading(true);
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button
            loading={loading ? <FaSpinner color="#fff" size={15} /> : null}
            type="button"
            onClick={() => handleAddProduct(product.id)}
          >
            <div>
              <FaShoppingBasket size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
