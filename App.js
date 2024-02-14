

import React, { useState, useEffect } from 'react';
import './App.css';
import ListContainer from'./ListContainer';
import FailureView from './FailureView';
import ListCreation from './ListCreation';
<h1>List Creation</h1>


const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lists, setLists] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [creatingNewList, setCreatingNewList] = useState(false);

  useEffect(() => {
    fetchListData();
  }, []);

  const fetchListData = () => {
    setLoading(true);
    fetch('https://apis.ccbp.in/list-creation/lists')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setLists(data.lists);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  };

  const handleCreateNewList = () => {
    if (selectedLists.length !== 2) {
      alert('You should select exactly 2 lists to create a new list');
      return;
    }
    setCreatingNewList(true);
  };

  const handleCancel = () => {
    setCreatingNewList(false);
  };

  const handleUpdate = () => {
    setCreatingNewList(false);
    // Update the lists based on changes made in the List Creation view
  };

  return (
    <div className="App">
      {loading && <div className="loader">Loading...</div>}
      {error && <FailureView onRetry={fetchListData} />}
      {!loading && !error && !creatingNewList && (
        <div className="head">
          <h1>List Creation</h1>
          <button  onClick={handleCreateNewList}>Create a new list</button>
          <ListContainer
            lists={lists}
            selectedLists={selectedLists}
            onSelectLists={setSelectedLists}
          />
          
        </div>
      )}
      {creatingNewList && (
        <ListCreation
          selectedLists={selectedLists}
          onCancel={handleCancel}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default App;





