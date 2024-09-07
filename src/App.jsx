import './App.css'
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
const NewMember = lazy(() => import('./pages/NewMember'));
const NewPromotion = lazy(() => import('./pages/NewPromotion'));
const NewPost = lazy(() => import('./pages/NewPost'));

function App() {

  return (
    <>
       <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/newmember" element={<NewMember />} />
              <Route path="/newpromotion" element={<NewPromotion />} />
              <Route path="/newpost" element={<NewPost />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
