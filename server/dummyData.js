import Program from './models/program';


/*import ca_professional_corporation from './decisions/forms/incorporate';
import ca_s_corporation from './decisions/forms/s-incorporate';

import topic_transfertax from './decisions/topics/transfertax';
import topic_incorporate from './decisions/topics/incorporate';
import topic_payroll from './decisions/topics/payroll';
import topic_trademark from './decisions/topics/trademark';*/

export default function () {
  Program.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    /*const topic1 = new Program(topic_incorporate);
    const topic2 = new Program(topic_payroll);
    const topic3 = new Program(topic_trademark);
    const topic4 = new Program(topic_transfertax);
    const form1 = new Program(ca_professional_corporation);
    const form2 = new Program(ca_s_corporation);*/

    //Program.create([topic1, topic2, topic3, topic4, form1, form2], (error) => {

    Program.create([], (error) => {
      if (!error) {
        console.log('ready to go....');
      }
    });
  });
}
