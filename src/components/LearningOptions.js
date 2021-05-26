import React from 'react';
import './LearningOptions.css';

const LearningOptions = (props) => {
  const options = [
    {text: "Anxiety", handler: props.actionProvider.handleAnxietyList, id: 1},
    {text: "Depression", handler: () => {}, id: 2},
    {text: "Relationships", handler: () => {}, id: 3},

  ];
  const optionsMarkUp = options.map(option => (
    <button className="learning-options-button" key={option.id} onClick={option.handler}>
    {option.text}
    </button>
  ));
  return <div className="learning-options-container">{optionsMarkUp}</div>;
};

export default LearningOptions
