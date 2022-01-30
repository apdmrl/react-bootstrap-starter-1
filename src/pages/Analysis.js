import Header from '../components/Header'
import Meta from '../components/Meta'

const Analysis = () => {
  // page content
  const pageTitle = 'Analysis'
  const pageDescription = 'Contextual Frequency Analysis'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Analysis