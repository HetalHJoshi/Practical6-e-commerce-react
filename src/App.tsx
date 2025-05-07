// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Signup } from './pages/Signup';
import { Signin } from './pages/signIn';

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* root → signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* public */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* protected */}
        <Route element={<ProtectedRoute />}>
          {/* <Route index element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} /> */}
        </Route>

        {/* anything else → back home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
