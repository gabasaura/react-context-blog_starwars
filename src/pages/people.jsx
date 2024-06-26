import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../store/AppContext";
import Loading from "../components/loader";
import PersonInfo from "../components/infoPerson";

const PeopleProfile = () => {
    const { store, actions } = useContext(AppContext);
    const { uid } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          await actions.fetchPerson(uid);
          setLoading(false);
      };

      fetchData();
  }, [uid]);

  if (loading) {
      return <Loading />
  }

  const person = store.person;

    return (
        <main>
            <div className="py-5 bg-body-tertiary">
                <div className="container pt-5">
                    <section className="h-50 pt-5">
                        {store.person ? (
                            <PersonInfo person={store.person} />
                        ) : (
                            <p>No data available</p>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PeopleProfile;
