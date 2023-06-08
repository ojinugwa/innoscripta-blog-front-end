import React from 'react';

function FormLayout({ heading, className, footer, submitLabel = "Submit", children, onSubmit}) {
  return (
    <form className={`gx-3 ${className}`} onSubmit={onSubmit}>
      <h1 className="display-5 gradient-text mb-4">{heading}</h1>
      {children}
      <button className="w-100 btn btn-lg btn-dark rounded" type="submit">{submitLabel}</button>
      {footer}
    </form>
  );
}

export default FormLayout;