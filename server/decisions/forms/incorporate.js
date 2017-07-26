{
  name: "ca_professional_corporation",
  description: "Creating The California Professional Corporation",
  start: "input_1",
  kind: "Form",
  node: [
    {
      id: "input_1",
      kind: "Input",
      content: {
        question: "What will be the profession of your corporation?",
        fields: [
          { kind: "text" }
        ],
        store: "company_profession",
        next: "input_2"
      }
    },
    {
      id: "input_2",
      kind: "Input",
      content: {
        question: `What will be the name of your company?
                <small>Note - your profession may have restrictions on the name of your corporation, consult your regulatory board for any restrictions</small>`,
        fields: [
          { kind: "text" }
        ],
        store: "company_name",
        next: "input_3"
      }
    },
    {
      id: "input_3",
      kind: "Input",
      content: {
        question: "What will be the primary address of the company?",
        fields: [
          { kind: "text" }
        ],
        store: "company_address",
        next: "single_4"
      }
    },
    {
      id: "single_4",
      kind: "Single",
      content: {
        question: "What is the total number of shares the corporation will be authorized to issue?",
        fields: [
          { kind: "select", label: "1,000,000", value: 1000000 },
          { kind: "select", label: "100,00", value: 10000 },
          { kind: "number", label: "Other" },
        ],
        store: "number_of_shares",
        next: "input_5"
      }
    },
    {
      id: "input_5",
      kind: "Input",
      content: {
        question: "Who will incorporate the company?",
        fields: [
          { kind: "text" }
        ],
        store: "incorporator_name",
        next: "input_6"
      }
    },
    {
      id: "input_6",
      kind: "Input",
      content: {
        question: "Who will serve as the registered agent of the company?",
        fields: [
          { kind: "text" }
        ],
        store: "registered_agent_name",
        next: "single_7"
      }
    },
    {
      id: "single_7",
      kind: "Single",
      content: {
        question: "Who will incorporate the company?",
        fields: [
          { kind: "select", label: "Person", next: "input_8" },
          { kind: "select", label: "Corporation", next: "yesno_9" }
        ]
      }
    },
    {
      id: "input_8",
      kind: "Input",
      content: {
        question: "What is <strong>${registered_agent_name}</strong>",
        fields: [
          { kind: "text" }
        ],
        store: "registered_agent_address",
        next: "form_1"
      }
    },
    {
      id: "yesno_9",
      kind: "YesNo",
      content: {
        question: "Note that you may only select a corporation that is registered with the California Secretary of State as a Registered Corporate Agent for service of process. Is <strong>${registered_agent_name}</strong> a Registered Corporate Agent?",
        fields: [
          { kind: "select", label: "Yes", next: "form_2" },
          { kind: "select", label: "No", next: "input_10" }
        ]
      }
    },
    {
      id: "input_10",
      kind: "Input",
      content: {
        question: 'Please select an individual to be your registered agent. Who will serve as the registered agent of the company?',
        fields: [
          { kind: "text" }
        ],
        store: "registered_agent_name",
        next: "input_8"
      }
    },
    {
      id: "form_1",
      kind: "Form",
      content: {
        name: "ca_form_articles_of_professional_incorporation_1"
      }
    },
    {
      id: "form_2",
      kind: "Form",
      content: {
        name: "ca_form_articles_of_professional_incorporation_2"
      }
    },
  ]
}
