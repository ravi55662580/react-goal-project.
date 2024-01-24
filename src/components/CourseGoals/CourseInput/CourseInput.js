import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    
    setIsButtonDisabled(event.target.value.trim() === '');
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsButtonDisabled(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value = {enteredValue} onChange={goalInputChangeHandler} required/>
      </div>
      <Button type="submit" disabled={isButtonDisabled}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
