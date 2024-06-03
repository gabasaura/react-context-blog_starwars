
const PersonProfile = ({ data }) => {
    
    return (

        <>
        <Navbar />
        <main>
            <div className="py-5 bg-body-tertiary">
                <div className="container pt-5">

                    <section className="album h-25 overflow-x-auto pt-5">
                        <h3>CHARACTERS</h3>
                        <h6>{data.name}</h6>
                    </section>
                
                </div>
            </div>
        </main>
        <Footer />
    </>

    )
}

export default PersonProfile
