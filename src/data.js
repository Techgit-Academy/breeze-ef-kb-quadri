export const CATS = [
  {
    id: 'C1', color: '#1B3A6B', badge: 'CRITICAL', badgeType: 'red',
    tickets: 420, pct: '25%',
    title: 'Loans — EWA, Maxi and Flexi',
    why: `This is where employees come when something goes wrong with a loan. They can't apply, the money hasn't arrived, too much was deducted, or they want to pay it off early. This topic covers the full loan journey from start to finish.`,
    subs: [
      {
        id: 'C1.1', lbl: 'Accessing and qualifying for a loan',
        note: "Articles for employees who cannot see the loan option at all, or who have been told they are not eligible.",
        arts: [
          { n: 'C1.1.1', t: "I can't see the loan option on my Breeze app", w: 'Employee' },
          { n: 'C1.1.2', t: "Why am I not eligible for a salary advance?", w: 'Employee' },
          { n: 'C1.1.3', t: "My employees can't apply for EWA — what do I check?", w: 'HR Admin' },
          { n: 'C1.1.4', t: "The 'Apply for Loan' button is there but won't respond when I tap it", w: 'Employee' },
          { n: 'C1.1.5', t: "Loan says unavailable but I've taken one before", w: 'Employee' },
          { n: 'C1.1.6', t: "How do I turn on loan access for my employees?", w: 'HR Admin' },
        ]
      },
      {
        id: 'C1.2', lbl: 'During the loan application — including direct debit setup',
        note: "Articles for employees going through the application process. Direct debit mandate setup happens here — it is a required step before the loan can be approved.",
        arts: [
          { n: 'C1.2.1', t: "I got an error while applying for a loan — what does it mean?", w: 'Employee' },
          { n: 'C1.2.2', t: "I completed my application but no money came", w: 'Employee' },
          { n: 'C1.2.3', t: "I didn't receive the OTP to confirm my loan", w: 'Employee' },
          { n: 'C1.2.4', t: "The loan amount showing is different from what I expected", w: 'Employee' },
          { n: 'C1.2.5', t: "Why is my loan limit lower than it should be?", w: 'Employee' },
          { n: 'C1.2.6', t: "How do I set up a direct debit mandate during my loan application?", w: 'Employee' },
          { n: 'C1.2.7', t: "My direct debit setup keeps failing or timing out during the application", w: 'Employee' },
          { n: 'C1.2.8', t: "I can't complete my application because the mandate step won't go through", w: 'Employee' },
        ]
      },
      {
        id: 'C1.3', lbl: 'Money not received after loan was approved',
        note: 'Articles for employees whose loan was approved or "disbursed" on the app but has not hit their account.',
        arts: [
          { n: 'C1.3.1', t: "My loan was approved but the money hasn't arrived", w: 'Employee' },
          { n: 'C1.3.2', t: "The loan went to the wrong account", w: 'Employee' },
          { n: 'C1.3.3', t: "App says disbursed but my bank shows nothing", w: 'Employee' },
          { n: 'C1.3.4', t: "How long should I wait for a loan to arrive?", w: 'Employee' },
        ]
      },
      {
        id: 'C1.4', lbl: 'Repayments and paying off early',
        note: "Articles for employees dealing with deductions after the loan is live — wrong amounts, outstanding balance not updating, paying off early, or updating an existing mandate.",
        arts: [
          { n: 'C1.4.1', t: "How does loan repayment work?", w: 'Employee' },
          { n: 'C1.4.2', t: "More money was deducted than my repayment amount", w: 'Employee' },
          { n: 'C1.4.3', t: "How do I pay off my loan before the end of the term?", w: 'Employee' },
          { n: 'C1.4.4', t: "I've paid back the loan but it still shows as outstanding", w: 'Employee' },
          { n: 'C1.4.5', t: "Salary deduction happened but loan balance hasn't changed", w: 'HR Admin' },
          { n: 'C1.4.6', t: "Where do I send money to repay my loan manually?", w: 'Employee / HR Admin' },
          { n: 'C1.4.7', t: "My mandate is set up but no deduction is happening", w: 'Employee' },
          { n: 'C1.4.8', t: "How do I update or change an existing direct debit mandate?", w: 'Employee' },
        ]
      },
      {
        id: 'C1.5', lbl: 'Viewing loan history and downloading statements',
        note: "Articles for employees who cannot see past loans or download their transaction history.",
        arts: [
          { n: 'C1.5.1', t: "I can't see my loan history on the Breeze app", w: 'Employee' },
          { n: 'C1.5.2', t: "How do I download a loan statement?", w: 'Employee' },
          { n: 'C1.5.3', t: "Some transactions are missing from my statement", w: 'Employee' },
          { n: 'C1.5.4', t: "How do I check what I still owe on my loan?", w: 'Employee' },
        ]
      },
    ]
  },
  {
    id: 'C2', color: '#0D7C8F', badge: 'CRITICAL', badgeType: 'red',
    tickets: 687, pct: '40%',
    title: 'Payments and payroll (Breeze Payer)',
    why: `The biggest topic in the KB — now reflecting both the Embedded Finance team (606 tickets) and the Payer/Payment EF team (81 tickets). It covers everything that can go wrong when an employer runs payroll or processes disbursements on Breeze Payer — salaries stuck on processing, failed payments, pension remittance delays, wallet funding issues, and virtual account problems. Almost all of these complaints come from HR Admins and Finance teams managing payments for named companies.`,
    subs: [
      {
        id: 'C2.1', lbl: 'Salary payments — stuck, failed or incorrect',
        note: "The highest-volume sub-category. Covers payroll runs that won't complete, individual salary failures, duplicate payments, and off-cycle payments. Many tickets reference specific companies — 'IFO [Company Name]' means In Favour Of.",
        arts: [
          { n: 'C2.1.1', t: "Payroll has been on 'Processing' or 'Progressing' for hours — what do I do?", w: 'HR Admin' },
          { n: 'C2.1.2', t: "Some employees show 'Failed' — how do I sort this?", w: 'HR Admin' },
          { n: 'C2.1.3', t: "An employee's salary didn't go through", w: 'HR Admin' },
          { n: 'C2.1.4', t: "An employee was paid twice — how do I fix it?", w: 'HR Admin' },
          { n: 'C2.1.5', t: "How do I process an off-cycle payment?", w: 'HR Admin' },
          { n: 'C2.1.6', t: "Off-cycle payment batch is stuck or failing", w: 'HR Admin' },
          { n: 'C2.1.7', t: "What happens if an employee has no bank account on file?", w: 'HR Admin' },
          { n: 'C2.1.8', t: "Payment shows 'Failed' but the employee received the money", w: 'HR Admin' },
          { n: 'C2.1.9', t: "Payment status is undefined or unclear — how do I confirm what happened?", w: 'HR Admin' },
          { n: 'C2.1.10', t: "Failed payment but the wallet was already debited", w: 'HR Admin' },
        ]
      },
      {
        id: 'C2.2', lbl: 'Pension remittance',
        note: "High volume from both teams. Covers pension disbursement delays, PFA verification failures, RSA contribution issues, and remittance evidence requests. Processing delays are the most common pattern.",
        arts: [
          { n: 'C2.2.1', t: "How do I process pension payments through Breeze Payer?", w: 'HR Admin' },
          { n: 'C2.2.2', t: "Pension disbursement has been on 'Processing' for a long time", w: 'HR Admin' },
          { n: 'C2.2.3', t: "Employees haven't received their pension remittance", w: 'HR Admin' },
          { n: 'C2.2.4', t: "How do I get pension payment receipts or remittance evidence?", w: 'HR Admin' },
          { n: 'C2.2.5', t: "I uploaded the pension file but it's not showing on Breeze Payer", w: 'HR Admin' },
          { n: 'C2.2.6', t: "PFA or RSA details are wrong or failing verification", w: 'HR Admin' },
          { n: 'C2.2.7', t: "How do I update an employee's PFA details on the system?", w: 'HR Admin' },
          { n: 'C2.2.8', t: "Outstanding pension credits not yet reflected — how do I get them rectified?", w: 'HR Admin' },
        ]
      },
      {
        id: 'C2.3', lbl: 'Wallet, virtual accounts and transfers',
        note: "Payer-specific issues around wallet funding, out-of-wallet transfers not received, and virtual account creation. These come almost entirely from the Payer/Payment EF team.",
        arts: [
          { n: 'C2.3.1', t: "How do I fund my Breeze Payer wallet?", w: 'HR Admin' },
          { n: 'C2.3.2', t: "I can't fund the wallet — Moniepoint or payment gateway issue", w: 'HR Admin' },
          { n: 'C2.3.3', t: "Transfer sent from wallet but the receiver hasn't received it", w: 'HR Admin' },
          { n: 'C2.3.4', t: "Transaction initiated but not credited to the virtual account", w: 'HR Admin' },
          { n: 'C2.3.5', t: "How do I create a virtual account on Breeze Payer?", w: 'HR Admin' },
          { n: 'C2.3.6', t: "No wallet balance available to retry a failed payment", w: 'HR Admin' },
        ]
      },
      {
        id: 'C2.4', lbl: 'Account validation and bank details',
        note: "Articles for account number validation failures, wrong balances, and duplicate or incorrect account details.",
        arts: [
          { n: 'C2.4.1', t: "An employee's balance is wrong or showing as zero", w: 'Employee / HR Admin' },
          { n: 'C2.4.2', t: "Two employees have the same account number — what do I do?", w: 'HR Admin' },
          { n: 'C2.4.3', t: "An employee's bank account number won't validate", w: 'HR Admin' },
          { n: 'C2.4.4', t: "The balance in the app doesn't match the bank statement", w: 'Employee' },
          { n: 'C2.4.5', t: "OTP not received when trying to complete a payment on Payer", w: 'HR Admin' },
        ]
      },
    ]
  },
  {
    id: 'C3', color: '#2E7D32', badge: 'HIGH', badgeType: 'blue',
    tickets: 180, pct: '11%',
    title: 'Getting into the app and platform',
    why: `This covers everything related to logging in, verifying identity, and reaching the right part of the platform. If someone can't get in, they can't do anything else — which is why this often sits behind other complaints like loan access or payment failures.`,
    subs: [
      {
        id: 'C3.1', lbl: 'Login and password issues',
        note: "Articles for employees who cannot log in, are not receiving OTPs, or have been locked out.",
        arts: [
          { n: 'C3.1.1', t: "I can't log in to the Breeze app", w: 'Employee' },
          { n: 'C3.1.2', t: "I'm not receiving the OTP to log in", w: 'Employee' },
          { n: 'C3.1.3', t: "Password reset is not working", w: 'Employee' },
          { n: 'C3.1.4', t: "My account has been locked or suspended", w: 'Employee' },
          { n: 'C3.1.5', t: "I can't log in to Breeze Payer to carry out disbursement", w: 'HR Admin' },
        ]
      },
      {
        id: 'C3.2', lbl: 'Identity verification (KYC and BVN)',
        note: "Articles covering BVN linking, document uploads, and why verification fails — a blocker for loan access.",
        arts: [
          { n: 'C3.2.1', t: "How do I complete identity verification on Breeze?", w: 'Employee' },
          { n: 'C3.2.2', t: "My BVN verification keeps failing", w: 'Employee' },
          { n: 'C3.2.3', t: "How do I link my BVN to my Breeze account?", w: 'Employee' },
          { n: 'C3.2.4', t: "My documents were rejected — what exactly do you need?", w: 'Employee' },
        ]
      },
      {
        id: 'C3.3', lbl: 'Accessing the Marketplace',
        note: "Articles for employees and HR Admins who cannot see or use the Marketplace section of the app.",
        arts: [
          { n: 'C3.3.1', t: "How does an employee get to the Breeze Marketplace?", w: 'Employee' },
          { n: 'C3.3.2', t: "Employees can't see the Marketplace tab at all", w: 'HR Admin' },
          { n: 'C3.3.3', t: "How do I switch on the Marketplace for my organisation?", w: 'HR Admin' },
          { n: 'C3.3.4', t: "The Marketplace is showing the wrong loan products", w: 'HR Admin' },
        ]
      },
      {
        id: 'C3.4', lbl: 'Breeze Payer portal (HR Admin side)',
        note: "Articles for HR Admins who have problems accessing or using the Breeze Payer web portal.",
        arts: [
          { n: 'C3.4.1', t: "I can't log in to the Breeze Payer portal", w: 'HR Admin' },
          { n: 'C3.4.2', t: "How do I upload employees in bulk on Breeze Payer?", w: 'HR Admin' },
          { n: 'C3.4.3', t: "My bulk upload keeps failing — common reasons and fixes", w: 'HR Admin' },
        ]
      },
    ]
  },
  {
    id: 'C4', color: '#6D4C41', badge: 'MEDIUM', badgeType: 'amber',
    tickets: 90, pct: '5%',
    title: 'Account statements and transaction records',
    why: `Customers and HR Admins often need a record of what happened — a statement to send to their bank, proof of a pension payment, or a transaction history for reconciliation. This topic covers how to get those records and what to do when they're incomplete.`,
    subs: [
      {
        id: 'C4.1', lbl: 'Getting a statement',
        note: "Articles for anyone who needs to download or request a statement — including subsidiary-level requests from Payer clients.",
        arts: [
          { n: 'C4.1.1', t: "How do I download my account statement from Breeze?", w: 'Employee' },
          { n: 'C4.1.2', t: "How do I get statements for all our subsidiaries at once?", w: 'HR Admin' },
          { n: 'C4.1.3', t: "Some transactions are missing from the statement I downloaded", w: 'Employee / HR Admin' },
          { n: 'C4.1.4', t: "Can I get my statement as a PDF or spreadsheet?", w: 'Employee' },
          { n: 'C4.1.5', t: "How do I request an account statement for a specific company on Payer?", w: 'HR Admin' },
        ]
      },
      {
        id: 'C4.2', lbl: 'Reconciliation and matching records',
        note: "Articles for HR Admins trying to match payroll records against bank statements or understand unexplained deductions.",
        arts: [
          { n: 'C4.2.1', t: "How do I match my payroll payments against our bank records?", w: 'HR Admin' },
          { n: 'C4.2.2', t: "Employees are seeing debits they don't recognise — what are they?", w: 'HR Admin' },
          { n: 'C4.2.3', t: "How do I get the reference numbers for a payment batch?", w: 'HR Admin' },
          { n: 'C4.2.4', t: "How do I reconcile pension remittances against PFA records?", w: 'HR Admin' },
        ]
      },
    ]
  },
  {
    id: 'C5', color: '#6A1B9A', badge: 'HIGH', badgeType: 'blue',
    tickets: 179, pct: '11%',
    title: 'Getting started and learning how to use Breeze',
    why: `A significant number of tickets — 167 to be precise — were filed not because something was broken, but because the person didn't know how to do it. This is the most impactful area to invest in early. Getting people set up correctly and teaching them how to use the product prevents a large chunk of complaints from being raised in the first place.`,
    subs: [
      {
        id: 'C5.1', lbl: 'Setting up a new company on Breeze',
        note: "Articles for new employers going through the onboarding process.",
        arts: [
          { n: 'C5.1.1', t: "How do we get started on Breeze Payer as a company?", w: 'HR Admin' },
          { n: 'C5.1.2', t: "How do I add our employees and set up their profiles?", w: 'HR Admin' },
          { n: 'C5.1.3', t: "What does our company need to have in place before going live?", w: 'HR Admin' },
        ]
      },
      {
        id: 'C5.2', lbl: 'Getting employees set up',
        note: "Articles for individual employees going through registration and verification for the first time.",
        arts: [
          { n: 'C5.2.1', t: "How does an employee sign up for Breeze?", w: 'Employee' },
          { n: 'C5.2.2', t: "What information do I need to complete registration?", w: 'Employee' },
          { n: 'C5.2.3', t: "I stopped partway through registration — how do I continue?", w: 'Employee' },
        ]
      },
      {
        id: 'C5.3', lbl: 'Step-by-step guides for key tasks',
        note: "Walkthroughs for the most common tasks — these are the articles that directly replace ticket volume.",
        arts: [
          { n: 'C5.3.1', t: "How to run a payroll from start to finish on Breeze Payer", w: 'HR Admin' },
          { n: 'C5.3.2', t: "How does Earned Wage Access (EWA) work?", w: 'Employee' },
          { n: 'C5.3.3', t: "How to turn on EWA for your organisation", w: 'HR Admin' },
          { n: 'C5.3.4', t: "What's the difference between Maxi and Flexi loans?", w: 'Employee' },
          { n: 'C5.3.5', t: "A first look at Breeze Payer — for new employers", w: 'HR Admin' },
          { n: 'C5.3.6', t: "What is the Breeze Marketplace and how does it work?", w: 'Employee' },
          { n: 'C5.3.7', t: "How do I delay a specific employee's salary payment?", w: 'HR Admin' },
          { n: 'C5.3.8', t: "How do I reduce the transaction retry waiting time on Payer?", w: 'HR Admin' },
        ]
      },
      {
        id: 'C5.4', lbl: 'Regulatory and compliance questions',
        note: "Common questions about legality, data, interest rates and transfer limits — especially from first-time users.",
        arts: [
          { n: 'C5.4.1', t: "Is Breeze licensed and regulated in Nigeria?", w: 'Employee / HR Admin' },
          { n: 'C5.4.2', t: "How is my personal data protected on Breeze?", w: 'Employee / HR Admin' },
          { n: 'C5.4.3', t: "What interest rate does Breeze charge on loans?", w: 'Employee' },
          { n: 'C5.4.4', t: "What is the maximum transfer limit on Breeze?", w: 'HR Admin' },
        ]
      },
    ]
  },
  {
    id: 'C6', color: '#B71C1C', badge: 'HIGH', badgeType: 'blue',
    tickets: 214, pct: '13%',
    title: 'Escalation guides (for the support team)',
    why: `This section is for support agents only — customers will not see it. It contains the decision trees that tell an agent when to handle a ticket themselves and when to pass it up the chain, plus templates for filing proper bug reports so Engineering gets the information they need.`,
    subs: [
      {
        id: 'C6.1', lbl: 'When and how to escalate',
        note: "Decision trees for agents — helps them avoid both over-escalating and under-escalating.",
        arts: [
          { n: 'C6.1.1', t: "Payment problem — should I escalate? (decision guide)", w: 'Agent' },
          { n: 'C6.1.2', t: "Loan problem — should I escalate? (decision guide)", w: 'Agent' },
          { n: 'C6.1.3', t: "Account or KYC problem — should I escalate? (decision guide)", w: 'Agent' },
          { n: 'C6.1.4', t: "When to involve Engineering — what they need from you", w: 'Agent' },
          { n: 'C6.1.5', t: "Payer disbursement issue — EF Ops vs Engineering vs bank downtime", w: 'Agent' },
        ]
      },
      {
        id: 'C6.2', lbl: 'Bug report templates',
        note: "Ready-to-fill templates so Engineering gets exactly the right information every time.",
        arts: [
          { n: 'C6.2.1', t: "Bug report: loan application not working", w: 'Agent' },
          { n: 'C6.2.2', t: "Bug report: payment processing failure", w: 'Agent' },
          { n: 'C6.2.3', t: "Bug report: OTP not being delivered", w: 'Agent' },
          { n: 'C6.2.4', t: "Bug report: statement missing transactions", w: 'Agent' },
          { n: 'C6.2.5', t: "Bug report: account or PFA validation failure", w: 'Agent' },
        ]
      },
      {
        id: 'C6.3', lbl: 'Which team handles what',
        note: "A routing guide so agents don't send tickets to the wrong team and cause delays.",
        arts: [
          { n: 'C6.3.1', t: "Is this an EF ticket or an HRIS ticket? How to tell", w: 'Agent' },
          { n: 'C6.3.2', t: "EF Ops vs Engineering — who owns the fix?", w: 'Agent' },
          { n: 'C6.3.3', t: "When to loop in Compliance or Legal", w: 'Agent' },
          { n: 'C6.3.4', t: "Embedded Finance team vs Payer/Payment EF team — which handles what?", w: 'Agent' },
        ]
      },
    ]
  },
  {
    id: 'C7', color: '#E65100', badge: 'HIGH', badgeType: 'blue',
    tickets: 134, pct: '8%',
    title: 'Known problems and outages',
    why: `When something breaks across multiple customers at the same time, agents need to recognise it quickly and communicate it clearly. This is especially important for Payer clients — a payment gateway going down can affect dozens of companies simultaneously. This section keeps a live record of known issues and gives agents ready-to-send messages so no one has to write something from scratch under pressure.`,
    subs: [
      {
        id: 'C7.1', lbl: 'Messages to send customers during outages',
        note: "Pre-written messages for WhatsApp, email and the app — ready to send when a known issue is active.",
        arts: [
          { n: 'C7.1.1', t: "What to say to customers when payments are delayed", w: 'Agent' },
          { n: 'C7.1.2', t: "What to say to customers when loan service is down", w: 'Agent' },
          { n: 'C7.1.3', t: "What to say to customers when OTP is not working", w: 'Agent' },
          { n: 'C7.1.4', t: "What to say when Moniepoint or Monnify is down", w: 'Agent' },
        ]
      },
      {
        id: 'C7.2', lbl: 'Live register of known bugs',
        note: "A running list of confirmed issues — updated as each one is fixed. Agents check here before escalating.",
        arts: [
          { n: 'C7.2.1', t: "Known issue: payments stuck on processing (how to handle)", w: 'Agent' },
          { n: 'C7.2.2', t: "Known issue: statement entries going missing (how to handle)", w: 'Agent' },
          { n: 'C7.2.3', t: "Known issue: direct debit mandate timeout during application (how to handle)", w: 'Agent' },
          { n: 'C7.2.4', t: "Known issue: wallet balance not displaying correctly (how to handle)", w: 'Agent' },
          { n: 'C7.2.5', t: "Known issue: payment gateway downtime — Moniepoint / Monnify / Kora Pay", w: 'Agent' },
        ]
      },
    ]
  },
];

export const RELS = [
  { chips: ['C1 — Loans', 'C3 — App access'], title: "If someone can't apply for a loan, check if they can even get into the app first", body: "Before you investigate the loan itself, confirm the person can actually log in and has passed identity verification. A lot of 'can't apply for loan' tickets turn out to be login or BVN issues in disguise. The sequence to check is: can they open the app → can they log in → is their identity verified → then look at loan eligibility. Skipping to the loan before confirming the first three wastes time on both sides." },
  { chips: ['C1.2 — Loan application', 'Direct debit setup'], title: "Direct debit mandate is set up during the loan application — not after", body: "The mandate is a required step inside the application process. The employee cannot complete their loan application without setting up the direct debit, because that is how Breeze will collect repayments. So if an employee says 'my application is stuck' or 'I can't complete the mandate step', that is a C1.2 issue — part of the application, not a separate payments task. After the loan is live, complaints about deductions not happening or the wrong amount being taken sit in C1.4." },
  { chips: ['C2 — Payments', 'C7 — Outages'], title: "When multiple Payer companies report the same payment problem at the same time — it's an outage", body: "The Payer/Payment EF tickets show a clear pattern: when a payment gateway like Moniepoint or Monnify goes down, multiple companies raise tickets within the same window — all saying payments are stuck or failed. Before treating these as individual company issues, check C7.2 for an active gateway incident. If it's there, use the C7.1.4 outage message template to respond to all affected companies at once instead of handling them one by one." },
  { chips: ['C1 — Loans', 'C5 — Learning'], title: "Many loan complaints aren't broken — the customer just doesn't know how it works", body: "167 tickets were filed because the person didn't understand the product, not because anything was wrong. If an employee says they 'can't take a loan' and everything checks out technically, the issue is often that Marketplace hasn't been explained to them, or they don't know their employer needs to activate EWA first. Pointing them to the right walkthrough article in C5 resolves these without any technical work." },
  { chips: ['C2 — Payments', 'C1 — Loans'], title: "A failed payroll run often triggers loan complaints at the same time", body: "When payroll fails or is delayed, employees who expected to be paid check their loan eligibility next — and suddenly 'salary not credited' (C2) and 'loan unavailable' (C1) tickets arrive together. They have the same root cause. If you start seeing both at the same time from the same employer, look at the payroll run first. Fixing C2 typically clears C1 automatically once the salary lands." },
  { chips: ['C5 — Learning', 'C2 — Payments', 'C1 — Loans'], title: "Fixing the learning gap reduces payment and loan tickets the most", body: "The 167 learning gap tickets map directly onto the highest-volume categories. Employers who don't know how to run payroll correctly create C2 tickets. Employees who don't know how EWA works create C1 tickets. Every good walkthrough article in C5 takes pressure off C1 and C2 permanently. This is why C5 gets built first in the implementation plan, even though it's not the highest ticket count." },
  { chips: ['C6 — Escalation', 'C7 — Known issues'], title: "C6 and C7 work together as a safety net for the whole system", body: "When an agent can't resolve a ticket, C6 tells them what to do next. When the same problem is affecting multiple customers — especially across Payer clients during a gateway outage — C7 makes sure agents aren't filing ten separate Engineering tickets for the same issue. Together these two topics prevent the support team from being overwhelmed during incidents." },
];

export const FIXES = [
  { icon: '⏱', title: "Payroll or disbursement stuck on 'Processing' or 'Progressing'", body: [
    { type: 'p', text: "This is the single most common complaint across both the Embedded Finance and Payer/Payment EF teams. Here is how to handle it." },
    { type: 'ol', items: [
      "Check if the affected company has sufficient wallet balance. No wallet balance means no retry is possible — C2.3.6.",
      "Look for any employee in the batch with an unvalidated or missing bank account number. Even one can stall the whole run.",
      "Check C7.2.5 — if Moniepoint or Monnify is down, this is a gateway issue affecting multiple companies at once, not an individual company problem.",
      "For pension specifically — PFA processing takes 24 to 48 business hours. If it's been less than two business days, this is normal.",
      "If the batch has been stuck for more than four hours, all accounts are confirmed, and there's no known gateway issue — raise to EF Ops via C6.1.1."
    ]},
    { type: 'tip', text: "If you're seeing the same issue from multiple companies in the same window, check C7.2 first. It is almost certainly a gateway outage — use C7.1.4 to communicate to all affected clients at once." }
  ]},
  { icon: '✋', title: "'Apply for loan' button won't work — or the loan option is missing entirely", body: [
    { type: 'p', text: "These are two different problems. Diagnose before responding." },
    { type: 'p', text: "If the button is there but won't respond when tapped: close the app fully, clear the cache, reopen on Wi-Fi. If still broken after two tries, file a bug report using C6.2.1 with the employee's user ID and employer name." },
    { type: 'p', text: "If the loan option is not showing at all:" },
    { type: 'ol', items: [
      "Confirm the Marketplace has been switched on for their organisation — this is the most common reason.",
      "Confirm the employee has completed identity verification (KYC).",
      "Check whether the employee already has an active loan — a second application is blocked until the first is cleared.",
      "Check the employee's payroll status in HRIS — if recently changed or inactive, eligibility resets."
    ]}
  ]},
  { icon: '🔄', title: "Direct debit mandate failing during loan application", body: [
    { type: 'p', text: "The direct debit mandate is a required step inside the loan application. If it fails, the application cannot complete." },
    { type: 'ol', items: [
      "Confirm the bank is on the supported list for direct debit on Breeze. Some smaller banks are not supported — the customer needs to use a different account.",
      "Timing matters. Bank APIs are busiest between 9am and 12pm on business days. Ask the customer to try again in the evening.",
      "Check that the BVN linked to the bank account exactly matches the BVN on the Breeze profile. Even a small mismatch causes a silent timeout with no error message.",
      "If two attempts at different times still fail and the bank is supported, raise through C6.1.2 — loan escalation to EF Ops."
    ]},
    { type: 'tip', text: "This issue is logged in C7.2.3. Check there first — if it's a known active issue, use the outage message template in C7.1.2." }
  ]},
  { icon: '📵', title: "Customer is not receiving their OTP", body: [
    { type: 'p', text: "This comes up in login (C3), loan applications (C1.2.3), and Payer disbursements (C2.4.5). The diagnosis is the same for all three." },
    { type: 'ol', items: [
      "Check the phone number on the account — about 40% of OTP complaints are resolved here.",
      "Ask if mobile data is turned on. Some Nigerian networks — especially MTN — block SMS when data is active. Turn off data, then request OTP again.",
      "Wait a full 60 seconds before using 'Resend OTP'. Repeated taps trigger a rate limit that blocks all OTPs for 15 minutes.",
      "If still not received after two attempts, file a C6.2.3 bug report with the phone number (masked), network carrier, number of attempts, and timestamp."
    ]},
    { type: 'tip', text: "Check C7.2 if multiple customers report OTP issues at the same time — it may be a network-level incident." }
  ]},
  { icon: '💰', title: "An employee has been paid twice", body: [
    { type: 'p', text: "Act quickly — recovery gets harder the longer it sits." },
    { type: 'ol', items: [
      "Confirm the duplication — pull the disbursement log in Breeze Payer and find both transaction entries for the same employee in the same cycle.",
      "Do not try to reverse the payment yourself. There is no self-service reversal. Raise to EF Ops immediately through C6.1.1, sharing both transaction IDs.",
      "Let the HR Admin know the three recovery routes: deduct from next payroll, ask employee to transfer back, or EF Ops initiates a reversal."
    ]},
    { type: 'tip', text: "If this has happened before for the same employer, note it in C7.2 — a pattern may point to a configuration issue for Engineering." }
  ]},
  { icon: '📄', title: "Statement downloaded but transactions are missing", body: [
    { type: 'p', text: "This is a known bug Engineering is aware of. Here's how to help the customer in the meantime." },
    { type: 'ol', items: [
      "Ask the customer to try a shorter date range — one month at a time instead of six.",
      "Try CSV instead of PDF — the missing entry bug affects the PDF generator more often.",
      "For official purposes, EF Ops can generate a manual statement with full transaction history. Request through the internal support channel, not Engineering.",
      "When filing C6.2.4, note exactly which dates and amounts are missing — the more specific, the faster Engineering can fix it."
    ]}
  ]},
];
