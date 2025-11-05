import { useNavigate } from "react-router-dom";

const CustomHashLink = ({ to, children, className, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const [path, hash] = to.split("#");
    navigate(path || "/");

    setTimeout(() => {
      if (hash) {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);

    if (onClick) onClick();
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default CustomHashLink;
