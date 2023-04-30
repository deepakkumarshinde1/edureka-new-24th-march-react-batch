const Header = (props) => {
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-6">
          <h1 className="text-center text-primary mt-3">
            {props.text} {props.text1}
          </h1>
          {/* <h2>{props.text}</h2>
          <p title="my-text">{props.text1}</p>
          <p style={{ opacity: 1 }} data-testid="my-test-id">
            Hello to edureka
          </p> */}
        </section>
      </section>
    </>
  );
};

export default Header;
