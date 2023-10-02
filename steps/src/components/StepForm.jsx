import React, { useState } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";

export default function StepForm({ onAdd }) {
  const [form, setForm] = useState({ date: "", distance: "" });

  const onChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const steps = {
      id: uniqid(),
      date: form.date,
      distance: Number(form.distance),
    };

    onAdd(steps);
    setForm({ date: "", distance: "" });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-element">
        <label className="input-description" htmlFor="date">
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          className="form-input date-input"
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-element">
        <label className="input-description" htmlFor="distance">
          Пройдено км
        </label>
        <input
          className="form-input"
          type="text"
          id="distance"
          name="distance"
          value={form.distance}
          onChange={onChange}
          required
        />
      </div>
      <button className="button add-btn" type="submit">
        OK
      </button>
    </form>
  );
}

StepForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};