import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { ProductTitle } from '../../../components/ProductTitle'

export default function Limpezas() {
  const { limpezas } = useProduct()

  return (
    <>
      <Head title='Limpeza' />
      <ProductTitle>Limpeza</ProductTitle>
      <Products products={limpezas}></Products>
    </>
  )
}
