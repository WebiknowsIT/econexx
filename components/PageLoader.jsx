'use client';

export default function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-ring">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
}
