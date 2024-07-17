import './App.css';
import React, { useState } from 'react';
import Heading from './Component/Heading';
import Table from './Component/Table';
import Container from './Component/Container';
import Btn from './Component/Btn';
import U from './Component/U';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);

  const addData = (newEntry) => {
    setData([...data, { id: data.length + 1, ...newEntry }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/update/:id/:name/:age/:email/:dob/:doj/:designation/:department/:contact/:salary/" element={<U />} />
        <Route
          path="/"
          element={
            <>
              <Heading />
              <Container>
                <Table data={data} setData={setData} />
              </Container>
              <Btn addData={addData} />
            </>
          }
        />
        <Route path='/' element={<Table/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
