import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { ProductTitle } from '../../../components/ProductTitle'

export default function Padarias() {
  const { padarias } = useProduct()

  return (
    <>
      <Head title='Sorvetes' />
      <ProductTitle>Sorvetes</ProductTitle>
      <Products products={padarias}></Products>
    </>
  )
}
