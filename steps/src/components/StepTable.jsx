import React from "react";
import PropTypes from "prop-types";

export default function StepTable({ steps, onDelete }) {
  return (
    <>
      <div className="step">
        <div className="step-date">Дата (ДД.ММ.ГГГГ)</div>
        <div className="step-distance">Пройдено км</div>
        <div className="actions">Действия</div>
      </div>
      <ul className="steps">
        {steps.map((n) => (
          <li className="step" key={n.id}>
            <div>{new Date(n.date).toLocaleDateString()}</div>
            <div>{n.distance}</div>
            <button className="button delete-btn" onClick={() => onDelete(n.id)}>
            &#10060;
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

StepTable.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      distance: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};