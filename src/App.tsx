import { FC } from 'react';
import './App.scss'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from '@components/Header'
import { CreatePage } from '@pages/CreatePage'
import { UsersPage } from '@pages/UsersPage';
import { UserPage } from '@pages/UserPage'
import { NotFoundPage } from '@pages/NotFoundPage';

const App: FC = () => {
  return (
    <div className="App">
      <Header />

      <main className="App_main">
        <Routes>
          <Route path="/">
            <Route index element={<CreatePage />} />
            <Route path="home" element={<Navigate to="/" />} />

            <Route path="users" element={<Outlet />}>
              <Route index element={<UsersPage />} />
              <Route path=":userId" element={<UserPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
