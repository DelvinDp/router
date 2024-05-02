const TeamItem = props => {
  const {blogsData} = props
  const {id, name, imageUrl} = blogsData
  return (
    <div className="card-container">
      <img className="card-image" src={imageUrl} alt={`item${id}`} />
      <p>{name}</p>
    </div>
  )
}
export default TeamItem
