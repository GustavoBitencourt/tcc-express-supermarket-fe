import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { ProductTitle } from '../../../components/ProductTitle'

export default function Carnes() {
  const { carnes } = useProduct()

  return (
    <>
      <Head title='Carnes' />
      <ProductTitle>Carnes</ProductTitle>
      <Products products={carnes}></Products>
    </>
  )
}
