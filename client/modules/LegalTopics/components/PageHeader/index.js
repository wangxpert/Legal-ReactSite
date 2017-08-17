import React from 'react';

// Import styles
import styles from './styles.css';
import imgBack from '../../../../assets/page-header.png';
import imgClock  from '../../../../assets/clock.png';
import imgCheck  from '../../../../assets/check.png';
import imgFree  from '../../../../assets/free.png';

function PageHeader(props) {
  return (
    <div className={ styles.container }>
      <img className={ styles['back-img'] } src={ imgBack } />
      <div className={ styles.overlay }>
        <div className="container">
          <div className={ styles.title }>
            Legal Topics
          </div>
          <div className={ styles.description }>
            Our Mavens are here to help! Scroll below to get started.
          </div>
          <div className={ `row ${ styles.content }` }>
            <div className="col-xs-4">
              <img className={ styles.icon } src={ imgFree } />
              <div>Free to use</div>
            </div>
            <div className="col-xs-4">
              <img className={ styles.icon } src={ imgClock } />
              <div>Quick and easy</div>
            </div>
            <div className="col-xs-4">
              <img className={ styles.icon } src={ imgCheck } />
              <div>Reliable results</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader;
