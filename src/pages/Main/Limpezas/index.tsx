import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { CategoryBar } from '../../../components/CategoryBar'

export default function Limpezas() {
  const { limpezas } = useProduct()

  return (
    <>
      <Head title='Limpeza' />
      <CategoryBar title='Limpeza' show={true} /> {/* Show the CategoryBar */}
      <Products products={limpezas}></Products>
    </>
  )
}
