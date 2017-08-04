export default {
  name: "transfertax",
  description: "California Documentary Transfer Tax",
  start: "input_1",
  kind: "Topic",
  node: [
    {
      id: "input_1",
      kind: "Input",
      content: {
        question: "Please select country and city.",
        fields: [
          { kind: "select", label: "Select County", datasource: "county", store: "county" },
          { kind: "select", label: "Select City", datasource: "city", store: "city" }
        ],
        next: "single_2"
      }
    },
    {
      id: "single_2",
      kind: "Single",
      content: {
        question: "Is this a deed transfer or entity transfer?",
        fields: [
          { kind: "choice", label: "Entity", next: "single_3" },
          { kind: "choice", label: "Deed", next: "multi_2" }
        ]
      }
    },
    {
      id: "multi_2",
      kind: "Multi",
      content: {
        question: "County Exemptions",
        fields: [
          { datasource: "county_exemption_list" }
        ],
        store: "county_exemption",
        next: "multi_3"
      }
    },
    {
      id: "multi_3",
      kind: "Multi",
      content: {
        question: "City Exemptions",
        fields: [
          { datasource: "city_exemption_list" }
        ],
        store: "city_exemption",
        next: "action_1"
      }
    },
    {
      id: "action_1",
      kind: "Action",
      content: {
        kind: "CHECK_COUNTY_EXEMPTION",
        store: "county_exemption",
        next: ["action_2", "yesno_1"]
      }
    },
    {
      id: "action_2",
      kind: "Action",
      content: {
        kind: "CHECK_CITY_EXEMPTION",
        store: "city_exemption",
        next: ["result_1", "yesno_1"]
      }
    },
    {
      id: "yesno_1",
      kind: "YesNo",
      content: {
        question: "Was the deed made as a result of or in lieu of foreclosure or trustee's sale?",
        fields: [
          { kind: "choice", label: "Yes", next: "yesno_2" },
          { kind: "choice", label: "No", next: "result_2" }
        ]
      }
    },
    {
      id: "yesno_2",
      kind: "YesNo",
      content: {
        question: "Did the consideration exceed the unpaid debt, including accrued interest and cost of foreclosure?",
        fields: [
          { kind: "choice", label: "Yes", next: "result_2" },
          { kind: "choice", label: "No", next: "result_1" }
        ]
      }
    },
    {
      id: "result_1",
      kind: "Result",
      content: {
        message: "Congratulation! This transaction is exempt and no transfer taxes are due."
      }
    },
    {
      id: "result_2",
      kind: "Result",
      content: {
        message: "Calculation"
      }
    },
    {
      id: "single_3",
      kind: "Single",
      content: {
        question: "What kind of entity is the property owner at the time of the transfer?",
        fields: [
          { kind: "choice", label: "Partnership", next: "yesno_3" },
          { kind: "choice", label: "Corporation", next: "yesno_4" },
          { kind: "choice", label: "Disregarded", next: "yesno_4" },
        ]
      }
    },
    {
      id: "yesno_3",
      kind: "YesNo",
      content: {
        question: "Was there a transfer of 50% or more of the capital and profits of the partnership within a 12-month period?",
        fields: [
          { kind: "choice", label: "Yes", next: "display_1" },
          { kind: "choice", label: "No", next: "display_2" }
        ]
      }
    },
    {
      id: "display_1",
      kind: "Display",
      content: {
        message: `100% of the net value of the partnership property is subject to transfer tax, even if less than 100% of the partnership is transferred.
              <br /><small>(See California Revenue and Taxation Code, Section 11925(b))</small>`
      },
      next: "result_2"
    },
    {
      id: "display_2",
      kind: "Display",
      content: {
        message: `Exempt from transfer tax.<br />
          <small>(See California Revenue and Taxation Code, Section 11925(a))</small>`
      }
    },
    {
      id: "yesno_4",
      kind: "YesNo",
      content: {
        question: "Does grantee own over 50% of the entity?",
        fields: [
          { kind: "choice", label: "Yes", next: "yesno_5" },
          { kind: "choice", label: "No", next: "yesno_6" }
        ]
      }
    },
    {
      id: "yesno_5",
      kind: "YesNo",
      content: {
        question: "Did grantee own over 50% of the entity before the transaction?",
        fields: [
          { kind: "choice", label: "Yes", next: "display_3" },
          { kind: "choice", label: "No", next: "display_4" }
        ]
      }
    },
    {
      id: "display_3",
      kind: "Display",
      content: {
        message: "Exempt from transfer tax",
      }
    },
    {
      id: "display_4",
      kind: "Display",
      content: {
        message: `The transfer is subject to transfer tax.<br />
          <small>(See California Revenue and Taxation Code, section 64(c)(1))</small>`
      }
    },
    {
      id: "yesno_6",
      kind: "YesNo",
      content: {
        question: "Was there a prior excluded proportional interest transfer?",
        fields: [
          { kind: "choice", label: "Yes", next: "yesno_7" },
          { kind: "choice", label: "No", next: "display_3" }
        ]
      }
    },
    {
      id: "yesno_7",
      kind: "YesNo",
      content: {
        question: "Was more than 50% cumulatively transferred since (and including) the prior proportional interest transfer?",
        fields: [
          { kind: "choice", label: "Yes", next: "display_5" },
          { kind: "choice", label: "No", next: "display_3" }
        ]
      }
    },
    {
      id: "display_5",
      kind: "Display",
      content: {
        message: `The transfer is subject to transfer tax.<br />
          <small>(See California Revenue and Taxation Code, section 64(d); 926 North Ardmore Avenue, LLC v. County of Los Angeles, California Supreme Court)</small>`
      },
      next: "result_2"
    },
  ]
};
