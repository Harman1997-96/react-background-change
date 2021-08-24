import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeBg, resetBg } from '../../redux/bgRedux/bg.actions'
import { BG_KEY } from '../../redux/bgRedux/bg.reducer'
import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Background = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }))

  const classes = useStyles()
  let dispatch = useDispatch()

  let clickChangeColor = () => {
    dispatch(changeBg())
  }

  let clickResetBg = () => {
    dispatch(resetBg())
  }

  // view data from store
  let viewBg = useSelector((state) => {
    return state[BG_KEY]
  })
  return (
    <React.Fragment>
      {/* First Header */}
      <Grid container justify="center">
        <h2 style={{ textAlign: 'center' }}>Change Background Color</h2>
        <div className={classes.root}>
          <Button
            onClick={clickChangeColor}
            variant="contained"
            color="primary"
          >
            Change
          </Button>
          <p className="font-weight-bold mt-3">
            COLOR CODE:
            <span style={{ color: viewBg.color }}> {viewBg.color}</span>
          </p>
          <Button onClick={clickResetBg} variant="contained" color="secondary">
            Reset
          </Button>
        </div>
      </Grid>
      {/* second Header */}
      <div
        className="card-body bodyColorContainner"
        style={{ backgroundColor: viewBg.color }}
      ></div>
    </React.Fragment>
  )
}

export default Background
