import { Box, Button } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

function Header(props) {
  return (
    <header>
      <Box display="flex" justifyContent="flex-end" my={3}>
        <Button endIcon={<Refresh/>} style={{textTransform: 'none'}} onClick={() => { props.handleRefresh() }}>
          random
        </Button>
      </Box>
    </header>
  )
}

export default Header;
