import profilePic from './assets/face.webp'

function Card() {
  return (
    <div className="card">
      <img className='card-image' src={profilePic} alt="profile " />
      <h2 className='card-title' >bro code</h2>
      <p>i am amine i play basketball and football </p>
    </div>
  );
}

export default Card;
