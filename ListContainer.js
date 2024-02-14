import React from 'react';

const ListContainer = ({ lists, selectedLists, onSelectLists }) => {
  const handleCheckboxChange = (listId, isChecked) => {
    if (isChecked) {
      onSelectLists(prevSelectedLists => [...prevSelectedLists, listId]);
    } else {
      onSelectLists(prevSelectedLists =>
        prevSelectedLists.filter(id => id !== listId)
      );
    }
  };

  const renderListItems = (items) => {
    return items ? items.map(item => (
      <li key={item.id}>{item.name}</li>
    )) : null;
  };

  return (
    <div className="list-container">
      <h6 type="checkbox">List1</h6>
      <div className="sub-list">
      
        
      </div>
      
      {lists.map(list => (
        <div key={list.id}>
          <input
            type="checkbox"
            checked={selectedLists.includes(list.id)}
            onChange={e => handleCheckboxChange(list.id, e.target.checked)}
          />

          <span > {list.name}</span>
          <ul>
            { 
           renderListItems(list.items)
          }
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListContainer;