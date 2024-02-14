// ListCreation.js

import React, { useState } from 'react';

const ListCreation = ({ selectedLists, onCancel, onUpdate }) => {
  const [newListItems, setNewListItems] = useState([]);
  const [movedItemId, setMovedItemId] = useState(null);

  const handleMoveItem = (itemId, direction) => {
    // Implement moving item between containers
    if (direction === 'right') {
      // Move item to new list container
      setNewListItems(prevItems => [...prevItems, itemId]);
    } else if (direction === 'left') {
      // Move item back to previous list container
      setNewListItems(prevItems =>
        prevItems.filter(id => id !== itemId)
      );
    }
    setMovedItemId(itemId);
  };

  const handleCancelClick = () => {
    // Reset state and cancel changes
    setNewListItems([]);
    onCancel();
  };

  const handleUpdateClick = () => {
    // Update lists with new items and reset state
    onUpdate(newListItems);
    setNewListItems([]);
  };
  // to define render
  const renderListItems = () => {
    return newListItems.map(item => (
      <li key={item.id}>
        Item ID: {item.id}, Item Name: {item.name}
      </li>
    ));
  };

  return (
    <div className="list-creation-view">
      <h2>List Creation</h2>
      <div>
        <h3>Selected Lists</h3>
        <ul>
          {selectedLists.map(list => (
            <li key={list.id}>
              {list.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>New List</h3>
        <ul>
          {newListItems.map(itemId => (
            <li key={itemId}>
              {renderListItems()
              }
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleCancelClick}>Cancel</button>
        <button onClick={handleUpdateClick}>Update</button>
      </div>
    </div>
  );
};

export default ListCreation;







