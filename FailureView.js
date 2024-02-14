import React from 'react';

const FailureView = ({ onRetry }) => {
  const handleRetryClick = () => {
    onRetry();
  };

  return (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/content/react-js/list-creation-failure-lg-output.png"
        alt="Failure View"
      />
      <button onClick={handleRetryClick}>Try Again</button>
    </div>
  );
};

export default FailureView;