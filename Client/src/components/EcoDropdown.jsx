import { useState } from "react";

const EcoDropdown = ({ label, valueLabel, options, onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setOpen(false);
  };

  const currentLabel = valueLabel || "Seleccionar";

  return (
    <div className="eco-dropdown-wrapper">
      {label && <label className="form-label mb-1">{label}</label>}

      <div className="eco-dropdown">
        <button
          type="button"
          className="eco-dropdown-toggle"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{currentLabel}</span>
          <span className="eco-dropdown-caret">▾</span>
        </button>

        {open && (
          <div className="eco-dropdown-menu">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={
                  "eco-dropdown-item" +
                  (opt.isActive ? " eco-dropdown-item-active" : "")
                }
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EcoDropdown;
