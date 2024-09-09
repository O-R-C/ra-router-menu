import { useRouteError } from 'react-router-dom'
import Menu from '../components/Menu/Menu'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Menu />
      <div
        id='error-page'
        className='page error'
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  )
}
