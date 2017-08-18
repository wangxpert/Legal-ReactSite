export default {
  name: "incorporate",
  description: "Should I incorporate ( or become an LLC )?",
  start: "action_1",
  kind: "Topic",
  attach: {
    ['NOTE_1']: `<p>Since your business is a real estate investment company, your business should generally be organized as an LLC rather than a corporation for income tax reasons. For a description of these reason see below. You might consider organizing as a limited partnership rather than an LLC if you own or expect to own California real estate with rental income and capital gains expected to exceed $1 million per year.</p><br/>
      <p><small>Because the income of a C corporation is subject to double taxation and the losses of a C corporation are not immediately deductible by the shareholders, a C corporation is not an efficient structure for a real estate investment company. While the income of an S corporation is subject to only one level of taxation and its losses may be immediately deducted by the shareholders (subject to certain limitations), an S corporation is generally a disadvantageous structure for a real estate investment company as compared to an LLC that is taxed as a partnership (or as a disregarded entity). There are several reasons for this. First, the limited liability company allows special allocation of income, deductions, profits and losses which are often used. By contrast, use of an S corporation precludes the use of special allocations due to the requirement of one class of shares. Second, if the investment company intends to buy and hold depreciable real estate and finance the acquisition with non-recourse financing, the S. Corporation form may limit the deductions that may be passed through to the shareholders. Shareholders of S Corps and members of limited liability companies may not take deductions in excess of the basis of their stock or investment. A limited liability company member’s basis includes his share of qualified non-recourse loans; an S corp’s shareholder’s basis in his stock does not. Thus it is possible that an S Corp shareholder will be precluded from taking depreciation deductions in the case of certain leveraged, depreciable real estate. Third, contributions of property to a partnership where liabilities assumed by the partnership exceed the partner’s basis are not usually taxable transactions. But transfers of property to a corporation for stock where liabilities assumed by the corporation exceed the shareholder’s basis in the property are taxable to the shareholder under IRC 357(c). Fourth, the IRC 754 election allows a step-up in the basis of assets upon: the death of a partner, certain partnership distributions and the sale or exchange of a partnership interest. Fifth, per IRC 731, distributions of property from a partnership to partners are not taxable transactions. However, under IRC 1368, distributions of property from an S Corporation results in taxable gain to the extent the value of the distributed property exceeds the shareholder’s basis in its stock.</small></p>`,

    ['NOTE_2']: `<p>Because of the nature of your business, it appears you would benefit from the liability protection afforded by either an LLC or a corporation. While an S corporation can reduce a business owner’s self-employment taxes under certain circumstances, the nature of your business and its expected earnings are not likely to lead to significant savings in self-employment taxes. At the same time, since you do not have or expect to have any partners or investors, an LLC does offer you certain tax advantages. Specifically, since the LLC will be solely owned by you, it will be treated as a disregarded entity for income tax purposes (unless you file an election for corporate treatment). As a result, you will not be required to file a separate federal income tax return for the LLC. Instead, you will report the LLC’s earnings on your individual income tax return.</p>`,

    ['NOTE_3']: `<p>Based on your responses, the cost of forming and maintaining a corporation or limited liability company appear to outweigh the benefits. The primary legal advantage of a corporation or limited liability company is that they protect you (as owner) from legal claims based on the company’s contracts and the acts of the company’s agents other than you. However, they do not protect you from legal claims based on your own acts. Since you do not have or expect to have any employees or agents, it appears that you will not realize significant benefits from the liability protection of a corporation or limited liability company. However, if you expect that the company will enter into significant contracts (that you do not have to personally guaranty), then the corporate or LLC form would provide a significant benefit. While corporations offer various tax benefits, it appears that you will not be able to take advantage of these benefits due to the nature of your business or the expected level of your earnings. For example, while an S corporation can reduce a business owner’s self-employment taxes under certain circumstances, it appears that you will not derive significant savings in self-employment taxes due to the nature of your business and its expected earnings. In addition, stock in certain C corporations may be sold without federal income tax on the gains, subject to certain limitations. However, based on your responses, it does not appear that you would be eligible for this exclusion (or your responses indicate that any benefit would be negligible).</p>`,

    ['NOTE_4']: `<p>Based on your responses, it appears that you would benefit from the liability protection afforded to shareholders of an S corporation as well as the reduction in self-employment taxes that may be available to the shareholders of an S corporation . If you structure your company as an S corporation, you could be both a shareholder and an employee of the corporation. As such, you would receive two forms of income from the corporation: employment (W2) income which is subject to  self-employment taxes and shareholder distributions which are not subject to self-employment taxes so long as the corporation pays you a reasonable amount of employment income. According to the IRS, “generally, reasonable pay is the amount that a similar business would pay for the same or similar services”.  (Publication 535 (2016), Business Expenses, Employee’s Pay) In short, as long as the corporation pays a shareholder-employee a reasonable salary, all other distributions by the corporation to the shareholder-employee are free of self-employment taxes.</p>`,

    ['NOTE_5']: `<p>Based on your responses, you should consider organizing your business as a C corporation in order to take advantage of exemption from capital gains taxes available upon the sale of so-called “qualified small business stock” after a five year holding period.  For additional information on this exemption, see below. The advantages of this exemption must be balanced against the disadvantages of a C corporation. The first disadvantage of a C corporation as compared to an S corporation or LLC or limited partnership is that the income of a C corporation is potentially subject to double taxation : first, in the form of corporate tax on the income of the corporation and second in the form of individual income tax on the dividends paid by the corporation to its shareholders. Small businesses formed as C corporations generally avoid double taxation by paying any profit to the shareholder-employees in the form of salary, thereby eliminating any corporate profit and therefore any corporation income tax liability. However, shareholders may not be paid a salary that is unreasonably high. If they are, the IRS could recharacterize part of the salary as dividends subject to double taxation. By contrast, the income of an S corporation or a limited liability company is generally passed through to the shareholders or members and subject to a single level of tax. The second disadvantage of a C corporation is that any losses sustained by the corporation are not passed through to the shareholders until the corporation liquidates. The corporation may carry forward such losses for a long period (currently 20 years) and during such time may deduct such losses from any profit.  In the case of an S corporation, by comparison, any losses are passed through to the shareholders who may deduct such losses in the year in which they were sustained, subject to certain limitations. These disadvantages must be weighed against the potential savings on capital gains taxes that a shareholder would realize on the sale of qualified small business stock for a profit after a five year holding period. </p>
      <br /><p><small>Under Section 1202 of the Internal Revenue Code, a noncorporate taxpayer can exclude from gross income 100 percent of any gain from the sale of qualified small business stock held for more than five years and acquired on or after September 28, 2010. The excluded gain is limited to the greater of $10 million or 10 times the adjusted basis of the investment. To be eligible as qualified small business stock, the stock must be issued after August 10, 1993 and acquired by the taxpayer at its original issue. The issuing corporation must be a domestic C corporation and must have had both before and immediately after the stock issuance aggregate gross assets that did not exceed $50 million. In addition, at least 80% of the value of the corporation’s assets must be used in the active conduct of any trade or business other than: (A health, law, engineering, architecture, accounting, actuarial science, performing arts, consulting, athletics, financial services, brokerage services, or any trade or business where the principal asset of such trade or business is the reputation or skill of 1 or more of its employees, (B) any banking, insurance, financing, leasing, investing, or similar business, (C) any farming business (including the business of raising or harvesting trees), (D) any business involving the production or extraction of minerals, and (E) any business of operating a hotel, motel, restaurant, or similar business.(IRC Section 1202(e))</small></p>`,

    ['NOTE_6']: `<p>Businesses receiving venture capital funding are generally structured as C corporations. There are three reasons for this: first, venture capital funds often receive preferred stock which provides them with a priority return ahead of the common stock holders; and S corporations cannot issue preferred stock. Second, venture capital funds often invest with the goal of guiding the business to an initial public stock offering, which is not feasible for LLCs or S corporations. Finally, venture capital funds often have pension plans as investors and investing in a business structured as an S corporation or an LLC exposes pension plans (and any other tax exempt investors) to unrelated business income tax; investing in a C corporation does not.</p>`,
    ['NOTE_7']: `<p>Because you expect to allocate income and losses proportionally to the owners, you can organize your business as an S corporation, subject to certain limitations. (For a summary of these requirements, go to: https://www.irs.gov/businesses/small-businesses-self-employed/s-corporations) While you could form an LLC or limited partnership, an S corporation may enable you to pay less self-employment taxes than you would using an LLC or limited partnership.  If you structure your company as an S corporation, you (and any other working owner) could be both a shareholder and an employee of the corporation. As such, you would receive two forms of income from the corporation: employment (W2) income which is subject to self-employment taxes and shareholder distributions which are not subject to self-employment taxes so long as the corporation pays you a reasonable amount of employment income. According to the IRS, “generally, reasonable pay is the amount that a similar business would pay for the same or similar services”.  (Publication 535 (2016), Business Expenses, Employee’s Pay) In short, as long as the corporation pays a shareholder-employee a reasonable salary, all other distributions by the corporation to the shareholder-employee are free of self-employment taxes.</p>`,
    ['NOTE_8']: `<p>A business that does not allocate income and losses proportionally to its owners cannot be organized as an S corporation because an S corporation allows only one class of stock. An LLC structured as a partnership for income tax purposes does permit the owners to specially allocate income and losses so long as such allocations have substantial economic effect. Such a business could be formed as a C corporation with more than one class of stock. However, a C corporation has two disadvantages to a small business. The first disadvantage of a C corporation as compared to an LLC is that the income of a C corporation is potentially subject to double taxation : first, in the form of corporate tax on the income of the corporation and second in the form of individual income tax on the dividends paid by the corporation to its shareholders. Small businesses formed as C corporations generally avoid double taxation by paying any profit to the shareholder-employees in the form of salary, thereby eliminating any corporate profit and therefore any corporation income tax liability. However, shareholders may not be paid a salary that is unreasonably high. If they are, the IRS could recharacterize part of the salary as dividends subject to double taxation. By contrast, the income of an LLC (that is taxed as a partnership) is passed through to the members and subject to a single level of tax. The second disadvantage of a C corporation is that any losses sustained by the corporation are not passed through to the shareholders until the corporation liquidates. The corporation may carry forward such losses for a long period (currently 20 years) and during such time may deduct such losses from any profit.  In the case of an LLC, any losses are passed through to the members who may deduct such losses in the year in which they were sustained, subject to certain limitations.</p>`

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
        title: "Form an S Corporation",
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
        title: "Form an S Corporation",
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
