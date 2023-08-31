import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { CategoryBar } from '../../../components/CategoryBar'
import meatLogo from '../../../../src/assets/carne-logo.svg'

export default function Carnes() {
  const { carnes } = useProduct()

  return (
    <>
      <Head title='Carnes' />
      <CategoryBar show={true} title='Carnes' icon={meatLogo} />
      <Products products={carnes}></Products>
    </>
  )
}
