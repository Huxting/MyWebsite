const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);
export default Card;
