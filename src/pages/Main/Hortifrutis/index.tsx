import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { CategoryBar } from '../../../components/CategoryBar'
import hortiLogo from '../../../../src/assets/horti-logo.svg'

export default function Hortifrutis() {
  const { hortifrutis } = useProduct()

  return (
    <>
      <Head title='Hortifruti' />
      <CategoryBar show={true} title='Hortifruti' icon={hortiLogo} />
      <Products products={hortifrutis}></Products>
    </>
  )
}
