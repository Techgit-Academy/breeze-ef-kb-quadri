export const CATS = [
  {
    id: 'C1', color: '#1B3A6B', badge: 'CRITICAL', badgeType: 'red',
    tickets: 420, pct: '26%',
    title: 'Loans — EWA, Maxi and Flexi',
    why: `This is where employees come when something goes wrong with a loan. They can't apply, the money hasn't arrived, too much was deducted, or they want to pay it off early. This topic covers the full loan journey from start to finish — including setting up direct debit, which is how repayments happen automatically.`,
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
        id: 'C1.2', lbl: 'Problems during the loan application',
        note: "Articles for employees who started applying but hit an error, got no money, or are confused about how much they can borrow.",
        arts: [
          { n: 'C1.2.1', t: "I got an error while applying for a loan — what does it mean?", w: 'Employee' },
          { n: 'C1.2.2', t: "I completed my application but no money came", w: 'Employee' },
          { n: 'C1.2.3', t: "I didn't receive the OTP to confirm my loan", w: 'Employee' },
          { n: 'C1.2.4', t: "The loan amount showing is different from what I expected", w: 'Employee' },
          { n: 'C1.2.5', t: "Why is my loan limit lower than it should be?", w: 'Employee' },
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
        id: 'C1.4', lbl: 'Repayments, direct debit and paying off early',
        note: "Articles for employees dealing with deductions, setting up direct debit for automatic repayments, clearing a loan early, or a balance that hasn't updated after payment.",
        arts: [
          { n: 'C1.4.1', t: "How does loan repayment work?", w: 'Employee' },
          { n: 'C1.4.2', t: "More money was deducted than my repayment amount", w: 'Employee' },
          { n: 'C1.4.3', t: "How do I pay off my loan before the end of the term?", w: 'Employee' },
          { n: 'C1.4.4', t: "I've paid back the loan but it still shows as outstanding", w: 'Employee' },
          { n: 'C1.4.5', t: "Salary deduction happened but loan balance hasn't changed", w: 'HR Admin' },
          { n: 'C1.4.6', t: "Where do I send money to repay my loan manually?", w: 'Employee / HR Admin' },
          { n: 'C1.4.7', t: "How do I set up a direct debit mandate on Breeze?", w: 'Employee' },
          { n: 'C1.4.8', t: "My direct debit setup keeps failing or timing out", w: 'Employee' },
          { n: 'C1.4.9', t: "My mandate is set up but no deduction is happening", w: 'Employee' },
          { n: 'C1.4.10', t: "How do I update or change an existing direct debit mandate?", w: 'Employee' },
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
    tickets: 606, pct: '37%',
    title: 'Payments and payroll',
    why: `This is the biggest topic in the KB. It covers everything that can go wrong when an employer runs payroll — salaries not going through, employees being paid twice, pension payments stuck. Most of these complaints come from HR Admins managing payroll on behalf of their organisation.`,
    subs: [
      {
        id: 'C2.1', lbl: 'Running payroll and salary disbursement',
        note: "Articles for HR Admins dealing with stuck, failed, or incorrect salary payments.",
        arts: [
          { n: 'C2.1.1', t: "Payroll has been processing for hours — what do I do?", w: 'HR Admin' },
          { n: 'C2.1.2', t: "Some employees show 'Failed' — how do I sort this?", w: 'HR Admin' },
          { n: 'C2.1.3', t: "An employee's salary didn't go through", w: 'HR Admin' },
          { n: 'C2.1.4', t: "An employee was paid twice — how do I fix it?", w: 'HR Admin' },
          { n: 'C2.1.5', t: "How do I run an extra payment outside the normal payroll cycle?", w: 'HR Admin' },
          { n: 'C2.1.6', t: "What happens if an employee has no bank account on file?", w: 'HR Admin' },
          { n: 'C2.1.7', t: "Payment shows 'Failed' but the employee got the money", w: 'HR Admin' },
        ]
      },
      {
        id: 'C2.2', lbl: 'Pension payments',
        note: "Articles covering the full pension payment process — uploading, processing, receipts and status tracking.",
        arts: [
          { n: 'C2.2.1', t: "How do I make pension payments through Breeze Payer?", w: 'HR Admin' },
          { n: 'C2.2.2', t: "Pension payment has been on 'Pending' for a long time", w: 'HR Admin' },
          { n: 'C2.2.3', t: "How do I get a pension payment receipt or remittance evidence?", w: 'HR Admin' },
          { n: 'C2.2.4', t: "I uploaded the pension file but it's not showing on Breeze Payer", w: 'HR Admin' },
          { n: 'C2.2.5', t: "Payment shows successful but the PFA hasn't received the funds", w: 'HR Admin' },
        ]
      },
      {
        id: 'C2.3', lbl: 'Account numbers and balances',
        note: "Articles for account validation issues, wrong balances, and duplicate account details.",
        arts: [
          { n: 'C2.3.1', t: "An employee's balance is wrong or showing as zero", w: 'Employee / HR Admin' },
          { n: 'C2.3.2', t: "Two employees have the same account number — what do I do?", w: 'HR Admin' },
          { n: 'C2.3.3', t: "An employee can't update or verify their bank account", w: 'HR Admin' },
          { n: 'C2.3.4', t: "The balance in the app doesn't match the bank statement", w: 'Employee' },
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
    tickets: 90, pct: '6%',
    title: 'Account statements and transaction records',
    why: `Customers and HR Admins often need a record of what happened — a statement to send to their bank, proof of a pension payment, or a transaction history for reconciliation. This topic covers how to get those records and what to do when they're incomplete.`,
    subs: [
      {
        id: 'C4.1', lbl: 'Getting a statement',
        note: "Articles for anyone who needs to download or request a statement.",
        arts: [
          { n: 'C4.1.1', t: "How do I download my account statement from Breeze?", w: 'Employee' },
          { n: 'C4.1.2', t: "How do I get statements for all our subsidiaries at once?", w: 'HR Admin' },
          { n: 'C4.1.3', t: "Some transactions are missing from the statement I downloaded", w: 'Employee / HR Admin' },
          { n: 'C4.1.4', t: "Can I get my statement as a PDF or spreadsheet?", w: 'Employee' },
        ]
      },
      {
        id: 'C4.2', lbl: 'Reconciliation and matching records',
        note: "Articles for HR Admins trying to match payroll records against bank statements or understand unexplained deductions.",
        arts: [
          { n: 'C4.2.1', t: "How do I match my payroll payments against our bank records?", w: 'HR Admin' },
          { n: 'C4.2.2', t: "Employees are seeing debits they don't recognise — what are they?", w: 'HR Admin' },
          { n: 'C4.2.3', t: "How do I get the reference numbers for a payment batch?", w: 'HR Admin' },
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
          { n: 'C5.3.2', t: "How does Earned Wage Access work?", w: 'Employee' },
          { n: 'C5.3.3', t: "How to turn on EWA for your organisation", w: 'HR Admin' },
          { n: 'C5.3.4', t: "What's the difference between Maxi and Flexi loans?", w: 'Employee' },
          { n: 'C5.3.5', t: "A first look at Breeze Payer — for new employers", w: 'HR Admin' },
          { n: 'C5.3.6', t: "What is the Breeze Marketplace and how does it work?", w: 'Employee' },
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
        ]
      },
      {
        id: 'C6.3', lbl: 'Which team handles what',
        note: "A routing guide so agents don't send tickets to the wrong team and cause delays.",
        arts: [
          { n: 'C6.3.1', t: "Is this an EF ticket or an HRIS ticket? How to tell", w: 'Agent' },
          { n: 'C6.3.2', t: "EF Ops vs Engineering — who owns the fix?", w: 'Agent' },
          { n: 'C6.3.3', t: "When to loop in Compliance or Legal", w: 'Agent' },
        ]
      },
    ]
  },
  {
    id: 'C7', color: '#E65100', badge: 'HIGH', badgeType: 'blue',
    tickets: 134, pct: '8%',
    title: 'Known problems and outages',
    why: `When something breaks across multiple customers at the same time, agents need to recognise it quickly and communicate it clearly. This section keeps a live record of known issues and gives agents ready-to-send messages so no one has to write something from scratch under pressure.`,
    subs: [
      {
        id: 'C7.1', lbl: 'Messages to send customers during outages',
        note: "Pre-written messages for WhatsApp, email and the app — ready to send when a known issue is active.",
        arts: [
          { n: 'C7.1.1', t: "What to say to customers when payments are delayed", w: 'Agent' },
          { n: 'C7.1.2', t: "What to say to customers when loan service is down", w: 'Agent' },
          { n: 'C7.1.3', t: "What to say to customers when OTP is not working", w: 'Agent' },
        ]
      },
      {
        id: 'C7.2', lbl: 'Live register of known bugs',
        note: "A running list of confirmed issues — updated as each one is fixed. Agents check here before escalating.",
        arts: [
          { n: 'C7.2.1', t: "Known issue: payments stuck on processing (how to handle)", w: 'Agent' },
          { n: 'C7.2.2', t: "Known issue: statement entries going missing (how to handle)", w: 'Agent' },
          { n: 'C7.2.3', t: "Known issue: direct debit mandate timeout (how to handle)", w: 'Agent' },
          { n: 'C7.2.4', t: "Known issue: wallet balance not displaying correctly (how to handle)", w: 'Agent' },
        ]
      },
    ]
  },
];

export const RELS = [
  {
    chips: ['C1 — Loans', 'C3 — App access'],
    title: "If someone can't apply for a loan, check if they can even get into the app first",
    body: `Before you investigate the loan itself, confirm the person can actually log in and has passed identity verification. A lot of "can't apply for loan" tickets turn out to be login or BVN issues in disguise. The sequence to check is: can they open the app → can they log in → is their identity verified → then look at loan eligibility. Skipping to the loan before confirming the first three wastes time on both sides.`
  },
  {
    chips: ['C1 — Loans', 'C5 — Learning'],
    title: "Many loan complaints aren't broken — the customer just doesn't know how it works",
    body: `167 tickets were filed because the person didn't understand the product, not because anything was wrong. If an employee says they "can't take a loan" and everything checks out technically, the issue is often that Marketplace hasn't been explained to them, or they don't know their employer needs to activate EWA first. Pointing them to the right walkthrough article in C5 resolves these without any technical work.`
  },
  {
    chips: ['C1 — Loans', 'C1.4 — Direct debit'],
    title: "Direct debit is part of the loan journey — not a standalone payments task",
    body: `Setting up a direct debit mandate is the first thing an employee does after taking a loan, because it is what allows Breeze to deduct repayments automatically from their account each month. If an employee complains that "repayment is not happening" or "my mandate isn't working", that sits in C1.4 — not in payments. Always look at the loan first to understand the repayment context.`
  },
  {
    chips: ['C2 — Payments', 'C1 — Loans'],
    title: "A failed payroll run often triggers loan complaints at the same time",
    body: `When payroll fails or is delayed, employees who expected to be paid check their loan eligibility next — and suddenly "salary not credited" (C2) and "loan unavailable" (C1) tickets arrive together. They have the same root cause. If you start seeing both at the same time from the same employer, look at the payroll run first. Fixing C2 typically clears C1 automatically once the salary lands.`
  },
  {
    chips: ['C5 — Learning', 'C2 — Payments', 'C1 — Loans'],
    title: "Fixing the learning gap reduces payment and loan tickets the most",
    body: `The 167 learning gap tickets map directly onto the highest-volume categories. Employers who don't know how to run payroll correctly create C2 tickets. Employees who don't know how EWA works create C1 tickets. Every good walkthrough article in C5 takes pressure off C1 and C2 permanently. This is why C5 gets built first in the implementation plan, even though it's not the highest ticket count.`
  },
  {
    chips: ['C6 — Escalation', 'C7 — Known issues'],
    title: "C6 and C7 work together as a safety net for the whole system",
    body: `When an agent can't resolve a ticket, C6 tells them what to do next. When the same problem is affecting multiple customers, C7 makes sure agents aren't filing ten separate Engineering tickets for the same bug — and gives them a ready-made message to send customers in the meantime. Together these two topics prevent the support team from being overwhelmed during incidents and make sure Engineering gets clean, useful information instead of noise.`
  },
];

export const FIXES = [
  {
    icon: '⏱',
    title: "Payroll has been 'processing' for too long",
    body: [
      { type: 'p', text: "This is the most common complaint from HR Admins. Here is how to handle it." },
      { type: 'p', text: "First, check the obvious things:" },
      { type: 'ol', items: [
        "Go to the employee list for that payroll run. Look for any employee who has no bank account number on their profile, or whose account number hasn't been validated. Even one missing account can hold up the whole batch.",
        "For pension payments specifically — the PFA takes 24 to 48 business hours to process. If it's been less than two business days, this is normal. Let the customer know.",
        "If this is a payroll run that's been processing for more than four hours and all account numbers are confirmed, raise it through the payment escalation guide (C6.1.1). This goes to EF Ops, not Engineering."
      ]},
      { type: 'tip', text: "If you're seeing the same 'stuck processing' issue across more than one company at the same time, check C7.2 before raising individual escalations. It may already be a known issue." }
    ]
  },
  {
    icon: '✋',
    title: "'Apply for loan' button won't work — or the loan option is missing entirely",
    body: [
      { type: 'p', text: "These are two different problems. Diagnose before responding." },
      { type: 'p', text: "If the button is there but won't respond when tapped: This is a known bug. Ask the customer to close the app fully, clear the cache, and reopen on a Wi-Fi connection rather than mobile data. If it still doesn't work after two tries, file a bug report using C6.2.1 — include the employee's user ID and the name of their employer." },
      { type: 'p', text: "If the loan option is not showing at all:" },
      { type: 'ol', items: [
        "Confirm with the HR Admin that the Marketplace has been switched on for their organisation. This is the most common reason.",
        "Confirm the employee has completed identity verification (KYC). Employees without a verified identity cannot see loan products.",
        "Check whether the employee already has an active loan. A second application is blocked until the first is cleared.",
        "Check the employee's payroll status in HRIS. If their status was recently changed or they are marked as inactive, loan eligibility resets."
      ]}
    ]
  },
  {
    icon: '📵',
    title: "Customer is not receiving their OTP",
    body: [
      { type: 'p', text: "This comes up in both login (C3) and loan applications (C1.2.3). The diagnosis is the same for both." },
      { type: 'ol', items: [
        "Check the phone number on the account. Ask the customer to confirm it matches exactly what they're looking at. About 40% of OTP complaints are resolved here.",
        "Ask if the customer has mobile data turned on. Some Nigerian networks — especially MTN — block SMS delivery when data is active. Ask them to turn off data, then request the OTP again.",
        "Wait a full 60 seconds before using 'Resend OTP'. If the customer keeps tapping resend without waiting, the system rate-limits them and blocks all OTPs for 15 minutes.",
        "If none of the above works after two attempts, file a C6.2.3 bug report. Include the phone number (masked), the network carrier, how many times OTP was requested, and the time it happened."
      ]},
      { type: 'tip', text: "Check C7.2 if multiple customers report OTP issues at the same time — it may be a network-level incident, not individual account problems." }
    ]
  },
  {
    icon: '🔄',
    title: "Direct debit mandate setup keeps timing out",
    body: [
      { type: 'p', text: "This sits in C1.4 — it is part of the loan repayment setup, not a general payments issue. Try these steps in order before escalating." },
      { type: 'ol', items: [
        "Confirm the bank is on the supported list for direct debit on Breeze. Some smaller banks are not supported — if that's the case, the customer needs to use a different account and there's nothing to escalate.",
        "Timing matters. Bank APIs are busiest between 9am and 12pm on business days. Ask the customer to try again in the evening — the success rate is noticeably higher.",
        "Check that the BVN linked to the bank account exactly matches the BVN on the Breeze profile. Even a small mismatch causes a silent timeout with no clear error message.",
        "If two attempts at different times still fail and the bank is supported, raise through C6.1.2 — this is a loan escalation to EF Ops, not Engineering."
      ]}
    ]
  },
  {
    icon: '💰',
    title: "An employee has been paid twice",
    body: [
      { type: 'p', text: "Act quickly — recovery gets harder the longer it sits." },
      { type: 'ol', items: [
        "Confirm the duplication first. Pull the disbursement log in Breeze Payer and find both transaction entries for the same employee in the same cycle.",
        "Do not try to reverse the payment yourself through the platform. There is no self-service reversal option. Raise it to EF Ops immediately through C6.1.1, sharing both transaction IDs.",
        "Let the HR Admin know there are three recovery routes: deducting from the next payroll, asking the employee to transfer back directly, or EF Ops initiating a reversal. EF Ops will advise which is fastest given the situation."
      ]},
      { type: 'tip', text: "If this is the second time this has happened for the same employer, note it in C7.2 — a pattern of duplicate payments from the same company may point to a configuration issue that needs Engineering to look at." }
    ]
  },
  {
    icon: '📄',
    title: "Statement downloaded but transactions are missing",
    body: [
      { type: 'p', text: "This is a known bug that Engineering is aware of. While it's being fixed, here's how to help the customer in the meantime." },
      { type: 'ol', items: [
        "Ask the customer to try a shorter date range. Downloading six months at once sometimes drops entries — downloading one month at a time usually brings them all through.",
        "Try downloading as CSV instead of PDF. The missing entry bug affects the PDF generator more often than the CSV export.",
        "If the customer needs the statement for official purposes, EF Ops can generate a manual statement with the full transaction history. This is requested through the internal support channel, not Engineering.",
        "When filing the C6.2.4 bug report, note exactly which dates and amounts are missing. The more specific, the faster Engineering can fix it."
      ]}
    ]
  },
];
