import Header from '../components/Header'
import Meta from '../components/Meta'

const Contexts = () => {
  // page content
  const pageTitle = 'Contexts'
  const pageDescription = 'Contexts Page'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Contexts