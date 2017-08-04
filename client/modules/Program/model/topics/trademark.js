export default {
  name: "trademark",
  description: "TradeMark",
  start: "action_1",
  kind: "Topic",
  node: [
    {
      id: "action_1",
      kind: "Action",
      content: {
        kind: "SET_VALUE",
        store: "index",
        value: 0,
        next: "single_1.1"
      }
    },
    {
      id: "single_1.1",
      kind: "Single",
      content: {
        question: "Does your mark consist solely of words or does it include design?",
        fields: [
          { label: "Includes design", next: "yesno_3.34" },
          { label: "Solely words", next: "yesno_1.3" },
        ]
      }
    },
    {
      id: "yesno_1.3",
      kind: "YesNo",
      content: {
        question: "Does your mark include a foreign term?",
        fields: [
          { label: "Yes", next: "single_1.4" },
          { label: "No", next: "single_1.5" }
        ]
      }
    },
    {
      id: "single_1.4",
      kind: "Single",
      content: {
        question: "Use the English translation for all of the following questions.",
        fields: [
          { label: "OK", next: "single_1.5" }
        ]
      }
    },
    {
      id: "single_1.5",
      kind: "Single",
      content: {
        question: "Is it generic?",
        fields: [
          { label: "Yes", next: "result_1.6" },
          { label: "Probably", next: "action_1.7" },
          { label: "No", next: "single_1.9" },
          { label: "Probably Not", next: "action_1.8" },
        ]
      }
    },
    {
      id: "result_1.6",
      kind: "Result",
      content: {
        message: "Your mark is not registrable."
      }
    },
    {
      id: "action_1.7",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 5,
        next: "single_1.9"
      }
    },
    {
      id: "action_1.8",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 1,
        next: "single_1.9"
      }
    },
    {
      id: "single_1.9",
      kind: "Single",
      content: {
        question: "Is your mark descriptive, or arbitrary, suggestive or fanciful?",
        fields: [
          { label: "Arbitrary", next: "single_1.11" },
          { label: "Suggestive", next: "single_1.11" },
          { label: "Fanciful", next: "single_1.11" },
          { label: "Descriptive", next: "result_1.10" }
        ]
      }
    },
    {
      id: "result_1.10",
      kind: "Result",
      content: {
        message: "You mark is likely not registrable on the Principal Register without secondary meaning - you may wish to register on the Supplemental Register[link to Supplement Note 10]"
      }
    },
    {
      id: "single_1.11",
      kind: "Single",
      content: {
        question: "Is it geographically descriptive?",
        fields: [
          { label: "Yes", next: "result_1.10" },
          { label: "Probably", next: "action_1.12" },
          { label: "No", next: "yesno_2.16" },
          { label: "Probably Not", next: "action_1.13" }
        ]
      }
    },
    {
      id: "action_1.12",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 3,
        next: "yesno_2.16"
      }
    },
    {
      id: "action_1.13",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 1,
        next: "yesno_2.16"
      }
    },
    {
      id: "yesno_2.16",
      kind: "YesNo",
      content: {
        question: "Is it a surname, an individual's name or likeness, or the title of a single book and/or movie?",
        fields: [
          { label: "Yes", next: "result_2.17" },
          { label: "No", next: "single_2.18" }
        ]
      }
    },
    {
      id: "result_2.17",
      kind: "Result",
      content: {
        message: "You mark is likely not registrable on the Principal Register without secondary meaning - you may wish to register on the Supplemental Register[link to Supplement Note 17]"
      }
    },
    {
      id: "single_2.18",
      kind: "Single",
      content: {
        question: "Is it deceptive, scandalous, immoral or disparaging?",
        fields: [
          { label: "Yes", next: "result_2.19" },
          { label: "Probably", next: "action_2.20" },
          { label: "No", next: "single_2.22" },
          { label: "Probably Not", next: "action_2.21" }
        ]
      }
    },
    {
      id: "result_2.19",
      kind: "Result",
      content: {
        message: "Your mark is likely not registrable"
      }
    },
    {
      id: "action_2.20",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 5,
        next: "single_2.22"
      }
    },
    {
      id: "action_2.21",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 1,
        next: "single_2.22"
      }
    },
    {
      id: "single_2.22",
      kind: "Single",
      content: {
        question: "Check for similar existing trademarks used on similar products or services. [Insert text from Trademark supplement Note 22]",
        fields: [
          { label: "OK", next: "single_2.23" }
        ]
      }
    },
    {
      id: "single_2.23",
      kind: "Single",
      content: {
        question: "Were you able to find a similar trademark in sound, meaning, appearance or impression?",
        fields: [
          { label: "Yes", next: "single_2.24" },
          { label: "Probably", next: "single_2.24" },
          { label: "No", next: "action_2.29" },
          { label: "Probably Not", next: "single_2.27" }
        ]
      }
    },
    {
      id: "single_2.24",
      kind: "Single",
      content: {
        question: "Are the goods and services of the other mark related to yours in such a way that consumers may believe they come from the same source? i.e. hats and t-shirts",
        fields: [
          { label: "Yes", next: "result_2.25" },
          { label: "Probably", next: "result_2.25" },
          { label: "No", next: "action_2.29" },
          { label: "Probably Not", next: "action_2.26" }
        ]
      }
    },
    {
      id: "result_2.25",
      kind: "Result",
      content: {
        message: "Your mark is likely not registrable"
      }
    },
    {
      id: "action_2.26",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 1,
        next: "action_2.29"
      }
    },
    {
      id: "single_2.27",
      kind: "Single",
      content: {
        question: "Are the goods and services of the other mark related to yours in such a way that consumers may believe they come from the same source? i.e. hats and t-shirts",
        fields: [
          { label: "Yes", next: "action_2.28" },
          { label: "Probably", next: "action_2.28" },
          { label: "No", next: "action_2.29" },
          { label: "Probably Not", next: "action_2.28" }
        ]
      }
    },
    {
      id: "action_2.28",
      kind: "Action",
      content: {
        kind: "ADD_VALUE",
        store: "index",
        value: 1,
        next: "action_2.29"
      }
    },
    {
      id: "action_2.29",
      kind: "Action",
      content: {
        kind: "SWITCH_VALUE",
        store: "index",
        value: [0, 4],
        content: ["result_2.30", "result_2.31", "result_2.32"]
      }
    },
    {
      id: "result_2.30",
      kind: "Result",
      content: {
        message: "Great. If you are ready to file your trademark application <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
      }
    },
    {
      id: "result_2.31",
      kind: "Result",
      content: {
        message: "It appears your mark is registrable based upone your responses. However, as you expressed some uncertainty as to [link to supplement, display section from the source of the points] there is higher risk of rejection. If you're ready to file, <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
      }
    },
    {
      id: "result_2.32",
      kind: "Result",
      content: {
        message: "You mark is probably not registrable based upon your responses. If you still wish to register, you may want to consult an attorney. Here are some ways you could increase the likelihood your trademark is accepteed [link to suuplement, display section from the source of the points] If you still wish to file, <a href='http://www.uspto.gov/trademarks/teas/index.jsp'>click here</a>"
      }
    },
    {
      id: "yesno_3.34",
      kind: "YesNo",
      content: {
        question: "Is it functional?",
        fields: [
          { label: "Yes", next: "result_3.35" },
          { label: "No", next: "yesno_3.36" }
        ]
      }
    },
    {
      id: "result_3.35",
      kind: "Result",
      content: {
        message: "Your mark is not registrable"
      }
    },
    {
      id: "yesno_3.36",
      kind: "YesNo",
      content: {
        question: "Is it matter that is used in a purely ornamental manner?",
        fields: [
          { label: "Yes", next: "result_3.35" },
          { label: "No", next: "yesno_1.3" }
        ]
      }
    },
  ]
}
