import { Routes, Route } from 'react-router-dom';
import { publicRouter } from './Routers';
import { DefaultLayout } from './components/Layouts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <div>
            <Routes>
                {publicRouter.map((item, index) => {
                    const Layout = item.layout ? item.layout : DefaultLayout;
                    const Page = item.component;
                    return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout title={item.title}>
                                     {/* Sử dụng biến Page để render component trang khi route khớp. */}
                                        <Page /> 
                                    </Layout>
                                }
                            />
                           
                        
                    );
                })}
            </Routes>
            <ToastContainer /> 
        </div>
    );
}

export default App;
