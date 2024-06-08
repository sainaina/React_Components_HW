
import { CardComponents } from './CardComponents'
import { ProCardComponents } from './ProCardComponents'

const MainComponents = () => {
  return (
    <main className='flex flex-wrap justify-center gap-5 py-11 '>
      <CardComponents/>
      <CardComponents/>
      <CardComponents/>
      <ProCardComponents/>
      <ProCardComponents/>
      <ProCardComponents/>
    </main>
  )
}
export default MainComponents
