export const ARTICLES = {
  'C1.1.1': {
    id: 'C1.1.1',
    title: "I can't see the loan option on my Breeze app",
    audience: 'Employee (B2C)',
    summary: "If the loan or Marketplace section is missing from your Breeze app, the most common reasons are that your employer has not activated the feature, your identity verification is incomplete, or your app needs updating.",
    rootCause: "Real tickets show three distinct reasons: (1) employer has not activated the Marketplace or EWA product, (2) employee has not completed KYC or BVN verification, (3) employee does not yet meet the minimum consecutive salary disbursement requirement.",
    steps: [
      "Open the Breeze app and go to the home screen. Look for a Marketplace or Loans tab at the bottom. If it is not there at all, the issue is with employer activation — not your account.",
      "Check with your HR Admin to confirm they have activated the Breeze Marketplace for your organisation. This is a one-time setup on the employer side.",
      "If the Marketplace tab is visible but you cannot see loan products inside it, check your profile for a pending identity verification step. Go to Profile → Verification and complete any outstanding BVN or document steps.",
      "If you see the message 'You will be eligible for Earn Wage Access after one more consecutive salary disbursement' — this means you need to receive at least one more salary payment on the same account before you qualify. This is a system eligibility rule, not an error.",
      "Make sure your Breeze app is updated to the latest version. Check the App Store or Play Store for updates.",
      "If none of the above applies, contact support with your employee ID, company name, and a screenshot of what you see.",
    ],
    errors: [
      { msg: "You do not meet the minimum expected time in company", fix: "You need at least one more consecutive salary payment on the same account. Wait for the next payroll cycle and try again." },
      { msg: "You do not meet the Maximum expected time in company", fix: "Your account has been with the company longer than the product allows. Contact support — this needs to be reviewed manually." },
      { msg: "BVN is mandatory", fix: "Your BVN is not linked or has become unlinked. Go to Profile → Verification to re-link it." },
    ],
    escalate: "If you have completed KYC, your employer has confirmed Marketplace is active, and you still cannot see the loan option — contact support with your employee ID, company name, and phone number linked to your account.",
    owner: 'EF Support', reviewed: 'May 2026'
  },

  'C1.1.2': {
    id: 'C1.1.2',
    title: "Why am I not eligible for a salary advance?",
    audience: 'Employee (B2C)',
    summary: "Loan eligibility on Breeze is based on a set of criteria tied to your salary history, account details, and employer setup. Being ineligible does not mean you can never take a loan — it usually means one condition is not yet met.",
    rootCause: "The most common eligibility blockers from real tickets are: insufficient consecutive salary disbursements on the same account, a recently changed salary account, an active outstanding loan, or the employer not having whitelisted the employee.",
    steps: [
      "Check how long you have been receiving salary on your current account. Breeze requires a minimum number of consecutive salary payments on the same bank account before you qualify. If you recently changed your salary account, you may need to wait for the next one or two payroll cycles.",
      "Check if you already have an active loan. You cannot take a second loan until the first one is fully repaid or liquidated.",
      "Ask your HR Admin to confirm you are whitelisted on the Breeze platform. Some employers have a whitelist of employees approved to access loans — if your name is not on it, you will not qualify regardless of your salary history.",
      "Make sure your BVN is correctly linked to your Breeze account. An unlinked or mismatched BVN can block eligibility even if everything else is in order.",
      "Check that your salary is being paid into the same bank account consistently. Any change in account number resets the eligibility clock.",
    ],
    errors: [
      { msg: "Unable to verify. You are not eligible for this loan. Kindly contact support", fix: "One or more eligibility criteria are not met. Work through the checklist above and contact support if you cannot identify the reason." },
      { msg: "You do not meet the minimum expected time in company", fix: "You need more consecutive salary payments on the same account. Wait for the next payroll cycle." },
    ],
    escalate: "If you believe you meet all the criteria and are still seeing an eligibility error, contact support with: your full name, employee ID, company name, the exact error message, and how long you have been receiving salary on your current account.",
    owner: 'EF Support', reviewed: 'May 2026'
  },

  'C1.2.3': {
    id: 'C1.2.3',
    title: "I didn't receive the OTP to confirm my loan",
    audience: 'Employee (B2C)',
    summary: "If the OTP is not arriving during your loan application, the issue is almost always with your phone number, your mobile data setting, or how quickly you are pressing resend. Follow these steps before contacting support.",
    rootCause: "The most common causes from real tickets are: wrong phone number linked to the account, mobile data interfering with SMS delivery (especially on MTN), and customers hitting resend too quickly which triggers a 15-minute rate limit block.",
    steps: [
      "Confirm the phone number registered on your Breeze account is the one you are checking. Many OTP issues are caused by the OTP going to a different number. You can check your registered number under Profile settings.",
      "If you have mobile data turned on, turn it off completely and request the OTP again. On some Nigerian networks — particularly MTN — having mobile data active blocks SMS messages from arriving. Switch to Wi-Fi or turn off data entirely, then try again.",
      "Wait a full 60 seconds after requesting an OTP before pressing resend. If you tap resend repeatedly without waiting, the system applies a rate limit and blocks all OTPs to your number for 15 minutes. If this has happened, wait 15 minutes before trying again.",
      "Check your SMS inbox, not just notifications. Sometimes the OTP arrives but the notification does not appear.",
      "If the OTP still has not arrived after two attempts, try restarting your phone and requesting again.",
    ],
    errors: [
      { msg: "OTP expired", fix: "Each OTP is valid for a limited time. If it expires, tap Resend OTP once and wait 60 seconds." },
    ],
    escalate: "If you have followed all the steps and still cannot receive the OTP, contact support with: your phone number (the one registered on Breeze), your network provider, the number of times you requested the OTP, and the approximate times of each request.",
    owner: 'EF Support', reviewed: 'May 2026'
  },

  'C1.2.6': {
    id: 'C1.2.6',
    title: "How do I set up a direct debit mandate during my loan application?",
    audience: 'Employee (B2C)',
    summary: "Setting up a direct debit mandate is a required step inside the loan application process. It is not optional — without it, your loan cannot be approved. The mandate authorises Breeze to automatically deduct your monthly repayments from your salary account.",
    rootCause: "Many employees are surprised by this step or do not understand what it means, causing them to abandon the application. The mandate step is triggered by NIBSS (Nigeria Inter-Bank Settlement System) and requires BVN consent before it can complete.",
    steps: [
      "During your loan application, you will reach a screen that asks you to authorise a direct debit. This is the mandate step.",
      "Read the details carefully — it shows the account that will be debited, the repayment amount, and the schedule.",
      "Tap Authorise or Give Consent to proceed. You may be asked to enter an OTP sent to your registered phone number to confirm.",
      "Make sure the bank account shown is your active salary account. The deductions will come from this account on your salary date each month.",
      "Once you authorise, the application continues and your loan moves to the approval stage.",
    ],
    errors: [
      { msg: "Unable to complete process. Please try again", fix: "This usually means the BVN consent step with NIBSS failed. Close the app, reopen on Wi-Fi, and try again. If it persists, contact support with your employee ID." },
      { msg: "BVN consent required", fix: "You need to give consent for your BVN to be used for the mandate. Tap Start Now on the consent screen. If you get an error after tapping, close and reopen the app." },
    ],
    escalate: "If the mandate step keeps failing after two attempts on Wi-Fi, contact support with your employee ID, company name, and the exact error message. Do not keep retrying — let support investigate the NIBSS connection on your account.",
    owner: 'EF Support', reviewed: 'May 2026'
  },

  'C2.1.1': {
    id: 'C2.1.1',
    title: "Payroll has been on 'Processing' or 'Progressing' for hours — what do I do?",
    audience: 'HR Admin / Employer',
    summary: "When a payroll run stays on Processing or Progressing for more than two hours, it usually means one or more payments cannot complete — due to an employee account issue, insufficient wallet balance, or a third-party payment gateway problem.",
    rootCause: "Real ticket descriptions show four main causes: (1) one employee in the batch has an unvalidated or missing account number, (2) the wallet has no balance for retry, (3) a payment gateway like Moniepoint or Monnify is experiencing downtime, (4) a subsidiary payment is stuck while others have completed.",
    steps: [
      "Open Breeze Payer and go to the payroll run that is stuck. Click into the payment summary and look at the status of each employee's payment individually. Most of the time, the majority have completed — only one or a few are stuck.",
      "For any employee showing as Processing individually, check their profile to confirm they have a valid, validated bank account number. An unvalidated account or a missing account number silently stalls the payment.",
      "Check your wallet balance. If the balance is zero or insufficient, failed payments cannot be retried. Fund the wallet before payments can proceed.",
      "Check if this is affecting multiple companies at the same time. If several subsidiaries are all stuck simultaneously, this may be a payment gateway issue rather than an account problem. Contact support immediately with the batch numbers of all affected runs.",
      "If only one employee's payment is stuck and all details are correct, you can request support to manually fail the processing payment so you can retry it separately. Provide the employee name, batch number, and reference number.",
      "For pension specifically — PFA processing takes 24 to 48 business hours. If it has been less than two business days, this is within the normal processing window.",
    ],
    errors: [
      { msg: "Payment status showing Processing with no update for 4+ hours", fix: "Check individual employee statuses, wallet balance, and whether other companies are affected. Follow the steps above." },
      { msg: "Unable to re-initiate payment — status not updated to Failed", fix: "Contact support to manually fail the stuck payment. Provide the batch number and reference number." },
      { msg: "Failed payments due to Monnify or Moniepoint downtime", fix: "This is a third-party gateway issue. Support will monitor and retry when service is restored. Do not initiate a new payment batch." },
    ],
    escalate: "If the payroll has been stuck for more than four hours, all employee account details are confirmed, and wallet balance is sufficient — escalate to EF Ops. Provide: company name, batch number, number of employees affected, and how long it has been processing.",
    owner: 'EF Support / EF Ops', reviewed: 'May 2026'
  },

  'C2.1.4': {
    id: 'C2.1.4',
    title: "An employee was paid twice — how do I fix it?",
    audience: 'HR Admin / Employer',
    summary: "A duplicate payment happens when an employee receives two credits for the same payroll cycle. Act quickly — the longer it sits, the more complicated the recovery becomes.",
    rootCause: "Duplicate payments typically happen when a payment showed Failed but was actually credited, and the admin initiated a retry — resulting in a second credit. They also occur when a batch is processed twice due to a system delay.",
    steps: [
      "Before doing anything, confirm the duplication. Go to Breeze Payer and pull the disbursement log for that payroll cycle. Find the employee in question and look for two separate transaction entries — each with its own reference number and timestamp.",
      "Note both transaction reference numbers and the batch number. You will need these.",
      "Do not attempt to reverse the payment yourself through the platform. There is no self-service reversal option on Breeze Payer.",
      "Contact EF Ops immediately through your account manager or support channel. Share both transaction reference numbers and the employee name and bank account.",
      "EF Ops will advise on the fastest recovery route. The three options are: (a) deduct the extra amount from the employee's next payroll, (b) ask the employee to transfer back the duplicate amount directly, or (c) EF Ops initiates a bank reversal.",
    ],
    errors: [
      { msg: "Employee whose payment status showed Failed was credited twice", fix: "Always confirm with the employee whether they received the money before retrying a Failed status payment. This is the most common cause of duplicates." },
    ],
    escalate: "Escalate immediately to EF Ops. Do not wait. The sooner EF Ops is involved, the more recovery options are available. If the employee has already spent the funds, recovery becomes significantly harder.",
    owner: 'EF Ops', reviewed: 'May 2026'
  },

  'C2.2.2': {
    id: 'C2.2.2',
    title: "Pension disbursement has been on 'Processing' for a long time",
    audience: 'HR Admin / Employer',
    summary: "Pension remittance takes longer than salary payments because it goes through the PFA and PENCOM systems. A processing status for up to 48 business hours is normal. Beyond that, follow the steps below.",
    rootCause: "The most common causes from real tickets are: PFA processing delay within normal window, incorrect or unverified PFA or RSA details for the employee, and pension files uploaded with data errors.",
    steps: [
      "First check how long the pension has been on Processing. If it is less than 48 business hours (two working days), this is within the normal window. PFAs like Stanbic IBTC, ARM, and AXA Mansard have varying processing times — some take the full 48 hours.",
      "Check the employee's PFA and RSA (Retirement Savings Account) details on the system. An incorrect RSA PIN or unverified PFA details will cause the remittance to fail silently — it may appear as Processing indefinitely.",
      "If the pension is for multiple employees and only some are stuck, the ones stuck likely have PFA detail issues. Check each affected employee's profile individually.",
      "If it has been more than 48 business hours, contact support with: the company name, pension batch reference, names of affected employees, their PFA names, and their RSA numbers.",
      "For employees whose pension has not been remitted for multiple months, this requires a manual reconciliation by EF Ops. Provide the full list of affected months and employee details.",
    ],
    errors: [
      { msg: "Payment status showed completed but employee did not receive pension", fix: "The payment left Breeze but was rejected at the PFA level. This usually means the RSA number is incorrect. Verify RSA details and contact support." },
      { msg: "PFA verification failed", fix: "The PFA details on file do not match the PFA's records. Update the employee's PFA information and resubmit." },
    ],
    escalate: "If the pension has been processing for more than 48 business hours and PFA details are confirmed correct — escalate to EF Ops with the batch reference, company name, affected employees, and PFA names. Outstanding pension credits going back multiple months always require EF Ops involvement.",
    owner: 'EF Ops', reviewed: 'May 2026'
  },
};
