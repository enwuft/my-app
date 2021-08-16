import { Button, Pane } from 'evergreen-ui'

export default function Error({ statusCode }) {
  const refreshPage = () => window.location.reload()
  return (
    <Pane>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      <Button onClick={refreshPage} marginRight={16} appearance="minimal">
        Refresh
      </Button>
    </Pane>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
