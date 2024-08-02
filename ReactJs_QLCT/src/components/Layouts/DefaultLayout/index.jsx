import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
//import Footer from "../components/Footer/Footer"
function DefaultLayout({children}) {
  return (
   <div className='flex justify-center w-full h-auto bg-slate-100'>
        <Menu></Menu>
     <div className='w-3/4'>
        <Header></Header>
        <div className="content">{children}</div>
        {/* <Footer></Footer> */}
    </div>
   </div>
  )
}

export default DefaultLayout