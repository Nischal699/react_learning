import profilePic from './assets/profilePic.jpg';
function Card(){

    return(
        <div className="card">
            <img className="card_img" src={profilePic} alt="profile_picture"></img>
            <h2 className="card_title">Nischal Moktan</h2>
            <p className='card_description'>I am trying to be a full-stack developer</p>
            <button className="card_button">Click Me</button>
        </div>
    );
}
export default Card;