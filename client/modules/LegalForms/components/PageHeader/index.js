import React from 'react';

// Import styles
import styles from './styles.css';
import imgBack from '../../../../assets/page-header.png';
import imgClock  from '../../../../assets/clock.png';
import imgCheck  from '../../../../assets/check.png';
import imgPrint  from '../../../../assets/print.png';

function PageHeader(props) {
  return (
    <div className={ `${ styles.container }` }>
      <img className={ styles['back-img'] } src={ imgBack } />
      <div className={ styles.overlay }>
        <div className="container">
          <div className={ `${ styles.title } wow fadeInLeft` }  data-wow-delay="0.3s" data-wow-duration="0.6s">
            Legal Forms
          </div>
          <div className={ `${styles.description} wow fadeInRight` } data-wow-delay="0.5s" data-wow-duration="0.6s">
            Welcome to the quick and simple solution to legal forms.
          </div>
          <div className={ `row ${ styles.content } wow` } data-wow-delay="1.6s">
            <div className="col-xs-4 wow flipInX" data-wow-delay="1.4s">
              <img className={ styles.icon } src={ imgClock } />
              <div>Quick and easy</div>
            </div>
            <div className="col-xs-4 wow flipInX" data-wow-delay="1.6s">
              <img className={ styles.icon } src={ imgCheck } />
              <div>Reliable results</div>
            </div>
            <div className="col-xs-4 wow flipInX" data-wow-delay="1.8s">
              <img className={ styles.icon } src={ imgPrint } />
              <div>Ready for print</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader;
