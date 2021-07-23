
import { makeStyles } from '@material-ui/core/styles'

const useStyles= makeStyles((theme)=>({

    footer:{
        backgroundColor:theme.palette.background.paper,
        padding:'50px 0'
    },

      
      title: {
        flexGrow: 1,
      },
     
     
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },

}))

export default useStyles