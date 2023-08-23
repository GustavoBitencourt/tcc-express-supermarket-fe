import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { ProductTitle } from '../../../components/ProductTitle'

export default function IceCreams() {
  const { iceCreams } = useProduct()

  return (
    <>
      <Head title='Sorvetes' />
      <ProductTitle>Sorvetes</ProductTitle>
      <Products products={iceCreams}></Products>
    </>
  )
}
