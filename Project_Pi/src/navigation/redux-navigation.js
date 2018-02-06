import React from 'react'
import PropTypes from 'prop-types'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import Navigation from './navigation'

const ReduxNavigation = (props) => {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <Navigation navigation={navigation} />
}

  ReduxNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
