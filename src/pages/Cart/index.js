import React from 'react';
import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-sneaker-meia-leve-calce-facil-vr/06/E74-0492-006/E74-0492-006_zoom1.jpg"
                alt="Tênis"
              />
            </td>

            <td>
              <strong>Tênis</strong>
              <span>R$1684,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <FaMinusCircle size={20} color="#0089f0" />
                </button>
                <input type="number" name="" readOnly value={2} />
                <button type="button">
                  <FaPlusCircle size={20} color="#0089f0" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$3.369,8</strong>
            </td>
            <td>
              <button type="button">
                <FaTrash size={20} color="#0089f0" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1569,60</strong>
        </Total>
      </footer>
    </Container>
  );
}
