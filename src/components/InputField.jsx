export function InputField({ error, label, ...inputProps }) {
  return (
    <label className="field-wrap">
      <span className="field-label">{label}</span>
      <input className="field-input" {...inputProps} />
      {error ? <span className="field-error">{error.message}</span> : null}
    </label>
  )
}
