/*
* Author Edward Seufert
*/
'use-strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appPrefActions from '../../core/common/apppref-actions';
import fuLogger from '../../core/common/fu-logger';
import AccessDeniedView from '../../coreView/usermgnt/accessdenied-view';

class AccessDeniedContainer extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		//this.props.actions.initMember();
	}

  render() {
			fuLogger.log({level:'TRACE',loc:'AccessDeniedContainer::render',msg:"Hi there"});
      return (
				<AccessDeniedView/>
			);
  }
}

AccessDeniedContainer.propTypes = {
	appPrefs: PropTypes.object,
	lang: PropTypes.string,
	appGlobal: PropTypes.object,
	actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {lang:state.lang, appPrefs:state.appPrefs};
}

function mapDispatchToProps(dispatch) {
  return { actions:bindActionCreators(appPrefActions,dispatch) };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccessDeniedContainer);
