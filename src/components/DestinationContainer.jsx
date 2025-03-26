
import DestinationCard from './DestinationCard';
import { destinations } from '../destination';

function DestinationContainer() {
    
  return (
    <div>
        {destinations.map((destination)=>(
            <DestinationCard key={destination.id} data={destination}/>
        ))}
    </div>
  )
}

export default DestinationContainer