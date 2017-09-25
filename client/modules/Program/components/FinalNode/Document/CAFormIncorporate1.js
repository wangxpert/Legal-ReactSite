import React from 'react';

import styles from './styles.css';

export default function Form(props) {
  const { info } = props.data;
  return (
    <div className={ styles.container }>
      <div className={ styles.header }>
        <div className={ styles.head }>CA Form Articles of Incorporation 1</div>
        <h2 className={ styles.title }>STATE OF CALIFORNIA<br />
          ARTICLES OF INCORPORATION</h2>
      </div>
      <div className={ styles.content }>
        <ol>
          <li>The name of the corporation is { info.company_name }.</li>

          <li>The address in the State of California of the corporation is:<br />
            <div className={ styles.info }>
              <span className={ styles['info-title'] }>Address :</span>
              <span className={ styles['info-content'] }> { info.company_address_city } { info.company_address_street } <br />
                  { info.company_address_state }, { info.company_address_zipcode }
              </span>
            </div>
          </li>

          <li>
            The  purpose  of  the  corporation  is  to  engage  in  any  lawful  act  or  activity  for which a corporation may be organized under the  General Corporation Law of California other than the  banking  business, the trust company  business or the practice  of  a  profession  permitted  to  be  incorporated  by  the  California Corporations Code.
          </li>

          <li>
            The name and address in the State of California of the corporation’s agent for service of process is:<br/>
            <div className={ styles.info }>
              <span className={ styles['info-title'] }>Name :</span>
              <span className={ styles['info-content'] }> { info.registered_agent_name } </span>
            </div>
            <div className={ styles.info }>
              <span className={ styles['info-title'] }>Address :</span>
              <span className={ styles['info-content'] }> { info.registered_agent_address_city } { info.registered_agent_address_street }<br />
                    { info.registered_agent_address_state }, { info.registered_agent_address_zipcode }
              </span>
            </div>
          </li>

          <li>
            The corporation is authorized to issue only one class of shares of stock; and the total number of shares that the corporation is authorized to issue is { info.number_of_shares }.
          </li>

          <li>
            The corporation is authorized to indemnify, to the fullest extent permissible under California law (as it may be amended from time to time), any person who at any time acts in the capacity of, or serves as, a director or officer of the corporation.
          </li>

          <li>
            The liability of the directors of the corporation for monetary damages shall be eliminated to the fullest extent permissible under California law, as it may be amended from time to time.
          </li>
        </ol>
      </div>
      <div className={ styles.footer }>
        <span className={ `${styles.info} col-xs-5` }>
          <span className={ styles['info-title'] }>Dated :</span>
          <span className={ styles['info-content'] }>_____________, { (new Date()).getFullYear() }</span>
        </span>
        <div className="col-xs-7" style={{ textAlign: 'right' }}>
          <span className={ styles.info }>
            <span className={ styles['info-content'] }>________________</span><br/><br/>
            <span className={ styles['info-content'] }> { `${info.incorporator_name_firstname} ${info.incorporator_name_lastname}` } , Incorporator</span>
          </span>
        </div>
      </div>
    </div>
  );
}
