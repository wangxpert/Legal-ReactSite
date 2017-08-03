import React from 'react';

import styles from './output.css';

const CAFormArticlesOfIncorporation1 = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h3>STATE OF CALIFORNIA</h3>
          <h3>ARTICLES OF INCORPORATION</h3>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div>1.&emsp;The name of the corporation is ___{props.input.company_name}___.
          </div>
          <br/>
          <div>
            <div>2.&emsp;The address in the State of California of the corporation is: </div>
            <br/>
            <div> Address: ___{props.input.company_address}___</div>
          </div>
            <br/>
          <div>
            3.&emsp;The purpose of the corporation is to engage in any lawful act or activity for which a corporation may be organized under the General Corporation Law of California other than the banking business, the trust company business or the practice of a profession permitted to be incorporated by the California Corporations Code.
          </div>
            <br/>
          <div>
            4.&emsp;The name and address in the State of California of the corporation&sbquo;s agent for the service of process is:
            <br/>
            <br/>
            <div>Name: ___{props.input.registered_agent_name}___</div>
            <br/>
            <div>Address: ___{props.input.registered_agent_address}___</div>
          </div>
            <br/>
          <div>
            5.&emsp;The corporation is authorized to issue only one class of shares of stock; and the total number of shares that the corporation is authorized to issue is ___{props.input.number_of_shares}___.
          </div>
            <br/>
          <div>
            6.&emsp;The corporation is authorized to indemnify, to the fullest extent permissible under California law (as it may be amended from time to time), any person who at any time acts in the capacity of, or serves as, a director or officer of the corporation.
          </div>
            <br/>
          <div>
            7.&emsp;The liability of the directors of the corporation for monetary damages shall be eliminated to the fullest extent permissible under California law, as it may be amended from time to time.
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div>Dated: __________ 2017,&emsp;&emsp;&emsp;&emsp;__________________________________</div>
        <br/>
        <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;___{props.input.incorporator_name}___, Incorporator </div>
      </div>
    </div>
  )
}

export default CAFormArticlesOfIncorporation1;
