export default {
  name: "de_professional_corporation",
  description: "Creating The Delaware Professional Corporation",
  start: "input_1",
  kind: "Form",
  step: 9,
  node: [
    {
      id: "input_1",
      kind: "Input",
      content: {
        question: "What will be the profession of your corporation?",
        fields: [
          { kind: "text", store: "company_profession" }
        ],
        next: "input_2",
        note: {
          title: 'What will be the profession of your corporation?',
          content: "You should write the formal name of your profession, describing your profession as what the profession is, not what the professionals are called. For example, a lawyer would indicate “law”, a dentist would indicate “dentistry”, an accountant would indicate “accountancy”, a marriage and family therapist would indicate “marriage and family therapy”. You can ask yourself, I engage in the profession of ..."
        }
      }
    },
    {
      id: "input_2",
      kind: "Input",
      content: {
        question: `What will be the name of your company?<br />
                <small>Your profession may have restrictions on the name of your corporation, consult your regulatory board for any restrictions</small>`,
        fields: [
          { kind: "text", store: "company_name" }
        ],
        next: "single_3",
        note: {
          title: 'Name of your company',
          content: `<ul>
            <li>The name of your corporation cannot contain the words "company", "corporation" or "incorporated”, or any affix or prefix indicating it is a corporation.</li>
            <li>The name of your corporation must contain
              <ul>
                <li>a word or words descriptive of your professional service, or the last name of at least one shareholder, and</li>
                <li>"chartered", "professional association" or "P.A."</li>
              </ul>
            </li>
            <li>The name of your corporation cannot include the words “bank” or “trust”.</li>
            <li>The name of your business cannot be misleading or confusingly similar to that of a preexisting corporation. You can check search engines and <a href="https://icis.corp.delaware.gov/Ecorp/EntitySearch/NameSearch.aspx target="_blank">here</a> to see if there is a preexisting entity with a similar name. A confusingly similar name does not have to be exactly the same, it includes subtle differences – like upper instead of lower case letters; “&” instead of “and”; or “7” instead of “seven”.
              <ul>
                <li>“Entity” includes corporations, partnerships, LLCs, or trusts.</li>
                <li>Similar names may be approved with written consent, or by special application.</li>
              </ul>
            </li>
            <li>You may also want to consider whether your corporate name will be eligible for trademark protection (see section on Trademark for more information).</li>
            <li>You should input the entire name of the company as you would like it to appear on the records of the Delaware Secretary of State.</lil>
          </ul>`
        }
      }
    },
    {
      id: "single_3",
      kind: "Single",
      content: {
        question: "What is the total number of shares the corporation will be authorized to issue?",
        fields: [
          { kind: "choice", label: "1,000,000", value: 1000000 },
          { kind: "choice", label: "100,000", value: 100000 },
          { kind: "number", label: "Other" },
        ],
        store: "number_of_shares",
        next: "single_4",
        note: {
          title: 'Number of Shares',
          content: `<ul>
            <li>Authorized shares are those which the company is allowed to issue – shares only become “issued” once they are sold to someone.</li>
            <li>Shares that are authorized but not yet issued are retained by the corporation (commonly called “treasury shares”).</li>
            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of Delaware to establish your corporation).</li>
            <li>The total number of shares is somewhat arbitrary; the more important part is the overall percentage of ownership. Owning one out of one hundred shares is the same as owning one million out of one hundred million shares. However, authorizing more shares can make it easier to issue shares to more people. For example, if you only authorize 10 shares, you can only issue shares to 10 people (without issuing fractional shares), and only in increments of 10% (like 10%, 20%, 30%, etc). By authorizing 100 shares, you could issue shares to 100 people, and in increments of 1% (like a 33% interest for example). In determining the total amount to authorize, consider the future of the corporation – will you issue stock or options to employees, directors, or investors?</li>
          </ul>`
        }
      }
    },
    {
      id: "single_4",
      kind: "Single",
      content: {
        question: "What is the par value of the shares?",
        fields: [
          { kind: "choice", label: "$0.001", value: 0.001 },
          { kind: "choice", label: "$0.0001", value: 0.0001 },
          { kind: "number", label: "Other" },
        ],
        store: "par_value_of_shares",
        next: "input_5",
        note: {
          title: 'Number of Shares',
          content: `<ul>
            <li>Authorized shares are those which the company is allowed to issue – shares only become “issued” once they are sold to someone. All shareholders of your professional corporation must be licensed.</li>
            <li>Shares that are authorized but not yet issued are retained by the corporation (commonly called “treasury shares”).</li>
            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of California to establish your corporation). In California, unlike Delaware, there is no an additional tax or fee for having a higher number of authorized shares.</li>
            <li>The total number of shares is somewhat arbitrary; the more important part is the overall percentage of ownership. Owning one out of one hundred shares is the same as owning one million out of one hundred million shares. However, authorizing more shares can make it easier to issue shares to more people. For example, if you only authorize 10 shares, you can only issue shares to 10 people (without issuing fractional shares), and only in increments of 10% (like 10%, 20%, 30%, etc). By authorizing 100 shares, you could issue shares to 100 people, and in increments of 1% (like a 33% interest for example). In determining the total amount to authorize, consider the future of the corporation – will you issue stock or options to employees, directors, or investors?</li>
          </ul>`
        }
      }
    },
    {
      id: "input_5",
      kind: "Input",
      content: {
        question: "Who will incorporate the company?",
        fields: [
          { kind: "text", store: "incorporator_name_firstname", placeholder: "First Name" },
          { kind: "text", store: "incorporator_name_lastname", placeholder: "Last Name" }
        ],
        next: "input_6",
        note: {
          title: 'Name of incorporator',
          content: `<ul>
            <li>The incorporator is the person who is organizing the corporation. The incorporator signs documents and acts for the corporation until the board of directors is elected.</li>
            <li>The incorporator can be any adult; it need not be an officer, director, or shareholder of the corporation.</li>
          </ul>`
        }
      }
    },
    {
      id: "input_6",
      kind: "Input",
      content: {
        question: "What is <strong>${incorporator_name_firstname} ${incorporator_name_lastname}</strong>'s primary address?",
        fields: [
          { kind: "text", store: "incorporator_address_street", placeholder: "Street" },
          { kind: "text", store: "incorporator_address_city", placeholder: "City" },
          { kind: "text", store: "incorporator_address_state", placeholder: "State" },
          { kind: "text", store: "incorporator_address_zipcode", placeholder: "ZIP Code" }
        ],
        next: "yesno_7",
        note: {
          title: 'Address of registered agent',
          content: `<ul>
            <li>If the registered agent is a person
              <ul>
                <li>Must be a California address, it can be a business or residence street address.</li>
                <li>Cannot be a P.O. Box, “in care of”, or have a city abbreviation (i.e., not “LA”)</li>
                <li>You should note that this address will be a public record.</li>
              </ul>
            </li>
            <li>The address of the registered agent is not required if the agent is a corporation.</li>
          </ul>`
        }
      }
    },
    {
      id: "yesno_7",
      kind: "YesNo",
      content: {
        question: "Will the company have an office in Delaware?",
        fields: [
          { kind: "choice", label: "Yes", next: "single_8" },
          { kind: "choice", label: "No", next: "input_10" }
        ],
        note: {
          title: 'Corporate Registered Agent',
          content: `<ul>
            <li>A corporate registered agent must have filed a 1505 Certificate with the California Secretary of State.</li>
            <li>You can check <a href='https://businessfilings.sos.ca.gov/frmlist1505s.asp'>Here</a> to see if a corporation has filed a 1505 Certificate and to ensure the spelling of the corporation’s name.</li>
          </ul>`
        }
      }
    },
    {
      id: "single_8",
      kind: "Single",
      content: {
        question: "Who will serve as the registered agent of the company?",
        fields: [
          { kind: "choice", label: "${company_name}", next: "input_9" },
          { kind: "text", label: "Other", store: "registered_agent_name", next: "input_11" },
        ],
        note: {
          title: 'Number of Shares',
          content: `<ul>
            <li>Authorized shares are those which the company is allowed to issue – shares only become “issued” once they are sold to someone. All shareholders of your professional corporation must be licensed.</li>
            <li>Shares that are authorized but not yet issued are retained by the corporation (commonly called “treasury shares”).</li>
            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of California to establish your corporation). In California, unlike Delaware, there is no an additional tax or fee for having a higher number of authorized shares.</li>
            <li>The total number of shares is somewhat arbitrary; the more important part is the overall percentage of ownership. Owning one out of one hundred shares is the same as owning one million out of one hundred million shares. However, authorizing more shares can make it easier to issue shares to more people. For example, if you only authorize 10 shares, you can only issue shares to 10 people (without issuing fractional shares), and only in increments of 10% (like 10%, 20%, 30%, etc). By authorizing 100 shares, you could issue shares to 100 people, and in increments of 1% (like a 33% interest for example). In determining the total amount to authorize, consider the future of the corporation – will you issue stock or options to employees, directors, or investors?</li>
          </ul>`
        }
      }
    },
    {
      id: "input_9",
      kind: "Input",
      content: {
        question: "What is the Delaware address of the company?",
        fields: [
          { kind: "text", store: "company_address_street", placeholder: "Street" },
          { kind: "text", store: "company_address_city", placeholder: "City" },
          { kind: "text", store: "company_address_state", placeholder: "State" },
          { kind: "text", store: "company_address_zipcode", placeholder: "ZIP Code" }
        ],
        next: "final_1",
        note: {
          title: 'Address of Corporation',
          content: `<ul>
            <li>You must provide the initial street address and the initial mailing address if different from the street address.</li>
            <li>You should note this address will be a public record.</li>
          </ul>`
        }
      }
    },
    {
      id: "input_10",
      kind: "Input",
      content: {
        question: "Who will serve as the registered agent of the company?",
        fields: [
          { kind: "text", store: "registered_agent_name"}
        ],
        next: "input_11",
        note: {
          title: 'Name of registered agent',
          content: `<ul>
            <li>The registered agent is the person who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued.</li>
            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>
            <li>The registered agent can be either an individual who resides in California or an active California corporation. Your corporation cannot be its own registered agent.
              <ul>
                <li>The individual can be an officer, director, or shareholder of the company, or any other adult.</li>
                <li>A corporate registered agent must have filed a 1505 Certificate with the California Secretary of State.
                  <ul>
                    <li>You can check https://businessfilings.sos.ca.gov/frmlist1505s.asp to see if a corporation has filed a 1505 Certificate and to ensure the spelling of the corporation’s name.</li>
                    <li>If the corporation has not filed a 1505 Certificate, it must register, which requires the corporation:
                      <ul>
                        <li>Be an active, registered California corporation,</li>
                        <li>Pay a $30 filing fee, and</li>
                        <li>Fill out and submit a form.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>There are services which will serve as your corporation’s registered agent for a fee.</li>
          </ul>`
        }
      }
    },
    {
      id: "input_11",
      kind: "Input",
      content: {
        question: "What is <strong>${registered_agent_name}</strong>'s primary address?",
        fields: [
          { kind: "text", store: "registered_agent_address_street", placeholder: "Street" },
          { kind: "text", store: "registered_agent_address_city", placeholder: "City" },
          { kind: "text", store: "registered_agent_address_state", placeholder: "State" },
          { kind: "text", store: "registered_agent_address_zipcode", placeholder: "ZIP Code" }
        ],
        next: "final_2",
        note: {
          title: 'Address of registered agent',
          content: `<ul>
            <li>If the registered agent is a person
              <ul>
                <li>Must be a California address, it can be a business or residence street address.</li>
                <li>Cannot be a P.O. Box, “in care of”, or have a city abbreviation (i.e., not “LA”)</li>
                <li>You should note that this address will be a public record.</li>
              </ul>
            </li>
            <li>The address of the registered agent is not required if the agent is a corporation.</li>
          </ul>`
        }
      }
    },
    {
      id: "final_1",
      kind: "Final",
      content: {
        kind: "Form",
        form: "de_form_articles_of_professional_incorporation_1"
      }
    },
    {
      id: "final_2",
      kind: "Final",
      content: {
        kind: "Form",
        form: "de_form_articles_of_professional_incorporation_2"
      }
    },
  ]
};
