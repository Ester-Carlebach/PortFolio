const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p style={{ textAlign: 'center' }}>{sub}</p>
      </div>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h1 className="font-semibold md:text-5xl text-3xl" style={{ textAlign: 'center' }}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
