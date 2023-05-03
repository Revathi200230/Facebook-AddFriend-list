import React from 'react';
import ReactDOM from 'react-dom'
import SingleComment from './singlecomment';
import './style.css';
import profile from './images/men.jpg'
import profile1 from './images/img.jpg'
import profile2 from './images/girl.jpg'
import UserCard from './card'



const First = () => {
  return(
    <div className = 'ui comments'>
    <UserCard>
     <SingleComment name ='Ram' time='4 pm' profile = {profile} message = 'Good luck'/> </UserCard> <br />

     <UserCard>
     <SingleComment name = 'Priya' time='5.15 pm' profile = {profile1} message = 'All the best'/> </UserCard><br />
     
     <UserCard>
     <SingleComment name = 'Naveen' time='8 pm' profile = {profile2} message = 'Congraulations'/> </UserCard>
    </div>
  )
}

ReactDOM.render(<First />,document.querySelector('#root'))
