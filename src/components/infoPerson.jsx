
const PersonInfo = ({ person }) => {

  return (
      <div className="py-5 bg-body-tertiary">
        <div className="container pt-5">
          <section className="h-50 pt-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <svg
                    className="warning-placeholder-img card-img-top"
                    width="100%"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: -"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#000000" />
                  </svg>
                </div>
                <div className="col-md-8 row align-items-center">
                  <div className="card-body ps-5">
                    <h1 className="card-title text-warning">{person.name}</h1>
                    <h6 className="card-text"><strong>Birth Date: </strong>{person.birth_year}</h6>
                    <h6 className="card-text"><strong>Eye Color: </strong>{person.eye_color}</h6>
                    <h6 className="card-text"><strong>Gender: </strong>{person.gender}</h6>
                    <h6 className="card-text"><strong>Hair Color: </strong>{person.hair_color}</h6>
                    <h6 className="card-text"><strong>Height: </strong>{person.height}</h6>
                    <h6 className="card-text"><strong>Mass: </strong>{person.mass}</h6>
                    <h6 className="card-text"><strong>Skin Color: </strong>{person.skin_color}</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default PersonInfo;