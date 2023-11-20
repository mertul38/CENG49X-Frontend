// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TableComponent from './components/TableComponent';
import Home from './pages/Home';
import About from './pages/About';
import readXLSFile from './utils/readXLS';
import UserComponent from './components/UserComponent';

const App = () => {

  const [xlsData, setXlsData] = useState(null);
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const data = await readXLSFile(file);
        setXlsData(data);
      } catch (error) {
        console.error('Error reading XLS file:', error);
      }
    }
  };

  return (
    <BrowserRouter>
      <div style={{paddingTop:"50px"}}>
        <Routes>
          <Route path="/" element={
          <div>
            Home Page
            <nav>
              <input type="file" onChange={handleFileChange} accept=".xls, .xlsx" />
              <h1/>
              <div>
                {xlsData && <TableComponent jsonData={xlsData} />}
              </div>
            </nav>
          </div>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:stringValue" element={<UserComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
