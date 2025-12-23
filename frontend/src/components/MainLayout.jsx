import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem',
        borderTop: '1px solid #ddd'
      }}>
        © 2024 Coffee Shop. Все права защищены.
      </footer>
    </div>
  );
}