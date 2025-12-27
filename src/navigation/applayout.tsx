import { Outlet } from 'react-router';
import Navbar from '@components/custom/Navbar';

const AppLayout = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
