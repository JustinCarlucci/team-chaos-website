import React from 'react';
import './calendar.css';

const Calendar = () => {
  return (
    <div className='chaos__calendar section__padding' id="possibility">
        <h1 className='gradient__text'>The future is CHAOS</h1>
        <p>Make sure to stop by at any of our events!</p>
        <div className='chaos__calendar-content'>
            <img src={require('../../assets/brusky chomp1.png')} />
            <iframe src="https://outlook.office365.com/owa/calendar/1fbb6fe054184a4eb8c4da00f02b4106@gsbschool.org/6e02a9848ffe494eba4947fb64c8eed37450450188533125234/calendar.html" width="1200" height="600" frameBorder="3" scrolling="no"></iframe>
        </div>
    </div>
  )
};

export default Calendar;