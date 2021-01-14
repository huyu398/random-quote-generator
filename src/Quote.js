import { Typography } from '@material-ui/core'

function Quote(props) {
  return (
    <Typography variant="h4">
      "{ props.text }"
    </Typography>
  )
}

export default Quote;
