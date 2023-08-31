import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { CategoryBar } from '../../../components/CategoryBar'
import padariaLogo from '../../../../src/assets/padaria-logo.svg'

export default function Padarias() {
  const { padarias } = useProduct()

  return (
    <>
      <Head title='Padaria' />
      <CategoryBar show={true} title='Padaria' icon={padariaLogo} />
      <Products products={padarias}></Products>
    </>
  )
}
