export function SectionHeading({ copy, eyebrow, icon: Icon, title }) {
  return (
    <header className="section-heading">
      <span className="eyebrow">
        {Icon ? <Icon aria-hidden="true" size={18} /> : null}
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </header>
  )
}
