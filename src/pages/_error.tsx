import { Button, Pane } from 'evergreen-ui'

export default function FallbackErr() {
  const refreshPage = () => window.location.reload()
  return (
    <Pane>
      <Button onClick={refreshPage} marginRight={16} appearance="minimal">
        Refresh
      </Button>
    </Pane>
  )
}
