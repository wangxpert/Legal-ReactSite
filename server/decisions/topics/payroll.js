export default {
  name: "payroll",
  description: "Do I need to set up Payroll?",
  start: "yesno_1",
  kind: "Topic",
  node: [
    {
      id: "yesno_1",
      kind: "YesNo",
      content: {
        question: "Will any of the business owners work in the business?",
        fields: [
          { label: "Yes", next: "single_2" },
          { label: "No", next: "single_5" }
        ]
      }
    },
    {
      id: "single_2",
      kind: "Single",
      content: {
          question: "Is the business a corporation, partnership, limited liability company or sole proprietorship?",
          fields: [
            { label: "LLC", next: "single_3" },
            { label: "Corporation", next: "result_1" },
            { label: "Partnership or Sole proprietorship", next: "single_5" },
          ]
      }
    },
    {
      id: "result_1",
      kind: "Result",
      content: {
        message: "It appears that you should treat your owners as employees and set up payroll. [Explanation 2]"
      }
    },
    {
      id: "single_3",
      kind: "Single",
      content: {
          question: "Has the LLC elected to be taxed as a corporation?",
          fields: [
            { label: "Yes", next: "result_1" },
            { label: "No", next: "single_5" }
          ]
      }
    },
    {
      id: "single_5",
      kind: "Single",
      content: {
          question: "Will the business have any workers, not employed by some other company, that will work regularly for the business?",
          fields: [
            { label: "Yes", next: "yesno_6" },
            { label: "No", next: "result_2" },
          ]
      }
    },
    {
      id: "result_2",
      kind: "Result",
      content: {
        message: "It does not appear that you will have any employees. Therefore, you will not need to set up payroll for the business."
      }
    },
    {
      id: "yesno_6",
      kind: "YesNo",
      content: {
          question: "As to any workers performing services for the business, will the business control  what work is done by the worker and how the work is done? [Explanation 3]",
          fields: [
            { label: "Yes", next: "result_3" },
            { label: "No", next: "yesno_7" },
          ]
      }
    },
    {
      id: "result_3",
      kind: "Result",
      content: {
        message: "It appears that you will have employees. Therefor you should set up payroll for the business. [Explanation1]"
      }
    },
    {
      id: "yesno_7",
      kind: "YesNo",
      content: {
          question: `Does the business have or expect to have any of the following workers?<br/>
                <small>A. A driver who distributes beverages (other than milk) or meat, vegetable, fruit, or bakery products; or who picks up and delivers laundry or dry cleaning, if the driver is your agent or is paid on commission.<br/>
                B. A full-time life insurance sales agent whose principal business activity is selling life insurance or annuity contracts, or both, primarily for one life insurance company.<br/>
                C. An individual who works at home on materials or goods that you supply and that must be returned to you or to a person you name, if you also furnish specifications for the work to be done.<br/>
                D. A traveling or city salesperson who works for you full-time and turns in orders to you from wholesalers, retailers, contractors, or operators of hotels, restaurants, or other similar establishments for goods that are purchased for resale or as supplies for use in the buyer's business operation.</small>`,
          fields: [
            { label: "No", next: "result_4" },
            { label: "Yes", next: "yesno_8" },
          ]
      }
    },
    {
      id: "result_4",
      kind: "Result",
      content: {
        message: "It does not appear that you will have any employees. Therefore, you will not need to set up payroll for the business."
      }
    },
    {
      id: "yesno_8",
      kind: "YesNo",
      content: {
          question: `For your workers who fall into any of the four previously mentioned categories, do any such workers meet ALL of the following three conditions:
              <small>1. The service contract states or implies that substantially all the services are to be performed personally by them<br/>.
              2. They don't have a substantial investment in the equipment and property used to perform the services (other than an investment in facilities for transportation, such as a car or truck)<br/>.
              3. The services are performed for you on a continuing basis.</small>`,
          fields: [
            { label: "Yes", next: "result_5" },
            { label: "No", next: "result_4" },
          ]
      }
    },
    {
      id: "result_5",
      kind: "Result",
      content: {
        message: "It appears that you will have statutory employees. Therefore, you will need to set up payrool for the business. Although federal income tax is not withheld from the wages of statutory employees, social security taxes and medicare taxes are.."
      }
    }
  ]
}
