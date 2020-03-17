import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState ([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'},
  ]);

// Now a simple form of doing that is to simply then use my old course goals and call concat here,  instead set course goals
// wants a brand new array which will replace the old array and concat will also add an item to an array but it will return a new array 
// to which this item was added. So it gives us a brand new array, doesn't touch the old one and we then pass the brand new array to 
// setCourseGoals and React will then use that brand new array to under the hood replace the old array in its internally managed
// state and it will re-render this component  and therefore update this courseGoals constant with the new array in the next render
// cycle, which in the end means that React will execute this function here and therefore when it does so, it will reflectthat new data in
// our jsx code.  

const addNewGoalHandler = (newGoal)=> {
 //setCourseGoals(courseGoals.concat(newGoal));
 setCourseGoals((prevCourseGoals)=>{
   return prevCourseGoals.concat(newGoal);
 });
};

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;
