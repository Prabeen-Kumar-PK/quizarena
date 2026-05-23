export function StatTile({ icon: Icon, label, value }) {
  return (
    <article className="stat-tile">
      <Icon aria-hidden="true" size={20} />
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  )
}
