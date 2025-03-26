

function DestinationCard({data}) {
  return (
    <div>
        <img src={data.image} alt={data.name} />
        <h2>Destination : {data.name}</h2>
        <h3>Location : {data.location}</h3>
        <p>Description : {data.description}</p>
        <h6>Price : {data.price}</h6>
    </div>
  )
}

export default DestinationCard;