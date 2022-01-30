import Header from '../components/Header'
import Meta from '../components/Meta'

const Contents = () => {
  // page content
  const pageTitle = 'Contents'
  const pageDescription = 'Contents Page'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Contents