import React, { useEffect, useState } from 'react'
import { getOrdersByCustomerId } from '../../services/api'
import { OrderData } from '../../interfaces/OrderData'
import {
  OrdersContainer,
  OrderCard,
  OrderTitle,
  OrderDetails,
  NoOrdersMessage,
  MainContainer,
  TopBar,
  Title,
  ButtonGoShop,
  EmptyCartIcon,
} from './styles'
import { Sidebar } from '../../components/Sidebar'
import arrowLeftCategory from '../../assets/arrow-left-category.svg'
import emptyCartIcon from '../../assets/empty-cart-icon.svg'
import closeIcon from '../../assets/close.svg'
import { useNavigate } from 'react-router-dom'

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<OrderData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const customerId = localStorage.getItem('id')
    if (customerId) {
      const customerIdAsNumber = parseInt(customerId, 10)
      getOrdersByCustomerId(customerIdAsNumber)
        .then((response) => {
          if (response.status === 200) {
            setOrders(response.data)
          } else if (response.status === 404) {
            setError('No orders found for this customer')
          } else {
            setError('Failed to fetch orders')
          }
        })
        .catch(() => {
          setError('Failed to fetch orders')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [])

  const goBack = () => {
    navigate(-1)
  }

  const goToShop = () => {
    navigate('/')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <MainContainer>
      <TopBar>
        <div>
          <img src={arrowLeftCategory} alt='Voltar' onClick={goBack} />
        </div>
        <div>
          <span>Meus Pedidos</span>
        </div>
        <div>
          <img src={closeIcon} alt='Fechar' onClick={goBack} />
        </div>
      </TopBar>
      <Title>Pedidos:</Title>
      <OrdersContainer>
        {error ? (
          <NoOrdersMessage>
            Você não possui pedidos,
            <ButtonGoShop onClick={goToShop}>comece suas compras.</ButtonGoShop>
            <EmptyCartIcon src={emptyCartIcon} alt='Empty Cart' />
          </NoOrdersMessage>
        ) : (
          orders.map((order) => (
            <OrderCard key={order.id} status={order.status}>
              <OrderTitle>Pedido #{order.id}</OrderTitle>
              <OrderDetails>
                <p>Total: R${parseFloat(order.total).toFixed(2)}</p>
                <p>Status: {order.status}</p>
                <p>Data: {new Date(order.createdAt).toLocaleDateString()}</p>
                <h4>Produtos:</h4>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.id}>
                      {item.product.name} - <span>Un.</span> {item.quantity} - <span>Sub</span>: R$
                      {parseFloat(item.subTotal).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </OrderDetails>
            </OrderCard>
          ))
        )}
      </OrdersContainer>
      <Sidebar />
    </MainContainer>
  )
}

export default MyOrders
