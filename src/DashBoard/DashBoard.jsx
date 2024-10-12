import './DashBoard.css';

const DashBoard = () =>{
  return( 
    <>
 <div className="h-navbar">
 <ul className="h-navbar-list">
  <li className="h-navbar-item" >
  <span className='title'>
    <a href='#'>MonKotha</a>
  </span>
  </li>
  <li className="navbar-item">
    <a href='#'>
    <img src="https://picsum.photos/30" alt="Random User" className="user-image" />


    {/* <img src='#' alt='Profile Picture' className='user-image'></img> */}
    </a>
 
  </li>

 </ul>
 </div> 
<div className="navbar">
<ul className="navbar-list">
  {/* <li a className="navbar-item">
   <a href="#" className="title">MonKotha</a>
 </li> */}
 <li className="navbar-item">
   <a href="#">Home</a>
 </li>
 <li className="navbar-item">
   <a href="#">About</a>
 </li>
 <li className="navbar-item">
   <a href="#">Contact</a>
 </li>
</ul>
</div> 

</>
  );

};

export default DashBoard;
