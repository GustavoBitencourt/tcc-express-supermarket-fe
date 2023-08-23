import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { ProductTitle } from '../../../components/ProductTitle'

export default function Burgers() {
  const { burgers } = useProduct()

  return (
    <>
      <Head title='Hambúrgueres' />
      <ProductTitle>Hambúrgueres</ProductTitle>
      <Products products={burgers}></Products>
    </>
  )
}
