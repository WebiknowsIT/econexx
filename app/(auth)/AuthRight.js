
const AuthRight = ({ imgSrc, heading, description }) => {
  return (
    <div className="auth-right hero-glow gridBgDark noise bg-primary-900 relative col-span-12 md:col-span-6 text-center">
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
        <h4 className="font-medium text-white">{heading}</h4>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

export default AuthRight;
