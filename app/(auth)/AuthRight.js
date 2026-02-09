
const AuthRight = ({ imgSrc, heading, description }) => {
  return (
    <div className="auth-right !bg-secondary-50 col-span-12 md:col-span-6 text-center">
      <div className="info-section">
        <img
            className="mx-auto"
            src={imgSrc}
            alt="Login Image"
            height="300px"
            width="400px"
            loading="eager"
            fetchpriority="high"
          />
        <h4 className="font-medium">{heading}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AuthRight;
