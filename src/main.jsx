import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HiltMockups from './HiltMockups.jsx'; // Import the new HiltMockups component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HiltMockups />
  </StrictMode>,
);
