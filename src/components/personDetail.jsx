const PersonDetail = ({ uid, person }) => {
    return (
      <div>
        <p className="card-text">Eye Color: {person.eye_color}</p>
        <p className="card-text">Gender: {person.gender}</p>
        <p className="card-text">Hair Color: {person.hair_color}</p>
      </div>
    );
  };
  
  export default PersonDetail;