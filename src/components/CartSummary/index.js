import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.reduce(
        (acc, each) => acc + each.price * each.quantity,
        0,
      )
      const totalItems = cartList.length

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="total-amount">
              Order Total: <span>{`Rs ${totalAmount}/-`}</span>
            </h1>
            <p>{`${totalItems} items in Cart`}</p>
          </div>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
