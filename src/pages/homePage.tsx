
import Card from '../components/card'
import mycards from '../utils/dummyData'
import Heading from '../container/Heading'
import { useQuery, gql } from '@apollo/client';
const GET_ALL_FLASHCARDS = gql`
query {
  feed {
    id
    title
    details
  }
}
`;
export default function HomePage() {
  const { loading, error, data } = useQuery(GET_ALL_FLASHCARDS);
  return (
    <div className='wrapper'>
        <Heading show={true}/>
    <div className='allCards'>
    {loading && <p>Loading...</p>}
    {data &&    data.feed.map((card:any)=>{
      return <Card title={card.title} definition={card.details}/>
    })}
    {error && <p>Error: {error.message}</p>}
    </div>
    </div>
  )
}

