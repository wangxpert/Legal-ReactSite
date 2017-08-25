import ca_professional_corporation from './forms/incorporate';
import ca_s_corporation from './forms/s-incorporate';
import de_professional_corporation from './forms/de_corp';
import de_s_corporation from './forms/de_s_corp';

import topic_transfertax from './topics/transfertax';
import topic_incorporate from './topics/incorporate';
import topic_payroll from './topics/payroll';
import topic_trademark from './topics/trademark';
import topic_securitydeposit from './topics/securitydeposit';

export default {
  ['ca_professional_corporation']: ca_professional_corporation,
  ['ca_s_corporation']: ca_s_corporation,
  ['de_professional_corporation']: de_professional_corporation,
  ['de_s_corporation']: de_s_corporation,

  ['incorporate']: topic_incorporate,
  ['payroll']: topic_payroll,
  ['trademark']: topic_trademark,
  ['transfertax']: topic_transfertax,
  ['securitydeposit']: topic_securitydeposit
};
