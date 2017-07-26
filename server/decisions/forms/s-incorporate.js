export default {
  name: "ca_s_corporation",
  description: "Creating The California S-Corporation",
  start: "single_1",
  kind: "Form",
  node: [
    {
      id: "single_1",
      kind: "Single",
      content: {
        question: "In which state would you like to incorporate your company?",
        fields: [
          { kind: "select", label: "California", next: "single_2" },
          { kind: "select", label: "Delaware", next: "Creating the Delware" }
        ]
      }
    },
    {
      id: "goto_1",
      kind: "Goto",
      content: {
        kind: "form",
        id: "ca_professional_corporation"
      }
    },
    {
      id: "single_2",
      kind: "Single",
      content: {
        question: "What will be the primary business of your company?",
        fields: [
          { kind: "select", label: "Real Estate Investment" },
          { kind: "select", label: "A Profession", next: "yesno_2" },
          { kind: "select", label: "Personal Services (other than a Profession)" },
          { kind: "select", label: "Restaurant" },
          { kind: "select", label: "Hotel" },
          { kind: "select", label: "Farming" },
          { kind: "select", label: "Retail" },
          { kind: "select", label: "Construction" },
          { kind: "select", label: "A Brokerage" },
          { kind: "select", label: "Finance" },
          { kind: "select", label: "Insurance" },
          { kind: "select", label: "Manufacturing" },
          { kind: "select", label: "Mineral Extraction" },
          { kind: "select", label: "Other" }
        ],
        next: "input_4"
      }
    },
    {
      id: "yesno_2",
      kind: "YesNo",
      content: {
        question: "Does your profession require a license, certification, or registration authorized by the Business and Professional Code, the Chiropractic Act, or the Osteopathic Act?",
        fields: [
          { kind: "select", label: "Yes", next: "yesno_3" },
          { kind: "select", label: "No", next: "input_4" }
        ]
      }
    },
    {
      id: "yesno_3",
      kind: "YesNo",
      content: {
        question: "Does your profession required a corporation to be a professional corporation?<br /><small>Check with your regulatory board whether your profession requires a professional corporation (as opposed to a traditional corporation), and for restrictions on the name of your professional corporation. A list of California  regulatory boards is available <a href='http://www.dca.ca.gov/about_dca/entities.html'>here</a></small>",
        fields: [
          { kind: "select", label: "Yes", next: "goto_1" },
          { kind: "select", label: "No", next: "input_4" }
        ]
      }
    },
    {
      id: "input_4",
      kind: "Input",
      content: {
        question: "What will be the name of your company?",
        fields: [
          { kind: "text" }
        ],
        store: "company_name",
        next: "input_5"
      }
    },
    {
      id: "input_5",
      kind: "Input",
      content: {
        question: "What will be the primary address of the company?",
        fields: [
          { kind: "text" }
        ],
        store: "company_address",
        next: "single_6"
      }
    },
    {
      id: "single_6",
      kind: "Single",
      content: {
        question: "What is the total number of shares the corporation will be authorized to issue?",
        fields: [
          { kind: "select", label: "1,000,000", value: 1000000 },
          { kind: "select", label: "100,00", value: 10000 },
          { kind: "number", label: "Other" },
        ],
        store: "number_of_shares",
        next: "input_7"
      }
    },
    {
      id: "input_7",
      kind: "Input",
      content: {
        question: "Who will incorporate the company?",
        fields: [
          { kind: "text" }
        ],
        store: "incorporator_name",
        next: "input_8"
      }
    },
    {
      id: "input_8",
      kind: "Input",
      content: {
        question: "Who will serve as the registered agent of the company?",
        fields: [
          { kind: "text" }
        ],
        store: "registered_agent_name",
        next: "single_9"
      }
    },
    {
      id: "single_9",
      kind: "Single",
      content: {
        question: "Is <strong>${registered_agent_name}</strong> a person or a corporation?",
        fields: [
          { kind: "select", label: "Person", next: "input_10" },
          { kind: "select", label: "Corporation", next: "yesno_11" }
        ]
      }
    },
    {
      id: "input_10",
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
      id: "yesno_11",
      kind: "YesNo",
      content: {
        question: "Note that you may only select a corporation that is registered with the California Secretary of State as a Registered Corporate Agent for service of process. Is <strong>${registered_agent_name}</strong> a Registered Corporate Agent?",
        fields: [
          { kind: "select", label: "Yes", next: "form_2" },
          { kind: "select", label: "No", next: "input_12" }
        ]
      }
    },
    {
      id: "input_12",
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
};
