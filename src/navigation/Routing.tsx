import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import HomeScreen from '@pages/home/Home';
import HomeLayout from '@pages/home/homelayout';
import AppLayout from './applayout';
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomeScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
