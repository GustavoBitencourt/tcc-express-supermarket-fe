import { useProduct } from '../../../hooks/useProduct'

import { Head } from '../../../components/Head'
import { Products } from '../../../components/Products'
import { CategoryBar } from '../../../components/CategoryBar'
import limpezaLogo from '../../../../src/assets/limpeza-logo.svg'

export default function Limpezas() {
  const { limpezas } = useProduct()

  return (
    <>
      <Head title='Limpeza' />
      <CategoryBar title='Limpeza' show={true} icon={limpezaLogo} />
      <Products products={limpezas}></Products>
    </>
  )
}
