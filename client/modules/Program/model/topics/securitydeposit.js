export default {
  name: "securitydeposit",
  description: "Security Deposit",
  start: "yesno_1",
  kind: "Topic",
  node: [
    {
      id: "yesno_1",
      kind: "YesNo",
      content: {
        question: "Has it been more than 21 days since you have moved?",
        fields: [
          { label: "Yes", next: "yesno_2" },
          { label: "No", next: "result_1" }
        ]
      }
    },
    {
      id: "result_1",
      kind: "Result",
      content: {
        message: "Under CA law, Landlord has 21 calendar days after you move to send you a full refund of your security deposit, or mail or personally deliver to you an itemized statement that lists the amounts of any deductions from your security deposit and the reasons for the deductions, together with a refund of any amounts not deducted."
      }
    },
    {
      id: "yesno_2",
      kind: "YesNo",
      content: {
        question: "Has the landlord mailed or personally delivered to you an itemized statement that lists the amounts of any deductions from your security deposit and the reasons for the deductions, together with a refund of any amounts not deducted?",
        fields: [
          { label: "Yes", next: "yesno_3" },
          { label: "No", next: "result_2" }
        ]
      }
    },
    {
      id: "result_2",
      kind: "Result",
      content: {
        message: `According to a California Supreme Court decision, the landlord loses the right to keep any of the security deposit and must return the entire deposit to you.<br />
               <small>[Portman and Brown, California Tenants' Rights, page 235-236 (NOLO Press 2010).] <br />
                      [Granberry v. Islay Investments (1995) 9 Cal.4th 738, 745 [38 Cal.Rptr.2d 650, 653]]</small>`
      }
    },
    {
      id: "yesno_3",
      kind: "YesNo",
      content: {
        question: "Is the cost of repairs and/or cleaning less than $126?",
        fields: [
          { label: "Yes", next: "single_1" },
          { label: "No", next: "yesno_4" }
        ]
      }
    },
    {
      id: "single_1",
      kind: "Single",
      content: {
        question: `The landlord is not required to send you copies of invoices or receipts, or a good faith estimate, if the repairs or cleaning cost less than $126.<br />
                  You may request copies of these documents from the landlord within 14 calendar days after you receive the itemized statement. It's best to make this request both orally and in writing. Keep a copy of your letter or e-mail. The landlord must send you copies of invoices, receipts and any good faith estimate within 14 calendar days after he or she receives your request.<br />
                  <small>[Civil Code Section 1950.5(g)(5).]</small>`,
        fields: [
          { label: "OK", next: "result_4" }
        ]
      }
    },
    {
      id: "yesno_4",
      kind: "YesNo",
      content: {
        question: `Did Landlord send copies of receipts for the charges that the landlord incurred to repair or clean the rental unit and that the landlord deducted from your security deposit?<br/>
                  <small>[Civil Code Section 1950.5(g)(2).]</small>`,
        fields: [
          { label: "Yes", next: "result_4" },
          { label: "No", next: "yesno_5" }
        ]
      }
    },
    {
      id: "yesno_5",
      kind: "YesNo",
      content: {
        question: "Did you waive your rights to receive them?",
        fields: [
          { label: "Yes", next: "result_4" },
          { label: "No", next: "result_2" }
        ]
      }
    }
  ]
}
