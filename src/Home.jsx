import MenuForm from './components/MenuForm'

import { useCollection } from './hooks/useCollection'

export default function Home() {
  const { documents: menu } = useCollection('menu')

  return (
    <div>
      <h1>Home</h1>
      <div className='flex'>
        {menu &&
          menu.map((item) => (
            <div
              className='text-center h-full bg-cyan-500 m-2 rounded montserrat p-2 w-96 capitalize font-semibold'
              key={item.id}
            >
              {item.name}
            </div>
          ))}
      </div>
      <MenuForm />
    </div>
  )
}
