import React from 'react';

function FormLayout({ heading, footer, submitLabel = "Submit", children, onSubmit}) {
  return (
    <form className="container" onSubmit={onSubmit}>
      <h1 className="h3 mb-3 fw-normal">{heading}</h1>
      {children}
      <button className="w-100 btn btn-lg btn-primary" type="submit">{submitLabel}</button>
      {footer}
    </form>
  );
}

export default FormLayout;