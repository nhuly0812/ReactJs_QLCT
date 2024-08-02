import Round from './round/Round'
import Search from './search/Search'

function Header() {
  return (
    <div className='flex justify-between border-b-2 h-20  items-center '>
        <Search></Search>
       <div className='flex mr-5'>
       <Round props=''></Round>
       <Round props='image'></Round>
       </div>
    </div>
  )
}

export default Header