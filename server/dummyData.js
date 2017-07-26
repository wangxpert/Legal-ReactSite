import Program from './models/program';
import ca_professional_corporation from './decisions/forms/incorporate';
import ca_s_corporation from './decisions/forms/s-incorporate';

export default function () {
  Program.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const incorporate = {
      name: "incorporate",
      description: "Should I incorporate ( or become an LLC )?",
      node: [
        {
          id: "action_1",
          type: "Action",
          action: {
            type: "SET_INDEX",
            value: 0,
            next: "question_1"
          }
        },
        {
          id: "question_1",
          type: "Question",
          content: {
            question: "What will be the primary business of your company?",
            decision: [
              { answer: "Real Estate Investment", next: "result_1" },
              { answer: "A Profession", next: "question_2" },
              { answer: "Personal Services (other than a Profession)", next: "question_2" },
              { answer: "Restaurant", next: "question_2" },
              { answer: "Hotel", next: "question_2" },
              { answer: "Farming", next: "question_2" },
              { answer: "Retail", next: "question_2.5" },
              { answer: "Construction", next: "question_2.5" },
              { answer: "A Brokerage", next: "question_2" },
              { answer: "Finance", next: "question_2" },
              { answer: "Insurance", next: "question_2" },
              { answer: "Manufacturing", next: "question_2.5" },
              { answer: "Mineral Extraction", next: "question_2" },
              { answer: "Other", next: "question_2" }
            ]
          }
        },
        {
          id: "question_2.5",
          type: "Question",
          content: {
              question: "Do you expect to sell the business form a profit of at least $100,100, five or more years from now?",
              decision: [
                { answer: "Yes", next: "result_2" },
                { answer: "No", next: "question_2" }
              ]
          }
        },
        {
          id: "result_1",
          type: "Result",
          result: {
            description: "Form An LLC - Add explanatory note1"
          }
        },
        {
          id: "result_2",
          type: "Result",
          result: {
            description: "You should consider forming a corporation - add explantory note 5"
          }
        },
        {
          id: "question_2",
          type: "Question",
          content: {
              question: "Do you have, or expect to have, any partners or investors in the business?",
              decision: [
                { answer: "Yes", next: "question_2.1" },
                { answer: "No", next: "question_3" }
              ]
          }
        },
        {
          id: "question_2.1",
          type: "Question",
          content: {
              question: "Do you expect to receive venture capital funding?",
              decision: [
                { answer: "Yes", next: "result_6" },
                { answer: "No", next: "question_2.2" },
              ]
          }
        },
        {
          id: "result_6",
          type: "Result",
          result: {
            description: "FORM A C CORPORATION - Go to explanatory note 6"
          }
        },
        {
          id: "question_2.2",
          type: "Question",
          content: {
              question: "Will income and losses be allocated proportionally to all owners?(For example, would a 25% owner be allocated 25% of all income and losses?)",
              decision: [
                { answer: "Yes", next: "result_7" },
                { answer: "No", next: "result_8" },
              ]
          }
        },
        {
          id: "result_7",
          type: "Result",
          result: {
            description: "FORM AN S CORPORATION - Go to explanatory note 7"
          }
        },
        {
          id: "result_8",
          type: "Result",
          result: {
            description: "FORM AN LLC. Go to explanatory note 8"
          }
        },
        {
          id: "question_3",
          type: "Question",
          content: {
              question: "How much have you invested or do you expect to invest in the business?",
              decision: [
                { answer: "Under $10,000", next: "question_4" },
                { answer: "$10,000 to $50,000", next: "action_2" },
                { answer: "Over $50,000", next: "result_3" }
              ]
          }
        },
        {
          id: "action_2",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 1,
            next: "question_4"
          }
        },
        {
          id: "result_3",
          type: "Result",
          result: {
            description: "FORMS CORPORATION. Add explanatory note 4."
          }
        },
        {
          id: "question_4",
          type: "Question",
          content: {
              question: "What do you expect the business to earn next year (before payment of any salary to you)?",
              decision: [
                { answer: "I don't know", next: "question_5" },
                { answer: "Expect to either lose money or have earnings of less than $25,000", next: "question_5" },
                { answer: "$25,000 to $50,000", next: "action_3" },
                { answer: "$50,000 to $100,000", next: "action_4" },
                { answer: "$100,000 to $250,000", next: "action_5" },
                { answer: "Expects earnings of over $250,000", next: "result_3" }
              ]
          }
        },
        {
          id: "action_3",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 1,
            next: "question_8"
          }
        },
        {
          id: "action_4",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 2,
            next: "question_8"
          }
        },
        {
          id: "action_5",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 3,
            next: "action_6"
          }
        },
        {
          id: "action_6",
          type: "Action",
          action: {
            type: "GREATER_INDEX",
            value: 3,
            result: ["result_3", "question_8"]
          }
        },
        {
          id: "question_5",
          type: "Question",
          content: {
              question: "What is your net worth?",
              decision: [
                { answer: "Over $100,000", next: "question_7" },
                { answer: "Under $100,000", next: "result_4" }
              ]
          }
        },
        {
          id: "result_4",
          type: "Result",
          result: {
            description: "DON'T INCORPORATE - Add explanatory note 3."
          }
        },
        {
          id: "question_7",
          type: "Question",
          content: {
              question: "Do you have, or expect to have, any employees or agents?",
              decision: [
                { answer: "Yes", next: "result_5" },
                { answer: "No", next: "question_10" }
              ]
          }
        },
        {
          id: "result_5",
          type: "Result",
          result: {
            description: "FORM AN LLC - Add explanatory note 2"
          }
        },
        {
          id: "question_8",
          type: "Question",
          content: {
              question: "Do you have, or expect to have, any employees or agents?",
              decision: [
                { answer: "Yes", next: "action_7" },
                { answer: "No", next: "question_10" }
              ]
          }
        },
        {
          id: "action_7",
          type: "Action",
          action: {
            type: "GREATER_INDEX",
            value: 1,
            result: ["result_3", "result_5"]
          }
        },
        {
          id: "question_10",
          type: "Question",
          content: {
              question: "Is primary business manufacturing, construction, mineral extraction, farming, restaurant or hotel?",
              decision: [
                { answer: "Yes", next: "action_7" },
                { answer: "No", next: "result_4" }
              ]
          }
        }
      ]
    };

    const payroll = {
      name: "payroll",
      description: "Do I need to set up Payroll?",
      start: "question_1",
      node: [
        {
          id: "question_1",
          type: "Question",
          content: {
            question: "Will any of the business owners work in the business?",
            decision: [
              { answer: "Yes", next: "question_2" },
              { answer: "No", next: "question_5" }
            ]
          }
        },
        {
          id: "question_2",
          type: "Question",
          content: {
              question: "Is the business a corporation, partnership, limited liability company or sole proprietorship?",
              decision: [
                { answer: "LLC", next: "question_3" },
                { answer: "Corporation", next: "result_1" },
                { answer: "Partnership or Sole proprietorship", next: "question_5" },
              ]
          }
        },
        {
          id: "result_1",
          type: "Result",
          result: {
            description: "It appears that you should treat your owners as employees and set up payroll. [Explanation 2]"
          }
        },
        {
          id: "question_3",
          type: "Question",
          content: {
              question: "Has the LLC elected to be taxed as a corporation?",
              decision: [
                { answer: "Yes", next: "result_1" },
                { answer: "No", next: "question_5" }
              ]
          }
        },
        {
          id: "question_5",
          type: "Question",
          content: {
              question: "Will the business have any workers, not employed by some other company, that will work regularly for the business?",
              decision: [
                { answer: "Yes", next: "question_6" },
                { answer: "No", next: "result_2" },
              ]
          }
        },
        {
          id: "result_2",
          type: "Result",
          result: {
            description: "It does not appear that you will have any employees. Therefore, you will not need to set up payroll for the business."
          }
        },
        {
          id: "question_6",
          type: "Question",
          content: {
              question: "As to any workers performing services for the business, will the business control  what work is done by the worker and how the work is done? [Explanation 3]",
              decision: [
                { answer: "Yes", next: "result_3" },
                { answer: "No", next: "question_7" },
              ]
          }
        },
        {
          id: "result_3",
          type: "Result",
          result: {
            description: "It appears that you will have employees. Therefor you should set up payroll for the business. [Explanation1]"
          }
        },
        {
          id: "question_7",
          type: "Question",
          content: {
              question: `Does the business have or expect to have any of the following workers?<br/>
                    <small>A. A driver who distributes beverages (other than milk) or meat, vegetable, fruit, or bakery products; or who picks up and delivers laundry or dry cleaning, if the driver is your agent or is paid on commission.<br/>
                    B. A full-time life insurance sales agent whose principal business activity is selling life insurance or annuity contracts, or both, primarily for one life insurance company.<br/>
                    C. An individual who works at home on materials or goods that you supply and that must be returned to you or to a person you name, if you also furnish specifications for the work to be done.<br/>
                    D. A traveling or city salesperson who works for you full-time and turns in orders to you from wholesalers, retailers, contractors, or operators of hotels, restaurants, or other similar establishments for goods that are purchased for resale or as supplies for use in the buyer's business operation.</small>`,
              decision: [
                { answer: "No", next: "result_4" },
                { answer: "Yes", next: "question_8" },
              ]
          }
        },
        {
          id: "result_4",
          type: "Result",
          result: {
            description: "It does not appear that you will have any employees. Therefore, you will not need to set up payroll for the business."
          }
        },
        {
          id: "question_8",
          type: "Question",
          content: {
              question: `For your workers who fall into any of the four previously mentioned categories, do any such workers meet ALL of the following three conditions:
                  <small>1. The service contract states or implies that substantially all the services are to be performed personally by them<br/>.
                  2. They don't have a substantial investment in the equipment and property used to perform the services (other than an investment in facilities for transportation, such as a car or truck)<br/>.
                  3. The services are performed for you on a continuing basis.</small>`,
              decision: [
                { answer: "Yes", next: "result_5" },
                { answer: "No", next: "result_4" },
              ]
          }
        },
        {
          id: "result_5",
          type: "Result",
          result: {
            description: "It appears that you will have statutory employees. Therefore, you will need to set up payrool for the business. Although federal income tax is not withheld from the wages of statutory employees, social security taxes and medicare taxes are.."
          }
        },
      ]
    };

    const trademark = {
      name: "trademark",
      description: "TradeMark",
      start: "action_1",
      node: [
        {
          id: "action_1",
          type: "Action",
          action: {
            type: "SET_INDEX",
            value: 0,
            next: "question_1.1"
          }
        },
        {
          id: "question_1.1",
          type: "Question",
          content: {
            question: "Does your mark consist solely of words or does it include design?",
            decision: [
              { answer: "Includes design", next: "question_3.34" },
              { answer: "Solely words", next: "question_1.3" },
            ]
          }
        },
        {
          id: "question_1.3",
          type: "Question",
          content: {
            question: "Does your mark include a foreign term?",
            decision: [
              { answer: "Yes", next: "question_1.4" },
              { answer: "No", next: "question_1.5" }
            ]
          }
        },
        {
          id: "question_1.4",
          type: "Question",
          content: {
            question: "Use the English translation for all of the following questions.",
            decision: [
              { answer: "OK", next: "question_1.5" }
            ]
          }
        },
        {
          id: "question_1.5",
          type: "Question",
          content: {
            question: "Is it generic?",
            decision: [
              { answer: "Yes", next: "result_1.6" },
              { answer: "Probably", next: "action_1.7" },
              { answer: "No", next: "question_1.9" },
              { answer: "Probably Not", next: "action_1.8" },
            ]
          }
        },
        {
          id: "result_1.6",
          type: "Result",
          result: {
            description: "Your mark is not registrable."
          }
        },
        {
          id: "action_1.7",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 5,
            next: "question_1.9"
          }
        },
        {
          id: "action_1.8",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 1,
            next: "question_1.9"
          }
        },
        {
          id: "question_1.9",
          type: "Question",
          content: {
            question: "Is your mark descriptive, or arbitrary, suggestive or fanciful?",
            decision: [
              { answer: "Arbitrary", next: "question_1.11" },
              { answer: "Suggestive", next: "question_1.11" },
              { answer: "Fanciful", next: "question_1.11" },
              { answer: "Descriptive", next: "result_1.10" }
            ]
          }
        },
        {
          id: "result_1.10",
          type: "Result",
          result: {
            description: "You mark is likely not registrable on the Principal Register without secondary meaning - you may wish to register on the Supplemental Register[link to Supplement Note 10]"
          }
        },
        {
          id: "question_1.11",
          type: "Question",
          content: {
            question: "Is it geographically descriptive?",
            decision: [
              { answer: "Yes", next: "result_1.10" },
              { answer: "Probably", next: "action_1.12" },
              { answer: "No", next: "question_2.16" },
              { answer: "Probably Not", next: "action_1.13" }
            ]
          }
        },
        {
          id: "action_1.12",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 3,
            next: "question_2.16"
          }
        },
        {
          id: "action_1.13",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 1,
            next: "question_2.16"
          }
        },
        {
          id: "question_2.16",
          type: "Question",
          content: {
            question: "Is it a surname, an individual's name or likeness, or the title of a single book and/or movie?",
            decision: [
              { answer: "Yes", next: "result_2.17" },
              { answer: "No", next: "question_2.18" }
            ]
          }
        },
        {
          id: "result_2.17",
          type: "Result",
          result: {
            description: "You mark is likely not registrable on the Principal Register without secondary meaning - you may wish to register on the Supplemental Register[link to Supplement Note 17]"
          }
        },
        {
          id: "question_2.18",
          type: "Question",
          content: {
            question: "Is it deceptive, scandalous, immoral or disparaging?",
            decision: [
              { answer: "Yes", next: "result_2.19" },
              { answer: "Probably", next: "action_2.20" },
              { answer: "No", next: "question_2.22" },
              { answer: "Probably Not", next: "action_2.21" }
            ]
          }
        },
        {
          id: "result_2.19",
          type: "Result",
          result: {
            description: "Your mark is likely not registrable"
          }
        },
        {
          id: "action_2.20",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 5,
            next: "question_2.22"
          }
        },
        {
          id: "action_2.21",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 1,
            next: "question_2.22"
          }
        },
        {
          id: "question_2.22",
          type: "Question",
          content: {
            question: "Check for similar existing trademarks used on similar products or services. [Insert text from Trademark supplement Note 22]",
            decision: [
              { answer: "OK", next: "question_2.23" }
            ]
          }
        },
        {
          id: "question_2.23",
          type: "Question",
          content: {
            question: "Were you able to find a similar trademark in sound, meaning, appearance or impression?",
            decision: [
              { answer: "Yes", next: "question_2.24" },
              { answer: "Probably", next: "question_2.24" },
              { answer: "No", next: "action_2.29" },
              { answer: "Probably Not", next: "question_2.27" }
            ]
          }
        },
        {
          id: "question_2.24",
          type: "Question",
          content: {
            question: "Are the goods and services of the other mark related to yours in such a way that consumers may believe they come from the same source? i.e. hats and t-shirts",
            decision: [
              { answer: "Yes", next: "result_2.25" },
              { answer: "Probably", next: "result_2.25" },
              { answer: "No", next: "action_2.29" },
              { answer: "Probably Not", next: "action_2.26" }
            ]
          }
        },
        {
          id: "result_2.25",
          type: "Result",
          result: {
            description: "Your mark is likely not registrable"
          }
        },
        {
          id: "action_2.26",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 1,
            next: "action_2.29"
          }
        },
        {
          id: "question_2.27",
          type: "Question",
          content: {
            question: "Are the goods and services of the other mark related to yours in such a way that consumers may believe they come from the same source? i.e. hats and t-shirts",
            decision: [
              { answer: "Yes", next: "action_2.28" },
              { answer: "Probably", next: "action_2.28" },
              { answer: "No", next: "action_2.29" },
              { answer: "Probably Not", next: "action_2.28" }
            ]
          }
        },
        {
          id: "action_2.28",
          type: "Action",
          action: {
            type: "ADD_INDEX",
            value: 1,
            next: "action_2.29"
          }
        },
        {
          id: "action_2.29",
          type: "Action",
          action: {
            type: "SWITCH_INDEX",
            value: [0, 4],
            result: ["result_2.30", "result_2.31", "result_2.32"]
          }
        },
        {
          id: "result_2.30",
          type: "Result",
          result: {
            description: "Great. If you are ready to file your trademark application <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
          }
        },
        {
          id: "result_2.31",
          type: "Result",
          result: {
            description: "It appears your mark is registrable based upone your responses. However, as you expressed some uncertainty as to [link to supplement, display section from the source of the points] there is higher risk of rejection. If you're ready to file, <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
          }
        },
        {
          id: "result_2.32",
          type: "Result",
          result: {
            description: "You mark is probably not registrable based upon your responses. If you still wish to register, you may want to consult an attorney. Here are some ways you could increase the likelihood your trademark is accepteed [link to suuplement, display section from the source of the points] If you still wish to file, <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
          }
        },
        {
          id: "question_3.34",
          type: "Question",
          content: {
            question: "Is it functional?",
            decision: [
              { answer: "Yes", next: "result_3.35" },
              { answer: "No", next: "question_3.36" }
            ]
          }
        },
        {
          id: "result_3.35",
          type: "Result",
          result: {
            description: "Your mark is not registrable"
          }
        },
        {
          id: "question_3.36",
          type: "Question",
          content: {
            question: "Is it matter that is used in a purely ornamental manner?",
            decision: [
              { answer: "Yes", next: "result_3.35" },
              { answer: "No", next: "question_1.3" }
            ]
          }
        },
      ]
    };

    const program1 = new Program(incorporate);
    const program2 = new Program(payroll);
    const program3 = new Program(trademark);
    const form1 = new Program(ca_professional_corporation);
    const form2 = new Program(ca_s_corporation);

    Program.create([program1, program2, program3, form1, form2], (error) => {
      if (!error) {
        console.log('ready to go....');
      }
    });
  });
}
