import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { CategoryBar } from '../../../components/CategoryBar'

export default function Hortifrutis() {
  const { hortifrutis } = useProduct()

  return (
    <>
      <Head title='Hortifruti' />
      <CategoryBar show={true} title='Limpeza' />
      <Products products={hortifrutis}></Products>
    </>
  )
}
