import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBox from './components/SearchBox/SearchBox'

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';
import { setLoginState } from '../../modules/Auth/AuthActions';

import Notifications from 'react-notification-system-redux';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    this.props.dispatch(setLoginState());
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    const { notifications } = this.props;

    //Optional styling
    const style = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          margin: '10rem 5rem 2rem 1rem'
        },

        success: { // Applied only to the success notification item

        }
      }
    };

    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development'}
        <div>
          <Helmet
            title="Legal Maven"
            titleTemplate="Legal Maven - %s"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header location={this.props.location}/>

          { this.props.app.showSearchBar &&
            <div className={styles['search-box-container']}>
              <SearchBox />
            </div>
          }

          <div className={styles.container}>
            {this.props.children}

              <Notifications
                notifications={notifications}
                style={style}
              />

          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  notifications: PropTypes.array
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    notifications: store.notifications,
    app: store.app
  };
}

export default connect(mapStateToProps)(App);
