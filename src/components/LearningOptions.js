import React from 'react';
import './LearningOptions.css';

const LearningOptions = (props) => {
  const options = [
    {text: "Anxiety", handler: props.actionProvider.handleJavaScriptList, id: 1},
    {text: "Data visualization", handler: () => {}, id: 2},
    {text: "APIs", handler: () => {}, id: 3},
    {text: "Security", handler: () => {}, id: 4},
    {text: "Interview prep", handler: () => {}, id: 5}
  ];
  const optionsMarkUp = options.map(option => (
    <button className="learning-options-button" key={option.id} onClick={option.handler}>
    {option.text}
    </button>
  ));
  return <div className="learning-options-container">{optionsMarkUp}</div>;
};

export default LearningOptions
