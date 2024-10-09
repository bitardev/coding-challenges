import { useState } from "react";
import faqs from "./data.js";
import "./style.css";

/*
    # Enable Multi selection
    # When we click on a button, we should show the answer, 
    # if we click on the button again this should close the accordion
*/
const Accordion = () => {
  const [isMultiSelectEnabled, setIsMultiSelectEnabled] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const handleSelection = (id) => {
    isMultiSelectEnabled ? handleMultiSelection(id) : handleSingleSelection(id);
  };
  const handleSingleSelection = (newId) => {
    setSelected(newId);
    if (selected === newId) {
      setSelected(null);
    }
  };
  const handleMultiSelectionCheckbox = (e) => {
    setIsMultiSelectEnabled(e.target.checked);
    setMultiSelected([]);
    setSelected(null);
  };
  const handleMultiSelection = (newId) => {
    setMultiSelected(
      multiSelected.indexOf(newId) !== -1
        ? multiSelected.filter((faqID) => faqID !== newId)
        : [...multiSelected, newId]
    );
  };
  return (
    <>
      <div>Accordion Challenge</div>
      <div className="multi-select-checkbox-wrapper">
        <label className="multi-select-checkbox">
          Enable Multi selection
          <input
            name="multiselect"
            checked={isMultiSelectEnabled}
            onChange={handleMultiSelectionCheckbox}
            type="checkbox"
          />
        </label>
      </div>
      <div className="faqs-container">
        {faqs && faqs.length > 0 ? (
          faqs.map((faq) => (
            <>
              <button
                className={`faqs-container__button ${
                  selected === faq.id ? "active" : ""
                }`}
                key={faq.id}
                onClick={() => handleSelection(faq.id)}
              >
                {faq.question}{" "}
                <span className="faqs-container__button-icon">+</span>
              </button>
              {selected === faq.id ||
              multiSelected.find((faqID) => faqID === faq.id) ? (
                <div className="faqs-container__answer">{faq.answer}</div>
              ) : (
                ""
              )}
            </>
          ))
        ) : (
          <div>No data available!</div>
        )}
      </div>
    </>
  );
};
export default Accordion;
