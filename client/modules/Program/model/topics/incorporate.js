export default {
  name: "incorporate",
  description: "Should I incorporate ( or become an LLC )?",
  start: "action_1",
  kind: "Topic",
  attach: {
    ['NOTE_1']: 'NOTE_1',
    ['NOTE_2']: 'NOTE_2',
    ['NOTE_3']: 'NOTE_3',
    ['NOTE_4']: 'NOTE_4',
    ['NOTE_5']: 'NOTE_5',
    ['NOTE_6']: 'NOTE_6',
    ['NOTE_7']: 'NOTE_7',
    ['NOTE_8']: 'NOTE_8'

  },
  node: [
    {
      id: "action_1",
      kind: "Action",
      content: {
        kind: "SET_VALUE",
        store: "index",
        value: 0,
        next: "single_1"
      }
    },
    {
      id: "single_1",
      kind: "Single",
      content: {
        question: "What will be the primary business of your company?",
        fields: [
          { label: "Real Estate Investment", next: "final_1" },
          { label: "A Profession", next: "yesno_2" },
          { label: "Personal Services (other than a Profession)", next: "yesno_2" },
          { label: "Restaurant", next: "yesno_2" },
          { label: "Hotel", next: "yesno_2" },
          { label: "Farming", next: "yesno_2" },
          { label: "Retail", next: "yesno_2.5" },
          { label: "Construction", next: "yesno_2.5" },
          { label: "A Brokerage", next: "yesno_2" },
          { label: "Finance", next: "yesno_2" },
          { label: "Insurance", next: "yesno_2" },
          { label: "Manufacturing", next: "yesno_2.5" },
          { label: "Mineral Extraction", next: "yesno_2" },
          { label: "Other", next: "yesno_2" }
        ]
      }
    },
    {
      id: "yesno_2.5",
      kind: "YesNo",
      content: {
          question: "Do you expect to sell the business form a profit of at least $100,100, five or more years from now?",
          fields: [
            { label: "Yes", next: "final_2" },
            { label: "No", next: "yesno_2" }
          ]
      }
    },
    {
      id: "final_1",
      kind: "Final",
      content: {
        title: "Form LLC",
        attach: ['NOTE_1']
      }
    },
    {
      id: "final_2",
      kind: "Final",
      content: {
        kind: "ToForm",
        title: "You should consider forming a C Corporation",
        attach: ['NOTE_5'],
        to: "Corp"
      }
    },
    {
      id: "yesno_2",
      kind: "YesNo",
      content: {
          question: "Do you have, or expect to have, any partners or investors in the business?",
          fields: [
            { label: "Yes", next: "yesno_2.1" },
            { label: "No", next: "single_3" }
          ]
      }
    },
    {
      id: "yesno_2.1",
      kind: "YesNo",
      content: {
          question: "Do you expect to receive venture capital funding?",
          fields: [
            { label: "Yes", next: "final_6" },
            { label: "No", next: "yesno_2.2" },
          ]
      }
    },
    {
      id: "final_6",
      kind: "Final",
      content: {
        kind: "ToForm",
        title: "Form a C Corporation",
        message: "",
        attach: ['NOTE_6'],
        to: "Corp"
      }
    },
    {
      id: "yesno_2.2",
      kind: "YesNo",
      content: {
          question: "Will income and losses be allocated proportionally to all owners?(For example, would a 25% owner be allocated 25% of all income and losses?)",
          fields: [
            { label: "Yes", next: "final_7" },
            { label: "No", next: "final_8" },
          ]
      }
    },
    {
      id: "final_7",
      kind: "Final",
      content: {
        kind: "ToForm",
        title: "Form S Corporation",
        attach: ['NOTE_7'],
        to: "S-Corp"
      }
    },
    {
      id: "final_8",
      kind: "Final",
      content: {
        title: "Form LLC",
        attach: ['NOTE_8']
      }
    },
    {
      id: "single_3",
      kind: "Single",
      content: {
          question: "How much have you invested or do you expect to invest in the business?",
          fields: [
            { label: "Under $10,000", next: "single_4" },
            { label: "$10,000 to $50,000", next: "action_2" },
            { label: "Over $50,000", next: "final_3" }
          ]
      }
    },
    {
      id: "action_2",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 1,
        next: "single_4"
      }
    },
    {
      id: "final_3",
      kind: "Final",
      content: {
        kind: "ToForm",
        title: "Form S Corporation",
        attach: ['NOTE_4'],
        to: "S-Corp"
      }
    },
    {
      id: "single_4",
      kind: "Single",
      content: {
          question: "What do you expect the business to earn next year (before payment of any salary to you)?",
          fields: [
            { label: "I don't know", next: "single_5" },
            { label: "Expect to either lose money or have earnings of less than $25,000", next: "single_5" },
            { label: "$25,000 to $50,000", next: "action_3" },
            { label: "$50,000 to $100,000", next: "action_4" },
            { label: "$100,000 to $250,000", next: "action_5" },
            { label: "Expects earnings of over $250,000", next: "final_3" }
          ]
      }
    },
    {
      id: "action_3",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 1,
        next: "yesno_8"
      }
    },
    {
      id: "action_4",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 2,
        next: "yesno_8"
      }
    },
    {
      id: "action_5",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 3,
        next: "action_6"
      }
    },
    {
      id: "action_6",
      kind: "Action",
      content: {
        kind: "SWITCH_VALUE",
        store: "index",
        value: [3],
        next: ["yesno_8", "final_3"]
      }
    },
    {
      id: "single_5",
      kind: "Single",
      content: {
          question: "What is your net worth?",
          fields: [
            { label: "Over $100,000", next: "yesno_7" },
            { label: "Under $100,000", next: "final_4" }
          ]
      }
    },
    {
      id: "final_4",
      kind: "Final",
      content: {
        title: "Don't incorporate",
        attach: ['NOTE_3']
      }
    },
    {
      id: "yesno_7",
      kind: "YesNo",
      content: {
          question: "Do you have, or expect to have, any employees or agents?",
          fields: [
            { label: "Yes", next: "final_5" },
            { label: "No", next: "yesno_10" }
          ]
      }
    },
    {
      id: "final_5",
      kind: "Final",
      content: {
        title: "Form LLC",
        attach: ['NOTE_2']
      }
    },
    {
      id: "yesno_8",
      kind: "YesNo",
      content: {
          question: "Do you have, or expect to have, any employees or agents?",
          fields: [
            { label: "Yes", next: "action_7" },
            { label: "No", next: "yesno_10" }
          ]
      }
    },
    {
      id: "action_7",
      kind: "Action",
      content: {
        kind: "SWITCH_VALUE",
        store: "index",
        value: [1],
        next: ["final_5", "final_3"]
      }
    },
    {
      id: "yesno_10",
      kind: "YesNo",
      content: {
          question: "Is primary business manufacturing, construction, mineral extraction, farming, restaurant or hotel?",
          fields: [
            { label: "Yes", next: "action_7" },
            { label: "No", next: "final_4" }
          ]
      }
    }
  ]
};
