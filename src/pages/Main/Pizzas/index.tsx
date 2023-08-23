import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { ProductTitle } from '../../../components/ProductTitle'

export default function Pizzas() {
  const { pizzas } = useProduct()

  return (
    <>
      <Head title='Pizzas' />
      <ProductTitle>Pizzas</ProductTitle>
      <Products products={pizzas}></Products>
    </>
  )
}
