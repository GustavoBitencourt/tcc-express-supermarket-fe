import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { ProductTitle } from '../../../components/ProductTitle'

export default function Hortifrutis() {
  const { hortifrutis } = useProduct()

  return (
    <>
      <Head title='Bebidas' />
      <ProductTitle>Bebidas</ProductTitle>
      <Products products={hortifrutis}></Products>
    </>
  )
}
