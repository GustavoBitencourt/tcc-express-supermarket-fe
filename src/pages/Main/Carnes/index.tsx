import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { CategoryBar } from '../../../components/CategoryBar'

export default function Carnes() {
  const { carnes } = useProduct()

  return (
    <>
      <Head title='Carnes' />
      <CategoryBar show={true} title='Carnes' />
      <Products products={carnes}></Products>
    </>
  )
}
