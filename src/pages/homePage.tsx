
import Card from '../components/card'
import mycards from '../utils/dummyData'
import Heading from '../container/Heading'

export default function HomePage() {
  
  return (
    <div className='wrapper'>
        <Heading show={true}/>
    <div className='allCards'>
      {
        mycards.map((card)=>{
          return <Card title={card.title} definition={card.definition}/>
        })
      }
    </div>
    </div>
  )
}

