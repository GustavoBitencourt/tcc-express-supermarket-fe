import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { CategoryBar } from '../../../components/CategoryBar'

export default function Padarias() {
  const { padarias } = useProduct()

  return (
    <>
      <Head title='Padaria' />
      <CategoryBar show={true} title='Padaria' />
      <Products products={padarias}></Products>
    </>
  )
}
