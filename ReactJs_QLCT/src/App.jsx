import { Routes, Route } from 'react-router-dom';
import { publicRouter, privateRouter } from './Routers';
import { DefaultLayout } from './components/Layouts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div>
            <Routes>
                {/* Render public routes */}
                {publicRouter.map((item, index) => {
                    const Layout = item.layout ? item.layout : DefaultLayout;
                    const Page = item.component;
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout title={item.title}>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {/* Render private routes */}
                {privateRouter.map((item, index) => {
                    const Layout = item.layout ? item.layout : DefaultLayout;
                    const Page = item.component;
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout title={item.title}>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            <ToastContainer /> {/* Đặt ToastContainer ở đây */}
        </div>
    );
}

export default App;
