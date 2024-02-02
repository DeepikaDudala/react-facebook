function Home({ displayPage }) {
  return (
    <>
      <div className="whole-body">
        <div className="d-flex justify-content-center">
          <img
            src="/Facebook-Logo.wine.svg"
            alt="Facebook"
            width={"240px"}
            height={"84px"}
            className="align-center"
          />
        </div>
        <div className="d-flex justify-content-center">{displayPage}</div>
      </div>
    </>
  );
}

export default Home;
