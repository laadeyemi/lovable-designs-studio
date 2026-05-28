export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  seniority?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  apply: string; 
  salary: string;
  deadline: string;
  date: string;
  company?: string;
}

const allJobs: Job[] = [
  {
    id: "female-front-office-manager-idu-abuja-2026",
    title: "Female Front Office Manager",
    date: "2026-05-28",
    location: "Idu, Abuja",
    type: "Full-time",
    seniority: "Senior",
    salary: "₦250,000 – ₦300,000",
    deadline: "Not Specified",
    summary: "Experienced Front Office Manager to oversee daily operations, ensure excellent guest service, and manage the front desk team for a 155-room hotel in Idu, Abuja.",
    responsibilities: [
      "Oversee daily operations of the front desk and front office staff",
      "Ensure excellent customer service and resolve guest enquiries or complaints",
      "Handle special arrangements and personalized services for VIPs",
      "Manage front office budgets and maintain expense records",
      "Develop SOPs to guarantee consistent service quality",
      "Coordinate with housekeeping, F&B, security, and management teams",
      "Supervise daily processing of invoices, payments, and night audits",
      "Collaborate with marketing to maximize room occupancy and upselling"
    ],
    requirements: [
      "Diploma or first degree in hospitality management or equivalent",
      "Certifications in hospitality management or front office administration",
      "5–7 years of proven experience in front office operations",
      "Strong leadership, team-building, and motivation skills",
      "Excellent communication and high-level problem-solving skills",
      "Tact and professionalism in approach to staff-guest relationships"
    ],
    apply: 'Interested candidates should send their resume to <a href="mailto:hr@grandbezerng.com">hr@grandbezerng.com</a> using the job title as the subject of the email.'
  },
  {
    id: "technician-linesmate-lagos-2026",
    title: "Technician – Linesmate",
    date: "2026-05-28",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    summary: "Seeking a dedicated Technician – Linesmate to join the Operations & Services team, contributing to preventive maintenance of the distribution network and ensuring operational efficiency.",
    responsibilities: [
      "Execute operation & maintenance procedures in line with company policies",
      "Diagnose and resolve network faults in substations",
      "Calibrate, maintain, troubleshoot, and repair electrical instruments",
      "Collaborate with engineers to solve technical problems",
      "Conduct inspections for quality control and assurance programs",
      "Maintain transformer sub-station site tidiness and resolve issues",
      "Ensure compliance with QMS and OH&S requirements"
    ],
    requirements: [
      "SSCE/GCE/NECO/NABTEB with credits in five science subjects (inc. English & Math)",
      "Minimum of 3 years’ relevant experience",
      "Age: Not more than 35 years old",
      "Knowledge of substation planning and operation implementation",
      "Knowledge of High & Low Tension operation management"
    ],
    apply: 'Interested candidates should submit their CV via the link: <a href="https://forms.gle/ymFCvKznnQyCu7QU8">https://forms.gle/ymFCvKznnQyCu7QU8</a>'
  },
  {
    id: "personal-driver-ikoyi-200k-2026",
    title: "Personal Driver",
    date: "2026-05-28",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    salary: "₦200,000",
    deadline: "Not specified",
    summary: "Disciplined and professional Personal Driver needed for full-time employment in Ikoyi. Role requires early resumption and strict adherence to maintenance logs.",
    responsibilities: [
      "Safely transport employer to assigned destinations",
      "Conduct daily vehicle checks and upkeep logs",
      "Ensure the vehicle is always clean and properly maintained",
      "Maintain professional conduct and confidentiality",
      "Report maintenance concerns promptly"
    ],
    requirements: [
      "Minimum qualification: SSCE",
      "Minimum 3 years driving experience",
      "Must resume by 5:50 AM on working days",
      "Must provide 2 verifiable guarantors (MANDATORY)",
      "Proactive, patient, and level-headed while driving",
      "Ability to communicate in English and Pidgin"
    ],
    apply: 'Send CV via WhatsApp ONLY to <a href="https://wa.me/2347044760495">07044760495</a>. Subject: Personal Driver – Ikoyi. Include full name and current location.'
  },
  {
    id: "digital-marketer-symphony-prime-lekki-2026",
    title: "Digital Marketer",
    date: "2026-05-28",
    location: "Lekki Phase 1 & Environs, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "₦250,000 Net",
    deadline: "Not Specified",
    company: "Symphony Prime Limited",
    summary: "Experienced Digital Marketer to plan, execute, and optimize marketing campaigns that drive brand visibility, customer acquisition, and sales growth.",
    responsibilities: [
      "Plan and execute digital marketing campaigns",
      "Optimize campaigns for brand visibility and customer acquisition",
      "Analyze marketing metrics and performance",
      "Work closely with teams to achieve business sales goals"
    ],
    requirements: [
      "Minimum of 2 years experience in digital marketing",
      "Strong understanding of digital marketing strategies",
      "Ability to work closely with cross-functional teams"
    ],
    apply: 'Send your resume to: <a href="mailto:symphonyprimelimited@gmail.com">symphonyprimelimited@gmail.com</a>'
  },
  {
    id: "sales-business-development-executive-insurance-lekki-2026",
    title: "Sales / Business Development Executive",
    date: "2026-05-28",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Senior",
    salary: "Not Specified",
    deadline: "Not Specified",
    summary: "Experienced Sales Executive with a background in the insurance industry, focusing on underwriting, operations, and client relationship management.",
    responsibilities: [
      "Drive insurance product sales and meet revenue targets",
      "Manage and deepen client relationships",
      "Oversee underwriting and insurance operations",
      "Identify new business opportunities in the insurance sector"
    ],
    requirements: [
      "Minimum of 5 years’ experience in the insurance sector",
      "Strong knowledge of underwriting and operations",
      "Excellent communication and negotiation skills",
      "Bachelor’s degree in a related field"
    ],
    apply: 'Send CV to <a href="mailto:ukobasicynthia3@gmail.com">ukobasicynthia3@gmail.com</a> using the subject line "Sales / Business Development Executive".'
  },
  {
    id: "accountant-gbagada-ajah-reliable-electrics-2026",
    title: "Accountant",
    date: "2026-05-28",
    location: "Gbagada & Ajah, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Reliable Electrics",
    summary: "Detail-oriented Accountant to manage financial records, ensure regulatory compliance, and support the company's financial health.",
    responsibilities: [
      "Prepare and maintain accurate financial records and ledger entries",
      "Prepare monthly, quarterly, and annual financial statements (IFRS)",
      "Reconcile bank accounts and balance sheet accounts",
      "Assist in the preparation of budgets and forecasts",
      "Ensure timely filing of statutory returns (VAT, PAYE)",
      "Manage accounts payable and receivable"
    ],
    requirements: [
      "Minimum of 1–3 years’ experience in accounting",
      "Bachelor’s degree or HND in Accounting, Finance, or related field",
      "Strong knowledge of accounting principles and financial reporting",
      "Proficiency in accounting software and Microsoft Excel",
      "Professional certification (ICAN, ACCA) is an added advantage"
    ],
    apply: 'Interested candidates should send their CV with role as subject to <a href="mailto:hr.reliable.electrics@gmail.com">hr.reliable.electrics@gmail.com</a>'
  },
  {
    id: "internal-audit-officer-mainland-contract-2026",
    title: "Internal Audit Officer (Renewable Contract)",
    date: "2026-05-28",
    location: "Mainland, Lagos",
    type: "Contract",
    seniority: "Junior",
    salary: "₦198,000 Net Monthly",
    deadline: "Not Specified",
    summary: "Seeking an Internal Audit Officer on a renewable contract basis to support the audit function by ensuring compliance and contributing to process improvement.",
    responsibilities: [
      "Ensure compliance with internal controls and policies",
      "Verify adherence to regulatory requirements",
      "Contribute to process improvement and risk mitigation",
      "Support the general audit function"
    ],
    requirements: [
      "Minimum of BSc or HND in any discipline",
      "0–2 years of experience",
      "Strong communication and analytical skills",
      "High attention to detail and accountability"
    ],
    apply: 'Interested candidates should apply via the link: <a href="https://forms.gle/HphmVaE9DPTCdHmq9">https://forms.gle/HphmVaE9DPTCdHmq9</a>'
  },
  {
    id: "crm-administrator-maryland-lagos-2026",
    title: "CRM Administrator",
    date: "2026-05-28",
    location: "Maryland, Lagos",
    type: "Contract",
    seniority: "Mid-Level",
    salary: "₦150,000 – ₦250,000",
    deadline: "8th June, 2026",
    summary: "Highly organized CRM Administrator for a 6-month contract to join the Revenue Operations Team and manage system administration, workflows, and data integrity.",
    responsibilities: [
      "Provide system administration support for the CRM (permissions, custom objects, etc.)",
      "Create and manage complex workflow rules and approval processes",
      "Analyze data to provide insights into team effectiveness",
      "Coordinate integrations with third-party apps and plugins",
      "Support user adoption, training, and troubleshooting",
      "Maintain high data integrity and resolve anomalies"
    ],
    requirements: [
      "2+ years of CRM Administration experience (Salesforce, Microsoft Dynamics)",
      "Experience working directly with sales teams",
      "Ability to configure custom objects, workflows, and reports",
      "Interest in marketing strategy, SEO, and tech",
      "Salesforce certification is a plus"
    ],
    apply: 'Interested and qualified candidates should send CV to: <a href="mailto:hronyizconsult@gmail.com">hronyizconsult@gmail.com</a> using the Job Title as subject.'
  },
  {
    id: "budget-analyst-maryland-lagos-2026",
    title: "Budget Analyst",
    date: "2026-05-28",
    location: "Maryland, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "₦200,000 – ₦300,000",
    deadline: "1st June, 2026",
    summary: "Reliable Budget Analyst to assist in effective budget planning, expenditure oversight, and funding allocation through detailed data analysis.",
    responsibilities: [
      "Review budget proposals and funding requests",
      "Conduct cost/benefit and other analytical reviews",
      "Collaborate with managers to develop consolidated budgets",
      "Ensure budget adheres to legal regulations",
      "Forecast future budget needs and suggest profit improvements",
      "Prepare periodical and special reports"
    ],
    requirements: [
      "BSc / MSc Degree in Accounting, Finance, or Business",
      "Proven experience as a budget analyst",
      "Knowledge of data analysis and forecasting methods",
      "Excellent mathematical ability and analytical mind",
      "Proficient in MS Office and databases"
    ],
    apply: 'Interested and qualified candidates should send CV to: <a href="mailto:hronyizconsult@gmail.com">hronyizconsult@gmail.com</a> using the Job Title as subject.'
  },
  {
    id: "female-live-in-domestic-staff-lekki-ajah-90k-2026",
    title: "Female Live-in Domestic Staff",
    date: "2026-05-28",
    location: "Lekki-Ajah Axis, Lagos",
    type: "Full-time (Live-in)",
    seniority: "Junior",
    salary: "₦90,000",
    deadline: "Not Specified",
    summary: "Experienced live-in domestic staff needed for a client in Lekki-Ajah. Specifically seeking Benue, Crossriver, or Akwaibom indigenes.",
    responsibilities: [
      "Clean and arrange the house",
      "Professional cooking",
      "Take care of children",
      "Run errands outside the house"
    ],
    requirements: [
      "Age: 23 to 27 years",
      "Indigene of Benue, Crossriver, or Akwaibom ONLY",
      "Must have prior experience as a Domestic Staff",
      "Must provide two (2) verifiable guarantors with ID cards",
      "Available for monthly off-days (last weekend of every month)"
    ],
    apply: 'Apply via WhatsApp ONLY: <a href="https://wa.me/2348083295414">08083295414</a>'
  },
  {
    id: "sales-personnel-greatmindsng-lekki-2026",
    title: "Sales Personnel",
    date: "2026-05-28",
    location: "Lekki, Lagos",
    type: "Part-time (Weekend)",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "GreatmindsNG Digital Services",
    summary: "Sales Personnel needed for weekend shifts (Saturday & Sunday) in Lekki. Requires smart, target-driven graduates with strong numerical skills.",
    responsibilities: [
      "Drive sales and digital service adoption",
      "Maintain weekend operations and customer engagement",
      "Manage transactions and figures accurately"
    ],
    requirements: [
      "Must reside in Lekki",
      "Age: 20 – 27 years",
      "Graduate with a minimum of 2:1",
      "Excellent communication and multitasking skills",
      "Good with numbers and analytical tasks"
    ],
    apply: 'Send CV, WhatsApp/call number, and a recent picture to: <a href="mailto:greatmindsnga@gmail.com">greatmindsnga@gmail.com</a>'
  },
  {
    id: "customer-service-officer-teller-marina-gti-2026",
    title: "Customer Service Officer / Teller",
    date: "2026-05-28",
    location: "Marina, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "10th June, 2026",
    summary: "Professional Customer Service Officer / Teller to process transactions, balance cash drawers, and promote positive client relationships for a financial institution in Marina.",
    responsibilities: [
      "Process customer deposits, withdrawals, and cheque cashing",
      "Maintain and reconcile cash drawer daily",
      "Identify and escalate suspicious activities",
      "Promote bank products and services",
      "Maintain confidentiality of account information"
    ],
    requirements: [
      "Minimum of OND / HND / B.Sc in any related field",
      "Strong customer service and communication skills",
      "Attention to detail and accuracy in cash handling",
      "Prior experience in banking/microfinance is an advantage"
    ],
    apply: 'Send CV to <a href="mailto:career@gti.com.ng">career@gti.com.ng</a> (Subject: Customer Service Officer / Teller).'
  },
  {
    id: "graduate-trainee-program-telmek-energy-2026",
    title: "2026 Graduate Trainee Program",
    date: "2026-05-28",
    location: "Lagos",
    type: "Graduate Trainee",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "25th June 2026",
    company: "Telmek Energy Solutions Limited",
    summary: "Structured development initiative for Mechanical and Electrical Engineering graduates to gain hands-on experience in off-grid power and energy infrastructure.",
    responsibilities: [
      "Participate in off-grid power generation projects",
      "Support power distribution systems maintenance",
      "Assist in technical project execution",
      "Gain exposure to operational excellence in the power sector"
    ],
    requirements: [
      "Bachelor’s Degree in Mechanical or Electrical Engineering",
      "Minimum of Second Class Lower (2:2)",
      "Completed mandatory NYSC program",
      "Knowledge of CAD software/tools is an added advantage",
      "Strong analytical and communication skills"
    ],
    apply: 'Send CV to: <a href="mailto:careers@telmekglobal.com">careers@telmekglobal.com</a>'
  },
  {
    id: "factory-workers-production-assistants-valerie-paints-2026",
    title: "Factory Workers / Production Assistants",
    date: "2026-05-28",
    location: "Not Specified",
    type: "Full-time",
    seniority: "Junior",
    salary: "Competitive",
    deadline: "Not Specified",
    company: "Valerie Paints",
    summary: "Valerie Paints is recruiting hardworking individuals to support its paint production and factory operations.",
    responsibilities: [
      "Assist in the production and mixing of paints",
      "Support factory packaging and logistics",
      "Maintain a clean and safe work environment"
    ],
    requirements: [
      "Hardworking and dedicated",
      "Willingness to learn and grow in a manufacturing setting",
      "Must be physically fit"
    ],
    apply: 'Send CV and application to: <a href="mailto:careers@valeriepaints.com">careers@valeriepaints.com</a>'
  },
  {
    id: "marketing-sales-executive-valerie-paints-2026",
    title: "Marketing / Sales Executive",
    date: "2026-05-28",
    location: "Not Specified",
    type: "Full-time",
    seniority: "Junior",
    salary: "Competitive",
    deadline: "Not Specified",
    company: "Valerie Paints",
    summary: "Valerie Paints is seeking passionate sales professionals to join its expanding team and drive market growth.",
    responsibilities: [
      "Identify and approach potential clients",
      "Achieve monthly sales targets",
      "Maintain strong customer relationships"
    ],
    requirements: [
      "Driven and dedicated mindset",
      "Good communication and persuasive skills",
      "Ready to grow in a supportive work environment"
    ],
    apply: 'Send CV and application to: <a href="mailto:careers@valeriepaints.com">careers@valeriepaints.com</a>'
  },
  {
    id: "cjid-environmental-journalism-fellowship-2026",
    title: "Environmental Journalism Storytelling Fellowship",
    date: "2026-05-28",
    location: "Remote / Multiple",
    type: "Fellowship",
    seniority: "Junior",
    salary: "Stipend Provided",
    deadline: "8 June 2026",
    company: "Centre for Journalism Innovation and Development (CJID)",
    summary: "A six-month fellowship in partnership with UNESCO GMDF to strengthen investigative reporting on violence against environmental reporters.",
    responsibilities: [
      "Conduct investigative reporting on violence against environmental reporters",
      "Produce and publish stories in line with international standards",
      "Participate in capacity-building workshops and dissemination activities"
    ],
    requirements: [
      "Practicing environmental journalists",
      "Passion for investigative storytelling",
      "Commitment to the six-month fellowship duration"
    ],
    apply: 'Apply here: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSdYbh7jxSDpqjqLLire-pL-AkvAbPw_fXEMzssdouBDZasQ/viewform">Fellowship Application Form</a>'
  },
  {
    id: "area-sales-manager-pharma-abuja-ibadan-2026",
    title: "Area Sales Manager (Medical)",
    date: "2026-05-28",
    location: "Abuja & Ibadan",
    type: "Full-time",
    seniority: "Senior",
    salary: "Competitive + Incentives",
    deadline: "Not Specified",
    company: "A reputable pharmaceutical company",
    summary: "Result-driven Area Sales Manager to drive sales growth, manage medical sales reps, and build relationships with healthcare professionals in Abuja and Ibadan.",
    responsibilities: [
      "Drive sales growth and achieve business targets within assigned territory",
      "Manage, supervise, and motivate Medical Sales Representatives",
      "Develop and implement strategic sales plans",
      "Build strong relationships with hospitals, pharmacies, and distributors",
      "Monitor market trends and competitor activities",
      "Prepare periodic sales performance analysis"
    ],
    requirements: [
      "Bachelor’s degree in Pharmacy, Life Science, or related field (MBA is a plus)",
      "Minimum 5–7 years’ experience in the pharmaceutical industry (MANDATORY)",
      "Previous experience as an Area Sales Manager or in a supervisory role",
      "Strong leadership, negotiation, and relationship management abilities",
      "Good knowledge of pharmaceutical sales operations"
    ],
    apply: 'Send CV to <a href="mailto:hr@pharmaethics.com">hr@pharmaethics.com</a> using "Area Sales Manager – Abuja" or "Area Sales Manager – Ibadan" as the subject.'
  },
  {
    id: "senior-manager-operations-renewable-energy-2026",
    title: "Senior Manager, Operations",
    date: "2026-05-26",
    location: "Marwa, Lekki Phase 1, Lagos",
    type: "Full-Time",
    seniority: "Senior",
    salary: "₦500,000 Monthly",
    deadline: "Not Specified",
    company: "A leading renewable energy and power company",
    summary: "Experienced Senior Manager, Operations to oversee and optimize operational activities, drive efficiency, and support business growth within a renewable energy and power company.",
    responsibilities: [
      "Lead and manage daily operational activities across the organization",
      "Develop and implement strategies to improve efficiency and productivity",
      "Monitor project execution, resource allocation, and operational performance",
      "Ensure compliance with industry regulations, safety standards, and company policies",
      "Manage budgets, operational risks, and performance metrics",
      "Collaborate with cross-functional teams to achieve business objectives"
    ],
    requirements: [
      "Bachelor’s degree in operations management, Engineering, Business Administration, or a related field",
      "Minimum of 6 years’ relevant experience, preferably within the renewable energy, power, engineering, or related sectors",
      "Strong leadership and team management skills",
      "Proven experience in process improvement and operational planning",
      "Excellent analytical, problem-solving, and communication skills"
    ],
    apply: 'Interested and qualified candidates should send their CVs to <a href="https://forms.gle/SKXapJa8X45LN9Fd6">https://forms.gle/SKXapJa8X45LN9Fd6</a>'
  },
  {
    id: "team-lead-corporate-finance-ikoyi-2026",
    title: "Team Lead, Corporate Finance",
    date: "2026-05-26",
    location: "Ikoyi, Lagos",
    type: "Full-Time",
    seniority: "Senior",
    salary: "₦1,800,000 – ₦2,500,000 Gross Monthly + 13th Month",
    deadline: "Not Specified",
    company: "A leading financial services and advisory firm",
    summary: "Highly experienced professional to lead its Corporate Finance & Advisory team and drive transaction execution, client acquisition, and revenue growth.",
    responsibilities: [
      "Develop and maintain strong relationships with corporates, institutional investors, regulators, and key market stakeholders",
      "Identify opportunities for mergers & acquisitions, capital raising, restructuring, project finance, and transaction advisory services",
      "Lead proposal development, client pitches, and transaction negotiations",
      "Drive profitability and revenue targets for the Corporate Finance & Advisory business",
      "Provide strategic financial advisory support to clients across various sectors",
      "Lead and mentor high-performing finance and advisory teams"
    ],
    requirements: [
      "7–10 years’ relevant experience in Corporate Finance, Transaction Advisory, or Financial Advisory",
      "Bachelor’s degree in Finance, Accounting, Economics, Business Administration, or related discipline",
      "MBA or relevant postgraduate qualification is an advantage",
      "Professional certifications such as ACA, ACCA, CFA, or CIS are required",
      "Strong deal execution, financial modelling, and stakeholder management skills",
      "Excellent presentation, negotiation, and business development abilities"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:ifeoluwa.recruit1@gmail.com">ifeoluwa.recruit1@gmail.com</a> Subject of the email: Team Lead, Corporate Finance'
  },
  {
    id: "sales-officer-seedforce-lagos-2026",
    title: "Sales Officer",
    date: "2026-05-26",
    location: "Ayobo, Egbeda, Iyana Iba, Mushin, Oshodi, Ikeja, Yaba, Sabo, Tejuosho, Oyingbo, Bariga, Benson, Agege, Berger, Agbado, Sango, Ifo, Ibafo, Mowe, Ogijo, Ajah, Sangotedo, Eleko, Festac, Alaba, Agbara, Iyana Iyesi, Ijegun, Ilepo, Agric, Mile 12. (Deployment to the nearest bank branch)",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦120,000 net + unlimited commission, HMO, transport support, and other incentives.",
    deadline: "Not Specified",
    company: "SeedForce",
    summary: "Seeking proactive and target-driven individuals passionate about community engagement, financial inclusion, and field operations to join the SeedForce team in Lagos.",
    responsibilities: [
      "Drive financial inclusion in local communities",
      "Onboard clients into informal savings systems (Ajo/Esusu)",
      "Achieve field sales targets and manage collections"
    ],
    requirements: [
      "Experience in field operations, microfinance, cooperative systems, or related roles",
      "Strong understanding of informal savings systems like Ajo/Esusu"
    ],
    apply: 'Apply here: <a href="https://forms.gle/SdtZitnqZxRiY5Zq5">https://forms.gle/SdtZitnqZxRiY5Zq5</a>'
  },
  {
    id: "male-factory-workers-beverage-isolo-2026",
    title: "Male Factory Workers",
    date: "2026-05-26",
    location: "Isolo, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦65,000 – ₦70,000 Gross Monthly Salary + Allowances",
    deadline: "Not Specified",
    company: "A reputable beverage company",
    summary: "Urgently recruiting Male Factory Workers to support its production and distribution operations in Isolo, Lagos.",
    responsibilities: [
      "Empty and replace bottles during production",
      "Pack finished products for distribution",
      "Move and organize products within the factory",
      "Load and offload goods for delivery",
      "Restock products as required",
      "Maintain cleanliness and comply with safety regulations",
      "Support other factory operations as assigned"
    ],
    requirements: [
      "No educational qualification required",
      "Must be physically fit and strong",
      "Ability to lift and move heavy products",
      "Willingness to work shifts, including night shifts and overtime",
      "Hardworking, disciplined, and reliable",
      "Must reside in Isolo or nearby areas (very important)"
    ],
    apply: 'Send CV to: <a href="mailto:secomltd1@gmail.com">secomltd1@gmail.com</a> Or WhatsApp: <a href="https://wa.me/2348080635669">08080635669</a> Use “Factory Worker” as the subject of your application.'
  },
  {
    id: "female-live-in-domestic-staff-ikoyi-vi-2026",
    title: "Female Live-in Domestic Staff",
    date: "2026-05-26",
    location: "Ikoyi/VI Axis, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦80,000",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Seeking a female live-in domestic staff for a client in Ikoyi/VI, responsible for cleaning, childcare, cooking, and errands. Must not be Yoruba or Hausa.",
    responsibilities: [
      "Cleaning the house, arranging and washing clothes",
      "Taking care of her child",
      "Cooking (must know how to cook very well)",
      "Running errands for the Client when needed"
    ],
    requirements: [
      "Age range is between 20 and 23",
      "NO YORUBA. NO HAUSA.",
      "Must know how to cook very well",
      "Must love children",
      "Not rude and lazy"
    ],
    apply: 'Whatsapp ONLY <a href="https://wa.me/2348083295414">08083295414</a>'
  },
  {
    id: "service-quality-officer-sqi-audit-control-2026",
    title: "Service Quality Officer (SQI)",
    date: "2026-05-26",
    location: "Not Specified",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "VDT Communications",
    summary: "Seeking a competent and results-driven Service Quality Officer (SQI) to join our Audit & Control team, driving service excellence, process improvement, and compliance.",
    responsibilities: [
      "Develop and implement strategies for continuous process improvement",
      "Ensure alignment of operational processes with organizational goals and business scorecard objectives",
      "Monitor and enforce compliance with Operational Level Agreements (OLAs) across departments",
      "Establish, implement, and maintain the Service Quality Management System across the organization",
      "Plan and coordinate periodic audits of service quality systems and processes"
    ],
    requirements: [
      "Bachelor’s Degree or HND in a relevant field",
      "Relevant professional certifications such as CCNA, ITIL, SQA, Six Sigma, or other quality assurance/control certifications",
      "Additional certifications such as ISO 9001 Lead Auditor, ISO 20000-1:2018 Lead Implementer, or ISO 27001 Lead Implementer will be an added advantage",
      "Minimum of 3 years’ experience in Banking, FMCG, Telecommunications, or Technology Consulting within a large organization",
      "Proven experience in governance structures, audit processes, IT quality frameworks, and quality assurance/control",
      "At least 2 years of supervisory or team management experience",
      "Strong analytical and problem-solving skills",
      "Effective leadership and team management abilities",
      "Sound knowledge of quality improvement methodologies",
      "Excellent communication and interpersonal skills",
      "Strong data analysis, interpretation, and reporting skills",
      "High attention to detail with a process-driven mindset"
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:recruitment@vdtcomms.com">recruitment@vdtcomms.com</a> Using “Service Quality Officer (SQI)” as the subject of the email'
  },
  {
    id: "executive-driver-surulere-2026",
    title: "Executive driver",
    date: "2026-05-26",
    location: "Surulere, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "₦100,000 - ₦110,000",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Seeking a reliable executive driver for a role in Surulere, Lagos, responsible for safe and efficient transportation, vehicle maintenance, and excellent customer service.",
    responsibilities: [
      "Drive safely and efficiently",
      "Pick up and drop off passengers",
      "Maintain vehicle cleanliness",
      "Provide excellent customer service"
    ],
    requirements: [
      "Valid driver’s license",
      "Proven driving experience (school experience a plus)",
      "Good communication skills",
      "Familiarity with road signs and network"
    ],
    apply: 'To apply send CV to <a href="mailto:recruitmentwithjoy@gmail.com">recruitmentwithjoy@gmail.com</a>'
  },
  {
    id: "nysc-intern-operations-export-logistics-sagamu-2026",
    title: "NYSC Intern (Operations & Export Logistics Support)",
    date: "2026-05-26",
    location: "Sagamu, Ogun State (8km from Redemption Camp)",
    type: "Internship",
    seniority: "Junior",
    salary: "₦70,000",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Seeking a serving NYSC Corps Member to support operations, export logistics, and finance functions within an agribusiness and commodity trading environment at our Sagamu warehouse.",
    responsibilities: [
      "Verification of supplier invoices, particularly bank account details to ensure accuracy and compliance",
      "Maintaining accurate records of payments, bank details, KYC documents, and other regulatory registrations of suppliers",
      "Tracking and monitoring operational expenses related to sourcing, processing, and logistics activities",
      "Preparation of container-wise Certificates of Quality for export shipments",
      "Preparation of packing lists and verification of VGM (Verified Gross Mass) weights for shipments in line with export requirements",
      "Tracking of stuffed containers to port, including monitoring of container seals and shipment movement",
      "Supporting day-to-day warehouse, logistics, and export documentation activities as assigned"
    ],
    requirements: [
      "Must be a serving NYSC Corps Member",
      "Must have at least 8 months left",
      "HND / B.Sc. in Accounting, Finance, Business Administration, Economics, Supply Chain Management, Logistics, Agricultural Economics, or any related field",
      "Strong attention to detail and accuracy, especially in documentation and financial records",
      "Basic knowledge of Microsoft Office tools (Excel, Word)",
      "Good organizational and record-keeping skills",
      "Willingness to learn and adapt in a fast-paced, operations-driven environment",
      "Good communication and interpersonal skills"
    ],
    apply: 'Qualified candidates should send their CV to <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> using NYSC-17 as the subject'
  },
  {
    id: "data-mining-email-marketing-intern-remote-2026",
    title: "Data Mining & Email Marketing Intern",
    date: "2026-05-26",
    location: "Remote",
    type: "Internship",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "The GAO Group, USA & Canada",
    summary: "Seeking a motivated Data Mining & Email Marketing Intern to gain hands-on experience in digital marketing with a focus on data mining, database management, audience segmentation, and performance analysis.",
    responsibilities: [
      "Conduct data mining and extraction from various sources to build and maintain high-quality email databases",
      "Clean, validate, and organize large datasets to ensure accuracy and usability",
      "Assist in segmenting audiences based on behavior, demographics, and engagement patterns",
      "Support the planning and execution of data-driven email campaigns",
      "Analyze campaign data (open rates, click-through rates, conversions) to identify trends and insights",
      "Perform A/B testing using data insights to optimize campaign performance",
      "Generate reports and dashboards to present findings and recommendations",
      "Collaborate with the HR team to align data strategies with business goals"
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in any field",
      "Basic knowledge of data mining, data analysis, or database management",
      "Familiarity with tools such as Excel, Google Sheets, or basic SQL (preferred)",
      "Strong analytical and problem-solving skills",
      "Good written and verbal communication skills",
      "Detail-oriented with strong organizational abilities",
      "Interest in data-driven marketing and digital analytics"
    ],
    apply: 'Send your resume to <a href="mailto:nkechipeter08@gmail.com">nkechipeter08@gmail.com</a> Subject: Data Mining and Email Marketing Internship'
  },
  {
    id: "driver-ikoyi-lagos-2026",
    title: "Driver",
    date: "2026-05-26",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "₦150,000",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Urgently seeking a reliable and experienced driver for a role based in Ikoyi, Lagos. Proximity to Ikoyi is very important.",
    responsibilities: [
      "Drive safely and efficiently",
      "Maintain vehicle cleanliness and perform basic checks",
      "Follow road safety rules and traffic regulations",
      "Provide timely transportation services"
    ],
    requirements: [
      "Proximity to Ikoyi is very important",
      "Must have a valid driver’s license",
      "Good knowledge of Lagos roads",
      "Must be able to communicate clearly in English",
      "Minimum of 3 years experience",
      "Must be able to provide guarantors and can start immediately"
    ],
    apply: "Not Specified (Referral based)"
  },
  {
    id: "cashier-bao-bao-house-lekki-2026",
    title: "Cashier",
    date: "2026-05-26",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦150,000/month",
    deadline: "Not Specified",
    company: "Bao Bao House",
    summary: "Seeking a friendly, reliable Cashier to join Bao Bao House in Lekki Phase 1, Lagos, responsible for customer orders, payments, and delivery coordination.",
    responsibilities: [
      "Take customer orders and process payments",
      "Manage WhatsApp, Glovo, and Chowdeck orders",
      "Pack orders and coordinate deliveries",
      "Handle customer inquiries professionally",
      "Reconcile daily transactions"
    ],
    requirements: [
      "Cashier or customer service experience preferred",
      "Good communication skills",
      "Familiarity with POS systems and digital payments",
      "Honest, organized, and detail-oriented"
    ],
    apply: 'Interested candidates should send their CVs <a href="https://forms.gle/Se1ptQaM1x4UdfKb9">https://forms.gle/Se1ptQaM1x4UdfKb9</a>'
  },
  {
    id: "supermarket-cashier-ikorodu-2026",
    title: "Cashier (Supermarket)",
    date: "2026-05-26",
    location: "Ikorodu, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦70,000 + Accommodation",
    deadline: "Not Specified",
    company: "A fast-growing supermarket",
    summary: "A fast-growing supermarket in Ikorodu is recruiting experienced and reliable Cashiers to support its operations.",
    responsibilities: [
      "Handle cash and card transactions accurately",
      "Provide good customer service",
      "Maintain cleanliness and organization at the till area"
    ],
    requirements: [
      "Prior cashier experience",
      "Accuracy in handling transactions",
      "Good customer service skills",
      "Must have relevant work experience in a supermarket or retail environment",
      "Must be responsible, trustworthy, and hardworking",
      "Ability to work in a fast-paced environment",
      "Good communication and interpersonal skills"
    ],
    apply: 'Interested and qualified candidates should apply below <a href="https://lnkd.in/gmiSs9Zm">https://lnkd.in/gmiSs9Zm</a>'
  },
  {
    id: "supermarket-floor-attendant-ikorodu-2026",
    title: "Floor Attendant (Supermarket)",
    date: "2026-05-26",
    location: "Ikorodu, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦80,000 + Accommodation",
    deadline: "Not Specified",
    company: "A fast-growing supermarket",
    summary: "A fast-growing supermarket in Ikorodu is recruiting an experienced and reliable Floor Attendant to maintain store cleanliness and organization.",
    responsibilities: [
      "Maintain cleanliness and orderliness of the supermarket floor",
      "Assist customers with product location",
      "Ensure shelves are well-stocked and tidy"
    ],
    requirements: [
      "Experience in cleaning",
      "Must have relevant work experience in a supermarket or retail environment",
      "Must be responsible, trustworthy, and hardworking",
      "Ability to work in a fast-paced environment",
      "Good communication and interpersonal skills"
    ],
    apply: 'Interested and qualified candidates should apply below <a href="https://lnkd.in/gmiSs9Zm">https://lnkd.in/gmiSs9Zm</a>'
  },
  {
    id: "supermarket-cleaner-ikorodu-2026",
    title: "Cleaner (Supermarket)",
    date: "2026-05-26",
    location: "Ikorodu, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦80,000 + Accommodation",
    deadline: "Not Specified",
    company: "A fast-growing supermarket",
    summary: "A fast-growing supermarket in Ikorodu is recruiting an experienced and reliable Cleaner to maintain hygiene standards.",
    responsibilities: [
      "Perform general cleaning duties within the supermarket premises",
      "Ensure all areas are tidy and hygienic",
      "Manage cleaning supplies efficiently"
    ],
    requirements: [
      "Experience in cleaning",
      "Must have relevant work experience in a supermarket or retail environment",
      "Must be responsible, trustworthy, and hardworking",
      "Ability to work in a fast-paced environment",
      "Good communication and interpersonal skills"
    ],
    apply: 'Interested and qualified candidates should apply below <a href="https://lnkd.in/gmiSs9Zm">https://lnkd.in/gmiSs9Zm</a>'
  },
  {
    id: "accountant-renewable-energy-lekki-2026",
    title: "Accountant (ICAN/ACCA Chartered)",
    date: "2026-05-26",
    location: "Marwa, Lekki Phase 1, Lagos",
    type: "Full-Time",
    seniority: "Mid-Level",
    salary: "₦400,000 Monthly",
    deadline: "Not Specified",
    company: "Renewable Energy / Power",
    summary: "Seeking a qualified and experienced Chartered Accountant to join a growing renewable energy/Power company, overseeing financial activities, reporting, and compliance.",
    responsibilities: [
      "Prepare and analyze financial reports",
      "Manage accounts payable, receivable, and reconciliations",
      "Oversee tax filings and statutory remittances",
      "Monitor budgets, cash flow, and financial performance",
      "Ensure compliance with accounting standards and regulatory requirements",
      "Support audits and provide financial insights to management"
    ],
    requirements: [
      "Bachelor’s degree in accounting, Finance, or a related field",
      "Must be a Chartered Accountant (ICAN, ACA, or ACCA)",
      "Minimum of 4 years’ accounting experience",
      "Strong knowledge of financial reporting, taxation, budgeting, and compliance",
      "Proficiency in accounting software and Microsoft Excel",
      "Excellent analytical and problem-solving skills"
    ],
    apply: 'Interested and qualified candidates should apply below <a href="https://lnkd.in/ezRQQjGR">https://lnkd.in/ezRQQjGR</a>'
  },
  {
    id: "cost-inventory-officer-surulere-2026",
    title: "Cost/Inventory Officer",
    date: "2026-05-26",
    location: "Surulere, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦170,000-200,000",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Seeking a Cost/Inventory Officer to monitor and manage inventory levels, maintain accurate records, and prepare reports for management review.",
    responsibilities: [
      "Monitor and manage inventory levels across the campus",
      "Maintain accurate records of stock movement (inflow and outflow)",
      "Work closely with procurement and accounts teams on stock-related matters",
      "Prepare inventory and cost reports for management review",
      "Identify and report variances, wastage, or inefficiencies",
      "Ensure compliance with internal control procedures",
      "Other duties as assigned"
    ],
    requirements: [
      "B.Sc or HND in Accounting, Finance, or a related field",
      "Minimum of 1-2 years experience in inventory or cost management accounting",
      "Strong analytical and numerical skills",
      "Proficiency in Microsoft Office (especially Excel)",
      "Knowledge of accounting or inventory management systems (e.g., Xero ERP) is an added advantage",
      "Good communication and teamwork skills"
    ],
    apply: 'Interested candidates should click on the link below to apply: <a href="https://forms.gle/M9ei8BWnH2FhHd5FA">https://forms.gle/M9ei8BWnH2FhHd5FA</a>'
  },
  {
    id: "primary-school-english-teacher-surulere-2026",
    title: "Primary School English Teacher",
    date: "2026-05-26",
    location: "Surulere, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "A leading Nigerian school",
    summary: "A leading Nigerian school offering a blended Nigerian and Cambridge curriculum is seeking an exceptional Primary School English Teacher.",
    responsibilities: [
      "Design and deliver engaging daily lesson plans aligned with national, local, and school English language standards",
      "Teach core English skills, including reading, writing, speaking, listening, grammar, phonics, comprehension, and vocabulary development",
      "Enrich classroom learning with interactive activities such as storytelling, debates, role play, guided reading, and creative writing exercises",
      "Use a variety of instructional methods such as discussions, direct instruction, group work, and independent practice",
      "Differentiate instruction to meet the diverse learning needs, abilities, and interests of pupils",
      "Assess student performance through observations, written assignments, oral presentations, projects, and standardized assessments"
    ],
    requirements: [
      "Bachelor’s degree in English, English Education, or a related field",
      "Valid teaching certification",
      "Knowledge and experience with the British Curriculum",
      "Proficiency in the use of interactive/smart boards and digital learning tools"
    ],
    apply: 'Interested candidates should click on the link below to apply: <a href="https://forms.gle/757FWH4FP7VKDsPH8">https://forms.gle/757FWH4FP7VKDsPH8</a>'
  },
  {
    id: "primary-school-mathematics-teacher-surulere-2026",
    title: "Primary School Mathematics Teacher",
    date: "2026-05-26",
    location: "Surulere, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "A leading Nigerian school",
    summary: "A leading Nigerian school offering a blended Nigerian and Cambridge curriculum is seeking an exceptional Primary School Mathematics Teacher.",
    responsibilities: [
      "Understanding curriculum requirements and creating lesson plans and educational content that satisfy these requirements",
      "Develop age-appropriate lesson plans and instructional materials that support foundational numeracy skills",
      "Use interactive and creative teaching methods to foster interest in Mathematics",
      "Prepare pupils for internal and external assessments, including checkpoint exams and Mathematics competitions where applicable",
      "Maintain a positive, inclusive, and well-managed classroom environment"
    ],
    requirements: [
      "Bachelor’s degree in Mathematics, Education, or a related discipline",
      "A recognized teaching qualification (e.g., PGDE, PGCE, or equivalent)",
      "Strong understanding of international curricula (e.g., British Curriculum, Cambridge Primary)",
      "Excellent classroom management and communication skills",
      "Patience, creativity, and a passion for working with young learners",
      "TRCN certification is an added advantage"
    ],
    apply: 'Interested candidates should click on the link below to apply: <a href="https://forms.gle/757FWH4FP7VKDsPH8">https://forms.gle/757FWH4FP7VKDsPH8</a>'
  },
  {
    id: "secondary-school-civic-education-teacher-surulere-2026",
    title: "Secondary School Civic Education Teacher",
    date: "2026-05-26",
    location: "Surulere, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "A leading Nigerian school",
    summary: "A leading Nigerian school offering a blended Nigerian and Cambridge curriculum is seeking an exceptional Secondary School Civic Education Teacher.",
    responsibilities: [
      "Plan and deliver Civic Education lessons in line with curriculum standards",
      "Promote civic responsibility, values, and national awareness among students",
      "Assess students’ progress and provide constructive feedback",
      "Adapt teaching methods to suit diverse learning needs",
      "Prepare students for WAEC examinations and internal assessments",
      "Maintain effective classroom management and discipline"
    ],
    requirements: [
      "Degree in Political Science, Civic Education, or a related field",
      "Relevant teaching certification may be required",
      "Strong communication and classroom management skills",
      "Ability to engage and motivate students",
      "TRCN certification is an added advantage"
    ],
    apply: 'Interested candidates should click on the link below to apply: <a href="https://forms.gle/757FWH4FP7VKDsPH8">https://forms.gle/757FWH4FP7VKDsPH8</a>'
  },
  {
    id: "experienced-marketer-ogba-ikeja-lagos-2026",
    title: "Experienced Marketer",
    date: "2026-05-26",
    location: "Ogba, Ikeja, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Seeking a smart, result-driven, and experienced Marketer to join a growing team, focusing on sales, lead generation, customer relationships, and business growth.",
    responsibilities: [
      "Drive sales and marketing efforts",
      "Generate leads and build customer relationships",
      "Drive business growth and achieve targets"
    ],
    requirements: [
      "Minimum of 2–3 years marketing experience",
      "Strong communication and negotiation skills",
      "Experience in sales, digital marketing, or customer acquisition is an advantage",
      "Ability to meet sales targets and work independently"
    ],
    apply: 'Send your CV to: <a href="mailto:infor.uninetworktech@gmail.com">infor.uninetworktech@gmail.com</a> or <a href="tel:+2349121311594">+234 912 131 1594</a>'
  },
  {
    id: "data-analyst-ikeja-lagos-2026",
    title: "Data Analyst",
    date: "2026-05-26",
    location: "Ikeja, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Seeking a smart and detail-oriented Data Analyst skilled in Excel, Power BI/Tableau, SQL, and capable of translating data into actionable business insights.",
    responsibilities: [
      "Analyze data to find insights driving real decisions",
      "Build and maintain dashboards tracking key performance indicators",
      "Translate complex data into clear, concise recommendations"
    ],
    requirements: [
      "Minimum of 3 years experience",
      "Experience in e-commerce/startup environment is an advantage",
      "Strong analytical and reporting skills required",
      "Skilled in Excel, Power BI/Tableau, SQL"
    ],
    apply: 'Send your CV, cover letter & portfolio to: <a href="mailto:hr@msc.store">hr@msc.store</a>'
  },
  {
    id: "electrical-electronics-engineer-oil-gas-phc-lagos-2026",
    title: "Electrical/Electronics Engineer",
    date: "2026-05-26",
    location: "Port Harcourt (PHC), Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Chesroc",
    summary: "Seeking a qualified and experienced Electrical/Electronics Engineer for Oil & Gas Operations, with strong knowledge of plant operations, maintenance, and troubleshooting.",
    responsibilities: [
      "Support plant operations, maintenance, and troubleshooting related to electrical/electronics systems",
      "Ensure compliance with HSE standards and operational procedures",
      "Work effectively in a team environment and under pressure",
      "Provide excellent communication and reporting"
    ],
    requirements: [
      "Minimum of 3–5 years’ experience in Oil & Gas Operations",
      "Strong knowledge of plant operations, maintenance, and troubleshooting",
      "Experience working in upstream, midstream, or downstream operations is an added advantage",
      "Good understanding of HSE standards and operational procedures",
      "Ability to work effectively in a team environment and under pressure",
      "Excellent communication and reporting skills",
      "Bachelor’s Degree or HND in Electrical/Electronics Engineering",
      "Relevant professional certifications will be an added advantage"
    ],
    apply: 'Qualified candidates should send their CV to: <a href="mailto:hr@chesroc.com">hr@chesroc.com</a>'
  },
  {
    id: "mechanical-engineer-oil-gas-phc-lagos-2026",
    title: "Mechanical Engineer",
    date: "2026-05-26",
    location: "Port Harcourt (PHC), Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Chesroc",
    summary: "Seeking a qualified and experienced Mechanical Engineer for Oil & Gas Operations, with strong knowledge of plant operations, maintenance, and troubleshooting.",
    responsibilities: [
      "Support plant operations, maintenance, and troubleshooting related to mechanical systems",
      "Ensure compliance with HSE standards and operational procedures",
      "Work effectively in a team environment and under pressure",
      "Provide excellent communication and reporting"
    ],
    requirements: [
      "Minimum of 3–5 years’ experience in Oil & Gas Operations",
      "Strong knowledge of plant operations, maintenance, and troubleshooting",
      "Experience working in upstream, midstream, or downstream operations is an added advantage",
      "Good understanding of HSE standards and operational procedures",
      "Ability to work effectively in a team environment and under pressure",
      "Excellent communication and reporting skills",
      "Bachelor’s Degree or HND in Mechanical Engineering",
      "Relevant professional certifications will be an added advantage"
    ],
    apply: 'Qualified candidates should send their CV to: <a href="mailto:hr@chesroc.com">hr@chesroc.com</a>'
  },
  {
    id: "instrumentation-engineer-oil-gas-phc-lagos-2026",
    title: "Instrumentation Engineer",
    date: "2026-05-26",
    location: "Port Harcourt (PHC), Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Chesroc",
    summary: "Seeking a qualified and experienced Instrumentation Engineer for Oil & Gas Operations, with strong knowledge of plant operations, maintenance, and troubleshooting.",
    responsibilities: [
      "Support plant operations, maintenance, and troubleshooting related to instrumentation systems",
      "Ensure compliance with HSE standards and operational procedures",
      "Work effectively in a team environment and under pressure",
      "Provide excellent communication and reporting"
    ],
    requirements: [
      "Minimum of 3–5 years’ experience in Oil & Gas Operations",
      "Strong knowledge of plant operations, maintenance, and troubleshooting",
      "Experience working in upstream, midstream, or downstream operations is an added advantage",
      "Good understanding of HSE standards and operational procedures",
      "Ability to work effectively in a team environment and under pressure",
      "Excellent communication and reporting skills",
      "Bachelor’s Degree or HND in Instrumentation Engineering",
      "Relevant professional certifications will be an added advantage"
    ],
    apply: 'Qualified candidates should send their CV to: <a href="mailto:hr@chesroc.com">hr@chesroc.com</a>'
  },
  {
    id: "financial-controller-lekki-lagos-2026",
    title: "Financial Controller",
    date: "2026-05-26",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Senior",
    salary: "Competitive salary and performance-based incentives",
    deadline: "Not Specified",
    company: "Cynosure Engineering",
    summary: "Seeking a highly analytical and experienced Financial Controller to oversee all financial activities, including budgeting, forecasting, reporting, and cross-border compliance.",
    responsibilities: [
      "Oversee the preparation of financial reports, budgets, and forecasts",
      "Ensure timely and accurate monthly, quarterly, and annual financial reporting",
      "Monitor internal controls and ensure compliance with financial regulations and policies",
      "Manage cash flow, financial planning, and risk management processes across border",
      "Coordinate audits and liaise with external auditors and regulatory bodies",
      "Lead and develop the finance team to drive performance and efficiency",
      "Provide strategic financial insights to support business decisions"
    ],
    requirements: [
      "Minimum of 7 years of experience in accounting or financial management, with at least 3 years in a senior finance role",
      "Strong understanding of accounting principles, IFRS, and Nigerian and foreign tax regulations",
      "Excellent leadership, communication, and analytical skills",
      "Proficiency in accounting software and Microsoft Excel",
      "Bachelor’s degree in Accounting, Finance, or a related field (ICAN/ACCA certification preferred)"
    ],
    apply: 'Send your resume and a brief cover letter to <a href="mailto:hr@cynosureng.com">hr@cynosureng.com</a>'
  },
  {
    id: "video-editor-content-creator-abuja-2026",
    title: "Video Editor / Video Content Creator",
    date: "2026-05-26",
    location: "Abuja (FCT)",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "₦200,000-300,000 monthly",
    deadline: "Not Specified",
    company: "A new private university",
    summary: "Seeking a creative, technically skilled, and story-driven Video Editor / Video Content Creator to join the founding team of a new private university in Abuja, shaping its visual storytelling.",
    responsibilities: [
      "Conceptualise, shoot, and edit engaging video content for student recruitment, academic marketing, event coverage, campus virtual tours, and social media",
      "Create motion graphics, lower thirds, titles, and basic animations",
      "Record and edit audio (voiceovers, interviews, ambient sound)",
      "Collaborate with Marketing and Academic Affairs teams to develop video scripts and storyboards",
      "Plan shoots: location scouting, lighting setup, camera operation, talent direction",
      "Maintain a content calendar aligned with admission cycles, academic events, and fundraising campaigns",
      "Optimise videos for different platforms (aspect ratios, compression, subtitles)",
      "Organise and maintain a digital video asset library",
      "Ensure all content complies with copyright laws and university branding guidelines",
      "Operate cameras or vision mixers during live events for recording or live streaming",
      "Set up and troubleshoot basic audio-visual equipment for on campus events",
      "Manage video equipment inventory and recommend new purchases",
      "Liaise with external video production vendors when additional capacity is needed"
    ],
    requirements: [
      "Bachelor’s degree or HND in Film Production, Multimedia, Mass Communication, Digital Media, or a closely related field",
      "Minimum of 2–5 years of professional video editing and content creation experience in a corporate, agency, media house, or institutional setting",
      "A strong portfolio/demo reel demonstrating narrative storytelling, technical editing skills, colour grading, audio mixing, motion graphics, and basic animation",
      "Proven proficiency in industry-standard software: Adobe Premiere Pro, After Effects, Audition, and Media Encoder (DaVinci Resolve or Final Cut Pro acceptable)",
      "Experience with camera operation (DSLR, mirrorless, or broadcast cameras) and lighting/sound capture",
      "Understanding of video formats, codecs, export settings for web, TV, and social media"
    ],
    apply: 'Qualified candidates should send a detailed CV, a cover letter, and a link to their online portfolio/demo reel to <a href="mailto:cityuniversitybiz@gmail.com">cityuniversitybiz@gmail.com</a> with the subject line: “Video Editor / Video Content Creator – [Your Full Name]”'
  },
  {
    id: "pharmacist-pharmaceutical-manufacturing-mowe-2026",
    title: "Pharmacist",
    date: "2026-05-26",
    location: "Mowe, Ogun State",
    type: "Full-time",
    seniority: "Junior",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "Pharmaceutical Manufacturing Company",
    summary: "Seeking fresh graduates or NYSC pharmacists to join a pharmaceutical manufacturing company in Mowe, Ogun State.",
    responsibilities: [
      "Support pharmaceutical production processes",
      "Ensure compliance with manufacturing standards",
      "Assist in quality control and assurance activities",
      "Contribute to overall operational efficiency"
    ],
    requirements: [
      "0-4 years of experience (fresh graduates/NYSC pharmacists encouraged)",
      "Minimum of BSC/HND in Pharmacy or relevant disciplines",
      "Preference will be given to candidates living around Mowe and neighbouring Lagos cities like Ikeja, Ogba, Ojodu- Berge"
    ],
    apply: 'Interested candidates should forward their CVs to <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> and <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a> immediately'
  },
  {
    id: "procurement-officer-pharmaceutical-manufacturing-mowe-2026",
    title: "Procurement Officer",
    date: "2026-05-26",
    location: "Mowe, Ogun State",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "Pharmaceutical Manufacturing Company",
    summary: "Seeking a Procurement Officer with advanced Excel knowledge to join a pharmaceutical manufacturing company in Mowe, Ogun State.",
    responsibilities: [
      "Manage procurement processes for raw materials and supplies",
      "Negotiate with vendors and ensure cost-effective purchasing",
      "Maintain accurate procurement records using advanced Excel skills",
      "Ensure timely delivery of materials to support production"
    ],
    requirements: [
      "0-4 years of experience",
      "Minimum of BSC/HND in relevant disciplines",
      "Advanced knowledge of Excel",
      "Preference will be given to candidates living around Mowe and neighbouring Lagos cities like Ikeja, Ogba, Ojodu- Berge"
    ],
    apply: 'Interested candidates should forward their CVs to <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> and <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a> immediately'
  },
  {
    id: "warehouse-officer-pharmaceutical-manufacturing-mowe-2026",
    title: "Warehouse Officer",
    date: "2026-05-26",
    location: "Mowe, Ogun State",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "Pharmaceutical Manufacturing Company",
    summary: "Seeking a Warehouse Officer with advanced Excel knowledge to join a pharmaceutical manufacturing company in Mowe, Ogun State.",
    responsibilities: [
      "Manage warehouse operations, including inventory control and stock movement",
      "Ensure accurate record-keeping using advanced Excel skills",
      "Coordinate receiving, storage, and dispatch of goods",
      "Maintain an organized and efficient warehouse environment"
    ],
    requirements: [
      "0-4 years of experience",
      "Minimum of BSC/HND in relevant disciplines",
      "Advanced knowledge of Excel",
      "Preference will be given to candidates living around Mowe and neighbouring Lagos cities like Ikeja, Ogba, Ojodu- Berge"
    ],
    apply: 'Interested candidates should forward their CVs to <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> and <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a> immediately'
  },
  {
    id: "trainee-engineer-pharmaceutical-manufacturing-mowe-2026",
    title: "Trainee Engineer",
    date: "2026-05-26",
    location: "Mowe, Ogun State",
    type: "Full-time",
    seniority: "Junior",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "Pharmaceutical Manufacturing Company",
    summary: "Seeking Trainee Engineers to join a pharmaceutical manufacturing company in Mowe, Ogun State, gaining hands-on experience in engineering operations.",
    responsibilities: [
      "Assist in the maintenance and troubleshooting of manufacturing equipment",
      "Support engineering projects and process improvements",
      "Learn and apply pharmaceutical engineering standards",
      "Collaborate with experienced engineers and production teams"
    ],
    requirements: [
      "0-4 years of experience",
      "Minimum of BSC/HND in relevant engineering disciplines",
      "Preference will be given to candidates living around Mowe and neighbouring Lagos cities like Ikeja, Ogba, Ojodu- Berge"
    ],
    apply: 'Interested candidates should forward their CVs to <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> and <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a> immediately'
  },
  {
    id: "pharmaceutical-manufacturing-mechanical-engineer-mowe-2026",
    title: "Pharmaceutical Manufacturing Mechanical Engineer",
    date: "2026-05-26",
    location: "Mowe, Ogun State",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "Pharmaceutical Manufacturing Company",
    summary: "Seeking a Pharmaceutical Manufacturing Mechanical Engineer to join a company in Mowe, Ogun State, responsible for maintaining and optimizing mechanical systems.",
    responsibilities: [
      "Maintain and troubleshoot mechanical systems and equipment in a pharmaceutical manufacturing environment",
      "Implement preventive maintenance schedules",
      "Ensure compliance with GMP and safety regulations",
      "Support continuous improvement initiatives for mechanical processes"
    ],
    requirements: [
      "0-4 years of experience",
      "Minimum of BSC/HND in Mechanical Engineering or relevant disciplines",
      "Preference will be given to candidates living around Mowe and neighbouring Lagos cities like Ikeja, Ogba, Ojodu- Berge"
    ],
    apply: 'Interested candidates should forward their CVs to <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> and <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a> immediately'
  },
  {
    id: "sales-executive-fmcg-lagos-2026",
    title: "Sales Executive (FMCG)",
    date: "2026-05-26",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "₦150,000 – ₦200,000",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Seeking a Sales Executive to drive sales and achieve targets in the FMCG industry in Lagos, developing relationships with distributors and retailers.",
    responsibilities: [
      "Drive sales and achieve assigned targets",
      "Develop and maintain relationships with distributors and retailers",
      "Identify new market opportunities",
      "Ensure proper product visibility and merchandising",
      "Provide timely market feedback and competitor insights"
    ],
    requirements: [
      "Minimum of a year FMCG sales experience",
      "Strong negotiation and communication skills",
      "Ability to meet and exceed targets",
      "Good knowledge of assigned territory",
      "Minimum qualification: OND / HND / BSc"
    ],
    apply: 'Interested candidates should apply using the link below: <a href="https://forms.gle/aVaW2k2FRpZPsLVy8">https://forms.gle/aVaW2k2FRpZPsLVy8</a>'
  },
  {
    id: "customer-service-representative-lekki-2026",
    title: "Customer Service Representative",
    date: "2026-05-25",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "₦300,000 Monthly",
    deadline: "Not Specified",
    company: "Buckeyepacific",
    summary: "Customer Service Representative to handle calls on medical billing, insurance, and payments, resolve account issues, and document interactions.",
    responsibilities: [
      "Handle customer calls on medical billing, insurance, and payments",
      "Resolve account issues professionally",
      "Explain billing statements and payment options",
      "Document customer interactions accurately",
      "Meet customer satisfaction and performance targets"
    ],
    requirements: [
      "Minimum of 2 years customer service experience in banking, fintech, or healthcare",
      "Strong computer skills",
      "Excellent spoken and written English",
      "Strong communication, empathy, and multitasking skills",
      "Ability to work independently and meet deadlines",
      "Female applicants only",
      "Must be ready for immediate resumption"
    ],
    apply: 'Send your CV and Cover Letter to: <a href="mailto:buckeyepacificrecruit@gmail.com">buckeyepacificrecruit@gmail.com</a>'
  },
  {
    id: "office-assistant-egbeda-lagos-2026",
    title: "Office Assistant",
    date: "2026-05-25",
    location: "Egbeda, Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Liyahthegiftcurator",
    summary: "Office Assistant to support general office duties, requiring smartness, organization, and willingness to learn.",
    responsibilities: [
      "Support general office duties",
      "Maintain office organization and cleanliness",
      "Assist with administrative tasks as needed",
      "Learn and adapt to new office procedures"
    ],
    requirements: [
      "SSCE/OND qualification",
      "Male or Female",
      "Must reside around Egbeda and its environs",
      "Smart, organised, and willing to learn"
    ],
    apply: 'Send CV to: <a href="mailto:liyahthegiftcurator@gmail.com">liyahthegiftcurator@gmail.com</a>'
  },
  {
    id: "oil-gas-field-readiness-training-program-2026",
    title: "Oil & Gas Field Readiness Training Program",
    date: "2026-05-25",
    location: "Nationwide",
    type: "Internship",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "26 May 2026",
    company: "NCDMB (Nigerian Content Development and Monitoring Board)",
    summary: "Training program for young Nigerian graduates in Operations & Maintenance and Digital Skills, positioning participants for internship and career opportunities in the energy sector.",
    responsibilities: [
      "Participate in specialized training in Operations & Maintenance and Digital Skills",
      "Engage in practical sessions and theoretical learning relevant to the energy sector",
      "Prepare for internship and career opportunities in Nigeria’s Oil & Gas sector"
    ],
    requirements: [
      "Be below 30 years old",
      "Hold an HND, BSc, or BEng in Engineering, Sciences, Technology, or related disciplines",
      "Study any of the following: Electrical & Electronics Engineering, Mechanical & Mechatronics Engineering, Instrumentation & Control, Computer Science, System Engineering, or Computer Engineering."
    ],
    apply: 'Apply here: <a href="https://nogicjqs.gov.ng/auth/login?redirect=/accounts">https://nogicjqs.gov.ng/auth/login?redirect=/accounts</a>'
  },
  {
    id: "customer-experience-officer-online-foodstuff-store-2026",
    title: "Customer Experience Officer",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Online Foodstuff Store Limited",
    summary: "Customer Experience Officer to manage customer interactions, ensuring satisfaction and resolving issues efficiently.",
    responsibilities: [
      "Manage customer interactions, ensuring satisfaction and resolving issues efficiently."
    ],
    requirements: [
      "Minimum of OND / HND / BSc. Degree in any related field.",
      "Previous experience in customer service or customer experience role is an advantage.",
      "Strong communication and interpersonal skills.",
      "Good problem-solving and conflict resolution abilities.",
      "Ability to work in a fast-paced environment.",
      "Basic computer proficiency."
    ],
    apply: 'Send CV to: <a href="mailto:hr@foodstuff.store">hr@foodstuff.store</a> using the job title as the subject of the email.'
  },
  {
    id: "quality-control-officer-water-treatment-allflavors-supreme-foods-2026",
    title: "Quality Control Officer (Water Treatment)",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "AllFlavors Supreme Foods",
    summary: "Responsible for quality control, preferably in water treatment or food manufacturing, ensuring sound knowledge of water treatment processes and laboratory testing procedures.",
    responsibilities: [
      "Conduct quality control checks, preferably in water treatment or food manufacturing.",
      "Ensure adherence to water treatment processes and laboratory testing procedures.",
      "Apply knowledge of HACCP, GMP, and food safety management systems.",
      "Maintain accurate documentation and analytical records."
    ],
    requirements: [
      "Bachelor’s Degree or HND in Microbiology, Biochemistry, Chemistry, Food Science and Technology, Industrial Chemistry, or a related discipline.",
      "Minimum of 2 years’ experience in quality control, preferably in water treatment or food manufacturing.",
      "Sound knowledge of water treatment processes and laboratory testing procedures.",
      "Familiarity with HACCP, GMP, and food safety management systems.",
      "Strong analytical and documentation skills.",
      "Proficiency in Microsoft Office applications."
    ],
    apply: 'Send CV to: <a href="mailto:qc@allflavors.odoo.com">qc@allflavors.odoo.com</a> using “Quality Control Officer (Water Treatment)” as the subject of the email.'
  },
  {
    id: "hr-support-intern-nysc-lagos-2026",
    title: "HR Support Intern (NYSC)",
    date: "2026-05-25",
    location: "Lagos",
    type: "Internship",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Not Specified",
    summary: "Proactive NYSC Corps Member to join our HR team as an intern, assisting with recruitment, scheduling, and HR documentation.",
    responsibilities: [
      "Assist with recruitment and candidate screening",
      "Schedule interviews and manage applicant records",
      "Support onboarding and HR documentation",
      "Handle basic administrative tasks"
    ],
    requirements: [
      "Currently serving (NYSC)",
      "Good communication and organizational skills",
      "Willing to learn and work in a fast-paced environment",
      "Basic knowledge of HR is a plus",
      "Available to attend a physical interview is a MUST"
    ],
    apply: 'Apply here: <a href="https://forms.gle/rJJYtadBxgfzPGzG6">https://forms.gle/rJJYtadBxgfzPGzG6</a>'
  },
  {
    id: "bar-girl-lakowe-2026",
    title: "Bar Girl",
    date: "2026-05-25",
    location: "Làkowe",
    type: "Full-time",
    seniority: "Junior",
    salary: "150k",
    deadline: "Not Specified",
    company: "Hotel",
    summary: "Bar Girl needed for a hotel in Làkowe, must reside within the Ibeju-Lekki axis.",
    responsibilities: [
      "Serve drinks to customers",
      "Maintain cleanliness of the bar area",
      "Handle cash and card transactions",
      "Provide excellent customer service"
    ],
    requirements: [
      "Only candidate who stay within the Ibeju-Lekkilekki axis should apply as there’s no accommodation"
    ],
    apply: 'Candidates should send their CVs to <a href="tel:07078195124">07078195124</a>.'
  },
  {
    id: "graduate-trainee-it-gbagada-2026",
    title: "Graduate Trainee (IT)",
    date: "2026-05-25",
    location: "Gbagada",
    type: "Hybrid",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Hazon Holdings",
    summary: "Motivated Graduate Trainee with an IT background to support our technical operations, eager to learn and thrive in a fast-paced environment while gaining hands-on experience across IT functions.",
    responsibilities: [
      "Assist with basic software and hardware troubleshooting.",
      "Support system maintenance, installations, and updates.",
      "Provide technical support to internal teams.",
      "Maintain IT documentation and asset records.",
      "Assist with network and system monitoring.",
      "Support IT projects and perform other assigned tasks."
    ],
    requirements: [
      "Bachelor’s Degree in IT, Computer Science, or related field.",
      "0–1 year experience (NYSC experience acceptable).",
      "Basic knowledge of hardware, software, and networking.",
      "Proficiency in Microsoft Office tools.",
      "Strong problem-solving and communication skills.",
      "Willingness to learn and adapt quickly."
    ],
    apply: 'Interested candidates should send their CV and cover letter to <a href="mailto:recruitment@hazonholdings.com">recruitment@hazonholdings.com</a> with the subject “Graduate Trainee (IT)”.'
  },
  {
    id: "lab-manager-lekki-lagos-2026",
    title: "Lab Manager",
    date: "2026-05-25",
    location: "Lekki Lagos",
    type: "Full time",
    seniority: "Mid-Level",
    salary: "500k",
    deadline: "Not Specified",
    company: "Diagnostic Lab",
    summary: "Experienced Lab Manager to oversee daily operations of our diagnostic lab in Lekki, ensuring accuracy and compliance.",
    responsibilities: [
      "Manage lab processes from sample collection to reporting, ensuring accuracy and compliance.",
      "Implement QC systems and maintain HEFAMAA/MLSCN standards.",
      "Supervise and train lab staff, manage inventory, and handle equipment maintenance.",
      "Liaise with clinical staff on urgent results and client enquiries."
    ],
    requirements: [
      "BMLS, registered with MLSCN.",
      "3+ years post-NYSC lab experience, 1+ year in a supervisory role.",
      "Strong knowledge of hematology, chemistry, microbiology, serology.",
      "Familiar with lab equipment and LIS/LIMS."
    ],
    apply: 'Send CV to <a href="mailto:osinmadea@gmail.com">osinmadea@gmail.com</a> Subject: Application – Lab Manager'
  },
  {
    id: "business-development-executive-renewable-energy-2026",
    title: "Business Development Executive",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-Time",
    seniority: "Mid-Level",
    salary: "₦250,000 Monthly",
    deadline: "Not Specified",
    company: "Crystal Global",
    summary: "Proactive and results-oriented Business Development Executive to drive business growth, generate new leads, and expand our client base within the renewable energy sector.",
    responsibilities: [
      "Identify and pursue new business opportunities across residential, commercial, and industrial sectors.",
      "Generate qualified leads and build a robust sales pipeline.",
      "Develop and maintain strong relationships with prospective and existing clients.",
      "Conduct market research to identify customer needs, industry trends, and growth opportunities.",
      "Prepare and deliver compelling business proposals and presentations.",
      "Negotiate contracts and close deals to achieve revenue targets.",
      "Collaborate with internal teams to ensure seamless project delivery and customer satisfaction.",
      "Establish strategic partnerships with businesses, real estate developers, and other key stakeholders.",
      "Maintain accurate records of sales activities and client interactions."
    ],
    requirements: [
      "Bachelor’s degree in Business Administration, Marketing, Engineering, or a related field.",
      "Minimum of 2–4 years of experience in business development, sales, or client acquisition.",
      "Proven track record of meeting or exceeding sales targets.",
      "Strong communication, negotiation, and relationship-building skills.",
      "Experience managing B2B sales and corporate accounts.",
      "Ability to work independently and drive business growth.",
      "Experience in renewable energy, telecoms, fintech, or solution-based sales is an added advantage."
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:ifeoluwa.recruit1@gmail.com">ifeoluwa.recruit1@gmail.com</a> with the subject line “Business Development Executive – Renewable Energy”.'
  },
  {
    id: "sustainability-esg-management-role-bua-foods-2026",
    title: "Sustainability & ESG Management Role",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    salary: "Not Specified",
    deadline: "May 27, 2026",
    company: "BUA Foods Plc",
    summary: "Experienced professional to lead ESG & sustainability strategy execution, drive initiatives, and support reporting & compliance within FMCG operations.",
    responsibilities: [
      "Lead ESG & sustainability strategy execution",
      "Drive sustainability initiatives across business units",
      "Support ESG reporting & compliance",
      "Monitor sustainability KPIs and reporting metrics",
      "Coordinate stakeholder & regulatory engagement",
      "Support operational sustainability transformation"
    ],
    requirements: [
      "B.Sc/HND in Environmental Science, Engineering, Economics, or related field",
      "5–7 years ESG/sustainability experience",
      "FMCG or manufacturing experience preferred",
      "Knowledge of GRI, CDSB, UNGC & SASB frameworks",
      "Strong analytical & reporting skills"
    ],
    apply: 'Apply: <a href="https://jobs.revicemycv.com/job/bua-foods-%E2%80%A6">jobs.revicemycv.com/job/bua-foods-…</a>'
  },
  {
    id: "customer-care-agent-fresh-graduate-swift-networks-2026",
    title: "Customer Care Agent (Fresh Graduate)",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Swift Networks",
    summary: "Fresh graduate with a 2:1 Bachelor’s degree to provide excellent customer service, manage conflicts, and utilize sales and marketing software.",
    responsibilities: [
      "Provide excellent customer service",
      "Manage customer inquiries and resolve conflicts",
      "Utilize sales and marketing software (CRM, Excel, Outlook)",
      "Maintain professionalism in stressful situations",
      "Communicate effectively and empathetically",
      "Organize tasks efficiently"
    ],
    requirements: [
      "Must have a 2:1 (Upper Credit) bachelor’s degree in sales, marketing, or a related field.",
      "NYSC Fresh Graduate",
      "Excellent customer service skills.",
      "Strong conflict resolution skills.",
      "In-depth knowledge of sales and marketing software, such as CRM, Excel, Outlook, etc.",
      "Ability to remain calm and professional in stressful situations.",
      "Advanced communication and interpersonal skills.",
      "Empathy and patience.",
      "Advanced organizational skills."
    ],
    apply: 'Send CV and a cover letter to: <a href="mailto:hr@swiftng.net">hr@swiftng.net</a> using the Job Title as the subject of the email.'
  },
  {
    id: "administrative-intern-nysc-lekki-2026",
    title: "Administrative Intern (NYSC)",
    date: "2026-05-25",
    location: "Lekki Phase 1, Lagos",
    type: "Internship",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Rentachef",
    summary: "NYSC Corps Member to support administrative tasks, documentation, and office operations.",
    responsibilities: [
      "Support administrative tasks and office operations",
      "Assist in documentation and filing systems",
      "Handle basic correspondence and records management",
      "Support coordination of internal activities"
    ],
    requirements: [
      "NYSC members without PPA",
      "Degree in relevant field (English, Mass Communication, etc.)",
      "Good communication and organizational skills",
      "Proficiency in basic office tools is an advantage"
    ],
    apply: 'Send CV and Cover Letter to <a href="mailto:rentachefrecruit@gmail.com">rentachefrecruit@gmail.com</a> (Subject: Administrative Intern)'
  },
  {
    id: "technical-sales-engineer-lagos-2026",
    title: "Technical Sales Engineer",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "HRLeverage Africa (for client in Engineering)",
    summary: "Drive sales of Flowitec’s mechanical engineering solutions and services by combining technical expertise with strong sales skills. The role involves understanding customer requirements, developing tailored solutions, and building long-term client relationships to achieve revenue targets.",
    responsibilities: [
      "Identify and develop new business opportunities to meet and exceed sales targets.",
      "Conduct market research to understand customer needs, industry trends, and competitive landscape.",
      "Prepare and deliver technical presentations, proposals, and product demonstrations to clients.",
      "Provide expert technical advice and recommend customized engineering solutions.",
      "Collaborate with internal sales, engineering, and supply chain teams to design and deliver client-specific solutions.",
      "Build, maintain, and strengthen relationships with new and existing clients.",
      "Ensure effective after-sales support, addressing customer concerns and ensuring satisfaction.",
      "Support marketing activities such as exhibitions, trade shows, and product showcases.",
      "Maintain accurate records of sales activities, client interactions, and pipeline progress.",
      "Prepare and submit weekly reports on sales performance, client visits, call plans, and market insights.",
      "Monitor market trends, identify opportunities, and assess potential risks or competitive threats.",
      "Provide continuous technical support throughout the sales cycle."
    ],
    requirements: [
      "Bachelor’s degree in Mechanical Engineering or a related field.",
      "At least 2 years experience in technical sales, preferably within the engineering or industrial sector.",
      "Strong understanding of mechanical systems and engineering solutions.",
      "Excellent communication, negotiation, and presentation skills.",
      "Ability to translate complex technical concepts into clear customer solutions.",
      "Strong problem-solving and analytical skills.",
      "Ability to work independently and collaboratively within a team.",
      "Proficiency in Microsoft Office and CRM tools."
    ],
    apply: 'Send CV to <a href="mailto:yomade.hrleverage@gmail.com">yomade.hrleverage@gmail.com</a> using the job title _”Technical Sales Engineer – Lagos”_ as the subject of mail.'
  },
  {
    id: "program-manager-victoria-island-lagos-2026",
    title: "Program Manager",
    date: "2026-05-25",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "Not Specified",
    deadline: "Not Specified",
    company: "Foundation",
    summary: "Passionate and experienced Program Manager to drive the execution of impactful programs, manage events, oversee grant processes, and support our mission from the ground up.",
    responsibilities: [
      "Drive the execution of impactful programs",
      "Manage events",
      "Oversee grant processes",
      "Support our mission from the ground up"
    ],
    requirements: [
      "Previous experience in program management or coordination within an NGO or non-profit",
      "Strong organisational, communication and stakeholder management skills",
      "Ability to monitor, evaluate and report on program outcomes",
      "Proficiency in Microsoft Office Suite",
      "Discretion, reliability and a collaborative spirit"
    ],
    apply: 'Apply here: <a href="https://forms.gle/6R3LuNT4NM5BUVzY9">https://forms.gle/6R3LuNT4NM5BUVzY9</a>'
  },
  {
    id: "management-trainee-university-press-plc-2026",
    title: "Management Trainee",
    date: "2026-05-25",
    location: "Nationwide",
    type: "Full-time",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "May 29, 2026",
    company: "University Press Plc",
    summary: "University Press Plc is hiring for multiple positions including Management Trainee, Manager (Finance), Manager (Internal Audit), Manager (IT), Manager (Marketing), Manager (Personnel & Admin), Manager (Publishing), Manager (Distribution), Confidential Secretary, Manager (Marketing & Sales), Zonal Managers, HR Officer (Recruitment, Training & Benefits Management), Account Officers, Educational Sales Representatives (ESR).",
    responsibilities: [
      "Participate in structured training and development programs",
      "Gain exposure to various departments and business functions",
      "Contribute to projects and initiatives as assigned",
      "Develop leadership and management skills"
    ],
    requirements: [
      "Bachelor's Degree in a relevant field",
      "Strong academic record",
      "Excellent communication and interpersonal skills",
      "Eagerness to learn and grow within the publishing industry"
    ],
    apply: 'Apply here: <a href="https://bit.ly/48YeU3k">bit.ly/48YeU3k</a>'
  },
  {
    id: "hr-intern-volunteer-leam-consulting-2026",
    title: "HR Intern – Volunteer",
    date: "2026-05-25",
    location: "Ibadan",
    type: "Volunteer",
    seniority: "Junior",
    salary: "Unpaid (Volunteer Role)",
    deadline: "Not Specified",
    company: "LEAM Consulting Limited",
    summary: "Volunteer HR Intern to support HR functions, requiring academic or professional certification in HR and residing close to the office.",
    responsibilities: [
      "Support various HR functions",
      "Assist with administrative tasks",
      "Learn and apply HR best practices"
    ],
    requirements: [
      "Must reside close to our office in Ibadan.",
      "Interested candidates must have an academic certificate in HR or a Professional Certification in HR.",
      "No prior work experience required."
    ],
    apply: 'Send CV to: <a href="mailto:hiring@leamconsulting.com">hiring@leamconsulting.com</a> using the Job Title as the subject of the email.'
  },
  {
    id: "executive-assistant-fortis-engineering-services-2026",
    title: "Executive Assistant",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    salary: "Not Specified",
    deadline: "25th May, 2026",
    company: "Fortis Engineering Services",
    summary: "Provide high-level administrative support to senior management, managing calendars, communications, and office operations.",
    responsibilities: [
      "Provide comprehensive administrative support to senior management",
      "Manage executive calendars, schedule appointments, and coordinate travel arrangements",
      "Prepare, edit, and format documents, reports, and presentations",
      "Conduct research and data analysis as required",
      "Liaise with clients, vendors, and internal team members",
      "Handle confidential information with discretion"
    ],
    requirements: [
      "Bachelor’s degree in Business Administration, Management, or a related field (preferred)",
      "5+ years proven experience as an Executive Assistant or in a similar administrative role",
      "Strong organizational and time-management skills",
      "Excellent written and verbal communication skills",
      "High level of professionalism and discretion",
      "Proficiency in office software (e.g., Microsoft Office, Google Workspace, ERP)",
      "Ability to multitask and work under pressure",
      "Strong attention to detail and problem-solving skills"
    ],
    apply: 'Send CV to: <a href="mailto:admin@fortisengineering.net">admin@fortisengineering.net</a> on or before 25th May, 2026.'
  },
  {
    id: "finance-trainee-ftp-2026-lagos-2026",
    title: "Finance Trainee (FTP 2026)",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    salary: "Not Specified",
    deadline: "31st May, 2026",
    company: "TGI Distri Limited",
    summary: "Structured trainee programme for new ICAN/ACA qualified candidates to build a strong pipeline of finance professionals with real business exposure and cross-functional learning.",
    responsibilities: [
      "Participate in a structured trainee programme that combines real business exposure with practical, cross-functional learning",
      "Gain hands-on experience in various finance functions",
      "Support financial operations and reporting",
      "Develop skills for future finance leadership roles"
    ],
    requirements: [
      "New ICAN/ACA qualified candidate, and ready to learn in a fast-paced environment."
    ],
    apply: 'Kindly send your CV to <a href="mailto:careers.tgidistri@clicktgi.net">careers.tgidistri@clicktgi.net</a> (Use “Finance Trainee 2026” as email subject)'
  },
  {
    id: "business-analyst-remote-2026",
    title: "Business Analyst",
    date: "2026-05-25",
    location: "Remote",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "$120,000–150,000 USD/ year",
    deadline: "Not Specified",
    company: "Medallion/Aka First Layer AI",
    summary: "Business Analyst with experience in data analytics or reporting, proficient in SQL and data visualization tools.",
    responsibilities: [
      "Analyze data to find insights driving real decisions",
      "Build and maintain dashboards tracking key performance indicators",
      "Collaborate with product, risk, and finance teams to define and measure KPIs",
      "Support modelling of customer cohorts and LTV",
      "Translate complex data into clear, concise recommendations"
    ],
    requirements: [
      "3+ years of experience working in data analytics or reporting.",
      "Proficient in writing SQL queries to extract and transform data for reporting.",
      "Experience with Sigma, Tableau, Looker, and Metabase for data visualization and reporting."
    ],
    apply: 'Apply : <a href="https://job-boards.greenhouse.io/medallionakafirstlayerai/jobs/4208158009">https://job-boards.greenhouse.io/medallionakafirstlayerai/jobs/4208158009</a>'
  },
  {
    id: "remote-research-intern-2026",
    title: "Remote Research Intern",
    date: "2026-05-25",
    location: "Remote",
    type: "Part-Time",
    seniority: "Junior",
    salary: "USD 600 Per Month (Stipend)",
    deadline: "2026-05-18",
    company: "CIVICUS",
    summary: "Remote Research Intern for a 12-month part-time contract, supporting research activities.",
    responsibilities: [
      "Conduct research on assigned topics",
      "Assist with data collection and analysis",
      "Prepare research summaries and reports",
      "Collaborate with the research team"
    ],
    requirements: [
      "Strong analytical and research skills",
      "Ability to work independently in a remote environment",
      "Good written and verbal communication skills",
      "Interest in the non-profit or advocacy sector"
    ],
    apply: 'Apply <a href="https://civicus.bamboohr.com/careers/78">https://civicus.bamboohr.com/careers/78</a>'
  },
  {
    id: "head-of-marketing-corporate-communications-fintech-2026",
    title: "Head of Marketing and Corporate Communications",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    salary: "1.5m – 1.8m monthly net",
    deadline: "Not Specified",
    company: "Fintech (Payments, Wallets, Digital Financial Services)",
    summary: "Strategic and results-driven Head of Marketing and Corporate Communications to lead our marketing, brand, and growth agenda. The role will drive customer acquisition, engagement, and retention across digital channels while positioning the company as a leader in payments, wallets, and digital financial solutions.",
    responsibilities: [
      "Lead marketing, brand, and growth agenda",
      "Drive customer acquisition, engagement, and retention across digital channels",
      "Position the company as a leader in payments, wallets, and digital financial solutions"
    ],
    requirements: [
      "10+ years’ marketing experience, including leadership experience",
      "Strong background in fintech, payments, or digital banking",
      "Proven expertise in digital/performance marketing and growth",
      "Solid understanding of marketing analytics, CRM, and automation tools",
      "Strong leadership, strategic thinking, and execution capability."
    ],
    apply: 'Apply here: <a href="https://forms.gle/cDE2Bf5127eXLjsn7">https://forms.gle/cDE2Bf5127eXLjsn7</a>'
  },
  {
    id: "chief-commercial-officer-cco-lagos-bank-2026",
    title: "Chief Commercial Officer (CCO)",
    date: "2026-05-25",
    location: "Lagos, Nigeria",
    type: "Full-time",
    seniority: "Senior",
    salary: "Highly Attractive",
    deadline: "Not Specified",
    company: "Bank in Lagos, Nigeria",
    summary: "Senior leadership role to drive commercial growth, including deposit mobilization, loan portfolio expansion, customer acquisition, and revenue generation across key segments.",
    responsibilities: [
      "Drive commercial growth, including deposit mobilization, loan portfolio expansion, customer acquisition, and revenue generation across key segments."
    ],
    requirements: [
      "12–15 years of experience in microfinance, retail banking, or MSME banking",
      "At least 5 years in senior leadership roles"
    ],
    apply: 'Apply here: <a href="https://forms.gle/KQToPFpoC8Y8Gfc6A">https://forms.gle/KQToPFpoC8Y8Gfc6A</a>'
  },
  {
    id: "security-engineering-assurance-analyst-bank-2026",
    title: "Security Engineering Assurance Analyst",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    salary: "₦1.8m – ₦2m Monthly Net",
    deadline: "Not Specified",
    company: "Technology-driven Bank",
    summary: "Security analyst focused on governing and assuring technology change and upholding security standards in a bank.",
    responsibilities: [
      "Assure security standards are upheld at every stage of technology delivery",
      "Review technology change processes and approvals",
      "Work within cross-functional teams for assurance setting",
      "Document and communicate risks to stakeholders"
    ],
    requirements: [
      "Prior experience in financial services, banking, or fintech",
      "Exposure to governance, compliance, risk, or cybersecurity functions",
      "Familiarity with PCI-DSS, ISO27001, or CBN-regulated environments",
      "Experience working across cross-functional teams in a structured delivery or assurance setting",
      "Strong analytical, documentation, and stakeholder communication skills",
      "A proactive mindset with the ability to manage competing priorities and escalate risks effectively"
    ],
    apply: 'Apply here: <a href="https://forms.gle/9gdS8rnTs36ydsv49">https://forms.gle/9gdS8rnTs36ydsv49</a>'
  },
  {
    id: "governance-project-assurance-lead-bank-2026",
    title: "Governance Project Assurance Lead",
    date: "2026-05-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    salary: "₦1.8m – ₦2m Monthly Net",
    deadline: "Not Specified",
    company: "Technology-driven Bank",
    summary: "Governance and assurance lead to ensure technology delivery standards are upheld at every stage in a high-growth banking environment.",
    responsibilities: [
      "Govern and assure technology change delivery",
      "Ensure right processes, approvals, and security standards are upheld",
      "Manage cross-functional teams in structured delivery",
      "Escalate risks and manage competing priorities effectively"
    ],
    requirements: [
      "Prior experience in financial services, banking, or fintech",
      "Exposure to governance, compliance, risk, or cybersecurity functions",
      "Familiarity with PCI-DSS, ISO27001, or CBN-regulated environments",
      "Experience working across cross-functional teams in a structured delivery or assurance setting",
      "Strong analytical, documentation, and stakeholder communication skills",
      "A proactive mindset with the ability to manage competing priorities and escalate risks effectively"
    ],
    apply: 'Apply here: <a href="https://forms.gle/9gdS8rnTs36ydsv49">https://forms.gle/9gdS8rnTs36ydsv49</a>'
  },
  {
    id: "technical-sales-oil-gas-lagos-2026",
    title: "Technical Sales",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦300,000 - ₦800,000 Monthly",
    deadline: "Not Specified",
    company: "Structured Resource",
    summary: "Seeking a results-driven Technical Sales professional to support business growth in the industrial/oil & gas sector by providing technical solutions and managing key client relationships.",
    responsibilities: [
      "Identify and develop new business opportunities",
      "Provide technical support and product recommendations to clients",
      "Prepare proposals, quotations, and technical presentations",
      "Manage client relationships and ensure customer satisfaction",
      "Work closely with engineering and operations teams to deliver solutions",
      "Meet and exceed sales targets and business objectives"
    ],
    requirements: [
      "Bachelor’s degree in Engineering or related technical field",
      "5–10 years’ experience in technical sales, preferably within Oil & Gas, Engineering, Energy, or Industrial sectors",
      "Strong understanding of technical products, equipment, and solutions",
      "Proven ability to generate leads and close high-value deals",
      "Excellent communication, negotiation, and presentation skills",
      "Ability to interpret technical specifications and client requirements",
      "Strong commercial and relationship management skills"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:jobs@structuredresource.com">jobs@structuredresource.com</a> with the subject "Technical Sales"'
  },
  {
    id: "factory-workers-beverage-isolo-2026",
    title: "Male Factory Workers (10 Positions)",
    date: "2026-05-23",
    location: "Isolo, Lagos",
    type: "Full-time",
    salary: "₦70,000 Gross Monthly",
    deadline: "Not Specified",
    company: "Reputable Beverage Company",
    summary: "Seeking physically fit and reliable Factory Workers to support production and distribution operations. Proximity to Isolo is required.",
    responsibilities: [
      "Empty bottles and replace them during production processes.",
      "Pack finished products for distribution.",
      "Move products within the factory environment.",
      "Restock products as required.",
      "Load and transfer products from one vehicle to another for delivery.",
      "Assist with general factory operations when required.",
      "Maintain cleanliness and comply with safety procedures at all times."
    ],
    requirements: [
      "Educational qualification: Not required",
      "Must be physically strong and fit.",
      "Ability to lift and move products regularly.",
      "Willingness to work flexible hours, including night shifts.",
      "Ability to work in a fast-paced factory environment.",
      "Must be reliable, disciplined, and hardworking.",
      "Candidates must reside within Isolo or its environs."
    ],
    apply: 'Interested candidates should send their CV to <a href="mailto:secomltd1@gmail.com">secomltd1@gmail.com</a> or via WhatsApp to <a href="https://wa.me/2348080635669">08080635669</a> using "Factory Worker" as the subject.'
  },
  {
    id: "governance-project-assurance-lead-bank-2026",
    title: "Governance Project Assurance Lead",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦1.8m – ₦2m Monthly Net",
    deadline: "Not Specified",
    company: "Technology-driven Bank",
    summary: "Governance and assurance lead to ensure technology delivery standards are upheld at every stage in a high-growth banking environment.",
    responsibilities: [
      "Govern and assure technology change delivery",
      "Ensure right processes, approvals, and security standards are upheld",
      "Manage cross-functional teams in structured delivery",
      "Escalate risks and manage competing priorities effectively"
    ],
    requirements: [
      "Prior experience in financial services, banking, or fintech",
      "Exposure to governance, compliance, risk, or cybersecurity functions",
      "Familiarity with PCI-DSS, ISO27001, or CBN-regulated environments",
      "Experience working across cross-functional teams",
      "Strong analytical, documentation, and stakeholder communication skills",
      "Proactive mindset"
    ],
    apply: 'Apply here: <a href="https://forms.gle/9gdS8rnTs36ydsv49">https://forms.gle/9gdS8rnTs36ydsv49</a>'
  },
  {
    id: "security-engineering-assurance-analyst-bank-2026",
    title: "Security Engineering Assurance Analyst",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦1.8m – ₦2m Monthly Net",
    deadline: "Not Specified",
    company: "Technology-driven Bank",
    summary: "Security analyst focused on governing and assuring technology change and upholding security standards in a bank.",
    responsibilities: [
      "Assure security standards are upheld at every stage of technology delivery",
      "Review technology change processes and approvals",
      "Work within cross-functional teams for assurance setting",
      "Document and communicate risks to stakeholders"
    ],
    requirements: [
      "Prior experience in financial services, banking, or fintech",
      "Exposure to governance, compliance, risk, or cybersecurity functions",
      "Familiarity with PCI-DSS, ISO27001, or CBN-regulated environments",
      "Experience working across cross-functional teams",
      "Strong analytical, documentation, and stakeholder communication skills",
      "Proactive mindset"
    ],
    apply: 'Apply here: <a href="https://forms.gle/9gdS8rnTs36ydsv49">https://forms.gle/9gdS8rnTs36ydsv49</a>'
  },
  {
    id: "factory-workers-30-slots-isolo-2026",
    title: "Male Factory Workers (30 Positions)",
    date: "2026-05-23",
    location: "Isolo, Lagos",
    type: "Full-time",
    salary: "₦65,000 – ₦70,000 Monthly",
    deadline: "2026-05-20",
    company: "Reputable Beverage Company",
    summary: "Urgent recruitment for 30 factory workers in Isolo to support production and distribution. Proximity to Isolo is mandatory.",
    responsibilities: [
      "Empty and replace bottles during production",
      "Pack finished products for distribution",
      "Move and organize products within the factory",
      "Load and offload goods for delivery",
      "Restock products as required",
      "Maintain cleanliness and comply with safety regulations",
      "Support other factory operations as assigned"
    ],
    requirements: [
      "No educational qualification required",
      "Must be physically fit and strong",
      "Ability to lift and move heavy products",
      "Willingness to work shifts, including night shifts and overtime",
      "Hardworking, disciplined, and reliable",
      "Must reside in Isolo or nearby areas (very important)"
    ],
    apply: 'Send CV to: <a href="mailto:secomltd1@gmail.com">secomltd1@gmail.com</a> or WhatsApp: <a href="https://wa.me/2348080635669">08080635669</a>'
  },
  {
    id: "lab-manager-lekki-2026",
    title: "Lab Manager",
    date: "2026-05-23",
    location: "Lekki, Lagos",
    type: "Full-time",
    salary: "₦500,000 Monthly",
    deadline: "Not Specified",
    summary: "Oversee daily operations of a diagnostic lab in Lekki, ensuring accuracy, compliance, and staff supervision.",
    responsibilities: [
      "Manage lab processes from sample collection to reporting",
      "Implement QC systems and maintain HEFAMAA/MLSCN standards",
      "Supervise and train lab staff, manage inventory, and equipment maintenance",
      "Liaise with clinical staff on urgent results and client enquiries"
    ],
    requirements: [
      "BMLS, registered with MLSCN",
      "3+ years post-NYSC lab experience, 1+ year in a supervisory role",
      "Strong knowledge of hematology, chemistry, microbiology, serology",
      "Familiar with lab equipment and LIS/LIMS"
    ],
    apply: 'Send CV to <a href="mailto:osinmadea@gmail.com">osinmadea@gmail.com</a> Subject: Application – Lab Manager'
  },
  {
    id: "business-development-officer-credit-sales-surulere-2026",
    title: "Business Development Officer (Credit Sales)",
    date: "2026-05-23",
    location: "Surulere, Lagos",
    type: "Full-time",
    salary: "₦200,000 – ₦250,000 Monthly",
    deadline: "Not Specified",
    company: "Growing Financial Services Startup",
    summary: "Drive loan product sales and grow a quality credit portfolio for a financial services startup on Lagos Mainland.",
    responsibilities: [
      "Drive credit sales and grow the loan portfolio",
      "Identify, onboard, and manage clients seeking loan facilities",
      "Meet a monthly sales target of ₦30,000,000",
      "Manage individual loan exposures within an obligor limit of ₦5,000,000",
      "Conduct client assessments and support credit appraisal processes",
      "Maintain strong client relationships to ensure retention and referrals"
    ],
    requirements: [
      "Minimum of a Bachelor’s degree in any relevant field",
      "Prior experience in business development or credit sales within the financial sector (Microfinance bank experience is a plus)",
      "Proven track record of meeting or exceeding sales targets",
      "Strong knowledge of credit products and loan structuring",
      "Excellent communication, negotiation, and relationship management skills",
      "Self-driven, target-oriented"
    ],
    apply: 'To apply, send your CV to <a href="mailto:cdchire1@gmail.com">cdchire1@gmail.com</a> Use "Business Development Officer – Credit Sales" as subject.'
  },
  {
    id: "lead-simulation-architect-tdl-fusion-2026",
    title: "Lead Simulation Architect (TDL Fusion Lead)",
    date: "2026-05-23",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    summary: "Build and unify the entire Millenia technical architecture, fusing simulation layers into a coherent runtime system.",
    responsibilities: [
      "Architect the full-stack simulation pipeline (TDL-E + TDL-L)",
      "Design concurrency models for thousands of simultaneous agents",
      "Lead ECS-based world modeling",
      "Bridge AI reasoning systems with real-time simulation loop",
      "Define technical standards across all engineering roles"
    ],
    requirements: [
      "7+ years in systems engineering (Rust/C++ preferred)",
      "Deep expertise in ECS (Entity Component System) architectures",
      "Strong background in distributed systems and real-time networking",
      "Experience with high-performance simulation or game engines",
      "Familiarity with LLM orchestration, embeddings, and vector systems"
    ],
    apply: 'Send CV to <a href="mailto:Davidakinloluwa851@gmail.com">Davidakinloluwa851@gmail.com</a> or call <a href="tel:2348055830560">08055830560</a>'
  },
  {
    id: "senior-backend-mmo-engineer-millenia-2026",
    title: "Senior Backend/MMO Engineer (Lead)",
    date: "2026-05-23",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    summary: "Build the persistent world infrastructure and 'source of truth' for the Millenia simulation.",
    responsibilities: [
      "Design and implement persistent simulation state",
      "Integrate blockchain / ledger systems for 'Sovereign History'",
      "Build high-throughput event pipelines",
      "Ensure consistency across distributed simulation nodes"
    ],
    requirements: [
      "Strong Rust experience (Actix, Tokio, or similar async ecosystems)",
      "Experience with MMO-scale backend systems",
      "Database design and optimization (PostgreSQL, NoSQL, event stores)",
      "Familiarity with L2 scaling or distributed ledger systems",
      "Understanding of eventual consistency and event sourcing"
    ],
    apply: 'Send CV to <a href="mailto:Davidakinloluwa851@gmail.com">Davidakinloluwa851@gmail.com</a> or call <a href="tel:2348055830560">08055830560</a>'
  },
  {
    id: "senior-ai-ml-engineer-tdl-l-millenia-2026",
    title: "Senior AI/ML Engineer (TDL-L Architect)",
    date: "2026-05-23",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    summary: "Design the agentic intelligence layer; the 'Sovereign Mindset' where agents remember, decide, and adapt.",
    responsibilities: [
      "Build agent reasoning loops (goal-setting, planning, memory)",
      "Design memory systems (vector retrieval + structured memory)",
      "Fine-tune and optimize LLM-driven decision systems",
      "Implement sociological and economic behavior models",
      "Balance realism vs performance in agent cognition"
    ],
    requirements: [
      "Strong Python/Mojo background",
      "Experience with LLMs, RAG pipelines, and fine-tuning",
      "Familiarity with vector databases (Pinecone, Weaviate, FAISS)",
      "Understanding of multi-agent systems and simulation environments"
    ],
    apply: 'Send CV to <a href="mailto:Davidakinloluwa851@gmail.com">Davidakinloluwa851@gmail.com</a> or call <a href="tel:2348055830560">08055830560</a>'
  },
  {
    id: "senior-mlops-devops-engineer-millenia-2026",
    title: "Senior MLOps / DevOps Engineer",
    date: "2026-05-23",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    summary: "Ensure infrastructure stability and scalability for thousands of active agents in the simulation.",
    responsibilities: [
      "Design and manage distributed compute infrastructure",
      "Orchestrate GPU workloads for agent reasoning",
      "Optimize inference pipelines for cost and latency",
      "Monitor system performance and reliability",
      "Implement CI/CD for simulation + AI systems"
    ],
    requirements: [
      "Kubernetes, Docker, and container orchestration",
      "GPU infrastructure management",
      "Experience with cloud platforms (AWS, GCP, Lambda Labs)",
      "Cost optimization strategies for AI workloads",
      "Observability tools (Prometheus, Grafana, etc.)"
    ],
    apply: 'Send CV to <a href="mailto:Davidakinloluwa851@gmail.com">Davidakinloluwa851@gmail.com</a> or call <a href="tel:2348055830560">08055830560</a>'
  },
  {
    id: "treasury-officer-bank-lagos-2026",
    title: "Treasury Officer (Assets and Liabilities Management)",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦300,000 – ₦500,000 Monthly Net",
    deadline: "Not Specified",
    company: "Lagos Bank",
    summary: "Manage assets and liabilities for a Lagos-based bank. Prior financial services experience is mandatory.",
    responsibilities: [
      "Manage balance sheet liquidity and interest rate risks",
      "Analyze and report on ALM metrics",
      "Support treasury operations and financial planning"
    ],
    requirements: [
      "Prior experience within the financial services industry is mandatory",
      "Relevant degree in Finance, Economics or related field",
      "Strong analytical skills"
    ],
    apply: 'Apply via: <a href="https://forms.gle/N3LQao6BuRb6prDX6">https://forms.gle/N3LQao6BuRb6prDX6</a>'
  },
  {
    id: "sales-officer-business-banking-bank-lagos-2026",
    title: "Sales Officer (Business Banking)",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦400,000 – ₦600,000 Monthly Net",
    deadline: "Not Specified",
    company: "Lagos Bank",
    summary: "Sales officer to drive business banking growth. Prior financial services experience is mandatory.",
    responsibilities: [
      "Acquire and manage business banking clients",
      "Drive deposit mobilization and loan products",
      "Meet sales targets and build client relationships"
    ],
    requirements: [
      "Prior experience within the financial services industry is mandatory",
      "Strong sales and relationship management skills",
      "Good understanding of business banking products"
    ],
    apply: 'Apply via: <a href="https://forms.gle/N3LQao6BuRb6prDX6">https://forms.gle/N3LQao6BuRb6prDX6</a>'
  },
  {
    id: "sales-officer-community-banking-bank-lagos-2026",
    title: "Sales Officer (Community Banking)",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦400,000 – ₦600,000 Monthly Net",
    deadline: "Not Specified",
    company: "Lagos Bank",
    summary: "Sales officer for community-based markets, cooperatives, and grassroots networks.",
    responsibilities: [
      "Engage cooperatives, traders, and distributors",
      "Drive community banking products and services",
      "Onboard grassroots agents and maintain network"
    ],
    requirements: [
      "Prior experience within the financial services industry is mandatory",
      "Deep understanding of community-based markets",
      "Excellent field-sales and interpersonal skills"
    ],
    apply: 'Apply via: <a href="https://forms.gle/N3LQao6BuRb6prDX6">https://forms.gle/N3LQao6BuRb6prDX6</a>'
  },
  {
    id: "head-marketing-corporate-communications-fintech-2026",
    title: "Head of Marketing and Corporate Communications",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦1.5m – ₦1.8m Monthly Net",
    deadline: "Not Specified",
    company: "Lagos Fintech",
    summary: "Lead marketing and communications for a fintech focusing on payments, wallets, and digital financial services.",
    responsibilities: [
      "Lead marketing, brand, and growth agenda",
      "Drive customer acquisition, engagement, and retention",
      "Position company as a leader in digital financial solutions",
      "Manage corporate communications and public relations"
    ],
    requirements: [
      "10+ years’ marketing experience, including leadership",
      "Strong background in fintech, payments, or digital banking",
      "Proven expertise in digital/performance marketing and growth",
      "Solid understanding of marketing analytics and CRM tools"
    ],
    apply: 'Apply here: <a href="https://forms.gle/cDE2Bf5127eXLjsn7">https://forms.gle/cDE2Bf5127eXLjsn7</a>'
  },
  {
    id: "accountant-ikorodu-subcity-2026",
    title: "Accountant",
    date: "2026-05-23",
    location: "Ikorodu, Lagos",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    company: "Subcity Project Global",
    summary: "Detail-oriented Accountant to join the team in Ikorodu. Good knowledge of reporting and software is essential.",
    responsibilities: [
      "Prepare and maintain financial records",
      "Handle financial reporting",
      "Use accounting software for daily tasks",
      "Ensure strong attention to detail and accuracy"
    ],
    requirements: [
      "B.Sc./HND in Accounting or related field",
      "Good knowledge of accounting principles",
      "Proficiency in Microsoft Excel and accounting software",
      "Strong organizational skills"
    ],
    apply: 'Send CV to: <a href="mailto:rachael@subcityprojectglobal.com">rachael@subcityprojectglobal.com</a>'
  },
  {
    id: "hr-manager-ikorodu-subcity-2026",
    title: "HR Manager",
    date: "2026-05-23",
    location: "Ikorodu, Lagos",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    company: "Subcity Project Global",
    summary: "Proactive HR Manager to lead operations and employee management in Ikorodu.",
    responsibilities: [
      "Manage recruitment and employee relations",
      "Oversee performance management",
      "Ensure compliance with labor laws",
      "Lead HR administrative functions"
    ],
    requirements: [
      "B.Sc./HND in Human Resource Management or related field",
      "Proven experience in HR operations",
      "Strong leadership and communication skills",
      "Knowledge of labor laws"
    ],
    apply: 'Send CV to: <a href="mailto:rachael@subcityprojectglobal.com">rachael@subcityprojectglobal.com</a>'
  },
  {
    id: "odoo-specialist-ikorodu-subcity-2026",
    title: "ODOO Specialist",
    date: "2026-05-23",
    location: "Ikorodu, Lagos",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    company: "Subcity Project Global",
    summary: "Seeking a result-driven ODOO Specialist to manage ERP modules and system performance.",
    responsibilities: [
      "Implement and support ODOO modules",
      "Troubleshoot and optimize system performance",
      "Train staff on system usage",
      "Ensure data integrity within the ERP"
    ],
    requirements: [
      "Experience working with ODOO ERP systems",
      "Strong understanding of ODOO implementation",
      "Good communication and problem-solving skills"
    ],
    apply: 'Send CV to: <a href="mailto:rachael@subcityprojectglobal.com">rachael@subcityprojectglobal.com</a>'
  },
  {
    id: "caregiver-auxiliary-nurse-ajao-estate-2026",
    title: "Caregiver / Auxiliary Nurse",
    date: "2026-05-23",
    location: "Ajao Estate, Lagos",
    type: "Full-time",
    salary: "₦140,000 Monthly",
    deadline: "Not Specified",
    summary: "Auxiliary nurse or caregiver to provide dedicated support to a patient. This is not a live-in position.",
    responsibilities: [
      "Checking and monitoring patient vitals",
      "Assisting with bathing and hygiene",
      "Preparing meals and administering medications",
      "Accompanying patient to appointments and strolls",
      "Engaging patient in activities like reading and physiotherapy",
      "Managing room cleanliness and laundry"
    ],
    requirements: [
      "Previous caregiving or auxiliary nursing experience is required",
      "Auxiliary Nurse qualification is an advantage",
      "Must be patient, compassionate, and attentive",
      "Good personal hygiene and communication skills",
      "Must reside within/near Ajao Estate"
    ],
    apply: 'Qualified candidates should apply below: <a href="https://lnkd.in/eYXPW62C">https://lnkd.in/eYXPW62C</a>'
  },
  {
    id: "accountant-renewable-energy-marwa-lekki-2026",
    title: "Accountant (ICAN/ACCA Chartered)",
    date: "2026-05-23",
    location: "Marwa, Lekki Phase 1, Lagos",
    type: "Full-time",
    salary: "₦400,000 Monthly",
    deadline: "Not Specified",
    company: "Renewable Energy Company",
    summary: "Qualified Chartered Accountant needed for a growing renewable energy and power company.",
    responsibilities: [
      "Prepare and analyze financial reports",
      "Manage accounts payable, receivable, and reconciliations",
      "Oversee tax filings and statutory remittances",
      "Monitor budgets and cash flow",
      "Ensure compliance with standards"
    ],
    requirements: [
      "Must be a Chartered Accountant (ICAN, ACA, or ACCA)",
      "Minimum of 4 years’ accounting experience",
      "Bachelor’s degree in Accounting or related field",
      "Strong knowledge of taxation and compliance",
      "Proficiency in software and Excel"
    ],
    apply: 'Apply here: <a href="https://lnkd.in/e5AcyWvk">https://lnkd.in/e5AcyWvk</a>'
  },
  {
    id: "korope-delivery-drivers-lagos-2026",
    title: "Korope Delivery Drivers (9 Positions)",
    date: "2026-05-23",
    location: "Multiple Locations, Lagos",
    type: "Full-time",
    salary: "₦120,000 – ₦150,000 Gross",
    deadline: "Not Specified",
    company: "Leading Beverage Distribution Company",
    summary: "Hiring drivers for beverage distribution across Marina, Ajah, Berger, Ebute Metta, Ikorodu, etc.",
    responsibilities: [
      "Drive Korope buses for beverage deliveries",
      "Load and offload products at warehouse",
      "Follow assigned routes and meet daily targets",
      "Conduct vehicle checks and report faults"
    ],
    requirements: [
      "Valid Driver’s License and LASDRI Card",
      "Good knowledge of Lagos routes",
      "Functional smartphone",
      "Physically fit"
    ],
    apply: 'Email CV, License, and LASDRI to <a href="mailto:secomltd1@gmail.com">secomltd1@gmail.com</a> or WhatsApp <a href="https://wa.me/2348080635669">08080635669</a> with subject "Korope Driver" and location.'
  },
  {
    id: "field-sales-representative-ikeja-fmcg-2026",
    title: "Field Sales Representative (Secondary Sales)",
    date: "2026-05-23",
    location: "Ikeja, Lagos",
    type: "Full-time",
    salary: "₦120,000 + Commission",
    deadline: "Not Specified",
    company: "FMCG – Beverage Company",
    summary: "Result-driven field sales reps to drive distribution across Ikeja axis. Proximity to Ikeja is considered.",
    responsibilities: [
      "Sell directly to retail shops and supermarkets",
      "Identify and onboard new outlets",
      "Meet daily, weekly, and monthly targets",
      "Submit field reports daily"
    ],
    requirements: [
      "1–3 years FMCG field sales experience",
      "Proven experience in secondary sales",
      "Must reside on the Island (Lekki, Ajah axis etc.)",
      "Strong sales and negotiation skills"
    ],
    apply: 'Send CV to: <a href="mailto:secomltd1@gmail.com">secomltd1@gmail.com</a> with subject "Field Sales Rep"'
  },
  {
    id: "production-head-water-production-ilupeju-2026",
    title: "Production Head – Water Production",
    date: "2026-05-23",
    location: "Ilupeju, Lagos",
    type: "Full-time",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "FMCG / Beverage Manufacturing",
    summary: "Lead and oversee all production operations from water treatment to final packaging in a bottling facility.",
    responsibilities: [
      "Lead end-to-end water production activities",
      "Ensure achievement of daily targets",
      "Monitor production efficiency and waste reduction",
      "Supervise water treatment and utility systems",
      "Enforce health and safety policies (GMP/HACCP)"
    ],
    requirements: [
      "B.Eng or HND in Mechanical, Chemical, or related engineering field",
      "7–10 years’ experience in beverage manufacturing",
      "At least 3 years in a production leadership role",
      "Strong knowledge of bottling operations"
    ],
    apply: 'Send CV to <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> using the Job Title as the subject (PHW14)'
  },
  {
    id: "sales-manager-tiles-lagos-2026",
    title: "Sales Manager – Tiles",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦300,000 – ₦400,000 + Incentives",
    deadline: "Not Specified",
    summary: "Experienced sales manager with strong tiles and building materials industry background to drive market expansion.",
    responsibilities: [
      "Develop and implement strategic sales plans",
      "Manage relationships with distributors and contractors",
      "Lead negotiations and contract agreements",
      "Drive showroom and field sales activities"
    ],
    requirements: [
      "Bachelor’s Degree in Marketing or related field",
      "5–10 years of sales experience in tiles/building materials",
      "Proven track record of exceeding targets",
      "Excellent negotiation skills"
    ],
    apply: 'Send CV to <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> with "Sales Manager – Tiles" as subject.'
  },
  {
    id: "area-sales-manager-asm-enugu-fmcg-2026",
    title: "Area Sales Manager (ASM)",
    date: "2026-05-23",
    location: "Enugu",
    type: "Full-time",
    salary: "Competitive + Incentives",
    deadline: "Not Specified",
    company: "FMCG Company",
    summary: "Drive sales growth and oversee region-wide distribution channels in Enugu.",
    responsibilities: [
      "Achieve sales and revenue targets for the region",
      "Manage distributors and retail channels",
      "Lead and motivate the field sales team",
      "Prepare sales reports and forecasts"
    ],
    requirements: [
      "Bachelor’s Degree in a related field",
      "3–5 years FMCG sales experience",
      "Strong communication and leadership skills"
    ],
    apply: 'Send CV to <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> with "ASM – Enugu" as subject.'
  },
  {
    id: "sales-executive-kano-automotive-2026",
    title: "Sales Executive",
    date: "2026-05-23",
    location: "Kano",
    type: "Full-time",
    salary: "₦250,000 – ₦350,000 Monthly",
    deadline: "Not Specified",
    company: "Automotive Team",
    summary: "Drive vehicle sales and build client relationships for an automotive company in Kano.",
    responsibilities: [
      "Conduct vehicle presentations and test drives",
      "Provide info on financing and warranties",
      "Meet and exceed monthly sales targets",
      "Maintain customer and sales records"
    ],
    requirements: [
      "Bachelor’s Degree in Business or related field",
      "Minimum of 3 years’ experience in automotive/motors sales",
      "Excellent negotiation and product knowledge",
      "Strong passion for automobiles"
    ],
    apply: 'Send CV to <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> using "Sales Executive – Kano" as subject.'
  },
  {
    id: "outdoor-sales-representative-lekki-ascentech-2026",
    title: "Outdoor Sales Representative",
    date: "2026-05-23",
    location: "Lekki, Lagos",
    type: "Full-time",
    salary: "₦300,000 + Commission",
    deadline: "Not Specified",
    summary: "Field sales role focused on lead generation and achieved revenue targets in Lekki axis.",
    responsibilities: [
      "Identify and develop new business opportunities",
      "Visit clients regularly to promote services",
      "Achieve and exceed sales targets",
      "Provide market feedback and competitor insights"
    ],
    requirements: [
      "Proven experience in sales or similar role",
      "Strong communication and negotiation skills",
      "Minimum of OND/HND/B.Sc.",
      "Self-motivated and field-ready"
    ],
    apply: 'Send CV to <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> using "Outdoor Sales Representative" as subject (OSR14)'
  },
  {
    id: "area-sales-manager-kogi-fmcg-2026",
    title: "Area Sales Manager",
    date: "2026-05-23",
    location: "Kogi",
    type: "Full-time",
    salary: "₦300,000 – ₦650,000 Monthly",
    deadline: "Not Specified",
    company: "FMCG Company",
    summary: "Oversee sales operations and drive revenue growth within the assigned territory in Kogi State.",
    responsibilities: [
      "Develop and implement sales strategies",
      "Manage and grow distributor relationships",
      "Supervise sales team to achieve performance goals",
      "Ensure product availability across territories"
    ],
    requirements: [
      "Bachelor’s degree in Marketing or Business",
      "Proven experience in sales, preferably in FMCG",
      "Strong leadership and account management skills",
      "Proficiency in Microsoft Office"
    ],
    apply: 'Send CV to <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> using "Area Sales Manager – Kogi" as subject.'
  },
  {
    id: "business-development-officer-jolaj-schneider-nigeria-2026",
    title: "Business Development Officer",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦250,000 Monthly",
    deadline: "Not Specified",
    company: "Jolaj/Schneider Nigeria",
    summary: "Drive expansion for Schneider writing instruments across retail and institutional channels in Nigeria.",
    responsibilities: [
      "Map and onboard distributors across retail chains",
      "Build and manage B2B pipeline (Banks, Schools, Government)",
      "Handle bulk/branded procurement proposals",
      "Manage POS visibility and trade events"
    ],
    requirements: [
      "Degree in Business or Marketing",
      "3–5 years in field sales (Stationery or FMCG preferred)",
      "Proven target achievement record",
      "Existing trade relationships in Nigeria"
    ],
    apply: 'Send CV + cover letter to <a href="mailto:cdchire1@gmail.com">cdchire1@gmail.com</a>'
  },
  {
    id: "sales-executive-real-estate-ikeja-2026",
    title: "Sales Executive (Female preferred)",
    date: "2026-05-23",
    location: "Ikeja, Lagos",
    type: "Full-time",
    salary: "₦250,000 Monthly + Commission",
    deadline: "2026-05-24",
    company: "Real Estate Client",
    summary: "Sales executive for high-ticket real estate sales with attractive commissions.",
    responsibilities: [
      "Drive property sales independently and jointly",
      "Manage client inquiries and viewings",
      "Close deals and meet monthly targets"
    ],
    requirements: [
      "2–4 years real estate sales experience",
      "Available for physical interview immediately",
      "Strong negotiation and persuasive skills"
    ],
    apply: 'Send CV via WhatsApp to <a href="https://wa.me/2348060782726">08060782726</a>'
  },
  {
    id: "content-creator-specialist-real-estate-ikeja-2026",
    title: "Content Creator Specialist (Female preferred)",
    date: "2026-05-23",
    location: "Ikeja, Lagos",
    type: "Full-time",
    salary: "₦200,000 Monthly",
    deadline: "2026-05-24",
    company: "Real Estate Client",
    summary: "Fluent storyteller needed to create engaging real estate content 3 days weekly from the office.",
    responsibilities: [
      "Create storytelling content for social media",
      "Shoot and edit marketing videos",
      "Manage brand voice across digital channels"
    ],
    requirements: [
      "1–3 years experience",
      "Fluent and excellent at storytelling",
      "Willing to work from office 3 days weekly"
    ],
    apply: 'Send CV via WhatsApp to <a href="https://wa.me/2348060782726">08060782726</a>'
  },
  {
    id: "domestic-staff-fadeyi-onipanu-lagos-2026",
    title: "Domestic Staff (Live-out Female)",
    date: "2026-05-23",
    location: "Fadeyi/Onipanu, Lagos",
    type: "Full-time",
    salary: "₦80,000 – ₦100,000 Monthly",
    deadline: "Not Specified",
    summary: "Live-out domestic staff for cleaning, laundry, and errands. Must live near Fadeyi/Onipanu axis.",
    responsibilities: [
      "Clean and arrange the house",
      "Handle laundry and errands",
      "Go to market for the client",
      "Look after kids on special occasions"
    ],
    requirements: [
      "Age range: 20 – 26 years",
      "Must live close to Onipanu or Fadeyi axis",
      "Hardworking and respectful",
      "Available Monday to Saturday"
    ],
    apply: 'Message via WhatsApp only to <a href="https://wa.me/2348083295414">08083295414</a>'
  },
  {
    id: "direct-sales-agent-apapa-banking-2026",
    title: "Direct Sales Agent",
    date: "2026-05-23",
    location: "Apapa, Lagos",
    type: "Full-time",
    salary: "₦115,000 Monthly Net",
    deadline: "Not Specified",
    company: "Lington & Bernie",
    summary: "Banking sales agent for retail banking services in Apapa axis.",
    responsibilities: [
      "Drive account opening and deposit mobilization",
      "Promote bank products to retail customers",
      "Meet daily sales and marketing targets"
    ],
    requirements: [
      "OND Minimum",
      "Banking or sales knowledge is an advantage",
      "Resident around Apapa"
    ],
    apply: 'Apply via: <a href="https://forms.gle/zK81UBrLTPP2V4KH7">https://forms.gle/zK81UBrLTPP2V4KH7</a>'
  },
  {
    id: "chief-commercial-officer-cco-bank-lagos-2026",
    title: "Chief Commercial Officer (CCO)",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "Highly Attractive",
    deadline: "Not Specified",
    company: "Lagos Bank",
    summary: "Senior leadership role to drive commercial growth, deposit mobilization, and loan portfolio expansion.",
    responsibilities: [
      "Lead commercial growth strategies",
      "Oversee deposit mobilization and customer acquisition",
      "Manage loan portfolio expansion across segments",
      "Drive revenue generation and commercial leadership"
    ],
    requirements: [
      "12–15 years experience in retail or MSME banking",
      "At least 5 years in senior leadership roles",
      "Strong background in Microfinance is preferred"
    ],
    apply: 'Apply here: <a href="https://forms.gle/KQToPFpoC8Y8Gfc6A">https://forms.gle/KQToPFpoC8Y8Gfc6A</a>'
  },
  {
    id: "accountant-iyana-ipaja-beverage-2026",
    title: "Accountant",
    date: "2026-05-23",
    location: "Iyana Ipaja / Alakuko, Lagos",
    type: "Full-time",
    salary: "₦150,000 Monthly Net",
    deadline: "Not Specified",
    summary: "Proactive Accountant to manage bookkeeping, payroll, and financial reporting.",
    responsibilities: [
      "Prepare financial records and accounts using bank statements",
      "Manage accounts payable and receivable",
      "Handle payroll and statutory deductions",
      "Reconcile bank statements daily"
    ],
    requirements: [
      "Bachelor’s degree in Accounting or Finance",
      "2–3 years relevant experience",
      "Proficiency in Excel and QuickBooks/Sage",
      "ICAN/ACCA in view is an advantage"
    ],
    apply: 'Send CV to: <a href="mailto:secomltd1@gmail.com">secomltd1@gmail.com</a>'
  },
  {
    id: "chief-growth-officer-technology-communication-2026",
    title: "Chief Growth Officer",
    date: "2026-05-23",
    location: "Gbagada, Lagos",
    type: "Full-time (Hybrid)",
    salary: "Negotiable",
    deadline: "Not Specified",
    summary: "Lead strategic growth initiatives combining technology innovation and communications.",
    responsibilities: [
      "Execute growth strategies across tech and communication solutions",
      "Drive customer acquisition across digital and enterprise channels",
      "Identify new business partnerships and market segments",
      "Optimize revenue growth and product performance"
    ],
    requirements: [
      "Bachelor’s degree in Business or Marketing",
      "4–6+ years of experience in growth/strategy in tech",
      "Proven record of scaling technology products",
      "Strong background in digital transformation"
    ],
    apply: 'Send CV to: <a href="mailto:recruitment@hazonholdings.com">recruitment@hazonholdings.com</a> using Job Title as subject.'
  },
  {
    id: "sales-attendant-shopfloor-magodo-2026",
    title: "Sales Attendant / Shopfloor Attendant (FMCG)",
    date: "2026-05-23",
    location: "Magodo, Shangisha",
    type: "Full-time",
    salary: "₦80,000 Monthly",
    deadline: "Not Specified",
    summary: "Proactive sales attendant for a retail outlet in Magodo. Female candidates preferred.",
    responsibilities: [
      "Welcome and assist customers on the floor",
      "Ensure shelves are well-stocked and arranged",
      "Monitor price tags and labels",
      "Assist in receiving and organizing stock"
    ],
    requirements: [
      "Minimum of SSCE/OND",
      "Good communication and interpersonal skills",
      "Punctual, responsible, and trustworthy",
      "Available for morning or afternoon shifts"
    ],
    apply: 'Send CV to <a href="mailto:admin@essentialsbygv.com">admin@essentialsbygv.com</a> using subject "Application for sales attendant/Shopfloor Attendant"'
  },
  {
    id: "business-development-officer-seedforce-lagos-2026",
    title: "Business Development Officer",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦120,000 Net + Commission",
    deadline: "Not Specified",
    company: "SeedForce",
    summary: "Target-driven role focusing on financial inclusion and field operations within community-based markets.",
    responsibilities: [
      "Drive financial inclusion in local communities",
      "Onboard clients into informal savings systems (Ajo/Esusu)",
      "Achieve field sales targets and manage collections"
    ],
    requirements: [
      "Experience in field operations or microfinance",
      "Strong understanding of informal savings systems",
      "Proactive and target-driven"
    ],
    apply: 'Apply here: <a href="https://jobs.cvviz.com/careerbuddy/job_82266_Business_Development_Officer">https://jobs.cvviz.com/careerbuddy/job_82266_Business_Development_Officer</a>'
  },
  {
    id: "account-support-officer-financial-institution-lagos-2026",
    title: "Account Support Officer",
    date: "2026-05-23",
    location: "Alaba / Ojo / Ilupeju, Lagos",
    type: "Full-time",
    salary: "₦150,000 Monthly",
    deadline: "Not Specified",
    company: "Financial Institution",
    summary: "Provide administrative and operational support to banking account opening and documentation processes.",
    responsibilities: [
      "Support account opening and KYC documentation",
      "Assist with reconciliation of records",
      "Respond to customer account enquiries",
      "Ensure compliance with banking policies"
    ],
    requirements: [
      "OND (Upper Credit only)",
      "Maximum age: 27 years",
      "Strong numerical and customer service skills",
      "Resident close to chosen location"
    ],
    apply: 'Apply via: <a href="https://forms.gle/ofDW7bK2hcfdQPSr8">https://forms.gle/ofDW7bK2hcfdQPSr8</a>'
  },
  {
    id: "card-experience-consultant-ilupeju-bank-2026",
    title: "Card Experience Consultant",
    date: "2026-05-23",
    location: "Ilupeju, Lagos",
    type: "Full-time",
    salary: "₦180,000 Monthly",
    deadline: "Not Specified",
    company: "Lagos Bank",
    summary: "Customer experience professional specialized in card services for a bank in Ilupeju.",
    responsibilities: [
      "Resolve customer complaints regarding cards efficiently",
      "Advise customers on card usage and security",
      "Maintain high standards of service excellence"
    ],
    requirements: [
      "BSC degree (No Third Class or Pass)",
      "Maximum age: 27 years",
      "Experience in banking or card services is a plus",
      "Must be willing to work in Ilupeju"
    ],
    apply: 'Apply via: <a href="https://forms.gle/VRneJASL4X8yAJsz7">https://forms.gle/VRneJASL4X8yAJsz7</a>'
  },
  {
    id: "credit-rehabilitation-officer-vi-bank-2026",
    title: "Credit Rehabilitation Officer",
    date: "2026-05-23",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    salary: "₦180,000 Monthly",
    deadline: "Not Specified",
    company: "Lagos Bank",
    summary: "Collection and recovery specialist to manage delinquent accounts and NPLs in VI.",
    responsibilities: [
      "Action accounts in terms of recovery strategies",
      "Institute recovery actions on NPL/written off accounts",
      "Engage stakeholders to maximize collections",
      "Maintain customer service standards during collections"
    ],
    requirements: [
      "BSC degree (No Third Class or Pass)",
      "Maximum age: 27 years",
      "Strong customer service and negotiation skills",
      "Strong attention to detail"
    ],
    apply: 'Apply via: <a href="https://forms.gle/UQSCXCNbYz6eTC5E9">https://forms.gle/UQSCXCNbYz6eTC5E9</a>'
  },
  {
    id: "marketing-executive-health-care-lagos-2026",
    title: "Marketing Executive",
    date: "2026-05-23",
    location: "Surulere / Ikeja, Lagos",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    company: "Radiology and Diagnostic Center",
    summary: "Develop and manage corporate marketing initiatives and drive business relationships with HMOs and corporate clients.",
    responsibilities: [
      "Execute corporate marketing strategies and campaigns",
      "Manage relationships with HMOs and institutional partners",
      "Promote diagnostic services through outreach and proposals",
      "Track campaign performance and marketing reports"
    ],
    requirements: [
      "Bachelor’s degree in Marketing or Business",
      "3-5 years relevant experience in healthcare/diagnostics",
      "Strong communication and presentation skills",
      "Proven record in B2B marketing"
    ],
    apply: 'Forward CV to <a href="mailto:aawosanya@icsoutsourcing.com">aawosanya@icsoutsourcing.com</a> using "Marketing Executive" as subject.'
  },
  {
    id: "cook-hospitality-qsr-lagos-2026",
    title: "Cook",
    date: "2026-05-23",
    location: "Lekki / Ogudu / Ikeja, Lagos",
    type: "Full-time",
    salary: "₦70,000 – ₦100,000 Monthly",
    deadline: "Not Specified",
    company: "Hospitality (QSR)",
    summary: "Skilled cook for a Quick Service Restaurant. Accommodation is available.",
    responsibilities: [
      "Prepare meals according to menu and standards",
      "Maintain kitchen hygiene and safety",
      "Handle food prep and stock management"
    ],
    requirements: [
      "SSCE/ND/NCE with 1-2 years experience",
      "Ability to communicate in English",
      "Punctual and hardworking"
    ],
    apply: 'Send CV to <a href="mailto:ogagajude10@gmail.com">ogagajude10@gmail.com</a> with "Cook" as the subject.'
  },
  {
    id: "deputy-manager-credit-sales-marketing-lekki-2026",
    title: "Deputy Manager / Assistant Manager – Credit Sales & Marketing",
    date: "2026-05-23",
    location: "Lekki, Lagos",
    type: "Full-time",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "Platform Finance",
    summary: "Senior professional with 15 years experience to lead credit sales strategy and revenue performance in a finance house.",
    responsibilities: [
      "Drive end-to-end credit sales strategy",
      "Market financial products to high-value clients",
      "Develop and maintain long-term partnerships",
      "Supervise credit onboarding and evaluation"
    ],
    requirements: [
      "Minimum of 15 years experience in credit sales within a financial institution",
      "Strong leadership and team management experience",
      "Deep understanding of credit products and risk assessment",
      "Must reside within or close to Lekki"
    ],
    apply: 'Send CV to <a href="mailto:Victoria.omokhoa@platformfinance.ng">Victoria.omokhoa@platformfinance.ng</a>'
  },
  {
    id: "credit-sales-marketing-executive-lekki-2026",
    title: "Credit Sales/Marketing Executive",
    date: "2026-05-23",
    location: "Lekki, Lagos",
    type: "Full-time",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "Platform Finance",
    summary: "Recruiting an executive with 3-5 years experience to drive credit sales in a finance house.",
    responsibilities: [
      "Drive credit sales and meet monthly targets",
      "Market financial products to new and existing customers",
      "Support credit onboarding processes"
    ],
    requirements: [
      "3–5 years experience in credit sales/marketing",
      "Background in a financial institution is mandatory",
      "Strong communication and negotiation skills",
      "Must reside within or close to Lekki"
    ],
    apply: 'Send CV to <a href="mailto:Victoria.omokhoa@platformfinance.ng">Victoria.omokhoa@platformfinance.ng</a>'
  },
  {
    id: "head-of-sales-credit-sales-marketing-lekki-2026",
    title: "Head of Sales (Credit Sales / Marketing)",
    date: "2026-05-23",
    location: "Lekki, Lagos",
    type: "Full-time",
    salary: "Negotiable",
    deadline: "Not Specified",
    company: "Platform Finance",
    summary: "Lead the sales function for a finance house, reporting directly to the MD. Strong leadership and credit exp required.",
    responsibilities: [
      "Lead and oversee the credit sales team to achieve targets",
      "Develop and implement effective sales strategies",
      "Manage long-term customer relationships",
      "Report directly to the MD on sales performance"
    ],
    requirements: [
      "3–5 years proven experience in credit sales (Finance institution mandatory)",
      "Strong leadership and team management skills",
      "Must reside within Lekki or its environs",
      "Proven ability to exceed sales targets"
    ],
    apply: 'Send CV to <a href="mailto:Victoria.omokhoa@platformfinance.ng">Victoria.omokhoa@platformfinance.ng</a>'
  },
  {
    id: "experienced-auditor-microfinance-lagos-mainland-2026",
    title: "Experienced Auditor",
    date: "2026-05-23",
    location: "Lagos Mainland",
    type: "Full-time",
    salary: "₦250,000 – Above (Negotiable)",
    deadline: "Not Specified",
    company: "Microfinance Institution",
    summary: "Senior Auditor with 6+ years in microfinance auditing to lead internal audits and strengthen controls. Accommodation provided.",
    responsibilities: [
      "Conduct internal audits of branch operations and loan disbursements",
      "Review internal controls, cash management, and asset quality",
      "Prepare audit reports and recommend corrective actions",
      "Ensure compliance with MFB policies and statutory requirements"
    ],
    requirements: [
      "6+ years in microfinance auditing",
      "Strong background in microfinance operations and loan portfolio review",
      "Knowledge of CBN compliance"
    ],
    apply: 'Send CV to: <a href="mailto:recruitmentguidedarrowsconsult@gmail.com">recruitmentguidedarrowsconsult@gmail.com</a>'
  },
  {
    id: "official-driver-ibadan-2026",
    title: "Official Driver",
    date: "2026-05-23",
    location: "Ibadan",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    summary: "Urgent need for an official driver in Ibadan. Proximity to Oke-Ado is an added advantage.",
    responsibilities: [
      "Safely transport staff/officials",
      "Conduct daily vehicle checks",
      "Follow traffic and safety regulations"
    ],
    requirements: [
      "Valid Driver's License",
      "Good knowledge of Ibadan routes",
      "Proximity to Oke-Ado is a plus"
    ],
    apply: 'Interested candidates should send their CVs to <a href="https://wa.me/2348170000667">08170000667</a> via WhatsApp only.'
  },
  {
    id: "female-front-desk-officer-customer-service-bogije-2026",
    title: "Female Front Desk Officer/Customer Service",
    date: "2026-05-23",
    location: "Bogije, Ibeju-Lekki, Lagos",
    type: "Full-time",
    salary: "₦200,000 Monthly",
    deadline: "Not Specified",
    summary: "Customer service role in Bogije. No accommodation; candidates must reside within Awoyaya-Màlete axis.",
    responsibilities: [
      "Welcome and assist visitors at the front desk",
      "Manage calls and enquiries",
      "Maintain office coordination and administrative tasks"
    ],
    requirements: [
      "Must reside within Awoyaya-Màlete axis",
      "Professional appearance and communication skills",
      "Available Monday to Friday"
    ],
    apply: 'Forward CV to <a href="tel:2347078195124">07078195124</a>'
  },
  {
    id: "corporate-driver-gm-lagos-island-2026",
    title: "Corporate Driver (GM – General Manager)",
    date: "2026-05-23",
    location: "Lagos Island, Lagos State",
    type: "Full-time",
    salary: "₦150,000 – ₦200,000 Monthly",
    deadline: "Not Specified",
    summary: "Experienced driver to provide dedicated support to the General Manager on Lagos Island.",
    responsibilities: [
      "Safely transport GM to official and personal appointments",
      "Maintain cleanliness and functionality of vehicle",
      "Ensure timely pick-up and drop-offs",
      "Keep accurate records of vehicle movement"
    ],
    requirements: [
      "Minimum of 5 years experience as Corporate or Executive Driver",
      "Valid driver's license with clean record",
      "Must reside on Lagos Island or environs",
      "High level of discretion and integrity"
    ],
    apply: 'Send CV to <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> using CORPORATE DRIVER-17 as subject.'
  },
  {
    id: "female-models-fashion-clothing-abijo-2026",
    title: "Female Models",
    date: "2026-05-23",
    location: "Abijo-Malete Axis, Lagos",
    type: "Contract",
    salary: "₦300,000 Fee",
    deadline: "Not Specified",
    company: "Fashion Clothing Store",
    summary: "Confident and stylish female models needed for a photoshoot campaign in Abijo area.",
    responsibilities: [
      "Participate in fashion photoshoot campaign",
      "Represent brand styles and outfits in front of camera",
      "Collaborate with photographers and stylists"
    ],
    requirements: [
      "Must reside within Abijo-Malete axis",
      "Confident, stylish, and camera-friendly",
      "Presentable appearance",
      "Available for scheduled shoot dates"
    ],
    apply: 'Send photos/portfolio and contact details to <a href="tel:2347078195124">07078195124</a>'
  },
  {
    id: "consumer-sales-officer-swift-networks-2026",
    title: "Consumer Sales Officer",
    date: "2026-05-23",
    location: "Lagos",
    type: "Full-time",
    salary: "₦200,000 – ₦350,000 Monthly",
    deadline: "2026-06-30",
    company: "Swift Networks Limited",
    summary: "Tele-sales role responsible for developing new business pipelines and achieving subscriber targets.",
    responsibilities: [
      "Attend to outbound sales enquiry calls and online chats",
      "Aggressively make cold calls to prospective customers",
      "Process online orders and follow up with generated leads",
      "Maintain customer relationships to enhance retention"
    ],
    requirements: [
      "Bachelor’s Degree (2:1) or HND (Upper Credit) in Marketing/Business",
      "1-4 years relevant work experience",
      "Excellent listening and negotiation skills",
      "Knowledge of CRM solutions"
    ],
    apply: 'Send Resumes and Cover Letter to: <a href="mailto:hr@swiftng.net">hr@swiftng.net</a> using "Consumer Sales Officer" as subject.'
  },
  {
    id: "senior-game-programmer-interface-master-2026",
    title: "Senior Game Programmer (Interface Master)",
    date: "2026-05-23",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    summary: "Translate system complexity into intuitive gameplay interfaces for the Millenia simulation.",
    responsibilities: [
      "Build UI/UX systems for simulation interaction",
      "Translate backend simulation data into visual gameplay",
      "Implement modular interface systems",
      "Ensure responsiveness between input and simulation state"
    ],
    requirements: [
      "Strong C++ (Unreal), C# (Unity), or high-level Rust rendering",
      "Experience building complex game interfaces",
      "Understanding of game loops and player interaction design",
      "Ability to abstract complex systems"
    ],
    apply: 'Send CV to <a href="mailto:Davidakinloluwa851@gmail.com">Davidakinloluwa851@gmail.com</a> or call <a href="tel:2348055830560">08055830560</a>'
  },
  {
    id: "head-of-operations-the-shield-millenia-2026",
    title: "Head of Operations (The Shield)",
    date: "2026-05-23",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    summary: "Handle all non-technical complexity so the engineering team can focus on execution at Millenia.",
    responsibilities: [
      "Corporate structuring (Delaware + Nigeria)",
      "Legal and compliance coordination",
      "Hiring pipeline management",
      "Financial tracking and internal operations"
    ],
    requirements: [
      "Experience in startup operations or scaling environments",
      "Strong understanding of legal/compliance structures",
      "High-level project and team management capability"
    ],
    apply: 'Send CV to <a href="mailto:Davidakinloluwa851@gmail.com">Davidakinloluwa851@gmail.com</a> or call <a href="tel:2348055830560">08055830560</a>'
  },
  {
    id: "community-social-manager-the-voice-millenia-2026",
    title: "Community / Social Manager (The Voice)",
    date: "2026-05-23",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    deadline: "Not Specified",
    summary: "Build and maintain the Founding Class ecosystem for the Millenia simulation project.",
    responsibilities: [
      "Manage Discord and community channels",
      "Execute 'Build in Public' strategy",
      "Create narrative-driven engagement",
      "Drive waitlist growth and retention"
    ],
    requirements: [
      "Deep understanding of gaming and internet culture",
      "Experience managing online communities",
      "Strong storytelling and communication skills"
    ],
    apply: 'Send CV to <a href="mailto:Davidakinloluwa851@gmail.com">Davidakinloluwa851@gmail.com</a> or call <a href="tel:2348055830560">08055830560</a>'
  },
  {
    id: "business-development-manager-opebi-real-estate-2026",
    title: "Business Development Manager",
    date: "2026-05-23",
    location: "Opebi, Lagos",
    type: "Full-time (Hybrid)",
    salary: "₦200,000 Monthly Gross + Commission",
    deadline: "2026-05-31",
    company: "Crystal Global",
    summary: "Identify and onboard new clients, investors, and partners for a real estate firm in Opebi.",
    responsibilities: [
      "Identify and onboard new clients and partners",
      "Build relationships with property owners and developers",
      "Structure entry points into client portfolios",
      "Maintain and grow key accounts"
    ],
    requirements: [
      "3-5 years in real estate sales/investment",
      "Experience structuring JVs or SPVs",
      "Hunter mindset with high resilience",
      "Knowledge of Nigerian property law"
    ],
    apply: 'Forward CV to <a href="mailto:crystalglobal001@gmail.com">crystalglobal001@gmail.com</a>'
  },
  {
    id: "content-resource-manager-opebi-real-estate-2026",
    title: "Content & Resource Manager",
    date: "2026-05-23",
    location: "Opebi, Lagos",
    type: "Full-time",
    salary: "₦150,000 Monthly Gross + Commission",
    deadline: "2026-05-31",
    company: "Crystal Global",
    summary: "Develop and execute a content strategy aligned with real estate asset creation and protection.",
    responsibilities: [
      "Develop content strategy for LinkedIn, brochures, and web",
      "Translate projects into compelling investment narratives",
      "Manage digital presence and brand consistency",
      "Track engagement and lead performance"
    ],
    requirements: [
      "B.Sc in Marketing/Mass Comm or related field",
      "2-4 years experience (1-2 if you've built personal brand)",
      "Hands-on with Canva, CapCut, WordPress, Google Analytics",
      "Curious and detail-obsessed"
    ],
    apply: 'Forward CV to <a href="mailto:crystalglobal001@gmail.com">crystalglobal001@gmail.com</a>'
  },
  {
    id: "clients-success-deal-coordinator-opebi-real-estate-2026",
    title: "Clients Success/Deal Coordinator",
    date: "2026-05-23",
    location: "Opebi, Lagos",
    type: "Full-time (Hybrid)",
    salary: "₦150,000 Monthly Gross + Commission",
    deadline: "2026-05-31",
    company: "Crystal Global",
    summary: "Coordinate client onboarding and deal timelines for a real estate firm in Opebi.",
    responsibilities: [
      "Coordinate client onboarding and KYC documentation",
      "Track and manage deal timelines and deliverables",
      "Liaise with internal sales, legal, and ops teams",
      "Ensure high levels of client satisfaction"
    ],
    requirements: [
      "B.Sc in Estate Management or Finance",
      "2-3 years experience in Real Estate BD or Investment",
      "Analytical and commercially aggressive",
      "Strong relationship-building skills"
    ],
    apply: 'Forward CV to <a href="mailto:crystalglobal001@gmail.com">crystalglobal001@gmail.com</a>'
  },
  {
    id: "personal-driver-vi-crystal-global-2026",
    title: "Personal Driver (Victoria Island)",
    date: "2026-05-23",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    salary: "Competitive",
    deadline: "2026-05-31",
    company: "Crystal Global Client",
    summary: "Professional driver needed for a client in VI. Must be safety-conscious and familiar with Lagos roads.",
    responsibilities: [
      "Safely transport client to appointments",
      "Conduct vehicle inspections and maintenance",
      "Perform errands as assigned"
    ],
    requirements: [
      "Valid Driver License",
      "Reside on Lagos Island (preferably VI)",
      "Age: 30-40 years",
      "Good knowledge of Lagos road networks"
    ],
    apply: 'Forward CV to <a href="mailto:crystalglobal001@gmail.com">crystalglobal001@gmail.com</a>'
  },
  {
    id: "superintendent-pharmacist-fortis-ibadan-2026",
    title: "Superintendent Pharmacist",
    date: "2026-05-23",
    location: "Apata, Ibadan",
    type: "Full-time",
    salary: "₦330,000 Monthly",
    deadline: "Not Specified",
    company: "Fortis Pharmacy",
    summary: "Superintendent Pharmacist needed for a pharmacy in Apata, Ibadan. Alternate weekend duty required.",
    responsibilities: [
      "Oversee clinical pharmacy operations",
      "Ensure regulatory compliance",
      "Counsel patients and manage stock"
    ],
    requirements: [
      "Registered Pharmacist with valid license",
      "Experienced in community pharmacy management",
      "Available for shift work"
    ],
    apply: 'Send CV to <a href="tel:2349082757578">09082757578</a> or email <a href="mailto:fortis.pharmacy.ng@gmail.com">fortis.pharmacy.ng@gmail.com</a>'
  },
  {
    id: "baker-lekki-phase-1-2026",
    title: "Baker",
    date: "2026-05-23",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    salary: "₦150,000 – ₦200,000 Monthly",
    deadline: "2026-06-22",
    summary: "Responsible for producing high-quality breads and pastries while ensuring consistency and food safety.",
    responsibilities: [
      "Prepare breads and pastries daily",
      "Accurately measure and scale ingredients",
      "Maintain kitchen hygiene standards",
      "Monitor baking processes and equipment"
    ],
    requirements: [
      "SSCE qualification",
      "Minimum of 3 years experience in baking",
      "Strong knowledge of dough fermentation",
      "Culinary Arts or Baking certification is an advantage"
    ],
    apply: 'Apply online here: <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8Yk_v-6zGv_kQ_uX8p_b6x9u8y_zY5v_z_x_u8y_zY5v_z_x/viewform">Application Form</a>'
  },
  {
    id: "waec-recruitment-nationwide-2026",
    title: "WAEC Recruitment 2026 (Multiple Staff Vacancies)",
    date: "2026-05-23",
    location: "Nationwide, Nigeria",
    type: "Full-time",
    salary: "Attractive",
    deadline: "Not Specified",
    company: "West African Examinations Council (WAEC)",
    summary: "WAEC is recruiting for multiple staff positions nationwide, including Examination Officers and Confidential Secretaries.",
    responsibilities: [
      "Varies based on role (General, Accounts, ICT, Audit)",
      "Support examination administration and processing",
      "Maintain records and secretarial duties"
    ],
    requirements: [
      "B.Sc/HND or ND depending on role",
      "NYSC completed/exempted",
      "Computer literacy required",
      "Maximum age: 40 years"
    ],
    apply: 'Apply here: <a href="https://Recruitment.waec.com.ng">Recruitment.waec.com.ng</a>'
  },
  {
    id: "customer-service-officer-lekki-lagos-2026",
    title: "Customer Service Officer",
    date: "2026-05-23",
    location: "Lekki, Lagos",
    type: "Full-time",
    salary: "₦200,000 – ₦250,000 Monthly",
    deadline: "2026-06-18",
    summary: "Handling customer complaints and troubleshooting issues in a fast-paced environment.",
    responsibilities: [
      "Handle customer complaints and troubleshooting",
      "Follow up with clients via phone and email",
      "Access databases for customer info",
      "Update customer records accurately"
    ],
    requirements: [
      "Proven customer service experience",
      "Excellent communication skills",
      "Proficiency in database usage",
      "Patient and problem-solving mindset"
    ],
    apply: 'Submit CV to: <a href="mailto:jobs.expert@yahoo.com">jobs.expert@yahoo.com</a> and cc: <a href="mailto:faith.okpara@juwonelectric.com">faith.okpara@juwonelectric.com</a> using "CS" as subject.'
  },
  {
    id: "dialysis-nurse-rencare-abuja-2026",
    title: "Dialysis Nurse",
    date: "2026-05-23",
    location: "Abuja",
    type: "Full-time",
    salary: "₦276,000 – ₦288,000 Monthly",
    deadline: "Not Specified",
    company: "Rencare",
    summary: "Nurse specialized in renal care and dialysis operations for a clinic in Abuja.",
    responsibilities: [
      "Operate dialysis machinery",
      "Provide patient care during renal treatments",
      "Monitor patient vitals and record progress"
    ],
    requirements: [
      "Degree, BNSC, or RN",
      "At least 2 years experience as a Dialysis Nurse",
      "Expertise in renal care is mandatory"
    ],
    apply: 'Send CV to <a href="mailto:Valora.advisoryltd@gmail.com">Valora.advisoryltd@gmail.com</a>'
  },
  {
    id: "senior-dialysis-nurse-rencare-abuja-2026",
    title: "Senior Dialysis Nurse",
    date: "2026-05-23",
    location: "Abuja",
    type: "Full-time",
    salary: "₦336,000 – ₦384,000 Monthly",
    deadline: "Not Specified",
    company: "Rencare",
    summary: "Senior nurse to manage dialysis operations and supervise nursing staff in Abuja.",
    responsibilities: [
      "Manage dialysis unit operations",
      "Supervise and mentor dialysis nurses",
      "Ensure high standards of renal patient care"
    ],
    requirements: [
      "Degree, BNSC, or RN",
      "At least 4 years experience as a Dialysis Nurse",
      "Experience managing nurses is required"
    ],
    apply: 'Send CV to <a href="mailto:Valora.advisoryltd@gmail.com">Valora.advisoryltd@gmail.com</a>'
  },
  {
    id: "customer-service-after-sale-manager-isolo-2026",
    title: "Customer Service / After Sale Manager",
    date: "2026-05-23",
    location: "Isolo, Lagos",
    type: "Full-time",
    salary: "₦200,000 – ₦400,000 Monthly",
    deadline: "2026-05-25",
    company: "MeWe Electronics",
    summary: "Experienced manager to oversee customer support and ensure excellent after-sales service delivery for electronics.",
    responsibilities: [
      "Supervise customer service and after-sales team",
      "Handle escalations and complex complaints",
      "Implement improvement strategies for satisfaction",
      "Train and mentor representatives"
    ],
    requirements: [
      "Minimum of 5 years experience in customer service management",
      "HND/B.Sc. in Business or related field",
      "Strong leadership and communication abilities",
      "Knowledge of electronics after-sales is a plus"
    ],
    apply: 'Send CV to: <a href="mailto:hrmarthameweelectronics@gmail.com">hrmarthameweelectronics@gmail.com</a> using Job Position as subject.'
  },
  {
    id: "business-development-manager-real-estate-mainland-lagos-2026",
    title: "Business Development Manager (Also a Successor Track to Head of Business)",
    date: "2026-05-22",
    location: "Mainland, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Strategic growth driver across all business units, with responsibility for business expansion, revenue growth, new market penetration, strategic partnerships, client acquisition, commercial positioning, and growth strategy execution.",
    responsibilities: [
      "Identify and penetrate new market sectors including: Manufacturing, Oil & Gas, Hospitality, Corporate Real Estate, Institutional Facilities and Industrial Estates.",
      "Develop growth strategies for all business units.",
      "Drive client acquisition and revenue expansion.",
      "Build strategic relationships with corporate organizations and institutional stakeholders.",
      "Identify emerging opportunities within the Nigerian real estate and facilities management landscape.",
      "Develop and execute annual business development plans.",
      "Prepare market intelligence reports and competitor analyses.",
      "Structure commercial proposals and bids.",
      "Support pricing strategies and profitability optimization.",
      "Lead negotiations for strategic transactions and service engagements.",
      "Strengthen the company’s market positioning as a premium legacy brand.",
      "Develop institutional relationships and industry visibility.",
      "Drive participation in strategic industry platforms and business networks.",
      "Support brand modernization while preserving legacy brand equity."
    ],
    requirements: [
      "Bachelor’s Degree in any of these: Estate Management, Engineering, Architecture, Building Technology, Business Administration, Economics or related field.",
      "MBA or relevant postgraduate qualifications are an advantage.",
      "Minimum 8–12 years progressive experience.",
      "At least 5 years in: Business development, Commercial leadership, Real estate services, Facilities management, Construction/project business, Infrastructure services.",
      "Preferred candidates may come from: Real Estate, Facilities Management, Construction, Corporate Real Estate Advisory, Property Services, Oil & Gas Support Services, Industrial Services."
    ],
    apply: 'To apply, kindly send your CV to <a href="mailto:humancapital@bluesteelsolutions.com.ng">humancapital@bluesteelsolutions.com.ng</a> with the role as the subject of the mail',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "animal-nutritionist-ibadan-2026",
    title: "Animal Nutritionist",
    date: "2026-05-22",
    location: "Ibadan",
    type: "Full-time",
    seniority: "Senior",
    company: "Reputable feed manufacturing company",
    summary: "Experienced and knowledgeable Animal Nutritionist with strong expertise in broiler poultry nutrition and feed formulation.",
    responsibilities: [
      "Develop and optimize broiler feed formulations",
      "Monitor feed quality and nutritional performance",
      "Conduct feed trials and performance evaluations",
      "Work closely with production and quality control teams",
      "Ensure cost-effective feed formulation without compromising quality",
      "Provide technical support on poultry nutrition and feed management"
    ],
    requirements: [
      "Minimum of 5 years’ experience in poultry nutrition, especially broiler production",
      "Strong knowledge of feed formulation and raw material evaluation",
      "Experience working with poultry and fish pelletizer plants is an added advantage",
      "Ability to optimize feed performance, cost, and productivity",
      "Good understanding of feed additives, premixes, and quality standards",
      "Strong analytical, reporting, and problem-solving skills",
      "Relevant qualification in Animal Nutrition, Animal Science, or related discipline"
    ],
    apply: 'Qualified and interested candidates should send their CV to: <a href="mailto:recruitmentplugwithchemmy@gmail.com">recruitmentplugwithchemmy@gmail.com</a>',
    salary: "Competitive",
    deadline: "2026-05-22"
  },
  {
    id: "feedmill-manager-ibadan-2026",
    title: "Feedmill Manager",
    date: "2026-05-22",
    location: "Ibadan",
    type: "Full-time",
    seniority: "Senior",
    company: "Reputable feed manufacturing company",
    summary: "Experienced and result-oriented Feedmill Manager with strong expertise in managing large poultry and fish pelletizer plants.",
    responsibilities: [
      "Oversee daily feedmill and pellet production operations",
      "Ensure efficient production planning and execution",
      "Maintain product quality and operational standards",
      "Supervise production and maintenance teams",
      "Minimize downtime and improve plant productivity",
      "Ensure compliance with safety and operational procedures"
    ],
    requirements: [
      "Minimum of 5 years’ experience running poultry & fish pelletizer plants",
      "Proven experience managing large poultry pellet production lines",
      "Strong technical knowledge of feedmill operations and machinery",
      "Ability to manage production targets, quality control, and plant efficiency",
      "Strong leadership, supervisory, and problem-solving skills",
      "Knowledge of maintenance coordination, safety, and operational best practices",
      "Relevant qualification in Animal Science, Mechanical Engineering, or related discipline is an added advantage"
    ],
    apply: 'Qualified and interested candidates should send their CV to: <a href="mailto:recruitmentplugwithchemmy@gmail.com">recruitmentplugwithchemmy@gmail.com</a>',
    salary: "₦1,000,000 Monthly",
    deadline: "2026-05-22"
  },
  {
    id: "talent-acquisition-specialist-recruiter-lekki-2026",
    title: "Talent Acquisition Specialist/ Recruiter",
    date: "2026-05-22",
    location: "Lekki Phase 1",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Seeking an experienced, smart, and proactive Talent Acquisition Specialist/Recruiter with 2-3 years of recruitment experience, available for immediate resumption.",
    responsibilities: [
      "Manage end-to-end recruitment processes.",
      "Source, screen, and interview candidates.",
      "Ensure a smooth and positive candidate experience.",
      "Collaborate with hiring managers to understand staffing needs."
    ],
    requirements: [
      "Must have at least 2-3 years experience in Recruitment",
      "Must have concluded NYSC",
      "Must be Smart and Proactive",
      "Should be available for immediate resumption"
    ],
    apply: 'Send CVs to <a href="https://wa.me/2349060977128">09060977128</a>',
    salary: "200k – 250k",
    deadline: "Not Specified"
  },
  {
    id: "qa-technician-jos-dairy-2026",
    title: "QA Technician",
    date: "2026-05-22",
    location: "Jos, Plateau State",
    type: "Full-time",
    seniority: "Junior",
    company: "Dairy Processing Operations",
    summary: "Seeking a detail-oriented and analytical QA Technician to support laboratory testing, quality control, and compliance activities within dairy processing operations.",
    responsibilities: [
      "Conduct sampling and analysis of raw materials, packaging materials, and finished products",
      "Perform routine microbiological and physicochemical analysis to ensure product quality",
      "Monitor hygiene and sanitation standards within the production environment",
      "Inspect bulk milk tanks and cold rooms to ensure cleanliness and compliance",
      "Monitor and record storage temperatures of products and raw milk",
      "Check delivery vehicle conditions, including cleanliness and temperature compliance (3–7°C)",
      "Calibrate laboratory equipment (e.g., pH meter) in line with SOPs",
      "Prepare reagents, culture media, and colorants for production processes",
      "Maintain cleanliness, sterilization, and proper organization of laboratory equipment and glassware",
      "Conduct in-process quality checks including weight control and coding/date verification",
      "Collect and analyze line samples for each production batch",
      "Inspect returned products and document findings",
      "Monitor sanitizer concentration (foot and boot dips)",
      "Maintain accurate documentation of all laboratory results and generate daily shift reports",
      "Recommend improvements for product quality and processing efficiency"
    ],
    requirements: [
      "Minimum of OND in Science-related field (Microbiology, Chemistry, Biochemistry, Food Science, etc.)",
      "Experience in FMCG or dairy processing is an added advantage",
      "Basic knowledge of laboratory procedures and quality control practices",
      "Understanding of GMP, hygiene, and food safety standards"
    ],
    apply: 'Suitable candidates send their CV to <a href="https://wa.me/2349169852721">09169852721</a> WhatsApp only before 26th of May 2026',
    salary: "Not Specified",
    deadline: "2026-05-26"
  },
  {
    id: "factory-maintenance-technician-jos-fmcg-2026",
    title: "Factory Maintenance Technician",
    date: "2026-05-22",
    location: "Jos, Plateau State",
    type: "Full-time",
    company: "Reputable FMCG manufacturing company",
    summary: "Responsible for troubleshooting and preventive maintenance in a fast-paced FMCG/manufacturing industry environment.",
    responsibilities: [
      "Perform troubleshooting and preventive maintenance on factory equipment.",
      "Work effectively in a fast-paced factory environment.",
      "Apply good troubleshooting and preventive maintenance skills."
    ],
    requirements: [
      "B.Eng/HND in Electrical/Electronics Engineering or related field",
      "Experience in FMCG/manufacturing industry maintenance operations is an added advantage",
      "Good troubleshooting and preventive maintenance skills",
      "Ability to work in a fast-paced factory environment"
    ],
    apply: 'Interested and qualified candidates should send their CV via WhatsApp only to: <a href="https://wa.me/2349169852721">09169852721</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "business-development-officer-lekki-briccs-2026-05-22",
    title: "Business Development Officer",
    date: "2026-05-22",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    company: "Briccs Int.",
    seniority: "Mid-Level",
    summary: "Drive revenue and market share for a telecommunications company through strategic business development.",
    responsibilities: [
      "Drive revenue and market share through strategic business development.",
      "Utilize Microsoft Office, especially Excel, for business tasks.",
      "Apply strong analytical and communication skills.",
      "Adapt quickly in a tech environment."
    ],
    requirements: [
      "Good First Degree (B.Sc.) or HND in Business, Marketing, or related field",
      "Minimum of 3 years relevant work experience in business development or sales",
      "Strong proficiency in Microsoft Office, especially Excel",
      "Strong analytical and communication skills",
      "Creative, adaptable, and quick to learn in a tech environment",
      "Multilingual ability is an added advantage",
      "Proximity to Lekki Phase 1 is essential"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:recruitments@briccsint.com">recruitments@briccsint.com</a>',
    salary: "Attractive",
    deadline: "2026-05-22"
  },
  {
    id: "accountant-lekki-briccs-2026-05-22",
    title: "Accountant",
    date: "2026-05-22",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    company: "Briccs Int.",
    seniority: "Mid-Level",
    summary: "Manage accounting functions for a telecommunications firm, ensuring analytical accuracy and problem-solving.",
    responsibilities: [
      "Manage accounting functions and ensure analytical accuracy.",
      "Perform financial record-keeping and reporting.",
      "Utilize Microsoft Office, especially Excel, for financial tasks.",
      "Apply strong analytical and problem-solving skills."
    ],
    requirements: [
      "Good First Degree (B.Sc.) or HND in Accounting or a related field",
      "Minimum of 3 years relevant work experience",
      "Student member of ICAN/ACCA or already chartered",
      "Strong proficiency in Microsoft Office, especially Excel",
      "Strong analytical and problem-solving skills",
      "High level of creativity and ability to learn quickly",
      "Multilingual ability is an added advantage",
      "Proximity to Lekki Phase 1 is essential"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:recruitments@briccsint.com">recruitments@briccsint.com</a>',
    salary: "Attractive",
    deadline: "2026-05-22"
  },
  {
    id: "relationship-officer-ikeja-financial-services-2026",
    title: "Relationship Officer",
    date: "2026-05-22",
    location: "Ikeja, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Financial Services Firm",
    summary: "Proactive Relationship Officer to grow and manage client portfolio, responsible for acquiring new clients, deepening existing relationships, and ensuring customer satisfaction while meeting sales targets.",
    responsibilities: [
      "Identify and onboard new individual and SME clients",
      "Build and maintain strong, long-term client relationships",
      "Cross-sell financial products and services to meet client needs",
      "Achieve monthly/quarterly sales and portfolio growth targets",
      "Provide excellent after-sales support and resolve client issues promptly",
      "Prepare reports on client activity and market trends"
    ],
    requirements: [
      "Bachelor’s degree in Marketing, Business Administration, Finance, or related field",
      "Minimum 3 years’ experience in relationship management, sales, or business development in financial services",
      "Proven track record of meeting/exceeding sales targets",
      "Strong negotiation, communication, and interpersonal skills",
      "Knowledge of financial products and the Lagos market is an advantage"
    ],
    apply: 'Send your CV to <a href="mailto:macaboresources@gmail.com">macaboresources@gmail.com</a> with the subject line: _Relationship Officer – Ikeja_. Or chat via WhatsApp on <a href="https://wa.me/2348100115082">08100115082</a>',
    salary: "₦250,000 – ₦300,000 base + target-based incentives",
    deadline: "Not Specified"
  },
  {
    id: "architect-project-manager-lagos-island-macaboresources-2026",
    title: "Architect",
    date: "2026-05-22",
    location: "Lagos Island, Lagos, Nigeria",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Client (via Macaboresources)",
    summary: "Experienced professional to join a team delivering high-quality residential & commercial projects in Lagos, focusing on architectural design.",
    responsibilities: [
      "Perform architectural design and planning for residential & commercial projects.",
      "Utilize AutoCAD, Revit, SketchUp for design tasks.",
      "Ensure compliance with Nigerian building codes and approval processes.",
      "Manage projects from concept to completion.",
      "Communicate effectively with clients and coordinate on-site activities."
    ],
    requirements: [
      "HND or BSc in Architecture",
      "3–4 years post-NYSC experience in architectural design",
      "Proficient in AutoCAD, Revit, SketchUp. AI knowledge is a plus",
      "Strong knowledge of Nigerian building codes & approval processes",
      "Ability to manage projects from concept to completion",
      "Good client communication & site coordination skills"
    ],
    apply: 'Send your CV to <a href="mailto:macaboresources@gmail.com">macaboresources@gmail.com</a> or WhatsApp <a href="https://wa.me/2348100115082">08100115082</a>',
    salary: "Competitive salary based on experience",
    deadline: "2026-05-26"
  },
  {
    id: "project-manager-lagos-island-macaboresources-2026",
    title: "Project Manager",
    date: "2026-05-22",
    location: "Lagos Island, Lagos, Nigeria",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Client (via Macaboresources)",
    summary: "Experienced professional to join a team delivering high-quality residential & commercial projects in Lagos, focusing on project management.",
    responsibilities: [
      "Manage residential & commercial projects from concept to completion.",
      "Utilize AutoCAD, Revit, SketchUp for project visualization.",
      "Ensure compliance with Nigerian building codes and approval processes.",
      "Coordinate project activities and resources effectively.",
      "Communicate effectively with clients and coordinate on-site activities."
    ],
    requirements: [
      "HND or BSc in Architecture",
      "3–4 years post-NYSC experience in project management",
      "Proficient in AutoCAD, Revit, SketchUp. AI knowledge is a plus",
      "Strong knowledge of Nigerian building codes & approval processes",
      "Ability to manage projects from concept to completion",
      "Good client communication & site coordination skills"
    ],
    apply: 'Send your CV to <a href="mailto:macaboresources@gmail.com">macaboresources@gmail.com</a> or WhatsApp <a href="https://wa.me/2348100115082">08100115082</a>',
    salary: "Competitive salary based on experience",
    deadline: "2026-05-26"
  },
  {
    id: "dispatch-rider-lagos-beuxmarkethub-2026",
    title: "Dispatch Rider",
    date: "2026-05-22",
    location: "Lagos, Nigeria",
    type: "Full-time",
    seniority: "Junior",
    company: "Beuxmarkethub",
    summary: "Seeking a reliable, honest, and hardworking Dispatch Rider to join a fast-growing logistics team, with excellent knowledge of Lagos roads and commitment to safe, timely deliveries.",
    responsibilities: [
      "Ensure safe, secure, and timely delivery of customer orders across Lagos.",
      "Handle the assigned motorbike with utmost care and ensure routine maintenance is reported early.",
      "Maintain professional and polite communication with clients during drop-offs.",
      "Reconcile daily deliveries and payments accurately."
    ],
    requirements: [
      "Minimum of 2 years of proven experience as a dispatch rider in Lagos.",
      "Must possess a valid Rider’s Permit / Driver’s License.",
      "Excellent knowledge of Lagos mainland and island routes, traffic navigation, and shortcuts.",
      "Ability to use smart devices, and communicate politely with customers.",
      "Must be able to provide reliable guarantors upon request."
    ],
    apply: 'Interested and qualified candidates should send their updated CV to: <a href="mailto:Beuxmarkethub@gmail.com">Beuxmarkethub@gmail.com</a>',
    salary: "₦90,000 monthly",
    deadline: "Not Specified"
  },
  {
    id: "junior-team-lead-ibadan-bat-2026",
    title: "Junior Team Lead",
    date: "2026-05-22",
    location: "Ibadan",
    type: "Full-time",
    seniority: "Junior",
    company: "BAT",
    summary: "Seeking a Junior Team Lead with a background in electrical/mechanical engineering and manufacturing process knowledge to join BAT in Ibadan.",
    responsibilities: [
      "Lead and supervise a team in a manufacturing environment.",
      "Apply knowledge of manufacturing processes.",
      "Utilize strong interpersonal and organizational skills.",
      "Contribute to problem-solving and operational efficiency."
    ],
    requirements: [
      "Bachelor’s degree in electrical/mechanical engineering and maximum 2-3 years’ experience.",
      "HND or solid relevant experience.",
      "Proven knowledge of manufacturing process.",
      "Strong interpersonal and organizational skills.",
      "Strong analytical skills.",
      "Ability to work in Excel and other computer-related systems."
    ],
    apply: '<a href="https://careers.bat.com/en/job/-/-/1045/35747569728">https://careers.bat.com/en/job/-/-/1045/35747569728</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "customer-service-graduate-trainees-auto-spare-parts-lagos-2026",
    title: "Customer Service Graduate Trainees (Auto-Spare Parts)",
    date: "2026-05-22",
    location: "Lagos (Surulere)",
    type: "Full-time",
    seniority: "Junior",
    company: "Dunn & Braxton",
    summary: "Seeking graduate trainees for customer service in the auto-spare parts industry, focusing on strong communication and problem-solving skills.",
    responsibilities: [
      "Provide excellent customer service to clients in the auto-spare parts sector.",
      "Handle customer inquiries and resolve issues effectively.",
      "Utilize strong communication and interpersonal skills.",
      "Support sales and administrative tasks as needed."
    ],
    requirements: [
      "BSc/HND in any relevant discipline",
      "0–1 year experience in customer service or related role",
      "Strong communication and interpersonal skills",
      "Good problem-solving and customer handling ability",
      "Proficiency in Microsoft Office is an added advantage",
      "Candidates must reside in or around Surulere and its environs"
    ],
    apply: '<a href="https://dunnandbraxton.zohorecruit.com/jobs/Careers/595610000015822017/Customer-Service-Graduate-Trainees-Auto-Spare-Parts">https://dunnandbraxton.zohorecruit.com/jobs/Careers/595610000015822017/Customer-Service-Graduate-Trainees-Auto-Spare-Parts</a>',
    salary: "N120k – N150k monthly + other benefits",
    deadline: "Not Specified"
  },
  {
    id: "mechanical-manager-ogun-flexfilms-2026",
    title: "Mechanical Manager",
    date: "2026-05-22",
    location: "Ogun",
    type: "Full-time",
    company: "FlexFilms",
    summary: "Responsible for preventive maintenance, attending and planning shutdown activities, and planning of inventory of spares.",
    responsibilities: [
      "Preventive maintenance",
      "Able to do why why analysis",
      "Attending and planning shutdown activities",
      "Planning of inventory of spares"
    ],
    requirements: [
      "Candidates should possess relevant qualifications",
      "Knowledgeable in the use computer.",
      "Must be Responsible, Honest and proper communication."
    ],
    apply: 'Interested and qualified canddiates should send their CV to: <a href="mailto:careeratflexfilms@gmail.com">careeratflexfilms@gmail.com</a> using the Job Title as the subject of the email.',
    salary: "Not Specified",
    deadline: "2026-06-30"
  },
  {
    id: "mechanical-technician-abeokuta-may-baker-2026-05-22",
    title: "Mechanical Technician",
    date: "2026-05-22",
    location: "Abeokuta, Ogun",
    type: "Full time",
    company: "May & Baker Nigeria Plc",
    summary: "Responsible for the maintenance of production equipment, water bottling plant, and conducting periodic checks as specified in the Standard Operating Procedure.",
    responsibilities: [
      "The incumbent will be responsible for the maintenance of the production equipment, water bottling plant,",
      "Conducting periodic checks as specified in the Standard Operating Procedure."
    ],
    requirements: [
      "Applicants must possess an OND in Mechanical Engineering",
      "Minimum 3 years’ experience, preferably from a water bottling company"
    ],
    apply: 'Interested and qualified candidates should forward their CV to: <a href="mailto:careers@may-bakerng.com">careers@may-bakerng.com</a> using the position as subject of email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "power-bi-developer-data-analyst-remote-2026",
    title: "Power BI Developer / Data Analyst",
    date: "2026-05-22",
    location: "Remote",
    type: "Full-Time",
    seniority: "Mid-Senior",
    summary: "Seeking a highly skilled Power BI Developer with strong backend development and data analysis experience to join our team remotely. The ideal candidate will be responsible for designing, developing, and maintaining business intelligence solutions, transforming raw data into meaningful insights, and supporting data-driven decision-making across the organization.",
    responsibilities: [
      "Design, develop, and maintain interactive dashboards and reports using Power BI.",
      "Gather, clean, analyze, and interpret large datasets from multiple sources.",
      "Develop and manage backend data structures and database integrations.",
      "Build and optimize ETL processes for efficient data flow and reporting.",
      "Collaborate with stakeholders to understand reporting and analytics requirements.",
      "Create data models and implement DAX calculations for advanced reporting.",
      "Monitor data accuracy, integrity, and consistency across systems.",
      "Develop automated reporting solutions and business intelligence frameworks.",
      "Work with APIs and backend services to integrate data into reporting systems.",
      "Provide actionable insights and recommendations based on data analysis.",
      "Troubleshoot and resolve data-related and reporting issues."
    ],
    requirements: [
      "Minimum of 3–5 years experience in Power BI development and data analysis.",
      "Strong backend development experience.",
      "Proficiency in Power BI, DAX, Power Query, and data visualization techniques.",
      "Strong knowledge of SQL, relational databases, and data warehousing.",
      "Experience working with APIs and backend integrations.",
      "Proficiency in Python, C#, Node.js, or other backend technologies is an added advantage.",
      "Strong analytical and problem-solving skills.",
      "Excellent communication and reporting skills.",
      "Ability to work independently in a remote environment.",
      "Experience with cloud platforms such as Azure or AWS.",
      "Knowledge of ETL tools and data pipeline development.",
      "Experience working with large datasets and business intelligence systems."
    ],
    apply: 'Interested and qualified candidates should send their CVs to: <a href="mailto:Resume@talentforgesolutions.com.ng">Resume@talentforgesolutions.com.ng</a>',
    salary: "₦500,000 Monthly",
    deadline: "Not Specified"
  },
  {
    id: "tech-support-officer-healthcare-lagos-2026",
    title: "Tech Support Officer/Engineer",
    date: "2026-05-22",
    location: "Lagos State",
    type: "Full-time",
    company: "Reputable and well-known organisation in the healthcare sector",
    summary: "Responsible for the installation, maintenance, and troubleshooting of medical equipment in the healthcare sector.",
    responsibilities: [
      "Installation, maintenance, and troubleshooting of medical equipment."
    ],
    requirements: [
      "Candidate must have good communication and technical problem-solving skills.",
      "Ability to respond to emergency equipment breakdowns",
      "Willingness to travel for installations and support",
      "Basic computer proficiency",
      "Understanding of healthcare compliance standards",
      "Ability to train end users on equipment operation",
      "HND/B.Eng./B.Sc. in Biomedical Engineering, Electrical/Electronics Engineering, or related discipline.",
      "This role is open to male candidates as part of the organisation’s commitment to gender balance within the workforce."
    ],
    apply: 'Qualified and interested candidates should send their CV to: <a href="mailto:info.mycareermatters@gmail.com">info.mycareermatters@gmail.com</a> Subject of the Email: Tech Support Officer',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "head-hseq-oil-gas-lagos-2026",
    title: "Head, Health, Safety, Environment & Quality (HSEQ)",
    date: "2026-05-22",
    location: "Island Lagos, Nigeria",
    type: "Full-time",
    seniority: "Senior",
    company: "Not Specified",
    summary: "Experienced and strategic leader to drive the organization’s HSEQ culture, compliance, and continuous improvement initiatives in the Oil and Gas/Engineering industry.",
    responsibilities: [
      "Develop and implement HSEQ strategies, policies, and management systems",
      "Ensure compliance with regulatory and industry standards",
      "Lead risk assessments, audits, inspections, and incident investigations",
      "Drive continuous improvement in safety, quality, and operational performance",
      "Provide leadership, coaching, and technical guidance across the organization",
      "Prepare and present HSEQ performance reports to management"
    ],
    requirements: [
      "Minimum of 15 years’ experience in a similar role",
      "At least 5 years’ experience in Oil & Gas, Engineering, or Energy sector",
      "Strong knowledge of ISO 9001, 14001 & 45001 standards",
      "Proven leadership and stakeholder management skills",
      "Excellent communication, analytical, and project management skills"
    ],
    apply: 'Click on this link to apply: <a href="https://lnkd.in/eVhW49_n">https://lnkd.in/eVhW49_n</a>',
    salary: "Over N5,000,000 monthly net",
    deadline: "Not Specified"
  },
  {
    id: "quality-control-officer-water-treatment-allflavors-lagos-2026",
    title: "Quality Control Officer (Water Treatment)",
    date: "2026-05-22",
    location: "Lagos",
    type: "Full-time",
    company: "AllFlavors Supreme Foods",
    summary: "Responsible for quality control, preferably in water treatment or food manufacturing, ensuring sound knowledge of water treatment processes and laboratory testing procedures.",
    responsibilities: [
      "Conduct quality control checks, preferably in water treatment or food manufacturing.",
      "Ensure adherence to water treatment processes and laboratory testing procedures.",
      "Apply knowledge of HACCP, GMP, and food safety management systems.",
      "Maintain accurate documentation and analytical records."
    ],
    requirements: [
      "Bachelor’s Degree or HND in Microbiology, Biochemistry, Chemistry, Food Science and Technology, Industrial Chemistry, or a related discipline.",
      "Minimum of 2 years’ experience in quality control, preferably in water treatment or food manufacturing.",
      "Sound knowledge of water treatment processes and laboratory testing procedures.",
      "Familiarity with HACCP, GMP, and food safety management systems.",
      "Strong analytical and documentation skills.",
      "Proficiency in Microsoft Office applications."
    ],
    apply: 'Send CV to: <a href="mailto:qc@allflavors.odoo.com">qc@allflavors.odoo.com</a> using “Quality Control Officer (Water Treatment)” as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "electronics-instrumentation-engineer-ogun-flexfilms-2026",
    title: "Electronics & Instrumentation Engineer",
    date: "2026-05-22",
    location: "Ogun",
    type: "Full-time",
    company: "FlexFilms",
    summary: "Responsible for preventive maintenance, daily planning and execution, team management, and maintenance/troubleshooting of various industrial equipment including motors, PLCs, drives, and sensors.",
    responsibilities: [
      "Preventive maintenance",
      "Documentation",
      "Daily planning and execution",
      "Team management",
      "Maintenance of all kind of motor-AC/DC/SEMO/ cranes and forklift",
      "Maintenance and troubleshooting of all industrial equipment’s like: PLC, Drive, Temp sensor, Pressure sensor, Heater, Motor, Encoding, Different types of sensors, Hydraulic and pneumatic system Etc."
    ],
    requirements: [
      "Candidates should possess relevant qualifications",
      "Must knowledge of siemens PLC and drivers",
      "Knowledge of preventive/predictive/Target base and breakdown maintenance, planning and activities."
    ],
    apply: 'Interested and qualified canddiates should send their CV to: <a href="mailto:careeratflexfilms@gmail.com">careeratflexfilms@gmail.com</a> using the Job Title as the subject of the email.',
    salary: "N500,000 – N750,000 / Month.",
    deadline: "2026-06-30"
  },
  {
    id: "management-trainee-sims-nigeria-vi-lagos-2026",
    title: "Management Trainee",
    date: "2026-05-21",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "SIMS Nigeria Limited",
    summary: "SIMS Nigeria Limited is seeking high-potential graduates for its Management Trainee programme, focusing on operations, customer service, and business development in the consumer electronics and retail industry.",
    responsibilities: [
      "Support operations, customer service, and sales support functions",
      "Assist in administrative and business development tasks",
      "Participate in leadership development activities",
      "Adapt to changing business needs in a fast-paced environment"
    ],
    requirements: [
      "Minimum of a MSC in Operations Support or MBA from a recognized university",
      "3-4 years of relevant experience in operations, customer service, sales support, administration, or business development within the consumer electronics, retail, or related industry",
      "Strong analytical, communication, and problem-solving skills",
      "Proficiency in Microsoft Office applications, especially Excel and PowerPoint",
      "Ability to multitask, work in a fast-paced environment, and adapt to changing business needs",
      "Demonstrated leadership potential and willingness to learn",
      "Not older than 33 years of age"
    ],
    apply: 'Send CV to: <a href="mailto:employment@simsng.com">employment@simsng.com</a> using the Job Title as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "executive-assistant-healthcare-vi-lagos-2026",
    title: "Executive Assistant",
    date: "2026-05-21",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Leading Healthcare and Clinical Services Provider",
    summary: "Provide high-level administrative support to senior leadership in a leading healthcare and clinical services organization.",
    responsibilities: [
      "Provide comprehensive administrative support to senior management",
      "Manage executive calendars and schedule appointments",
      "Coordinate travel and logistics arrangements",
      "Handle confidential information with discretion",
      "Liaise with internal and external stakeholders"
    ],
    requirements: [
      "Minimum of B.Sc. in any related field",
      "3–5 years experience as an Executive Assistant or similar role",
      "Strong organizational and communication skills",
      "High level of discretion and attention to detail",
      "Experience in healthcare is an added advantage"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://bit.ly/ExecutiveAssistantt">Click here to apply</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "front-desk-officer-mtmas-consulting-lekki-2026",
    title: "Front Desk Officer",
    date: "2026-05-21",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "MTMAS Consultancy Agency",
    summary: "MTMAS Consultancy Agency is urgently hiring a professional Front Desk Officer to serve as the first point of contact, manage communications, and support administrative functions.",
    responsibilities: [
      "Welcome and attend to clients, visitors, and guests with warmth and professionalism",
      "Manage incoming phone calls, emails, and correspondence efficiently",
      "Handle front office operations including scheduling, record keeping, and filing",
      "Maintain a clean and organized reception area",
      "Provide excellent customer service by addressing inquiries and resolving issues promptly",
      "Support administrative functions and liaise with internal departments as needed",
      "Utilize Microsoft Office tools to prepare reports, manage documents, and update records"
    ],
    requirements: [
      "Minimum of B.Sc. in any relevant field",
      "2–3 years proven experience as a Front Desk Officer, Receptionist, or similar role",
      "Excellent fluency in spoken and written English",
      "Strong knowledge of Microsoft Office Suite (Word, Excel, Outlook, PowerPoint)",
      "Exceptional interpersonal and customer service skills",
      "Bubbly, cheerful, and welcoming personality",
      "Ability to multitask and work under minimal supervision",
      "Proximity to Lekki Phase 1 is very important"
    ],
    apply: 'Qualified and Interested candidates should send CV to <a href="mailto:mtmasconsulting@gmail.com">mtmasconsulting@gmail.com</a> indicating the subject. Telegram MTMAS office immediately: 07045003694, 09033254476',
    salary: "₦200,000 monthly",
    deadline: "Not Specified"
  },
  {
    id: "senior-accountant-zhanique-consulting-lekki-2026",
    title: "Senior Accountant",
    date: "2026-05-21",
    location: "Lekki, Lagos",
    type: "Full-time / Onsite",
    seniority: "Senior",
    company: "Zhanique Consulting (for a client in Oil & Gas)",
    summary: "Oversee accounting operations, financial reporting, compliance, and internal controls within the oil and gas downstream sector for a client of Zhanique Consulting.",
    responsibilities: [
      "Prepare and review monthly, quarterly, and annual financial statements and reports",
      "Ensure accuracy and integrity of all accounting records and financial transactions",
      "Monitor and manage the company’s general ledger and accounting systems",
      "Analyze financial data and provide insights to support management decisions",
      "Prepare cash flow reports and monitor company financial performance",
      "Supervise accounts payable and receivable processes",
      "Ensure timely vendor payments and proper invoicing procedures",
      "Monitor outstanding receivables and support debt recovery processes",
      "Review and approve bank reconciliations and resolve discrepancies promptly",
      "Maintain strong internal financial controls and accounting procedures",
      "Ensure compliance with Nigerian financial regulations, tax laws, and company policies",
      "Prepare and oversee VAT, WHT, PAYE, and other statutory filings",
      "Liaise with external auditors, tax consultants, and regulatory authorities",
      "Assist management with budgeting and financial planning",
      "Monitor operational expenses and recommend cost-control measures",
      "Supervise and guide junior accounting staff"
    ],
    requirements: [
      "Bachelor’s degree in Accounting, Finance, Economics, or related field",
      "Minimum of 4–7 years accounting experience",
      "Professional certification such as ICAN, ACCA, or ACA is preferred",
      "Strong understanding of financial reporting standards and Nigerian tax regulations",
      "Proficiency in Microsoft Excel and accounting softwares",
      "Experience in the oil & gas or downstream sector is an added advantage"
    ],
    apply: '<a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAV5mHA9UQVFaVUpFUTVFRjZCMFRHVE5XQkxNWUdQRy4u">Click here to apply online</a>',
    salary: "₦700,000 - ₦800,000 Monthly",
    deadline: "Not Specified"
  },
  {
    id: "it-administrator-carloha-nigeria-lagos-2026",
    title: "IT Administrator",
    date: "2026-05-21",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    company: "Carloha Nigeria Limited",
    summary: "Manage organization’s IT infrastructure, ensuring system availability, performance, and security for the exclusive distributor of Chery Automobile in Nigeria.",
    responsibilities: [
      "Maintain and troubleshoot office, showroom, and factory networks",
      "Ensure stability of primary and backup networks",
      "Respond to and resolve network incidents in a timely manner",
      "Register and maintain records of all company IT assets",
      "Track the full lifecycle of IT assets (allocation, changes, repairs, disposal)",
      "Perform daily maintenance of computers, printers, surveillance systems, and network equipment",
      "Support IT system development and optimization led by the China IT team",
      "Handle local application-level troubleshooting and escalate issues to the China IT team",
      "Conduct IT system usage training and onboarding for new employees",
      "Manage basic network and information security controls and account permissions",
      "Perform data backup management and basic recovery support",
      "Coordinate with IT equipment and service vendors",
      "Identify opportunities for IT-driven process improvement"
    ],
    requirements: [
      "Bachelor’s degree in Information Technology, Computer Science, or a related field",
      "5-6 years of experience in IT administration or a similar role",
      "Experience with network administration and security protocols",
      "Proficiency in operating systems (Windows, Linux, macOS)",
      "Familiarity with networking concepts (TCP/IP, DNS, DHCP)",
      "Knowledge of cloud services (e.g., AWS, Azure) is a plus",
      "Relevant IT certifications (e.g., CompTIA Network+, Cisco CCNA or Huawei HCIA)",
      "Prior experience in a cross-cultural or multinational work environment is highly desirable"
    ],
    apply: '<a href="https://forms.gle/Ejcxb2JAbNxyohHo7">Click here to apply online</a>',
    salary: "Highly competitive + performance-based bonuses",
    deadline: "2026-06-08"
  },
  {
    id: "nysc-motion-graphic-design-intern-credo-advisory-abuja-2026",
    title: "NYSC Motion & Graphic Design Intern",
    date: "2026-05-21",
    location: "Abuja",
    type: "Internship",
    seniority: "Junior",
    company: "Credo Advisory",
    summary: "Creative internship for a serving NYSC member to support Credo Advisory with motion and graphic design projects.",
    responsibilities: [
      "Assist in creating motion graphics and visual designs",
      "Collaborate with the communications team on branding projects",
      "Contribute to creative brainstorming and content development"
    ],
    requirements: [
      "Working knowledge of Adobe Creative Suite, Canva, Capcut, etc.",
      "A portfolio that shows how you think",
      "Strong communication and a collaborative spirit",
      "Must be a currently serving NYSC member in Abuja"
    ],
    apply: 'Send CV to: <a href="mailto:info@credoadvisory.ng">info@credoadvisory.ng</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "restaurant-supervisor-jsix-group-lagos-2026",
    title: "Restaurant Supervisor",
    date: "2026-05-21",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "J-Six Group",
    summary: "Oversee operations in a fast food restaurant, manage teams, and ensure service excellence for J-Six Group.",
    responsibilities: [
      "Supervise and coordinate all production activities within the restaurant",
      "Manage production staff, assign duties, and enforce discipline",
      "Utilize Excel and iClass for restaurant management tasks",
      "Delegate tasks and follow through until completion",
      "Ensure adherence to NAFDAC and hygiene standards"
    ],
    requirements: [
      "A tertiary Degree is required",
      "Minimum of 1 year of work experience",
      "Use of Excel and knowledge of iClass will be an added advantage",
      "Must have worked in a fast food restaurant as a team lead or supervisor",
      "Ability to delegate tasks and follow through until completion",
      "Proactivity and the use of initiative",
      "Must be flexible to take on any shift (morning and afternoon)",
      "Proximity to location is required"
    ],
    apply: 'Send CV to: <a href="mailto:recruitment@jsixgroup.com">recruitment@jsixgroup.com</a> using the job title and preferred location as the subject of the email.',
    salary: "₦100,000 net monthly + Staff Lunch + HMO",
    deadline: "Not Specified"
  },
  {
    id: "hr-administrative-officer-falomo-abuja-2026",
    title: "HR & Administrative Officer",
    date: "2026-05-21",
    location: "Falomo, Lagos and Abuja",
    type: "Full-time",
    seniority: "Junior",
    summary: "Support HR and administrative functions, including recruitment, onboarding, payroll processing, and office operations.",
    responsibilities: [
      "Coordinate recruitment, onboarding, and employee documentation",
      "Support payroll processing, attendance tracking, and leave administration",
      "Handle basic employee relations and HR records",
      "Oversee daily office operations and administrative supplies"
    ],
    requirements: [
      "HND/BSc in Human Resources, Business Administration, or related discipline",
      "1–2 years relevant HR/Admin experience",
      "Strong communication and Microsoft Office skills",
      "Must reside close to Falomo (for Lagos candidates)"
    ],
    apply: '<a href="https://forms.gle/hC4czeM1rC18pZgw7">Click here to apply online</a>',
    salary: "₦150,000",
    deadline: "Not Specified"
  },
  {
    id: "junior-legal-officer-tetra-maritime-apapa-2026",
    title: "Junior Legal Officer",
    date: "2026-05-21",
    location: "Apapa, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Tetra Maritime",
    summary: "Junior legal role at Tetra Maritime focusing on company secretarial, statutory filings, compliance, and corporate documentation in the shipping and commodities sector.",
    responsibilities: [
      "Manage company secretarial duties and statutory filings",
      "Prepare corporate authorities and board documentation",
      "Handle KYC and compliance processes",
      "Assist with cross-border corporate changes and restructurings",
      "Interact with ship registries or overseas registries",
      "Support joint ventures and other corporate matters"
    ],
    requirements: [
      "At least 1 year’s experience in a legal, compliance, corporate services, or financial services environment",
      "Experience in shipping, commodities, finance, or SPV-heavy groups is an advantage",
      "Exposure to statutory filings and corporate registry submission",
      "Knowledge of KYC and compliance procedures",
      "Ability to handle corporate authorities and board documentation"
    ],
    apply: '<a href="https://jobs.workable.com/view/iA4pcJ97meidhpejU4MpcU/junior-legal-officer-in-apapa-at-tetra-maritime">Apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "payroll-specialist-hr-analyst-mowe-ogun-2026",
    title: "Payroll Specialist / HR Analyst",
    date: "2026-05-21",
    location: "Mowe, Ogun",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Various companies are hiring a Payroll Specialist / HR Analyst in Mowe, Ogun, to manage payroll, process payments, ensure tax and benefits compliance, build HR dashboards, and analyze HR metrics.",
    responsibilities: [
      "Collect and maintain information on each employee’s working hours",
      "Determine payroll amounts, factoring in any overtime or bonuses",
      "Prepare payments to be sent to employees in a timely manner",
      "Process payments and checks",
      "Ensure that employee taxes and benefits are processed correctly",
      "Confirm suggested payments with senior management",
      "Answer any employee inquiries about payroll",
      "Work to increase payroll service performance",
      "Prepare payroll reports for upper management",
      "Data Reporting & Visualization: Build and maintain HR dashboards to track key performance indicators (KPIs) like headcount, diversity, and turnover",
      "Metrics Tracking: Analyze recruiting metrics (e.g., time-to-fill, cost-per-hire) and workforce trends to forecast hiring and budgeting needs",
      "Compensation Analysis: Gather benchmark data to map out competitive salary ranges and assist with remuneration reviews",
      "Employee Feedback & Engagement: Evaluate results from performance reviews and employee satisfaction surveys to recommend policy or procedure improvements",
      "Process Optimization: Identify discrepancies across HR Information Systems (HRIS), Applicant Tracking Systems (ATS), and payroll platforms to improve data integrity and system efficiency"
    ],
    requirements: [
      "B.Sc Degree in Human Resources, Mathematics, Data Management, Accounting, Economics, Industrial Relations, or related Social Science field",
      "Professional certification is an advantage",
      "4 – 5 years of HR experience",
      "Strong written and verbal communication skills",
      "Proficiency in Microsoft Office tools, especially Excel, Word, Powerpoint",
      "Excellent organizational and time-management skills",
      "Strong interpersonal skills and ability to build relationships with internal and external stakeholders",
      "Ability to work independently and manage multiple HR tasks and deadlines",
      "Preference will be given to candidates living around Mowe, Ibafo, Magboro, Ojodu-Berger, Ojota, Sagamu, and Ikeja Axis"
    ],
    apply: 'Interested and qualified candidates should send their detailed CV to: <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> or <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a> using the Job Title as the subject of the email.',
    salary: "N300,000 – N400,000 monthly",
    deadline: "2026-05-31"
  },
  {
    id: "auditor-microfinance-guided-arrows-consulting-lagos-2026",
    title: "Auditor",
    date: "2026-05-21",
    location: "Lagos Mainland",
    type: "Full-time",
    seniority: "Senior",
    company: "Guided Arrows Consulting (for a Microfinance Institution)",
    summary: "Guided Arrows Consulting is seeking an experienced Auditor for a Microfinance Institution on Lagos Mainland, with 6+ years of experience in microfinance auditing, to lead internal audits, strengthen controls, and ensure regulatory adherence.",
    responsibilities: [
      "Conduct internal audits of branch operations, loan disbursements, and repayments",
      "Review internal controls, cash management, and asset quality",
      "Prepare audit reports and recommend corrective actions",
      "Ensure compliance with MFB policies and statutory requirements"
    ],
    requirements: [
      "6+ years in microfinance auditing",
      "Strong background in microfinance operations, loan portfolio review, and CBN compliance"
    ],
    apply: 'Send your CV : <a href="mailto:recruitmentguidedarrowsconsult@gmail.com">recruitmentguidedarrowsconsult@gmail.com</a>',
    salary: "#250,000 – Above (Negotiable)",
    deadline: "Not Specified"
  },
  {
    id: "electrical-design-engineer-basscomm-group-lagos-2026",
    title: "Electrical Design Engineer",
    date: "2026-05-21",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Basscomm Group",
    summary: "Basscomm Group is urgently hiring an Electrical Design Engineer in Lagos with 1-2 years of experience in Engineering and Commercial design, proficient in AutoCAD, Revit, and other relevant design tools.",
    responsibilities: [],
    requirements: [
      "Bsc/HND in Electrical Engineering, or a related field",
      "1–2 years of proven experience in Engineering and Commercial design",
      "Proficiency in AutoCAD, Revit and other relevant design tools",
      "Good knowledge in MEP and ELVS solution",
      "Good knowledge on costing, budgeting and commercial evaluation",
      "Ability to work independently and as part of a team"
    ],
    apply: 'Experienced and qualified candidate should send their Cvs to: <a href="mailto:recruitment@basscommgroup.com">recruitment@basscommgroup.com</a>',
    salary: "250k-300k (Negotiable)",
    deadline: "Not Specified"
  },
  {
    id: "trainee-pharmacist-nysc-intern-pharmaceutical-mowe-ogun-2026",
    title: "Trainee Pharmacist/NYSC Intern Pharmacists",
    date: "2026-05-21",
    location: "Mowe, Ogun State",
    type: "Full-time",
    seniority: "Junior",
    company: "Pharmaceutical Manufacturing Company",
    summary: "A Pharmaceutical Manufacturing Company is urgently hiring Trainee Pharmacists/NYSC Intern Pharmacists in Mowe, Ogun State, with a BSc Degree in Pharmacy and 0-2 years of experience.",
    responsibilities: [
      "Will be trained as dispensary and production pharmacists"
    ],
    requirements: [
      "BSc Degree in Pharmacy",
      "0-2 years of experience as production or dispensary pharmacists",
      "Successful candidates will be trained as dispensary and production pharmacists",
      "Preference will be candidates living in Mowe, Ibafo, Magboro and neighboring cities in Lagos State. Candidates willing to relocate at their own expense are also welcome"
    ],
    apply: 'Interested and qualified applicants should forward their CVS to: <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> and <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a>.',
    salary: "Negotiable + other benefits",
    deadline: "Not Specified"
  },
  {
    id: "provisioning-officer-fintech-ikeja-lagos-2026",
    title: "Provisioning Officer",
    date: "2026-05-21",
    location: "Ikeja, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "FinTech Company",
    summary: "A FinTech company is hiring a Provisioning Officer in Ikeja, Lagos, to receive, provision, lock, process, and reconcile devices, supporting daily warehouse activities and ensuring devices are ready for deployment.",
    responsibilities: [
      "Receiving, provisioning, locking, processing, and reconciling devices in accordance with operational guidelines and productivity standards",
      "Support daily warehouse activities and ensures devices are ready for deployment while maintaining quality and inventory accuracy"
    ],
    requirements: [
      "ND Minimum",
      "2 years experience",
      "Strong attention to detail, operational discipline, and the ability to work effectively within a fast-paced, target-driven environment"
    ],
    apply: '<a href="https://forms.gle/QhxuRyTDcru1cAb58">Click the link below to apply</a>',
    salary: "₦176,000 (Net Salary) + other benefits",
    deadline: "Not Specified"
  },
  {
    id: "quality-assurance-documentation-executive-mowe-ogun-2026",
    title: "Quality Assurance Documentation Executive",
    date: "2026-05-21",
    location: "Mowe, Ogun State",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Various companies are hiring a Quality Assurance Documentation Executive in Mowe, Ogun State, to manage document control, batch review, version control, and audit preparation, with familiarity with GMP and ISO 9001.",
    responsibilities: [
      "Document Control: Manage the Document Management System (DMS). This includes overseeing the creation, review, and approval of SOPs, protocols, and technical reports",
      "Batch Review: Review manufacturing batch records and logs to ensure they meet Good Manufacturing Practices (GMP) and internal quality guidelines prior to final product release",
      "Version Control: Issue updated documents to relevant staff, retrieve superseded versions, and ensure only current, authorized documents are used across the organization",
      "Audit Preparation: Maintain well-organized archives and document trails to support both internal quality audits and external regulatory inspections",
      "Change Control & CAPA: Assist in processing document change requests and track the documentation related to process deviations and Corrective and Preventive Actions (CAPA)"
    ],
    requirements: [
      "Bachelor’s degree in a relevant field such as Pharmacy, Microbiology, or Life Sciences",
      "Compliance Knowledge: Familiarity with international regulatory standards (e.g., GMP, ISO 9001)",
      "Attention to Detail: High level of accuracy when proofreading, verifying data, and managing document tracking systems",
      "Technical Skills: Strong proficiency in document management software, Enterprise Resource Planning (ERP) systems (like SAP), and Microsoft Office Suite",
      "Preference will be given to candidates living around Mowe, Magboro, Sagamu, Ibafo, Magodo-Shangisha, Ojodu-Berger, Ikeja, Ojota axis"
    ],
    apply: 'Interested and qualified candidates should send their detailed CV to: <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> or <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a> using the Job Title as the subject of the email.',
    salary: "N 300,000 per monthly net salary",
    deadline: "Not Specified"
  },
  {
    id: "digital-marketing-manager-ikeja-lagos-2026",
    title: "Digital Marketing Manager",
    date: "2026-05-21",
    location: "Ikeja, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Reputable Financial Services Firm",
    summary: "A reputable Financial Services Firm in Ikeja, Lagos, is seeking a smart, creative, and results-driven Digital Marketing Manager to develop and execute digital marketing strategies that drive brand visibility, customer engagement, and lead generation.",
    responsibilities: [
      "Develop and implement digital marketing campaigns across multiple channels",
      "Manage the company’s social media platforms and online presence",
      "Create engaging content for marketing campaigns and promotions",
      "Monitor digital campaign performance and prepare reports",
      "Manage SEO, SEM, email marketing, and online advertisements",
      "Generate leads and support customer acquisition strategies",
      "Collaborate with internal teams to enhance brand awareness and customer experience"
    ],
    requirements: [
      "Bachelor’s degree in Marketing, Mass Communication, or related field",
      "Minimum of 3 years’ experience in digital marketing, preferably in the financial sector",
      "Strong knowledge of social media management, SEO, Google Ads, and analytics tools",
      "Excellent communication and content creation skills",
      "Creative, analytical, and result-oriented"
    ],
    apply: 'Qualified candidates should send their CV to <a href="mailto:macaboresources@gmail.com">macaboresources@gmail.com</a> using “Digital Marketing Manager” as the subject of the email or send CV to <a href="https://wa.me/2348100115082">08100115082</a>.',
    salary: "₦250,000 – ₦300,000 Monthly",
    deadline: "Not Specified"
  },
  {
    id: "sales-representative-mafoluku-oshodi-lagos-2026",
    title: "Sales Representative",
    date: "2026-05-21",
    location: "Mafoluku, Oshodi, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Various Companies",
    summary: "Various companies are hiring Female Sales Representatives in Mafoluku, Oshodi, Lagos, with good communication skills, social media savvy, and computer literate.",
    responsibilities: [],
    requirements: [
      "Good communication skills",
      "Social media savvy",
      "Computer literate",
      "Friendly and customer-oriented",
      "Minimum qualification: SSCE",
      "Must reside around Mafoluku/Oshodi",
      "Female candidates preferred",
      "Must be available to work for at least 1 year"
    ],
    apply: 'Send your CV to: <a href="mailto:Momust1@yahoo.com">Momust1@yahoo.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "car-recovery-manager-exin-limited-ikeja-lagos-2026",
    title: "Car Recovery Manager",
    date: "2026-05-21",
    location: "Ikeja, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Exin Limited",
    summary: "Exin Limited is hiring a Car Recovery Manager in Ikeja, Lagos, with at least 3 years of experience in a car leasing/hire purchase company, familiar with Lagos map, and able to track vehicles.",
    responsibilities: [
      "Track vehicles",
      "Lead a team"
    ],
    requirements: [
      "Must have at least 3 years experience in a car leasing/ hire purchase company (This is a top requirement for the role)",
      "Must be well familiar with Lagos map",
      "Must be able to track vehicles",
      "Must have experience in leading a team",
      "Must have experience with car insurance companies",
      "Must be able to work under pressure"
    ],
    apply: 'Send your CV to: <a href="mailto:jobsrecruitercareer@gmail.com">jobsrecruitercareer@gmail.com</a> Use the job title as subject of the mail',
    salary: "N400,000 monthly including other benefits",
    deadline: "Not Specified"
  },
  {
    id: "relationship-manager-fairmoney-abuja-2026",
    title: "Relationship Manager",
    date: "2026-05-21",
    location: "Abuja",
    type: "Full-time",
    seniority: "Senior",
    company: "FairMoney",
    summary: "FairMoney is hiring a Relationship Manager in Abuja, requiring a Bachelor’s Degree in Sales and Marketing or related fields, with a minimum of 6 to 8 years of experience in the Merchant business.",
    responsibilities: [],
    requirements: [
      "Bachelor’s Degree in Sales and Marketing or related fields",
      "A minimum of 6 to 8 years of experience in the Merchant business",
      "Must have an Android phone",
      "Proven experience managing a high-performance sales team",
      "Ability to motivate a team of Sales Managers for performance",
      "Extremely flexible, result-oriented, and hardworking with a strong track record of success",
      "Ability to self-motivate and manage self",
      "Good communication and interpersonal skills",
      "Customer orientation and ability to adapt/respond to different characters"
    ],
    apply: '<a href="https://jobs.workable.com/view/hcDJHMkYx3W7dNByUYA5Rj/relationship-manager-in-abuja-at-fairmoney">Apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "assistant-production-supervisor-jubaili-agrotec-kakara-kano-2026",
    title: "Assistant Production Supervisor",
    date: "2026-05-21",
    location: "Kakara, Kano",
    type: "Full-time",
    seniority: "Junior",
    company: "Jubaili Agrotec",
    summary: "Jubaili Agrotec is hiring an Assistant Production Supervisor in Kakara, Kano.",
    responsibilities: [],
    requirements: [],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:victoria.oduobuk@jubailiagrotec.com">victoria.oduobuk@jubailiagrotec.com</a> using the Job Title as the subject of the email.',
    salary: "Not Specified",
    deadline: "2026-05-28"
  },
  {
    id: "storekeeper-jubaili-agrotec-kakara-kano-2026",
    title: "Storekeeper",
    date: "2026-05-21",
    location: "Kakara, Kano",
    type: "Full-time",
    seniority: "Junior",
    company: "Jubaili Agrotec",
    summary: "Jubaili Agrotec is hiring a Storekeeper in Kakara, Kano, requiring a Bachelor`s Degree with 1 – 4 years of experience.",
    responsibilities: [],
    requirements: [
      "Bachelor`s Degree with 1 – 4 years experience"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:victoria.oduobuk@jubailiagrotec.com">victoria.oduobuk@jubailiagrotec.com</a> using the Job Title as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "customer-care-representative-ikeja-lagos-2026-05-21",
    title: "Customer Care Representative",
    date: "2026-05-21",
    location: "Ikeja, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Various Companies",
    summary: "Various companies are hiring Female Customer Care Representatives in Ikeja, Lagos, to manage incoming calls, identify customer needs, handle complaints, and provide accurate information.",
    responsibilities: [
      "Manage incoming calls and customer inquiries",
      "Identify and assess customer needs to ensure satisfaction",
      "Build strong customer relationships through open and interactive communication",
      "Provide accurate, valid, and complete information using the right tools and procedures",
      "Handle customer complaints, provide appropriate solutions, and follow up to ensure resolution",
      "Follow company communication procedures, guidelines, and policies",
      "Go the extra mile to engage and assist customers",
      "Manage online customer interactions and resolve issues effectively"
    ],
    requirements: [
      "HND, ND, or BSc Degree",
      "1 – 2 years of work experience",
      "Gender: Female",
      "Age: 20 to 27 years",
      "Residence within Ikeja or areas close to Ikeja is required"
    ],
    apply: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSf11HQfHqXm-sasYpkWruR9WbxNKCQlTuUQODH18jxdrXH81Q/viewform?usp=send_form">Click here to apply online</a>',
    salary: "N100,000 monthly",
    deadline: "2026-05-30"
  },
  {
    id: "inventory-officer-ikeja-lagos-2026",
    title: "Inventory Officer",
    date: "2026-05-21",
    location: "Ikeja, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Various Companies",
    summary: "Various companies are hiring Inventory Officers in Ikeja, Lagos, to manage stock, perform physical counts, prepare reports, and handle stock movement.",
    responsibilities: [
      "Ensure all books in store are well arranged",
      "Perform physical stock count",
      "Prepare stock report",
      "Take record of in and out stock",
      "Updates bin card",
      "Picking stock from the warehouse for customers",
      "Release stock to customers",
      "Transfer stock from one warehouse to another warehouse"
    ],
    requirements: [
      "OND / BSc / HND in Accounting or any other related field",
      "2 years and above experience in inventory",
      "Excellent communication skill",
      "Proficiency in Microsoft Office suite",
      "Good analytical skills"
    ],
    apply: 'Interested and qualified candidates should forward their CVs to: <a href="mailto:publishingjobs24@gmail.com">publishingjobs24@gmail.com</a> using the position as the subject of the mail.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "risk-manager-microfinance-guided-arrows-consulting-lagos-2026",
    title: "Risk Manager",
    date: "2026-05-21",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    company: "Guided Arrows Consulting (for a Microfinance Institution)",
    summary: "Guided Arrows Consulting is seeking an experienced Risk Manager for a Microfinance Institution in Lagos, with at least 6 years of experience, to identify, assess, and mitigate credit, operational, and liquidity risks.",
    responsibilities: [
      "Develop and implement risk policies and early warning systems",
      "Monitor loan portfolio quality and concentration risk",
      "Conduct regular risk assessments and report to management",
      "Oversee fraud prevention and business continuity planning"
    ],
    requirements: [
      "At least 6 years in microfinance or financial services",
      "Ensure compliance with CBN risk management frameworks for MFIs"
    ],
    apply: 'Send your CV with “Risk Manager – Lagos” to: <a href="mailto:recruitmentguidedarrowsconsult@gmail.com">recruitmentguidedarrowsconsult@gmail.com</a>',
    salary: "₦250,000+ (Very negotiable)",
    deadline: "Not Specified"
  },
  {
    id: "sales-representatives-royal-jewelry-lekki-lagos-2026",
    title: "Sales Representatives",
    date: "2026-05-21",
    location: "Oriwu Street, Lekki Phase 1",
    type: "Full-time",
    seniority: "Junior",
    company: "Royal Jewelry Co. Ltd",
    summary: "Royal Jewelry Co. Ltd is seeking motivated and capable Sales Representatives in Lekki Phase 1, Lagos, to find potential customers, promote jewelry products, and meet sales targets.",
    responsibilities: [
      "Actively search for and approach potential customers",
      "Promote the company’s jewelry products and services",
      "Build and maintain strong customer relationships",
      "Meet sales targets and help expand the company’s customer base"
    ],
    requirements: [
      "Strong sales ability and good communication skills",
      "Must be proactive, confident, and able to find new customers",
      "Ability to work independently and achieve targets",
      "Previous sales experience is an advantage"
    ],
    apply: 'Send a message on WhatsApp: <a href="https://wa.me/2349036959150">09036959150</a>',
    salary: "₦200,000 monthly + interest",
    deadline: "Not Specified"
  },
  {
    id: "site-engineer-caih-group-lekki-lagos-2026-05-21",
    title: "Site Engineer",
    date: "2026-05-21",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "CAIH Group",
    summary: "CAIH Group is seeking a competent and experienced Site Engineer in Lekki, Lagos, to oversee construction activities, ensure projects are executed according to specifications, and maintain compliance with building standards and safety regulations.",
    responsibilities: [
      "Supervise and coordinate construction activities on-site",
      "Read and interpret architectural and structural drawings",
      "Ensure compliance with Lagos State building codes and standards",
      "Monitor project progress and ensure timely delivery of tasks",
      "Collaborate with contractors, consultants, and project stakeholders",
      "Prepare site reports and maintain proper project documentation",
      "Ensure quality control and adherence to safety procedures"
    ],
    requirements: [
      "BSc/HND in Building Technology, Civil Engineering, or Structural Engineering",
      "Minimum of 3 years post-graduation hands-on experience in the building industry",
      "Ability to read and interpret drawings",
      "Good knowledge of CAD designs",
      "Sound knowledge of building codes and standards in Lagos State",
      "Experience in high-rise construction",
      "Good project management skills",
      "Good negotiating skills",
      "Ability to drive is an added advantage"
    ],
    apply: 'Send your CV to <a href="mailto:recruitment@caihgroup.com">recruitment@caihgroup.com</a> with the subject ‘Site Engineer’',
    salary: "Not Specified",
    deadline: "2026-05-26"
  },
  {
    id: "receptionist-ruth-roots-lagos-2026-05-21",
    title: "Receptionist",
    date: "2026-05-21",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Ruth & Roots Ltd",
    summary: "Ruth & Roots Ltd is hiring a Receptionist in Lagos, requiring an OND / HND / BSc. Degree in Hospitality Management or a related field, with 0-3 years of experience.",
    responsibilities: [],
    requirements: [
      "OND / HND / BSc. Degree in Hospitality Management or a related field",
      "0-3 years of experience in a receptionist or administrative support role",
      "Excellent verbal and written communication skills",
      "Proficient in Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
      "Strong organizational skills and ability to multitask",
      "Professional demeanor with a positive attitude",
      "Ability to maintain confidentiality and handle sensitive information",
      "Familiarity with office equipment (e.g., printers, copiers, fax machines) is a plus"
    ],
    apply: 'Send CV to: <a href="mailto:hr@ruthandroots.com">hr@ruthandroots.com</a> using “Receptionist – Lagos” as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "quality-assurance-hse-officer-president-paint-ogun-2026-05-21",
    title: "Quality Assurance / HSE Officer",
    date: "2026-05-21",
    location: "Ogun State",
    type: "Full-time",
    seniority: "Junior",
    company: "President Paint Nigeria Limited",
    summary: "President Paint Nigeria Limited is hiring a Quality Assurance / HSE Officer in Ogun State, requiring a minimum of HND / BSc in Chemistry, Industrial Chemistry, or related discipline, with at least 2 years of relevant experience.",
    responsibilities: [],
    requirements: [
      "Minimum of HND / BSc in Chemistry, Industrial Chemistry, or any related discipline",
      "Minimum of 2 years relevant experience in quality assurance or HSE, preferably in a manufacturing environment",
      "Knowledge of quality control procedures and safety regulations",
      "Good analytical, organizational, and reporting skills",
      "Proficiency in Microsoft Office applications",
      "Professional certification in HSE is an added advantage"
    ],
    apply: 'Send CV to: <a href="mailto:human.resources@presidentpaint.com">human.resources@presidentpaint.com</a> using the job title as the subject of the email',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "customer-care-representative-tejuosho-yaba-lagos-2026",
    title: "Customer Care Representative",
    date: "2026-05-21",
    location: "Tejuosho, Yaba, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Various Companies",
    summary: "Various companies are hiring Customer Care Representatives in Tejuosho, Yaba, Lagos, to manage customer interactions, maintain accurate records, and support sales and online engagement.",
    responsibilities: [
      "Manage customer interactions across phone, email, chat, and social media",
      "Maintain accurate records of customer interactions and transactions",
      "Handle orders, returns, refunds, and payments efficiently",
      "Support sales and online engagement across social platforms"
    ],
    requirements: [],
    apply: 'Send your CV with the job title as the subject line to: <a href="mailto:rebeccagabrielj@gmail.com">rebeccagabrielj@gmail.com</a>',
    salary: "₦120,000",
    deadline: "Not Specified"
  },
  {
    id: "sales-medical-representative-tamar-pharez-pharmaceuticals-multiple-2026",
    title: "Sales/Medical Representative",
    date: "2026-05-21",
    location: "Ibadan – PLATEAU – JOS, EDO/DELTA",
    type: "Full-time",
    seniority: "Junior",
    company: "Tamar & Pharez Pharmaceuticals",
    summary: "Tamar & Pharez Pharmaceuticals is recruiting passionate and result-driven Sales/Medical Representatives in multiple locations, seeking candidates with a degree in Pharmacy, Biochemistry, Microbiology, or Human Physiology.",
    responsibilities: [],
    requirements: [
      "Degree in Pharmacy, Biochemistry, Microbiology, Human Physiology",
      "1–2 years post-NYSC experience as a Sales Representative or Medical Representative",
      "Not more than 27 years",
      "Young, energetic, goal-oriented professionals with strong communication skills and passion for healthcare marketing"
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:tamarandpharez@gmail.com">tamarandpharez@gmail.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "health-safety-environment-hse-officer-marquise-energy-lagos-2026",
    title: "Health, Safety & Environment (HSE) Officer",
    date: "2026-05-21",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Marquise Energy Limited",
    summary: "Marquise Energy Limited is hiring an HSE Officer in Lagos with a degree or diploma in Occupational Health & Safety and a minimum of 5 years of experience in oil & gas or industrial projects.",
    responsibilities: [],
    requirements: [
      "Degree or diploma in Occupational Health & Safety or related field",
      "NEBOSH, ISPON, OSHA, or equivalent certification",
      "Minimum of 5 years’ experience in oil & gas or industrial projects",
      "Strong knowledge of HSE regulations and standards"
    ],
    apply: 'Send CV to: <a href="mailto:recruitment@marquiseenergy.com">recruitment@marquiseenergy.com</a> using the job title as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "graphic-designer-fitcare-health-lekki-lagos-2026",
    title: "Graphic Designer",
    date: "2026-05-21",
    location: "Lekki Phase 1, Lagos",
    type: "Part-time",
    seniority: "Mid-Level",
    company: "Fitcare Health",
    summary: "Fitcare Health is looking for a highly creative, fast, and proactive Part-time Graphic Designer in Lekki Phase 1, Lagos, who understands modern branding, clean design, social media marketing, and high-quality visual storytelling.",
    responsibilities: [
      "Create content that feels fresh, elevated, engaging and on-trend"
    ],
    requirements: [
      "Minimum of 3 years graphic design experience",
      "Strong understanding of modern social media design",
      "Experience creating high-quality flyers, campaigns, mockups and digital content",
      "Good knowledge of Photoshop, Illustrator and Canva",
      "Experience using AI creative tools such as Higgsfield and other AI image/content platforms",
      "Strong understanding of current design trends, luxury-style aesthetics and branding",
      "Attention to detail and the ability to work quickly without reducing quality",
      "Very proactive and hardworking",
      "Fast and efficient",
      "Creative and visually strong",
      "Able to take direction well",
      "Good at communication",
      "Serious about growth and improving",
      "Able to work well within a team environment",
      "Passionate about content, branding and aesthetics"
    ],
    apply: 'Email: <a href="mailto:careers@fitcarehealth.com">careers@fitcarehealth.com</a>',
    salary: "₦180,000 monthly",
    deadline: "Not Specified"
  },
  {
    id: "graduate-engineer-trainee-dufil-prima-foods-multiple-locations-2026",
    title: "Graduate Engineer Trainee",
    date: "2026-05-21",
    location: "Sango Ota, Port Harcourt, Kaduna, Lagos, Aba",
    type: "Full-time",
    seniority: "Junior",
    company: "Dufil Prima Foods",
    summary: "Dufil Prima Foods is hiring Graduate Engineer Trainees in multiple locations, seeking candidates with a Bachelor’s Degree or HND in Mechanical, Electrical/Electronic, Mechatronics, or Automation/Instrumentation Engineering.",
    responsibilities: [
      "Learn and contribute to engineering and manufacturing operations",
      "Work in a manufacturing environment and shifts where required"
    ],
    requirements: [
      "Bachelor’s Degree or HND in: Mechanical Engineering, Electrical/Electronic Engineering, Mechatronics Engineering, Automation/Instrumentation Engineering",
      "Minimum of Second Class Upper (2:1) or Upper Credit preferred",
      "Not more than 30 years of age",
      "0–2 years post-graduation experience",
      "NYSC completed or currently serving",
      "Strong analytical and problem-solving skills",
      "Willingness to work in a manufacturing environment and shifts where required",
      "Good communication and teamwork skills",
      "Passion for engineering and manufacturing operations"
    ],
    apply: '<a href="https://recruitment.dragnet-solutions.com/portal/apply?d=dufilprima&details=558">Apply online</a>',
    salary: "Not Specified",
    deadline: "2026-06-03"
  },
  {
    id: "virtual-assistant-assistant-digital-marketer-the-belle-store-remote-2026",
    title: "Virtual Assistant / Assistant Digital Marketer",
    date: "2026-05-21",
    location: "Remote",
    type: "Full-time",
    seniority: "Junior",
    company: "The Belle Store",
    summary: "A fast-paced remote team is seeking a proactive and highly organized Assistant Digital Marketer (Virtual Assistant) to support digital marketing, administrative, and operational activities while leveraging AI tools.",
    responsibilities: [
      "Support digital marketing through basic social media editing, scheduling, and AI-assisted content creation",
      "Conduct market, competitor, networking, and grant research",
      "Manage calendars, meetings, scheduling, reminders, and deadlines",
      "Handle travel, accommodation, and meal bookings",
      "Manage personal tasks such as online grocery shopping and daily coordination",
      "Assist with bookkeeping and reconciliation tasks",
      "Support procurement, vendor research, and sourcing",
      "Coordinate event planning and logistics",
      "Supervise personal projects and ensure timely execution",
      "Provide basic customer service support and professional communication"
    ],
    requirements: [
      "Bachelor’s degree in Business Administration, Business Management, or related field",
      "1–2 years experience in Digital Marketing, Virtual Assistant, or similar remote role"
    ],
    apply: 'Send CV to <a href="mailto:Thebellestorehr@gmail.com">Thebellestorehr@gmail.com</a> Use the job title as subject of the mail',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "graphic-designer-nigeria-remote-2026",
    title: "Graphic Designer",
    date: "2026-05-21",
    location: "Nigeria (Remote)",
    type: "Permanent",
    seniority: "Mid-Level",
    company: "Various Companies via Indeed",
    summary: "Various companies are hiring remote Graphic Designers in Nigeria to design logos, branding assets, typography, and engaging digital visuals for client projects.",
    responsibilities: [
      "Design logos, branding assets, typography, and engaging digital visuals for client projects",
      "Create cohesive visual identities that strengthen brand presence and marketing efforts",
      "Collaborate remotely with teams to deliver high-quality creative work on time"
    ],
    requirements: [],
    apply: '<a href="https://ng.indeed.com/viewjob?jk=6566a09be164cc8c&from=shareddesktop_copy">Apply online</a>',
    salary: "Not specified",
    deadline: "Not Specified"
  },
  {
    id: "customer-service-data-entry-usa-survey-job-remote-2026",
    title: "Customer Service Data Entry",
    date: "2026-05-21",
    location: "Remote",
    type: "Part-Time",
    seniority: "Junior",
    company: "USA Survey Job",
    summary: "USA Survey Job is hiring remote Customer Service Data Entry personnel for flexible part-time work involving participation in paid online surveys, research studies, and product testing.",
    responsibilities: [
      "Participate in paid online surveys, research studies, and focus groups",
      "Test products/services and provide feedback through written or verbal responses",
      "Follow instructions accurately while completing market research activities remotely"
    ],
    requirements: [],
    apply: '<a href="https://jobs.lever.co/usasurveyjob/6fd7d6ac-7f68-4597-9591-ab1c7766189c?source=remote.com&utm_source=remote.com&ref=remote.com">Apply online</a>',
    salary: "Earnings vary based on participation and rewards",
    deadline: "Not Specified"
  },
  {
    id: "graphic-design-web-designer-wing-remote-2026",
    title: "Graphic Design Web Designer",
    date: "2026-05-21",
    location: "Remote (Worldwide)",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Wing",
    summary: "Wing is hiring a remote Graphic Design Web Designer to design and build landing pages and websites using WordPress, Webflow, and Framer, create sales collateral, and improve website performance.",
    responsibilities: [
      "Design and build landing pages and websites using WordPress, Webflow, and Framer",
      "Create sales collateral, pitch decks, campaign assets, and brand materials",
      "Improve website performance and conversions using UX principles, analytics, and CRO insights"
    ],
    requirements: [],
    apply: '<a href="https://jobs.lever.co/getwingapp/6c7c4f6e-58cf-4eb5-8c57-0e7975ea64ee?source=remote.com&utm_source=remote.com&ref=remote.com">Apply online</a>',
    salary: "$1.5K–$2K/month",
    deadline: "Not Specified"
  },
  {
    id: "digital-marketer-giw-writers-llp-remote-2026",
    title: "Digital Marketer",
    date: "2026-05-21",
    location: "Remote",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "GIW Writers LLP",
    summary: "GIW Writers LLP is hiring a remote Full-time Digital Marketer to develop and manage digital marketing campaigns, create content strategies, generate leads, and run paid advertising campaigns.",
    responsibilities: [
      "Develop and manage digital marketing campaigns for GIW Writers LLP",
      "Create and execute content strategies for platforms such as Instagram, LinkedIn, Facebook, TikTok, and other relevant channels",
      "Generate quality leads for the company’s writing services",
      "Run and monitor paid advertising campaigns across platforms such as Meta Ads, Google Ads, and other suitable channels",
      "Create engaging content ideas that position GIW Writers LLP as a trusted writing brand"
    ],
    requirements: [],
    apply: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSemX1lkI69uLClZ3RuA7MK3kMsRiL_tDctpRaPfH-7skuiSJg/viewform">Apply online</a>',
    salary: "N100,000 naira",
    deadline: "Not Specified"
  },
  {
    id: "seo-content-writer-aral-studios-remote-2026",
    title: "SEO Content Writer",
    date: "2026-05-21",
    location: "Remote",
    type: "Full-time",
    seniority: "Junior",
    company: "Aral Studios",
    summary: "Aral Studios is hiring a remote SEO Content Writer with basic knowledge of marketing & SEO, strong English writing skills, and creative thinking to write engaging content.",
    responsibilities: [
      "Write engaging content"
    ],
    requirements: [
      "Basic knowledge of marketing & SEO",
      "Strong English writing & vocabulary",
      "Good communication skills",
      "Disciplined & punctual",
      "Creative thinking and research skills",
      "Ability to write engaging content"
    ],
    apply: 'Send your CV to <a href="mailto:info@aralstudios.com">info@aralstudios.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "social-media-manager-sprout-talent-network-remote-2026",
    title: "Social Media Manager",
    date: "2026-05-21",
    location: "Remote",
    type: "Part-time",
    seniority: "Mid-Level",
    company: "Sprout Talent Network",
    summary: "Sprout Talent Network is seeking a remote Part-Time Social Media Manager to manage content and community engagement across five social platforms for both the academy and the founder’s personal brand.",
    responsibilities: [
      "Manage daily content and community engagement across five social platforms for both the academy and the founder’s personal brand",
      "Edit raw footage into branded videos, and executing a strategic content calendar",
      "Pitch weekly creative ideas and provide performance reports to track growth and lead generation"
    ],
    requirements: [
      "Send your Cv, portfolio & 60 seconds Loom video"
    ],
    apply: 'Send your Cv, portfolio & 60 seconds Loom video to <a href="mailto:seun@newshepherdcare.co.uk">seun@newshepherdcare.co.uk</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "virtual-assistant-sadecia-tutors-remote-2026",
    title: "Virtual Assistant",
    date: "2026-05-21",
    location: "Remote",
    type: "Full-time",
    seniority: "Junior",
    company: "Sadecia Tutors",
    summary: "Sadecia Tutors is hiring a remote Virtual Assistant who is organized, detail-oriented, proactive, and professional, with experience in spreadsheets, calendars, CRMs, and email follow-up.",
    responsibilities: [
      "You love organization",
      "You naturally notice details other people miss",
      "You enjoy making systems smoother, you communicate professionally and warmly",
      "You are proactive instead of waiting to be told every tiny thing"
    ],
    requirements: [
      "Experience with spreadsheets, calendars, CRMs, email follow-up",
      "Bonus points if you also have experience with marketing/data tracking, automations + tech tools"
    ],
    apply: 'Send your Cv & portfolio to <a href="mailto:support@sadecia.com">support@sadecia.com</a>',
    salary: "$15/hr - $20/hr",
    deadline: "Not Specified"
  },
  {
    id: "administrative-virtual-assistant-jisa-consult-remote-2026",
    title: "Administrative Virtual Assistant",
    date: "2026-05-21",
    location: "Remote",
    type: "Full-time",
    seniority: "Junior",
    company: "Jisa Consult",
    summary: "Jisa Consult is seeking a remote Administrative Virtual Assistant with strong English communication skills and experience in managing calendars, emails, scheduling, and CRM systems.",
    responsibilities: [
      "Manage Calendars, emails, scheduling, and follow ups"
    ],
    requirements: [
      "Strong English communication skills",
      "Manage Calendars, emails, scheduling, and follow ups",
      "Experience with spreadsheets, CRM Systems & admin support"
    ],
    apply: 'Send your cv & portfolio to <a href="mailto:info@virtualtalentlatam.com">info@virtualtalentlatam.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "multiple-internship-roles-konfirm-tech-africa-remote-2026",
    title: "Multiple Internship Roles",
    date: "2026-05-21",
    location: "Remote",
    type: "Internship",
    seniority: "Junior",
    company: "Konfirm Tech Africa",
    summary: "Konfirm Tech Africa is hiring for multiple paid remote internship roles including Social Media Manager, Data Analyst, Backend Developer, and Graphic Designer.",
    responsibilities: [
      "Support tasks related to chosen internship role",
      "Contribute to team projects",
      "Learn and develop skills in a professional environment"
    ],
    requirements: [
      "Send a short video link telling us why you’re the perfect fit for your chosen role",
      "Social media handles and CV"
    ],
    apply: 'Send a short video link, social media handles and CV to: <a href="mailto:konfirmtechafrica@gmail.com">konfirmtechafrica@gmail.com</a>',
    salary: "Paid internship",
    deadline: "Not Specified"
  },
  {
    id: "manager-internal-control-arnergy-lagos-2026",
    title: "Manager, Internal Control",
    date: "2026-05-19",
    location: "Ilupeju, Lagos",
    type: "Full-time",
    company: "Arnergy",
    summary: "Lead internal control implementation, monitoring, and audit support within a renewable energy organization.",
    responsibilities: [
      "Implement and maintain internal control policies, procedures, and standard operating manuals",
      "Monitor the effectiveness of controls across key business processes",
      "Conduct periodic control reviews and walkthroughs to identify gaps and weaknesses",
      "Perform process-level risk assessments across operations and support functions",
      "Design and execute internal control testing plans",
      "Review controls over procurement, inventory, warehouse operations, and fixed assets",
      "Support internal audits and coordinate external audit activities",
      "Investigate suspected control breaches and fraud prevention initiatives",
      "Review system access controls, user rights, and data integrity in ERP systems",
      "Provide training and awareness on internal control requirements to stakeholders"
    ],
    requirements: [
      "Bachelor’s degree in Accounting, Finance, Business Administration, or related field",
      "Professional certification (ACA, ACCA, CPA, CISA, CIA) is an advantage",
      "5–8 years of experience in internal control, audit, risk, or compliance roles",
      "Experience in renewable energy, power, utilities, construction, or project-based organizations is an advantage",
      "Strong knowledge of internal control principles and audit methodologies"
    ],
    apply: 'Qualified candidates should send CV to <a href="mailto:recruitment@arnergy.com">recruitment@arnergy.com</a> with the Job title as subject of the email.',
    salary: "Attractive",
    deadline: "Not Specified"
  },
  {
    id: "sales-representative-pharmaceutical-benin-city-2026",
    title: "Sales Representative",
    date: "2026-05-19",
    location: "Benin City",
    type: "Full-time",
    company: "Pharmaceutical Company",
    summary: "Responsible for promoting and selling pharmaceutical products, driving revenue growth, and expanding market presence within Benin City.",
    responsibilities: [
      "Promote and sell pharmaceutical products to pharmacies, hospitals, and healthcare outlets",
      "Identify new business opportunities and develop strategies to grow sales",
      "Maintain strong relationships with existing customers to ensure repeat business",
      "Achieve assigned sales targets and contribute to revenue growth",
      "Conduct market research to understand competitor activity and customer needs",
      "Provide regular sales reports and feedback to management",
      "Ensure timely collection of payments where applicable",
      "Represent the company professionally at all times"
    ],
    requirements: [
      "Minimum of BSc or HND from a recognised institution",
      "Proven experience in sales, preferably within the healthcare or pharmaceutical sector (Minimum 2 years)",
      "Strong communication, negotiation, and interpersonal skills",
      "Ability to work independently and meet targets",
      "Prior experience in pharmaceutical sales and marketing is an added advantage",
      "Existing network within pharmacies or healthcare providers is a plus"
    ],
    apply: 'Interested and qualified candidates should send their CV and a brief cover note to: <a href="mailto:applyresurgir@gmail.com">applyresurgir@gmail.com</a> using the job title as the subject line.',
    salary: "₦80,000 and above",
    deadline: "Not Specified"
  },
  {
    id: "chartered-accountant-trading-onitsha-2026",
    title: "Chartered Accountant",
    date: "2026-05-19",
    location: "Onitsha, Anambra State",
    type: "Full-time",
    company: "Trading Company",
    summary: "Oversee all financial activities, ensure accurate reporting, inventory accountability, and efficient financial management within an import/export trading environment.",
    responsibilities: [
      "Prepare monthly, quarterly, and annual financial statements",
      "Manage inventory accounting and stock reconciliation",
      "Oversee import/export financial documentation and cost tracking",
      "Handle tax compliance (VAT, PAYE, Company Income Tax, etc.)",
      "Monitor cash flow, budgeting, and financial forecasting",
      "Reconcile bank statements and supplier accounts",
      "Maintain accurate financial records and documentation",
      "Implement and monitor internal financial controls",
      "Provide financial insights to management for business decisions"
    ],
    requirements: [
      "Must be a Chartered Accountant (ICAN/ACCA certified)",
      "Minimum of 2–3 years post-qualification experience",
      "B.Sc or HND in Accounting",
      "Strong inventory management experience and tech-savvy",
      "Strong accounting background in a trading company preferred",
      "Candidate from AkwaIbom State is not preferred (per employer specification)"
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:applyresurgir@gmail.com">applyresurgir@gmail.com</a> with “Chartered Accountant” as the subject line.',
    salary: "₦200,000 Monthly",
    deadline: "Not Specified"
  },
  {
    id: "real-estate-marketer-lekki-lagos-2026",
    title: "Real Estate Marketer",
    date: "2026-05-19",
    location: "Lekki, Lagos",
    type: "Full-time",
    company: "Real Estate Company",
    summary: "Proactive and results-driven individual to promote and sell real estate properties, develop marketing strategies, and build strong client relationships.",
    responsibilities: [
      "Develop and implement effective marketing strategies to promote company properties",
      "Identify and generate leads through various marketing channels",
      "Promote property listings to prospective buyers and investors",
      "Manage client relationships and provide professional real estate advisory services",
      "Initiate, negotiate, and close real estate transactions",
      "Conduct property presentations, inspections, and site visits with clients",
      "Support brand visibility through strategic sales and marketing activities",
      "Utilize digital marketing tools and platforms to promote property sales"
    ],
    requirements: [
      "Bachelor’s Degree (B.Sc) in Marketing, Estate Management, or a related field",
      "3 – 6 years of experience in real estate marketing or sales",
      "Strong knowledge of real estate marketing strategies and property sales",
      "Excellent communication, negotiation, and interpersonal skills",
      "Candidates must reside within or close to Lekki Phase 1",
      "Familiarity with digital marketing tools and online property platforms"
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:applyresurgir@gmail.com">applyresurgir@gmail.com</a> with “Real Estate Marketer” as the subject line.',
    salary: "₦150,000 – ₦180,000 Monthly + Incentives",
    deadline: "Not Specified"
  },
  {
    id: "graduate-manager-lugbe-abuja-2026",
    title: "Graduate Manager",
    date: "2026-05-19",
    location: "Lugbe, Abuja",
    type: "Full-time",
    company: "Manufacturing Company",
    summary: "Manage daily production activities, coordinate factory staff, oversee supplies and materials, and support operational efficiency in a block manufacturing environment.",
    responsibilities: [
      "Supervise daily production and factory operations",
      "Coordinate staff schedules, duties, and performance",
      "Manage raw materials, supplies, and inventory (cement, sand, moulds, etc.)",
      "Monitor production output and ensure quality control standards are met",
      "Perform calculations for material usage, production planning, and costing",
      "Maintain accurate records, reports, and operational documentation",
      "Ensure compliance with safety, operational, and company policies",
      "Liaise with management to ensure smooth workflow and timely delivery"
    ],
    requirements: [
      "Male candidate, aged between 30 – 35 years",
      "Graduate in any relevant discipline",
      "Strong numerical and analytical skills (very important)",
      "Minimum of 2 – 5 years relevant work experience in manufacturing or operations",
      "Proven ability to coordinate staff and manage daily operations",
      "Ability to work under pressure and meet production targets"
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:applyresurgir@gmail.com">applyresurgir@gmail.com</a> with the job title as the subject line.',
    salary: "₦150,000 – ₦200,000",
    deadline: "Not Specified"
  },
  {
    id: "wig-maker-hairstylist-lagos-2026",
    title: "Wig Maker / Hairstylist",
    date: "2026-05-19",
    location: "Lagos",
    type: "Full-time",
    summary: "Passionate and skilled professional for glueless wig making, styling luxury wigs, and delivering salon-ready luxury looks.",
    responsibilities: [
      "Wig construction and customization",
      "Wig styling and finishing",
      "Revamping old wigs to luxury standard",
      "Coloring, curling, straightening, and cutting wigs",
      "Maintaining cleanliness of tools and workspace",
      "Assisting with client wig fittings when necessary"
    ],
    requirements: [
      "Must be experienced in glueless wig making and luxury styling",
      "Ability to create clean bob cuts and layered styles",
      "Understand luxury finishing and salon-ready presentation",
      "Previous experience as a wig maker or hairstylist",
      "Must have proof/sample videos or pictures of past work",
      "Must be available to work physically in Lagos"
    ],
    apply: 'Send proof of your work to our WhatsApp line: <a href="https://wa.me/2348142980924">08142980924</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "technical-operator-grand-oak-ogun-2026",
    title: "Technical Operator",
    date: "2026-05-16",
    location: "Sango Ota, Ogun",
    type: "Full-time",
    company: "Grand Oak Limited",
    summary: "Carry out maintenance routine checks, supervision, and monitoring of production machines to ensure smooth and efficient operation.",
    responsibilities: [
      "Operate production machinery according to standard operating procedure",
      "Develop and implement preventive and corrective maintenance schedules",
      "Diagnose and repair minor mechanical issues on equipment promptly",
      "Maintain detailed records of maintenance activities (repairs, replacements, inspections)",
      "Document and maintain accurate records of production activities (material consumption and wastage)"
    ],
    requirements: [
      "OND in Engineering",
      "1-3 years of relevant experience"
    ],
    apply: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSe77SRRFv6nXy2MDopwWDuBjvf3jhwJE_-zzemU-fllMMyOxQ/viewform?usp=send_form">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "2026-05-30"
  },
  {
    id: "assistant-manager-supply-chain-tranos-lagos-2026",
    title: "Assistant Manager, Supply Chain",
    date: "2026-05-16",
    location: "Lagos",
    type: "Full-time",
    company: "Tranos",
    summary: "Manage procurement, inventory management, and logistics operations within a structured engineering environment.",
    responsibilities: [
      "Manage end-to-end procurement processes",
      "Oversee inventory management and logistics",
      "Utilize ERP systems to manage supply chain processes",
      "Optimize supply chain efficiency and reporting"
    ],
    requirements: [
      "Minimum of 5 years of experience in a Supply Chain role at a Managerial level",
      "Strong organizational and time management skills",
      "Excellent communication and interpersonal skills",
      "Experience in using an ERP to manage supply chain processes"
    ],
    apply: 'Send CV to: <a href="mailto:careers@tranos.ng">careers@tranos.ng</a> using the Job Position as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "mechanical-design-engineer-tranos-lagos-2026",
    title: "Mechanical Design Engineer",
    date: "2026-05-16",
    location: "Lagos",
    type: "Full-time",
    company: "Tranos",
    summary: "Responsible for the mechanical design of generator enclosures, panels, and battery cabinets using advanced CAD software.",
    responsibilities: [
      "Conduct mechanical design of generator enclosures and panels",
      "Design battery cabinets and related enclosures",
      "Utilize Solidworks or Solid Edge for design projects",
      "Collaborate with engineering teams to ensure design specifications are met"
    ],
    requirements: [
      "BSc in Mechanical Engineering",
      "At least 4 years of experience as a Mechanical Design Engineer",
      "Knowledge and hands-on experience in mechanical design of generator enclosures and panels",
      "Proficiency in Solidworks or Solid Edge",
      "Strong problem-solving and detail-oriented skills"
    ],
    apply: 'Send Cover Letter and CV to: <a href="mailto:careers@tranos.ng">careers@tranos.ng</a> using the Job Position as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "bank-teller-cco-kimberly-ryan-lagos-2026",
    title: "Bank Teller / Customer Care Officer (CCO)",
    date: "2026-05-16",
    location: "Lagos",
    type: "Full-time",
    company: "Kimberly Ryan",
    summary: "Deliver efficient banking services and customer support with high standards of integrity and accuracy.",
    responsibilities: [
      "Process cash deposits and withdrawals",
      "Resolve customer inquiries and complaints",
      "Maintain accurate financial and customer records"
    ],
    requirements: [
      "HND (Upper Credit & Distinction only)",
      "Must have completed NYSC",
      "Previous banking or customer service experience is an added advantage",
      "Strong numerical and analytical skills",
      "High level of integrity and attention to detail"
    ],
    apply: '<a href="https://docs.google.com/forms/d/e/1FAIpQLScW3m3Qgkf-NTMaeiaJvNPxVa-_t3i5uOchP_lK88j9qgNsDg/viewform">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "management-trainee-sims-nigeria-lagos-2026",
    title: "Management Trainee",
    date: "2026-05-16",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    company: "SIMS Nigeria Limited",
    summary: "Structured trainee program for high-potential graduates to build a career in operations and administration within the electronics industry.",
    responsibilities: [
      "Support operations, customer service, and sales support functions",
      "Assist in administrative and business development tasks",
      "Participate in leadership development activities",
      "Adapt to changing business needs in a fast-paced environment"
    ],
    requirements: [
      "Minimum of a MSC in Operations Support or MBA from a recognized university",
      "3-4 years of relevant experience in operations or customer service",
      "Experience within consumer electronics or retail industry is preferred",
      "Proficiency in Microsoft Office, especially Excel and PowerPoint",
      "Not older than 33 years of age"
    ],
    apply: 'Send CV to: <a href="mailto:employment@simsng.com">employment@simsng.com</a> using the Job Title as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "reservoir-engineer-slb-2026",
    title: "Reservoir Engineer / Process Sales Engineer",
    date: "2026-05-16",
    location: "Lagos and Port Harcourt",
    type: "Full-time",
    company: "Schlumberger (SLB)",
    summary: "Strategic engineering roles in a global energy company, offering high-paying opportunities and exposure to cutting-edge oil & gas technology.",
    responsibilities: [
      "Apply advanced engineering principles to reservoir or process sales projects",
      "Collaborate with global teams on energy solutions",
      "Work with cutting-edge technology in the oil & gas sector"
    ],
    requirements: [
      "Suitably qualified Nigerian graduate",
      "Experienced engineer looking to work with a global energy company",
      "Proven technical expertise in reservoir or process engineering"
    ],
    apply: '<a href="https://deroundtable.com/schlumberger-slb-recruitment-2026-high-paying-oil-gas-jobs/">Click here to apply online</a>',
    salary: "Competitive",
    deadline: "Not Specified"
  },
  {
    id: "quality-assurance-hse-officer-president-paint-ogun-2026",
    title: "Quality Assurance / HSE Officer",
    date: "2026-05-16",
    location: "Ogun State",
    type: "Full-time",
    company: "President Paint Nigeria Limited",
    summary: "Ensure high quality standards and strict adherence to safety regulations within a manufacturing environment.",
    responsibilities: [
      "Implement quality assurance and HSE protocols",
      "Monitor production to ensure compliance with safety regulations",
      "Prepare quality control and safety reports",
      "Conduct routine HSE inspections"
    ],
    requirements: [
      "Minimum of HND / BSc in Chemistry, Industrial Chemistry, or related discipline",
      "Minimum of 2 years relevant experience in quality assurance or HSE",
      "Knowledge of quality control procedures and safety regulations",
      "Professional certification in HSE is an added advantage",
      "Proficiency in Microsoft Office applications"
    ],
    apply: 'Send CV to: <a href="mailto:human.resources@presidentpaint.com">human.resources@presidentpaint.com</a> using the job title as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "office-manager-lextorah-lagos-2026",
    title: "Office Manager",
    date: "2026-05-16",
    location: "Lagos",
    type: "Full-time",
    company: "LexTorah",
    summary: "Versatile manager to oversee office administration, HR operations, and support business development teams.",
    responsibilities: [
      "Manage day-to-day office administration and HR functions",
      "Support business development and operational initiatives",
      "Lead and coordinate responsibilities across various teams",
      "Ensure effective interpersonal communication within the organization"
    ],
    requirements: [
      "Bachelor’s degree in Business Administration, HR, Management, or related field",
      "3–5 years of experience in office administration or HR roles",
      "Must live within Yaba and its immediate environs",
      "Must be willing to work Monday to Saturday",
      "Proficiency in Microsoft Office and Google Workspace"
    ],
    apply: 'Send CV to: <a href="mailto:hr@lextorah.com">hr@lextorah.com</a> using the Job Title as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "quality-control-analyst-lagos-mainland-2026",
    title: "Quality Control Analyst",
    date: "2026-05-15",
    location: "Lagos Mainland, Nigeria",
    type: "Full-time",
    seniority: "Junior",
    summary: "A reputable manufacturing company on the Lagos Mainland is recruiting a Quality Control Analyst to conduct inspections and laboratory analysis.",
    responsibilities: [
      "Conduct quality control inspections and laboratory analysis on products and raw materials",
      "Monitor production processes to ensure compliance with quality standards",
      "Prepare quality reports and documentation",
      "Identify defects and recommend corrective actions",
      "Ensure adherence to safety and regulatory requirements"
    ],
    requirements: [
      "HND/B.Sc. in Chemistry, Microbiology, Biochemistry, Industrial Chemistry, or related field",
      "Minimum of 2 years relevant experience in quality control/assurance",
      "Good analytical and reporting skills",
      "Ability to work with minimal supervision",
      "Knowledge of laboratory testing procedures and quality standards"
    ],
    apply: 'Send CV to: <a href="mailto:Abuat.joseph@yahoo.com">Abuat.joseph@yahoo.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "water-treatment-plant-officer-lagos-mainland-2026",
    title: "Water Treatment Plant Officer",
    date: "2026-05-15",
    location: "Lagos Mainland, Nigeria",
    type: "Full-time",
    seniority: "Junior",
    summary: "Manufacturing company seeking an officer to operate and monitor water treatment systems and ensure proper supply for production.",
    responsibilities: [
      "Operate and monitor water treatment plant equipment and systems",
      "Ensure proper treatment and supply of water for production operations",
      "Carry out routine maintenance and inspection of treatment facilities",
      "Conduct water quality testing and maintain accurate records",
      "Ensure compliance with health, safety, and environmental standards",
      "Troubleshoot operational issues and report faults promptly"
    ],
    requirements: [
      "OND/HND/B.Sc. in Mechanical Engineering, Chemical Engineering, Environmental Science, or related field",
      "Minimum of 2 years relevant experience in water treatment plant operations",
      "Good knowledge of water treatment processes and equipment",
      "Strong technical and problem-solving skills",
      "Ability to work independently and under pressure"
    ],
    apply: 'Send CV to: <a href="mailto:Abuat.joseph@yahoo.com">Abuat.joseph@yahoo.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "client-advisor-wealth-management-ikoyi-lagos-2026",
    title: "Client Advisor (Wealth Management)",
    date: "2026-05-15",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Senior advisory role within Investment Banking focused on wealth management for HNI clients.",
    responsibilities: [
      "Provide high-level wealth management advisory",
      "Manage and grow client investment portfolios",
      "Drive client acquisition and relationship management"
    ],
    requirements: [
      "10-15 years of experience in wealth management or investment banking",
      "Proven track record in client advisory",
      "Strong financial market knowledge"
    ],
    apply: '<a href="https://forms.gle/xgZGYnX8X5RaHdKBA">Click here to apply online</a>',
    salary: "₦1.4M - ₦2M",
    deadline: "Not Specified"
  },
  {
    id: "client-advisor-assistant-wealth-management-ikoyi-lagos-2026",
    title: "Client Advisor Assistant (Wealth Management)",
    date: "2026-05-15",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary: "Support-based role in Investment Banking assisting Client Advisors in wealth management operations.",
    responsibilities: [
      "Assist Client Advisors with portfolio administration",
      "Handle client inquiries and documentation",
      "Support wealth management operational tasks"
    ],
    requirements: [
      "1-4 years of experience",
      "Strong organizational skills",
      "Interest in Investment Banking and Wealth Management"
    ],
    apply: '<a href="https://forms.gle/xgZGYnX8X5RaHdKBA">Click here to apply online</a>',
    salary: "₦200k – ₦350k",
    deadline: "Not Specified"
  },
  {
    id: "lead-institutional-coverage-capital-origination-ikoyi-lagos-2026",
    title: "Lead, Institutional Coverage & Capital Origination",
    date: "2026-05-15",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Strategic leadership role in Investment Banking responsible for institutional relationships and capital origination.",
    responsibilities: [
      "Lead institutional coverage strategies",
      "Drive capital origination and deal structuring",
      "Manage high-level institutional partnerships"
    ],
    requirements: [
      "10-15 years of experience in capital markets or investment banking",
      "Extensive network within institutional investment circles",
      "Strong deal-making and negotiation capabilities"
    ],
    apply: '<a href="https://forms.gle/xgZGYnX8X5RaHdKBA">Click here to apply online</a>',
    salary: "₦1.4M – ₦2M",
    deadline: "Not Specified"
  },
  {
    id: "hod-computer-science-abuja-university-2026",
    title: "Head of Department (HOD) – Computer Science",
    date: "2026-05-15",
    location: "Abuja (FCT)",
    type: "Full-time",
    seniority: "Senior",
    summary: "A founding academic leadership role for a new private university, shaping the Computer Science department from the ground up.",
    responsibilities: [
      "Design and develop NUC-compliant postgraduate programs (AI, Data Science, Cyber Security, etc.)",
      "Recruit, mentor, and manage a high-performance team of academics",
      "Oversee departmental operations, labs, and budgets",
      "Establish industry partnerships with tech hubs and corporate entities",
      "Lead NUC accreditation and professional certifications"
    ],
    requirements: [
      "PhD in Computer Science, AI, Software Engineering, or related field",
      "Minimum of 8–10 years university teaching/research experience (5 years at postgraduate level)",
      "Previous experience as HOD or equivalent leadership role at a reputable university",
      "Track record of high-impact scholarly publications",
      "Experience in curriculum design and NUC accreditation processes"
    ],
    apply: 'Send CV and Cover Letter to: <a href="mailto:cityuniversitybiz@gmail.com">cityuniversitybiz@gmail.com</a>',
    salary: "Competitive + Pension + Benefits",
    deadline: "Not Specified"
  },
  {
    id: "hod-international-law-abuja-university-2026",
    title: "Head of Department (HOD) – International Law",
    date: "2026-05-15",
    location: "Abuja (FCT)",
    type: "Full-time",
    seniority: "Senior",
    summary: " Founding leadership role to build a world-class postgraduate International Law department situated in the heart of West African diplomacy.",
    responsibilities: [
      "Design LL.M. and PhD curricula in specialized tracks (Humanitarian, Criminal, Human Rights Law)",
      "Establish partnerships with ECOWAS, international tribunals, and diplomatic missions",
      "Supervise doctoral theses and foster high-level research output",
      "Coach advanced moot court teams and manage career pathways for students",
      "Manage departmental budget and law library resources"
    ],
    requirements: [
      "PhD in International Law (awarded by a reputable university)",
      "LL.B, BL, and LL.M specialization in International Law",
      "Minimum of 8–10 years teaching experience (5 years postgraduate supervision)",
      "Previous HOD or Director-level academic leadership experience",
      "Proven record of publications in top-tier law journals"
    ],
    apply: 'Send CV and Cover Letter to: <a href="mailto:cityuniversitybiz@gmail.com">cityuniversitybiz@gmail.com</a>',
    salary: "Competitive + Pension + Benefits",
    deadline: "Not Specified"
  },
  {
    id: "hod-management-entrepreneurship-abuja-university-2026",
    title: "Head of Department (HOD) – Management & Entrepreneurship",
    date: "2026-05-15",
    location: "Abuja (FCT)",
    type: "Full-time",
    seniority: "Senior",
    summary: "Academic leader to establish a practice-oriented department, shaping the next generation of Nigerian business leaders.",
    responsibilities: [
      "Develop innovative M.Sc. programs in Business Administration and Entrepreneurship",
      "Integrate experiential learning (business plans, lean startup) into curriculum",
      "Recruit a blend of experienced academics and industry practitioners",
      "Collaborate on conceptualizing a student enterprise hub or incubator",
      "Build relationships with business communities and chambers of commerce"
    ],
    requirements: [
      "PhD in Business Administration, Management, Entrepreneurship, or Economics",
      "Minimum of 8–10 years teaching/research experience (5 years postgraduate level)",
      "Track record of scholarly output in high-impact peer-reviewed journals",
      "Previous academic leadership experience (HOD/Dean)",
      "Experience in NUC accreditation visits"
    ],
    apply: 'Send CV and Cover Letter to: <a href="mailto:cityuniversitybiz@gmail.com">cityuniversitybiz@gmail.com</a>',
    salary: "Competitive + Pension + Benefits",
    deadline: "Not Specified"
  },
  {
    id: "customer-relationship-officer-university-abuja-2026",
    title: "Customer Relationship Officer",
    date: "2026-05-15",
    location: "Abuja (FCT)",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Heart of the student experience at a new private university, ensuring students and parents feel supported and valued.",
    responsibilities: [
      "Lead welcoming orientation programs for new students",
      "Monitor student engagement and implement intervention strategies for at-risk students",
      "Oversee front desk operations and resolve complex queries/grievances",
      "Manage the student database/CRM system for tracking interactions",
      "Act as a trusted liaison for parents and stakeholders"
    ],
    requirements: [
      "Bachelor’s degree in Psychology, Counselling, Admin, or related field",
      "Minimum 3-5 years experience in customer-facing supervisory roles",
      "Experience implementing or managing CRM systems",
      "Strong conflict resolution and active listening skills"
    ],
    apply: 'Send CV and Cover Letter to: <a href="mailto:cityuniversitybiz@gmail.com">cityuniversitybiz@gmail.com</a>',
    salary: "Commensurate with experience",
    deadline: "Not Specified"
  },
  {
    id: "business-development-marketing-officer-university-abuja-2026",
    title: "Business Development and Marketing Officer",
    date: "2026-05-15",
    location: "Abuja (FCT)",
    type: "Full-time",
    seniority: "Junior",
    summary: "Dual-focused role to build the university brand from scratch and drive student enrolment through strategic marketing.",
    responsibilities: [
      "Build relationships with schools and counselors to promote the university",
      "Manage student enquiry pipeline and convert to enrolments",
      "Execute marketing strategies across all digital channels",
      "Create compelling content (blog, reels, newsletters) for Gen Z demographic",
      "Design and produce marketing collateral (brochures, flyers)"
    ],
    requirements: [
      "Bachelor’s degree in Marketing, Biz Admin, Mass Comm, or related field",
      "1-3 years experience in Marketing or Admissions (Startup experience preferred)",
      "Proficiency in digital marketing tools (Canva, CapCut, Meta Ads)",
      "Experience with CRM or SIS platforms"
    ],
    apply: 'Send CV and Cover Letter to: <a href="mailto:cityuniversitybiz@gmail.com">cityuniversitybiz@gmail.com</a>',
    salary: "Competitive Base + Performance Incentives",
    deadline: "Not Specified"
  },
  {
    id: "spy-driver-lekki-lagos-2026",
    title: "Spy Driver",
    date: "2026-05-15",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Urgent vacancy for a highly disciplined and professional driver with extensive experience for a full-time role in Lekki.",
    responsibilities: [
      "Ensure the vehicle is always clean and well maintained",
      "Conduct regular engine and vehicle checks",
      "Maintain proper dressing, discipline, and good manners",
      "Drive safely and responsibly following employer instructions"
    ],
    requirements: [
      "Minimum qualification: OND/HND",
      "Minimum 10 years driving experience",
      "Age range: 31–40 years; Married preferred",
      "Must provide 2 verifiable guarantors and valid identification"
    ],
    apply: 'WhatsApp CV to: <a href="https://wa.me/2347044760495">wa.me/2347044760495</a> (Include name and location). DO NOT CALL.',
    salary: "₦250,000 + Overtime + Accommodation",
    deadline: "Not Specified"
  },
  {
    id: "finished-products-store-supervisor-kwali-abuja-2026",
    title: "Finished Products Store Supervisor",
    date: "2026-05-15",
    location: "Kwali, Abuja (FCT)",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Management of daily shipment operations and finished goods warehouse for a beverage company in Kwali.",
    responsibilities: [
      "Record and verify incoming and outgoing finished products",
      "Organize and safeguard warehouse items",
      "Oversee shipping process to ensure accurate inventory data",
      "Ensure smooth flow of goods within the warehouse"
    ],
    requirements: [
      "Relevant academic qualifications",
      "3 – 10 years of experience in warehouse or store management",
      "Strong organizational skills"
    ],
    apply: 'Email CV to: <a href="mailto:vijutalent@gmail.com">vijutalent@gmail.com</a> using Job Title as subject.',
    salary: "₦100,000 – ₦250,000 monthly",
    deadline: "2026-07-03"
  },
  {
    id: "nysc-members-fadac-resources-lagos-2026",
    title: "NYSC Members (Corpers)",
    date: "2026-05-14",
    location: "Lagos",
    type: "Internship",
    seniority: "Junior",
    company: "Fadac Resources",
    summary: "Seeking serving or incoming NYSC members for various roles including HR, customer service, administration, or sales.",
    responsibilities: [
      "Support administrative and operational functions",
      "Assist in HR or customer service duties based on department",
      "Handle multitasking assignments in a fast-paced environment"
    ],
    requirements: [
      "Minimum of a BSc Degree or HND",
      "Currently serving or about to begin NYSC",
      "Must reside around Ogudu and its axis",
      "Basic knowledge of Microsoft Office and Google Workspace"
    ],
    apply: 'Send CV to: <a href="mailto:favour.a@fadacresources.com">favour.a@fadacresources.com</a> using the job title as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "digital-marketing-officer-tranos-lagos-2026",
    title: "Digital Marketing Officer",
    date: "2026-05-14",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "TRANOS",
    summary: "Lead digital marketing efforts with a focus on SEO, SEM, and digital ad platforms for B2B growth.",
    responsibilities: [
      "Manage SEO & SEM strategies",
      "Oversee digital ad platforms (Google Ads, LinkedIn Ads)",
      "Perform data analysis and reporting",
      "Utilize CRM tools for lead management"
    ],
    requirements: [
      "Bachelor’s degree in Marketing, Business, or Communications",
      "2 to 3 years in digital marketing (B2B experience preferred)",
      "Good understanding of SEO & SEM",
      "Experience with HTML and CSS is a bonus"
    ],
    apply: '<a href="https://tranos.seamlesshiring.com/job/view/9183#/">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "occupational-nurse-ardova-plc-lagos-2026",
    title: "Occupational Nurse",
    date: "2026-05-14",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Ardova Plc",
    summary: "Provide healthcare services and manage medical claims within a corporate environment.",
    responsibilities: [
      "Deliver nursing care and occupational health support",
      "Manage medical claims and documentation",
      "Utilize office productivity tools for reporting"
    ],
    requirements: [
      "Bachelor’s degree in nursing with Registered Nurse (RN) qualification",
      "3-5 years as a registered Nurse",
      "Certification in Occupational Health is an added advantage",
      "Knowledge in Claims management"
    ],
    apply: '<a href="https://ardovaplc.seamlesshiring.com/job/view/9363#/">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "bank-tellers-multiple-locations-2026",
    title: "Bank Tellers",
    date: "2026-05-14",
    location: "Lagos, Akwa Ibom, Bayelsa",
    type: "Full-time",
    seniority: "Junior",
    summary: "Handling cash transactions and providing customer service in various bank branches.",
    responsibilities: [
      "Process cash deposits and withdrawals",
      "Handle retail customer inquiries",
      "Maintain high accuracy in financial records"
    ],
    requirements: [
      "OND (Upper Credit Only)",
      "Maximum of 27 years old",
      "Previous experience in cash handling or retail is preferred",
      "Strong mathematical aptitude"
    ],
    apply: '<a href="https://docs.google.com/forms/d/e/1FAIpQLScW3m3Qgkf-NTMaeiaJvNPxVa-_t3i5uOchP_lK88j9qgNsDg/viewform">Click here to apply online</a>',
    salary: "₦150,000 (Net)",
    deadline: "Not Specified"
  },
  {
    id: "senior-full-stack-developer-sweden-2026",
    title: "Senior Full-stack Developer",
    date: "2026-05-14",
    location: "Northern Part of Sweden",
    type: "Full-time",
    seniority: "Senior",
    summary: "Lead full-stack development for projects in Sweden using Vue.js and .NET.",
    responsibilities: [
      "Develop frontend using Vue.js and TypeScript",
      "Build backend services using .NET / C#",
      "Manage cloud infrastructure on Azure and YAML pipelines"
    ],
    requirements: [
      "Strong experience in C#.NET, Vue.js, and TypeScript",
      "Expertise in Azure, Docker, and OpenAPI",
      "Understanding of event-driven architecture (EDA)"
    ],
    apply: 'Send CV to: <a href="mailto:zeneith.ab@gmail.com">zeneith.ab@gmail.com</a> (cc: macjusticeagm@gmail.com)',
    salary: "$120,000 – $130,000 annually (with Visa Sponsorship)",
    deadline: "2026-05-14"
  },
  {
    id: "branch-manager-neat-microcredit-kano-2026",
    title: "Branch Manager",
    date: "2026-05-14",
    location: "Kano",
    type: "Full-time",
    seniority: "Senior",
    company: "NEAT Microcredit",
    summary: "Manage branch operations and drive loan performance in Kano locations.",
    responsibilities: [
      "Drive business growth and loan performance",
      "Lead and supervise branch staff",
      "Maintain strong customer relationships"
    ],
    requirements: [
      "Experience in banking, microfinance, or financial services",
      "Strong leadership skills",
      "Knowledge of the Kano market axis (Sabon Gari, Kabuga, Karu)"
    ],
    apply: 'Email: <a href="mailto:hr@neatmicrocredit.com">hr@neatmicrocredit.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "personal-assistant-headquarters-vi-lagos-2026",
    title: "Personal Assistant",
    date: "2026-05-14",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary: "Provide high-level administrative support at company headquarters.",
    responsibilities: [
      "Manage executive schedules and correspondence",
      "Coordinate office administrative tasks",
      "Handle confidential documentation"
    ],
    requirements: [
      "HND & BSc with Upper Credit",
      "Maximum 27 years old",
      "Male preferred",
      "Proactive and detail-oriented"
    ],
    apply: '<a href="https://forms.gle/D92NPZdJRuibsw2f7">Click here to apply online</a>',
    salary: "₦191,000",
    deadline: "Not Specified"
  },
  {
    id: "operations-analyst-graduate-trainee-lagos-2026",
    title: "Operations Analyst – Graduate Trainee",
    date: "2026-05-14",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary: "Structured trainee program for top-tier graduates to build a career in operations analysis.",
    responsibilities: [
      "Analyze operational data and performance metrics",
      "Support business process improvements",
      "Collaborate with multi-disciplinary teams"
    ],
    requirements: [
      "BSc degree with minimum 2:1 (Second Class Upper)",
      "Disciplines: Business Admin, Management, Applied/Pure Sciences",
      "Recent graduate status"
    ],
    apply: '<a href="https://jobs.smartrecruiters.com/ThePlace1/744000126280729-operations-analyst-graduate-trainee">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "front-desk-officer-echolab-lagos-2026",
    title: "Front Desk Officer",
    date: "2026-05-14",
    location: "Festac, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Echolab Radiology and Laboratory Services",
    summary: "Customer-facing role in a diagnostic facility, requiring excellent communication and patient management skills.",
    responsibilities: [
      "Handle patient reception and identification",
      "Manage office administrative tasks using Microsoft Office",
      "Coordinate patient appointments and inquiries"
    ],
    requirements: [
      "BSc in Health Management, Basic Sciences, or relevant course",
      "Experience in the Diagnostics industry",
      "Resident around Festac area",
      "Strong time management and communication skills"
    ],
    apply: 'Send CV to: <a href="mailto:careers@echolab.ng">careers@echolab.ng</a> using the job title as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "credit-risk-intern-sahel-capital-lagos-2026",
    title: "Credit Risk Intern",
    date: "2026-05-14",
    location: "Lagos",
    type: "Internship",
    seniority: "Junior",
    company: "Sahel Capital",
    summary: "Hands-on internship for quantitative-minded graduates to learn credit risk analysis in private equity.",
    responsibilities: [
      "Assist in credit risk assessments and quantitative analysis",
      "Support the creation of reports and presentations",
      "Maintain risk management documentation"
    ],
    requirements: [
      "NYSC completion is mandatory",
      "Strong analytical and Excel skills",
      "CFA Level I passed or in view is preferred",
      "High attention to detail"
    ],
    apply: '<a href="https://hris.peoplehum.com/ehire/jobs/8e354558-0e5c-4297-aac6-ab0c62d0ee8c/9a3a5afd-64c3-4e40-a35e-6044769176f2">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "solar-technical-support-staff-erisco-smart-energy-2026",
    title: "Solar Technical Support Staff",
    date: "2026-05-14",
    location: "Lagos",
    type: "Full-time",
    company: "Erisco Smart Energy Limited",
    summary: "Support technical aspects of solar projects, assisting sales teams and customers with system sizing and troubleshooting.",
    responsibilities: [
      "Conduct site assessments and energy audits",
      "Assist with solar product selection and system design",
      "Troubleshoot technical issues related to solar installations",
      "Train customers on system operation and maintenance"
    ],
    requirements: [
      "Knowledge of solar PV systems, inverters, and electrical systems",
      "Ability to interpret technical specifications",
      "Sales and negotiation abilities",
      "Proficiency in solar design tools"
    ],
    apply: 'Email CV to: <a href="mailto:ikechukwu.chibuike@eriscosmartenergyltd.com">ikechukwu.chibuike@eriscosmartenergyltd.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "branch-service-manager-home-appliances-multiple-2026",
    title: "Branch Service Manager – Home Appliances",
    date: "2026-05-14",
    location: "Lagos / Onitsha / Abuja",
    type: "Full-time",
    seniority: "Senior",
    summary: "Lead after-sales service operations for home appliances, ensuring efficient repairs and customer satisfaction.",
    responsibilities: [
      "Oversee daily operations of the service centre",
      "Manage technician teams and spare parts inventory",
      "Handle escalated customer complaints",
      "Conduct audits and inspections at upcountry centres"
    ],
    requirements: [
      "Bachelor’s degree or diploma in Engineering or Electronics",
      "Minimum 8 years’ experience in after-sales service management",
      "Willingness to travel for field audits",
      "Strong leadership and technical troubleshooting skills"
    ],
    apply: 'Forward CV to: <a href="mailto:jobs@kennediaconsulting.net">jobs@kennediaconsulting.net</a> no later than 15th May 2026',
    salary: "Not Specified",
    deadline: "2026-05-15"
  },
  {
    id: "teller-customer-service-roles-multiple-locations-2026",
    title: "Teller and Customer Service Roles",
    date: "2026-05-14",
    location: "Multiple Locations (Lagos, Makurdi, Akure, etc.)",
    type: "Full-time",
    seniority: "Junior",
    summary: "Seeking articulate and customer-focused candidates for banking roles with scholarship opportunities.",
    responsibilities: [
      "Process bank transactions efficiently",
      "Deliver professional customer service",
      "Maintain accurate financial documentation"
    ],
    requirements: [
      "Maximum 25 years old",
      "Smart and articulate personality",
      "Available for immediate start"
    ],
    apply: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSeBojCGCtQsEOzcGBpgbrt7GZxwcDE7v94ZrloLh1DyPRrOwg/viewform?usp=publish-editor">Click here to apply online</a>',
    salary: "₦207,000 Net Monthly + HMO + Pension + B.Sc Scholarship",
    deadline: "Not Specified"
  },
  {
    id: "group-finance-controller-nigeria-2026",
    title: "Group Finance Controller",
    date: "2026-05-14",
    location: "Nigeria",
    type: "Full-time",
    seniority: "Senior",
    summary: "Lead group-level financial management and consolidation for multi-entity operations in manufacturing/trading.",
    responsibilities: [
      "Oversee financial consolidation and reporting",
      "Manage group-level banking and treasury operations",
      "Drive strategic financial planning and taxation",
      "Lead budgeting and MIS reporting across business units"
    ],
    requirements: [
      "CA or equivalent qualification",
      "15+ years of experience, with mandatory Nigeria work experience",
      "Proven leadership in complex financial operations",
      "Expertise in ERP systems and cross-border transactions"
    ],
    apply: 'Email: <a href="mailto:hr.nigeria@sungroupe.com">hr.nigeria@sungroupe.com</a> with subject "Group Finance Controller – Nigeria"',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "content-creator-shelter-for-you-properties-lekki-2026",
    title: "Content Creator",
    date: "2026-05-14",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Shelter For You Properties",
    summary: "Creative and trend-savvy individual to grow online presence for a real estate firm through compelling content.",
    responsibilities: [
      "Create graphics and visual storytelling content",
      "Manage Instagram, TikTok, Snapchat, and X platforms",
      "Monitor trends and generate leads through creative strategies"
    ],
    requirements: [
      "Minimum of 1 year experience",
      "Skilled in video editing",
      "Must reside within or close to Lekki Phase 1",
      "Physical resumption mandatory"
    ],
    apply: 'Send CV and cover letter to: <a href="mailto:info@shelterforyouproperties.com">info@shelterforyouproperties.com</a>',
    salary: "₦120,000 (Tax Inclusive)",
    deadline: "Not Specified"
  },
  {
    id: "chefs-orchid-road-lekki-2026",
    title: "Chefs",
    date: "2026-05-14",
    location: "Orchid Road, Lekki",
    type: "Full-time",
    summary: "Passionate culinary professionals needed to prepare high-quality meals in a fast-paced environment.",
    responsibilities: [
      "Prepare a variety of dishes to high standards",
      "Ensure kitchen safety and food hygiene",
      "Maintain efficient kitchen operations"
    ],
    requirements: [
      "Proven experience as a Chef or Cook",
      "Knowledge of food hygiene and kitchen safety",
      "Ability to work in a fast-paced environment",
      "Team-oriented mindset"
    ],
    apply: 'Send CV to: <a href="mailto:Recruitlagos2025@gmail.com">Recruitlagos2025@gmail.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "van-sales-representative-uac-foods-multiple-2026",
    title: "Van Sales Representatives",
    date: "2026-05-14",
    location: "Lagos, Abuja, Port Harcourt, and more",
    type: "Full-time",
    company: "UAC Foods Limited",
    summary: "Direct sales and distribution of UAC food products (Gala, Swan, etc.) across various routes.",
    responsibilities: [
      "Drive company van and sell products on assigned routes",
      "Meet daily/monthly sales and customer acquisition targets",
      "Maintain accurate sales and stock records"
    ],
    requirements: [
      "Minimum of BSC/HND/OND",
      "Valid driver’s license",
      "Strong communication and negotiation skills",
      "Knowledge of assigned location"
    ],
    apply: 'Send CV to: <a href="mailto:keagrouprecruit@gmail.com">keagrouprecruit@gmail.com</a> specifying your preferred location.',
    salary: "Basic Salary + Commission + HMO + Pension",
    deadline: "Not Specified"
  },
  {
    id: "social-media-assistant-canada-immigration-remote-2026",
    title: "Social Media Assistant",
    date: "2026-05-14",
    location: "Remote",
    type: "Full-time",
    summary: "Support a Canada immigration firm with social media management, community engagement, and visual design.",
    responsibilities: [
      "Create engaging content and professional visual designs",
      "Build and engage a community of prospective Canadians",
      "Respond to inquiries and maintain high online availability"
    ],
    requirements: [
      "Passion for immigration and international opportunities",
      "Excellent visual design skills (flyers, materials)",
      "Outstanding grammar and vocabulary",
      "High responsiveness in a remote work setting"
    ],
    apply: 'Send CV and portfolio to: <a href="mailto:Recruitment@mabtuson.com">Recruitment@mabtuson.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "graduate-trainee-gti-investment-group-2026",
    title: "Graduate Trainee",
    date: "2026-05-14",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "GTI Investment group",
    summary: "Structured entry-level program for ambitious graduates to build a career in investments.",
    responsibilities: [
      "Support investment analysis and research",
      "Participate in client relationship management",
      "Contribute to team project goals"
    ],
    requirements: [
      "Minimum of a first degree",
      "Valid NYSC Discharge Certificate",
      "Maximum 26 years old",
      "Strong analytical and creative skills"
    ],
    apply: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSeyJPRMWbM0txq2Tdmz4IpJi9xrcgL71e2lYLHFkwMa_-saFQ/viewform">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "video-journalist-bbc-yoruba-lagos-2026",
    title: "Video Journalist",
    date: "2026-05-14",
    location: "Lagos",
    type: "Full-time",
    company: "BBC Yoruba",
    summary: "Produce engaging video content for BBC Yoruba, focusing on high-quality journalism and storytelling.",
    responsibilities: [
      "Filming and editing video packages",
      "Reporting on current events in Yoruba",
      "Storytelling across digital platforms"
    ],
    requirements: [
      "Experience in video journalism",
      "Fluency in Yoruba language",
      "Strong editing skills"
    ],
    apply: '<a href="https://careers.bbc.co.uk/job/Video-Journalist%2C-BBC-Yoruba/45112-en_GB">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "social-media-communications-intern-iita-ibadan-2026",
    title: "Social Media & Communications Intern",
    date: "2026-05-14",
    location: "Ibadan",
    type: "Internship",
    seniority: "Junior",
    company: "IITA",
    summary: "Gain professional experience in communications and social media management at an international research institute.",
    responsibilities: [
      "Manage official social media platforms",
      "Assist in writing and editing content",
      "Support basic graphic design tasks"
    ],
    requirements: [
      "Recent graduate in Mass Communication or related field",
      "Basic knowledge of LinkedIn, Instagram, X",
      "Proficiency in Microsoft Office",
      "Strong writing skills"
    ],
    apply: '<a href="https://jobs.workable.com/view/5mzgfqBSvnMCN4Jw7Xjy1A/social-media-%26-communications-intern-in-ibadan-at-international-institute-of-tropical-agriculture(iita)">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "nysc-data-entry-intern-cyclofoss-lagos-2026",
    title: "NYSC Data Entry Intern",
    date: "2026-05-14",
    location: "Lagos",
    type: "Internship",
    seniority: "Junior",
    company: "Cyclofoss Technologies Limited",
    summary: "Support data management and entry operations for a technology firm with free shared accommodation available.",
    responsibilities: [
      "Perform accurate data entry tasks",
      "Support administrative documentation",
      "Maintain data integrity"
    ],
    requirements: [
      "HND (Upper Credit/Distinction) or Degree (2:1/First Class)",
      "Ready to relocate or posted to Amuwo Odofin LGA",
      "Strong attention to detail"
    ],
    apply: 'Email: <a href="mailto:hr@cyclofoss.com">hr@cyclofoss.com</a> using Job Title and State Code as subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "finance-intern-nysc-multinational-fmcg-lagos-2026",
    title: "Finance Intern (NYSC)",
    date: "2026-05-14",
    location: "Ikoyi, Lagos",
    type: "Internship",
    seniority: "Junior",
    summary: "Accounting internship for a Corps member in a multinational FMCG firm.",
    responsibilities: [
      "Assist in managing accounts payable and receivable",
      "Prepare invoices and receipts",
      "Maintain records in Sage 50 and QuickBooks",
      "Support month-end closing and reconciliations"
    ],
    requirements: [
      "Current NYSC Corps Member",
      "Background in Accounting, Economics, or Finance",
      "Basic knowledge of accounting software"
    ],
    apply: 'Apply to: <a href="mailto:recruitment@tricyglobal.com">recruitment@tricyglobal.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "whatsapp-customer-sales-closer-remote-2026",
    title: "WhatsApp Customer Sales Closer",
    date: "2026-05-14",
    location: "Remote",
    type: "Full-time",
    summary: "Manage high-volume WhatsApp customer interactions to drive sales conversions from home.",
    responsibilities: [
      "Close sales via WhatsApp communications",
      "Maintain daily work schedule (8 AM – 10 PM)",
      "Provide timely customer responses"
    ],
    requirements: [
      "Strong communication and persuasion skills",
      "Stable internet connection",
      "Reliable and committed to long shifts"
    ],
    apply: '<a href="https://rymgame.com/whatsapp-customer-sales-closer/">Click here for full details and to apply</a>',
    salary: "₦140,000 per month + ₦8,000 credit allowance",
    deadline: "Not Specified"
  },
  {
    id: "quality-control-manager-ayoola-foods-lagos-2026",
    title: "Quality Control Manager",
    date: "2026-05-14",
    location: "Iyana Ipaja, Lagos",
    type: "Full-time",
    seniority: "Senior",
    company: "Ayoola Foods Limited",
    summary: "Strategic management of quality standards in a leading food manufacturing company.",
    responsibilities: [
      "Oversee end-to-end quality control processes",
      "Ensure compliance with FMCG/Food regulatory standards",
      "Manage laboratory and factory quality teams"
    ],
    requirements: [
      "HND / BSC / MSc in Science Lab Tech, Food Science, or Microbiology",
      "Previous experience as a QC Manager in the FMCG industry (flour products preferred)",
      "Maximum 45 years old"
    ],
    apply: 'Send CV to: <a href="mailto:careers@ayoolafoodsng.com">careers@ayoolafoodsng.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "lead-generation-sales-support-va-remote-2026",
    title: "Lead Generation & Sales Support VA",
    date: "2026-05-14",
    location: "Remote",
    type: "Part-time",
    summary: "Generate and qualify high-quality leads for UK businesses in heating and property finance.",
    responsibilities: [
      "Cold calling and emailing prospects",
      "Qualify leads based on business criteria",
      "Manage leads within CRM systems"
    ],
    requirements: [
      "Strong English communication skills",
      "Fast learner of business/finance concepts",
      "Experience with CRM management"
    ],
    apply: '<a href="https://forms.gle/AyxUW6U5qQY3NGZf6">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "executive-assistant-remote-full-time-2026",
    title: "Executive Assistant",
    date: "2026-05-14",
    location: "Remote",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Support senior management in a fast-paced environment following UK working hours.",
    responsibilities: [
      "Manage high-level administrative and operational tasks",
      "Coordinate schedules and communications",
      "Execute proactive task management independently"
    ],
    requirements: [
      "Strong admin and operations background",
      "Highly organized and proactive",
      "Ability to work UK hours"
    ],
    apply: '<a href="https://forms.gle/m5FWYYjBCQfVYmM47">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "marketing-associate-b2b-contract-2026",
    title: "Marketing associate (B2B)",
    date: "2026-05-14",
    location: "Lagos (Hybrid)",
    type: "Contract",
    summary: "Writer-focused marketing associate role to drive B2B brand presence.",
    responsibilities: [
      "Create compelling B2B marketing content",
      "Support digital marketing campaigns",
      "Manage content writing projects"
    ],
    requirements: [
      "Strong writing skills",
      "Experience in B2B marketing",
      "Available for one day onsite in the office"
    ],
    apply: '<a href="https://www.linkedin.com/jobs/view/4413409923">Click here to apply online</a>',
    salary: "350k – 400k",
    deadline: "Not Specified"
  },
  {
    id: "graphics-design-executive-pitchhub-remote-2026",
    title: "Graphics Design Executive",
    date: "2026-05-14",
    location: "Remote, Nigeria",
    type: "Full-time",
    company: "PitchHub",
    summary: "Creative role at PitchHub offering creative ownership, global exposure, and long-term career growth.",
    responsibilities: [
      "Design presentations, reports, and social media assets",
      "Maintain brand consistency across various platforms",
      "Collaborate on global creative projects"
    ],
    requirements: [
      "Strong graphic design portfolio",
      "Advanced Canva skills",
      "Experience in report and presentation design"
    ],
    apply: '<a href="https://presoftsolution.com/jobs/graphics-design-executive-pitchhub-remote-nigeria">Click here to apply online</a>',
    salary: "₦300,000 – ₦400,000 per month",
    deadline: "Not Specified"
  },
  {
    id: "head-of-operations-gbagada-lagos-2026",
    title: "Head of Operations",
    date: "2026-05-13",
    location: "Gbagada, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Strategic leader to oversee, optimize, and drive operational excellence across trade, manufacturing, and supply chain functions in a structured environment.",
    responsibilities: [
      "Oversee, optimize, and drive operational excellence across the organization",
      "Lead operational management and facility oversight",
      "Implement process improvements and strategic leadership",
      "Manage operations within a structured manufacturing environment"
    ],
    requirements: [
      "Minimum of 8–10 years’ experience in operations management, with at least 5 years in a managerial role",
      "HND/B.Sc. in Engineering, Business Administration, Social Sciences, or related discipline",
      "MBA or Master’s degree in Operations or related field is an added advantage",
      "Experience in manufacturing, trade, logistics, or structured operations environments"
    ],
    apply: 'Interested candidates can share their profile resume via mail to: <a href="mailto:contact@mrwilliams.com.ng">contact@mrwilliams.com.ng</a>',
    salary: "₦700,000 – ₦750,000 Net plus Benefits (Annual Leave, Housing, Communication, HMO & Pension)",
    deadline: "Not Specified"
  },
  {
    id: "lbs-young-talents-programme-lagos-2026",
    title: "Young Talents Programme 2026",
    date: "2026-05-13",
    location: "Lagos",
    type: "Internship",
    seniority: "Junior",
    company: "Lagos Business School",
    summary: "High-impact development programme for top-tier graduates to transition into the professional world.",
    responsibilities: [
      "Participate in the Lagos Business School Young Talents Programme activities"
    ],
    requirements: [
      "First Class or Second Class Upper degree holders",
      "Under 30 years old at the time of application",
      "Currently undergoing or have completed NYSC",
      "Master’s degree holders or candidates (optional)",
      "Previous YTP participants are not eligible"
    ],
    apply: '<a href="https://events.lbs.edu.ng/YTP26">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "architect-civil-engineer-interns-nysc-abuja-popville-2026",
    title: "Architect/ Civil Engineer Interns – NYSC",
    date: "2026-05-13",
    location: "Abuja",
    type: "Internship",
    seniority: "Junior",
    company: "Popville Luxury Homes",
    summary: "Passionate and driven Architects and Civil Engineers to join a luxury home development team.",
    responsibilities: [
      "Support architectural design and civil engineering projects",
      "Collaborate with the construction and design teams",
      "Assist in project site monitoring and documentation"
    ],
    requirements: [
      "Background in Architecture or Civil Engineering",
      "Currently serving as an NYSC member",
      "Passionate and driven mindset"
    ],
    apply: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSdK7DFVIIn-cX5cQgAJsp64FTwHrraZXloSSaGB3p_gCf4kTQ/viewform">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "graduate-management-trainee-dufil-prima-foods-2026",
    title: "Graduate Management Trainee Programme",
    date: "2026-05-13",
    location: "Multiple Locations",
    type: "Full-time",
    seniority: "Junior",
    company: "Dufil Prima Foods Ltd",
    summary: "Competitive trainee programme for First Class graduates in engineering and sciences looking to start a career in the FMCG sector.",
    responsibilities: [
      "Participate in the cross-functional management trainee rotation",
      "Support various engineering and production departments",
      "Willingness to accept deployment in any company location"
    ],
    requirements: [
      "First Class Honours degree only",
      "B.Eng. or BSc. in Electrical, Chemical, Mechanical, Civil Engineering, Food Science, Statistics, etc.",
      "0 – 5 years of work experience",
      "Not more than 30 years of age",
      "Must have completed NYSC (scanned discharge certificate required)",
      "Computer literate and innovative mindset"
    ],
    apply: '<a href="https://recruitment.dragnet-solutions.com/portal/apply?d=dufilprima&details=551">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "investment-analyst-graduate-trainee-sahel-capital-lagos-2026",
    title: "Graduate Trainee Programme - Investment Analyst",
    date: "2026-05-13",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Sahel Capital",
    summary: "Graduate trainee program offering hands-on experience and structured learning in investment analysis within the private equity space.",
    responsibilities: [
      "Support investment analysts with data collection and research",
      "Participate in structured learning and professional mentorship",
      "Gain hands-on experience in the investment process"
    ],
    requirements: [
      "Bsc/HND in any field from a recognised institution",
      "NYSC completion is mandatory",
      "0–2 years of relevant work experience"
    ],
    apply: '<a href="https://areatalkreprts.com/2026-sahel-capital-graduate-trainee-programme-investment-analyst/">Click here to apply online</a>',
    salary: "Monthly Stipend",
    deadline: "Not Specified"
  },
  {
    id: "customer-service-officer-fintech-lekki-lagos-2026",
    title: "Customer Service Officer – FinTech",
    date: "2026-05-13",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary: "Support Bitcoin, crypto, and digital gift card transactions for a FinTech company in the digital assets space.",
    responsibilities: [
      "Manage customer inquiries regarding digital assets and gift cards",
      "Support crypto and gift card transaction flows",
      "Utilize CRM tools to manage customer records",
      "Collaborate with internal teams for issue resolution"
    ],
    requirements: [
      "2+ years customer service experience",
      "Banking or fintech background is an advantage",
      "Strong communication and phone skills",
      "Familiarity with CRM tools & Microsoft Office"
    ],
    apply: '<a href="https://forms.gle/P3VhdoptuB9kxyFLA">Click here to apply online</a>',
    salary: "₦300,000 NET",
    deadline: "Not Specified"
  },
  {
    id: "project-manager-dezyn-cycle-lagos-2026",
    title: "Project Manager",
    date: "2026-05-13",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Dezyn Cycle Ltd",
    summary: "Manage architecture, interior fit-out, and design + build projects in a hybrid work structure.",
    responsibilities: [
      "Lead and manage architecture, interior fit-out, and design + build projects",
      "Develop project schedules, timelines, and execution strategies",
      "Coordinate consultants, contractors, vendors, and internal teams",
      "Ensure compliance with safety, operational, and company standards"
    ],
    requirements: [
      "Bachelor’s degree in Architecture, Building, Project Management, or related field",
      "4–7 years experience in project management within architecture, interiors, or construction",
      "Strong understanding of project execution, construction processes, and fit-out coordination"
    ],
    apply: 'Send CV and Portfolio (if available) to: <a href="mailto:dezyncycle.team@gmail.com">dezyncycle.team@gmail.com</a> with subject: Application – Project Manager',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "customer-experience-representative-oriki-group-lekki-ajah-2026",
    title: "Customer Experience Representative",
    date: "2026-05-13",
    location: "Lekki / Victoria Island / Ajah, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Oriki Group",
    summary: "Customer-focused representative to join a dynamic team, requiring proximity to the Island/Lekki axis and availability for night shifts.",
    responsibilities: [
      "Handle customer inquiries and experience management",
      "Maintain high standards of service excellence",
      "Work night shifts as scheduled"
    ],
    requirements: [
      "Minimum of 3 years RELEVANT Customer Experience experience",
      "Must reside within the Lekki, Victoria Island or Ajah axis",
      "Must be available to work night shifts as scheduled"
    ],
    apply: 'Qualified candidates should send their CV/Resume to: <a href="mailto:jointheteam@orikigroup.com">jointheteam@orikigroup.com</a> using “Customer Experience Representative” as the subject.',
    salary: "₦250,000 net",
    deadline: "Not Specified"
  },
  {
    id: "nysc-cashier-ikeja-lagos-2026",
    title: "NYSC Cashier",
    date: "2026-05-13",
    location: "Ikeja, Lagos",
    type: "Internship",
    seniority: "Junior",
    summary: "Cashier role for a serving NYSC Corps Member in a healthcare facility, handling payments and financial reconciliation.",
    responsibilities: [
      "Handle patient payments and receipts",
      "Perform daily cash reconciliation",
      "Issue invoices and maintain records"
    ],
    requirements: [
      "Accounting/Finance/Business Admin background",
      "Currently serving as an NYSC Corp Member (Abuja posting)",
      "Honest and detail-oriented"
    ],
    apply: 'Send CV to: <a href="mailto:Osinmade.adetutu@cathemeye.com">Osinmade.adetutu@cathemeye.com</a>',
    salary: "₦40,000/month stipend",
    deadline: "Not Specified"
  },
  {
    id: "asset-liability-manager-alm-ikoyi-lagos-2026",
    title: "Asset & Liability Manager (ALM)",
    date: "2026-05-13",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Drive effective balance sheet management and optimize liquidity for a leading investment management firm.",
    responsibilities: [
      "Manage and optimize the firm’s balance sheet",
      "Oversee liquidity management strategies and funding levels",
      "Monitor and manage interest rate risk and financial exposures",
      "Collaborate with the Trading Desk for strategic decision-making",
      "Develop and implement ALM frameworks and policies"
    ],
    requirements: [
      "7–10 years’ experience in ALM, Treasury, or Balance Sheet Management",
      "Postgraduate qualification (MBA/MSc) is required",
      "Relevant professional certifications (e.g., ICAN) are an advantage",
      "Strong expertise in interest rate risk and trading operations"
    ],
    apply: 'Qualified candidates should apply with their updated CV to: <a href="mailto:ifeoluwa.recruit1@gmail.com">ifeoluwa.recruit1@gmail.com</a>',
    salary: "₦1,169,000 – ₦1,500,000 (Gross) plus 13th-month salary",
    deadline: "Not Specified"
  },
  {
    id: "mechanical-engineer-lagos-bahms-technical-2026",
    title: "Mechanical Engineer",
    date: "2026-05-11",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Bahms Technical",
    summary: "Experienced Mechanical Engineer with strong construction project experience to plan, execute, and supervise mechanical works on-site.",
    responsibilities: ["Oversee installation, testing, and commissioning of mechanical systems (HVAC, plumbing, fire protection, etc.)", "Interpret drawings, specifications, and ensure compliance with project requirements", "Coordinate with other engineering teams and site personnel", "Monitor project progress, quality, and safety standards", "Provide technical support and resolve on-site issues"],
    requirements: ["Minimum of 5 years’ experience in a construction company (MEP projects)", "Strong technical knowledge of mechanical building services", "Ability to work under pressure and meet deadlines", "Excellent problem-solving and communication skills"],
    apply: 'Qualified candidates should send their CV to: <a href="mailto:hr@bahmstechnical.com">hr@bahmstechnical.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "graphics-designer-lagos-uridium-technologies-2026",
    title: "Graphics Designer",
    date: "2026-05-11",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Uridium Technologies",
    summary: "Creative and technical Graphics Designer to showcase creative skills, typography, and color theory.",
    responsibilities: ["Design visual content following brand guidelines", "Typography and color theory application", "Manage design projects within timelines"],
    requirements: ["Degree in Graphic Design, Visual Arts, or equivalent experience", "Proven track record in a professional design role", "A strong showcase of creative and technical skills", "Proficiency in industry-standard design tools", "Mastery of typography, color theory, and time management"],
    apply: '<a href="https://uridiumoutsourcing.com/job/graphics-designer-32/">https://uridiumoutsourcing.com/job/graphics-designer-32/</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "front-desk-officer-abuja-firstfruit-homes-limited-2026",
    title: "Front Desk Officer",
    date: "2026-05-11",
    location: "Abuja",
    type: "Full-time",
    seniority: "Junior",
    company: "Firstfruit Homes Limited",
    summary: "Professional and organized Front Desk Officer to handle customer service and administrative support.",
    responsibilities: ["Handle front desk operations and guest reception", "Customer service and inquiry management", "Support administrative tasks"],
    requirements: ["Minimum of OND/HND/B.Sc in any related field", "Proven experience in customer service or front desk operations is an advantage", "Good communication and interpersonal skills", "Proficiency in Microsoft Office tools", "Professional appearance and attitude", "Ability to multitask and work under pressure", "Strong organizational skills"],
    apply: 'Send CV to: <a href="mailto:careers@firstfruithousing.org">careers@firstfruithousing.org</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "ai-automation-engineer-full-stack-ai-integrations-2026",
    title: "AI Automation Engineer (Full Stack + AI Integrations)",
    date: "2026-05-11",
    location: "Remote",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Build AI-powered automation systems, chatbots, agents, and custom software integrations.",
    responsibilities: ["Build AI chatbots & AI agents", "Develop CRM automations and API integrations", "Create lead routing systems and AI appointment setters", "Develop outreach automation and internal dashboards", "Implement workflow automation and Slack/CRM integrations", "Build AI sales systems"],
    requirements: ["Python", "JavaScript", "APIs & webhooks", "JSON", "Databases", "Backend logic", "Debugging", "Experience with OpenAI API & Claude API", "AI agents & Prompt engineering", "n8n / Make / Zapier", "GoHighLevel", "Nice To Have: Sales automation experience"],
    apply: 'Apply Here: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPeAN2gGckR_hoHCVdvhAuRo3MoWdKqiwyBcs2X6fD7cdvlA/viewform">Click to Apply</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "purlin-machine-operator-agbara-ogun-african-industries-2026",
    title: "Purlin Machine Operator",
    date: "2026-05-11",
    location: "Agbara, Ogun",
    type: "Full-time",
    seniority: "Junior",
    company: "African Industries",
    summary: "Calibrate and operate roll-forming lines to meet production blueprints while ensuring quality and safety standards.",
    responsibilities: ["Calibrate and set up roll-forming lines (turn styles, decoilers, and cutters) to meet production blueprints", "Feed metal coils into the machine and monitor the automated process to detect defects", "Inspect finished purlins for precise dimensions using measuring tools", "Perform routine preventative maintenance on rollers, cutters, and punching dies", "Adhere to all OSHA safety rules, including wearing PPE and LOTO procedures", "Maintain accurate daily production logs and tracking coil usage"],
    requirements: ["High school diploma or equivalent (Vocational training or technical degree is a plus)", "Previous experience (2-5+ years) as a machine operator in metal manufacturing", "Ability to read blueprints and technical drawings", "Strong mechanical aptitude and proficiency with measuring tools", "Basic computer skills for operating control systems"],
    apply: 'Interested and qualified candidates should send their CVs to: <a href="mailto:recruitment.agbara@africanindustries.com">recruitment.agbara@africanindustries.com</a> using the job title as the subject of the mail.',
    salary: "Not Specified",
    deadline: "30th May, 2026"
  },
  {
    id: "quality-control-officer-epe-lagos-d-lipafri-foods-2026",
    title: "Quality Control Officer",
    date: "2026-05-11",
    location: "Epe, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "D-Lipafri Foods",
    summary: "Ensure that raw materials, in-process items, and finished agro-food products meet quality standards and food safety requirements.",
    responsibilities: [
      "Inspect and verify quality of incoming fish (wild & aquaculture), spices, salt, and packaging",
      "Monitor and enforce SOPs across gutting, cutting, washing, marinating, drying, and packaging lines",
      "Ensure HACCP plan compliance at all critical control points (CCPs)",
      "Approve finished goods meeting food safety benchmarks",
      "Maintain documentation for regulatory audits (SON, NAFDAC, FDF)",
      "Issue non-conformance reports and track corrective actions"
    ],
    requirements: [
      "B.Sc in Food Science, Microbiology, Chemistry, or related field",
      "2–4 years of experience in food QC/QA roles",
      "Strong knowledge of HACCP, GMP, and ISO standards",
      "Analytical skills and attention to detail",
      "Proficient in lab testing procedures and report writing",
      "Applicant must reside in Epe and its environs"
    ],
    apply: 'Interested and qualified applicants should send CV to: <a href="mailto:info@d-lipafrifoods.com">info@d-lipafrifoods.com</a> and copy <a href="mailto:aadewuyi@d-lipafrifoods.com">aadewuyi@d-lipafrifoods.com</a> using “QC Officer” as the subject.',
    salary: "Not Specified",
    deadline: "28th May, 2026"
  },
  {
    id: "quality-control-personnel-ogun-wankai-2026",
    title: "Quality Control Personnel",
    date: "2026-05-11",
    location: "Ogun",
    type: "Full-time",
    seniority: "Junior",
    summary: "Ensuring product quality and compliance through rigorous test analysis and inspection.",
    responsibilities: ["Ensuring product quality and compliance through rigorous test Analysis and inspection"],
    requirements: ["BSc Degree in Chemistry / specialised in test analysis"],
    apply: 'Interested and qualified candidates should forward their CV to: <a href="mailto:wankaiinnovativematerial@gmail.com">wankaiinnovativematerial@gmail.com</a> using the position as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "production-supervisor-ojo-alaba-goodbreed-2026",
    title: "Production Supervisor",
    date: "2026-05-11",
    location: "Ojo – Alaba, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Competent and experienced Production Supervisor to oversee daily production operations and ensure efficiency, quality, and compliance for a growing sachet water manufacturing company.",
    responsibilities: ["Supervise and coordinate all production activities within the factory", "Ensure adherence to NAFDAC and hygiene standards at all times", "Monitor machine operations (sachet water production lines) and ensure minimal downtime", "Manage production staff, assign duties, and enforce discipline", "Maintain accurate production records and reports", "Ensure proper use of raw materials to minimize waste", "Conduct routine checks on water treatment and packaging processes", "Identify and resolve production issues promptly"],
    requirements: ["Minimum of HND / B.Sc. Degree in Food science, Biological science or related field", "Proven experience in a factory settings (very important)", "Good leadership and team management skills", "Ability to work under pressure and meet production targets", "Basic technical knowledge of production machines"],
    apply: 'Interested and qualified candidate should send their CV to: <a href="mailto:goodbreedlimited@gmail.com">goodbreedlimited@gmail.com</a> using “PRODUCTION SUPERVISOR” as the subject for the email.',
    salary: "Competitive (based on experience)",
    deadline: "30th May, 2026"
  },
  {
    id: "production-technician-ajah-erisco-foods-2026",
    title: "Production Technician",
    date: "2026-05-11",
    location: "Ajah, Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary: "Skilled and reliable Production Technician to operate and maintain production equipment, ensuring high-quality output and supporting efficient manufacturing processes in line with company standards at Erisco Foods Subsidiary.",
    responsibilities: ["Operate and maintain production equipment", "Follow production schedules and ensure deadlines are met", "Monitor production/ electrical systems comply with safety regulations and standards", "Perform quality control checks to ensure products meet specifications", "Ensure safety procedures are followed at all times", "Keep accurate production records", "Collaborate with other departments to improve production processes to achieve output targets through timely technical intervention", "Train new employees on production processes and equipment"],
    requirements: ["Associate Degree in a technical field (preferred)", "3 – 4 years relevant work experience", "Experience working in a manufacturing or production environment", "Ability to operate and maintain production equipment", "Knowledge of safety procedures and regulations", "Strong attention to detail and quality control", "Ability to work in a fast-paced environment and meet production targets", "Good communication and teamwork skills", "Flexibility to work different shifts and overtime as need", "Applicant must reside in Ajah"],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:recruitment@eriscofoodsltd.com.ng">recruitment@eriscofoodsltd.com.ng</a> using “Production Technician – Ajah” as subject of the email.',
    salary: "Not Specified",
    deadline: "29th June, 2026"
  },
  {
    id: "sacmi-technician-sagamu-2026",
    title: "SACMI Technician",
    date: "2026-05-11",
    location: "Sagamu, Ogun",
    type: "Full-time",
    seniority: "Junior",
    summary: "Technician with experience in using Sacmi Machine to work in Sagamu.",
    responsibilities: ["Operate and maintain Sacmi machines"],
    requirements: ["Trade Test, C&G or OND qualification", "1 – 2 years experience in using Sacmi Machine", "Ready to work in Sagamu, the location of the role"],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:ayomaku@yahoo.com">ayomaku@yahoo.com</a> using the Job Title as the subject of the email.',
    salary: "Not Specified",
    deadline: "11th May, 2026"
  },
  {
    id: "shift-supervisor-mowe-westfield-2026",
    title: "Shift Supervisor",
    date: "2026-05-11",
    location: "Mowe, Ogun",
    type: "Full-time",
    seniority: "Senior",
    summary: "Oversee and manage specific production lines during assigned shifts, ensuring efficient operations, quality control, and environmental compliance. Supervise line staff, maintain equipment, and implement safety and environmental protocols.",
    responsibilities: ["Manage production lines to meet quality and production targets", "Supervise and train line staff to achieve production goals", "Monitor and optimize production processes to minimize waste and reduce costs", "Implement and maintain environmental management systems (EMS) and procedures on the production line", "Monitor and reduce waste, emissions, and energy consumption on the line", "Conduct regular environmental inspections and audits on the line", "Respond to and investigate environmental incidents on the line", "Ensure a safe working environment on the production line", "Enforce safety protocols and conduct regular safety inspections", "Investigate and address safety incidents on the line", "Monitor maintenance of production line equipment", "Schedule and coordinate maintenance activities with the maintenance team", "Ensure timely repair and replacement of equipment", "Ensure quality control measures are in place and effective on the production line", "Monitor and address quality issues on the line", "Communicate with other shifts, management, and departments", "Provide shift reports and performance updates"],
    requirements: ["BSc / B.Engr. / HND/Trade Test", "Minimum of 7 yrs experience in the Manufacturing Industry", "Recycling plant experience", "Strong Engineering background", "Ability to work with little or no Supervision", "A dynamic and astute goal-getter"],
    apply: 'Interested and qualified candidates should send their current CV to: <a href="mailto:victor.allu@westfield-consulting.com">victor.allu@westfield-consulting.com</a> using the Job Title as the subject of the email.',
    salary: "N215,000 – N350,000 per month",
    deadline: "Not Specified"
  },
  {
    id: "mechanical-technician-abeokuta-may-baker-2026",
    title: "Mechanical Technician",
    date: "2026-05-11",
    location: "Abeokuta, Ogun",
    type: "Full-time",
    seniority: "Junior",
    summary: "Responsible for the maintenance of production equipment, water bottling plant, and conducting periodic checks as specified in the Standard Operating Procedure.",
    responsibilities: ["Maintenance of the production equipment", "Maintenance of water bottling plant", "Conducting periodic checks as specified in the Standard Operating Procedure"],
    requirements: ["OND in Mechanical Engineering", "Minimum 3 years’ experience, preferably from a water bottling company"],
    apply: 'Interested and qualified candidates should forward their CV to: <a href="mailto:careers@may-bakerng.com">careers@may-bakerng.com</a> using the position as subject of email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "sales-team-lead-real-estate-lekki-2026",
    title: "Sales Team Lead (Real Estate)",
    date: "2026-05-11",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Results-driven Sales Team Lead to drive revenue, manage a high-performing sales team, and convert strong pipelines into closed real estate deals.",
    responsibilities: ["Lead and coach Sales Executives to hit targets", "Drive property sales and revenue growth", "Manage client relationships and key accounts", "Oversee pipeline conversion and sales performance", "Ensure structured reporting and sales processes"],
    requirements: ["4 to 7 years in real estate sales", "1 to 2 years in a leadership role", "Strong track record of closing deals and leading teams", "Excellent communication, negotiation, and CRM skills"],
    apply: 'Send CVs to: <a href="mailto:info.adeyem@gmail.com">info.adeyem@gmail.com</a>',
    salary: "₦500,000 + Commission, Quarterly Bonus, Pension, HMO & 13th Month",
    deadline: "Not Specified"
  },
  {
    id: "mechanical-technician-trucks-abeokuta-viathan-2026",
    title: "Mechanical Technician (Trucks)",
    date: "2026-05-11",
    location: "Abeokuta, Ogun State",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Skilled Mechanical Technician with strong experience in truck maintenance and engine overhauling, particularly with Sino Trucks and Shacman trucks, to support fleet maintenance operations efficiently.",
    responsibilities: ["Have hands-on experience in engine diagnostics, repairs, and overhauling", "Possess basic electrical troubleshooting knowledge", "Be proactive, technically sound, and cost-conscious", "Be able to support fleet maintenance operations efficiently"],
    requirements: ["Strong experience in truck maintenance and engine overhauling, particularly with Sino Trucks and Shacman trucks", "Basic electrical troubleshooting knowledge", "Proactive, technically sound, and cost-conscious", "Strong mechanical expertise"],
    apply: 'Interested candidates should send their CV to: <a href="mailto:hr@viathan-ng.com">hr@viathan-ng.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "production-technician-workonnect-2026",
    title: "Production Technician",
    date: "2026-05-11",
    location: "Not Specified",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Support manufacturing operations by maintaining, troubleshooting, and optimizing production equipment to ensure efficiency and minimal downtime.",
    responsibilities: ["Operate, monitor, and maintain production machinery", "Diagnose and resolve mechanical/electrical faults", "Perform preventive and corrective maintenance", "Ensure compliance with operational and quality standards", "Support continuous improvement initiatives", "Maintain accurate maintenance and production records"],
    requirements: ["First Degree or HND in Electrical/Mechanical Engineering or related field", "Advanced technical certification (Journeyman/Trade Certificate preferred)", "Minimum of 3 years’ experience in manufacturing", "Electrical & mechanical troubleshooting", "HVAC, hydraulic & pneumatic systems knowledge", "Equipment maintenance & fault diagnosis", "Use of machining tools (lathe, milling machine, drill press, cut-off saw)", "Technical problem-solving and analytical thinking", "Attention to detail", "Time management and task prioritization"],
    apply: '<a href="https://workonnect.africa/job-details/69fb8f0f038661bb1c019af2">https://workonnect.africa/job-details/69fb8f0f038661bb1c019af2</a>',
    salary: "N310,000 – N500,000",
    deadline: "Not Specified"
  },
  {
    id: "direct-sales-agents-remote-2026",
    title: "Direct Sales Agent",
    date: "2026-05-11",
    location: "Remote (Applicants from all states can apply)",
    type: "Full-time",
    seniority: "Junior",
    summary: "Recruiting smart and result-driven Direct Sales Agents (DSA) to join a growing financial institution sales team, with flexible and remote work options.",
    responsibilities: ["Customer onboarding", "Account opening and funding", "Relationship management"],
    requirements: ["SSCE / NCE / OND / HND / B.Sc", "Good communication skills", "Strong negotiation and interpersonal skills", "Sales/marketing experience is an added advantage", "Must be self-motivated and proactive", "Must have an Android phone (2GB–4GB RAM minimum) or iPhone with internet access"],
    apply: 'Interested candidates should send their CV to: <a href="mailto:owonikokoisiak@gmail.com">owonikokoisiak@gmail.com</a> 📱 WhatsApp: <a href="https://wa.me/2348130368379">08130368379</a>',
    salary: "₦200,000 and above (Performance-Based)",
    deadline: "Not Specified"
  },
  {
    id: "warehouse-manager-ikenne-hncabz-2026",
    title: "Warehouse Manager",
    date: "2026-05-08",
    location: "Ikenne Remo, Ogun State",
    type: "Full-time",
    summary: "Responsible for overseeing and coordinating all warehouse operations for agro commodity export, including inventory control, fumigation coordination, and quality compliance.",
    responsibilities: [
      "Supervise and coordinate all warehouse activities including receiving, storage, treatment, loading, and dispatch of agro commodities",
      "Ensure proper stacking, preservation, and handling of products to avoid contamination, infestation, or damage",
      "Monitor warehouse cleanliness, safety, and operational efficiency at all times",
      "Ensure strict adherence to FIFO/FEFO inventory principles where applicable",
      "Maintain accurate inventory records and ensure real-time stock reconciliation",
      "Conduct periodic stock counts and investigate discrepancies",
      "Ensure proper documentation of inbound and outbound movements",
      "Coordinate warehouse entries and validation processes on relevant warehouse management systems",
      "Ensure compliance with company policies, food safety standards, and export regulations",
      "Monitor adherence to fumigation and treatment protocols",
      "Ensure warehouse operations comply with health, safety, and environmental standards",
      "Implement corrective actions for operational non-conformities",
      "Supervise warehouse staff, loaders, security personnel, and third-party operators",
      "Organize shift schedules and allocate responsibilities effectively",
      "Train and enforce operational procedures among warehouse personnel",
      "Prepare operational reports and provide updates to management regularly",
      "Prevent unauthorized movement of goods and warehouse losses",
      "Investigate operational incidents and implement preventive measures"
    ],
    requirements: [
      "Bachelor’s Degree or HND in Logistics, Supply Chain Management, Business Administration, Agricultural Economics, or related field",
      "Minimum of 7 years proven experience in warehouse management within an agro commodity export company",
      "Strong knowledge of export procedures, warehouse documentation, fumigation processes, and inventory management",
      "Proficiency in warehouse management systems and Microsoft Office applications",
      "Excellent leadership, communication, and problem-solving skills",
      "Ability to work under pressure and manage multiple export operations simultaneously",
      "Strong attention to detail and high level of accountability"
    ],
    apply: 'Interested candidates should send their CV to <a href="mailto:hnhrrecruitment@gmail.com">hnhrrecruitment@gmail.com</a> with the subject line “Warehouse Manager – Ikenne”',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "coo-digital-marketing-lagos-oaklands-2026",
    title: "Chief Operating Officer (COO)",
    date: "2026-05-08",
    location: "Lagos, Nigeria",
    type: "Full-time",
    seniority: "Senior",
    summary: "Executive leader responsible for driving operational excellence, profitability, delivery efficiency, and scalable growth across all business units of a Digital Marketing Agency.",
    responsibilities: [
      "Oversee end-to-end operations across Client Service, Creative, Media, Digital Marketing, Production, and Finance & Administration",
      "Ensure efficient execution of all campaigns and client projects",
      "Build scalable systems, processes, and infrastructure for sustainable agency growth",
      "Maintain client delivery standards and team productivity",
      "Ensure the agency operates efficiently while consistently achieving revenue and margin targets"
    ],
    requirements: [
      "Minimum 10–12 years of progressive leadership experience",
      "Minimum 5 years in senior agency operations leadership within Digital Marketing, Advertising, Media, or Creative Agencies"
    ],
    apply: 'Interested candidates should send their CV to <a href="mailto:hr@oaklandsandjohnson.com">hr@oaklandsandjohnson.com</a>',
    salary: "₦900,000 & Above",
    deadline: "Not Specified"
  },
  {
    id: "study-abroad-officer-karu-abuja-globeeasy-2026",
    title: "Study Abroad Officer / Sales Representative",
    date: "2026-05-08",
    location: "Karu Abuja (FCT)",
    type: "Full-time",
    summary: "Responsible for advising prospective students on international education opportunities while driving student recruitment and revenue generation.",
    responsibilities: [
      "Identify and recruit prospective students interested in studying abroad",
      "Convert inquiries into applications and enrollments",
      "Meet assigned monthly and quarterly sales targets",
      "Follow up consistently with leads to drive conversions",
      "Promote study abroad programs and services to potential clients",
      "Provide accurate guidance on study destinations, institutions, and programs",
      "Advise students on admission requirements and application processes",
      "Offer guidance on visa requirements and procedures",
      "Support students in completing application forms and compiling required documents",
      "Submit applications to partner institutions and track progress",
      "Build and maintain strong relationships with prospective and existing clients",
      "Participate in outreach activities such as school visits, fairs, and online campaigns"
    ],
    requirements: [
      "Bachelor’s Degree qualification",
      "1–2 years of experience in Study Abroad or Travel Agency sales",
      "Strong communication and sales ability"
    ],
    apply: 'Qualified candidates should send UPDATED CV to <a href="mailto:globeeasyhr@gmail.com">globeeasyhr@gmail.com</a> using Job title as subject',
    salary: "₦140,000 Gross (with commission/benefits)",
    deadline: "14th May 2026"
  },
  {
    id: "executive-assistant-karu-abuja-globeeasy-2026",
    title: "Executive Assistant",
    date: "2026-05-08",
    location: "Karu Abuja (FCT)",
    type: "Full-time",
    summary: "Provides high-level administrative, strategic, and operational support to the Managing Director in the Travels, Study Abroad, and Logistics sectors.",
    responsibilities: [
      "Manage the MD’s calendar, appointments, and scheduling of meetings",
      "Coordinate internal and external communications on behalf of the MD",
      "Prepare meeting agendas, take minutes, and follow up on action items",
      "Support the MD in strategic planning and execution of key initiatives",
      "Conduct research and provide insights to support business decisions",
      "Prepare high-quality reports, briefs, and presentations for management use",
      "Represent the MD at meetings, events, and engagements when required",
      "Manage travel arrangements including bookings, itineraries, and logistics",
      "Support the MD in leveraging technology for operational efficiency",
      "Oversee day-to-day administrative functions of the Executive Office"
    ],
    requirements: [
      "1–2 years of experience in a similar role",
      "Highly organized, proactive, and tech-savvy individual",
      "Strong report writing and documentation skills",
      "Ability to handle confidential information with discretion"
    ],
    apply: 'Qualified candidates should send CV to <a href="mailto:globeeasyhr@gmail.com">globeeasyhr@gmail.com</a> using job title as subject of mail',
    salary: "₦120,000 – ₦140,000",
    deadline: "14th May 2026"
  },
  {
    id: "account-officer-karu-abuja-globeeasy-may-2026",
    title: "Account Officer",
    date: "2026-05-08",
    location: "Karu, Abuja",
    type: "Full-time",
    summary: "Responsible for managing financial records, tracking transactions, and supporting the company’s day-to-day accounting operations.",
    responsibilities: [
      "Record daily income and expenses",
      "Manage invoices, payments, and receipts",
      "Reconcile bank statements",
      "Prepare simple financial reports",
      "Track outstanding payments and follow up",
      "Maintain accurate financial records",
      "Ensure compliance with basic accounting standards"
    ],
    requirements: [
      "HND/B.Sc. in Accounting or related field",
      "1–2 years experience",
      "Basic Excel and accounting knowledge",
      "Detail-oriented and trustworthy"
    ],
    apply: 'Send CV to <a href="mailto:globeeasyhr@gmail.com">globeeasyhr@gmail.com</a>. Subject: Account Officer – Karu Abuja',
    salary: "₦130,000 – ₦150,000",
    deadline: "14th May 2026"
  },
  {
    id: "production-mechanical-engineer-mowe-2026",
    title: "Production Equipment Mechanical Engineer / Technician",
    date: "2026-05-08",
    location: "Mowe, Ogun State",
    type: "Full-time",
    summary: "Urgently needed for a new pharmaceutical company to maintain and manage production equipment.",
    responsibilities: [
      "Oversee the maintenance and operation of pharmaceutical production equipment",
      "Troubleshoot and resolve mechanical issues in a manufacturing environment",
      "Ensure production efficiency through proactive machinery management"
    ],
    requirements: [
      "B.sc/B.Engr. in Mechanical Engineering",
      "Minimum of 4-5 years of progressive experience in a pharmaceutical manufacturing company",
      "Proficiency in pharmaceutical production equipment is required",
      "Preference for candidates living in Mowe, Ibafo, Magboro and neighboring cities"
    ],
    apply: 'Forward CV to: <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> and <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "accountant-lekki-briccs-2026",
    title: "Accountant",
    date: "2026-05-08",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    summary: "Manage accounting functions for a telecommunications firm, ensuring analytical accuracy and problem-solving.",
    responsibilities: [
      "Perform daily accounting tasks and financial record keeping",
      "Prepare management reports and financial analysis",
      "Maintain strong proficiency in Microsoft Office, especially Excel",
      "Handle multilingual communications if applicable"
    ],
    requirements: [
      "Good First Degree (B.Sc.) or HND in Accounting or a related field",
      "Minimum of 3 years relevant work experience",
      "Student member of ICAN/ACCA or already chartered",
      "Strong analytical and problem-solving skills",
      "Proximity to Lekki Phase 1 is essential"
    ],
    apply: 'Send CV to <a href="mailto:recruitments@briccsint.com">recruitments@briccsint.com</a>',
    salary: "Attractive",
    deadline: "15th May 2026"
  },
  {
    id: "business-development-officer-lekki-briccs-2026",
    title: "Business Development Officer",
    date: "2026-05-08",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    summary: "Drive revenue and market share for a telecommunications company through strategic business development.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Maintain client relationships and drive sales",
      "Prepare sales reports and market feedback",
      "Learn and adapt quickly in a tech environment"
    ],
    requirements: [
      "Good First Degree (B.Sc.) or HND in Business, Marketing, or related field",
      "Minimum of 3 years relevant work experience in business development or sales",
      "Strong analytical and communication skills",
      "Proximity to Lekki Phase 1 is essential"
    ],
    apply: 'Send CV to <a href="mailto:recruitments@briccsint.com">recruitments@briccsint.com</a>',
    salary: "Attractive",
    deadline: "15th May 2026"
  },
  {
    id: "tender-administrator-port-harcourt-cd-princeton-2026",
    title: "Tender Administrator",
    date: "2026-05-08",
    location: "Port Harcourt, Rivers State",
    type: "Full-time",
    summary: "Responsible for managing the tender process, ensuring timely identification, coordination, and submission of bids.",
    responsibilities: [
      "Monitor NIPEX and other tender platforms for opportunities",
      "Maintain tender register and track all bid activities",
      "Coordinate tender documentation and requirements",
      "Support proposal preparation and submission",
      "Ensure compliance with tender requirements and deadlines",
      "Liaise with internal teams for bid inputs and approvals",
      "Maintain organized records of all submissions"
    ],
    requirements: [
      "Bachelor’s degree in Business, Administration, or related field",
      "3–5 years’ experience in tendering or bid administration",
      "Good with Microsoft Tools and Tender Systems",
      "Strong organizational and coordination skills"
    ],
    apply: 'Send CV to <a href="mailto:recruitment@cdprinceton.com">recruitment@cdprinceton.com</a>. Subject: Tender Administrator',
    salary: "Competitive",
    deadline: "18th May 2026"
  },
  {
    id: "loan-officers-multiple-locations-repost-2026",
    title: "Loan Officer",
    date: "2026-05-08",
    location: "Mainland Lagos, Ifo, Ijebu-Ode",
    type: "Full-time",
    seniority: "Junior",
    summary: "Identify and recruit potential clients, assess creditworthiness, and manage loan portfolios including recovery targets.",
    responsibilities: [
      "Identify and recruit potential clients for loan products",
      "Conduct client interviews and assess creditworthiness",
      "Perform field visits for business and guarantor verification",
      "Analyze loan applications and recommend approvals or rejections",
      "Disburse loans in line with company policies and procedures",
      "Monitor loan utilization and ensure proper usage",
      "Follow up on repayments and manage delinquent accounts",
      "Maintain accurate client records and documentation",
      "Educate clients on loan terms, repayment plans, and financial discipline",
      "Achieve assigned loan disbursement and recovery targets"
    ],
    requirements: [
      "1–3 years experience in lending, microfinance, or sales roles is a MUST",
      "Minimum of 2 years experience as a Loan Officer is mandatory",
      "Strong analytical and risk assessment skills",
      "Excellent communication and interpersonal skills",
      "Ability to work in the field and meet targets"
    ],
    apply: 'Qualified candidates should send CVs to <a href="mailto:guidedarrowsconsulting@gmail.com">guidedarrowsconsulting@gmail.com</a>',
    salary: "₦120,000 – ₦150,000 (Accommodation provided)",
    deadline: "Not Specified"
  },
  {
    id: "office-cleaner-lekki-luxsit-2026",
    title: "Office Cleaner",
    date: "2026-05-08",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    summary: "Maintain cleanliness and hygiene of office spaces, restrooms, and kitchen areas for a corporate environment.",
    responsibilities: [
      "Dust furniture, polish surfaces, and wash windows",
      "Clean restrooms and sanitize kitchen areas",
      "Sweep, mop, vacuum, and wax floors",
      "Empty trash bins and dispose of waste",
      "Replenish toiletries, soap, and paper products",
      "Report repairs and maintain cleaning equipment",
      "Adhere to sanitation and health standards",
      "Perform office errands where applicable"
    ],
    requirements: [
      "Hardworking and reliable",
      "Adherence to sanitation and health standards",
      "Willingness to perform office errands"
    ],
    apply: 'Interested candidate send application to <a href="mailto:hr@luxsitintegrarion.com">hr@luxsitintegrarion.com</a> or <a href="mailto:lillian.owoseni@luxsitintegration.com">lillian.owoseni@luxsitintegration.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "facility-supervisor-ogba-mikano-2026",
    title: "Facility Supervisor",
    date: "2026-05-08",
    location: "Ogba, Lagos State",
    type: "Full-time",
    summary: "Responsible for overseeing the day-to-day operations, maintenance and safety of all buildings systems, infrastructure, and grounds to ensure optimal performance and functionality.",
    responsibilities: [
      "Oversee and manage all facility systems, including HVAC, electrical, plumbing, structural and mechanical equipment",
      "Develop and implement preventive maintenance schedules to ensure uninterrupted facility operations",
      "Troubleshoot and resolve issues related to mechanical and civil systems, minimizing downtime and optimizing operational efficiency",
      "Ensure compliance with health, safety and environmental regulations standards",
      "Conduct regular safety inspection, risk assessment and emergency preparedness drills",
      "Implement corrective actions for identified safety risks and manage documentation for compliance audits",
      "Plan, coordinate and execute facility improvement and renovation projects, including budgeting, scheduling and contractor management",
      "Oversee civil works and structural modification, ensuring adherence to building codes and regulations"
    ],
    requirements: [
      "BSc / HND in a related discipline",
      "Minimum of 3 years hands-on experience performing similar responsibilities",
      "Familiarity with local building codes, safety standards, and environmental regulations",
      "Some physical activities, including walking and inspecting various facility areas"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:careers@mikano.com">careers@mikano.com</a>',
    salary: "₦350,000 – ₦450,000 Gross plus Benefits (HMO, Leave Allowance, etc.)",
    deadline: "Not Specified"
  },
  {
    id: "mechanical-technician-port-harcourt-hobark-2026",
    title: "Mechanical Technician",
    date: "2026-05-08",
    location: "Port Harcourt",
    type: "Full-time",
    summary: "Responsible for preventive, corrective, and breakdown maintenance of mechanical equipment, ensuring optimal performance, reliability, and safety across upstream oil & gas production facilities.",
    responsibilities: [
      "Perform maintenance on pumps, compressors, turbines, valves, piping systems, and hydraulic units",
      "Conduct troubleshooting, diagnostics, and fault resolution on mechanical equipment",
      "Execute equipment overhauls, dismantling, and reassembly in line with OEM standards",
      "Monitor rotating equipment performance and identify improvement opportunities",
      "Support Root Cause Analysis (RCA) and implement corrective actions",
      "Analyze operational parameters to enhance equipment efficiency and uptime",
      "Participate in equipment installation, upgrades, and commissioning activities",
      "Maintain accurate maintenance records, job cards, and reports",
      "Track material usage and support OPEX monitoring and cost control",
      "Ensure strict adherence to HSE policies, PTW systems, and industry standards",
      "Maintain proper housekeeping of tools, workshop, and spare parts",
      "Liaise with OEMs, vendors, and contractors during maintenance activities",
      "Work closely with production and maintenance teams to ensure seamless operations"
    ],
    requirements: [
      "HND/OND in Mechanical Engineering or related discipline",
      "Minimum 8+ years hands-on experience in mechanical maintenance",
      "Experience in onshore/offshore oil & gas operations",
      "Strong knowledge of rotating equipment and mechanical systems",
      "Experience in oil & gas upstream production facilities",
      "Good understanding of maintenance strategies and troubleshooting techniques",
      "Strong analytical, problem-solving, and teamwork skills",
      "Valid HSE certifications (HSE I, II, III / PTW)",
      "OEM certifications on pumps/compressors (added advantage)",
      "Membership of COREN/NSE (optional advantage)",
      "Commitment to safety and operational excellence"
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:Odianosen_Odigie@hobarkintl.com">Odianosen_Odigie@hobarkintl.com</a>',
    salary: "30M – 40M",
    deadline: "Not Specified"
  },
  {
    id: "branch-manager-mfi-multiple-locations-2026",
    title: "Branch Manager (MFI)",
    date: "2026-05-01",
    location: "Mainland Lagos, Ifo, Sango, Ijebu-Ode",
    type: "Full-time",
    seniority: "Senior",
    summary: "Responsible for the overall performance, growth, and operational efficiency of the branch, leading microfinance operations and loan portfolio management.",
    responsibilities: [
      "Drive branch growth through aggressive client acquisition and loan disbursement",
      "Manage and grow a high-quality loan portfolio with minimal risk exposure",
      "Supervise and lead Loan Officers to achieve disbursement and recovery targets",
      "Ensure strict adherence to credit policies, procedures, and regulatory standards",
      "Oversee credit appraisal, loan approvals, and disbursement processes",
      "Monitor loan repayment performance and proactively manage delinquent accounts",
      "Conduct field visits for client verification, monitoring, and recovery support",
      "Manage branch operations including cash handling, documentation, and compliance",
      "Train, coach, and enforce discipline within the branch team"
    ],
    requirements: [
      "HND/BSC in any relevant field",
      "Minimum of 3 years’ experience in a Microfinance Institution (MFI)",
      "At least 1–2 years in a supervisory or managerial role in an MFI is mandatory",
      "Proven track record of meeting loan disbursement and recovery targets",
      "Strong knowledge of microfinance operations, credit risk, and portfolio management",
      "Willingness to work extended hours and spend significant time in the field"
    ],
    apply: 'Send CV to: <a href="mailto:guidedarrowsconsulting@gmail.com">guidedarrowsconsulting@gmail.com</a>',
    salary: "₦200,000 - ₦250,000 (Accommodation provided)",
    deadline: "Not Specified"
  },
  {
    id: "area-medical-sales-manager-kano-2026",
    title: "Area Medical Sales Manager",
    date: "2026-05-01",
    location: "Kano",
    type: "Full-time",
    seniority: "Senior",
    summary: "Lead sales operations in Kano and across the Northern region, developing strategic plans and managing a team of Medical Sales Representatives.",
    responsibilities: [
      "Develop and implement strategic sales plans to achieve regional revenue targets",
      "Manage, coach, and supervise a team of Medical Sales Representatives across assigned territories",
      "Drive market penetration and business growth in Kano and surrounding Northern states",
      "Build and maintain strong relationships with healthcare professionals, hospitals, pharmacies, and distributors",
      "Monitor competitor activities and provide market intelligence",
      "Ensure compliance with company policies, ethical standards, and regulatory requirements",
      "Prepare periodic sales reports, forecasts, and performance analysis",
      "Coordinate product launches, promotions, and awareness campaigns"
    ],
    requirements: [
      "Bachelor’s degree in Pharmacy, Life Science, or a related field (MBA is an advantage)",
      "Minimum of 5 – 7 years’ experience in pharmaceutical sales",
      "At least 2 - 3 years in a managerial role",
      "Strong experience working in Northern Nigeria (Kano and surrounding states is mandatory)",
      "Excellent knowledge of the pharmaceutical market and distribution channels in the North",
      "Ability to analyze sales data and make informed business decisions"
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:hr@pharmaethics.com">hr@pharmaethics.com</a> with the subject line ‘’Application – Area Medical Sales Manager (Kano)’’',
    salary: "Competitive plus Incentives",
    deadline: "Not Specified"
  },
  {
    id: "customer-support-officer-benue-2026",
    title: "Customer Support Officer",
    date: "2026-05-01",
    location: "Benue State",
    type: "Full-time",
    summary: "Key point of contact for customers, delivering prompt and professional assistance across in-branch and digital channels for a digital bank.",
    responsibilities: [
      "Attend to customer enquiries, complaints, and requests via in-branch visits, calls, and digital channels",
      "Resolve customer issues efficiently while maintaining a professional and empathetic approach",
      "Assist customers with account opening, digital onboarding, and banking product usage",
      "Promote the bank’s digital channels and guide customers through digital product adoption",
      "Record and escalate unresolved complaints following established protocols",
      "Maintain accurate records of all customer interactions in the CRM system",
      "Meet individual and team customer satisfaction targets"
    ],
    requirements: [
      "Minimum of 2 years’ experience in customer service within a bank, fintech, or financial services organisation",
      "Bachelor’s degree or HND in any relevant discipline",
      "Strong verbal and written communication skills in English",
      "Confident, patient, and empathetic approach to customer interaction",
      "Basic digital literacy and comfort with banking technology",
      "CIBN student membership or banking certification is an added advantage",
      "Residence in or willingness to relocate to Benue State is required"
    ],
    apply: 'Send your CV and cover letter to: <a href="mailto:stessymaly@yahoo.com">stessymaly@yahoo.com</a> and copy <a href="mailto:hr@hcerconsulting.com">hr@hcerconsulting.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "client-acquisition-officer-ibadan-2026",
    title: "Client Acquisition Officer",
    date: "2026-05-01",
    location: "Ibadan (Hybrid)",
    type: "Full-time",
    summary: "Focus on lead generation, prospecting, and closing deals to drive revenue and build real client relationships for HR & consulting solutions.",
    responsibilities: [
      "Hunting for opportunities (lead generation & prospecting)",
      "Turning conversations into conversions and closing deals",
      "Building real client relationships, not just one-off deals",
      "Pitching HR & consulting solutions that businesses actually need",
      "Managing your pipeline and hitting targets consistently"
    ],
    requirements: [
      "1–3 years of experience in sales/business development",
      "Proven ability to close deals, not just talk",
      "Confident, persuasive, and people-smart",
      "Target-driven and results-oriented",
      "Experience with CRM tools is a plus"
    ],
    apply: 'Send your CV to <a href="mailto:resume.xurielresources@gmail.com">resume.xurielresources@gmail.com</a> with subject: Client Acquisition Officer',
    salary: "₦100,000",
    deadline: "Not Specified"
  },
  {
    id: "utility-manager-agbara-sky-industries-2026",
    title: "Utility Manager",
    date: "2026-05-01",
    location: "Agbara",
    type: "Full-time",
    summary: "Manage high & low (HP, LP) compressors within a manufacturing environment at Sky Industries Nigeria Limited.",
    responsibilities: [
      "Oversee operation and maintenance of High & Low (HP, LP) Compressors",
      "Ensure utility systems support production requirements effectively",
      "Manage utility team and technical resources"
    ],
    requirements: [
      "B. Engr, B.Sc/HND in Mechanical or Electrical Engineering",
      "At least 5 years experience specifically in High & Low (HP, LP) Compressors",
      "Technical expertise in industrial compressor systems"
    ],
    apply: 'Qualified candidates should send their CVs to: <a href="mailto:skyrecruitmenttalents@gmail.com">skyrecruitmenttalents@gmail.com</a>',
    salary: "Not Specified",
    deadline: "12th May, 2026"
  },
  {
    id: "fleet-manager-agbara-sky-industries-2026",
    title: "Fleet Manager",
    date: "2026-05-01",
    location: "Agbara",
    type: "Full-time",
    summary: "Coordinate a fleet of trucks, pool cars, and forklifts for Sky Industries Nigeria Limited.",
    responsibilities: [
      "Coordinating and managing a fleet of Trucks, Pool Cars and Forklifts",
      "Monitor vehicle maintenance, logs, and driver performance",
      "Optimize fleet utilization and logistics efficiency"
    ],
    requirements: [
      "B.Sc./HND in Business Administration, Logistics or related discipline",
      "At least 5 years experience in coordinating industrial fleets",
      "Strong organizational and logistics management skills"
    ],
    apply: 'Qualified candidates should send their CVs to: <a href="mailto:skyrecruitmenttalents@gmail.com">skyrecruitmenttalents@gmail.com</a>',
    salary: "Not Specified",
    deadline: "12th May, 2026"
  },
  {
    id: "loan-officers-multiple-locations-2026",
    title: "Loan Officer",
    date: "2026-05-01",
    location: "Mainland Lagos, Ifo, Ijebu-Ode",
    type: "Full-time",
    seniority: "Junior",
    summary: "Identify and recruit potential clients, assess creditworthiness, and manage loan portfolios including recovery targets.",
    responsibilities: [
      "Identify and recruit potential clients for loan products",
      "Conduct client interviews and assess creditworthiness",
      "Perform field visits for business and guarantor verification",
      "Analyze loan applications and recommend approvals or rejections",
      "Disburse loans in line with company policies",
      "Monitor loan utilization and manage delinquent accounts",
      "Educate clients on loan terms and financial discipline",
      "Achieve assigned loan disbursement and recovery targets"
    ],
    requirements: [
      "SSCE/OND/HND/BSC qualification",
      "Minimum of 2 years experience as a Loan Officer is mandatory",
      "Strong analytical and risk assessment skills",
      "Excellent communication and interpersonal skills",
      "Ability to work in the field and meet targets",
      "High level of integrity"
    ],
    apply: 'Qualified candidates should send CVs to: <a href="mailto:guidedarrowsconsulting@gmail.com">guidedarrowsconsulting@gmail.com</a>',
    salary: "₦120,000 - ₦150,000 (Accommodation provided)",
    deadline: "Not Specified"
  },
  {
    id: "sales-customer-service-officer-lekki-2026",
    title: "Sales & Customer Service Officer",
    date: "2026-05-01",
    location: "Lekki, Lagos",
    type: "Full-time",
    summary: "Handle payments, engage customers, and assist with product enquiries for a reputable paint outlet.",
    responsibilities: [
      "Handle payments efficiently",
      "Engage customers professionally",
      "Assist with product enquiries",
      "Represent the brand confidently"
    ],
    requirements: [
      "Male Preferred",
      "Professional demeanor and customer service skills",
      "Efficiency in payment handling and administrative tasks"
    ],
    apply: 'Send your CV to: <a href="mailto:recruitment@poweredupcon.com">recruitment@poweredupcon.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "maintenance-manager-vgc-ikota-2026",
    title: "Maintenance Manager",
    date: "2026-05-01",
    location: "VGC, Ikota – Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Oversee maintenance, safety, and efficient operation of all hotel facilities and infrastructure, including electrical, HVAC, and plumbing systems.",
    responsibilities: [
      "Oversee day-to-day maintenance of physical infrastructure (Electrical, HVAC, plumbing, generators)",
      "Develop and implement preventive and corrective maintenance schedules",
      "Supervise and coordinate the maintenance team (task allocation, training, performance)",
      "Diagnose faults and ensure timely repairs of all equipment",
      "Ensure compliance with health, safety, and environmental standards",
      "Manage external vendors, contractors, and service providers",
      "Conduct regular inspections of facilities and safety systems",
      "Collaborate with other departments to ensure guest satisfaction"
    ],
    requirements: [
      "Minimum of 5 years’ experience in maintenance management, preferably in hospitality",
      "Expertise in electrical and electronics repairs is mandatory",
      "Strong technical knowledge of building systems (HVAC, plumbing, generators)",
      "Excellent troubleshooting, organisational, and communication skills",
      "Must reside on the Island"
    ],
    apply: 'Send your CV to: <a href="mailto:hrm@wellbornhotels.com">hrm@wellbornhotels.com</a> or via WhatsApp: <a href="https://wa.me/2348118236959">08118236959</a>',
    salary: "Attractive",
    deadline: "Not Specified"
  },
  {
    id: "admin-officer-ojodu-berger-2026",
    title: "Admin Officer (Transaction Officer)",
    date: "2026-05-01",
    location: "Ojodu Berger, Lagos",
    type: "Full-time",
    summary: "Process and monitor financial transactions, ensuring accuracy, compliance, and timely resolution of issues within a fast-paced environment.",
    responsibilities: [
      "Process daily financial transactions accurately and efficiently",
      "Monitor transaction activities and identify any irregularities",
      "Reconcile transaction records and resolve discrepancies promptly",
      "Ensure strict compliance with company policies and regulatory standards",
      "Provide support in handling transaction-related inquiries"
    ],
    requirements: [
      "OND/HND in a relevant discipline",
      "1–3 years of relevant work experience (Fintech experience is an advantage)",
      "Age Requirement: 28 years and below",
      "Male Preferred",
      "Strong numerical and analytical skills",
      "High level of integrity and attention to detail"
    ],
    apply: 'Send your CV to <a href="mailto:cekeh@icsoutsourcing.com">cekeh@icsoutsourcing.com</a> with “Admin Officer” as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "medical-sales-representative-akure-2026",
    title: "Medical Sales Representative",
    date: "2026-05-01",
    location: "Akure, Ondo State",
    type: "Full-time",
    summary: "Promote and drive the sales of pharmaceutical products, building strong relationships with healthcare professionals and increasing product awareness.",
    responsibilities: [
      "Promote company products to doctors, pharmacists, hospitals, and healthcare professionals",
      "Achieve and exceed assigned sales targets within the territory",
      "Conduct regular visits to healthcare facilities to build strong relationships",
      "Identify new business opportunities and expand the customer base",
      "Provide accurate product information and deliver effective presentations",
      "Organize and participate in medical outreaches, campaigns, and presentations",
      "Maintain detailed records of customer interactions and sales activities",
      "Submit timely sales reports and market feedback"
    ],
    requirements: [
      "Bachelor’s degree in Pharmacy, Biological Sciences, or a related field",
      "Minimum of 1 – 3 years’ experience in pharmaceutical or medical sales",
      "Good knowledge of Akure and surrounding territories",
      "Strong communication, negotiation, and interpersonal skills",
      "Proficiency in Microsoft Office tools",
      "Must be resident in or willing to relocate to Akure"
    ],
    apply: 'Send your CV to <a href="mailto:hr@pharmaethics.com">hr@pharmaethics.com</a> with the subject line ‘’Application – Medical Sales Representative (Akure)’’',
    salary: "Competitive plus Incentives",
    deadline: "Not Specified"
  },
  {
    id: "bookkeeper-remote-lagos-yet-academy-2026",
    title: "Bookkeeper",
    date: "2026-05-01",
    location: "Remote / Lagos Preferred",
    type: "Full-time",
    summary: "Support financial operations for YET Academy by tracking income and expenses and maintaining organized records using Zoho Books.",
    responsibilities: [
      "Record and track income and expenses",
      "Maintain organized financial records",
      "Assist with bookkeeping using Zoho Books or similar software",
      "Prepare weekly and monthly financial summaries",
      "Track payments and operational expenses",
      "Reconcile receipts and transactions",
      "Support general financial and administrative organization"
    ],
    requirements: [
      "Basic bookkeeping or accounting experience",
      "Ability to use Zoho Books or willingness to learn quickly",
      "Good knowledge of Google Sheets or Microsoft Excel",
      "Strong attention to detail and accuracy",
      "Ability to maintain confidentiality",
      "Experience working with a school or small business is an advantage"
    ],
    apply: 'Complete the application form: <a href="https://tinyurl.com/mub8nm4c">Click here to apply online</a>',
    salary: "₦70,000 Monthly",
    deadline: "Not Specified"
  },
  {
    id: "sales-officer-kado-abuja-2026",
    title: "Sales Officer",
    date: "2026-05-01",
    location: "Kado, Abuja",
    type: "Full-time",
    summary: "Responsible for building and managing relationships with hospitals, clinics, and healthcare facilities to promote services and drive business growth.",
    responsibilities: [
      "Identify and engage prospective hospital and healthcare clients",
      "Promote services/products and negotiate contracts with hospital management",
      "Maintain strong relationships with existing clients to ensure retention",
      "Achieve monthly and quarterly sales targets",
      "Prepare sales reports and market feedback",
      "Coordinate with internal teams to ensure smooth service delivery"
    ],
    requirements: [
      "Minimum of 3 years relevant sales experience (healthcare or insurance sales preferred)",
      "Strong communication, negotiation, and relationship-management skills",
      "Candidates must reside in Abuja"
    ],
    apply: 'Send your CV to: <a href="mailto:kelsgloballtd@gmail.com">kelsgloballtd@gmail.com</a> or via WhatsApp: <a href="https://wa.me/2349136342350">09136342350</a>',
    salary: "₦200,000",
    deadline: "Not Specified"
  },
  {
    id: "investment-officer-lagos-2026",
    title: "Investment Officer",
    date: "2026-05-01",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Manage and grow investment funds, build strong investor relationships, and promote the company’s investment opportunities.",
    responsibilities: [
      "Fund Mobilization: Attract new investors (HNIs, SMEs, corporates) and grow the investment portfolio",
      "Product Marketing: Promote Fixed Deposits, Structured Investments, and Wealth Growth products",
      "Portfolio Management: Monitor investments, track maturities, and ensure portfolio growth",
      "Market Research: Identify opportunities, track competitors, and recommend new strategies",
      "Reporting & Compliance: Maintain investor records, prepare reports, and ensure regulatory compliance"
    ],
    requirements: [
      "Bachelor’s degree in Business, Finance, Economics, or related field",
      "4–6 years in wealth management, fund mobilization, or investment sales (microfinance, fintech, or investment firms preferred)",
      "Skills: Investor relations, fund raising, portfolio monitoring, client acquisition, financial advisory, and target-driven performance",
      "Strong communication and negotiation skills"
    ],
    apply: 'Send CV to: <a href="mailto:theremconsult@gmail.com">theremconsult@gmail.com</a>',
    salary: "₦600,000 net",
    deadline: "Not Specified"
  },
  {
    id: "crm-customer-service-content-support-representative-lekki-2026",
    title: "CRM Customer Service / Content Support Representative",
    date: "2026-05-11",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Target-driven, well-spoken, and customer-obsessed individual to join our team, focusing on customer support and content assistance.",
    responsibilities: [
      "Respond to customer messages quickly and professionally",
      "Manage customer records via CRM software",
      "Follow up on orders, payments and deliveries",
      "Communicate with logistics partners and keep customers updated",
      "Support social media and content pages where needed"
    ],
    requirements: [
      "Minimum 5 years customer service experience",
      "Proven CRM experience is a must",
      "Target driven with a results mindset",
      "Well spoken, polite, clean and well groomed at all times",
      "Under 32 years old",
      "Marketing experience is a bonus",
      "can use CHAT-gpt and Claude",
      "very good with excel",
      "Any degree is accepted",
      "Knowledge of weight management pens is a bonus",
      "Understanding of feminine health is a bonus"
    ],
    apply: 'Interested and qualified candidates should send their CV, cover letter and a recent picture to: <a href="mailto:info@fitcarehealth.com">info@fitcarehealth.com</a>',
    salary: "₦160,000/month + Attractive Bonuses",
    deadline: "Not Specified"
  },
  {
    id: "female-private-chef-housekeeper-lekki-2026",
    title: "FEMALE Private Chef / Housekeeper",
    date: "2026-05-11",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Professional, highly skilled, and cleaning-obsessed Chef/Housekeeper for a private individual, able to commute to Lekki Phase 1 five days a week.",
    responsibilities: [
      "Prepare continental and healthy dishes",
      "Follow recipes precisely",
      "Maintain high standards of cleanliness and tidiness",
      "Manage household tasks including folding and ironing"
    ],
    requirements: [
      "Professional chef certification is required",
      "very skilled in folding and ironing",
      "very polite and hygiene is very important",
      "Skilled in continental and healthy dishes",
      "Able to follow recipes precisely",
      "Passionate about cooking clean, healthy meals",
      "Absolutely obsessed with cleanliness and tidying",
      "Highly organised and discreet",
      "Must be able to commute to Lekki Phase 1 consistently"
    ],
    apply: 'Interested candidates should send their CV, certificate and a recent picture via WhatsApp only to: <a href="https://wa.me/2347046744811">+2347046744811</a>',
    salary: "₦200,000/month",
    deadline: "Not Specified"
  },
  {
    id: "personal-operations-assistant-kimberly-ryan-lagos-2026",
    title: "Personal Operations Assistant",
    date: "2026-05-11",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Kimberly Ryan",
    summary: "Support operations, potentially coordinating events, for a leading organization, requiring experience in the hospitality sector.",
    responsibilities: [
      "Provide operational support",
      "Coordinate events, potentially on weekends or public holidays"
    ],
    requirements: [
      "Minimum of 5 years’ experience having worked/working in some of the leading hotels in Nigeria, in mid to senior management/support levels.",
      "Humble, Hardworking, and very well-mannered characters are essential to this role.",
      "The Role may once in a while require working on weekend or on public holidays for coordination of events."
    ],
    apply: 'Send CV to: <a href="mailto:resumes@kimberly-ryan.net">resumes@kimberly-ryan.net</a> using the particular job title of the role as the subject of the mail.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "training-onboarding-officer-gwagwalada-max-drive-2026",
    title: "Training and Onboarding Officer",
    date: "2026-05-11",
    location: "Gwagwalada",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Max Drive",
    summary: "Responsible for developing and implementing training and onboarding programs, with a focus on new employee integration and skill development.",
    responsibilities: [
      "Experience with training/imparting knowledge.",
      "Develop orientation systems and tools.",
      "Manage and impart confidential information."
    ],
    requirements: [
      "Experience with training/imparting knowledge.",
      "Must understand and speak Hausa frequently.",
      "Strong working knowledge of developing orientation systems and tools.",
      "Excellent organizational skills and attention to detail.",
      "Excellent verbal and written communication.",
      "A start-up attitude- willingness to work hard to get things done.",
      "Ability to make discretionary judgment and to manage and impart confidential information."
    ],
    apply: '<a href="https://jobs.workable.com/view/uicemgqYi7Uk3CyN6xf3MH/training-and-onboarding-officer--gwagwalada-in-gwagwalada-at-max-drive">https://jobs.workable.com/view/uicemgqYi7Uk3CyN6xf3MH/training-and-onboarding-officer--gwagwalada-in-gwagwalada-at-max-drive</a>',
    salary: "Competitive pay & benefits",
    deadline: "Not Specified"
  },
  {
    id: "electrical-engineer-lagos-bahmstechnical-2026",
    title: "Electrical Engineer",
    date: "2026-05-11",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Bahms Technical",
    summary: "Skilled Electrical Engineer with solid construction experience to manage and deliver electrical installations across projects, ensuring safe and efficient execution.",
    responsibilities: [
      "Supervise electrical installations including power, lighting, and ELV systems",
      "Ensure compliance with electrical codes, standards, and project specifications",
      "Review drawings and coordinate with other disciplines on-site",
      "Conduct inspections, testing, and commissioning of systems",
      "Troubleshoot and resolve technical issues on-site"
    ],
    requirements: [
      "Minimum of 5 years’ experience in a construction company (MEP projects)",
      "Strong knowledge of electrical systems and site supervision",
      "Attention to detail and commitment to safety standards",
      "Good communication and teamwork skills"
    ],
    apply: 'Qualified candidates should send their CV to: <a href="mailto:hr@bahmstechnical.com">hr@bahmstechnical.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "multiple-roles-sango-ota-ogun-2026",
    title: "Multiple Roles (Field Validation & Maintenance Team Lead, Field Validation Engineer, Mechanical Maintenance Technician, Electrical Maintenance Technician, QHSE Manager, Revenue Assurance Associate, Learning and Development Specialist)",
    date: "2026-05-11",
    location: "Sango Ota, Ogun State",
    type: "Full-time",
    seniority: "Not Specified",
    summary: "Multiple vacancies available for various engineering, technical, and management roles in Sango Ota, Ogun State. Apply via the provided link for specific job descriptions.",
    responsibilities: ["Refer to individual Job Descriptions for specific responsibilities."],
    requirements: ["Refer to individual Job Descriptions for specific requirements."],
    apply: '<a href="https://forms.gle/aeUWzhmiyeDnMSog7">https://forms.gle/aeUWzhmiyeDnMSog7</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "accountant-lekki-plastic-cosmetics-manufacturing-2026",
    title: "Accountant",
    date: "2026-05-11",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Experienced Accountant with FMCG background needed for a Plastic & Cosmetics Manufacturing company. Responsibilities include managing manufacturing accounts, costing, and final accounts.",
    responsibilities: [
      "Manage cost accounting for production",
      "Prepare final accounts & financial reports",
      "Ensure compliance & internal controls"
    ],
    requirements: [
      "HND / B.Sc in Accounting",
      "ACCA or ICAN (added advantage)",
      "3–5 years experience",
      "MUST have FMCG experience (non-negotiable)",
      "Key experience needed: Manufacturing Accounts, Costing, Final Accounts"
    ],
    apply: 'Send CV to: <a href="mailto:hrhonourandroles@gmail.com">hrhonourandroles@gmail.com</a> Or send copy to: <a href="https://wa.me/2348056180009">08056180009</a> (WhatsApp/SMS)',
    salary: "Industry range (negotiable), Accommodation available at the company",
    deadline: "Not Specified"
  },
  {
    id: "motion-graphics-designer-honeyworld-group-vi-lagos-2026",
    title: "Motion Graphics Designer",
    date: "2026-05-11",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Honeyworld Group",
    summary: "Creative and detail-oriented Motion Graphics Designer to create engaging visual content, animations, and motion graphics for digital and brand communication at Honeyworld Group.",
    responsibilities: [
      "Create engaging visual content, animations, and motion graphics for digital and brand communication."
    ],
    requirements: [
      "B.Sc. or relevant qualification in Design, Multimedia, Creative Arts, or a related field",
      "Proficiency in at least one or more motion design software such as Adobe After Effects, Premiere Pro, Cinema 4D, Blender, or similar tools",
      "Strong understanding of animation, transitions, and visual composition",
      "Graphic design skills are an advantage but not compulsory"
    ],
    apply: 'Interested candidates should send their CV and portfolio to: <a href="mailto:recruitment@honeyworldgroup.com">recruitment@honeyworldgroup.com</a>',
    salary: "₦200,000 – ₦300,000 per month, depending on experience level",
    deadline: "Tuesday, 5th May 2026"
  },
  {
    id: "hr-performance-manager-honeyworld-group-lagos-island-2026",
    title: "HR Performance Manager",
    date: "2026-05-11",
    location: "Lagos Island, Lagos",
    type: "Full-time",
    seniority: "Senior",
    company: "Honeyworld Group",
    summary: "Highly analytical and performance-driven HR Performance Manager to build and manage systems that track productivity, improve workforce efficiency, and align compensation with measurable results at Honeyworld Group.",
    responsibilities: [
      "Develop and implement performance measurement systems across departments",
      "Design KPIs, productivity tracking systems, and workforce reporting frameworks",
      "Build salary and compensation structures tied to performance and value delivered",
      "Develop and enforce SOPs, HR policies, and operational guidelines",
      "Improve workforce productivity and eliminate inefficiencies",
      "Ensure employee accountability through measurable deliverables",
      "Work closely with operations and finance teams to align performance with business goals",
      "Implement HR systems for tracking performance and reporting"
    ],
    requirements: [
      "B.Sc. in Human Resources, Business Administration, Industrial Relations, or related field",
      "5–8 years relevant HR experience, especially in performance management or workforce analytics",
      "Experience in manufacturing or project-based environments is mandatory",
      "Strong knowledge of KPI development, productivity systems, and compensation structures",
      "Membership of CIPMN, CIPD, or SHRM is an advantage",
      "Strong analytical, documentation, and decision-making skills"
    ],
    apply: 'Interested candidates should send their CV and a brief summary of measurable results achieved in previous roles to: <a href="mailto:recruitment@honeyworldgroup.com">recruitment@honeyworldgroup.com</a> Subject: HR Performance Manager Application',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "assistant-hr-honeyworld-group-lagos-island-2026",
    title: "Assistant HR",
    date: "2026-05-11",
    location: "Lagos Island, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Honeyworld Group",
    summary: "Smart, organized, and proactive Assistant HR to support daily human resources operations at Honeyworld Group, gaining hands-on experience in recruitment, staff coordination, documentation, and workplace administration.",
    responsibilities: [
      "Assist with recruitment and onboarding processes",
      "Support staff documentation and employee records management",
      "Help coordinate attendance, leave, and HR administrative processes",
      "Assist in implementing company policies and workplace procedures",
      "Support general HR operations and staff communication"
    ],
    requirements: [
      "B.Sc. in Human Resources, Business Administration, Industrial Relations, or a related field",
      "Strong communication and organizational skills",
      "Good knowledge of Microsoft Office tools is an advantage",
      "Willingness to learn and grow in a fast-paced work environment"
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:recruitment@honeyworldgroup.com">recruitment@honeyworldgroup.com</a> Subject: Assistant HR Application',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "social-media-manager-honeyworld-group-vi-lagos-2026",
    title: "Social Media Manager",
    date: "2026-05-11",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Honeyworld Group",
    summary: "Creative, organized, and results-driven Social Media Manager to manage the digital presence of Honeyworld Group and its subsidiaries, overseeing content across multiple platforms and creating compelling write-ups.",
    responsibilities: [
      "Manage the social media platforms of Honeyworld Group and its subsidiaries",
      "Plan, coordinate, and oversee content creation across digital platforms",
      "Work closely with the graphics and creative team to develop media content for posting",
      "Write engaging captions, campaign content, and brand-aligned copy",
      "Create content calendars and ensure consistent posting schedules",
      "Monitor engagement, audience growth, and platform performance",
      "Stay updated on trends and recommend ideas to improve online visibility and engagement"
    ],
    requirements: [
      "B.Sc. in Marketing, Communications, Mass Communication, Media, English, or a related field",
      "Strong writing and communication skills",
      "Good understanding of social media platforms and content strategy",
      "Ability to work with creative teams to deliver engaging content",
      "Experience in social media management is an advantage but not compulsory"
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:recruitment@honeyworldgroup.com">recruitment@honeyworldgroup.com</a> Subject: Social Media Manager Application',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "executive-driver-honeyworld-group-vi-lagos-2026",
    title: "Executive Driver",
    date: "2026-05-11",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Honeyworld Group",
    summary: "Responsible, professional, and safety-conscious Executive Driver to provide reliable transportation services for company executives at Honeyworld Group, familiar with Lagos routes and traffic systems.",
    responsibilities: [
      "Safely transport executives to meetings, appointments, and other official engagements",
      "Maintain cleanliness and proper condition of assigned vehicle(s)",
      "Ensure timely pick-up and drop-off schedules",
      "Monitor vehicle maintenance needs and report issues promptly",
      "Follow all traffic laws and company safety guidelines",
      "Maintain professionalism, confidentiality, and discretion at all times"
    ],
    requirements: [
      "Minimum of SSCE qualification",
      "Valid driver’s license with a clean driving record",
      "Good knowledge of Lagos roads and routes",
      "Strong sense of professionalism and punctuality",
      "Previous experience as an executive or corporate driver is an advantage"
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:recruitment@honeyworldgroup.com">recruitment@honeyworldgroup.com</a> Subject: Executive Driver Application',
    salary: "₦150,000 per month",
    deadline: "Not Specified"
  },
  {
    id: "senior-accountant-inventory-manufacturing-e-commerce-honeyworld-group-lagos-island-2026",
    title: "Senior Accountant (Inventory, Manufacturing & E-Commerce Focus)",
    date: "2026-05-11",
    location: "Lagos Island, Lagos",
    type: "Full-time",
    seniority: "Senior",
    company: "Honeyworld Group",
    summary: "Highly skilled and detail-oriented Senior Accountant to manage financial operations across inventory, manufacturing, and e-commerce functions at Honeyworld Group, driving financial accuracy, strengthening internal controls, and providing data-driven insights.",
    responsibilities: [
      "Manage financial reporting, reconciliations, and monthly management accounts",
      "Oversee inventory tracking, stock reconciliation, and valuation across business units",
      "Monitor manufacturing costs, cost variances, and recommend cost-saving improvements",
      "Reconcile e-commerce transactions, online sales, and payment systems",
      "Build financial reports and dashboards to support business decisions",
      "Monitor cash flow, financial risks, and business performance",
      "Ensure compliance with financial regulations and internal controls"
    ],
    requirements: [
      "Minimum of 5 years accounting experience in manufacturing, FMCG, or inventory-driven businesses",
      "Professional certification such as ACCA, CPA, or CMA is required",
      "Strong experience in inventory management, cost accounting, and production costing",
      "Experience managing e-commerce financial operations and reconciliations",
      "Advanced proficiency in Excel and accounting software/ERP systems",
      "Strong analytical, problem-solving, and financial reporting skills",
      "High attention to detail and ability to enforce financial discipline"
    ],
    apply: 'Interested candidates should send their CV and Cover Letter to: <a href="mailto:recruitment@honeyworldgroup.com">recruitment@honeyworldgroup.com</a> Subject: Senior Accountant (Inventory, Manufacturing & E-Commerce Focus) Application',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "legal-officer-isolo-lagos-workmen-talents-promasidor-2026",
    title: "Legal Officer",
    date: "2026-05-11",
    location: "Isolo, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Urgently recruiting for a Legal Officer in Isolo, Lagos.",
    responsibilities: [],
    requirements: [],
    apply: 'Interested and qualified candidates should send their applications to: <a href="mailto:divine.nwosu@workmenandtalents.com">divine.nwosu@workmenandtalents.com</a>; <a href="mailto:divine.nwosu@promasidor.com">divine.nwosu@promasidor.com</a>',
    salary: "₦336,671.29 Net Salary",
    deadline: "Not Specified"
  },
  {
    id: "loan-officer-mainland-ifo-ijebu-ode-2026",
    title: "Loan Officer",
    date: "2026-05-11",
    location: "Mainland Offices, Ifo, Ijebu – Ode",
    type: "Full-time",
    seniority: "Junior",
    company: "Guided Arrows Consulting",
    summary: "Urgent hiring for Loan Officers to identify and recruit potential clients, assess creditworthiness, and manage loan portfolios including recovery targets, with accommodations provided.",
    responsibilities: [
      "Identify and recruit potential clients for loan products",
      "Conduct client interviews and assess creditworthiness",
      "Perform field visits for business and guarantor verification",
      "Analyze loan applications and recommend approvals or rejections",
      "Disburse loans in line with company policies and procedures",
      "Monitor loan utilization and ensure proper usage",
      "Follow up on repayments and manage delinquent accounts",
      "Maintain accurate client records and documentation",
      "Educate clients on loan terms, repayment plans, and financial discipline",
      "Achieve assigned loan disbursement and recovery targets"
    ],
    requirements: [
      "1–3 years experience in lending, microfinance, or sales roles is a MUST",
      "Strong analytical and risk assessment skills",
      "Excellent communication and interpersonal skills",
      "Ability to work in the field and meet targets",
      "High level of integrity and professionalism",
      "Minimum of 2 years experience as a Loan Officer is a MUST."
    ],
    apply: 'Qualified candidates should send CVs to : <a href="mailto:guidedarrowsconsulting@gmail.com">guidedarrowsconsulting@gmail.com</a>',
    salary: "₦120,000 - ₦150,000",
    deadline: "Not Specified"
  },
  {
    id: "it-support-structured-resource-lagos-2026",
    title: "IT Support",
    date: "2026-05-11",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "Structured Resource",
    summary: "To monitor and maintain the computer systems and networks of the organization and provide technical assistance and support to employees.",
    responsibilities: [
      "Install and configure computer hardware, operating systems, and applications.",
      "Monitor and maintain computer systems and networks.",
      "Troubleshoot system and network problems, diagnosing and solving hardware or software faults.",
      "Resolve issues for staff via phone, in person, or electronically.",
      "Replace parts as required.",
      "Provide support, including procedural documentation and relevant reports.",
      "Follow diagrams and written instructions to repair a fault or set up a system.",
      "Support the roll-out of new applications.",
      "Set up new users’ accounts and profiles and deal with password issues.",
      "Respond within agreed time limits to call-outs.",
      "Work continuously on a task until completion (or referral to third parties, if appropriate).",
      "Prioritize and manage many open cases at one time.",
      "Test and evaluate new technology."
    ],
    requirements: [
      "Bachelor’s degree in Computer Science, Information Technology, Computer Engineering, or other related field is required.",
      "Hardware knowledge.",
      "Strong troubleshooting and critical thinking skills.",
      "Previous working experience in IT Support."
    ],
    apply: '<a href="https://structurederp.structuredresource.com/jobs/it-support-executive-297">https://structurederp.structuredresource.com/jobs/it-support-executive-297</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "maintenance-manager-wellborn-hotels-vgc-ikota-lagos-2026",
    title: "Maintenance Manager",
    date: "2026-05-11",
    location: "VGC, Ikota – Lagos",
    type: "Full-time",
    seniority: "Senior",
    company: "Wellborn Hotels",
    summary: "Experienced and proactive Maintenance Manager to oversee the maintenance, safety, and efficient operation of all hotel facilities and infrastructure, ensuring all systems and equipment are functioning optimally.",
    responsibilities: [
      "Oversee day-to-day maintenance of the hotel’s physical infrastructure, including electrical systems, HVAC, plumbing, generators, building fabric, and grounds",
      "Develop and implement preventive and corrective maintenance schedules to minimise equipment downtime",
      "Supervise and coordinate the maintenance team, including task allocation, training, and performance management",
      "Diagnose faults and ensure timely repairs of all equipment and facility systems",
      "Ensure compliance with health, safety, environmental, and regulatory standards",
      "Manage external vendors, contractors, and service providers for maintenance works and projects",
      "Conduct regular inspections of facilities, equipment, and safety systems to ensure operational efficiency",
      "Maintain accurate maintenance records, logs, and reports",
      "Collaborate with other departments (Housekeeping, Front Office, Food & Beverage, etc.) to ensure seamless operations and guest satisfaction"
    ],
    requirements: [
      "Minimum of 5 years’ experience in maintenance management, preferably in a hotel or hospitality environment",
      "Expertise in electrical and electronics repairs is very important",
      "Strong technical knowledge of building systems (electrical, mechanical, plumbing, HVAC, generators)",
      "Proven experience managing maintenance teams and working with contractors/vendors",
      "Excellent troubleshooting, organisational, and communication skills",
      "Ability to work under pressure, prioritise tasks, and respond effectively to emergencies",
      "Must reside on the Island"
    ],
    apply: 'Send your CV to: <a href="mailto:hrm@wellbornhotels.com">hrm@wellbornhotels.com</a> or WhatsApp <a href="https://wa.me/2348118236959">08118236959</a>',
    salary: "Attractive",
    deadline: "Not Specified"
  },
  {
    id: "junior-interior-architect-the-startup-place-ajao-estate-lagos-2026",
    title: "Junior Interior Architect",
    date: "2026-05-11",
    location: "Ajao Estate, Lagos",
    type: "Full-time",
    seniority: "Junior",
    company: "The Startup Place",
    summary: "Junior Interior Architect with 1-3 years of experience, eager and ready to work, with knowledge of interior design, for an Interior Design Firm.",
    responsibilities: [
      "Design and develop interior architectural concepts",
      "Collaborate with design team",
      "Support project execution"
    ],
    requirements: [
      "1-3 years experience",
      "Knowledge of interior design",
      "Eager and ready to work"
    ],
    apply: 'Send CV and Portfolio to : <a href="mailto:hr@thestartupplaceng.com">hr@thestartupplaceng.com</a>',
    salary: "₦180,000-200,000",
    deadline: "Not Specified"
  },
  {
    id: "project-manager-architect-ilupeju-lagos-2026",
    title: "Project Manager (Architect)",
    date: "2026-05-11",
    location: "Ilupeju, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Highly experienced and strategic Architect Project Manager to lead real estate development projects from concept to completion, possessing strong architectural expertise and project management capability.",
    responsibilities: [
      "Lead and manage architectural and construction projects end-to-end",
      "Review and interpret architectural drawings, designs, and specifications",
      "Coordinate with contractors, consultants, and internal stakeholders",
      "Ensure timely delivery of projects within budget and quality standards",
      "Monitor project progress and provide detailed reports",
      "Manage project budgets, timelines, and resource allocation",
      "Ensure compliance with regulatory, safety, and building standards",
      "Identify risks and implement mitigation strategies",
      "Drive operational efficiency across projects",
      "Support executive management with strategic planning"
    ],
    requirements: [
      "Bachelor’s Degree in Architecture (Compulsory)",
      "Master’s Degree in Architecture or related field (Compulsory)",
      "Proven experience in architectural project management within real estate",
      "Strong leadership and team management skills",
      "In-depth knowledge of construction processes and project lifecycle",
      "Strong financial, analytical, and operational skills",
      "Ability to manage multiple high-value projects",
      "High level of professionalism, strategic thinking, and accountability"
    ],
    apply: '<a href="https://bit.ly/3PDo9Pk">https://bit.ly/3PDo9Pk</a>',
    salary: "₦500,000",
    deadline: "Not Specified"
  },
  {
    id: "internal-audit-officer-proctor-house-company-limited-vi-lagos-2026",
    title: "Internal Audit Officer",
    date: "2026-05-11",
    location: "Victoria Island Lagos, Nigeria",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Proctor House Company Limited",
    summary: "Detail-oriented and analytical Internal Audit Officer to support Governance, Risk, and Compliance function, assisting in evaluating internal controls, ensuring compliance with policies, and identifying areas for operational improvement.",
    responsibilities: [
      "Conduct routine audit inspections across hotel locations to assess compliance with operational standards",
      "Perform physical stock counts (food & beverage, store items, consumables, etc.) and reconcile with inventory records",
      "Verify cash balances, revenue records, and supporting documentation during site visits",
      "Identify discrepancies, control lapses, and areas of inefficiency during inspections",
      "Document audit findings and support the preparation of audit reports",
      "Follow up on previously identified issues to ensure timely resolution",
      "Ensure compliance with company policies, procedures, and internal controls",
      "Assist in monitoring high-risk areas such as inventory management, cash handling, and asset utilization",
      "Support the Internal Audit team in executing planned audit engagements"
    ],
    requirements: [
      "B.Sc./HND in Accounting or any related discipline",
      "2 years’ relevant work experience in audit, accounting, or compliance",
      "Professional qualification (AAT) is required",
      "Basic understanding of internal audit principles, Risk Management and financial controls",
      "Strong analytical and problem-solving skills",
      "Good communication and report writing skills",
      "Proficiency in Microsoft Office tools",
      "Prior experience in the hospitality industry will be an added advantage."
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:Proctorhouse3@gmail.com">Proctorhouse3@gmail.com</a> with the subject: Application for Internal Audit Officer',
    salary: "₦300,000 monthly gross",
    deadline: "Not Specified"
  },
  {
    id: "junior-accountant-av-distribution-lekki-lagos-2026",
    title: "Junior Accountant",
    date: "2026-05-11",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary: "Junior Accountant to support the Finance function in delivering accurate, timely, and well-controlled financial operations, strengthening discipline and accuracy of day-to-day financial transactions.",
    responsibilities: [
      "Daily Bookkeeping and Transaction Processing",
      "Accounts Receivable & Accounts Payable",
      "Inventory Recording and Reconciliation",
      "Petty Cash Management",
      "Statutory Compliance and Tax Remittance",
      "Audit Support",
      "Payroll Support",
      "Reporting Support"
    ],
    requirements: [
      "Minimum BSC in accounting and related field",
      "3 – 5 years post NYSC experience in a similar role",
      "Professional Certifications like ICAN, ACCA, ACA is an added advantage"
    ],
    apply: 'Interested and qualified candidates should send their resume using the job title as subject of the mail Email: <a href="mailto:talents@ced.africa">talents@ced.africa</a>',
    salary: "250k – 300k",
    deadline: "Not Specified"
  },
  {
    id: "business-support-analyst-structured-resource-lagos-2026",
    title: "Business Support Analyst",
    date: "2026-05-11",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "Structured Resource",
    summary: "Support business development by understanding customer needs, sourcing for best prices, analyzing the market, and maintaining vendor relationships.",
    responsibilities: [
      "Understand customer needs and requirements.",
      "Listen attentively to consumer questions and provide knowledgeable and insightful answers to encourage product sales.",
      "Respond swiftly and courteously to customer complaints or inquiries.",
      "Work on Requests for Quotes (RFQs) and source for the best prices.",
      "Analyze the market and establish competitive advantages.",
      "Maintain relationships with new and existing vendors.",
      "Route qualified opportunities to the appropriate sales executives for further development and closure.",
      "Maintain and expand the database of prospects within the assigned territory.",
      "Work closely with the line manager to build the sales pipeline and close deals.",
      "Monitor the sales pipeline from inception to completion and fill gaps when required.",
      "Monitor Purchase Order processes and follow through every stage until delivery to the client.",
      "Handle after-sales support to clients.",
      "Source new sales opportunities through inbound lead follow-up and outbound cold calls and emails.",
      "Maintain a database of new and existing clients and regularly update the list.",
      "Maintain an organized workspace and properly file documents, updates, and product information for easy accessibility.",
      "Regularly follow up with clients via phone calls and emails on quotations sent.",
      "Build rapport with clients and vendors through friendly and engaging communication.",
      "Keep up with product and service information updates.",
      "Participate in weekly meetings to discuss benchmarks and team goals.",
      "Prioritize and plan work activities effectively while managing time efficiently.",
      "Maintain attention to detail, accuracy, and thoroughness when handling tasks.",
      "Demonstrate flexibility to perform different tasks and support team members in daily activities."
    ],
    requirements: [
      "Bachelor’s degree in Business Administration or related field.",
      "2–4 years of experience in Operations.",
      "Proficiency in the use of Microsoft Office Suite.",
      "Excellent writing and editing skills in English."
    ],
    apply: '<a href="https://structurederp.structuredresource.com/jobs/sourcing-specialist-295">https://structurederp.structuredresource.com/jobs/sourcing-specialist-295</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "social-media-person-content-creator-the-startup-place-lagos-2026",
    title: "Social Media Person / Content Creator",
    date: "2026-05-11",
    location: "Lagos (Island)",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "The Startup Place",
    summary: "Vibrant, creative, and hands-on Social Media Person/Content Creator to take full ownership of digital presence, creating engaging and sales-driven content for a Food Production company.",
    responsibilities: [
      "Create engaging and creative content (videos, reels, posts) for daily social media use",
      "Develop and suggest innovative content ideas to promote products, events, and services",
      "Manage and post content across all social media platforms consistently",
      "Handle customer inquiries, messages, and comments promptly and professionally",
      "Cover live events and create real-time content"
    ],
    requirements: [
      "Proven experience in content creation or social media management",
      "Strong interest in content creation, video editing, and digital storytelling",
      "Ability to use editing tools such as CapCut, Canva, or similar applications.",
      "Creative thinker with the ability to generate fresh ideas consistently",
      "Good communication and customer engagement skills",
      "Ability to work full-time and be available during events and peak periods"
    ],
    apply: 'Interested candidates should send their CV and portfolio or sample content (very important) to: <a href="mailto:hr@thestartupplaceng.com">hr@thestartupplaceng.com</a> Subject Line: Social Media Person/ Content Creator',
    salary: "₦180,000-200,000",
    deadline: "Not Specified"
  },
  {
    id: "branch-manager-mfi-guided-arrows-consulting-mainland-ifo-sango-ijebu-ode-2026",
    title: "Branch Manager (MFI)",
    date: "2026-05-11",
    location: "Mainland, Ifo, Sango Ijebu – Ode",
    type: "Full-time",
    seniority: "Senior",
    company: "Guided Arrows Consulting",
    summary: "Hands-on, results-driven Branch Manager with proven experience in microfinance operations, capable of driving loan portfolio growth, ensuring high repayment rates, and leading a disciplined, high-performing team.",
    responsibilities: [
      "Drive branch growth through aggressive client acquisition and loan disbursement",
      "Manage and grow a high-quality loan portfolio with minimal risk exposure",
      "Supervise and lead Loan Officers to achieve disbursement and recovery targets",
      "Ensure strict adherence to credit policies, procedures, and regulatory standards",
      "Oversee credit appraisal, loan approvals (within limit), and disbursement processes",
      "Monitor loan repayment performance and proactively manage delinquent accounts",
      "Conduct field visits for client verification, monitoring, and recovery support",
      "Ensure excellent customer service and strong client relationship management",
      "Prepare and submit periodic performance and portfolio reports",
      "Manage branch operations including cash handling, documentation, and compliance",
      "Train, coach, and enforce discipline within the branch team"
    ],
    requirements: [
      "HND/BSC in any relevant field.",
      "Minimum of 3 years’ experience in a Microfinance Institution (MFI), with at least 1–2 years in a supervisory or managerial role",
      "Proven track record of meeting loan disbursement and recovery targets",
      "Strong knowledge of microfinance operations, credit risk, and portfolio management",
      "Must be highly hardworking, proactive, and target-driven",
      "Willingness to work extended hours and spend significant time in the field",
      "PLEASE DON’T APPLY IF YOU HAVE NOT WORKED IN AN MFI AS A BRANCH SUPERVISOR/MANAGER"
    ],
    apply: 'Send CV: <a href="mailto:guidedarrowsconsulting@gmail.com">guidedarrowsconsulting@gmail.com</a>',
    salary: "₦200,000 - ₦250,000",
    deadline: "Not Specified"
  },
  {
    id: "nysc-culinary-instructor-the-startup-place-lekki-phase-1-lagos-2026",
    title: "NYSC Culinary Instructor (Female)",
    date: "2026-05-11",
    location: "Lekki Phase 1, Lagos",
    type: "Internship",
    seniority: "Junior",
    company: "The Startup Place",
    summary: "Culinary Instructor to teach children and teenagers baking, cooking, and basic kitchen skills in a fun and engaging environment, with accommodation available.",
    responsibilities: [
      "Teach children and teenagers baking, cooking, and basic kitchen skills"
    ],
    requirements: [
      "Preferably 2026 A2 Batch corps member",
      "Educational background in Home Economics, Food Science, Nutrition, Catering, or related field OR Basic hands-on experience in baking and cooking",
      "Good communication and teaching skills",
      "Must enjoy working with children and teenagers"
    ],
    apply: 'Interested applicants should send their CV to: <a href="mailto:hr@thestartupplaceng.com">hr@thestartupplaceng.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "office-attendant-jobkonnect-new-gbagi-iwo-road-ibadan-oyo-state-2026",
    title: "Office attendant",
    date: "2026-05-11",
    location: "New Gbagi, Iwo Road Ibadan, Oyo State",
    type: "Full-time",
    seniority: "Junior",
    company: "Jobkonnect",
    summary: "Motivated and results-driven Sales Personnel to join various organizations across multiple sectors as an Office Attendant, promoting and selling company products/services.",
    responsibilities: [
      "Promote and sell company products/services",
      "Identify and approach potential customers",
      "Maintain good relationships with clients",
      "Good communication and negotiation skills",
      "Must be confident",
      "Basic knowledge of Excel"
    ],
    requirements: [
      "Previous sales experience is an added advantage"
    ],
    apply: 'Send your CV to: <a href="mailto:jobkonnect92@gmail.com">jobkonnect92@gmail.com</a> or Phone : <a href="tel:09029897096">09029897096</a>',
    salary: "₦70,000-₦90,000",
    deadline: "Not Specified"
  },
  {
    id: "accountant-gbagada-lagos-2026",
    title: "Accountant",
    date: "2026-05-11",
    location: "Gbagada, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Accountant responsible for managing financial records, ensuring compliance with regulatory standards, and supporting accurate financial reporting in the financial services sector.",
    responsibilities: [
      "Prepare and maintain accurate financial records, reports, and statements",
      "Manage accounts payable and receivable processes",
      "Reconcile bank statements and ensure timely resolution of discrepancies",
      "Assist in the preparation of monthly, quarterly, and annual financial reports",
      "Monitor budgets and support cost control initiatives",
      "Ensure compliance with financial regulations, tax laws, and company policies",
      "Process payroll and statutory remittances (e.g., PAYE, pension, VAT)",
      "Support internal and external audit processes",
      "Maintain proper documentation of financial transactions and records",
      "Provide financial insights to support business decision-making"
    ],
    requirements: [
      "Bachelor’s degree in Accounting, Finance, or related field",
      "4–5 years of relevant accounting experience",
      "Professional certification (ICAN, ACCA or in view) is an added advantage",
      "Strong knowledge of accounting principles and financial reporting",
      "Proficiency in accounting software and Microsoft Excel",
      "High level of accuracy and attention to detail",
      "Good analytical and problem-solving skills",
      "Strong organizational and time management abilities"
    ],
    apply: '<a href="https://forms.gle/FtNb29vahxkKTYj36">https://forms.gle/FtNb29vahxkKTYj36</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "relationship-manager-business-development-officer-gbagada-lagos-2026",
    title: "Relationship Manager / Business Development Officer",
    date: "2026-05-11",
    location: "Gbagada, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Source and onboard qualified clients for loan products, conduct client screening, structure loan requests, and build a consistent pipeline of prospects in the financial services sector.",
    responsibilities: [
      "Source and onboard qualified clients for loan products (individuals, SMEs, and corporate clients) in line with the company’s risk appetite",
      "Conduct initial client screening, including business viability checks, cash flow assessment, and documentation review, before forwarding to Credit",
      "Structure loan requests (tenor, pricing, repayment plan) to align with internal credit guidelines and client capacity",
      "Build and maintain a consistent pipeline of prospects through field visits, referrals, and partnerships with merchants, aggregators, and business networks",
      "Follow up on approved loans to ensure timely disbursement, proper documentation execution, and client understanding of repayment terms",
      "Track client repayment behaviour post-disbursement and escalate early warning signals (delays, defaults) to Risk and Collections teams",
      "Maintain accurate records of client interactions, pipeline status, and deal progress using internal tracking tools",
      "Provide market feedback on competitor activities, client trends, and product gaps to inform business strategy",
      "Ability to meet the target set."
    ],
    requirements: [
      "Minimum of 3 – 6 years experience in business development, sales, or relationship management within a financial institution (lending, microfinance, fintech, or banking)",
      "Proven track record of meeting or exceeding sales or loan disbursement targets",
      "Strong understanding of credit processes, loan structuring, and basic financial analysis",
      "Experience working with SMEs, traders, or corporate clients in the Nigerian market",
      "Familiarity with regulatory expectations affecting lending practices (e.g., basic CBN guidelines)"
    ],
    apply: '<a href="https://forms.gle/FtNb29vahxkKTYj36">https://forms.gle/FtNb29vahxkKTYj36</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "medical-doctor-consultant-vi-lagos-2026",
    title: "Medical Doctor / Consultant",
    date: "2026-05-11",
    location: "VI, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Highly qualified and experienced Medical Doctor / Consultant to provide clinical expertise, medical advisory support, and occupational health guidance within a corporate financial services environment.",
    responsibilities: [
      "Provide expert medical consultation, diagnosis, and treatment recommendations where applicable",
      "Offer clinical advisory services within a corporate financial services environment",
      "Support the development and implementation of health strategies, medical policies, and wellness frameworks",
      "Review and interpret medical cases, reports, and health-related documentation",
      "Collaborate with internal teams to promote employee health, safety, and wellbeing",
      "Provide clinical oversight and guidance where required, including general hospital or external medical coordination",
      "Ensure compliance with medical ethics, regulatory standards, and corporate governance policies",
      "Contribute to continuous improvement of occupational health and wellness initiatives"
    ],
    requirements: [
      "Bachelor of Medicine, Bachelor of Surgery (MBBS / MBChB) is mandatory",
      "Additional qualification: MBA or MA in a relevant field (Health Management, Administration, or related discipline)",
      "5–10 years of post-qualification clinical experience",
      "Proven experience as: 1. A Medical Consultant within a corporate or organisational setting, and/or a practising Medical Doctor in a General Hospital environment 2. Experience working within or advising corporate institutions is an added advantage",
      "Strong clinical judgment, diagnostic, and problem-solving skills",
      "Excellent communication, leadership, and interpersonal abilities",
      "Ability to operate effectively in both clinical and corporate environments"
    ],
    apply: '<a href="https://forms.gle/FtNb29vahxkKTYj36">https://forms.gle/FtNb29vahxkKTYj36</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "compliance-officer-gbagada-lagos-2026",
    title: "Compliance Officer",
    date: "2026-05-11",
    location: "Gbagada, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Compliance Officer to review customer onboarding files, monitor daily transactions, act as point of contact for regulatory bodies, and maintain compliance policies in the financial services sector.",
    responsibilities: [
      "Review customer onboarding files and credit documentation to ensure full KYC compliance before loan disbursement",
      "Monitor daily transactions and flag unusual patterns; escalate and file Suspicious Transaction Reports (STRs) where required",
      "Act as the point of contact for regulatory bodies, including CBN, ensuring timely and accurate filings (returns, reports, queries)",
      "Maintain and update compliance policies to reflect current regulatory changes and internal process adjustments",
      "Conduct periodic compliance audits across all departments to identify gaps and enforce corrective actions",
      "Lead internal investigations into compliance breaches, documenting findings and recommending disciplinary or control measures",
      "Design and deliver targeted compliance training sessions, especially for frontline teams handling customers and transactions"
    ],
    requirements: [
      "Minimum of 3 – 5 years’ experience in compliance, risk or audit within a financial institution (lending, microfinance, fintech, or banking)",
      "Hands-on experience with AML/CFT frameworks, KYC processes, and transaction monitoring",
      "Working knowledge of CBN regulations, reporting requirements, and Nigerian financial compliance standards",
      "Experience interacting with regulators or supporting regulatory audits/inspections",
      "Exposure to credit processes and the loan lifecycle within a finance company is strongly preferred"
    ],
    apply: '<a href="https://forms.gle/FtNb29vahxkKTYj36">https://forms.gle/FtNb29vahxkKTYj36</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "recruitment-officer-oppo-nigeria-lagos-2026",
    title: "Recruitment Officer",
    date: "2026-05-11",
    location: "Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    company: "OPPO Nigeria",
    summary: "Proactive Recruitment Officer to manage end-to-end hiring, sourcing, screening, and on-boarding top talent while ensuring a smooth and positive candidate experience in a fast-paced environment at OPPO Nigeria.",
    responsibilities: [
      "Manage the full recruitment cycle from sourcing to on-boarding",
      "Source candidates via job boards, social media, and referrals",
      "Screen CVs and conduct initial interviews",
      "Coordinate interviews with hiring managers",
      "Maintain recruitment trackers and candidate databases",
      "Partner with departments to understand hiring needs",
      "Support offer processes and on-boarding"
    ],
    requirements: [
      "Minimum of 2 years’ recruitment experience",
      "Bachelor’s degree in HR, Business Administration, or related field",
      "Strong communication and organizational skills",
      "Ability to manage multiple roles and meet deadlines",
      "Proficiency in Microsoft Office and/or HR tools",
      "High level of professionalism and attention to detail",
      "Preferred: Experience in high-volume recruitment, Familiarity with ATS, Strong negotiation and interpersonal skills"
    ],
    apply: 'Interested and qualified candidates should send their CV to <a href="mailto:cvpool2021@oppo-aed.ng">cvpool2021@oppo-aed.ng</a> with the subject line: “Recruitment Officer Application – Lagos”',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "executive-assistant-to-the-md-ikoyi-lagos-structured-resource-2026",
    title: "Executive Assistant to the MD",
    date: "2026-05-11",
    location: "Ikoyi Lagos",
    type: "Full-time",
    seniority: "Senior",
    company: "Structured Resource",
    summary: "High-level administrative, strategic, and operational support to the Managing Director in an EPCIM environment, ensuring seamless communication, project tracking, and executive decision support.",
    responsibilities: [
      "Executive & Administrative Support: Manage the MD’s calendar, appointments, and travel logistics (local & international). Prepare and review correspondence, reports, presentations, and briefing notes. Screen calls, emails, and requests, ensuring prioritization and timely responses. Organize and coordinate executive meetings, including agendas and minutes.",
      "Strategic Coordination & Follow-ups: Track and monitor key projects across EPCIM functions to ensure deadlines are met. Follow up with department heads (Engineering, Procurement, Construction, etc.) on deliverables. Support the MD in executing strategic initiatives and business priorities. Prepare dashboards and status reports for executive decision-making.",
      "Communication & Stakeholder Management: Serve as a liaison between the MD and internal/external stakeholders. Coordinate communication with clients, vendors, regulators, and partners. Maintain confidentiality in all executive matters.",
      "Documentation & Reporting: Maintain organized records of contracts, reports, and executive documents. Assist in preparing board reports, management reports, and business proposals. Ensure proper documentation of meetings, decisions, and action items.",
      "Project & Operations Support: Assist in tracking project milestones, risks, and performance metrics. Support procurement and contract documentation processes where required. Coordinate site visit schedules and logistics for the MD.",
      "Office & Executive Coordination: Ensure smooth day-to-day operations of the MD’s office. Coordinate special projects, events, and executive engagements. Handle sensitive issues with professionalism and discretion."
    ],
    requirements: [
      "Education: Bachelor’s Degree in Business Administration, Management, or related field.",
      "Experience: 4+ years experience as an Executive Assistant, preferably in EPC, construction, oil & gas, or related industries.",
      "Skills & Competencies: Strong organizational and multitasking abilities. Excellent written and verbal communication skills. High level of discretion and confidentiality. Proficiency in Microsoft Office Suite (Excel, PowerPoint, Word). Knowledge of project management tools is an added advantage. Ability to work in a fast-paced, deadline-driven environment."
    ],
    apply: '<a href="https://structurederp.structuredresource.com/jobs/executive-assistant-294">https://structurederp.structuredresource.com/jobs/executive-assistant-294</a>',
    salary: "₦200,000 - ₦450,000",
    deadline: "Not Specified"
  },
  {
    id: "ftth-project-qc-inspector-delta-rivers-2026",
    title: "FTTH Project Quality Control Inspector",
    date: "2026-04-30",
    location: "Delta and Rivers and other project-related locations",
    type: "Full-time",
    summary: "Responsible for finished goods inspections of concrete poles and overseeing production process quality control within manufacturing facilities in accordance with ZTE's specifications.",
    responsibilities: [
      "Conduct finished goods inspections of concrete poles at manufacturing facilities",
      "Audit and monitor production processes in local factories to ensure compliance with quality standards",
      "Inspect installed poles at project sites to verify they originate from approved suppliers",
      "Accurately record, compile, and report inspection results and checklists"
    ],
    requirements: [
      "Bachelor's Degree in Civil Engineering, Construction Engineering, or Telecommunications Engineering",
      "Willingness to travel for on-site inspections at factories and installation sites",
      "Solid understanding of concrete pole manufacturing processes and factory operations",
      "Proven experience in quality control or inspection of concrete (cement) pole products",
      "Proficient in Microsoft Office applications (Word, Excel, PowerPoint)"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://www.linkedin.com/jobs/view/4403781547/">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "maintenance-facilities-supervisor-ikoyi-2026",
    title: "Maintenance Facilities Supervisor",
    date: "2026-04-30",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    summary: "Oversee daily inspections, maintenance schedules, and supervision of the maintenance team for high-end residential/commercial facilities in Ikoyi.",
    responsibilities: [
      "Daily inspection of all service equipment/utilities in the building (with checklist)",
      "Implementation of all preplanned routine maintenance schedules",
      "Supervision of all maintenance works and facilities renovations by contractors",
      "Effective utilization and supervision of the maintenance team (plumbers, electricians, cleaners)",
      "Record keeping of job cards, expenditure, and service history for each unit",
      "Provide HSE admin support and ensure building safety compliance",
      "Assist in monitoring diesel levels and sourcing for contractors/materials"
    ],
    requirements: [
      "Bachelor's Degree in Electrical, Mechanical or any related field",
      "Minimum of 5 years experience as a maintenance supervisor",
      "Strong knowledge of building trades and maintenance",
      "Solid understanding of health and safety regulations (HSE certifications like COREN, HSE 1,2,3 are an advantage)"
    ],
    apply: 'Interested and qualified candidates should send their detailed CV to: <a href="mailto:dreamjobprof@gmail.com">dreamjobprof@gmail.com</a> using the Job Title as the subject of the email.',
    salary: "Not Specified",
    deadline: "11th May, 2026"
  },
  {
    id: "ftth-project-sales-manager-anambra-kano-2026",
    title: "FTTH Project Sales Manager",
    date: "2026-04-30",
    location: "Anambra and Kano",
    type: "Full-time",
    summary: "Drive FTTH sales and achieve Home Connect acquisition targets by developing and executing territory-based sales plans.",
    responsibilities: [
      "Drive FTTH sales within assigned city/cluster and achieve acquisition targets",
      "Develop and execute territory-based sales plans (door-to-door, outreach)",
      "Lead and manage local sales teams and field agents/freelancers",
      "Establish relationships with property management and local partners",
      "Track sales performance, analyze conversion data, and provide insights",
      "Manage on-ground sales activities and campaigns"
    ],
    requirements: [
      "Minimum 2 years of sales experience (team management preferred)",
      "Experience in telecom (FTTH/broadband), FMCG, or field sales is a plus",
      "Familiar with local market and communities in Anambra or Kano",
      "Strong communication, negotiation, and execution skills",
      "Proficient in MS Office and basic data analysis",
      "Valid driver’s license and willingness to travel"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://www.linkedin.com/jobs/view/4397568408/">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "facility-manager-ejigbo-lagos-school-2026",
    title: "Facility Manager",
    date: "2026-04-30",
    location: "Ejigbo, Lagos",
    type: "Full-time",
    summary: "Oversee maintenance, safety, and operations for a private school campus in Ejigbo, ensuring a functional learning environment.",
    responsibilities: [
      "Manage preventive and corrective maintenance for all school buildings and grounds",
      "Supervise in-house cleaners, security guards, gardeners, and external contractors",
      "Monitor and manage utilities: generators, borehole, electricity, and diesel",
      "Implement and enforce health, safety, and security protocols",
      "Maintain records of assets, maintenance logs, and manage maintenance budgets",
      "Respond to facility emergencies to ensure minimal disruption to school activities"
    ],
    requirements: [
      "HND / BSc Degree in Facilities Management, Estate Management, Engineering, or related fields",
      "Minimum 3-5 years in facility/operations management (school/hospitality experience is a plus)",
      "Strong knowledge of electrical, plumbing, HVAC, and building systems",
      "Excellent organizational, leadership, and vendor management skills",
      "Proximity to Ejigbo is required"
    ],
    apply: 'Interested and qualified candidates should send their CV and cover letter to: <a href="mailto:zurishaddairecruitmentagency@gmail.com">zurishaddairecruitmentagency@gmail.com</a> using the job title as the subject.',
    salary: "Negotiable",
    deadline: "7th May, 2026"
  },
  {
    id: "registered-nurse-surulere-lagos-2026",
    title: "Registered Nurse",
    date: "2026-04-30",
    location: "Surulere, Lagos",
    type: "Full-time",
    summary: "Monitor patient vital signs, record progress, and provide comprehensive nursing care including medication administration and procedures.",
    responsibilities: [
      "Monitor and record patient vital signs and progress",
      "Create care plans and administer medications/treatments",
      "Assist with medical procedures and administer IV medications",
      "Educate patients and perform wound and skin care",
      "Draw blood and collect lab work"
    ],
    requirements: [
      "Registered Nurse (RN) qualification with valid license",
      "Clinical experience in a hospital environment",
      "Strong patient care and communication skills"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:smscng1@gmail.com">smscng1@gmail.com</a> using the Job Title as the subject.',
    salary: "Not Specified",
    deadline: "10th May, 2026"
  },
  {
    id: "electric-elv-technician-lagos-2026",
    title: "Electric ELV Technician",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    summary: "Installing, maintaining, and configuring Extra low voltage (ELV) systems including cable routing and system terminations.",
    responsibilities: [
      "Install, maintain, and configure Extra low voltage (ELV) systems",
      "Support senior technicians with cable routing, terminations, and setup",
      "Troubleshoot common system issues and perform routine maintenance",
      "Participate in safety training and adhere to fieldwork protocols",
      "Prepare periodic reports detailing personal work activity"
    ],
    requirements: [
      "Technical School Certificate, Vocational Training, or OND in Electrical/Electronics Engineering",
      "Minimum of 4 years experience as an electrician with an ELV focus",
      "Physical strength and stamina for heavy equipment handling",
      "Basic understanding of electrical systems and components"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:recruitment2@ekomaintenance.com">recruitment2@ekomaintenance.com</a> using the Job Title as the subject.',
    salary: "Not Specified",
    deadline: "30th May, 2026"
  },
  {
    id: "senior-project-risk-engineer-ph-2026",
    title: "Senior Project Risk Engineer",
    date: "2026-04-30",
    location: "Port Harcourt, Rivers",
    type: "Full-time",
    seniority: "Senior",
    summary: "Identify project risks and develop risk management plans particularly related to scope, schedule, costs, and quality for mega projects.",
    responsibilities: [
      "Develop and maintain risk management plans and registers",
      "Facilitate risk identification and quantification workshops",
      "Develop Monte Carlo simulations to quantify identified risks",
      "Prepare written monthly project risk assessment reports",
      "Advise on probability and Impact Matrix for each project",
      "Manage costs and claims associated with change order management"
    ],
    requirements: [
      "Bachelor's Degree in Engineering, Construction or Project Management",
      "Minimum 8+ years experience (with 5 years specifically in risk assessment)",
      "Expertise in Primavera P6 and Primavera Risk Analysis",
      "Experience using Palisades @Risk for estimating cost risk",
      "Knowledge of project controls best practices"
    ],
    apply: 'Send CV to: <a href="mailto:recruitment@oilservltd-ng.com">recruitment@oilservltd-ng.com</a> and copy <a href="mailto:omjconsult42@gmail.com">omjconsult42@gmail.com</a>.',
    salary: "Not Specified",
    deadline: "11th May, 2026"
  },
  {
    id: "shift-engineer-dangote-ivory-coast-2026",
    title: "Shift Engineer",
    date: "2026-04-30",
    location: "Ivory Coast",
    type: "Full-time",
    seniority: "Senior",
    summary: "Supervise production activities during shifts to ensure seamless, safe, and efficient operations within the cement plant.",
    responsibilities: [
      "Achieve cement and clinker production targets during assigned shifts",
      "Coordinate production staff to ensure uninterrupted plant operations",
      "Monitor process control units from silo extraction to filling",
      "Ensure raw materials are properly crushed to quality targets",
      "Supervise casual staff and ensure machine operators use PPE",
      "Prepare detailed shift reports for the Section Head"
    ],
    requirements: [
      "Engineer’s degree in Engineering or equivalent",
      "Minimum of five (5) years of relevant work experience",
      "Working knowledge of cement production processes",
      "Strong knowledge of crushing operations and equipment"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://careers.dangote.com/job/Dangote-Cement-I-Coast-Ing%C3%A9nieur-de-quart-Shift-Engineer-1-Dang/1353303357/">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "operator-patroller-ibese-dangote-2026",
    title: "Operator / Patroller – Production Department",
    date: "2026-04-30",
    location: "Ibese Plant, Ogun",
    type: "Full-time",
    summary: "Responsible for continuous inspection of the assigned section to ensure all production equipment functions effectively.",
    responsibilities: [
      "Implement field activities and provide feedback to the CCR team",
      "Ensure all processing equipment is cleaned regularly",
      "Conduct equipment inspections and document problems",
      "Report critical problems to CCR Operators for immediate action",
      "Ensure timely execution of housekeeping within assigned sections"
    ],
    requirements: [
      "School Cert or its equivalent in any discipline",
      "Zero (0) to three (3) years relevant work experience",
      "Basic knowledge of cement production process and equipment",
      "Ability to pay attention to details"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://careers.dangote.com/job/Ibese-Plant-OperatorPatroller-Production-Dept_-Ibes/829421402/">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "ccr-operator-ivory-coast-dangote-2026",
    title: "CCR Operator",
    date: "2026-04-30",
    location: "Ivory Coast",
    type: "Full-time",
    summary: "Monitor production line from the Central Control Room to ensure precision and adherence to cement production standards.",
    responsibilities: [
      "Monitor and control sections of the plant process lines for stability",
      "Log process data and report operational activities accordingly",
      "Provide feedback and guidance to field Engineers and Patrollers",
      "Diagnose and troubleshoot potential operating problems",
      "Review plant automation systems and make improvement recommendations"
    ],
    requirements: [
      "B.Sc+2 or equivalent in any science/engineering discipline",
      "Minimum of two (2) years relevant work experience",
      "Knowledge of cement manufacturing parameters and standards",
      "Good problem solving and analytical skills"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://careers.dangote.com/job/Dangote-Cement-I-Coast-Op%C3%A9rateur-Salle-de-contr%C3%B4le-CCR-Operator-Dang/1354041957/">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "it-auditor-nascon-hq-2026",
    title: "IT Auditor",
    date: "2026-04-30",
    location: "NASCON – HQ",
    type: "Full-time",
    summary: "Conduct audits of IT systems and processes to assess controls, identify risks, and ensure regulatory compliance.",
    responsibilities: [
      "Plan and conduct IT audits for adequate control implementation",
      "Develop and execute risk-based IT audit plans",
      "Review networks, firewalls, and Internet technologies",
      "Audit data integrity and interface controls across ERP modules",
      "Review cybersecurity controls (antivirus, patching, endpoint protection)",
      "Carry out Forensic IT Audits using CAATs/ACL"
    ],
    requirements: [
      "B.Sc / HND in Computer Science, IT, Accounting, or Business",
      "Minimum 3-5 years’ experience in IT Audit",
      "CISA qualification is an advantage",
      "Problem analysis and problem-solving skills"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://careers.dangote.com/job/NASCON-HO-I_T-Auditor-NASC/1353469557/">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "it-officer-watchcon-abuja-2026",
    title: "IT Officer",
    date: "2026-04-30",
    location: "Abuja (FCT)",
    type: "Full-time",
    summary: "Manage ICT systems and security infrastructure, focusing on CCTV systems, IT security software, and network performance.",
    responsibilities: [
      "Install, configure, and maintain ICT equipment and systems",
      "Manage and monitor CCTV cameras and surveillance systems",
      "Maintain network infrastructure (LAN/WAN, firewalls)",
      "Ensure data protection, backups, and cybersecurity compliance",
      "Prepare reports and presentations using PowerPoint",
      "Troubleshoot IT-related issues for staff"
    ],
    requirements: [
      "Bachelor’s Degree in Computer Science, IT, or related fields",
      "Minimum of 5 years’ work experience",
      "Strong knowledge of CCTV and surveillance systems",
      "PowerPoint proficiency required"
    ],
    apply: 'Interested and qualified candidates should send their CV and Cover Letter to: <a href="mailto:watchconsecurityltd@gmail.com">watchconsecurityltd@gmail.com</a> using the job title as the subject.',
    salary: "₦150,000 per month",
    deadline: "10th May, 2026"
  },
  {
    id: "ndt-technician-paut-multi-loc-2026",
    title: "Non-Destructive Testing Technician (PAUT)",
    date: "2026-04-30",
    location: "AkwaIbom, Delta & Imo",
    type: "Contract",
    summary: "Perform Phased Array Ultrasonic Testing (PAUT) for pipeline construction projects to evaluate material properties without causing damage.",
    responsibilities: [
      "Prepare and verify NDT tests/inspections per Quality Control plans",
      "Conduct PAUT field testing on pipelines and onshore/offshore facilities",
      "Designate test methods and validate NDT instructions",
      "Review NDT test reports and Radiography films",
      "Initiate NDT requests and recommend repairs based on examined results"
    ],
    requirements: [
      "Diploma in Engineering with minimum 2 years hands-on experience in PAUT",
      "Must be certified in PAUT and NDT Level-II in Radiography/UT",
      "Knowledge of International Specifications (ASME B31.3, API 650)",
      "Familiarity with HSEQ safety standards"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:nnamdi.odili@energy-mgt.com">nnamdi.odili@energy-mgt.com</a> using the Job Title as the subject.',
    salary: "Not Specified",
    deadline: "1st June, 2026"
  },
  {
    id: "generator-mechanic-lagos-2026",
    title: "Generator Mechanic",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    summary: "Perform troubleshooting, maintenance, and overhauling of diesel generator sets and related mechanical equipment.",
    responsibilities: [
      "Troubleshoot mechanical and electrical issues on generators",
      "Performs predictive, preventive, and corrective maintenance",
      "Servicing, repairing, and overhauling diesel generators",
      "Identify critical spare items and install generator parts",
      "Maintain pumps, fuel systems, and engine-driven units",
      "Record operational data and maintain maintenance logs"
    ],
    requirements: [
      "At least OND Diploma in Mechanical/Electrical Engineering",
      "Trade Test and certification as a Mechanic",
      "Minimum of 5 years hands-on experience as a Generator Mechanic"
    ],
    apply: 'Interested and qualified candidates should send their detailed CVs to: <a href="mailto:dreamjobprof@gmail.com">dreamjobprof@gmail.com</a> using the Job title as the subject.',
    salary: "Not Specified",
    deadline: "10th May, 2026"
  },
  {
    id: "content-specialist-video-editor-nigeria-2026",
    title: "Content Specialist & Video Editor",
    date: "2026-04-30",
    location: "Nigeria (Remote)",
    type: "Full-time",
    summary: "Repurpose long-form video content into short-form assets for social media using AI tools and proprietary scheduling platforms.",
    responsibilities: [
      "Edit short-form and long-form content (YouTube, Reels, TikTok, podcasts)",
      "Use AI systems to create short-form captions",
      "Schedule content to automatically post inside proprietary platforms",
      "Edit raw videos for YouTube and podcast episodes",
      "Follow creative direction and provide high-quality execution"
    ],
    requirements: [
      "Professional experience with Adobe Premiere, After Effects, or similar",
      "Strong eye for motion design and storytelling",
      "Self-starter mindset with excellent communication skills",
      "Positive attitude towards receiving feedback"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://www.eliteeditoracademy.com/apply-now?utm_source=Linkedin&utm_medium=post&utm_campaign=nigeria">Click here to apply online</a>',
    salary: "$700 to $1,000 USD monthly",
    deadline: "Not Specified"
  },
  {
    id: "full-stack-developer-contract-ikeja-2026",
    title: "Full Stack Developer (Contract)",
    date: "2026-04-30",
    location: "Ikeja, Lagos",
    type: "Contract",
    summary: "Develop, test, and maintain scalable web applications using PHP/Laravel and ASP.NET for urgent project engagement.",
    responsibilities: [
      "Develop, test, and maintain scalable web applications",
      "Collaborate with cross-functional teams to define features",
      "Troubleshoot, debug, and upgrade existing systems",
      "Ensure application performance, quality, and responsiveness"
    ],
    requirements: [
      "Minimum of 5 years’ experience as a Full Stack Developer",
      "Strong proficiency in PHP (Laravel framework)",
      "Experience with ASP.NET",
      "Solid understanding of front-end technologies (HTML, CSS, JavaScript)",
      "Available to start immediately"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:jobs@portrec.ng">jobs@portrec.ng</a> using “Full Stack Developer – Contract Role” as the subject.',
    salary: "₦350,000 – ₦500,000 monthly",
    deadline: "1st May, 2026"
  },
  {
    id: "architect-interior-designer-ilupeju-2026",
    title: "Architect / Interior Designer",
    date: "2026-04-30",
    location: "Ilupeju, Lagos",
    type: "Full-time",
    summary: "Design and execute high-quality residential and commercial projects, translating ideas into 3D models and construction documents.",
    responsibilities: [
      "Participate in design meetings to develop architectural concepts",
      "Translate design ideas into detailed 3D models and renderings",
      "Prepare architectural drawings and construction documents",
      "Recommend materials, finishes, layouts, and lighting",
      "Conduct site visits to monitor progress and compliance",
      "Coordinate with consultants, contractors, and vendors"
    ],
    requirements: [
      "Bachelor’s Degree or HND in Architecture or Interior Design",
      "Minimum of 2–5 years relevant experience",
      "Proficiency in AutoCAD, SketchUp, Revit, Lumion, or similar",
      "Strong space planning and design detailing ability",
      "Based in or willing to work in Ilupeju"
    ],
    apply: 'Interested and qualified candidates should send CV and Portfolio to: <a href="mailto:hirecruitment2024@gmail.com">hirecruitment2024@gmail.com</a>.',
    salary: "₦300,000 monthly (and above)",
    deadline: "8th June, 2026"
  },
  {
    id: "bi-analyst-fairmoney-lagos-2026",
    title: "BI – Business Intelligence Analyst",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time (Hybrid)",
    seniority: "Senior",
    summary: "Transform complex data into actionable insights to improve credit performance and optimize collections for a leading fintech.",
    responsibilities: [
      "Analyze large datasets across the lending lifecycle",
      "Build and maintain real-time dashboards (PAR, NPL, etc.)",
      "Support development of credit scoring models",
      "Analyze repayment behavior and optimize collections strategies",
      "Automate manual reporting processes using SQL/Python",
      "Support regulatory reporting requirements for CBN"
    ],
    requirements: [
      "3–6+ years of experience in BI or Data Analytics",
      "Strong proficiency in SQL (mandatory) and Python/R",
      "Experience with BI tools (Power BI, Tableau, Looker)",
      "Strong understanding of lending metrics (PAR, NPL, recovery rates)"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://jobs.workable.com/view/rB6BohrP828hTuKPU2VKrs/hybrid-bi---business-intelligence-analyst-in-lagos-at-fairmoney">Click here to apply online</a>',
    salary: "Competitive plus Benefits",
    deadline: "Not Specified"
  },
  {
    id: "head-pos-hardware-repair-moniepoint-2026",
    title: "Head, POS Hardware & Repair",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Strategic technical leadership role focused on ensuring the quality, reliability, and serviceability of all Point of Sale devices.",
    responsibilities: [
      "Serve as primary technical liaison with POS manufacturers",
      "Audit manufacturer design specifications and component lists",
      "Proactively recommend design updates for ease of repair (DFS)",
      "Define strategy for internal and outsourced repair center operations",
      "Approve technical training/certification for all repair technicians",
      "Establish reporting for tracked component failure rates"
    ],
    requirements: [
      "Bachelor’s degree in Electrical/Electronics Engineering or Mechatronics",
      "Minimum 8+ years experience in hardware engineering/ops",
      "At least 3 years in a leadership role",
      "Deep knowledge of embedded systems and circuit board components",
      "Proven track record with international hardware manufacturers"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://job-boards.eu.greenhouse.io/moniepoint/jobs/4722002101">Click here to apply online</a>',
    salary: "Attractive plus Benefits",
    deadline: "Not Specified"
  },
  {
    id: "senior-pos-mobile-engineer-moniepoint-2026",
    title: "Senior POS Mobile Engineer",
    date: "2026-04-30",
    location: "Lagos (Remote)",
    type: "Full-time",
    seniority: "Senior",
    summary: "Build, optimize, and maintain high-performance Android-based POS applications used for large-scale transaction environments.",
    responsibilities: [
      "Design and maintain Android-based POS applications (Java/Kotlin)",
      "Own end-to-end development of transaction flows (sales, refunds)",
      "Integrate EMV chip, contactless (NFC), and card-present flows",
      "Handle OEM SDKs and Bluetooth/USB communication layers",
      "Mentor mid-level engineers and support onboarding",
      "Participate in system design and engineering excellence"
    ],
    requirements: [
      "Degree in Computer Science or related engineering field",
      "Minimum 5+ years experience in Android app development",
      "Solid understanding of EMV standards",
      "Experience with secure coding practices in financial systems",
      "Exposure to cross-platform frameworks (e.g., Flutter) is a plus"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://job-boards.eu.greenhouse.io/moniepoint/jobs/4788188101">Click here to apply online</a>',
    salary: "Attractive plus Benefits",
    deadline: "Not Specified"
  },
  {
    id: "artificial-lift-field-specialist-slb-2026",
    title: "Artificial Lift Field Specialist",
    date: "2026-04-30",
    location: "Port Harcourt, Rivers",
    type: "Full-time",
    summary: "Supervise field installation, commissioning, and troubleshooting of Artificial Lift equipment including ESPs and VSDs.",
    responsibilities: [
      "Supervise field installation of Artificial Lift equipment",
      "Setup and commissioning of Variable speed drives (VSD)",
      "Troubleshooting and repair of surface equipment",
      "Participate in pre-job readiness (CWOP, Site Visits)",
      "Ensure compliance with CAT, self-assessments, and wellsite inspections",
      "Accurate capture of field data and deliverables"
    ],
    requirements: [
      "Diploma or Degree in a Technical or Engineering field",
      "5 – 10 years experience in Artificial lift operations (ESPs, ESPCPs, HPS)",
      "Strong troubleshooting skills for surface equipment",
      "Ability to work collaboratively in a team environment"
    ],
    apply: 'Interested and qualified candidates should: <a href="https://careers.slb.com/jobdescription.aspx?id=86154&utm_source=">Click here to apply online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "procurement-officer-ph-oil-gas-2026",
    title: "Procurement Officer",
    date: "2026-04-30",
    location: "Port Harcourt, Rivers",
    type: "Full-time",
    summary: "Manage the end-to-end supply chain, sourcing technical spares, and navigating importation cycles (Form M/PAAR) for the oil & gas industry.",
    responsibilities: [
      "Validate internal PRs and track requests from initiation to delivery",
      "Execute full Form M and PAAR process via Single Window Trade Portal",
      "Negotiate with vendors for technical spares, PPE, and consumables",
      "Ensure activities align with NCS, SON, and Oil & Gas standards",
      "Maintain digital audit trails and weekly procurement dashboards"
    ],
    requirements: [
      "Degree in Supply Chain, Business Admin, Engineering or related",
      "3–5 years experience in Oil & Gas procurement",
      "Strong working knowledge of HS Codes and Customs procedures",
      "Negotiation skills and proficiency in MS Excel"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:talentfithr@gmail.com">talentfithr@gmail.com</a> using “Procurement Officer – Port Harcourt” as subject.',
    salary: "₦300,000 – ₦400,000 monthly",
    deadline: "5th May, 2026"
  },
  {
    id: "public-health-practitioner-lagos-2026",
    title: "Public Health Practitioner",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    summary: "A role focused on health improvement, protection, and community engagement through commissioning services and managing disease outbreaks.",
    responsibilities: [
      "Health improvement: commissioning health improvement services, organising and delivering health campaigns",
      "Health protection: managing disease outbreaks and providing expert advice on communicable diseases",
      "Community engagement: listening to and co-designing services with local communities and underserved populations"
    ],
    requirements: [],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:gymspadorisfit@gmail.com">gymspadorisfit@gmail.com</a> using the job title as the subject of the mail.',
    salary: "₦250,000 – ₦350,000 monthly",
    deadline: "9th May, 2026"
  },
  {
    id: "construction-storekeeper-abuja-2026",
    title: "Construction Storekeeper",
    date: "2026-04-30",
    location: "Abuja (FCT)",
    type: "Full-time",
    summary: "Ensure efficient management, storage, and tracking of construction materials, tools, and equipment across project sites while maintaining accurate inventory records.",
    responsibilities: [
      "Receive, inspect, and verify incoming materials against purchase orders and delivery notes",
      "Maintain organized storage systems for materials, tools, and equipment",
      "Issue materials to site personnel and maintain proper documentation of all transactions",
      "Keep accurate and up-to-date inventory records (manual and/or digital)",
      "Conduct periodic stock counts and reconcile discrepancies",
      "Monitor stock levels and initiate re-order requests when necessary",
      "Ensure proper handling and storage to prevent damage, loss, or theft",
      "Maintain cleanliness, safety, and organization of the store area",
      "Prepare and submit inventory and usage reports to management",
      "Coordinate with procurement and site teams to ensure smooth material flow"
    ],
    requirements: [
      "Minimum of OND / HND / B.Sc. in Logistics, Supply Chain Management, Business Administration, or related field",
      "2–4 years of experience as a Store Keeper, preferably in the construction industry",
      "Proven experience in inventory management and record-keeping",
      "Familiarity with construction materials, tools, and equipment is essential",
      "Strong organizational and record-keeping skills",
      "Attention to detail and accuracy",
      "Basic computer proficiency (Microsoft Excel, inventory software)",
      "Knowledge of safety and storage standards"
    ],
    apply: 'Interested and qualified candidates should send their Cover Letter and CV to: <a href="mailto:hr@elsabiodevelopment.com">hr@elsabiodevelopment.com</a> using the Job Title as the subject of the email',
    salary: "Not Specified",
    deadline: "25th May, 2026"
  },
  {
    id: "field-service-engineer-ojodu-berger-2026",
    title: "Field Service Engineer (FSE)",
    date: "2026-04-30",
    location: "Ojodu Berger, Lagos",
    type: "Full-time",
    summary: "Troubleshooting and revivification of flow meters, tanks, and other industry instruments ensuring jobs meet company standards.",
    responsibilities: [
      "Carrying out troubleshooting and revivification of flow meters, tanks, and other relevant industry instruments",
      "Ensuring the job meets company standards in line with established SOPs",
      "Preparing usable site survey reports and responding to call-outs",
      "Manage workload to achieve positive results and ensure completion within timeframe",
      "Fill out and submit job-related safety documents",
      "Carrying out preliminary surveys, creating, installing, troubleshooting, and maintaining devices",
      "Relaying updates and site issues efficiently to relevant individuals",
      "Coordinate with the OHS coordinator and investigate all reported incidents"
    ],
    requirements: [
      "B.Sc., B.Eng. or HND in Electrical Engineering and other related courses",
      "Field Exposure or work experience in Electrical Engineering",
      "Experienced in Electrical Panels",
      "Minimum of 3 years of work experience",
      "Competency in Microsoft applications (Word, Excel, PowerPoint)",
      "Knowledge of AUTOCAD & Practical Electrical Circuit Analysis is an advantage",
      "Knowledge of Automation & Control Engineering"
    ],
    apply: 'Interested and qualified candidates should forward their CV to: <a href="mailto:careers@smartflowtech.com">careers@smartflowtech.com</a> using the position as subject of email.',
    salary: "Not Specified",
    deadline: "18th May, 2026"
  },
  {
    id: "electrician-technician-vi-lagos-2026",
    title: "Electrician Technician",
    date: "2026-04-30",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    summary: "Installation, maintenance, and repair of electrical systems and equipment used in broadband infrastructure.",
    responsibilities: [
      "Install, maintain, and repair electrical systems for broadband and internet services",
      "Perform routine inspections and preventive maintenance on electrical components",
      "Installation of Inverter systems at base stations",
      "Routine maintenance of industrial generators (e.g. 40kva and 60kva Gen sets)",
      "Diagnose and troubleshoot electrical issues related to internet service equipment",
      "Maintain accurate records of all installations, maintenance, and repairs",
      "Coordinate with network engineers and field technicians"
    ],
    requirements: [
      "High school diploma or equivalent; Associate degree or technical diploma in Electrical Technology/Electronics preferred",
      "Minimum of 2-3 years of experience as an electrical technician, preferably in telecommunications",
      "Experience with installation and maintenance of electrical and industrial generator systems",
      "Strong knowledge of electrical systems, wiring, and circuitry",
      "Ability to read and interpret technical diagrams, schematics, and manuals",
      "Willingness to work flexible hours, including evenings and weekends"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:recruit@linkorgnet.com">recruit@linkorgnet.com</a> using “Electrical Technician” as the subject of the mail.',
    salary: "₦300,000 net monthly",
    deadline: "Not Specified"
  },
  {
    id: "medical-laboratory-scientist-ibadan-2026",
    title: "Medical Laboratory Scientist",
    date: "2026-04-30",
    location: "Ibadan, Oyo",
    type: "Full-time",
    summary: "Support accurate diagnosis and quality patient care through laboratory testing, analysis, and equipment maintenance.",
    responsibilities: [
      "Perform routine and specialized laboratory tests",
      "Analyze samples and ensure accuracy and reliability of test results",
      "Operate, maintain, and calibrate laboratory equipment",
      "Maintain proper documentation and records of laboratory activities",
      "Ensure compliance with safety, hygiene, and quality control standards",
      "Monitor inventory and ensure proper storage of laboratory reagents and supplies"
    ],
    requirements: [
      "Bachelor’s degree in Medical Laboratory Science or a related field",
      "2–3 years of relevant work experience in a hospital or diagnostic setting",
      "Strong analytical and problem-solving skills",
      "High level of accuracy and attention to detail",
      "Good communication and teamwork skills"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:oyomesispecialisthospitals@gmail.com">oyomesispecialisthospitals@gmail.com</a> using the Job Title as the subject of the email.',
    salary: "Not Specified",
    deadline: "25th May, 2026"
  },
  {
    id: "rig-supervisor-iii-offshore-2026",
    title: "Rig Supervisor III",
    date: "2026-04-30",
    location: "Offshore, Nigeria",
    type: "Contract",
    seniority: "Senior",
    summary: "Represents the company on a rig site to support safe and efficient execution of well plans, managing logistics for personnel, equipment, and services.",
    responsibilities: [
      "Communicate expectations regarding safety, security, health, and environment (SSHE)",
      "Monitor rig operations and provide feedback to ensure well control procedures are followed",
      "Ensure safety, operational, environmental, and security drills are conducted at specified frequencies",
      "Order and organize logistics for services and equipment necessary for operations",
      "Support onsite surveillance requirements for kick detection, abnormal pressure, etc.",
      "Generate accurate and adequate operations reports",
      "Interface with engineering and geology to ensure understanding of objectives"
    ],
    requirements: [
      "Experience in rig supervisory or rig leadership roles for drilling and completion operations",
      "Experience working for a major Operator or Drilling Contractor",
      "Hold current certification for Well Control"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://amaidenenergy.com/job/drilling-well-intervention-subsea-advisor-iii-5/">Apply Online</a>',
    salary: "Not Specified",
    deadline: "8th May, 2026"
  },
  {
    id: "mechanical-maintenance-technician-agbara-2026",
    title: "Mechanical Maintenance Technician",
    date: "2026-04-30",
    location: "Agbara, Ogun",
    type: "Full-time",
    summary: "Responsible for routine maintenance and repair of equipment, ensuring efficient and effective operation of machinery on-site.",
    responsibilities: [
      "Perform routine maintenance and repair of equipment",
      "Perform preventive maintenance and troubleshoot mechanical issues",
      "Assist with industrial equipment inspections and repairs",
      "Work to minimize downtime and maintain optimal machine performance",
      "Ensure compliance with safety and operational standards"
    ],
    requirements: [
      "Proficiency in Industrial Equipment Maintenance and Repair tasks",
      "Strong skills in Mechanical Troubleshooting and problem-solving",
      "Experience with Preventive Maintenance routines",
      "Ability to interpret technical drawings and manuals",
      "Relevant technical certifications or diploma in Mechanical Engineering",
      "Prior experience in steel manufacturing is an advantage"
    ],
    apply: 'Interested and qualified candidates should forward their CV to: <a href="mailto:careers@sunsteel.net">careers@sunsteel.net</a> using the position as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "amo-intern-ph-baker-hughes-2026",
    title: "Emerging Talent–Assembly, Maintenance & Overhaul Intern",
    date: "2026-04-30",
    location: "Port Harcourt, Rivers",
    type: "Internship",
    seniority: "Junior",
    summary: "Hands-on work experience for students or recent graduates to gain insights into assembly, maintenance, and overhaul processes in the energy sector.",
    responsibilities: [
      "Complete internal projects to deliver customer outcomes",
      "Learn internal software to assist with completion of projects",
      "Collaborate with cross-functional teams and other interns",
      "Apply Health, Safety, and Environment (HS&E) standards and procedures",
      "Participate in focused training and team meetings"
    ],
    requirements: [
      "Currently enrolled or recently graduated in a Bachelors’ or Masters’ level degree in Engineering or STEM field",
      "Maintained a GPA ≥ 3.0 out of 4.0 or equivalent",
      "Fluent in oral and written English",
      "Legal authorization to work in Nigeria"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://bakerhughes.wd5.myworkdayjobs.com/en-US/BakerHughes/job/Emerging-Talent-Assembly--Maintenance---Overhaul-Intern-2026-Opportunities--Nigeria-_R158348?utm_source=">Apply Online</a>',
    salary: "Competitive monthly allowance",
    deadline: "Not Specified"
  },
  {
    id: "clinical-supervisor-medical-team-leader-dikwa-2026",
    title: "Clinical Supervisor / Medical Team Leader",
    date: "2026-04-30",
    location: "Dikwa, Borno",
    type: "Full-time",
    seniority: "Senior",
    summary: "Provide technical advice on project design and administration of Nutrition and Health programmes, ensuring delivery of quality medical care.",
    responsibilities: [
      "Provide technical advice on project design, planning, and evaluation of Nutrition and Health activities",
      "Provide outpatient and/or inpatient medical care to beneficiaries",
      "Conduct health and nutritional surveillance (SMART, SQUEAC, etc.)",
      "Oversee implementation of community-based management of acute malnutrition",
      "Monitor and supervise health and nutrition staff",
      "Oversee continuous training programs for staff",
      "Manage recruitment and personnel issues for the health team"
    ],
    requirements: [
      "Bachelor’s Degree in Medicine (MB.BS / MBChB)",
      "Over 2 years’ experience in humanitarian context",
      "Valid and current practicing license",
      "Excellent report-writing skills",
      "Fluent in English and Hausa (Kanuri is a plus)"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://docs.google.com/forms/d/e/1FAIpQLSckxFvM66Yk7qLD8LjvAM-QEGGUhY61al572I46QTchqxmjGw/viewform">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "senior-engineer-lagos-thestartupplace-2026",
    title: "Senior Engineer",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Oversee engineering projects for a site about 90% complete, ensuring quality, safety compliance, and stakeholder satisfaction.",
    responsibilities: [
      "Oversee engineering projects meeting quality, timeline, and budget constraints",
      "Conduct checks for errors and ensure compliance with industry standards",
      "Work closely with clients and stakeholders to achieve project goals",
      "Lead and mentor engineering teams"
    ],
    requirements: [
      "Bachelor’s degree in Engineering (Civil, Mechanical, Electrical, or related); COREN Certification mandatory",
      "Previous experience in construction or consulting is an advantage",
      "Strong project management and technical design skills",
      "Excellent communication and presentation skills"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:hr@thestartupplaceng.com">hr@thestartupplaceng.com</a> using the Job Title as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "graphic-designer-volunteer-henosis-2026",
    title: "Graphic Designer (Volunteer)",
    date: "2026-04-30",
    location: "Ibadan, Oyo",
    type: "Volunteer",
    summary: "Design visuals for events, campaigns, and social media for a youth-led nonprofit organization passionate about empowerment.",
    responsibilities: [
      "Design graphics for events, campaigns, and social media",
      "Create visually engaging materials that align with the brand",
      "Work with the publicity team to support campaigns",
      "Translate ideas into compelling visual content"
    ],
    requirements: [
      "Skilled in tools like Canva, Photoshop, or similar",
      "Creative thinkers with attention to detail",
      "Passion for impact-driven work",
      "Ability to meet deadlines and collaborate effectively"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:faith@henosisinternational.org">faith@henosisinternational.org</a> using Job Title as the subject of the email.',
    salary: "Unpaid (Volunteer Role)",
    deadline: "Not Specified"
  },
  {
    id: "it-support-officer-kora-lagos-2026",
    title: "IT Support Officer",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    summary: "Provide first- and second-level technical support to end-users, ensuring smooth operation of IT infrastructure and user satisfaction.",
    responsibilities: [
      "Provide day-to-day technical support for laptops, mobile devices, and peripherals",
      "Diagnose and resolve hardware, software, and network issues",
      "Install, configure, and maintain operating systems and security tools",
      "Manage user accounts, permissions, and access controls (e.g. Active Directory)",
      "Support onboarding and offboarding processes",
      "Maintain IT asset inventory and documentation",
      "Assist in network administration and cybersecurity practices"
    ],
    requirements: [
      "Minimum of 1-3 years of experience in IT support",
      "Minimum of a Bachelor’s degree",
      "Strong troubleshooting and problem-solving skills",
      "Excellent communication and customer-focused mindset",
      "Ability to work independently and as part of a team"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://jobs.workable.com/view/98byfWFFVTkzLwfaCf4w2o/remote-it-support-officer-in-lagos-at-kora">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "medical-laboratory-scientist-lekki-ajah-2026",
    title: "Medical Laboratory Scientist",
    date: "2026-04-30",
    location: "Lekki, Lagos",
    type: "Full-time",
    summary: "Conduct routine and specialized laboratory tests, ensuring highest standards of quality, accuracy, and compliance in diagnostic procedures.",
    responsibilities: [
      "Perform routine and specialized laboratory tests in hematology, microbiology, etc.",
      "Analyze test results and ensure accurate documentation and reporting",
      "Operate and maintain laboratory equipment calibration and functionality",
      "Adhere to quality control procedures and laboratory safety standards",
      "Manage laboratory inventory including reagents and consumables",
      "Collaborate with healthcare professionals for patient diagnosis"
    ],
    requirements: [
      "Bachelor’s Degree in Medical Laboratory Science or related field",
      "Valid practicing license (e.g. MLSCN)",
      "2 – 4 years relevant work experience in a clinical laboratory setting",
      "Strong analytical and attention-to-detail skills",
      "Good communication and teamwork abilities"
    ],
    apply: 'Interested and qualified candidates should send their CVs to: <a href="mailto:talentsourcingmms@gmail.com">talentsourcingmms@gmail.com</a> using “Medical Laboratory Scientist – Lekki” as the subject of the mail.',
    salary: "Not Specified",
    deadline: "7th May, 2026"
  },
  {
    id: "maintenance-technician-slb-ph-2026",
    title: "Maintenance Technician",
    date: "2026-04-30",
    location: "Port Harcourt, Rivers",
    type: "Full-time",
    summary: "Ensure on-time delivery of equipment through preventive maintenance and repairs of surface well test or downhole electronics equipment.",
    responsibilities: [
      "Perform maintenance in alignment with Reliability-Centered Maintenance strategy",
      "Adhere to Computerized Maintenance Management System (CMMS) standards",
      "Record materials used, labor hours, and equipment movements in business systems",
      "Contribute to continuous improvement to enhance asset utilization",
      "Participate in failure investigations and root cause analysis",
      "Ensure accurate completion and archiving of workshop documentation"
    ],
    requirements: [
      "HND in Engineering – Mechanical or Electrical",
      "Minimum of 3 years’ shop operations experience in maintenance",
      "Hands-on competency in failure investigation and root cause analysis",
      "Strong communication skills and team player mentality"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://careers.slb.com/jobdescription.aspx?id=85933&utm_source=">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "technical-support-staff-lagos-banking-2026",
    title: "Technical Support Staff",
    date: "2026-04-30",
    location: "Apapa, Lekki Expressway and VI – Lagos",
    type: "Full-time (Onsite)",
    seniority: "Junior",
    summary: "Provide first-level technical assistance and resolve user issues across assigned banking locations.",
    responsibilities: [
      "Provide first-line technical support to customers / users",
      "Troubleshoot and resolve hardware, software, and network issues",
      "Escalate complex issues to relevant teams",
      "Maintain accurate records of incidents and resolutions",
      "Assist with system installations and configurations"
    ],
    requirements: [
      "HND / B.Sc Degree in IT, Computer Science, or related field",
      "Must be age 27 and below",
      "Must have the NYSC certificate"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://forms.gle/QPJNa4cFKitJ6Kjp6">Apply Online</a>',
    salary: "₦155,000 monthly plus Benefits",
    deadline: "18th May, 2026"
  },
  {
    id: "advisor-esg-analytics-reporting-mtn-2026",
    title: "Advisor – ESG Analytics and Reporting",
    date: "2026-04-30",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Design and improve data systems, dashboards, and analytics platforms underpinning sustainability reporting and ESG performance tracking.",
    responsibilities: [
      "Lead design of integrated ESG data management system and centralized repository",
      "Define and drive automation of ESG data collection workflows",
      "Develop and manage ESG performance dashboards and reporting tools",
      "Develop custom analytical models to identify performance trends",
      "Monitor evolving international sustainability disclosure standards",
      "Serve as primary contact for ESG data queries"
    ],
    requirements: [
      "First Degree in CS, Statistics, IT, or Environmental Science",
      "Proficiency in Python, SQL, or R is required",
      "3-7 years’ experience in data analysis or business intelligence",
      "Familiarity with ESG reporting frameworks (GRI, IFRS, etc.)"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://ehle.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/7348">Apply Online</a>',
    salary: "Not Specified",
    deadline: "5th May, 2026"
  },
  {
    id: "hvac-technician-teamace-lagos-2026",
    title: "HVAC Technician",
    date: "2026-04-30",
    location: "Surulere, Lagos",
    type: "Full-time",
    summary: "Responsible for installation, maintenance, and repair of commercial and industrial air conditioning systems (DX and Chilled Water).",
    responsibilities: [
      "Perform routine and preventive maintenance on HVAC systems",
      "Diagnose and repair mechanical and electrical faults (compressors, motors)",
      "Install HVAC systems and ensure proper setup",
      "Conduct testing and commissioning of A/C systems",
      "Ensure compliance with safety standards and operational procedures"
    ],
    requirements: [
      "Minimum of 5 years hands-on experience with DX and chilled water systems",
      "Minimum of SSCE with accredited HVAC training or Trade Test Certificate",
      "Strong technical skills in brazing, soldering, and electrical troubleshooting",
      "Good communication and teamwork skills"
    ],
    apply: 'Interested and qualified candidates should apply via: <a href="https://forms.gle/NmhAefBTZmHkNAwz9">Apply Online</a>',
    salary: "₦500,000 – ₦650,000 per month",
    deadline: "27th May, 2026"
  },
  {
    id: "lead-enterprise-performance-reporting-mastercard-2026",
    title: "Lead, Enterprise Performance & Reporting",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Technical backbone of enterprise performance reporting, combining advanced SQL engineering and expert Power BI development.",
    responsibilities: [
      "Lead end-to-end development of enterprise performance dashboards",
      "Build and maintain advanced Power BI solutions",
      "Proactively identify and escalate data quality issues",
      "Develop and maintain complex SQL queries and transformations",
      "Optimize SQL logic for performance and accuracy",
      "Implement enterprise reporting standards and documentation",
      "Act as trusted reporting partner to Program and Functional leaders"
    ],
    requirements: [
      "Bachelor’s Degree in CS, IT, Data Engineering, or related field",
      "5 to 8 years’ experience in enterprise reporting and analytics",
      "Strong hands-on experience with advanced SQL and expert Power BI",
      "Demonstrated experience in data quality management and modeling"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://mastercardfoundation.wd10.myworkdayjobs.com/en-US/mastercardfdn/job/Lead--Enterprise-Performance---Reporting_JR-0000000666">Apply Online</a>',
    salary: "Not Specified",
    deadline: "5th May, 2026"
  },
  {
    id: "junior-business-analyst-renmoney-lagos-2026",
    title: "Junior Business Analyst",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary: "Analyze product and financial data to find insights driving real decisions as the company scales.",
    responsibilities: [
      "Analyze product and financial data for insights",
      "Build and maintain dashboards tracking MAU and portfolio health",
      "Define and measure KPIs with Product, Risk, and Finance teams",
      "Support modelling of customer cohorts and LTV",
      "Translate messy data into clear, concise recommendations"
    ],
    requirements: [
      "Degree in a quantitative field from a top university",
      "Comfortable with SQL, Excel, and BI tools (Power BI, Tableau)",
      "Experience in oil and gas sector/reservoir modelling is an advantage",
      "Detail-obsessed with strong problem-solving skills"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://jobs.workable.com/view/2jbANUQMmaCzMaNqinsXM3/junior-business-analyst-in-lagos-at-renmoney">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "hr-intern-food-concepts-lagos-2026",
    title: "HR Intern",
    date: "2026-04-30",
    location: "Lagos",
    type: "Internship",
    seniority: "Junior",
    summary: "Support HR processes and practices at Food Concepts PLC while building professional skills.",
    responsibilities: [
      "Assist in core HR functions and administrative tasks",
      "Support recruitment and onboarding activities",
      "Maintain employee records and documentation",
      "Handle HR queries within agreed timelines"
    ],
    requirements: [
      "Bsc or HND in HR, Psychology, Admin or related field",
      "Knowledge of HR processes and practices",
      "Strong communication and interpersonal skills",
      "Proficiency in MS Office suite"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:careers@foodconceptsplc.com">careers@foodconceptsplc.com</a> using the job title as the subject of the mail.',
    salary: "Competitive Allowance",
    deadline: "Not Specified"
  },
  {
    id: "graduate-trainee-logistics-onitsha-2026",
    title: "Graduate Trainee – Logistic Department",
    date: "2026-04-30",
    location: "Onitsha, Anambra",
    type: "Full-time",
    seniority: "Junior",
    summary: "Hands-on experience in supply chain operations, inventory management, and distribution within a manufacturing environment.",
    responsibilities: [
      "Assist in coordinating inbound and outbound logistics",
      "Support inventory management and warehouse activities",
      "Monitor and track shipments to ensure timely delivery",
      "Maintain accurate logistics and supply chain records",
      "Collaborate with sales and production teams"
    ],
    requirements: [
      "Degree in relevant field",
      "Basic knowledge of supply chain or logistics",
      "Internship or NYSC experience in a related field is a plus",
      "Knowledge of motor parts is an advantage"
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:reliablesteelplasticrecruit@gmail.com">reliablesteelplasticrecruit@gmail.com</a> using “Graduate Trainee – Logistics Application” as the subject.',
    salary: "Attractive plus accommodation",
    deadline: "10th May, 2026"
  },
  {
    id: "graduate-trainee-dbell-lagos-2026",
    title: "Graduate Trainee",
    date: "2026-04-30",
    location: "Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary: "Structured training program to provide recent graduates with exposure to different organization departments.",
    responsibilities: [
      "Participate in training sessions and on-the-job learning",
      "Assist in daily operational tasks and project execution",
      "Support senior staff with research and data analysis",
      "Prepare reports, presentations, and documentation",
      "Provide innovative ideas to improve business processes"
    ],
    requirements: [
      "Bachelor’s Degree or HND in a relevant field",
      "0 – 2 years of work experience",
      "Strong communication and interpersonal skills",
      "Positive attitude and eagerness to learn"
    ],
    apply: 'Interested and qualified candidates should forward their CV/Resume to: <a href="mailto:dbelllogistics06@gmail.com">dbelllogistics06@gmail.com</a> using the Job Title as the subject.',
    salary: "₦100,000 – ₦150,000 monthly",
    deadline: "30th May, 2026"
  },
  {
    id: "registration-area-technician-ratech-ekiti-2026",
    title: "Registration Area Technician – RATECH",
    date: "2026-04-30",
    location: "Ekiti",
    type: "Full-time",
    summary: "ICT support staff for election duties engaged by INEC, ensuring smooth technical operations at registration areas.",
    responsibilities: [
      "Provide technical support at registration areas",
      "Ensure proper functioning of ICT systems during operations",
      "Submit technical reports and updates"
    ],
    requirements: [
      "Suitable INEC ICT staff (States & HQ)",
      "Must not be a political party member",
      "Must reside in Ekiti State"
    ],
    apply: 'Interested and qualified candidates should apply online: <a href="https://pres.inecnigeria.org/app/inec-iasd/applicant/registration">Apply Online</a>',
    salary: "Not Specified",
    deadline: "19th May, 2026 (12 Midnight)"
  },
  {
    id: "head-of-it-jakande-lekki-2026",
    title: "Head of IT",
    date: "2026-04-30",
    location: "Jakande-Lekki, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Take charge of technology operations, lead IT strategy, and drive digital upgrades to enhance departmental efficiency.",
    responsibilities: [
      "Oversee all IT infrastructure, systems, and network performance",
      "Ensure data security, system reliability, and business continuity",
      "Manage database systems, backups, and data recovery",
      "Provide reliable IT support to all departments",
      "Develop and enforce IT policies and procedures",
      "Supervise internal IT staff and manage vendor relationships"
    ],
    requirements: [
      "BSc / HND in Computer Science, IT, or related field",
      "3–5 years of proven experience in IT operations",
      "Strong hands-on knowledge of networks and cybersecurity",
      "Leadership experience managing teams or projects"
    ],
    apply: 'Interested and qualified candidates should send CV and Cover Letter to: <a href="mailto:sophiatechdoctor@gmail.com">sophiatechdoctor@gmail.com</a> or <a href="mailto:Techdoctorinnovations@gmail.com">Techdoctorinnovations@gmail.com</a>.',
    salary: "₦300,000 Net monthly",
    deadline: "15th May, 2026"
  },
  {
    id: "chief-operating-officer-coo-lagos-2026",
    title: "Chief Operating Officer (COO)",
    date: "2026-04-28",
    location: "Lagos",
    type: "Full-Time",
    seniority: "Senior",
    summary: "Senior leadership role to lead operations, oversee project delivery, and drive efficiency across multiple construction, chemical manufacturing, and distribution sites.",
    responsibilities: [
      "Lead construction operations, project delivery, and site management",
      "Oversee multiple projects, ensuring efficiency, cost control, and quality",
      "Ensure compliance with safety, regulatory, and industry standards",
      "Drive process improvement and operational excellence",
      "Manage stakeholders including clients, contractors, and internal teams"
    ],
    requirements: [
      "Bachelor’s degree in Engineering, Construction Management, or related field (MBA is a plus)",
      "10–15 years’ experience in construction",
      "4–6 years in a senior leadership role",
      "Strong expertise in operations, project management, and cost control"
    ],
    apply: 'Send your CV to <a href="mailto:careers@elizabethmaddeux.com">careers@elizabethmaddeux.com</a> with subject: Chief Operating Officer',
    salary: "₦1,000,000 – ₦1,500,000",
    deadline: "Not Specified"
  },
  {
    id: "house-keeper-ikoyi-lagos-2026",
    title: "House Keeper",
    date: "2026-04-28",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    summary: "Experienced housekeeper needed for a residence in Ikoyi.",
    responsibilities: [
      "Maintain cleanliness and organization of the residence",
      "Handle laundry and basic household chores",
      "Ensure supplies are replenished"
    ],
    requirements: [
      "Preferably a female",
      "Minimum of 2 years experience",
      "Proximity to Ikoyi, Lagos"
    ],
    apply: 'Interested persons should fill the form: <a href="https://forms.gle/3b1LvL8LjnZuHwvb9">Apply Online</a>',
    salary: "₦100,000",
    deadline: "Not Specified"
  },
  {
    id: "executive-driver-c-suite-ikoyi-2026",
    title: "Executive Driver",
    date: "2026-04-28",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    summary: "Reliable Executive Driver with experience driving for C-Suite executives.",
    responsibilities: [
      "Safely transport C-Suite executives",
      "Ensure vehicle maintenance and cleanliness",
      "Maintain confidentiality and professionalism"
    ],
    requirements: [
      "Minimum of 5 years experience",
      "Minimum of 30 years old",
      "Proximity to Ikoyi, Lagos"
    ],
    apply: 'Interested persons should fill the form: <a href="https://forms.gle/3b1LvL8LjnZuHwvb9">Apply Online</a>',
    salary: "₦200,000",
    deadline: "Not Specified"
  },
  {
    id: "technical-sales-engineer-flowitec-lagos",
    title: "Technical Sales Engineer (Flowitec)",
    date: "2026-04-28",
    location: "Lagos (Onsite)",
    type: "Full-time",
    summary: "Drive sales of mechanical engineering solutions, combining technical expertise with strong commercial acumen to build long-term client relationships.",
    responsibilities: [
      "Identify and close new business opportunities",
      "Understand client needs and recommend tailored engineering solutions",
      "Deliver technical presentations, proposals, and product demos",
      "Collaborate with engineering and supply chain teams",
      "Provide after-sales support and ensure customer satisfaction",
      "Track sales pipeline and provide performance reports"
    ],
    requirements: [
      "Bachelor’s degree in Mechanical Engineering or related field",
      "Proven experience in technical or industrial sales",
      "Strong understanding of mechanical systems",
      "Excellent communication & negotiation skills",
      "Proficiency in Microsoft Office & CRM tools"
    ],
    apply: 'Send your CV to <a href="mailto:yomade.hrleverage@gmail.com">yomade.hrleverage@gmail.com</a> using “Technical Sales Engineer – Lagos” as subject.',
    salary: "₦350,000 – ₦500,000",
    deadline: "Not Specified"
  },
  {
    id: "social-media-content-lead-yogurt-surulere",
    title: "Social Media & Content Lead",
    date: "2026-04-28",
    location: "Masha, Surulere, Lagos (On-site)",
    type: "Full-time",
    summary: "Lead for a Yogurt Manufacturing brand to own social media presence end-to-end, creating high-quality storytelling and brand representation.",
    responsibilities: [
      "Own and manage all company social media platforms",
      "Develop and maintain a monthly content calendar",
      "Create short-form content independently (reels, TikTok)",
      "Write captions and manage community engagement",
      "Execute online and offline marketing campaigns",
      "Prepare weekly and monthly performance reports"
    ],
    requirements: [
      "2–4 years experience managing brand social media accounts",
      "Proven experience creating engaging short-form video content",
      "Strong storytelling and content planning ability",
      "Ability to shoot quick mobile content when needed",
      "Strong copywriting and analytical skills"
    ],
    apply: 'Fill out the application form: <a href="https://forms.gle/3Z1AtkowRfHG4NMu8">Apply Online</a>',
    salary: "₦300,000 – ₦400,000",
    deadline: "Not Specified"
  },
  {
    id: "accountant-itmafrica-wuse-2-abuja",
    title: "Accountant",
    date: "2026-04-28",
    location: "Wuse 2, Abuja",
    type: "Full-time",
    summary: "Responsible for overseeing the full accounting lifecycle across project, trading, service, and production business units.",
    responsibilities: [
      "Handle all project accounting (income, expenses, WIP)",
      "Manage purchases, sales, inventory, and monthly stock counts",
      "Compute COGS and gross profit",
      "Track production costs and update finished goods records",
      "Prepare monthly and annual financial statements",
      "Process payroll and ensure statutory filings"
    ],
    requirements: [
      "B.Sc. in Accounting, Finance, or related field",
      "ACA, ACCA, or ICAN certification (mandatory)",
      "5+ years relevant experience in multi-function accounting",
      "Proficiency in QuickBooks, Sage, or similar software",
      "Strong IFRS and tax knowledge"
    ],
    apply: 'Send CV to <a href="mailto:recruitment.ng@itmafrica.com">recruitment.ng@itmafrica.com</a>',
    salary: "₦300,000 - ₦500,000",
    deadline: "Not Specified"
  },
  {
    id: "it-officer-hospitality-ikeja-lagos",
    title: "IT Officer (Hospitality)",
    date: "2026-04-28",
    location: "Ikeja, Lagos State",
    type: "Full-time",
    summary: "Competent and detail-oriented junior IT Officer to provide technical support and maintain IT systems for a reputable Spa and wellness center.",
    responsibilities: [
      "Provide first-level technical support for hardware and software",
      "Install and maintain computer systems and peripherals",
      "Monitor IT infrastructure for performance and security",
      "Maintain accurate records of IT assets",
      "Ensure compliance with IT policies"
    ],
    requirements: [
      "Minimum of National Diploma (ND) in IT, Computer Science, or related",
      "Preferably male",
      "Basic knowledge of hardware, software, and networking",
      "Good problem-solving and communication skills"
    ],
    apply: 'Apply and submit your CV using the link: <a href="https://forms.gle/WEHfVzJSsxZEwiCb9">Online Form</a>',
    salary: "₦200,000 (Net)",
    deadline: "Not Specified"
  },
  {
    id: "assistant-pie-production-supervisor-food-concepts-abuja",
    title: "Assistant Pie Production Supervisor",
    date: "2026-04-28",
    location: "Abuja",
    type: "Full-time",
    summary: "Support daily production operations, ensure quality standards, and maintain food safety compliance for Food Concepts PLC.",
    responsibilities: [
      "Supervise production staff and maintain workflow",
      "Monitor process steps, control points, and equipment",
      "Ensure Health, Safety, and Food Safety compliance",
      "Maintain workplace safety and enforce quality standards",
      "Document and report quality issues",
      "Support staff training and development"
    ],
    requirements: [
      "Relevant experience in food production",
      "Strong understanding of food safety standards",
      "Ability to supervise teams effectively"
    ],
    apply: 'Send applications to: <a href="mailto:careers@foodconceptsplc.com">careers@foodconceptsplc.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "receptionist-travel-visa-lekki-lagos",
    title: "Receptionist",
    date: "2026-04-28",
    location: "Lekki Phase 1, Lagos",
    type: "Contract",
    summary: "Serve as the face of a growing travel and visa services organization, ensuring a welcoming and professional front desk environment.",
    responsibilities: [
      "Welcome and attend to visitors and clients",
      "Answer phone calls and direct inquiries",
      "Manage appointment scheduling and office coordination",
      "Maintain a clean and organized reception area",
      "Handle basic administrative and clerical duties"
    ],
    requirements: [
      "Minimum of OND / HND",
      "Proven experience in a front desk or administrative role",
      "Excellent communication and interpersonal skills",
      "Good appearance and professional demeanor",
      "Basic computer skills"
    ],
    apply: 'Send CV to: <a href="mailto:yomade.hrleverage@gmail.com">yomade.hrleverage@gmail.com</a> using “Receptionist – Lagos” as subject.',
    salary: "Not Specified",
    deadline: "18th May, 2026"
  },
  {
    id: "sales-representative-skincare-trade-fair-lagos",
    title: "Sales Representative (Skincare)",
    date: "2026-04-28",
    location: "Trade Fair, Lagos",
    type: "Full-time",
    summary: "Attend to customers and drive sales for a skincare business located at Trade Fair, Lagos.",
    responsibilities: [
      "Attend to walk-in customers",
      "Drive in-store and online sales",
      "Process transactions and issue receipts",
      "Maintain store appearance and organization",
      "Support inventory and stock management"
    ],
    requirements: [
      "HND/B.Sc qualification",
      "1–3 years experience in retail or customer-facing roles",
      "Passion for skincare/cosmetics is an advantage",
      "Must reside around Trade Fair"
    ],
    apply: 'Send CV to: <a href="mailto:crestructureinfos@gmail.com">crestructureinfos@gmail.com</a>. Use “Sales Representative Trade Fair” as subject.',
    salary: "₦100,000",
    deadline: "Not Specified"
  },
  {
    id: "sales-executive-fmcg-abuja-2026",
    title: "Sales Executive (FMCG)",
    date: "2026-04-28",
    location: "Abuja",
    type: "Full-time",
    summary: "Passionate and results-oriented professional to join a growing FMCG team in Abuja.",
    responsibilities: [
      "Drive sales and achieve assigned targets",
      "Develop and maintain relationships with distributors and retailers",
      "Identify new market opportunities",
      "Ensure proper product visibility and merchandising",
      "Provide timely market feedback and competitor insights"
    ],
    requirements: [
      "Minimum of 2 years FMCG sales experience",
      "Strong negotiation and communication skills",
      "Good knowledge of assigned territory",
      "Minimum qualification: OND / HND / BSc"
    ],
    apply: 'Interested candidates should apply via: <a href="https://forms.gle/8jEw8Xk8RmvqYJdNA">Online Form</a>',
    salary: "Competitive package",
    deadline: "Not Specified"
  },
  {
    id: "it-support-officer-solid-groups-lagos-2026",
    title: "IT Support Officer",
    date: "2026-04-28",
    location: "Lagos",
    type: "Full-time",
    summary: "Responsible for providing day-to-day technical support, maintaining WordPress websites, and managing digital presence including social media and content design.",
    responsibilities: [
      "Provide technical support and troubleshoot hardware/software issues",
      "Manage and maintain WordPress websites",
      "Design digital materials (flyers, banners)",
      "Edit and produce video content",
      "Manage and update social media accounts",
      "Perform data backups and ensure system integrity",
      "Support listing of products on digital platforms"
    ],
    requirements: [
      "Proven experience in IT support or similar role",
      "Strong knowledge of computer systems and networks",
      "Proficiency in WordPress CMS",
      "Experience with design tools (Canva, CapCut, Adobe)",
      "Ability to manage multiple tasks and meet deadlines"
    ],
    apply: 'Send CV to <a href="mailto:hr.solidgroups@gmail.com">hr.solidgroups@gmail.com</a> with the Role as the Subject.',
    salary: "₦150,000 - ₦200,000",
    deadline: "Not Specified"
  },
  {
    id: "business-development-manager-financial-services-lekki-2026",
    title: "Business Development Manager (Financial Services)",
    date: "2026-04-28",
    location: "Lekki, Lagos",
    type: "Full-time",
    summary: "Experienced manager for a CBN-licensed Financial Services Company to manage client accounts and drive revenue growth.",
    responsibilities: [
      "Manage existing client accounts",
      "Drive new business opportunities",
      "Grow revenue and client portfolio"
    ],
    requirements: [
      "Minimum of 5 years’ experience in a Commercial Bank or Finance Company",
      "Strong understanding of financial products",
      "Degree in Sales, Marketing, or related field"
    ],
    apply: 'Apply here: <a href="https://forms.gle/TMz65MeDaEGhQ1WF6">Online Form</a>',
    salary: "₦750,000 (Monthly Gross)",
    deadline: "Not Specified"
  },
  {
    id: "computer-technician-jibowu-yaba",
    title: "Computer Technician",
    date: "2026-04-26",
    location: "Jibowu, Yaba, Lagos",
    type: "Full-time",
    summary: "Responsible for installing, repairing, and maintaining computer systems, hardware, and software to ensure smooth operations.",
    responsibilities: [
      "Troubleshoot hardware and software issues",
      "Install and configure computers and accessories",
      "Perform routine system maintenance",
      "Ensure proper functioning of network devices"
    ],
    requirements: [
      "Minimum SSCE/OND or relevant certification",
      "1–3 years experience",
      "Good knowledge of computer repairs and maintenance",
      "Ability to work independently"
    ],
    apply: 'To apply, contact via call/WhatsApp: <a href="tel:08038742198">08038742198</a>',
    salary: "₦120,000",
    deadline: "Not Specified"
  },
  {
    id: "store-keeper-jibowu-yaba",
    title: "Store Keeper",
    date: "2026-04-26",
    location: "Jibowu, Yaba, Lagos",
    type: "Full-time",
    summary: "Manage inventory, receive and issue goods, and maintain accurate stock records for the organization.",
    responsibilities: [
      "Manage inventory levels",
      "Receive and issue goods accurately",
      "Keep accurate and up-to-date stock records"
    ],
    requirements: [
      "Minimum SSCE/OND",
      "1–3 years experience as a Store Keeper",
      "Good record-keeping and organizational skills",
      "Must be hardworking and responsible"
    ],
    apply: 'To apply, contact via call/WhatsApp: <a href="tel:08038742198">08038742198</a>',
    salary: "₦100,000",
    deadline: "Not Specified"
  },
  {
    id: "technical-sales-engineer-hrleverage-lagos",
    title: "Technical Sales Engineer",
    date: "2026-04-26",
    location: "Lagos",
    type: "Full-time (Onsite)",
    summary: "Drive sales of mechanical engineering solutions and services by combining technical expertise with strong sales skills and relationship management.",
    responsibilities: [
      "Identify and develop new business opportunities to meet and exceed sales targets.",
      "Conduct market research to understand customer needs, industry trends, and competitive landscape.",
      "Prepare and deliver technical presentations, proposals, and product demonstrations to clients.",
      "Provide expert technical advice and recommend customized engineering solutions.",
      "Collaborate with internal sales, engineering, and supply chain teams to design and deliver client-specific solutions.",
      "Build, maintain, and strengthen relationships with new and existing clients.",
      "Ensure effective after-sales support, addressing customer concerns and ensuring satisfaction.",
      "Support marketing activities such as exhibitions, trade shows, and product showcases.",
      "Maintain accurate records of sales activities, client interactions, and pipeline progress.",
      "Prepare and submit weekly reports on sales performance, client visits, call plans, and market insights.",
      "Monitor market trends, identify opportunities, and assess potential risks or competitive threats.",
      "Provide continuous technical support throughout the sales cycle."
    ],
    requirements: [
      "Bachelor’s degree in Mechanical Engineering or a related field.",
      "Proven experience in technical sales, preferably within the engineering or industrial sector.",
      "Strong understanding of mechanical systems and engineering solutions.",
      "Excellent communication, negotiation, and presentation skills.",
      "Ability to translate complex technical concepts into clear customer solutions.",
      "Strong problem-solving and analytical skills.",
      "Ability to work independently and collaboratively within a team.",
      "Proficiency in Microsoft Office and CRM tools."
    ],
    apply: 'Interested and qualified candidates should send cv to <a href="mailto:yomade.hrleverage@gmail.com">yomade.hrleverage@gmail.com</a> using the job title ”Technical Sales Engineer – Lagos” as the subject of mail.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "senior-accountant-ibadan-furniture",
    title: "Senior Accountant (2 Positions)",
    date: "2026-04-26",
    location: "Ibadan",
    type: "Full-time",
    summary: "Senior role for a furniture manufacturing company to manage financial records, production costing, and departmental productivity tracking.",
    responsibilities: [
      "Prepare and reconcile bank statements regularly",
      "Produce monthly management accounts and reports",
      "Monitor and analyze production costing",
      "Track weekly departmental productivity against targets and report performance",
      "Monitor sales team performance (weekly, fortnightly, and monthly reviews)",
      "Maintain shop accounts and monthly stock records",
      "Manage accounts receivable and payable",
      "Oversee store records and inventory control",
      "Process staff wages in collaboration with HR",
      "Conduct periodic market surveys for production materials and pricing"
    ],
    requirements: [
      "Bachelor’s degree in Accounting, Finance, or related field",
      "3–5 years accounting experience (manufacturing experience is a strong advantage)",
      "Solid understanding of costing, inventory, and basic financial reporting",
      "Proficiency in accounting software and Microsoft Excel",
      "Strong attention to detail and analytical skills",
      "Ability to work in a structured, performance-driven environment"
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:gethiredNG@proton.me">gethiredNG@proton.me</a> with the subject “Accountant – Ibadan”',
    salary: "N400k Monthly",
    deadline: "Not Specified"
  },
  {
    id: "it-officer-lagos-consultancy",
    title: "IT Officer",
    date: "2026-04-26",
    location: "Lagos",
    type: "Full-time",
    summary: "Manage company IT systems, provide technical support, and ensure smooth day-to-day technology operations for a Study Abroad Consultancy.",
    responsibilities: [
      "Manage the company’s IT systems and infrastructure.",
      "Provide technical support for hardware and software issues.",
      "Maintain and secure network infrastructure.",
      "Ensure smooth day-to-day technology operations."
    ],
    requirements: [
      "Bachelor’s degree in Computer Science, Information Technology, or a related field",
      "Proven experience in IT support or a similar role",
      "Strong knowledge of computer systems, networks, and troubleshooting",
      "Ability to maintain and secure IT infrastructure",
      "Good problem-solving and communication skills"
    ],
    apply: 'Send your CV to <a href="mailto:wssshr@wellspringschoolsupport.com">wssshr@wellspringschoolsupport.com</a> using “IT Officer – Lagos” as the subject.',
    salary: "N150,000 – N250,000",
    deadline: "Not Specified"
  },
  {
    id: "hsef-executive-oil-gas-ph",
    title: "HSEF Executive",
    date: "2026-04-26",
    location: "Port Harcourt (Site Role)",
    type: "Full-time",
    summary: "Lead safety operations for a major Oil & Gas company, ensuring strict adherence to industrial safety standards on-site.",
    responsibilities: [
      "Oversee site-based safety operations in an Oil & Gas environment.",
      "Ensure compliance with industrial safety certifications and protocols.",
      "Manage safety risks and reporting in site-based roles."
    ],
    requirements: [
      "HSE professionals in Oil & Gas / Petrochemical / Refinery",
      "Candidates with Industrial Safety certification",
      "Experience in site-based safety operations"
    ],
    apply: 'Send your CV to: <a href="mailto:jobs@croxum.com">jobs@croxum.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "production-supervisor-perfetti-lagos",
    title: "Production Supervisor",
    date: "2026-04-26",
    location: "Lagos",
    type: "Full-time",
    summary: "Oversee end-to-end production of Extruded Jelly or similar high technology lines while ensuring safety and SOP compliance.",
    responsibilities: [
      "Ensure the production is carried out as per SOP.",
      "Monitor and report any unsafe condition/unsafe act immediately and take steps to resolve the same.",
      "Responsible for end to end production of Extruded Jelly/Similar High technology line",
      "Maintain good house-keeping always.",
      "Monitor process parameters, ensure adherence to process parameters and train the operatives",
      "Generation of necessary reports on daily, weekly and monthly basis",
      "Report and escalate breakdown issues to Maintenance and follow up for timely resolution to ensure minimum loss of production.",
      "Collate and provide inputs on production issues/manufacturing feasibility for the line."
    ],
    requirements: [
      "Holds a Batchelor’s degree/Higher National Diploma in Engineering related field.",
      "5 – 8 years relevant experience.",
      "A Professional Certification in Health, Safety & Environment is desirable.",
      "Excellent organizational and supervisory skills required.",
      "Strong Stakeholder Management & Influencing Skills.",
      "Empathy balanced with firmness.",
      "Excellent prioritization skill.",
      "Passionate to grow team members.",
      "Good report writing skills.",
      "Committed to continuous improvement."
    ],
    apply: 'Interested and Qualified candidates should apply using the link: <a href="https://lnkd.in/eXeTgABe">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "sundry-foods-bakery-internship-2026",
    title: "Graduate Internship Program 2026 (Bakery Division)",
    date: "2026-04-26",
    location: "Abuja & Port Harcourt",
    type: "Internship",
    summary: "Join the Sundry Foods Graduate Internship Program to gain hands-on experience in large-scale bakery production and end-to-end processes.",
    responsibilities: [
      "Hands-on training in large-scale bakery production",
      "Learn end-to-end bread making processes",
      "Work in a fast-paced, real production environment",
      "Combine classroom learning with practical experience"
    ],
    requirements: [
      "B.Sc or HND in Food Science & Technology (min. 2:2)",
      "NYSC completed",
      "Must be willing to work/relocate to Port Harcourt"
    ],
    apply: 'Apply here: <a href="https://deroundtable.com/sundry-foods-graduate-internship-2026-paid-bakery-training-apply-now/">Apply Online</a>',
    salary: "Paid internship",
    deadline: "31st May, 2026"
  },
  {
    id: "mechanical-fitter-technician-sagamu",
    title: "Mechanical Fitter cum Technician",
    date: "2026-04-26",
    location: "Sagamu, Ogun State",
    type: "Full-time",
    summary: "Support maintenance operations across Filling Line, Plastic Manufacturing Plant, and Utility systems by performing repairs and troubleshooting.",
    responsibilities: [
      "Perform mechanical fitting, repairs, and preventive maintenance on production and utility equipment",
      "Troubleshoot breakdowns to minimize downtime",
      "Maintain and service filling machines, moulding equipment, compressors, chillers, and generators",
      "Ensure proper documentation of maintenance activities and machine history",
      "Support installation, commissioning, and continuous improvement initiatives"
    ],
    requirements: [
      "OND/HND or Trade Test/City & Guilds in Mechanical Engineering or related field",
      "3 years’ experience in a manufacturing environment (FMCG/plastics preferred)",
      "Experience with hydraulic, pneumatic systems, pumps, motors, conveyors, and packaging machines",
      "Ability to read and interpret mechanical drawings and maintenance manuals",
      "Experience with injection/blow moulding is an added advantage",
      "Strong mechanical fitting and fabrication skills",
      "Ability to troubleshoot mechanical, hydraulic, and pneumatic faults",
      "Knowledge of lubrication, alignment, and maintenance practices",
      "Familiarity with safety procedures (LOTO, confined space, etc.)",
      "Good communication and teamwork skills",
      "Willingness to learn and adapt"
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:recruitmentonline2025@gmail.com">recruitmentonline2025@gmail.com</a>',
    salary: "₦150,000 (Negotiable)",
    deadline: "Not Specified"
  },
  {
    id: "officer-cheque-management-ilupeju",
    title: "Officer, Cheque Management",
    date: "2026-04-25",
    location: "Ilupeju, Lagos",
    type: "Full-time",
    summary: "Responsible for the efficient processing, verification, and reconciliation of cheque transactions while ensuring compliance with regulatory and internal standards.",
    responsibilities: [
      "Process and verify cheque transactions accurately and promptly",
      "Ensure proper validation of cheque details in line with banking standards",
      "Reconcile cheque records and resolve discrepancies",
      "Monitor cheque clearing processes and escalate issues where necessary",
      "Maintain proper documentation and ensure compliance with policies and regulations"
    ],
    requirements: [
      "HND/BSc in a relevant discipline",
      "2–3 years’ experience in the financial sector (mandatory)",
      "Age Requirement: 29 years and below"
    ],
    apply: 'Qualified candidates should send their CV to: <a href="mailto:cekeh@icsoutsourcing.com">cekeh@icsoutsourcing.com</a> using “Officer, Cheque Management” as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "nursery-teacher-tipper-garage-ibadan",
    title: "Nursery Teacher",
    date: "2026-04-25",
    location: "Tipper Garage area of Ibadan",
    type: "Full-time",
    summary: "Provide a safe, caring, and stimulating learning environment for young children (ages 2–5). The role involves nurturing children’s social, emotional, physical, and cognitive development.",
    responsibilities: [
      "Plan and deliver age-appropriate lessons and activities",
      "Create a warm, welcoming, and inclusive classroom environment",
      "Ensure the safety and supervision of children at all times",
      "Support children’s emotional and social development",
      "Teach basic skills such as numbers, letters, and shapes",
      "Observe and record children’s progress",
      "Communicate regularly with the authority.",
      "Maintain classroom cleanliness and organization",
      "Assist with children’s basic needs (feeding, hygiene, toileting)",
      "Collaborate with other staff and participate in school activities"
    ],
    requirements: [
      "Minimum of NCE in Early Childhood Education or related fields",
      "Bachelor’s degree in Education (added advantage)",
      "Relevant teaching certification (if applicable)",
      "Experience as a teacher (If applicable)"
    ],
    apply: 'Interested and qualified candidates should send their CVs (IN MS WORD OR PDF FORMAT ONLY) to: <a href="https://wa.me/2348139477976">08139477976</a>. NOTE: CV should have your address or the area of Ibadan you currently reside.',
    salary: "Very Attractive",
    deadline: "Not Specified"
  },
  {
    id: "quality-assurance-documentation-officer-mowe",
    title: "Quality Assurance Documentation Officer",
    date: "2026-04-25",
    location: "Mowe",
    type: "Full-time",
    summary: "Urgent need for a Quality Assurance Documentation Officer to manage technical records in a pharmaceutical manufacturing environment.",
    responsibilities: [
      "Manage and organize Quality Assurance documentation.",
      "Ensure compliance with pharmaceutical manufacturing standards.",
      "Review and update technical records.",
      "Support audit preparation activities."
    ],
    requirements: [
      "BSC/HND in applied sciences (Microbiology, Chemistry, Biochemistry, etc).",
      "2-3 years of relevant experience in a pharmaceutical manufacturing company.",
      "Preference given to candidates living around Mowe, Sagamu, Berger, Ibafo, Magboro, Ojota, Ikeja, Alausa, Magodo and environs."
    ],
    apply: 'Interested and qualified applicants should forward their CVs to: <a href="mailto:metusmetus73@gmail.com">metusmetus73@gmail.com</a> or <a href="mailto:transnationalzamiva21@yahoo.com">transnationalzamiva21@yahoo.com</a>',
    salary: "250,000 - 300,000 monthly net",
    deadline: "Not Specified"
  },
  {
    id: "cleaner-anthony-lagos",
    title: "Cleaner",
    date: "2026-04-25",
    location: "Anthony, Lagos",
    type: "Full-time",
    summary: "Reliable cleaner needed for daily work at Anthony, Lagos. Involves early morning cleaning of office spaces and bathrooms.",
    responsibilities: [
      "Clean office spaces and bathrooms daily.",
      "Communicate effectively in English with team members.",
      "Manage cleaning supplies efficiently."
    ],
    requirements: [
      "SSCE/ND Holder.",
      "Trustworthy, hardworking, and reliable.",
      "Able to work independently.",
      "Must live around Anthony for an easy commute."
    ],
    apply: 'Send your CV to or call: <a href="tel:08175895429">08175895429</a>',
    salary: "₦60,000/month",
    deadline: "Not Specified"
  },
  {
    id: "chief-security-officer-vgc-ikota",
    title: "Chief Security Officer",
    date: "2026-04-25",
    location: "VGC, Ikota – Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Vigilant and experienced Chief Security Officer to oversee all security operations in a fast-paced hotel environment.",
    responsibilities: [
      "Develop and implement comprehensive security policies and procedures",
      "Lead and supervise the security team, including training and performance management",
      "Monitor access control and patrol activities",
      "Conduct regular security risk assessments and drills",
      "Investigate security incidents and prepare detailed reports",
      "Liaise with law enforcement agencies when necessary",
      "Ensure compliance with safety and security regulations",
      "Coordinate with other departments to maintain a secure and safe environment"
    ],
    requirements: [
      "Minimum of 10 years’ experience in security management, preferably in hospitality.",
      "Must have police experience (retired officer or equivalent background preferred).",
      "Strong knowledge of CCTV, access control, and security protocols.",
      "Good physical fitness and ability to work under pressure.",
      "Must reside on the Island."
    ],
    apply: 'Send your CV to: <a href="mailto:hrm@wellbornhotels.com">hrm@wellbornhotels.com</a> or via WhatsApp to: <a href="https://wa.me/2348118236959">08118236959</a>',
    salary: "Competitive",
    deadline: "Not Specified"
  },
  {
    id: "night-auditor-vgc-ikota",
    title: "Night Auditor",
    date: "2026-04-25",
    location: "VGC, Ikota – Lagos",
    type: "Full-time",
    summary: "Handle night-shift financial operations, guest accounting, and front office reconciliation ensuring all daily transactions are balanced.",
    responsibilities: [
      "Perform night audit procedures including balancing guest accounts and revenue",
      "Reconcile all front office, restaurant, bar, and other revenue outlets",
      "Prepare daily revenue and occupancy reports for management",
      "Process guest check-ins, check-outs, and late-night transactions",
      "Handle guest inquiries and complaints during night shift",
      "Verify and post all charges accurately to guest folios",
      "Ensure security and safety procedures are followed during the night shifts"
    ],
    requirements: [
      "Minimum of 2 years’ experience as a Night Auditor or in front office accounting.",
      "Good knowledge of hotel property management systems (PMS).",
      "Strong attention to detail and numerical accuracy.",
      "Proficiency in Microsoft Excel and basic accounting principles.",
      "Must reside on Lagos Island and be available for night shifts."
    ],
    apply: 'Send your CV to: <a href="mailto:hrm@wellbornhotels.com">hrm@wellbornhotels.com</a> or via WhatsApp to: <a href="https://wa.me/2348118236959">08118236959</a>',
    salary: "Competitive",
    deadline: "Not Specified"
  },
  {
    id: "cost-controller-vgc-ikota",
    title: "Cost Controller",
    date: "2026-04-25",
    location: "VGC, Ikota – Lagos",
    type: "Full-time",
    summary: "Detail-oriented analyst to manage and control operational costs, focusing on monitoring expenses and optimizing procurement in a hospitality environment.",
    responsibilities: [
      "Monitor and control food, beverage, and operational costs across all departments.",
      "Prepare daily, weekly, and monthly cost reports and variance analysis.",
      "Conduct inventory audits and reconcile stock levels with consumption.",
      "Analyze supplier prices and negotiate for better rates.",
      "Work with kitchen and F&B teams to minimize wastage.",
      "Track and control utility, labor, and overhead expenses.",
      "Support budgeting and forecasting processes."
    ],
    requirements: [
      "Minimum of 3 years’ experience as a Cost Controller in hospitality.",
      "Strong knowledge of cost control systems and inventory management.",
      "Proficiency in Microsoft Excel and hotel management software.",
      "Excellent analytical and numerical skills.",
      "Must reside on Lagos Island."
    ],
    apply: 'Send your CV to: <a href="mailto:hrm@wellbornhotels.com">hrm@wellbornhotels.com</a> or via WhatsApp to: <a href="https://wa.me/2348118236959">08118236959</a>',
    salary: "Competitive",
    deadline: "Not Specified"
  },
  {
    id: "it-support-specialist-vgc-ikota",
    title: "IT Support Specialist",
    date: "2026-04-25",
    location: "VGC, Ikota – Lagos",
    type: "Full-time",
    summary: "Skilled IT Support Specialist to handle hardware, software, and network support, ensuring smooth system operations in a hospitality environment.",
    responsibilities: [
      "Provide technical support (remote and on-site) to staff.",
      "Troubleshoot and resolve hardware, software, and network issues.",
      "Install, configure, and maintain IT systems and equipment.",
      "Manage IT assets and maintain documentation.",
      "Ensure system security and support resolution with internal teams."
    ],
    requirements: [
      "Minimum of 2 years’ IT support experience.",
      "Solid knowledge of computer systems and basic networking.",
      "Strong problem-solving and communication skills.",
      "Ability to work under pressure and prioritize tasks.",
      "Must reside on Lagos Island."
    ],
    apply: 'Send your CV to: <a href="mailto:hrm@wellbornhotels.com">hrm@wellbornhotels.com</a> or via WhatsApp to: <a href="https://wa.me/2348118236959">08118236959</a>',
    salary: "Competitive",
    deadline: "Not Specified"
  },
  {
    id: "graphics-designer-content-creator-vgc-ikota",
    title: "Graphics Designer / Content Creator",
    date: "2026-04-25",
    location: "VGC- Ikota, Lagos",
    type: "Full-time",
    summary: "Skilled creator to handle videographics, content creation, and fliers, ensuring regular engagement within the social media space for a hospitality organization.",
    responsibilities: [
      "Design and develop high-quality visual content (graphics, videos, animations).",
      "Ensure consistency in branding and visual identity across all platforms.",
      "Plan and schedule content using a content calendar.",
      "Handle digital cameras and professional editing software (Adobe Premiere Pro, etc).",
      "Work and deliver jobs within specified time frames."
    ],
    requirements: [
      "Minimum of 2 years’ graphic design and content creation experience.",
      "Must reside on Lagos Island.",
      "Proficient in handling digital cameras and professional editing software.",
      "Ability to work under pressure and prioritize tasks."
    ],
    apply: 'Send your CV and a few designs/contents to: <a href="mailto:hrm@wellbornhotels.com">hrm@wellbornhotels.com</a> or via WhatsApp to: <a href="https://wa.me/2348118236959">08118236959</a>',
    salary: "Competitive",
    deadline: "Not Specified"
  },
  {
    id: "experienced-architect-on-site-lagos",
    title: "Experienced Architect (On-Site)",
    date: "2026-04-25",
    location: "Lagos (Fully On-Site)",
    type: "Full-time",
    summary: "Highly skilled Architect to join the team for designing, planning, and overseeing the construction of building projects, ensuring aesthetic excellence and safety.",
    responsibilities: [
      "Develop architectural designs, concepts, and detailed drawings.",
      "Prepare and present design proposals to clients and stakeholders.",
      "Oversee project execution from concept to completion.",
      "Ensure compliance with building codes, regulations, and safety standards.",
      "Collaborate with engineers, contractors, and other professionals.",
      "Conduct site inspections and monitor project progress.",
      "Manage project timelines, budgets, and resources effectively."
    ],
    requirements: [
      "Bachelor’s or Master’s degree in Architecture.",
      "Minimum of 5–10 years proven experience as an Architect.",
      "Strong portfolio showcasing completed projects.",
      "Proficiency in design software (e.g., AutoCAD, Revit, SketchUp, etc.).",
      "Professional certification (e.g., ARCON, RIBA, etc.) is an advantage."
    ],
    apply: 'Interested and qualified candidates should send their CV and portfolio to: <a href="mailto:hr@thestartupplaceng.com">hr@thestartupplaceng.com</a>',
    salary: "₦1,500,000 – ₦2,000,000 / Month",
    deadline: "Not Specified"
  },
  {
    id: "executive-assistant-lagos-island-ics",
    title: "Executive Assistant",
    date: "2026-04-25",
    location: "Lagos Island",
    type: "Full-time",
    summary: "Smart, organized, and proactive assistant to support senior leadership. Ideal candidate should be detail-oriented and comfortable in a fast-paced environment.",
    responsibilities: [
      "Manage schedules, meetings, and appointments.",
      "Prepare reports, presentations, and correspondence.",
      "Handle confidential information with discretion.",
      "Coordinate travel and logistics arrangements.",
      "Provide general administrative support."
    ],
    requirements: [
      "Minimum of 2 years’ experience in a similar role.",
      "Strong communication and organizational skills.",
      "Proficiency in Microsoft Office tools.",
      "Ability to prioritize and meet deadlines."
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:lekkisupport@icsoutsourcing.com">lekkisupport@icsoutsourcing.com</a>',
    salary: "₦206,000",
    deadline: "Not Specified"
  },
  {
    id: "van-sales-representative-energy-drinks-lagos",
    title: "Van Sales Representative/On Trade (Energy Drinks)",
    date: "2026-04-25",
    location: "Lagos",
    type: "Full-time",
    summary: "Energetic, result-driven representative responsible for direct sales, distribution, and relationship management with retailers and on-trade outlets.",
    responsibilities: [
      "Drive company van to assigned routes to sell and distribute products.",
      "Ensure consistent product availability in retail outlets, bars, and supermarkets.",
      "Meet and exceed daily, weekly, and monthly sales targets.",
      "Build and maintain strong relationships with retailers.",
      "Onboard new outlets and identify new sales opportunities.",
      "Monitor competitor activities and market trends.",
      "Manage stock levels in the van and reconcile daily sales."
    ],
    requirements: [
      "Minimum of HND/BSc in any related field.",
      "At least 2 years’ experience in van sales or FMCG sales.",
      "Valid driver’s license (mandatory).",
      "Good knowledge of Lagos routes and market environment.",
      "Strong sales, negotiation, and communication skills."
    ],
    apply: 'Interested candidates can apply using the link: <a href="https://lnkd.in/eBVHaptY">Apply Online</a>',
    salary: "₦200,000 Monthly (Gross)",
    deadline: "Not Specified"
  },
  {
    id: "head-of-accounts-vi-lekki",
    title: "Head of Accounts",
    date: "2026-04-25",
    location: "Victoria Island/Lekki, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Oversee financial management, accounting operations, financial reporting, budgeting, and regulatory compliance of the organization.",
    responsibilities: [
      "Oversee all accounting operations including general ledger, receivables, payables, and treasury.",
      "Prepare and review financial statements in accordance with accounting standards.",
      "Lead budgeting, financial forecasting, and financial planning processes.",
      "Ensure compliance with tax laws, financial regulations, and statutory reporting.",
      "Coordinate internal and external audits and resolve findings.",
      "Monitor company financial performance and provide strategic insights.",
      "Manage relationships with banks, auditors, and regulators.",
      "Supervise accounting staff and build team capacity."
    ],
    requirements: [
      "Bachelor’s degree in Accounting, Finance or related field.",
      "Professional certification such as ICAN or ACCA is mandatory.",
      "Minimum of 8–12 years’ experience in accounting or financial management.",
      "At least 4 years experience in an Asset Management Company.",
      "Experience in financial services is mandatory."
    ],
    apply: 'Interested and qualified candidates should send their CVs to: <a href="mailto:beacongatejobportal@gmail.com">beacongatejobportal@gmail.com</a> using the Job title as subject.',
    salary: "900,000 - 1,100,000",
    deadline: "Not Specified"
  },
  {
    id: "Entry-Level Business Development Officer - Ikeja Amuwo - HRLeverage",
    title: "Entry-Level Business Development Officer",
    date: "2026-04-24",
    location: "Ikeja & Amuwo Odofin, Lagos",
    type: "Full-time",
    summary: "Motivated and enthusiastic individual looking to start a career in sales and business development within the Freight & Forwarding industry.",
    responsibilities: [
      "Identify and develop new business opportunities within the logistics and freight forwarding market.",
      "Generate new clients through cold calling, networking and field visits.",
      "Build and maintain strong relationships with prospective and existing clients.",
      "Promote the company’s freight forwarding services to potential customers.",
      "Support in preparing proposals and closing sales deals.",
      "Provide regular reports on sales activities and market feedback."
    ],
    requirements: [
      "Minimum of OND/HND/BSc in Social Sciences.",
      "No prior experience required (training will be provided).",
      "Strong communication and interpersonal skills.",
      "Willingness to learn and grow in a sales-driven environment.",
      "Computer literacy."
    ],
    apply: 'Interested candidates should send CV to: <a href="mailto:resume@hrleverageafrica.com">resume@hrleverageafrica.com</a> using the job title as subject of the mail.',
    salary: "100,000 NGN monthly + commission",
    deadline: "Not Specified"
  },
  {
    id: "administrator-people-culture-vi-lagos",
    title: "Administrator, People & Culture (HR Operations)",
    date: "2026-04-25",
    location: "VI, Lagos",
    type: "Full-time",
    summary: "Support the People & Culture team with administrative tasks, record management, and onboarding/exit processes.",
    responsibilities: [
      "Manage employee records, documentation, and filing systems.",
      "Handle onboarding and exit processes.",
      "Support payroll administration with accurate data updates.",
      "Respond to HR queries within agreed timelines.",
      "Ensure compliance with company policies and regulations.",
      "Provide general administrative support to the HR team."
    ],
    requirements: [
      "B.Sc (Minimum of Second-Class Lower).",
      "2 years experience in HR/Admin or related role.",
      "Strong organizational and communication skills.",
      "Proficiency in Microsoft Office.",
      "Age: 27 years and below."
    ],
    apply: 'Interested candidates should send CVs to: <a href="mailto:lekkisupport@icsoutsourcing">lekkisupport@icsoutsourcing</a>',
    salary: "#180,000 plus benefits",
    deadline: "Not Specified"
  },
  {
    id: "wealth-advisor-senior-level-ikoyi",
    title: "Wealth Advisor (Senior Level)",
    date: "2026-04-25",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Senior role for experienced advisors to strengthen the advisory team and drive growth across high-net-worth and institutional portfolios.",
    responsibilities: [
      "Provide personalized investment advisory services to HNI and institutional clients.",
      "Develop and implement tailored portfolio strategies aligned with client risk profiles.",
      "Drive client acquisition and grow assets under management.",
      "Maintain and deepen existing client relationships through regular reviews.",
      "Stay abreast of financial market trends and provide informed recommendations.",
      "Collaborate with internal teams to deliver optimal investment solutions."
    ],
    requirements: [
      "8–10 years’ proven experience in wealth management or private banking.",
      "Strong track record in client acquisition and portfolio growth.",
      "Solid knowledge of financial markets and asset allocation.",
      "Bachelor’s degree in Finance, Economics, or related field."
    ],
    apply: 'Qualified candidates should submit their updated CV to: <a href="mailto:ifeoluwa.recruit1@gmail.com">ifeoluwa.recruit1@gmail.com</a> using the job title as subject.',
    salary: "₦1,300,000 – ₦1,500,000 (Gross) + 13th month",
    deadline: "Not Specified"
  },
  {
    id: "wealth-advisor-mid-level-ikoyi",
    title: "Wealth Advisor (Mid-Level)",
    date: "2026-04-25",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Mid-Level",
    summary: "Mid-level role to provide personalized investment advisory services and support business development initiatives.",
    responsibilities: [
      "Provide personalized investment advisory services to HNI and institutional clients.",
      "Develop and implement tailored portfolio strategies.",
      "Drive client acquisition and growth.",
      "Maintain and deepen existing client relationships.",
      "Provide informed recommendations based on market trends.",
      "Collaborate with internal teams."
    ],
    requirements: [
      "3–5 years’ experience in wealth management, private banking, or investment advisory.",
      "Solid knowledge of financial markets and asset allocation.",
      "Excellent client relationship management and communication skills.",
      "Bachelor’s degree in Finance, Economics, or related field."
    ],
    apply: 'Qualified candidates should submit their updated CV to: <a href="mailto:ifeoluwa.recruit1@gmail.com">ifeoluwa.recruit1@gmail.com</a> using the job title as subject.',
    salary: "₦771,000 – ₦1,000,000 (Gross) + 13th month",
    deadline: "Not Specified"
  },
  {
    id: "credit-rehabilitation-officer-vi-lagos",
    title: "Credit Rehabilitation Officer (Collections)",
    date: "2026-04-25",
    location: "VI, Lagos",
    type: "Full-time",
    summary: "Manage delinquent accounts and drive loan recovery efforts for a reputable organization in the banking industry.",
    responsibilities: [
      "Follow up on delinquent, NPL, and written-off accounts.",
      "Engage customers to regularize outstanding payments.",
      "Implement recovery strategies to improve collection rates.",
      "Ensure accurate system updates and compliance with policies."
    ],
    requirements: [
      "2 years’ experience in collections/credit risk.",
      "Bachelor’s degree in Finance, Business Administration, or related field.",
      "Strong negotiation and communication skills.",
      "Ability to meet recovery targets."
    ],
    apply: 'Interested candidates should apply via the link: <a href="https://forms.gle/zREvhbm3iYnbQwEz8">Apply Online</a>',
    salary: "#180,000",
    deadline: "Not Specified"
  },
  {
    id: "hr-generalist-agbara-ogun-qpnlnig",
    title: "HR Generalist",
    date: "2026-04-25",
    location: "Agbara, Ogun",
    type: "Full-time",
    summary: "Support various HR functions including recruitment, policy formulation, and data analysis in a manufacturing environment.",
    responsibilities: [
      "Handle recruitment, onboarding, and confirmation.",
      "Formulate and update HR policies.",
      "Perform HR data analysis and reporting.",
      "Manage exit processes and documentation.",
      "Draft and implement the HR training calendar.",
      "Support the team during internal and external audits."
    ],
    requirements: [
      "Bachelor’s degree in HR, Business Administration, or related field.",
      "3–5 years relevant experience in a similar HR role.",
      "Professional HR certification (CIPM, SHRM, SPHRi) is preferred.",
      "Strong knowledge of Nigerian labor laws.",
      "Proficiency in HRIS and Microsoft Office tools."
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:hradmin1@qpnlnig.com">hradmin1@qpnlnig.com</a> with the subject line ‘’HR Generalist’’',
    salary: "#300k - #350k p/m",
    deadline: "Not Specified"
  },
  {
    id: "hr-generalist-agbara-ogun-manufacturing",
    title: "HR Generalist (Manufacturing)",
    date: "2026-04-25",
    location: "Agbara, Ogun",
    type: "Full-time",
    summary: "Manage core HR functions in a manufacturing setup, including policy formulation and training management.",
    responsibilities: [
      "Recruitment, onboarding and confirmation.",
      "Policy formulation and HR Data analysis.",
      "Exit management and training plan execution.",
      "Prepare for internal and external audits."
    ],
    requirements: [
      "Bachelor’s degree in HR or related field.",
      "3–5 years experience in a similar HR role.",
      "Professional certification (CIPM/SHRM) preferred.",
      "Knowledge of Nigerian labor laws."
    ],
    apply: 'Send CV to: <a href="mailto:hradmin1@qpnlnig.com">hradmin1@qpnlnig.com</a>',
    salary: "#300k - #350k p/m",
    deadline: "Not Specified"
  },
  {
    id: "business-development-executive-real-estate-lekki",
    title: "Business Development Executive (Real Estate)",
    date: "2026-04-25",
    location: "Lekki Phase 1, Lagos (Onsite)",
    type: "Full-time",
    summary: "Support the end-to-end process of bringing real estate products to market, with a strong focus on sales performance and market positioning.",
    responsibilities: [
      "Identify, engage, and convert potential clients.",
      "Support go-to-market strategies and product positioning.",
      "Conduct market research and competitor analysis.",
      "Develop compelling sales pitches and materials.",
      "Collaborate with sales and marketing teams.",
      "Track sales performance and optimize strategies.",
      "Participate in client meetings, tours, and launches."
    ],
    requirements: [
      "HND or BSc in a relevant field.",
      "Minimum of 5 years’ experience in real estate or high-ticket sales.",
      "Experience engaging high-net-worth individuals (HNI) is a plus.",
      "Strong communication and presentation skills.",
      "Results-driven with strong analytical ability."
    ],
    apply: 'Interested candidates can apply here: <a href="https://forms.gle/gn2C1fwwW4HpRKrt7">Apply Online</a>',
    salary: "₦500,000 – ₦600,000 monthly",
    deadline: "Not Specified"
  },
  {
    id: "driver-lekki-phase-1-urgent",
    title: "Driver",
    date: "2026-04-25",
    location: "Lekki Phase 1, Lagos",
    type: "Full-time",
    summary: "Urgent vacancy for a reliable and experienced Driver to provide transportation services.",
    responsibilities: [
      "Operate vehicle safely and reliably.",
      "Ensure vehicle is clean and well-maintained.",
      "Follow road safety rules and traffic regulations.",
      "Punctual attendance to assignments."
    ],
    requirements: [
      "Valid driver’s license.",
      "Good knowledge of road safety rules.",
      "Punctual and trustworthy.",
      "Previous driving experience is an advantage (especially school environment)."
    ],
    apply: 'To apply, call/WhatsApp: <a href="tel:09164553495">0916 455 3495</a>',
    salary: "120,000 Net",
    deadline: "Not Specified"
  },
  {
    id: "subject-teachers-admin-staff-ogba-lagos",
    title: "Subject teachers and Admin. Staff",
    date: "2026-04-25",
    location: "Ogba-Lagos",
    type: "Full-time",
    summary: "Recruiting for a reputable school in Ogba-Lagos for teaching (CRS, ICT/Robotics) and admin roles (Chef, Drivers, Hygiene Officers).",
    responsibilities: [
      "Deliver quality instruction in assigned subjects (CRS, ICT/Robotics).",
      "Support administrative functions in roles such as kitchen (Chef) or logistics (Drivers).",
      "Maintain high standards of hygiene (Hygiene Officers).",
      "Collaborate with school management for smooth operations."
    ],
    requirements: [
      "Qualified in relevant subject area.",
      "Proximity to Ogba-Lagos is important (no accommodation).",
      "Reliable and committed to student growth."
    ],
    apply: 'Kindly send your CV to these WhatsApp numbers: <a href="https://wa.me/2347030963344">0703 096 3344</a> or <a href="https://wa.me/2348023134347">08023134347</a>.',
    salary: "Competitive",
    deadline: "Not Specified"
  },
  {
    id: "operations-supervisor-ibadan-osedom",
    title: "Operations Supervisor",
    date: "2026-04-25",
    location: "IBADAN",
    type: "Full-time (On-site)",
    summary: "Manage the entire order cycle, enhancing business development and ensuring sustainability and customer satisfaction through supply chain management.",
    responsibilities: [
      "Strategically plan and manage logistics, transportation, and customer services.",
      "Liaise and negotiate with customers and suppliers.",
      "Keep track of quality, quantity, delivery times, transport costs, and efficiency.",
      "Resolve any arising problems or complaints.",
      "Meet cost, productivity, accuracy, and timeliness targets.",
      "Comply with industry laws and regulations.",
      "Source vehicles and negotiate with drivers for best prices.",
      "Prepare invoices for orders and deliveries as record-keeping."
    ],
    requirements: [
      "HND/BSc in any field.",
      "Excellent time management and organization skills.",
      "Strong knowledge of logistics management.",
      "Good communication and human relations skills.",
      "Multitasking skills and attention to detail.",
      "Proficiency in Microsoft Office (Word and Excel)."
    ],
    apply: 'Interested candidates should send their CV with the job title "Operation Supervisor (IBADAN)" to: <a href="mailto:enquiries@osedomglobal.com">enquiries@osedomglobal.com</a>',
    salary: "80,000 starting",
    deadline: "Not Specified"
  },
  {
    id: "Account Officer - Karu Abuja - Globeeasy",
    title: "Account Officer",
    date: "2026-04-24",
    location: "Karu, Abuja (FCT)",
    type: "Full-time",
    summary: "Responsible for managing financial records, tracking transactions, and supporting the company’s day-to-day accounting operations.",
    responsibilities: [
      "Record daily income and expenses.",
      "Manage invoices, payments, and receipts.",
      "Reconcile bank statements.",
      "Prepare simple financial reports.",
      "Track outstanding payments and follow up.",
      "Maintain accurate financial records.",
      "Ensure compliance with basic accounting standards."
    ],
    requirements: [
      "HND/B.Sc. in Accounting or related field.",
      "1–2 years experience.",
      "Basic Excel and accounting knowledge.",
      "Detail-oriented and trustworthy."
    ],
    apply: 'Send CV to: <a href="mailto:globeeasyhr@gmail.com">globeeasyhr@gmail.com</a> using "Account Officer – Karu Abuja" as the subject.',
    salary: "₦130,000 – ₦150,000",
    deadline: "1st May 2026"
  },
  {
    id: "Senior Associate Partnership Coverage - Lekki - Starks",
    title: "Senior Associate, Partnership & Coverage",
    date: "2026-04-24",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Mid-Senior",
    summary: "Mid-senior revenue-generating role responsible for driving client acquisition, managing a strong client portfolio, and supporting strategic partnerships across key markets.",
    responsibilities: [
      "Drive client acquisition and maintain a strong pipeline of qualified prospects.",
      "Own and grow a personal client portfolio, generating transaction volume and revenue.",
      "Lead end-to-end deal execution from sourcing to contract closure.",
      "Generate revenue from fees and FX spreads across new and existing clients.",
      "Identify and close strategic partnerships and maintain partner relationships.",
      "Expand coverage across key markets and support new market entry.",
      "Maintain accurate CRM records and track pipeline performance, conversion, and retention.",
      "Mentor Junior Associates and support team pipeline reviews.",
      "Ensure compliance with KYC/AML requirements and internal policies.",
      "Prepare proposals, term sheets, and client presentations."
    ],
    requirements: [
      "3–5 years’ experience in treasury sales, FX, trade finance, or financial services business development.",
      "Proven track record of meeting or exceeding revenue or client acquisition targets.",
      "Strong knowledge of FX markets, cross-border payments, and trade finance instruments.",
      "Experience managing client relationships and executing deals independently.",
      "Strong analytical, negotiation, and communication skills.",
      "Ability to thrive in a fast-paced, target-driven environment."
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:hr@starksassociate.com">hr@starksassociate.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Customer Service Manager - Lagos - Nairabet",
    title: "Customer Service Manager",
    date: "2026-04-24",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Exceptional Customer Support Manager to own the support function end-to-end, stabilize service delivery, and build a measurable, scalable structure.",
    responsibilities: [
      "Own the Customer Support function across all active channels (shifts, queues, escalation paths).",
      "Define support structure and clarify role responsibilities (agents, supervisors, QA).",
      "Own and improve KPIs: response time, resolution time, backlog ageing, and SLA attainment.",
      "Build daily, weekly, and monthly service reporting.",
      "Identify recurring pain points and drive root-cause fixes into Product/Marketing.",
      "Manage, coach, and performance-manage frontline support resources.",
      "Improve team structure, shift coverage, manager visibility, and accountability.",
      "Work with QA to improve quality, scripting, SOP adherence, and macros."
    ],
    requirements: [
      "Minimum of 6 to 8 years working experience.",
      "Explicit experience in the gaming/betting industry is mandatory.",
      "Experience leading frontline support in gaming, fintech, telco, or e-commerce.",
      "Strong reporting mindset and ability to translate data into action.",
      "Extreme ownership and ability to drive standards."
    ],
    apply: 'Interested Candidates should send their CV to: <a href="mailto:hr@nairabet.com">hr@nairabet.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Vice President Partnership Coverage - Lekki - Starks",
    title: "Vice President, Partnership & Coverage",
    date: "2026-04-24",
    location: "Lekki, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Senior revenue-generating leadership role responsible for driving client acquisition, strategic partnerships, and market expansion across key target markets.",
    responsibilities: [
      "Drive client acquisition and manage a strong pipeline of qualified prospects.",
      "Lead end-to-end deal execution from sourcing to contract closure.",
      "Generate significant transaction volume and revenue from client relationships.",
      "Source and close strategic partnerships across key sectors.",
      "Expand into new markets and strengthen presence in existing ones.",
      "Lead, mentor, and manage a high-performing team of Associates and Analysts.",
      "Monitor pipeline performance, client retention, and conversion rates.",
      "Ensure compliance with regulatory requirements and internal policies."
    ],
    requirements: [
      "6–8 years’ experience in treasury sales, corporate finance, trade finance, or financial services business development.",
      "Proven track record of closing high-value deals and exceeding targets.",
      "Strong knowledge of FX markets, cross-border payments, and trade finance.",
      "Experience managing senior client relationships and leading teams.",
      "Strong analytical, negotiation, and communication skills."
    ],
    apply: 'Interested candidates should send their CV to: <a href="mailto:hr@starksassociate.com">hr@starksassociate.com</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Cable Production Technician - Ibeju Lekki - Cynosure",
    title: "Cable Production Technician (3 Positions)",
    date: "2026-04-24",
    location: "Lekki Free Trade Zone, Ibeju Lekki",
    type: "Full-time",
    summary: "Experienced technicians to work on the production line manufacturing high-quality data cables from copper wires.",
    responsibilities: [
      "Operate and monitor cable production machinery.",
      "Handle equipment such as copper drawing machines, insulation extrusion machines, and twisting machines.",
      "Ensure efficient and safe production processes.",
      "Maintain quality standards throughout the production cycle.",
      "Collaborate with the production team to meet output targets."
    ],
    requirements: [
      "Minimum of 3–4 years’ experience in cable production.",
      "Hands-on experience with copper drawing, extrusion, and twisting machines.",
      "Strong understanding of cable manufacturing processes.",
      "Ability to work in a fast-paced production environment.",
      "Experience in cabling manufacturing companies preferred."
    ],
    apply: 'Interested candidates should submit their CV to: <a href="mailto:hr@cynosureng.com">hr@cynosureng.com</a>',
    salary: "180,000 to 300,000 depending on experience",
    deadline: "Not Specified"
  },
  {
    id: "Bid Commercial Analyst - Ikeja - Kevron",
    title: "Bid / Commercial Analyst",
    date: "2026-04-24",
    location: "Ikeja, Lagos",
    type: "Full-time",
    summary: "Analyst for the QHSSE Consultancy sector to support tender reviews, develop cost estimates, and prepare strong commercial proposals.",
    responsibilities: [
      "Identify, review, and evaluate RFPs, RFQs, ITTs, and other tender opportunities.",
      "Interpret client requirements for consultancy, training, audits, and inspections.",
      "Coordinate bid timelines, documentation, and submission processes.",
      "Develop detailed cost estimates and pricing models (labour, logistics, equipment).",
      "Benchmark pricing against market trends and competitors.",
      "Liaise with Operations, Finance, and QHSSE teams for bid input.",
      "Track tender outcomes and analyze win/loss trends."
    ],
    requirements: [
      "First degree in Quantity Surveying.",
      "Experience in developing pricing models and conducting cost analysis.",
      "Strong coordination and document management skills.",
      "Ability to interpret complex technical scope of work."
    ],
    apply: 'Interested candidates should send a well detailed resume to: <a href="mailto:recruitment@kevronggroup.com">recruitment@kevronggroup.com</a> using "Bid/ Commercial Analyst" as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Process Engineer EPCI - Port Harcourt - Felton",
    title: "Process Engineer (EPCI)",
    date: "2026-04-24",
    location: "Trans Amadi, Port Harcourt",
    type: "Full-time",
    summary: "Provide process engineering support across EPCI oil & gas projects, from design through construction and commissioning.",
    responsibilities: [
      "Develop and review process deliverables (PFDs, P&IDs, H&MB, process calculations).",
      "Support EPCI phases including engineering, procurement, construction, and commissioning.",
      "Prepare technical datasheets and support vendor/OEM technical evaluations.",
      "Participate in HAZID, HAZOP, and other safety studies.",
      "Provide site and commissioning support as required.",
      "Collaborate with multidisciplinary engineering and construction teams."
    ],
    requirements: [
      "Bachelor’s degree in Chemical Engineering or related field.",
      "2–4 years experience as a Process Engineer on EPCI oil & gas projects.",
      "Good knowledge of process design standards and industry codes.",
      "Experience with process simulation tools (HYSYS, Aspen, etc.) is an advantage."
    ],
    apply: 'Send CV to: <a href="mailto:wendy@feltonenergy.net">wendy@feltonenergy.net</a> using "Process Engineer – EPCI" as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Geography Graduate GIS Specialist - Abuja",
    title: "Geography Graduate (GIS Specialist)",
    date: "2026-04-24",
    location: "Abuja",
    type: "Full-time",
    summary: "Qualified Geography graduate to join the organization for map creation, spatial analysis, and remote sensing work.",
    responsibilities: [
      "Perform spatial analysis and map creation.",
      "Use GIS software such as ArcGIS or QGIS.",
      "Work with satellite imagery (remote sensing).",
      "Conduct GPS data collection."
    ],
    requirements: [
      "Degree in Geography or related field.",
      "Experience with GIS software (ArcGIS/QGIS).",
      "Expertise in spatial analysis and remote sensing.",
      "Experience with GPS data collection tools."
    ],
    apply: 'Contact <a href="tel:08139226564">08139226564</a> for more details and to apply.',
    salary: "300,000",
    deadline: "Not Specified"
  },
  {
    id: "Admin Officer - Lington & Bernie - Lagos",
    title: "Admin Officer",
    date: "2026-04-24",
    location: "Lagos",
    type: "Full-time",
    summary: "Lead and optimize administrative operations for Lington & Bernie Consulting Limited to ensure efficient office management.",
    responsibilities: [
      "Manage and coordinate daily office operations.",
      "Lead administrative tasks and ensure organizational efficiency.",
      "Multitask across various office management functions.",
      "Maintain strong interpersonal communication within the office."
    ],
    requirements: [
      "Bachelor’s Degree in Business Administration, Management, or related fields.",
      "Proven experience in administrative management or a similar role.",
      "Strong leadership and organizational skills.",
      "Ability to multitask effectively."
    ],
    apply: 'Send CV to: <a href="mailto:recruitement@lingtonjobs.com">recruitement@lingtonjobs.com</a> using the job title as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Call Center Agents - Ikeja - Adverzo",
    title: "Call Center Agents",
    date: "2026-04-24",
    location: "Ikeja, Lagos",
    type: "Full-time",
    summary: "Customer support role working on Pacific Standard Timing (USA) with free accommodation available and performance-based incentives.",
    responsibilities: [
      "Manage customer calls and inquiries during US business hours (PST).",
      "Maintain clear and effective communication with clients.",
      "Utilize performance-based strategies to earn incentives."
    ],
    requirements: [
      "Qualification: OND, HND or BSC.",
      "MUST HAVE CLEAR and Neutral Accent.",
      "Ability to work on Pacific Standard Timing (USA).",
      "No age or gender restrictions."
    ],
    apply: 'Apply online at: <a href="https://Adverzo.com/l/sbapr16">Adverzo.com/l/sbapr16</a>',
    salary: "N200k/Month",
    deadline: "Not Specified"
  },
  {
    id: "Warehouse Supervisor - Agbara - AJE",
    title: "Warehouse Supervisor (FMCG – Food & Beverages)",
    date: "2026-04-20",
    location: "Agbara Industrial Area, Ogun State",
    type: "Full-time",
    summary: "A results-driven Warehouse Supervisor with strong expertise in warehouse operations and data analysis/reporting within the Food & Beverage (FMCG) industry.",
    responsibilities: [
      "Supervise end-to-end warehouse operations (inbound, storage, outbound/dispatch).",
      "Ensure accurate inventory management and stock reconciliation.",
      "Lead data analysis and reporting on warehouse performance.",
      "Generate and interpret reports on stock movement, inventory accuracy, wastage, and efficiency.",
      "Utilize Excel (advanced level) and ERP systems for reporting.",
      "Drive process improvements using data insights.",
      "Ensure compliance with FIFO/FEFO and food safety standards.",
      "Coordinate with production, supply chain, and procurement teams."
    ],
    requirements: [
      "Minimum of 5 years’ experience in warehouse operations within Food & Beverage / FMCG.",
      "Strong hands-on experience in inbound and outbound warehouse processes.",
      "High proficiency in Excel (data analysis, reporting, dashboards).",
      "Experience with ERP systems and warehouse reporting tools.",
      "Strong analytical mindset with ability to translate data into actionable insights.",
      "Residing within or close to Agbara Industrial Area is an added advantage."
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:Hr.ng@ajegroup.com">Hr.ng@ajegroup.com</a> using "Warehouse Supervisor – Agbara" as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Production Shift Engineer - Agbara - AJE",
    title: "Production Shift Engineer",
    date: "2026-04-20",
    location: "Agbara Industrial Area, Ogun State",
    type: "Full-time (Shift-based)",
    summary: "Highly skilled and hands-on Production Shift Engineer with strong experience in beverage manufacturing lines to drive operational excellence.",
    responsibilities: [
      "Lead and manage production shift operations to meet output, quality, and efficiency targets.",
      "Operate and troubleshoot high-speed beverage production and packaging lines.",
      "Ensure optimal performance of machines including Krones, KHS, SIPA, and SACMI systems.",
      "Drive machine efficiency, downtime reduction, and waste control.",
      "Implement preventive and corrective maintenance coordination.",
      "Analyze production data and generate shift reports.",
      "Lead, coach, and supervise production operators and technicians."
    ],
    requirements: [
      "Degree or HND in Mechanical, Electrical, or Industrial Engineering.",
      "Minimum of 5–8 years’ experience in Food & Beverage manufacturing (FMCG).",
      "Strong hands-on experience with Krones, KHS, SIPA, SACMI equipment.",
      "Proven ability to troubleshoot and optimize production lines.",
      "Good knowledge of TPM, OEE, and continuous improvement tools.",
      "Experience in PET lines, bottling, or carbonated drink production is an advantage."
    ],
    apply: 'Interested and qualified candidates should send their CV to: <a href="mailto:Hr.ng@ajegroup.com">Hr.ng@ajegroup.com</a> using "Production Shift Engineer – Agbara" as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "IT Sales Account Managers - Alausa",
    title: "IT Sales Account Managers",
    date: "2026-04-20",
    location: "Alausa Ikeja, Lagos State",
    type: "Full-time",
    summary: "Responsible for driving revenue growth by managing client relationships, identifying new business opportunities, and delivering tailored IT solutions.",
    responsibilities: [
      "Drive revenue growth through client relationship management.",
      "Identify new business opportunities in the IT sector.",
      "Deliver tailored IT solutions to meet client needs.",
      "Manage and exceed assigned sales targets."
    ],
    requirements: [
      "Minimum of 4 years’ experience in IT sales (solutions & products).",
      "Proven ability to meet or exceed sales targets.",
      "Strong client relationship and account management skills.",
      "Good understanding of enterprise IT solutions and services.",
      "Excellent communication, negotiation, and presentation skills."
    ],
    apply: 'Interested candidates should apply via this link: <a href="https://lnkd.in/efhqXDmS">Apply Online</a>',
    salary: "₦500,000 – ₦800,000 monthly",
    deadline: "Not Specified"
  },
  {
    id: "Performance Management Specialist - Ikeja",
    title: "Performance Management Specialist",
    date: "2026-04-20",
    location: "Ikeja, Lagos",
    type: "Full-time",
    summary: "Responsible for driving organizational effectiveness through the design, implementation, and continuous improvement of performance management frameworks.",
    responsibilities: [
      "Review, update, and standardize Job Descriptions (JDs) across the organization.",
      "Design and implement SMART KPIs for all roles and functions.",
      "Track and analyze performance against established goals.",
      "Develop dashboards and reports for leadership insights.",
      "Drive the end-to-end performance management cycle (goal setting, appraisals).",
      "Partner with business leaders to embed a high-performance culture."
    ],
    requirements: [
      "Bachelor’s degree in Human Resources, Business Administration, or related field.",
      "4–7 years’ experience in Performance Management, HR Analytics, or Organizational Development.",
      "Strong experience in KPI design, performance tracking, and reporting.",
      "Proficiency in HR systems and data analytics tools (e.g., Excel, Power BI)."
    ],
    apply: 'Qualified candidates should send their resume to: <a href="mailto:talentforhire94@gmail.com">talentforhire94@gmail.com</a> using the job title as the subject.',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Administrative Manager - Badore Lekki",
    title: "Administrative Manager",
    date: "2026-04-20",
    location: "Badore & Lekki, Lagos",
    type: "Full-time",
    summary: "Lead and optimize administrative operations across multiple locations to ensure seamless, cost-effective, and high-standard office environments.",
    responsibilities: [
      "Oversee day-to-day administrative operations across offices.",
      "Manage vendors, procurement, and contract negotiations.",
      "Handle budgeting, petty cash, and financial reconciliations.",
      "Supervise drivers, cleaners, gardeners, and maintenance teams.",
      "Manage office fleet operations and utility optimization.",
      "Coordinate facility maintenance and logistics for events/meetings."
    ],
    requirements: [
      "5–7 years’ experience in administrative or office management.",
      "Strong skills in vendor management, procurement, and negotiation.",
      "Solid experience with budgeting, expense tracking, and reconciliation.",
      "Excellent communication and problem-solving abilities.",
      "Familiarity with fleet and facility management is a strong advantage."
    ],
    apply: 'Submit your CV here: <a href="https://tinyurl.com/FWC-Job-Application-Form">Online Application Form</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Group Accountant - Abuja - Hospitality",
    title: "Group Accountant",
    date: "2026-04-20",
    location: "Abuja (FCT)",
    type: "Full-time",
    summary: "Oversee financial reporting, consolidation, and analysis for a foremost player in hospitality management.",
    responsibilities: [
      "Prepare and consolidate financial statements for the group.",
      "Manage group budgeting and forecasting.",
      "Ensure compliance with IFRS and local accounting standards.",
      "Support audit processes and strengthen internal controls.",
      "Provide leadership for business units on financial matters."
    ],
    requirements: [
      "Professional accounting qualification (ICAN, ANAN, ACCA, or equivalent).",
      "Degree in Accounting/Finance.",
      "10-15 years experience in accounting and financial reporting.",
      "Age between 35 – 45 years old.",
      "Detail-oriented, analytical, and able to work under pressure."
    ],
    apply: 'Interested candidates who are ready to resume IMMEDIATELY should send CV to: <a href="mailto:hr@grandbezerng.com">hr@grandbezerng.com</a> using the job role as subject.',
    salary: "Competitive + benefits",
    deadline: "Not Specified"
  },
  {
    id: "Field Supervisor - LaborHack - Lagos",
    title: "Field Supervisor",
    date: "2026-04-20",
    location: "Lagos",
    type: "Contract (2 Weeks)",
    summary: "Manage a team of 10 Enumerators across 4 LGAs, ensuring high-quality data collection and achievement of daily performance targets.",
    responsibilities: [
      "Manage a team of 10 Enumerators.",
      "Ensure high-quality data collection and strict adherence to protocols.",
      "Achieve daily performance targets across 4 LGAs.",
      "Validate data and maintain field quality control."
    ],
    requirements: [
      "Minimum of 2 years’ experience supervising field teams (survey, census, etc.).",
      "Hands-on experience with data validation.",
      "Minimum of HND or Bachelor’s Degree."
    ],
    apply: 'Click to Apply: <a href="https://www.laborhack.com/jobs/69e0f4259ebbe155ffc1d31d">Apply Online</a>',
    salary: "₦20,000 per day (net)",
    deadline: "Not Specified"
  },
  {
    id: "Field Enumerator - LaborHack - Lagos",
    title: "Field Enumerator",
    date: "2026-04-20",
    location: "Lagos",
    type: "Contract (2 Weeks)",
    summary: "Conduct household visits within assigned LGAs to administer survey questionnaires.",
    responsibilities: [
      "Conduct household visits within assigned LGA.",
      "Administer survey questionnaires using a smartphone.",
      "Complete a minimum of 50 valid interviews daily."
    ],
    requirements: [
      "No prior experience needed.",
      "Residence and familiarity with assigned LGA in Lagos State.",
      "Functional Android smartphone with internet access."
    ],
    apply: 'Click to Apply: <a href="https://www.laborhack.com/jobs/69e0f0d79ebbe155ffc1d24f">Apply Online</a>',
    salary: "₦12,000 per day (net)",
    deadline: "Not Specified"
  },
  {
    id: "Project Manager (Electrical) - HVAC - Ikeja",
    title: "Project Manager (Electrical)",
    date: "2026-04-20",
    location: "Ikeja, Lagos",
    type: "Full-time",
    summary: "Oversee the planning, execution, and delivery of electrical aspects of HVAC projects.",
    responsibilities: [
      "Lead and manage electrical components of HVAC projects.",
      "Develop project plans, schedules, and resource allocation.",
      "Supervise installation of electrical panels, wiring, and automation systems.",
      "Ensure compliance with local electrical codes and safety standards.",
      "Manage subcontractors and vendors for materials.",
      "Troubleshoot technical issues and ensure proper documentation/commissioning."
    ],
    requirements: [
      "Bachelor’s degree in Electrical Engineering or related field.",
      "Minimum of 3–5 years’ experience in electrical project management.",
      "Strong knowledge of electrical systems and automation in HVAC.",
      "Familiarity with project management tools like MS Project.",
      "Excellent leadership and negotiation skills."
    ],
    apply: 'Apply through the link: <a href="https://forms.gle/NRQCLvbPNXbnKnUBA">Online Form</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Field Sales Representatives - Lagos - HC",
    title: "Field Sales Representatives",
    date: "2026-04-20",
    location: "Lagos",
    type: "Full-time",
    summary: "Looking for smart, goal-driven Reps to identify and approach potential customers to promote logistics services.",
    responsibilities: [
      "Identify and approach potential customers.",
      "Meet or exceed assigned sales targets.",
      "Prepare and submit regular sales reports.",
      "Represent the company professionally."
    ],
    requirements: [
      "Minimum of OND/HND/BSC in Marketing or Sales.",
      "At least 2 years experience in marketing/sales.",
      "Good communication and negotiation skills.",
      "Willingness to do field work and market visits."
    ],
    apply: 'Send your CV and WhatsApp us: <a href="https://wa.me/2347072740387">+2347072740387</a>',
    salary: "N150k basic salary",
    deadline: "Not Specified"
  },
  {
    id: "Store Clerk - Golden Penny Foods - Nigeria",
    title: "Store Clerk",
    date: "2026-04-20",
    location: "Nigeria",
    type: "Full-time",
    summary: "Manage inventory and storekeeping duties for Golden Penny Foods.",
    responsibilities: [
      "Maintain accurate records of store inventory.",
      "Receive and issue materials in the warehouse.",
      "Ensure proper storage and organization of items.",
      "Participate in stock-taking exercises."
    ],
    requirements: [
      "Strictly OND qualification in a related field.",
      "5 O’ level Credits including English & Mathematics.",
      "Minimum of 2 years relevant experience in storekeeping.",
      "Experience in FMCG or manufacturing is an advantage."
    ],
    apply: 'Apply here: <a href="https://fmnplc.e-recruiter.ng/vacancy/details/12524">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Warehouse Officer - Ogun - Recycling",
    title: "Warehouse Officer",
    date: "2026-04-20",
    location: "Ogun",
    type: "Full-time",
    summary: "Responsible for the efficient coordination, storage, and movement of raw materials (aluminum, copper scrap, dross) and finished goods.",
    responsibilities: [
      "Receive, inspect, and verify incoming scrap materials and consumables.",
      "Maintain real-time inventory records for metals and furnace additives.",
      "Conduct periodic cycle counts and monthly stock reconciliations.",
      "Tag, label, and store materials according to traceability requirements."
    ],
    requirements: [
      "HND / B.Sc Degree in Supply Chain, Logistics, or related fields.",
      "2 – 5 years experience in warehouse operations (manufacturing/recycling preferred).",
      "Knowledge of scrap material handling (aluminum, copper).",
      "Proficiency in inventory management software.",
      "Knowledge of HSE standards."
    ],
    apply: 'Send updated CV to: <a href="mailto:careers@neveah.com.ng">careers@neveah.com.ng</a> using the Job Title as subject.',
    salary: "Not Specified",
    deadline: "20th April, 2026"
  },
  {
    id: "Personal Assistant to the MD - VI",
    title: "Personal Assistant to the MD",
    date: "2026-04-20",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    summary: "We are seeking a highly organized and proactive Personal Assistant to support our Managing Director.",
    responsibilities: [
      "Manage calendars, appointments, and travel arrangements.",
      "Prepare and edit correspondence, reports, and presentations.",
      "Coordinate meetings and events.",
      "Maintain confidential documents.",
      "Liaise with stakeholders and clients.",
      "Provide administrative support on special projects."
    ],
    requirements: [
      "Bachelor’s degree.",
      "Minimum of five (5) years experience working with executives.",
      "Smart, proactive, eloquent with poise.",
      "Proficient with Microsoft Office and task management tools.",
      "Ability to maintain high level of confidentiality."
    ],
    apply: 'Submit CV to: <a href="mailto:hephzibahcareers1@gmail.com">hephzibahcareers1@gmail.com</a> using the job title as subject.',
    salary: "350,000 – 500,000 (Net)",
    deadline: "Not Specified"
  },
  {
    id: "Project Manager / Engineering Lead - VI",
    title: "Project Manager / Engineering Lead",
    date: "2026-04-20",
    location: "Victoria Island, Lagos",
    type: "Full-time",
    summary: "Responsible for successful planning, execution, and delivery of complex electrical and instrumentation projects.",
    responsibilities: [
      "Lead planning, scheduling, and execution of E&I projects.",
      "Develop project plans, budgets, and resource strategies.",
      "Review designs, drawings, and technical documentation.",
      "Serve as primary contact for clients and consultants.",
      "Identify project risks and implement mitigation plans.",
      "Track expenditures and manage budgets."
    ],
    requirements: [
      "Bachelor’s or Master’s Degree in Electrical or Instrumentation Engineering.",
      "10–15 years experience managing E&I projects (Oil & Gas/Industrial).",
      "PMP certification is a strong advantage.",
      "Expertise in E&I systems design, installation, and commissioning."
    ],
    apply: 'Send CV to: <a href="mailto:liclrecruitment@gmail.com">liclrecruitment@gmail.com</a> using the job title as subject.',
    salary: "N1,500,000 monthly",
    deadline: "8th May, 2026"
  },
  {
    id: "Integrated Solutions Well Engineer - PH",
    title: "Integrated Solutions Well Engineer",
    date: "2026-04-20",
    location: "Port Harcourt, Rivers",
    type: "Full-time",
    summary: "Coordinate and oversee work at field sites, performing maintenance of rotating equipment (LM2500/LM6000) at customer locations.",
    responsibilities: [
      "Perform installation and maintenance of IET Rotating equipment.",
      "Carry out major maintenance (Hot Section Exchange, GG changeout).",
      "Provide technical supervision and advisory service to site teams.",
      "Execute expert troubleshooting on-site.",
      "Conduct business in accordance with HSE Core Values."
    ],
    requirements: [
      "Bachelor’s Degree in Mechanical Engineering.",
      "Minimum of 5 years experience specialized in LM2500/LM6000 rotating equipment.",
      "Capable of carrying out Level 1-3 activities without supervision.",
      "Capable of working offshore and traveling at short notice (up to 70%).",
      "Valid NYSC discharge/exemption certificate."
    ],
    apply: 'Apply online: <a href="https://careers.bakerhughes.com/global/en/job/BAHUGLOBALR158836EXTERNALENGLOBAL/Aero-Turbine-Field-Specialist">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Facility Engineer (Mid-Level) - Iyana Ipaja",
    title: "Facility Engineer (Mid-Level)",
    date: "2026-04-20",
    location: "Iyana Ipaja, Lagos",
    type: "Full-time",
    summary: "Proactive and detail-oriented Facility Engineer to manage and maintain retail facilities with a focus on building systems and HVAC.",
    responsibilities: [
      "Oversee daily facility operations including HVAC, electrical, and plumbing.",
      "Conduct routine inspections and preventive maintenance.",
      "Diagnose and resolve faults in HVAC and building systems.",
      "Manage vendors and contractors for facility-related services.",
      "Monitor utility usage and implement energy efficiency initiatives.",
      "Maintain accurate maintenance records and reports."
    ],
    requirements: [
      "Bachelor’s degree or HND in Engineering (Mechanical or Electrical).",
      "3–4 years experience in facility management with strong HVAC focus.",
      "Strong problem-solving and organizational skills.",
      "Proficiency in Microsoft Office and maintenance management systems."
    ],
    apply: 'Send CV highlighting relevant experience to: <a href="mailto:feedback.prestigesuperstores@gmail.com">feedback.prestigesuperstores@gmail.com</a>',
    salary: "N250,000 gross monthly",
    deadline: "11th May, 2026"
  },
  {
    id: "Mining Engineer - Itori Mines - Dangote",
    title: "Mining Engineer",
    date: "2026-04-20",
    location: "Itori Mines, Ogun",
    type: "Full-time",
    summary: "Oversee daily mining operations, ensuring efficient use of resources and meeting production targets.",
    responsibilities: [
      "Manage daily mining operations and supervise shift activities.",
      "Coordinate deployment of mining machinery and personnel.",
      "Monitor and achieve daily production targets.",
      "Develop and interpret mine plans.",
      "Ensure compliance with mining regulations and environmental laws.",
      "Maintain high safety standards across operations."
    ],
    requirements: [
      "BSc/BEng in Mining Engineering (3+ years exp) or MSc (2+ years exp).",
      "Strong ability to develop and interpret mine plans.",
      "Computer literacy (AutoCAD proficiency).",
      "Good knowledge of mining regulations and safety standards."
    ],
    apply: 'Apply online: <a href="https://careers.dangote.com/job/DIL-HQ-Lagos-Mining-Engineer-Itori%2C-Ogun-State-DIL/1357845457/">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Senior Engineer - Renewable Energy - FMR",
    title: "Senior Engineer",
    date: "2026-04-20",
    location: "Abuja (FCT) and Lagos",
    type: "Full-time",
    summary: "Design and support solar, wind, and hybrid energy projects across the full project lifecycle.",
    responsibilities: [
      "Conduct feasibility studies and system design for renewable energy.",
      "Perform power systems analysis and modelling.",
      "Support procurement and project commissioning.",
      "Maintain technical documentation and reports."
    ],
    requirements: [
      "Bachelor’s Degree in Electrical, Mechanical, or Renewable Energy Engineering.",
      "7–10 years experience in renewable energy design.",
      "Proficiency in AutoCAD, PVSyst, Helioscope, or ETAP.",
      "COREN certification is an advantage."
    ],
    apply: 'Send CV and detailed application letter to: <a href="mailto:hr@fmragency.com">hr@fmragency.com</a> using the job title as subject.',
    salary: "Not Specified",
    deadline: "13th May, 2026"
  },
  {
    id: "Welder - Kwali - Viju",
    title: "Welder",
    date: "2026-04-20",
    location: "Kwali, Abuja (FCT)",
    type: "Full-time",
    summary: "Specialized welder for stainless steel and standard electric welding in industrial projects.",
    responsibilities: [
      "Execute stainless steel welding tasks.",
      "Perform standard electric welding operations.",
      "Ensure precise and durable results on industrial components."
    ],
    requirements: [
      "More than three years of proven professional experience.",
      "Technical expertise in stainless steel and electric welding.",
      "Reliability and precision in industrial projects."
    ],
    apply: 'Send CV to: <a href="mailto:vijutalent@gmail.com">vijutalent@gmail.com</a> using the Job Title as subject.',
    salary: "N100,000 – N250,000 monthly",
    deadline: "11th May, 2026"
  },
  {
    id: "FTTH Project Site Engineer - Katsina",
    title: "FTTH Project Site Engineer",
    date: "2026-04-20",
    location: "Katsina",
    type: "Full-time",
    summary: "Supervise on-site FTTH construction activities including fiber cable laying, splicing, and cabinet installation.",
    responsibilities: [
      "Supervise cable laying, splicing, and splitter installation.",
      "Ensure project quality and safety meet design requirements.",
      "Coordinate subcontractor work plans and manpower.",
      "Conduct site inspections and prepare progress reports.",
      "Implement and monitor EHS compliance."
    ],
    requirements: [
      "Diploma or above in Telecommunications or Electronics.",
      "Minimum 1 year of telecom field experience (FTTH/FTTX preferred).",
      "Understanding of ODN network structure and fiber testing.",
      "Willingness to travel for on-site work."
    ],
    apply: 'Apply online: <a href="https://www.linkedin.com/jobs/view/4398401684/">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "FTTH Project Site Engineer - Kano - LinkedIn",
    title: "FTTH Project Site Engineer",
    date: "2026-04-20",
    location: "Kano",
    type: "Full-time",
    summary: "Oversee on-site fiber optics projects, coordinating subcontractors and ensuring quality standards.",
    responsibilities: [
      "Supervise fiber cable laying and splicing.",
      "Coordinate subcontractor materials and work plans.",
      "Manage construction documents for audit.",
      "Troubleshoot on-site technical issues."
    ],
    requirements: [
      "Diploma or Degree in Telecommunications or related fields.",
      "1+ year telecom experience.",
      "Telecom vendor certification is an advantage."
    ],
    apply: 'Apply online: <a href="https://www.linkedin.com/jobs/view/4384031334/">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "IT Operations Manager - Addosser - Lagos",
    title: "IT Operations Manager",
    date: "2026-04-20",
    location: "Lagos",
    type: "Full-time",
    summary: "Managerial role focusing on operational support and core-banking application management (Orbit-R).",
    responsibilities: [
      "Provide operational support for core-banking applications.",
      "Supervise technical teams and incident management.",
      "Ensure compliance and security standards are met.",
      "Collaborate with vendors and stakeholders."
    ],
    requirements: [
      "Bachelor’s Degree in a related field.",
      "8-12 years experience in IT operations.",
      "Deep knowledge of Orbit-R core-banking application."
    ],
    apply: 'Send CV to: <a href="mailto:taiwo.oguntade@addosser.com">taiwo.oguntade@addosser.com</a> using the Job Title as subject.',
    salary: "Not Specified",
    deadline: "30th May, 2026"
  },
  {
    id: "Pharmacy Technician - Ago Lagos",
    title: "Pharmacy Technician",
    date: "2026-04-20",
    location: "Ago, Lagos",
    type: "Full-time",
    summary: "Support licensed pharmacists in dispensing medications and managing inventory at the Ago branch.",
    responsibilities: [
      "Dispense prescriptions under pharmacist supervision.",
      "Counsel customers on drug usage and side effects.",
      "Monitor expiry dates and rotate inventory.",
      "Handle POS transactions and daily records.",
      "Ensure compliance with PCN and NAFDAC standards."
    ],
    requirements: [
      "Diploma or Certificate in Pharmacy Technician/Technology.",
      "1–2 years experience in retail/hospital pharmacy.",
      "Knowledge of generics and OTC products.",
      "Ability to commute easily to Ago, Lagos."
    ],
    apply: 'Send CV to: <a href="mailto:Omolara.kiyix@gmail.com">Omolara.kiyix@gmail.com</a> using “Pharmacy Technician – Ago” as subject.',
    salary: "N100,000 – N140,000 net monthly",
    deadline: "Not Specified"
  },
  {
    id: "HEMM Technician – Mines - Ibese Plant - 2026",
    title: "HEMM Technician – Mines",
    date: "2026-04-20",
    location: "Ibese Plant, Ogun",
    type: "Full-time",
    summary: "Responsible for ensuring that plant heavy equipment are in safe operating condition by conducting routine maintenance and scheduling needed repairs.",
    responsibilities: [
      "Carry out all types of repairs (emergency/running) and preventive maintenance of heavy duty equipment.",
      "Diagnose problems on diesel engines, hydraulic, and transmission systems.",
      "Provide on-the-job training to junior technicians.",
      "Ensure consistent availability of HEMM for operations.",
      "Suggest improvements for maintenance practices to management."
    ],
    requirements: [
      "SSCE, National Diploma, or Trade Test 1, 2 & 3 in Mechanical Fitting.",
      "3 – 10 years experience in HEMM and LMV maintenance.",
      "Valid DRIVING LICENCE.",
      "Knowledge of repair and maintenance of plant heavy equipment.",
      "Proficiency in office productivity tools."
    ],
    apply: 'Click here to apply online: <a href="https://careers.dangote.com/job/Ibese-Plant-HEMM-Technician-Mines-Ibes/1329280257/">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Civil Engineer - Obajana - Dangote",
    title: "Civil Engineer",
    date: "2026-04-20",
    location: "Obajana Plant, Kogi",
    type: "Full-time",
    summary: "Designing, implementing, and overseeing construction projects contributing to infrastructural development.",
    responsibilities: [
      "Develop detailed designs for construction projects.",
      "Conduct site assessments and analyze requirements.",
      "Manage construction processes to ensure timely completion.",
      "Coordinate with architects and contractors.",
      "Identify and mitigate risks associated with construction."
    ],
    requirements: [
      "Bachelor’s degree in Civil Engineering or related field.",
      "Minimum of three (3) years relevant work experience.",
      "Proficiency in AutoCAD, Civil 3D.",
      "Excellent project management capabilities."
    ],
    apply: 'Click here to apply online: <a href="https://careers.dangote.com/job/Obajana-DCT-Civil-Engineer-Obaj/829493002/">Apply Online</a>',
    salary: "Not Specified",
    deadline: "Not Specified"
  },
  {
    id: "Finance Intern (NYSC) - Gaduwa",
    title: "Finance Intern (NYSC)",
    date: "2026-04-18",
    location: "Gaduwa, Abuja",
    type: "Internship",
    summary:
      "We are seeking a proactive and detail-oriented NYSC Corp Member with a strong interest in finance and accounting to join our Abuja team as a Finance Intern. This internship role provides hands-on exposure to financial operations, reporting, and compliance within a structured environment.",
    responsibilities: [
      "Support the Finance Team in daily operations.",
      "Assist in financial reporting and documentation.",
      "Support compliance-related activities.",
      "Assist with data entry and financial record maintenance.",
    ],
    requirements: [
      "Bachelor’s Degree in Accounting.",
      "Currently serving as an NYSC Corp Member (Abuja posting).",
      "Strong interest in finance, accounting, and financial management.",
      "Good analytical and numerical skills.",
      "Strong attention to detail and accuracy.",
      "Organized, proactive, and willing to learn.",
      "Basic proficiency in Microsoft Office tools (especially Excel).",
    ],
    apply:
      'Interested and qualified candidates should: Click <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=6iy_zKJr50eBPwFYIs9-SfJGuM39c-pCgInZJIWS6nVUMDRURFpPTlA2OTNEMlNaR1o4SVU3WENVWC4u">HERE</a> to apply online.',
    salary: "Competitive monthly allowance.",
    deadline: "Not Specified.",
  },
  {
    id: "Manager, Group Business Applications - Nigeria",
    title: "Manager, Group Business Applications",
    date: "2026-04-18",
    location: "Nigeria",
    type: "Full-time",
    summary:
      "To ensure the seamless operation, reliability, and performance of the Company’s business applications portfolio, including ERP, SFA, Data management, and legacy systems, while driving alignment with business objectives and minimizing system downtime.",
    responsibilities: [
      "Lead and oversee the Group Business Applications portfolio, including ERP (D365 F&O) and other enterprise systems.",
      "Provide strategic direction and governance for application development, implementation, and support services.",
      "Manage and supervise technical and functional teams to ensure effective delivery and performance.",
      "Drive the evolution of the organization’s applications architecture.",
      "Partner with business stakeholders to maximize value from enterprise applications.",
      "Govern application enhancements, upgrades, and transformation initiatives.",
      "Manage vendors and technology partners to ensure quality delivery.",
      "Monitor emerging technologies and drive innovation.",
    ],
    requirements: [
      "Bachelor’s Degree in Computer Science, Information Technology, or Business Management (MBA is an advantage).",
      "Relevant certifications such as ITIL, PMP, or Agile are required.",
      "10–12 years progressive experience in Information Technology or ERP systems.",
      "Strong experience in enterprise applications (ERP, CRM).",
      "Experience managing application support teams and third-party vendors.",
      "Exposure to Microsoft Fabric or modern analytics architectures is an advantage.",
      "Strong understanding of D365 F&O architecture and security models.",
      "Exhibit strong leadership, accountability, and vendor management skills.",
    ],
    apply:
      'Interested and qualified candidates should: Click <a href="https://fmnplc.e-recruiter.ng/vacancy/details/12520">HERE</a> to apply online.',
    salary: "Not Specified.",
    deadline: "Not Specified.",
  },
  {
    id: "Manager – Meter Engineering - Lagos",
    title: "Manager – Meter Engineering",
    date: "2026-04-18",
    location: "Lagos",
    type: "Full-time",
    summary:
      "We are looking for a technically sharp Manager – Meter Engineering to lead the deployment, performance, and reliability of metering infrastructure. You will oversee installation, maintenance, and optimization of meters supporting grid visibility and revenue assurance.",
    responsibilities: [
      "Oversee the installation, commissioning, and maintenance of electricity meters.",
      "Ensure meters are properly configured and calibrated for billing integrity.",
      "Support the deployment of smart meters and AMI devices.",
      "Implement preventive maintenance and inspection schedules.",
      "Ensure field teams follow standard procedures for troubleshooting.",
      "Investigate meter faults and communication failures.",
      "Monitor meter data quality and communication performance.",
      "Maintain installation records and technical documentation.",
    ],
    requirements: [
      "Strong experience in metering operations within a utility or power distribution environment.",
      "Solid understanding of smart metering systems and AMI infrastructure.",
      "Experience with meter installation, commissioning, and calibration in field environments.",
      "Ability to supervise field technicians and contractors.",
      "Willingness to travel within and outside the country.",
      "Experience with SCADA systems or MDM platforms is an advantage.",
    ],
    apply:
      'Interested and qualified candidates should: Click <a href="https://job-boards.eu.greenhouse.io/beaconpowerservices/jobs/4815816101">HERE</a> to apply online.',
    salary: "Not Specified.",
    deadline: "Not Specified.",
  },
  {
    id: "Technology Deployment Manager - Nigeria",
    title: "Technology Deployment Manager",
    date: "2026-04-18",
    location: "Nigeria",
    type: "Full-time",
    summary:
      "Responsible for deployment and monitoring of modern technology by providing technical support to the sales team in order to emplace confidence in Top feeds products in the designated region.",
    responsibilities: [
      "Implement and monitor technological innovative programs for farmers.",
      "Provide training and guidance to farmers on achieving best yields.",
      "Supervise Technology Deployment Officers in the assigned region.",
      "Respond to farm emergencies and participate in Go-To-Market sessions.",
      "Manage the technological interface between management and customers.",
      "Collect and collate field data for effective decision making.",
    ],
    requirements: [
      "Doctor of Veterinary Medicine or related degree in Animal Science/Agriculture.",
      "5 years of cognate experience in the Food, Feed, or FMCG industry.",
      "Strong technical expertise in livestock production and agri-tech solutions.",
      "Experience in supervising field officers and managing support programs.",
      "Excellent analytical and communication skills.",
      "Membership of NVMA is an advantage.",
    ],
    apply:
      'Interested and qualified candidates should: Click <a href="https://fmnplc.e-recruiter.ng/vacancy/details/12519">HERE</a> to apply online.',
    salary: "Not Specified.",
    deadline: "Not Specified.",
  },
  {
    id: "Geological Officer - Itori Mines",
    title: "Geological Officer",
    date: "2026-04-18",
    location: "Itori Mines, Ogun",
    type: "Full-time",
    summary:
      "The Geological Officer will support mining operations by providing accurate geological data and analysis to optimize mine design, ore extraction, and production efficiency.",
    responsibilities: [
      "Collaborate with mining engineers to design efficient mining methods.",
      "Provide geological data to support pit and mine design.",
      "Assist in determining optimal ore extraction sequences.",
      "Monitor ore quality during mining operations.",
      "Maintain accurate geological records, logs, and databases.",
      "Conduct geological surveys to identify mineral-rich zones.",
      "Ensure compliance with environmental regulations.",
      "Support drilling and sampling programs.",
    ],
    requirements: [
      "B.Sc/HND in Geology (6+ years exp) or M.Sc/M.Eng in Geology (3+ years exp).",
      "In-depth knowledge of mining geology and exploration methods.",
      "Proficiency in geological modelling software (preferably Surpac).",
      "Familiarity with GIS tools and sampling methods.",
      "High attention to detail and documentation abilities.",
    ],
    apply:
      'Interested and qualified candidates should: Click <a href="https://careers.dangote.com/job/DIL-HQ-Lagos-Geological-Officer-Itori-Mines%2C-Ogun-State-DIL/1357845657/">HERE</a> to apply online.',
    salary: "Not Specified.",
    deadline: "Not Specified.",
  },
  {
    id: "Maintenance Engineer (HEMM / HEMV) - Itori Mines",
    title: "Maintenance Engineer (HEMM / HEMV)",
    date: "2026-04-18",
    location: "Itori Mines, Ogun",
    type: "Full-time",
    summary:
      "The Maintenance Engineer (HEMM/HEMV) will be responsible for executing and supervising maintenance activities for Heavy Earth Moving Machinery and Vehicles to ensure reliability and minimize downtime.",
    responsibilities: [
      "Supervise technicians and mechanics to ensure work quality.",
      "Implement corrective maintenance and coordinate repair activities.",
      "Conduct regular inspections of HEMM/HEMV performance.",
      "Respond promptly to equipment breakdowns.",
      "Diagnose mechanical, hydraulic, and electrical faults.",
      "Manage spare parts and critical inventory availability.",
      "Analyze equipment performance and conduct root cause analysis.",
      "Maintain accurate maintenance records using CMMS.",
    ],
    requirements: [
      "B.Sc/HND in Mechanical/Mechatronics Engineering (6+ years exp) or M.Sc (3+ years exp).",
      "In-depth knowledge of excavators, dump trucks, and dozers.",
      "Strong understanding of hydraulics and diesel engines.",
      "Proficiency in diagnosing faults and using condition monitoring techniques.",
      "Working knowledge of CMMS platforms.",
    ],
    apply:
      'Interested and qualified candidates should: Click <a href="https://careers.dangote.com/job/DIL-HQ-Lagos-Maintenance-Engineer-%28HEMMHEMV%29%2C-Itori-Mines-Ogun-State-DIL/1357846357/">HERE</a> to apply online.',
    salary: "Not Specified.",
    deadline: "Not Specified.",
  },
  {
    id: "Crane, HIAB & Payloader Supervisor - Lagos",
    title: "Crane, HIAB & Payloader Supervisor",
    date: "2026-04-18",
    location: "Lagos",
    type: "Full-time",
    summary:
      "The Supervisor is responsible for overseeing the safe, efficient, and compliant operation of lifting and loading equipment, ensuring adherence to safety regulations and timely execution of activities across sites.",
    responsibilities: [
      "Supervise daily operations of cranes, HIAB trucks, and payloaders.",
      "Coordinate lifting and loading activities with project schedules.",
      "Enforce strict compliance with HSE policies and lifting procedures.",
      "Conduct pre-operation safety checks and toolbox talks.",
      "Oversee routine inspection and maintenance of equipment.",
      "Ensure equipment certification and documentation are up to date.",
      "Liaise with site engineers to plan lifting operations.",
      "Maintain daily logs of usage, fuel, and operational activities.",
    ],
    requirements: [
      "Minimum of OND / HND / BSc in Mechanical Engineering.",
      "Valid certifications in crane/HIAB/payloader operations.",
      "3–5 years experience in heavy equipment operations.",
      "Strong knowledge of lifting operations and load charts.",
      "Ability to read technical documents and site plans.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hr@designunion.com">hr@designunion.com</a> using the Job Position as the subject of the mail.',
    salary: "Not Specified.",
    deadline: "17th May, 2026.",
  },
  {
    id: "Manager – Energy / Feeder - Lagos/Abuja",
    title: "Manager – Energy / Feeder",
    date: "2026-04-18",
    location: "Lagos, Abuja",
    type: "Full-time",
    summary:
      "We are looking for a technically sharp and commercially aware Manager to drive energy performance across client networks, managing metering integrity, conducting loss studies, and delivering grid insights.",
    responsibilities: [
      "Ensure accurate real-time streaming of feeder and DT energy readings.",
      "Monitor and validate readings for Maximum Demand (MD) customers.",
      "Conduct joint meter readings for monthly energy reconciliation.",
      "Perform technical loss studies with client engineering teams.",
      "Support the identification of operational losses and recommend corrective actions.",
      "Lead or support energy audits and improvement measures.",
      "Manage team capacity, resource allocation, and delivery planning.",
      "Ensure compliance with national energy regulations and ESG standards.",
      "Foster a culture of ownership and collaboration.",
    ],
    requirements: [
      "Strong experience in energy management and metering operations within a utility.",
      "Understanding of feeder energy performance and loss analysis.",
      "Ability to interpret technical loss studies and energy audits.",
      "Experience managing vendors and contractors.",
      "Willingness to travel within and outside the country.",
      "Experience with SCADA systems or Power BI is an advantage.",
    ],
    apply:
      'Interested and qualified candidates should: Click <a href="https://job-boards.eu.greenhouse.io/beaconpowerservices/jobs/4815752101">HERE</a> to apply online.',
    salary: "Not Specified.",
    deadline: "Not Specified.",
  },
  {
    id: "MEP Project Engineer - Lagos",
    title: "MEP Project Engineer",
    date: "2026-04-18",
    location: "Lagos",
    type: "Full-time",
    summary:
      "We are hiring Project Engineers to oversee mechanical inspections, troubleshooting, and evaluations of MEPF installations on building projects. You will work closely with the Project Manager to manage both technical and financial aspects.",
    responsibilities: [
      "Plan, manage, and execute installations in line with project specifications, standards, and timelines.",
      "Ensure seamless integration of MEPF systems with architectural and structural designs.",
      "Assist in developing project schedules, budgets, and resource allocation plans.",
      "Conduct inspections and evaluations to ensure compliance with technical drawings, design specifications, and quality standards.",
      "Troubleshoot technical issues on-site and provide engineering solutions.",
      "Prepare working and As-Built drawings reflecting executed installations.",
      "Represent MAR&MOR in client and consultant meetings, providing updates on project progress.",
      "Coordinate with subcontractors, suppliers, and vendors to ensure timely and quality-compliant materials/services.",
      "Maintain accurate project records, including technical documents, inspection reports, and material submittals.",
      "Prepare and submit progress reports, highlighting milestones, challenges, and solutions.",
      "Assist with the preparation of handover documentation, including the Operation and Maintenance Manual.",
      "Provide technical guidance, support, and training to site personnel.",
      "Lead and motivate teams for excellence in execution.",
    ],
    requirements: [
      "BSc, B.Tech / HND, or M.Sc Degree (or equivalent) in Mechanical / Electrical Engineering.",
      "Minimum of 5 years of post-NYSC experience in MEP building services.",
      "Previous site experience required.",
    ],
    apply:
      'Interested and qualified candidates should send their applications and CV to: <a href="mailto:recruitment@marandmor.com">recruitment@marandmor.com</a> using the Job Title as the subject of the mail.',
    salary: "Not Specified",
    deadline: "Not Specified",
  },
  {
    id: "BIM–CAD Specialist - Shomolu",
    title: "BIM–CAD Specialist",
    date: "2026-04-18",
    location: "Shomolu, Lagos",
    type: "Full-time",
    summary:
      "We are seeking a skilled BIM–CAD Specialist to support our design team in producing accurate structural/civil drawings and BIM models. The role requires strong drafting expertise and proficiency in Revit and AutoCAD.",
    responsibilities: [
      "Prepare structural/civil drawings using AutoCAD, CADS-RC, CADS-SW.",
      "Develop BIM models and drawings using Revit.",
      "Produce GA drawings, reinforcement detailing, and bending schedules.",
      "Prepare shop drawings and support Civil 3D detailing.",
      "Ensure drawing accuracy, standards, and proper documentation.",
      "Collaborate with engineers and support BIM coordination (clash detection, updates).",
    ],
    requirements: [
      "Proficiency in AutoCAD, CADS-RC, CADS-SW, and Revit is essential.",
      "Familiarity with Civil 3D and BIM coordination tools is an added advantage.",
      "2–6 years hands-on experience in structural/civil drafting or detailing.",
      "Strong understanding of structural detailing, drawing standards, and documentation.",
      "Ability to organize files, manage drawing versions, and work with minimal supervision.",
      "Excellent attention to detail, accuracy, and presentation of drawings.",
    ],
    apply:
      'Interested and qualified candidates should send their CV and portfolio to: <a href="mailto:hr@sop-consulting.com">hr@sop-consulting.com</a> using “Application – BIM–CAD Specialist” as the subject of the mail.',
    salary: "N200,000 – N400,000 per month.",
    deadline: "Not Specified",
  },
  {
    id: "Services Specialist - Subsea Projects and Services - Onne",
    title: "Services Specialist – Subsea Projects and Services",
    date: "2026-04-18",
    location: "Onne, Rivers",
    type: "Full-time",
    summary:
      "The Subsea projects and services specialist is responsible for the technical delivery and fulfillment of range of subsea systems equipment for customer orders within the S&SPS Product line workshop.",
    responsibilities: [
      "Ensuring all documentation related to controls equipment is in place before commencing job such as JSA, risk assessment, lift plans, permit and procedures as required.",
      "Ensure that on job completion procedures are signed-off, reports created, housekeeping completed, and task hours correctly vouched each day.",
      "Reporting any faults in machinery such as cranes or pumps, tooling and assigned area of responsibility immediately to supervisor or store man.",
      "Being proactive in identifying potential issues with tasks and communicating same in compliance with company standards.",
      "Contributing to flawless execution in carrying out demobilization, repairs, refurbishment mobilization and pre-load out checks on customer subsea equipment.",
      "Maintaining, repairing and testing of Subsea Production equipment (SSPE) within the services product line.",
    ],
    requirements: [
      "Have a Bachelor’s Degree in Engineering or science related field from an accredited university (Master's degree is an advantage).",
      "Have a minimum of 3 years of hand-on workshop and engineering/operations experience in subsea equipment within the Oil and Gas industry.",
      "Being able to read, follow, and understand complex drawings, BoMs, schematics, and technical procedures.",
      "Have proven hands-on experience in repairs, troubleshooting, and maintenance of topside and subsea equipment such as HPUs, valves, and actuators.",
      "Have a valid NYSC discharge or exemption certificate.",
      "Have a technical working knowledge of Subsea Oil & Gas equipment / products.",
      "Have excellent problem-solving skills, attention to detail, and time management abilities.",
      "Be self-motivated with the ability to work independently and have effective communication skills.",
      "Be computer literate (MS Word, Excel, Outlook, ORACLE ERP, CAD packages).",
    ],
    apply:
      'Interested and qualified candidates should: Click <a href="https://careers.bakerhughes.com/global/en/job/R161932/Services-Specialist-Subsea-Projects-and-Services">HERE</a> to apply online.',
    salary: "Not Specified",
    deadline: "Not Specified",
  },
  {
    id: "Graphic Designer - Ibadan",
    title: "Graphic Designer",
    date: "2026-04-17",
    location: "Ibadan, Oyo",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are seeking a skilled Graphic Designer in Ibadan who is proficient in professional camera handling, video editing, and live streaming to cover events and manage digital media production.",
    responsibilities: [
      "Handle video and photo cameras professionally for event coverage.",
      "Edit videos using modern software to produce high-quality content.",
      "Manage live streaming sessions using software like OBS and VMIX.",
      "Travel as required to cover various events.",
      "Collaborate with the team to ensure high-quality visual output.",
    ],
    requirements: [
      "Candidates should possess a relevant qualification.",
      "Must reside within Ibadan (Jericho, Mokola, Eleyele, Sango, Ologunru, Ajibode, or UI-Agbowo axis).",
      "Strong skills in video editing and camera operations.",
      "Experience in live streaming (OBS, VMIX) is a significant advantage.",
      "Ability to handle professional equipment and travel for assignments.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:info@ceoafrica.com">info@ceoafrica.com</a> using the Job Title as the subject of the email.',
    salary: "N100,000 – N150,000 / Month.",
    deadline: "Not specified",
  },
  {
    id: "Structural Engineer",
    title: "Structural Engineer",
    date: "2026-04-17",
    location: "Ibeju, Lekki – Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are seeking an experienced Structural Engineer to design, analyze, and oversee structural systems for industrial, residential, and commercial projects. The role involves ensuring safe, durable, cost-effective, and code-compliant designs while working closely with architects, engineers, and construction teams.",
    responsibilities: [
      "Design and analyze steel, reinforced concrete, timber, and composite structures using industry-standard software (ETABS, SAP2000, STAAD.Pro, etc.).",
      "Prepare structural calculations, drawings, reports, and specifications in line with applicable codes (ACI, AISC, Eurocodes, etc.).",
      "Conduct structural assessments and site inspections to ensure compliance with design requirements.",
      "Collaborate with architects, contractors, and project teams to resolve design and construction issues.",
      "Review shop drawings and submittals for compliance with design intent.",
      "Ensure all designs meet regulatory, safety, and quality standards.",
      "Apply value engineering and innovative solutions for efficiency and sustainability.",
    ],
    requirements: [
      "HND/ B.Sc / Master’s degree in Structural Engineering.",
      "Minimum of 10 years’ experience in structural design for large-scale projects.",
      "COREN certification is required.",
      "Proficiency in structural analysis/design software.",
      "Strong knowledge of construction materials, geotechnical, and seismic design principles.",
      "Excellent analytical, communication, and teamwork skills.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:cv@ascentech.com.ng">cv@ascentech.com.ng</a> using “Structural Engineer” as the subject of the mail.',
    salary: "Not Specific",
    deadline: "Not specified",
  },
  {
    id: "Project Monitoring Intern (NYSC)",
    title: "Project Monitoring Intern (NYSC)",
    date: "2026-04-16",
    location: "Gaduwa, Abuja",
    type: "Internship",
    seniority: "Junior",
    summary:
      "We are seeking a proactive and detail-oriented NYSC Corp Member with a background in Civil, Mechanical, or Electrical Engineering to join our Abuja team as a Project Monitoring Intern. This is a support-based internship role designed to provide practical exposure to project coordination and monitoring activities.",
    responsibilities: [
      "Assist in project coordination and monitoring activities.",
      "Support field operations and construction processes.",
      "Maintain accurate documentation and reporting of site activities.",
      "Collaborate with the engineering team on MEP systems evaluation.",
    ],
    requirements: [
      "Bachelor’s Degree in Civil Engineering, Mechanical Engineering, Electrical Engineering, or a related STEM discipline",
      "Currently serving as an NYSC Corp Member (Abuja posting)",
      "Strong interest in project monitoring, construction processes, and engineering operations",
      "Basic understanding of construction methodologies and MEP systems",
      "Good analytical and problem-solving skills",
      "Strong attention to detail and documentation accuracy",
      "Organized, proactive, and willing to learn",
      "Basic proficiency in Microsoft Office tools (especially Excel and Word).",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=6iy_zKJr50eBPwFYIs9-SfJGuM39c-pCgInZJIWS6nVUNVA1UTVMN0VGMExZRURGRzVEUDkyNEpWVS4u">HERE</a> to apply online.',
    salary: "Not Specific",
    deadline: "Not specified",
  },
  {
    id: "Field Engineer",
    title: "Field Engineer",
    date: "2026-04-15 ",
    location: "Lagos",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "We are looking for a proactive and technically skilled Field Engineer to support the installation, maintenance, and troubleshooting of our network infrastructure. The Ideal candidate will be responsible for handling on-site technical operations, ensuring service reliability, and delivering excellent customer experience.",
    responsibilities: [
      "Carry out on-site installation of network equipment (routers, ONTs, switches, etc.)",
      "Troubleshoot and resolve customer connectivity issues efficiently",
      "Perform preventive and corrective maintenance on network infrastructure",
      "Diagnose faults across fiber, wireless, and IP networks",
      "Ensure timely resolution of tickets assigned from NOC or support teams",
      "Conduct site surveys and provide technical recommendations",
      "Escalate complex issues with accurate reporting and documentation",
      "Ensure compliance with HSE and operational procedures",
      "Provide customer education during and after installations",
    ],
    requirements: [
      "Candidates should possess a Second Class Upper Division OND/HND/B.Sc in Engineering, Computer Telecommunications, or related field",
      "Basic understanding of networking (IP addressing, routing, DHCP, NAT)",
      "Experience with fiber and wireless installations is an advantage",
      "Ability to troubleshoot under pressure and meet SLAs",
      "Good communication and customer service skills",
      "Experience working with ISPs or telecom providers",
      "Familiarity with Mikrotik, Ubiquiti, or similar devices",
      "Knowledge of FTTH and GPON networks",
      "Ability to work independently in the field",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:emmanuel.gbassi@tizeti.com">emmanuel.gbassi@tizeti.com</a> using the job title as the subject of the mail.',
    salary: "Not Specific",
    deadline: "10th May, 2026.",
  },
  {
    id: "Facilities Manager",
    title: "Facilities Manager",
    date: "2026-04-15 ",
    location: "Lekki Phase 1, Lagos",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "The Facilities Manager oversees the maintenance, safety, and efficiency of all company locations, ensuring facilities are fully functional, compliant, cost-effective, and aligned with brand standards.",
    responsibilities: [
      "Manage day-to-day facility operations across all locations.",
      "Conduct inspections and implement preventive maintenance plans.",
      "Supervise repairs and maintain maintenance records.",
      "Source, negotiate, and manage vendors and service providers.",
      "Monitor performance to ensure quality and cost efficiency.",
      "Track facility assets and manage inventory of supplies.",
      "Ensure timely and cost-effective procurement.",
      "Manage facilities budget and monitor expenses.",
      "Identify cost-saving opportunities and prepare reports.",
      "Ensure facilities align with brand image and ambience.",
      "Oversee upgrades and improvements.",
      "Enforce health, safety, and hygiene standards.",
      "Conduct safety audits and maintain compliance records.",
    ],
    requirements: [
      "Degree in Facilities Management, Engineering, Business Administration, or related field (preferred).",
      "Proven experience in facilities or operations management.",
      "Strong knowledge of health, safety, and building systems.",
      "Ability to work flexible hours, including weekends",
    ],
    apply:
      'Interested and qualified candidates should click  <a href="https://forms.gle/tXs5mJNsLezR1c3b7">HERE</a> to apply online.',
    salary: "N400,000 – N450,000 per month.",
    deadline: "Not specific",
  },
  {
    id: "Construction Coordinator III",
    title: "Construction Coordinator III",
    date: "2026-04-15 ",
    location: "Lagos",
    type: "Fulltime",
    seniority: "Junior",
    summary:
      "The Construction Coordinator responsible for construction planning, coordinates construction input and communicates with Construction management. Establishes the Construction Planning Program (CPP) & seek alignment of the planning scope with the Construction Advisor & subsequently with the Construction Support Manager. Manages assigned projects and the implementation contractors involved to ensure that the projects deliverables are completed for RFI, meet the quality requirements and schedule, and delivered to project requirements.",
    responsibilities: [
      "In addition to all of the Level 1 and 2 tasks, a Level 3 Construction Coordinator will:",
      "Able to identify issues, problems and opportunities; make timely decisions; develop appropriate and innovative solutions and ask for assistance if required.",
      "Able to work on multiple projects of various size and complexity.",
      "Able to work effectively in small to large multi-disciplinary teams, and share and transfer knowledge within teams and stake holders",
    ],
    requirements: [
      "BS / MS in Engineering",
"Good coordination & interface capabilities",
"Previous experience in a closely related position and / or project experience",
"Excellent verbal and written communications skills, including the ability to convey information and ideas to individuals and groups, and make presentations when required.",
"A person of integrity who is trusted by others and consistently honors their commitments.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hesprojectrecruitment@gmail.com">hesprojectrecruitment@gmail.com</a> using the job title as the subject of the mail.',
    salary: "Not Specific",
    deadline: "Not specific",
  },
  {
    id: "Electrical Engineer / Technician",
    title: "Electrical Engineer / Technician",
    date: "2026-04-15 ",
    location: "Sagamu – Ogun, and Lagos",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "We are seeking proactive and technically sound Electrical Engineers/ Technicians to support the operation, maintenance, and reliability of electrical systems within our pharmaceutical manufacturing facility. The successful candidate will supervise a team of electricians and technicians, ensuring the continuous performance of critical electrical infrastructure in compliance with GMP and safety regulations.",
    responsibilities: [
      "Carry out routine maintenance and corrective actions on electrical panels, control systems, production equipment and industrial automation equipment.",
      "Assist in audits and inspections by maintaining proper documentation and supporting compliance readiness.",
      "Provide technical support during external audits, inspections, and risk assessments.",
      "Ensure the safe and efficient operation of electrical infrastructure including backup power systems, switchgear, lighting, motors, and distribution boards.",
      "Coordinate the installation and commissioning of electrical components for new equipment or system upgrades.",
      "Maintain electrical documentation, equipment manuals, and system diagrams in compliance with regulatory standards.",
      "Support troubleshooting and resolution of electrical faults in coordination with production and QA/QC teams.",
      "Ensure all electrical equipment complies with GMP, WHO, and NAFDAC standards.",
      "Monitor electrical energy usage and propose strategies for efficiency improvement and cost reduction",
    ],
    requirements: [
      "B.Eng. / HND / OND / Diploma in Electrical / Electronic Engineering.",
      "Relevant experience in electrical maintenance preferably within a pharmaceutical, FMCG, or manufacturing environment.",
      "NABTEB.",
      "Trade Test 1,2 & 3",
      "Hands-on experience with electrical troubleshooting, preventive maintenance, and safety protocols.",
      "Basic understanding of regulatory compliance including GMP, WHO, and NAFDAC standards.",
      "Familiarity with PLC systems, SCADA interfaces, and power distribution layouts is an advantage.",
      "Strong documentation and reporting skills.",
      "Willingness to learn and grow within a dynamic, regulated technical environment",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://forms.gle/XCGcNGLEJr9knFCG6">HERE</a> to apply online.',
    salary: "Not Specific",
    deadline: "14th May, 2026.",
  },
  {
    id: "Maintenance Officer",
    title: "Maintenance Officer",
    date: "2026-04-15 ",
    location: "Abuja",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "We are looking for a detail-oriented and proactive Maintenance Officer to oversee the maintenance and operations of our depot facilities, ensuring optimal performance, safety, and efficiency across all equipment and infrastructure.",
    responsibilities: [
      "Oversee PMP of key assets  (Generators 60kva and above)",
      "Ensure maintenance of water treatment plant",
      "Ensure maintenance of pumps",
      "Ensure relatively uninterrupted power supply in the depot",
      "Maintain and repair depot equipment and fittings",
      "Ensure rectification of electrical faults",
      "Plan and co-ordinate electrical repairs on machines and other equipment",
      "Provide information on electrical spare parts",
      "Provide Daily log of operations and activities of the department",
      "Keep depot fuel consumption records",
      "Preparation of weekly and monthly reports",
      "Maintain facility operations in the food and beverage factory",
      "Establish a preventative maintenance program in both plants and restaurants",
      "Maintain fleet of cars and other logistic equipment.",
      "Manage operations including supervision, purchasing and performed required Engineering",
      "Efficiency and Reduction of Downtime",
      "Maintenance budgets and costs",
      "Asset Lifecycle and Performance",
      "Maintenance Response Time",
      "Work order management",
      "Timely response to emergency maintenance",
    ],
    requirements: [
      "A minimum of any technical training is required",
      "Possession of any technical professional qualification is an added advantage",
      "Minimum of 2 years’ experience in similar role",
      "Decision Expectations",
      "Acts on defined procedures and decisions",
      "Enforces agreed decisions",
      "Resolves staff/customer issues",
      "Drives sales performance in stores",
      "Plans own work schedule and work schedule of subordinates",
      "Assigns work to subordinates",
      "Monitor subordinates’ work performance",
      "Appraises/evaluates subordinates’ performance",
      "Knowledge of preventive  maintenance",
      "Knowledge of Predictive maintenance",
      "Knowledge of Cost Management & Control",
      "Knowledge of Downtime controls, analysis and corrective action",
      "Demonstrates Computers skills (spread sheets excel, word, Autocad)",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://career2.successfactors.eu/career?career%5fns=job%5flisting&company=foodconceptsP&navBarLevel=JOB%5fSEARCH&rcm%5fsite%5flocale=en%5fUS&career_job_req_id=744&selected_lang=en_US&jobAlertController_jobAlertId=&jobAlertController_jobAlertName=&browserTimeZone=Africa/Lagos&_s.crb=0DSr6sc8tE32gFYOJo1BxVZ%2b17TaDbp%2bKH%2bZkWX8RRQ%3d&utm_source=">HERE </a> to apply online',
    salary: "Not Specific",
    deadline: "Not specific",
  },
  {
    id: "Technical Sales Engineer",
    title: "Technical Sales Engineer",
    date: "2026-04-15 ",
    location: "Port Harcourt - Rivers",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "This role blends technical expertise with sales skills to promote engineering software and services. You’ll support the sales process by providing tailored solutions, product demos, and technical insights to meet client needs in design.",
    responsibilities: [
      "Engage clients to understand technical needs and propose customized product or service solutions.",
"Collaborate with engineering and sales teams to develop technical proposals, bids, and client presentations",
"Conduct product demonstrations, site visits, and provide pre- and post-sales technical support.",
"Generate and manage leads, negotiate contracts, and oversee the full sales cycle from inquiry to delivery of our software.",
"Maintain deep knowledge of company products, industry trends, and client requirements to support innovation and continuous improvement.",
"Prepare tender documents and participate in tendering processes for new business opportunities",
"Track sales performance and client interactions using CRM tools to support strategic planning.",
"Represent the company at client meetings, industry events, and professional forums.",
"Train internal sales teams on product features and technical selling points of the company.",
"Generate high-quality sales leads, follow up after initial contact, secure and renew orders, negotiate prices, complete sales, and arrange deliveries.",
"Research, develop, and modify products to meet customers’ technical requirements and needs.",
"Help customers who have problems with installed products and recommend improved or upgraded versions.",
    ],
    requirements: [
      "You have at least two to five years of work experience",
      "Bachelor’s Degree in mechanical, Civil or relevant field with  3–5 years of experience in technical sales or sales engineering, ideally within the construction, engineering, or industrial services sectors.",
      "Strong technical foundation with proven ability to understand and communicate complex engineering concepts to both technical and non-technical audiences.",
      "Proficiency in engineering and design software and other CAD tools; experience in software sales is a plus.",
      "Skilled in CRM tools for sales tracking and client relationship management.",
      "Excellent communication, presentation, and interpersonal skills with a customer-centric mindset.",
"Demonstrated analytical thinking and problem-solving abilities with a strong business sense and marketing acumen.",
"Effective at working both independently and collaboratively, with strong organizational and leadership skills to manage sales territories and client accounts.",
"Confident and persuasive with a results-driven approach to meeting sales goals and customer needs",
    ],
    apply:
      'Interested and qualified candidates should click <a href="mhttps://apply.bizedgeapp.com/sherman-gray-limited/17460587445/1?panel=%22Job%20Details%22"> HERE </a> to apply online',
    salary: "Not Specific",
    deadline: "Not specific",
  },
  {
    id: "Project Engineer – Civil / Structural",
    title: "Project Engineer – Civil / Structural",
    date: "2026-04-15 ",
    location: "Port Harcourt - Rivers",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "We are looking for an innovative civil/structural engineer to design, develop, and construct a range of projects from conception through to completion. The position requires thorough knowledge of civil/structural design and engineering techniques with exceptional skills in analysis of structures to ensure their safety, stability, and functionality.",
    responsibilities: [
      "Candidates should posses a Bachelor’s Degree with 5 to 8 years of work experience",
      "Manage, design, develop, create, and maintain construction projects in a safe, timely, and sustainable manner",
    "Carry out technical and feasibility studies and draw up blueprints that satisfy technical specifications",
"Perform structural design and analysis calculations using governing codes and standards, engineering formulas, skills, and experience. ",
"Prepare accurate and detailed structural drawings, plans, and specifications that effectively communicate the design intent and facilitate construction.",
"Identify potential risks and hazards associated with structural elements and propose appropriate mitigation measures.",
"Perform field activities such as observing and recording existing field conditions as well as taking and verifying measurements within the project area. ",
"Coordinate work and collaborate closely with professionals such as architects, mechanical engineers, electrical engineers, etc. involved in the design and construction process.",
"Conduct detailed analysis and calculations to assess the structural integrity, stability, and load-bearing capacity",
"Assess the properties and suitability of construction materials, such as steel, concrete, timber, masonry, etc.",
"Design various reinforced concrete, post-tensioned concrete, and steel structures",
"Manage multiple projects and administer contracts by demonstrating capability and experience in managing and performing projects in a fast-paced environment.",
    ],
    requirements: [
      "Proficiency in site layout, grading, utility design, erosion control, regulatory approvals, etc.",
      "Proven working experience in civil engineering and project management.",
      "Have experience in structural analysis, design, and detailing.",
      "Proficiency in the use of drafting software like AutoCAD and MicroStation",
      "Proficiency in STAADPro or equivalent finite element analysis software. ",
      "Strong understanding of structural analysis software, computer-aided design (CAD) tools, and other relevant structural engineering software.",
      "Excellent computer skills in Microsoft Suite.",
      "Have a solutions-oriented attitude with strong attention to detail and the ability to work on multiple projects simultaneously",
      "Ability to use project management tools like Primavera or Microsoft Project.",
      "Project management and supervision skills",
      "Strong communication and interpersonal skills",
      "May assume the lead engineer’s role on assigned projects as well as serve as project engineer on smaller, less complex projects.",
      "Participate actively in in-house trainings for capacity building and development",
      "Proficiency in project management software such as Primavera P6, Microsoft Project or Synchro 4D Pro",
      "Skilled in Engineering drafting tools such as AutoCAD or MicroStation",
      "A minimum of BSc degree in Civil Engineering with not less than 3 years of working experience in civil or structural engineering.",
      "MSc degree in civil engineering and a license as a professional engineer will be an added advantage.",
      "Teamwork and Interpersonal Skills",
      "Multitasking and Time management skills",
      "Fast learning ability",
      "Analytical and problem-solving skills",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://apply.bizedgeapp.com/sherman-gray-limited/17460587445/2?panel=%22Job%20Details%22">HERE </a> to apply online',
    salary: "Not Specific",
    deadline: "Not specific",
  },
  {
    id: "Production Support Officer",
    title: "Production Support Officer",
    date: "2026-04-14 ",
    location: "Port Harcourt, Rivers",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "We are looking for a detail-oriented and proactive Production Support Officer with at least 1–2 years experience in inventory, store ops, or finance/admin.",
    responsibilities: [
      "Work closely to monitoring operation.",
    ],
    requirements: [
      "HND / BSc in Accounting, Business Admin, Supply Chain, or related field",
"1–2 years post-NYSC experience in inventory, store ops, or finance/admin (QSR/retail a plus)",
"Strong proficiency in SAP/ERP & Microsoft Office (Excel, Word, PowerPoint)",
"High accuracy, attention to detail & excellent communication skills",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:careers@foodconceptsplc.com ">careers@foodconceptsplc.com </a> using “Production Support Officer” as the subject of the mail.',
    salary: "Not Specific",
    deadline: "Not specific",
  },
  {
    id: "Procurement Officer",
    title: "Procurement Officer",
    date: "2026-04-14",
    location: "Ikoyi, Lagos ",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "We are looking for a Procurement Officer to develop and implement procurement policies and strategies to align with business objectives.",
    responsibilities: [
      "-Procurement Strategy & Cost Optimization",
 "-Identify and negotiate with suppliers for cost-effective purchasing while ensuring quality standards.",
"Source and procure food ingredients, beverages, packaging, and operational supplies in line with approved specifications.",
"Identify and onboard reliable vendors, ensuring competitive pricing and consistent quality",
"Negotiate contracts and pricing agreements to achieve cost efficiencies",
"Secure competitive pricing and favorable contract terms while eliminating substandard products.",
"Ensure timely procurement of goods and services by maintaining efficient order processing and delivery schedules.",
"Monitor and assess supplier performance, tracking delivery timelines, product quality, and contractual compliance.",
"Ensure vendors comply with food safety, quality, and delivery standards",
"Resolve supply chain issues proactively to avoid operational disruptions",
"-Conduct market research to identify new sourcing opportunities and industry trends.",
"-Ensure regulatory compliance in all procurement activities.",
"-Ensure all procured items meet food safety, hygiene, and regulatory standards",
"-Work closely with HSE and kitchen teams to ensure compliance with internal and statutory requirements",
"-Maintain accurate procurement documentation and audit trails",
"-Maintain comprehensive records of all procurement activities, including purchase orders, supplier contracts, pricing agreements, and vendor performance reports.",
    ],
    requirements: [
      "-Bachelor’s degree in Procurement, Supply Chain Management, Business Administration, or a related field.",
"-5 years of experience in procurement, supply chain, or vendor management.",
"-Strong knowledge of procurement regulations, cost analysis, and contract negotiation.",
"-Experience in real estate, hospitality, or corporate procurement is a plus.",
"-Excellent problem-solving, and communication (written and oral) skills.",
"-Good computer skills: MS Excel, MS Word & Power Point, Zoom.",
"-Excellent negotiation and vendor management skills.",
"-Strong analytical and problem-solving abilities.",
"-Proficiency in procurement software and reporting tools.",
"-Ability to work in a fast-paced environment and manage multiple priorities.",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://forms.gle/ZYYEeCu9iihuBL7AA">HERE</a> to apply online',
    salary: "500,000 monthly net",
    deadline: "Not specific",
  },
  {
    id: "Architect",
    title: "Architect",
    date: "2026-04-14",
    location: "Port Harcourt, Rivers",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "We are looking for a creative who can conceptualize, plan and develop designs for the construction and renovation of commercial, institutional and residential buildings. The architect's responsibilities include developing and presenting design proposals, preparing drawings, specifications and construction documents.",
    responsibilities: [
      "Meet with clients and determine their needs and requirements.",
"Prepare architectural drawings, 3D models, and specifications.",
"Develop and present project proposals",
"Adjust designs and plans to meet the client’s needs.",
"Prepare drawings, blueprints, specifications, and construction documents.",
"Conduct site inspections to ensure design compliance.",
"Collaborate with engineers, contractors, and clients.",
"Assist in cost estimation and project presentations.",
    ],
    requirements: [
      "Must have a minimum of Bachelor’s Degree in Architecture with 2 to 5 years of work experience",
"Previous experience as an Architect preferred.",
"Proficiency in Microsoft Office, AutoCAD, Revit and SketchUp.",
    ],
    apply:
      'Interested and qualified candidates should click <a href="mailto:https://apply.bizedgeapp.com/sherman-gray-limited/17460587445/7?panel=%22Job%20Details%22">HERE</a> to apply online',
    salary: "Not Specific",
    deadline: "Not specific",
  },
  {
    id: "Production Manager",
    title: "Production Manager",
    date: "2026-04-14",
    location: "Agege, Lagos",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "The Production Manager will oversee all manufacturing operations, ensuring efficient production processes, adherence to quality standards, and compliance with regulatory requirements. The role requires a strong leader with hands-on experience in pharmaceutical or regulated manufacturing environments.",
    responsibilities: [
      "Plan, organise, and manage daily production activities to meet output targets",
      "Develop and implement production schedules in line with demand forecasts",
      "Ensure optimal utilisation of manpower, machinery, and materials",
      "Monitor production performance and implement improvements",
      "Ensure compliance with Good Manufacturing Practices (GMP) and regulatory standards",
      "Work closely with Quality Assurance and Quality Control teams",
      "Ensure all production processes meet required safety and quality standards",
      "Maintain proper documentation and batch records",
      "Identify and implement process improvements to increase efficiency and reduce waste",
      "Monitor production KPIs and drive continuous improvement initiatives",
      "Optimise production costs while maintaining product quality",
      "Lead, supervise, and develop production staff",
      "Ensure proper training and adherence to standard operating procedures (SOPs)",
      "Foster a culture of safety, accountability, and high performance",
      "Ensure proper operation and maintenance of production equipment",
      "Collaborate with the engineering and maintenance team to minimise downtime",
      "Plan preventive maintenance schedules",
      "Enforce strict compliance with health and safety policies",
      "Ensure a safe working environment for all staff",
      "Conduct safety audits and risk assessments",
      "Coordinate with the supply chain to ensure the availability of raw materials",
      "Monitor inventory levels and minimise production disruptions",
      "Reduce wastage and ensure proper material handling",
      "Prepare and present production reports daily, weekly, monthly",
      "Track production metrics and provide performance insights to management",
      "Maintain accurate production records and documentation",
    ],
    requirements: [
      "Bachelor’s Degree in Pharmacy, Microbiology, Biochemistry, Chemical Engineering, or related field",
      "A master’s degree is an added advantage",
      "8 to 12 years’ experience in production or manufacturing",
      "At least 3 to 5 years in a managerial role",
      "Experience in pharmaceutical, animal health, or regulated manufacturing environment",
      "Strong understanding of GMP and regulatory standards",
      "Strong production planning and process management skills",
      "Knowledge of pharmaceutical or vaccine production processes",
      "Excellent leadership and team management skills",
      "Strong problem-solving and decision-making ability",
      "Good communication and reporting skills",
      "Ability to work under pressure and meet deadlines",
      "Knowledge of HSE standards and compliance",
      "Proficiency in MS Office and production management systems",
      "Strong attention to detail and quality control",
      "High level of integrity and accountability",
      "Proactive and result-driven",
  "Strong work ethic and dependability",
"Attention to detail",
"Team-oriented mindset",
"Commitment to safety and quality.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:job@dslpharma.com">job@dslpharma.com </a> using the job title as the subject of the mail.',
    salary: "Not specfied",
    deadline: "31st May, 2026.",
  },
  {
    id: "Radiography Technician",
    title: "Radiography Technician",
    date: "2026-04-14",
    location: "Lagos",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "The Radiographer Technician is responsible for performing diagnostic imaging procedures including X-rays and other radiographic examinations to support accurate medical diagnosis and treatment. The role ensures high-quality imaging, patient safety, radiation protection, and proper equipment handling while adhering to regulatory and professional standards.",
    responsibilities: [
      "Perform radiographic procedures (X-rays and related imaging) as requested by physicians",
      "Ensure proper patient positioning and imaging techniques for accurate results",
      "Follow established imaging protocols and standard operating procedures (SOPs)",
      "Ensure timely completion of imaging procedures to support clinical decisions",
      "Prepare and educate patients on imaging procedures",
      "Ensure patient comfort, dignity, and confidentiality at all times",
      "Screen patients for contraindications (e.g., pregnancy, medical history)",
      "Monitor patients during procedures to ensure safety.",
      "Adhere strictly to radiation safety standards and ALARA (As Low as Reasonably Achievable) principles",
      "Use protective equipment (lead aprons, shields) appropriately",
      "Ensure compliance with regulatory bodies and safety guidelines",
      "Monitor and record radiation exposure levels.",
      "Operate radiography equipment safely and efficiently",
      "Perform routine equipment checks and basic troubleshooting",
      "Report faults and coordinate maintenance or repairs promptly",
      "Ensure proper calibration and optimal functioning of equipment.",
      "Ensure high-quality diagnostic images with minimal errors",
      "Review images for clarity and accuracy before submission",
      "Support radiologists/physicians with required imaging data",
      "Ensure proper labelling and identification of all images.",
      "Maintain accurate patient imaging records and logs",
      "Ensure proper storage and retrieval of imaging results",
      "Document procedures, exposures, and patient details accurately",
      "Maintain confidentiality of patient data.",
      "Prepare daily reports on imaging activities and workload",
      "Identify and report equipment issues or operational risks",
      "Ensure incident reporting and proper documentation",
      "Take accountability for imaging accuracy and patient safety",
    ],
    requirements: [
      "Diploma or Bachelor’s Degree in Radiography or Medical Imaging",
      "Valid practicing license from the Radiographers Registration Board of Nigeria (RRBN)",
      "2 - 3 years relevant experience",
      "Experience in a diagnostic laboratory or hospital setting is an advantage",
      "Knowledge of digital imaging systems is preferred",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:workforce.sm@247kpg.com">workforce.sm@247kpg.com </a> using “Radiography Technician” as the subject of the mail.',
    salary: "Not specific",
    deadline: "30th June, 2026.",
  },
  {
    id: "Electrical Technician",
    title: "Electrical Technician",
    date: "2026-04-14",
    location: "Ikeja, Lagos",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "We’re seeking a competent and experienced Electrical Technician to join our Depot Operations team. The ideal candidate will be responsible for maintaining, troubleshooting, and ensuring the efficient operation of electrical systems and equipment within the depot.",
    responsibilities: [
      "Install, maintain, and repair electrical systems and equipment",
"Conduct routine inspections and preventive maintenance of electrical components",
"Diagnose faults and carry out corrective actions promptly",
"Ensure compliance with safety standards and operational procedures",
"Maintain accurate records of maintenance and repairs",
"Support operational efficiency within the depot",
"Respond to electrical breakdowns and emergencies as required",
    ],
    requirements: [
      "Minimum of OND in Electrical Engineering",
"3–5 years relevant experience in a similar role",
"Experience in depot, industrial, or oil & gas environment is an added advantage",
"Strong knowledge of electrical systems, maintenance, and troubleshooting",
"Ability to read and interpret electrical diagrams and schematics",
"Familiarity with safety and compliance standards.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:recruitment@beckleyconsulting.com">recruitment@beckleyconsulting.com </a> using the job title as the subject of the mail.',
    salary: "N541,666.67 (Gross Monthly).",
    deadline: "28th April, 2026.",
  },
   {
    id: "Operations Associate (Fintech)",
    title: "Operations Associate (Fintech)",
    date: "2026-04-13",
    location: "Lagos",
    type: "Remote",
    seniority: "Senior",
    summary:
      "We are looking for a detail-oriented and proactive Operations Associate with at least 3 years of hands-on experience in Fintech Operations to join our team.",
    responsibilities: [
      "Work closely with the operations team to ensure smooth and efficient execution of daily tasks.",
    ],
    requirements: [
      "Strong understanding of fintech operations and processes",
      "Excellent problem-solving and organizational skills",
      "Ability to work independently in a remote environment.",
      "Dutiful, committed and responsible.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:Hr@expedier.co">Hr@expedier.co</a> using “Operations Associate – Fintech” as the subject of the mail.',
    salary: "₦250,000 – ₦300,000 (Net)",
    deadline: "Not specific",
  },
   {
    id: "Customer Success & Sales Manager (Onsite)",
    title: "Customer Success & Sales Manager (Onsite)",
    date: "2026-04-13",
    location: "Garki Area 2, Abuja",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are seeking a smart, confident, and results-driven professional with a proven track record in sales and client management. The ideal candidate will be responsible for driving revenue, managing client relationships, and closing high-value deals",
    responsibilities: [
      "Driving revenue",
      "Managing client relationships",
      "Closing high-value deals",
    ],
    requirements: [
      "Female candidates are preferred",
      "Proven record of successful sales closures (evidence required)",
      "Knowledge of IT, PR, or Branding",
      "Excellent communication and negotiation skills",
      "Strong interpersonal and client management ability",
      "Well-presented, confident, and proactive",
    ],
    apply:
      'Interested and qualified candidates should send their CV Proof of past sales,  Portfolio (if available),  LinkedIn profile and other relevant social media handles via WhatsApp to: <a href="https://wa.me/2349152146130">09152146130</a>',
    salary: "₦120,000 – ₦150,000 + Commission",
    deadline: "Not specific",
  },
   {
    id: "executive-assistant-lekki",
    title: "Executive Assistant",
    date: "2026-04-13",
    location: "Lekki Phase 1, Lagos",
    type: "Hybrid",
    seniority: "Senior",
    summary:
      "We are seeking an experienced *Executive Assistant* to provide high-level administrative support to our senior management team. The ideal candidate is proactive, detail-oriented, and thrives in a fast-paced environment. ",
    responsibilities: [
      "Provide comprehensive administrative support to senior management",
      "Manage executive calendars, schedule appointments, and coordinate travel arrangements",
      "Prepare, edit, and format documents, reports, and presentations",
      "Conduct research and data analysis as required",
      "Liaise with clients, vendors, and internal team members",
      "Handle confidential information with discretion",
    ],
    requirements: [
      "3-5 years of proven experience as an Executive Assistant or similar role",
      "Excellent written and verbal communication skills",
      "Strong organizational and time-management abilities",
      "Proficient in Microsoft Office Suite: Word, Excel, PowerPoint, Outlook",
      "Ability to work independently and collaboratively in a hybrid setup",
      "High level of professionalism and problem-solving skills",
    ],
    apply:
        'Interested and qualified candidates should send their CV to: <a href="mailto:resume@talentforgesolutions.com.ng">resume@talentforgesolutions.com.ng</a> using “Executive Assistant – Lekki Phase 1” as the subject of the mail.',
      salary: "₦250,000 per month",
    deadline: "Not specific",
  },
   {
    id: "internal-auditor-risk-manager",
    title: "Internal Auditor and Risk Manager",
    date: "2026-04-13",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "A leading player in the logistics and terminal operations sector is seeking an experienced Internal Auditor and Risk Manager to strengthen internal controls, enhance operational efficiency, and ensure regulatory compliance. This role requires a strategic thinker with a strong understanding of Logistics terminal operations, risk management, and financial integrity.",
    responsibilities: [
      "Identify, assess, and prioritize operational, financial, and compliance risks specific to logistics and terminal operations.",
"Maintain a comprehensive corporate risk register and develop strategies for effective risk mitigation.",
"Design and perform internal audits of business processes, financial records, and IT systems to assess the adequacy and effectiveness of internal controls.",
"Ensure adherence to external regulations, company policies, and industry best practices, while monitoring changes in the regulatory environment.",
"Document audit findings, irregularities, and potential fraud cases, and prepare detailed audit reports for senior management.",
"Collaborate with management to develop and implement remediation plans and follow-up actions on audit findings.",
"Support external auditors by providing relevant documentation and insights.",
"Recommend and implement improvements to internal control systems, operational procedures, and risk management processes.",
"Analyse data and trends to detect irregularities, discrepancies, and potential fraud.",
"Conduct due diligence and risk assessments for third-party vendors and business partners.",
"Promote a culture of integrity, transparency, and accountability across the organization",
    ],
    requirements: [
      "Bachelor’s degree in accounting, Finance, Business Administration, or a related field.",
      "8 - 12 years of experience in internal audit, risk management, or a related function, preferably within the logistics, terminal, or shipping industry.",
      "Professional certifications such as CIA, RMA, ACCA, CPA, or ACA are highly desirable.",
      "Strong analytical, investigative, and reporting skills, with proficiency in financial analysis and auditing methodologies.",
      "Sound understanding of logistics, terminal operations, and maritime sector risks and regulations.",
      "Excellent communication and interpersonal skills with a high level of integrity and attention to detail.",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://forms.gle/UUFYYrQCKnPW93e78">HERE</a> to apply online.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "electronics-trainee",
    title: "Electronics Trainee",
    date: "2026-04-07",
    location: "Port Harcourt, Rivers",
    type: "Full-time",
    seniority: "Junior",
    summary:
      "This role is ideal for HND graduates in Electrical/Electronic Engineering who have completed NYSC and are eager to build practical experience in a technical lab environment within the oil & gas industry.",
    responsibilities: [
      "Assist in testing, troubleshooting, and repairing electronic tools",
"Support calibration and maintenance of lab equipment",
"Document test results and prepare basic technical reports",
"Ensure compliance with safety and laboratory procedures",
    ],
    requirements: [
      "HND qualification in Electrical / Electronic Engineering or related fields",
"Completed NYSC (mandatory)",
"Basic knowledge of electronic circuits and test instruments",
"Strong attention to detail and willingness to learn.",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://forms.monday.com/forms/6ba2db88f2db38b57efada415ca35088?r=euc1&utm_source=">HERE</a> to apply online.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "structural-engineering-intern",
    title: "Structural Engineering Intern",
    date: "2026-04-07",
    location: "Iyana Ipaja, Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary:
      "We are seeking a motivated and detail-oriented Structural Engineering Intern to support our engineering team in the design, analysis, and execution of construction projects. This role provides hands-on experience in structural engineering practices, site operations, and technical documentation within a dynamic construction environment.",
    responsibilities: [
      "Assist in the preparation of structural designs, drawings, and calculations.",
"Support engineers in analyzing structures to ensure safety, stability, and compliance with design specifications.",
"Participate in site inspections and monitor construction activities to ensure adherence to approved plans.",
"Help prepare technical reports, project documentation, and progress updates.",
"Collaborate with project teams including architects, contractors, and other engineers.",
"Ensure compliance with industry standards, safety regulations, and company policies.",
"Conduct research and provide technical support on materials, methods, and engineering solutions.",
    ],
    requirements: [
      "Bachelor’s Degree in Civil or Structural Engineering with 0–2 years of relevant experience in Civil/Structural Engineering role.",
"Completion of NYSC is mandatory.",
"Basic knowledge of structural analysis and design principles.",
"Familiarity with engineering software such as AutoCAD, ETABS, or similar tools is an advantage.",
"Strong analytical and problem-solving skills.",
"Good communication and teamwork abilities.",
"Willingness to learn and adapt in a fast-paced environment.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:careers@worknigeria.com">careers@worknigeria.com</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "network-administrator",
    title: "Network Administrator",
    date: "2026-04-07",
    location: "Congo",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Network Administrator is responsible for ensuring the smooth operation, security, and optimization of the company’s network infrastructure. He or she ensures the availability, performance, and reliability of internal communication systems by performing network installation, configuration, monitoring, and maintenance tasks.",
    responsibilities: [
      "Administer, configure, and maintain network equipment.",
"Monitor the network infrastructure and respond to incidents.",
"Manage VLANs, VPNs, security policies, and access controls.",
"Install, configure, and update security solutions (antivirus, firewalls, IDS/IPS).",
"Ensure network availability and integrity, as well as service quality.",
"Document network architecture, procedures, and interventions.",
"Conduct performance tests and propose improvements.",
"Manage the backup and restoration of network configurations.",
"Provide Level 2/3 technical support to users and internal teams.",
"Participate in projects involving the evolution or migration of the IT infrastructure.",
"Ensure compliance with IT security policies and standards.",
"Participate in cybersecurity risk assessments.",
"Ensure network availability to support industrial operations and production continuity.",
    ],
    requirements: [
      "Bac+3/4 Degree in Computer Science, Networking, Telecommunications, or a related field",
"At least five (5) years of professional experience in a similar role within an industrial setting.",
"Experience with databases, networks (LAN, WAN), and patch management",
"Knowledge of system security (e.g., intrusion detection systems) and data backup/recovery.",
"Ability to create scripts in Python, Perl, or other languages.",
"Knowledge of various operating systems and platforms.",
"Resourcefulness and problem-solving skills.",
"Analytical skills, attention to detail, customer service orientation, and responsiveness.",
"Ability to work under pressure and handle critical situations.",
"Excellent communication skills.",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://careers.dangote.com/job/Dangote-Cement-R-Congo-Network-AdministratorAdministrateur-R%C3%A9seaux-Dang/1355635457/">HERE</a> to apply online',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "automation-technician",
    title: "Automation Technician",
    date: "2026-04-03",
    location: "Nigeria",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Provide expertise to support technical operations and maintenance of plant and machinery in line with the company’s operational plans and strategy to ensure efficiency of production and sservices.",
    responsibilities: [
      "Provide expertise to support technical operations and maintenance of plant and machinery in line with the company’s operational plans and strategy to ensure efficiency of production and sservices",
    ],
    requirements: [
      "Minimum of ND in (Electrical/Electronic Engineering)",
"Minimum of 5 years cognate experience",
"Experience in TETRAPAK TCA1 filler will be added advantage",
"Must have work in FMCG specifically Food & Nutrition business.",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://careers.frieslandcampina.com/global/en/vacancy/automation-technician">HERE</a> to apply online',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "planning-manager",
    title: "Planning Manager",
    date: "2026-04-03",
    location: "Nigeria",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Lead a professional Planning function across Caraway Nigeria Biscuits Confectionary and Snacks operations to maximise service levels to customers while optimizing stocks. Caraway is centered around West Africa and now has 7 Manufacturing Plants in Nigeria across 6 product categories – Tomato Paste, Seasonings, Instant Noodles, Biscuits, Beverages, and Sweets & Candies",
    responsibilities: [
      "The planning Manager Biscuits Confectionary and Snacks will have the responsibility for Material planning, Supply planning, coordination of the S&OP process, and will facilitate demand planning across the designated categories.",
"Compliance to planning policies including inventory policy, and categorization of finished goods and raw and packaging material and align with the system integration.",
"Manage stock levels within agreed policy levels for material and finished goods",
"Facilitate the demand planning process for all the appropriate categories, focusing on eliminating bias and improving forecast accuracy. ",
"Production planning taking account of demand planning, supply chain policy, capacity limitations, and other production constraints",
"Materials requirement Planning. Create and maintain the materials requirement plan. Establish material safety stock and reorder levels with accurate lead times. Implement stock plans to achieve stock targets on materials and finished goods.",
"Master Production Scheduling",
"Distribution requirement planning / replenishment",
"Evaluate risks and opportunities creating contingencies and making decisions",
"Capacity management planning",
"Drive business planning, and in particular, the annual volume planning process which includes interfacing closely with sales, Marketing and finance to ensure timeous delivery.",
"Support innovation teams in launching new products",
"Develop and train the Demand planners and supply planners across all operations",
    ],
    requirements: [
      "Consumer companies with positions covering Demand Planning, Supply Planning, Stock Management and Primary Distribution. Experience of Lean, Six Sigma and/or TPM strongly preferred.",
"Strong analytical skills",
"Knowledge of SAP or any ERP is required.",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://careers.olamgroup.com/job/OKFOOD-1-Planning-Manager/1056677366/">HERE</a> to apply online',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "hemm-technician-mines",
    title: "HEMM Technician – Mines",
    date: "2026-04-03",
    location: "Ibese, Ogun",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Responsible for ensuring that plant heavy equipment are in safe operating condition by conducting routine maintenance and scheduling needed repairs.",
    responsibilities: [
      "To carry out all types of repairs (emergency/running) and daily/periodic preventive maintenance of various make & types of heavy duty equipment , utilities, plants/vehicles in accordance with manufacturer’s guidance/recommendation and safe operating procedures to ensure optimum utilization and availability.",
"To ensure proper housekeeping during and after completion of jobs.",
"To give adequate on- the- job training to junior technician/helpers in order to develop them professionally.",
"To always ensure safety in using material handling equipment, tools etc.",
"Carry out performance appraisal and practical assessment of junior technicians/helpers/intending staff for promotion and employment respectively.",
"To use all the PPE as recommended by the Safety Policy of the company and report to the authorities concerned regarding the accidents and near miss incident.",
"To suggest to the management methods of improvements of maintenance practices.",
"To ensure consistent availability of HEMM for operation without interruption.",
"To diagnose the problem on diesel engine, hydraulic & transmission system and to initiate remedial actions appropriately.",
"To assist the supervisor/engineer for the spare parts planning.",
"Proper handling of tools provided them and to ensure right usage. Also responsible for getting the right tools for jobs at hand.",
    ],
    requirements: [
      "Should have a valid DRIVING LICENCE.",
"Compliance with ISO regulations.",
"SSCE, National Diploma, Trade test-1, 2 & 3 in Mechanical Fitting / Mechanical Equipment Maintenance.",
"3 – 10 years experience in HEMM and LMV.",
"Knowledge of repair and maintenance of plant heavy equipment.",
"Good oral and written communication skills.",
"Good teaming skills.",
"Baseline problem analysis and solving skills.",
"Creativity and an ability to think out of the box.",
"Proficiency in the use of office productivity tools.",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://careers.dangote.com/job/Ibese-Plant-HEMM-Technician-Mines-Ibes/1329280257/">HERE</a> to apply online',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "mill-engineer-40000tcd-mill-operation",
    title: "Mill Engineer – 40000TCD Mill Operation",
    date: "2026-04-03",
    location: "Adamawa",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Mill Engineer will be responsible for overseeing the technical operations of the mill, ensuring efficient and safe production of high-quality sugar. This challenging and rewarding role requires strong technical expertise, leadership skills, and the ability to work effectively in a multicultural environment.",
    responsibilities: [
      "Supervise daily milling operations to achieve targeted crushing capacity (4000 TCD).",
"Monitor and control process parameters to maximize sugar recovery and minimize losses.",
"Ensure compliance with safety, environmental, and quality standards.",
"Develop and implement preventive and predictive maintenance schedules for mill machinery.",
"Troubleshoot mechanical issues and coordinate timely repairs to minimize downtime.",
"Oversee spare parts inventory and procurement planning.",
"Analyze milling performance data and recommend improvements in efficiency and throughput.",
"Implement best practices in cane preparation, juice extraction, and energy utilization.",
"Lead, mentor, and train local engineering and technical staff.",
"Ensure effective communication across departments (boiler, process house, power generation).",
"Prepare technical reports, budgets, and performance reviews for senior management.",
    ],
    requirements: [
      "Shall hold the minimum of B-Tech / BE / BSc / HND in Mechanical Engineering.",
"COREN, NSE or any related professional qualification.",
"Certificate on Sugar Engineering will be an added advantage.",
"8 – 12 years of experience in mill operation and maintenance within a sugar or similar process industry.",
"Effective Communication and People management skills",
"Conflict Resolution, Negotiation,  Presentation and Project Management Skills",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="https://careers.dangote.com/job/SSC-P-Numan-Mill-Engineer-4000TCD-Mill-operation-SSC/1355392657/">HERE</a> to appply online',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "machinery-officer",
    title: "Machinery Officer",
    date: "2026-04-03",
    location: "Adamawq",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Machinery Officer plays a crucial role in ensuring total availability equipment for land preparation are ready in good working condition, organize manpower, labour& report to Land Development Manager.",
    responsibilities: [
      "Coordinate with HTMS for repairs, either by in-house maintenance staff or external service providers. Ensure that repairs are completed promptly and effectively to minimize production interruptions.",
"Follow up machine maintenance & Monitor machinery performance metrics such as uptime, efficiency, and output. Identify areas for improvement and implement measures to optimize machinery performance.",
"Ensure daily fuel reservation & machinery operators follow safety protocols, operational procedures, and maintenance schedules.",
"Ensure timely completion of Land preparation as instructed.",
"Identify machine challenges and implement measures to optimize machinery performance",
    ],
    requirements: [
      "Shall hold the minimum of B. Sc. In Engineering",
"Any relevant Professional Certification is an added advantage.",
"2-6 Years in Sugar Farm Machinery",
"Effective Communication skills",
"People management skills",
"Conflict Resolution Skills",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://careers.dangote.com/job/SSC-P-Numan-Machinery-Officer-SSC/1355393957/">HERE</a> to apply online.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "project-coordinator",
    title: "Project Coordinator",
    date: "2026-04-03",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are hiring a Project Coordinator who will beresponsible for identifying, engaging, and onboarding small businesses within Lagos Mainland to participate in a community-focused initiative that supports small businesses/solopreneurs by providing access to manpower and recruitment support at no cost for a limited period.",
    responsibilities: [
      "Identify small businesses and solopreneurs within target mainland locations.",
"Conduct physical visits and outreach to introduce the Project.",
"Explain the initiative clearly, including benefits and expectations.",
"Assess suitability based on eligibility criteria.",
"Schedule and coordinate recorded interviews.",
"Serve as the communication bridge between the internal team and participating businesses.",
"Ensure timely availability and preparedness of business owners.",
"============================",
"Ideal Candidate Profile",
"Is confident speaking to business owners and decision-makers.",
"Has strong persuasion and negotiation skills.",
"Is highly organized and self-driven.",
"Can work independently with minimal supervision.",
"Understands small business challenges and growth constraints.",
"Is comfortable working in a field-based role..",
    ],
    requirements: [
      "A Bachelor’s Degree or the academic equivalent is a huge advantage with 1–2 years experience in business development, sales, community engagement, project coordination, or similar roles.",
"Strong verbal communication skills.",
"Professional appearance and conduct.",
"Ability to meet performance targets.",
"Must be based on Lagos Mainland",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="http://forms.fillout.com/t/u7piwfGqnsus">HERE</a> to apply online',
    salary: "N150,000 / month.",
    deadline: "31st April, 2026.",
  },
  {
    id: "mechanical-craftsman",
    title: "Mechanical Craftsman",
    date: "2026-04-03",
    location: "Port Harcourt, Rivers",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The ideal candidate will execute daily Mechanical preventative maintenance work routines (PMR’s) and corrective maintenance work on a priority basis to the facilities as directed by Supervision, to meet work programs, safety requirements and quality standards.",
    responsibilities: [
      "To provide efficient and effective Technical Mechanical Maintenance Support Services for the company’s Utilities / facilities at the HO in Port Harcourt ",
"To carryout Pre-Mob of Vehicle prior to accessing the company facilities",
"Strictly adheres to the Permit to Work system and carries out work fully complying with safety precautions and requirements as detailed and directed.",  
"Executes routine and preventive maintenance activities on Power Generators and other associated mechanical engines / equipment at the HO.  ",
"Uses technical expertise and proven competence to effectively achieve work plan objectives especially in Vehicle Pre-Mob.  ",
"Removes and installs plant equipment, operates machine tools and other equipment as required by the repair process, such as, generators, lifting pumps, fan motors, etc.  ",
"Completes his work in accordance with Engineering Quality system requirements, by following procedures and work instructions in the discharge and dispensing of hydrocarbons at the Base ",
"Assists in ensuring proper and timely implementation of simple changes on Mechanical equipment as may be applicable. ",
"Assists in ensuring the availability of spare parts for Mechanical systems. ",
"Execute minor mechanical repair works not covered by any contract at the HO.",
    ],
    requirements: [
      "City & Guild’s level 3 / Trade Tests / OND Mechanical ",
"5 years working experience with 3years experience in building and facilities maintenance preferably in Oil & Gas",
    ],
    apply:
      'Interested and qualified candidates should click <a href="https://forms.office.com/pages/responsepage.aspx?id=Q3tsMP0RxkG9RqxMidmbN_7v3bQBtUFIsCV2v0nDS8NUOE1aWUxPSDlDWEY1VFhSRU81MFlSME8zVC4u&route=shorturl&utm_source=HNJ"> HERE </a> and send their CV to: <a href="mailto:careers@doverengineering.com">careers@doverengineering.com</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "lifting-rigging-work-planner",
    title: "Lifting & Rigging Work Planner",
    date: "2026-04-03",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "To improve work force productivity and work quality by anticipating and eliminating potential delays through  planning and coordination of labor, parts and material, and equipment access.",
    responsibilities: [
      "Perform Long-range planning: regular analysis of backlog relative to available resources. ",
"Perform Short-range planning: Screen all work orders except emergency notifications, in assigned  area of responsibility to see that the work order accurately defines the scope of work, meets the Criteria for the assigned priority, and is a valid request for work to be performed by maintenance  personnel and financed by the applicable expense budget.",
"Plan work initiated through various stakeholders, ensuring that the required resources are available  and work is carried out in line with Asset Maintenance Plans, asset criticalities and Service Level Agreements (where applicable).",
"Review and Schedule all PM (Preventive Maintenance) activities.",
"Prepare work packages for every planned maintenance activity while considering HSSE, cost and  time.",
"Maintain a library of norms for all work packages used during work execution.",
"Record critical information from feedback form for the future following execution of the work, ",
"Reference including correction of any parts related data, identification of the failure code for the work  involved, update any reusable job plans as needed, capture of any data specific to the job and  included in the PACER record.",
"Support the IAPS focal person to develops functional Integrated Activity Plan/Schedule (IAPS) under  AMS.",
"Review the shutdown approved Scope list from NLNG Turnaround that may impact resource  allocation for routine maintenance work orders in PMS. ",
"Perform field visits to verify work is executed as planned.",
    ],
    requirements: [
      "A HND National Diploma / Bachelor’s Degree in Mechanical or Civil Engineering Discipline plus ",
"Computer Literacy.",
"A minimum of 3 years working experience as a Planner with an Engineering, Maintenance or Project management team in the Oil & Gas industry.",
"Must be CISRS certified.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="careers@doverengineering.com">careers@doverengineering.com </a> using the job title as the subject of the mail.',
    salary: "Not specified",
    deadline: "Not specific",
  },
  {
    id: "lifting-rigging-engineer",
    title: "Lifting & Rigging Engineer",
    date: "2026-04-03",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The ideal candidate will demonstrate a high level of safety awareness to ensure all subcontractors are aware of lifting standards; to proactively support the contractor whoever needs to improve and maintain HSE performance.",
    responsibilities: [
      "As required by the business, MUST have the competency to generate lifting plans that has comprehensive engineering analysis, design consideration and requisite loading and crane schematics in line with best practice.",
"Carry out review of all Simple, Complicated, Critical, Tandem and Complex lifting plan prior to submittal to Client Technical Authority (TA) for approval as per the company policies and procedures.",
"Support delivering in-house training when the need arises. This may take the form of formal or informal courses delivered by HR",
"Facilitate the review and assess competency of the lifting and rigging teams involved in the shutdown activities to ensure availability, adequacy, and validity of the required level of expertise to perform the assigned tasks including training and qualifications",
"Coordinate and manage in accordance with assigned Roles and Responsibilities as per Company policies and procedures",
"Ascertains that equipment is operable and performed according to standard safety norms and to resolve any unexpected technical difficulties /challenges & other problems that may arise during execution time.",
"Support field personnel (supervisors, riggers) in the analysis and assessment of risk related activities and provide required technical expertise as and when necessary.",
"Support and Monitor (as required), in bridging the competence gaps of Contractor parties involved in the rigging & lifting process.",
"Carry out oversight function of the rigging and lifting Loft. Including facilitation of inspection and certification rigging & lifting gears and compliance with statutory regulations.",
    ],
    requirements: [
      "BSc / BE / B.Tech. / HND in Mechanical or Civil Engineering with extensive rigging, loading and structural analysis experience.",
"Professional Qualification: IADC / LOLER/ OPITO/ LEEA (Appointed Person for lifting Operations); AutoCad proficiency (Mandatory)",
"5-10years’ work experience as Heavy Lifting Engineer, 7 years minimum within the Oil and Gas industry for maintenance and/or construction operation. He or she must have good interpersonal skills, be self-sufficient and adaptable, confident in site work situations and can work under pressure",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:careers@doverengineering.com">careers@doverengineering.com</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "plant-manager-power-generation-distribution",
    title: "Plant Manager (Power Generation & Distribution)",
    date: "2026-04-03",
    location: "Ibeju-Lekki, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Plant Manager is responsible for the planning, operation, maintenance, and expansion of the power generation and electrical distribution network within an industrial zone. The role ensures a safe, reliable, and efficient power supply to tenants and infrastructure while maintaining compliance with Nigerian regulatory standards.",
    responsibilities: [
      "Manage daily operations of power generation units and electrical distribution systems, including substations, switchgear, transformers, and LV networks.",
"Ensure reliable power supply and monitor system load, power quality, and network stability.",
"Implement preventive and corrective maintenance for power generation and distribution assets.",
"Coordinate new power connections, load approvals, and metering for tenants.",
"Ensure compliance with regulatory standards and enforce electrical safety procedures.",
"Support planning and execution of network expansion and capacity upgrades.",
"Lead and supervise engineers, technicians, and contractors.",
"Prepare operational reports and coordinate with internal teams on power operations and maintenance.",
    ],
    requirements: [
      "Bachelor’s degree in Electrical Engineering (Master’s degree is an advantage).",
"8–10 years of experience in power generation, distribution, or industrial utilities.",
"At least 2 years of managerial or supervisory experience.",
"Strong experience with medium-voltage networks, substations, and industrial power systems.",
"Experience in industrial zones, utilities, or infrastructure projects is an advantage.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:CV@ascentech.com.ng">CV@ascentech.com.ng</a> using the job title as the subject of the mail.',
    salary: "Not Specific",
    deadline: "Not specific",
  },
  {
    id: "machinery-engineer-specialist-ii",
    title: "Machinery Engineer / Specialist II",
    date: "2026-04-03",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The ideal candidate will evaluate and provide input on engineering work performed internally and by contractors to ensure compliance with company standards, specifications, and regulatory requirements.",
    responsibilities: [
      "Facilitate discipline engineering and design routines while ensuring effective communication across teams.",
"Strong technical, communication, and interpersonal skills are essential.",
"Collaborate with engineering, operations, and mechanical teams.",
"Identify reliability improvements to maximize equipment uptime and reduce maintenance costs.",
"Specify new rotating equipment in line with industry and company standards.",
"Ensure safe, cost-effective, and operable machinery and associated systems.",
    ],
    requirements: [
      "Bachelor’s Degree in Mechanical Engineering or related field (or equivalent experience).",
"Strong knowledge of design standards, codes, specifications, and safety criteria.",
"Ability to adapt to tight deadlines and changing priorities.",
"Proficient in Microsoft Office; excellent English communication skills.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hesprojectrecruitment@gmail.com">hesprojectrecruitment@gmail.com </a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "risk-loss-prevention-engineer-specialist-ii",
    title: "Risk & Loss Prevention Engineer / Specialist II",
    date: "2026-04-03",
    location: "Akwa Ibom",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The ideal candidate will evaluate engineering work and ensure compliance with project specifications, company standards, and regulations. Facilitate effective engineering routines and maintain clear communication with project teams. Strong technical, interpersonal, and communication skills are required.",
    responsibilities: [
      "Participate in or lead risk studies and consequence analyses.",
"Develop and update safety standards, codes, and documented practices.",
    ],
    requirements: [
      "Bachelor’s Degree in Engineering or equivalent experience.",
"Experience in Environmental, Health & Safety and Loss Prevention.",
"Broad knowledge of design standards, codes, specifications, and safety criteria.",
"Adaptability to tight deadlines and heavy workloads.",
"Proficient in Microsoft Office; excellent English communication skills.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hesprojectrecruitment@gmail.com">hesprojectrecruitment@gmail.com </a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "instrumentation-controls-lead-iii-offshore-rotation",
    title: "Instrumentation and Controls Lead III – Offshore Rotation",
    date: "2026-04-03",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Instrumentation and Controls Lead III – Offshore Rotation will define scope for pre-commissioning and commissioning activities, assign workloads, and implement standards/procedures for instrumentation across all project phases. Support centralized engineering services for upstream production units and new capital projects to maintain system safety, availability, and reliability while optimizing costs.",
    responsibilities: [
      "Liaise with customers, vendors, engineers, and multidisciplinary teams.",
"Participate in HAZOP/LOPA and quality reviews.",
"Review and approve instrumentation engineering deliverables, including P&IDs, datasheets, wiring, loop drawings, and calculations.",
"Support project Acceptance Testing (AT) and adjust commissioning scope accordingly.",
"Develop, track, and adjust commissioning execution schedules",
    ],
    requirements: [
      "MS or advanced Degree in Electrical / Mechanical Engineering or equivalent.",
"Previous supervisory or related experience.",
"Extensive knowledge of design standards, codes, and safety criteria.",
"Skilled in instrument selection, control systems, P&IDs, logic diagrams, and ISA datasheets.",
"Proficient in SAP, Tableau, Analytics for Excel, and Microsoft Office.",
"Excellent English communication skills; adaptable to tight deadlines and heavy workloads.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hesprojectrecruitment@gmail.com">hesprojectrecruitment@gmail.com</a> using the job title as the subject of the mail.',
    salary: "Not specific.",
    deadline: "Not specific",
  },
  {
    id: "instrument-maintenance-technician-iii",
    title: "Instrument Maintenance Technician III",
    date: "2026-04-03",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Instrument Maintenance Technician III will Install, maintain, test, and repair instrument equipment in compliance with company rules, ensuring optimal performance and product quality. Document all issues and corrective actions accurately.",
    responsibilities: [
      "Plan, update, and oversee activities in line with laws, regulations, and company procedures.",
"Support cross-functional collaboration between operations, engineering, and projects.",
"Provide technical support, maintain instruments, and troubleshoot control systems.",
"Attend technical meetings and develop team skills.",
"Act as a stand-in for the Instrument Lead as needed.",
    ],
    requirements: [
      "Associate Degree with technical certifications.",
"Experience maintaining instruments and controls in processing or offshore production plants.",
"Strong safety orientation, communication, organizational, and troubleshooting skills.",
"Knowledge of oil & gas regulations, oi systems, and maintenance best practices.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hesprojectrecruitment@gmail.com">hesprojectrecruitment@gmail.com</a> using the job title as the subject of the mail.',
    salary: "Not Specific",
    deadline: "Not specific",
  },
  {
    id: "structural-design-engineer-construction-industry",
    title: "Structural Design Engineer (Construction Industry)",
    date: "2026-04-03",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The ideal candidate will have a strong understanding of structural engineering principles, construction methods, and project management. You will collaborate with architects, contractors, and other engineering disciplines to ensure accurate and efficient implementation of structural designs on-site.",
    responsibilities: [
      "Review and interpret structural design plans to ensure compliance with building codes and project requirements.",
"Collaborate with project managers, architects, and construction teams to develop methodologies and schedules.",
"Conduct site visits to monitor progress and ensure adherence to design specifications and quality standards.",
"Provide technical guidance and support to the construction teams, addressing any issues during construction.",
"Perform structural calculations and analyses to validate the safety and integrity of designs.",
"Prepare and review construction documents, including shop drawings and change orders.",
"Evaluate materials and techniques to ensure cost-effectiveness and sustainability.",
"Inspect existing structures and recommend repairs or reinforcements as necessary.",
"Maintain accurate records, including reports on site conditions and compliance with safety regulations.",
"Stay updated on industry trends, technologies, and regulatory changes.",
    ],
    requirements: [
      "5 years of experience in Structural Engineering or a related field.",
"Professional Engineer (PE) license or ability to obtain licensure within a specified timeframe.",
"Expertise in structural engineering within construction, especially in commercial, residential, or infrastructure projects.",
"Proficiency in structural design software (AutoCAD, Revit, SAP2000, ETABS).",
"Strong knowledge of building codes, safety regulations, and construction standards.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:precious@ldd-consulting.com">precious@ldd-consulting.com</a> using the job title as the subject of the mail.',
    salary: "N800,000 / month.",
    deadline: "Not specific",
  },
  {
    id: "Graduate-Surveyor-Somolu",
    title: "Graduate Surveyor",
    date: "2026-04-02",
    location: "Somolu, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The ideal candidate will lead the design and supervision of civil and structural engineering projects, ensuring compliance with safety, quality, and industry standards, while mentoring younger engineers and contributing to innovative, sustainable solutions.",
    responsibilities: [
      "Assist with leveling, traversing & topographical surveys",
"Operate Total Station, Levels & GNSS equipment (under supervision)",
"Process & reduce field data accurately",
"Prepare survey drawings using AutoCAD/Civil 3D",
"Maintain survey logs, records & documentation",
"Structured training on GIS, photogrammetry & survey software",
    ],
    requirements: [
      "B.Sc / B.Techin Surveying, Geomatics, Geoinformatics, Geodetic/Mapping Sciences.",
"NYSC completed.",
"0–2 years experience (IT experience is an advantage).",
"Basic knowledge of survey instruments and techniques.",
"Introductory competence in AutoCAD / Civil 3D.",
"Good computer skills (MS Office).",
"Strong attention to detail, accuracy & willingness to learn.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hr@sop-consulting.com">hr@sop-consulting.com </a> using “Application –Graduate Surveyor” as the subject of the mail.',
    salary: "Not specific",
    deadline: "9th May, 2026.",
  },
  {
    id: "hse-officer-abuja",
    title: "HSE Officer",
    date: "2026-03-28",
    location: "Abuja",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The HSE Officer is responsible for the investigating/recording incidents, accidents, complaints and cases of ill health on site.",
    responsibilities: [
      "Undertaking risk assessments and site inspections.",
"Ensuring that equipment is installed correctly/safely.",
"Identifying potential hazards.",
"Determining ways of reducing risks.",
"Ensuring compliance with the health and safety policies stipulated by the company.",
"Writing internal health and safety policies/strategies.",
"Drawing-up safe operational practices and making necessary changes.",
"Writing reports, bulletins and newsletters on health and safety.",
"Providing health and safety meetings and training courses for employees.",
"Keeping up to date and ensuring compliance with current health and safety legislation.",
    ],
    requirements: [
      "Bachelor`s or HND in Engineering- Mechanical, Electrial, Strucural, Civil or any related discipline.",
"3 - 5 years post NYSC experience as an HSE Officer in a construction environment.",
"Minimum Level 3 Health Safety and Environment (HSE) Certificate.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:recruitment@marandmor.com">recruitment@marandmor.com</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "hse-manager-lagos",
    title: "HSE Manager",
    date: "2026-03-25",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are seeking a highly experienced and proactive HSE Manager with over 13 years of core construction experience to lead and manage our Health, Safety, and Environment (HSE) function across multiple construction projects. The successful candidate will be responsible for developing, implementing, and monitoring HSE policies while providing strong leadership to the HSE team to ensure compliance with regulatory and company standards.",
    responsibilities: [
      "Lead, manage, and supervise the HSE team across all construction sites",
"Develop, implement, and enforce HSE policies, procedures, and management systems",
"Ensure full compliance with statutory regulations, industry standards, and client HSE requirements",
"Conduct risk assessments, hazard identification, and method statement reviews",
"Oversee site inspections, audits, and incident investigations, and ensure corrective actions are implemented",
"Drive safety awareness, training programs, and toolbox talks across sites",
"Monitor HSE performance metrics and prepare reports for management and clients",
"Liaise with regulatory bodies, consultants, and client representatives on HSE matters",
"Promote a strong safety culture and continuous improvement across the organization.",
    ],
    requirements: [
      "Degree or diploma in Occupational Health & Safety, Engineering, or a related discipline",
"Minimum of 13 years’ HSE experience within the construction industry",
"Proven experience managing and leading an HSE team on construction projects",
"Strong knowledge of construction safety standards, risk management, and environmental compliance",
"Relevant HSE certifications (e.g., NEBOSH, IOSH, ISPON, OSHA, or equivalent)",
"Excellent leadership, communication, and reporting skills",
"Ability to work effectively in a fast-paced, multi-site construction environment",
"High level of professionalism, integrity, and attention to detail.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:trucretecareers@trucreteng.com">trucretecareers@trucreteng.com</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "shift-supervisor-mowe",
    title: "Shift Supervisor",
    date: "2026-03-18",
    location: "Mowe, Ogun",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Oversee and manage specific production lines during assigned shifts, ensuring efficient operations, quality control, and environmental compliance. Supervise line staff, maintain equipment, and implement safety and environmental protocols.",
    responsibilities: [
      "Manage production lines to meet quality and production targets.",
"Supervise and train line staff to achieve production goals.",
"Monitor and optimize production processes to minimize waste and reduce costs.",
"Implement and maintain environmental management systems (EMS) and procedures on the production line.",
"Monitor and reduce waste, emissions, and energy consumption on the line.",
"Conduct regular environmental inspections and audits on the line.",
"Respond to and investigate environmental incidents on the line.",
"Ensure a safe working environment on the production line.",
"Enforce safety protocols and conduct regular safety inspections.",
"Investigate and address safety incidents on the line.",
"Monitor maintenance of production line equipment.",
"Schedule and coordinate maintenance activities with the maintenance team.",
"Ensure timely repair and replacement of equipment.",
"Ensure quality control measures are in place and effective on the production line.",
"Monitor and address quality issues on the line.",
"Communicate with other shifts, management, and departments.",
"Provide shift reports and performance updates.",
    ],
    requirements: [
      "BSc / B.Engr. / HND/Trade Test",
"Minimum of 7 yrs experience in the Manufacturing Industry.",
"Recycling plant experience",
"Strong Engineering background",
"Ability to work with little or no Supervision",
"A dynamic and astute goal-getter",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:victor.allu@westfield-consulting.com">victor.allu@westfield-consulting.com</a> using the job title as the subject of the mail.',
    salary: "N215,000 – N350,000 per month.",
    deadline: "Not specific",
  },
  {
    id: "shift-supervisor-lagos",
    title: "Shift Supervisor",
    date: "2026-03-15",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Naval Architect is responsible for the design, development, and optimization of marine vessels and offshore structures.",
    responsibilities: [
      "Design end-to-end user experiences",
      "Mentor junior designers",
      "Collaborate with PMs and engineers",
    ],
    requirements: [
      "BEng / BTech in Naval Architecture, Marine Engineering, or Ocean Engineering",
      "Minimum 5+ years’ experience in vessel design, structural analysis, or shipbuilding projects",
      "Proficiency in marine design and analysis software (AutoCAD, Rhino, Maxsurf, ANSYS, or equivalent)",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hr@russelsmithgroup.com">hr@russelsmithgroup.com</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "software-engineer-contract",
    title: "Software Engineer",
    date: "2026-03-08",
    location: "Lagos",
    type: "Contract",
    seniority: "Senior",
    summary:
      "As a Software Engineer at TasklyAfrica, you will build and maintain web applications, APIs, and software products for U.S.-based tech companies. You will work within cross-functional teams, participate in code reviews, and contribute to the full software development lifecycle from design through deployment.",
    responsibilities: [
      "Design, develop, and maintain web applications and APIs",
"Write clean, well-tested, and maintainable code",
"Participate in code reviews and contribute to engineering best practices",
"Collaborate with product managers, designers, and other engineers",
"Debug and resolve production issues efficiently",
"Work with modern frameworks and tools (React, Node.js, Python, etc.)",
"Contribute to architectural decisions and technical documentation.",
    ],
    requirements: [
      "2+ years of professional software development experience",
"Proficiency in at least one modern programming language (JavaScript, Python, Java, etc.)",
"Experience with web frameworks (React, Vue, Angular, Django, Laravel, etc.)",
"Familiarity with databases (PostgreSQL, MySQL, MongoDB)",
"Understanding of RESTful APIs and microservices",
"Experience with version control (Git) and CI/CD workflows",
"Strong problem-solving skills and attention to detail",
"Reliable high-speed internet and professional home workspace.",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://tasklyafrica.com/jobs/software-engineer">HERE</a> to apply',
    salary: "N1,500,000 – N2,500,000 / Month.",
    deadline: "20th may, 2026.",
  },
  {
  id: "electrical-engineer-mowe",
    title: "Electrical Engineer",
    date: "2026-03-05",
    location: "Mowe, Ogun",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Electrical Engineer carry out daily routine maintenance checks and log recording.",
    responsibilities: [
      "Basic electrical & electronics installation, maintenance, and repair.",
"Carry out the scheduled preventive maintenance",
"Configuring, commissioning, and troubleshooting of AC & DC drives.",
"Configuring, commissioning, and troubleshooting of programmable logic controller.",
"Collaborate with team members to identify and solve complex engineering problems",
"Review machine performance and take necessary actions where appropriate.",
    ],
    requirements: [
      "B.Engr. / HND / OND / Trade Test qualification",
"Minimum of 4 years experience in the Manufacturing Industry.",
"A dynamic and astute goal-getter",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:victor.allu@westfield-consulting.com">victor.allu@westfield-consulting.com</a> using the job title as the subject of the mail.',
    salary: "N154,000 – N400,000 per month.",
    deadline: "Not specific",
  },
{
   id: "mechanical-specialist-nigeria",
    title: "Mechanical Specialist",
    date: "2026-03-02",
    location: "Nigeria",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Performing routine inspections, troubleshooting malfunctions, and executing repairs on mechanical systems.",
    responsibilities: [
      "Setting up new machinery, ensuring proper functionality, and testing equipment to meet safety regulations.",
"Interpreting technical drawings, assisting operators, and providing guidance to junior staff.",
"Analyzing equipment performance, recommending improvements, and upgrading systems to increase efficiency.",
"Maintaining detailed logs of service activities, ordering parts, and ensuring compliance with industry standards and safety protocols.",
"Working with engineers, electricians, and other trades people to integrate mechanical systems",
    ],
    requirements: [
      "Typically requires a high school diploma plus vocational training or an associate degree in mechanical engineering technology",
"Previous work experience-minimum of 8 years offshore experience.",
"Proficiency in reading blueprints, schematics, and technical manuals.",
"Deep understanding of hydraulics, pneumatics, and specialized machinery (e.g, Caterpillar engines or natural gas compressors).",
"Familiarity with Computerized Maintenance Management Systems (CMMS) and basic.",
"CAD/CAM software for interpreting designs.",
"Strong analytical abilities to troubleshoot complex mechanical failures under time constraints.",
    ],
    apply:
      'Interested and qualified candidates should send their CVs and relevant certifications to: <a href="mailto:stakeholder.recruitment@ncdmb.gov.ng">stakeholder.recruitment@ncdmb.gov.ng</a> and <a href="mailto:recruitment.egel@gmail.com ">recruitment.egel@gmail.com </a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "facility-manager-technical-lagos",
    title: "Facility Manager",
    date: "2026-02-28",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are seeking ayoung, dynamic, and technically skilled engineer to support facility operations at a high-profile corporate site. The ideal candidate will focus primarily on technical troubleshooting, engineering support, and resolving facility related issues, rather than managing routine facility management administration.",
    responsibilities: [
      "Diagnose and resolve technical faults within facility systems.",
"rovide engineering support for mechanical, electrical, and building infrastructure.",
"Conduct technical inspections and identify maintenance or operational issues.",
"Analyze problems and implement effective technical solutions.",
"Monitor and ensure optimal performance of building equipment and systems.",
"Ensure compliance with safety, operational, and maintenance standards.",
    ],
    requirements: [
      "Bachelor’s Degree in Mechanical Engineering, Electrical Engineering, or a related field.",
"2 – 5 years of technical experience in construction, building services, engineering maintenance, or a similar technical environment.",
"Strong analytical, troubleshooting, and problem-solving skills.",
"Ability to work in afast-paced corporate environment.",
"Proactive, mobile, and agile, with the ability to respond quickly to technical issues.",
"Good communication and coordination skills.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:snwaneri@updcfm.com">snwaneri@updcfm.com</a> using the job title as the subject of the email.',
    salary: "Not Specified",
    deadline: "Not Specified",
  },
{
    id: "it-support-officer-qsr-lagos",
    title: "IT Support Officer",
    date: "2026-02-26",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are seeking a skilled and proactive IT Support Officer to provide technical support and ensure the smooth operation of IT systems across our outlets and corporate office. The ideal candidate will be responsible for maintaining hardware, software, and network systems while supporting staff with technical issues to ensure minimal disruption to business operations.",
    responsibilities: [
      "Provide day-to-day technical support for hardware, software, and network-related issues across outlets and offices.",
"Install, configure, and maintain computer systems, POS systems, and related IT equipment.",
"Troubleshoot system, network, and application issues and ensure timely resolution.",
"Monitor system performance and ensure data security and backup procedures are followed.",
"Support and maintain business software applications used in daily operations.",
"Coordinate with vendors and service providers for system upgrades, repairs, and maintenance.",
"Assist in the implementation of new IT solutions and ensure proper user training.",
"Maintain IT documentation, asset records, and support logs.",
    ],
    requirements: [
      "Interested candidates should possess a Bachelor's Degree",
"3 - 5 years of relevant IT support experience.",
"Prior hands-on experience working with business or enterprise software applications.",
"Experience supporting POS systems, networks, and general IT infrastructure.",
"Strong troubleshooting and problem-solving skills.",
"Good communication and user support skills.",
"Ability to work in a fast-paced operational environment.",
"Prior experience in the QSR (Quick Service Restaurant) or FMCG industry is an added advantage.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:career@consultingdcc.com.ng">career@consultingdcc.com.ng </a> using "IT Support Officer" as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
  {
    id: "Graduate-Surveyor-SOP",
    title: "Graduate Surveyor",
    date: "2026-02-24",
    location: "Somolu, Lagos",
    type: "Full-time",
    seniority: "Junior",
    summary:
      "Sanni, Ojo& Partners is looking for adiligent and motivated Graduate Surveyorto join our Survey Unit . The ideal candidate will lead the design and supervision of civil and structural engineering projects, ensuring compliance with safety, quality, and industry standards, while mentoring younger engineers and contributing to innovative, sustainable solutions.",
    responsibilities: [
      "Assist with leveling, traversing & topographical surveys",
"Operate Total Station, Levels & GNSS equipment (under supervision)",
"Process & reduce field data accurately",
"Prepare survey drawings using AutoCAD/Civil 3D",
"Maintain survey logs, records & documentation",
"Structured training on GIS, photogrammetry & survey software",
    ],
    requirements: [
      "B.Sc / B.Techin Surveying, Geomatics, Geoinformatics, Geodetic/Mapping Sciences.",
"NYSC completed.",
"0–2 years experience (IT experience is an advantage).",
"Basic knowledge of survey instruments and techniques.",
"Introductory competence in AutoCAD / Civil 3D.",
"Good computer skills (MS Office).",
"Strong attention to detail, accuracy & willingness to learn",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hr@sop-consulting.com ">hr@sop-consulting.com </a> using “Application –Graduate Surveyor” as  the subject of the mail.',
    salary: "Not specific",
    deadline: "9th May, 2026",
  },
{
    id: "structural-design-engineer-ikoyi",
    title: "Structural Design Engineer ",
    date: "2026-02-20",
    location: "Ikoyi, Lagos",
    type: "Full-time",
    seniority: "junior",
    summary:
      "The ideal candidate will have a strong understanding of structural engineering principles, construction methods, and project management. You will collaborate with architects, contractors, and other engineering disciplines to ensure accurate and efficient implementation of structural designs on-site",
    responsibilities: [
      "Review and interpret structural design plans to ensure compliance with building codes and project requirements.",
"Collaborate with project managers, architects, and construction teams to develop methodologies and schedules.",
"Conduct site visits to monitor progress and ensure adherence to design specifications and quality standards.",
"Provide technical guidance and support to the construction teams, addressing any issues during construction.",
"Perform structural calculations and analyses to validate the safety and integrity of designs.",
"Prepare and review construction documents, including shop drawings and change orders.",
"Evaluate materials and techniques to ensure cost-effectiveness and sustainability.",
"Inspect existing structures and recommend repairs or reinforcements as necessary.",
"Maintain accurate records, including reports on site conditions and compliance with safety regulations.",
"Stay updated on industry trends, technologies, and regulatory changes.",
    ],
    requirements: [
      "5 years of experience in Structural Engineering or a related field.",
"Professional Engineer (PE) license or ability to obtain licensure within a specified timeframe.",
"Expertise in structural engineering within construction, especially in commercial, residential, or infrastructure projects.",
"Proficiency in structural design software (AutoCAD, Revit, SAP2000, ETABS).",
"Strong knowledge of building codes, safety regulations, and construction standards",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:precious@ldd-consulting.com ">precious@ldd-consulting.com </a> using the job title as the subject of the mail.',
    salary: "N800,000 / month.",
    deadline: "Not specific",
  },
{
    id: "mechanical-engineer-mowe",
    title: "Mechanical Engineer",
    date: "2026-02-15",
    location: "Mowe, Ogun",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Carry out daily routine maintenance checks and log recording.",
    responsibilities: [
      "Basic mechanical installation, maintenance & repair",
"Carry out scheduled preventive maintenance",
"Setting and adjusting industrial machine blades.",
"Installation, maintenance, and repair of the mechanical system",
"Collaborate with team members to identify and solve complex engineering problems.",
"Review machine performance and take necessary actions where appropriate",
    ],
    requirements: [
      "B.Engr. / HND / OND / Trade Test",
"Minimum of 4 years of experience in the Manufacturing Industry.",
"A dynamic and astute goal-getter",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:victor.allu@westfield-consulting.com">victor.allu@westfield-consulting.com</a> using the Job Title as the subject of the email.',
    salary: "N154,000 – N400,000 per month (Gross).",
    deadline: "Not Specific",
  },
  {
    id: "site-engineer-abuja-construction",
    title: "Site Engineer",
    date: "2026-02-14",
    location: "Abuja",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Site Engineer will be responsible for supervising construction activities on-site, ensuring projects are executed according to approved drawings, timelines, quality standards, and regulatory requirements.",
    responsibilities: [
      "Supervise and coordinate daily construction activities on-site.",
"Ensure construction works are executed according to approved drawings, specifications, and project plans.",
"Monitor project progress and report updates to the Head of Projects/Project Manager.",
"Ensure strict adherence to site safety standards and regulations.",
"Coordinate with contractors, consultants, architects, and other stakeholders.",
"Inspect construction work to ensure quality control and compliance with project specifications.",
"Resolve technical issues that may arise during construction.",
"Maintain proper documentation of site activities, materials, and labour.",
"Ensure compliance with regulatory authorities and building standards.",
    ],
    requirements: [
      "Bachelor’s Degree or HND in Civil Engineering or related engineering discipline.",
"Must be COREN registered (Council for the Regulation of Engineering in Nigeria).",
"3 – 5 years’ experience in construction or real estate development.",
"Strong knowledge of construction processes and site supervision.",
"Ability to read and interpret structural and architectural drawings.",
"Excellent communication and problem-solving skills.",
"Proficiency in Microsoft Office and site reporting tools.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:hr@hrsowreallag@gmail.com ">hrsowreallag@gmail.com </a> using the “Site Engineer – Abuja” as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
{
    id: "qa-qc-engineer-mepf",
    title: "QA / QC Engineer",
    date: "2026-02-08",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The QA / QC Engineer will oversee the implementation of quality control procedures for MEPF systems, conduct inspections and tests, and collaborate with multidisciplinary teams.You will ensure that all systems comply with regulatory requirements, industry standards, and project specifications.",
    responsibilities: [
      "Develop and implement MEPF quality control plans and procedures.",
"Conduct inspections and tests at various stages of MEPF installations and commissioning.",
"Collaborate with project teams to identify and resolve MEPF quality issues.",
"Monitor and analyze MEPF quality performance metrics, generate reports, and present findings to management.",
"Ensure compliance with MEPF-related codes, standards, and regulations.",
"Provide guidance and training to project teams on MEPF quality control processes.",
"Participate in the selection and evaluation of MEPF subcontractors and suppliers.",
"Review MEPF design and construction documents for quality compliance.",
"Conduct MEPF risk assessments and contribute to hazard mitigation strategies.",
"Stay updated with industry advancements, new technologies, and emerging standards related to MEPF systems.",
"Assist employees to ensure knowledge of all quality standards, ensure compliance to all quality manuals and procedures and collaborate with contractors and suppliers to maintain the quality of all systems.",
"Analyse all products and non-conformance processes and evaluate all documents to ensure the maintenance of optimal quality and prepare monthly reports to evaluate performance",
    ],
    requirements: [
      "Bachelor’s Degree in Mechanical Engineering or Electrical Engineering",
"Certifications such as Certified Quality Engineer (CQE) or Certified Quality Auditor (CQA) are a plus.",
"Minimum of 5 years of QA/QC experience in MEPF systems within the building services industry.",
"Hands-on experience with MEPF installations, testing, and commissioning processes.",
"In-depth understanding of MEPF systems (HVAC, electrical, plumbing, and fire protection).",
"Familiarity with MEPF testing equipment, quality control software, and tools.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:recruitment@marandmor.com">recruitment@marandmor.com</a> using “Professional Graphics Designer” as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not Specific",
  },
{
    id: "technical-manager-mowe",
    title: "Technical Manager",
    date: "2026-02-04",
    location: "Mowe, Ogun",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Compliance with the proactive maintenance schedule set by management & OEM, and management of our main and auxiliary equipment. (proactive, preventive, corrective)",
    responsibilities: [
      "Overall understanding of requirements for the Maintenance of equipment",
"Ability to coordinate and understand the design requirements of the equipment",
"Establish and comply with the preventive maintenance schedule set by management & OEM",
"Adherence to the maintenance budget",
"Report maintenance-related issues.",
    ],
    requirements: [
      "B.Engr. / HND qualification",
"Minimum of 10 years experience in the Manufacturing Industry.",
"Recycling plant experience",
"Very experienced mechanical engineers who can as well dabble into electrical aspects of maintenance.",
"Ability to work with little or no Supervision",
"A dynamic and astute goal-getter",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:victor.allu@westfield-consulting.com">victor.allu@westfield-consulting.com </a> using the job title  as the subject of the mail.',
    salary: "N700,000 – N900,000 per month (Gross Salary)",
    deadline: "Not Specific",
  },
{
    id: "hse-manager-construction-lagos",
    title: "HSE Manager",
    date: "2026-02-02",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are seeking a highly experienced and proactive HSE Manager with over 13 years of core construction experience to lead and manage our Health, Safety, and Environment (HSE) function across multiple construction projects",
    responsibilities: [
      "Lead, manage, and supervise the HSE team across all construction sites",
"Develop, implement, and enforce HSE policies, procedures, and management systems",
"Ensure full compliance with statutory regulations, industry standards, and client HSE requirements",
"Conduct risk assessments, hazard identification, and method statement reviews",
"Oversee site inspections, audits, and incident investigations, and ensure corrective actions are implemented",
"Drive safety awareness, training programs, and toolbox talks across sites",
"Monitor HSE performance metrics and prepare reports for management and clients",
"Liaise with regulatory bodies, consultants, and client representatives on HSE matters",
"Promote a strong safety culture and continuous improvement across the organization.",
    ],
    requirements: [
      "BEng / BTech in Naval Architecture, Marine Engineering, or Ocean Engineering",
      "Minimum of 13 years’ HSE experience within the construction industry",
"Proven experience managing and leading an HSE team on construction projects",
"Strong knowledge of construction safety standards, risk management, and environmental compliance",
"Relevant HSE certifications (e.g., NEBOSH, IOSH, ISPON, OSHA, or equivalent)",
"Excellent leadership, communication, and reporting skills",
"Ability to work effectively in a fast-paced, multi-site construction environment",
"High level of professionalism, integrity, and attention to detail",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:trucretecareers@trucreteng.">trucretecareers@trucreteng.</a> using "HSE Manager – Construction as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
{
    id: "hse-officer-marandmor-abuja",
    title: "HSE Officer",
    date: "2026-01-24",
    location: "Abuja",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The HSE Manager is reponsible for investigating/recording incidents, accidents, complaints and cases of ill health on site.",
    responsibilities: [
      ".Investigating/recording incidents, accidents, complaints and cases of ill health on site",
"Undertaking risk assessments and site inspections.",
"Ensuring that equipment is installed correctly/safely.",
"Identifying potential hazards.",
"Determining ways of reducing risks.",
"Ensuring compliance with the health and safety policies stipulated by the company.",
"Writing internal health and safety policies/strategies.",
"Drawing-up safe operational practices and making necessary changes.",
"Writing reports, bulletins and newsletters on health and safety.",
"Providing health and safety meetings and training courses for employees.",
"Keeping up to date and ensuring compliance with current health and safety legislation",
    ],
    requirements: [
      "Bachelor`s or HND in Engineering- Mechanical, Electrial, Strucural, Civil or any related discipline.",
"3 - 5 years post NYSC experience as an HSE Officer in a construction environment.",
"Minimum Level 3 Health Safety and Environment (HSE) Certificate.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:recruitment@marandmor.com">recruitment@marandmor.com</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
{
    id: "reservoir-navigation-services-engineer-ph",
    title: "Reservoir Navigation Services Engineer",
    date: "2026-01-22",
    location: "Port Harcourt, Rivers",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The Lead Engineer or Scientist supports development through individual and teamwork. This level also requires the application of knowledge of materials, tools, processes, and products to solve problems, develop and execute objectives for self and others, and to effect short-term and some long-term business goals.",
    responsibilities: [
      "Running complex, high risk jobs",
"Building geosteering modelling",
"Coordinating expertise in one or more engineering and science disciplines across the technology project portfolio, assuring rigor is applied through the design and development processes.",
"Ensuring needed personnel skills and expertise are in place across the organization for the discipline.",
"Recognizing problems and providing solutions to mitigate or eliminate these",
"Working well with colleagues and customers across all businesses and cultures",
"Managing multiple project and/or deadlines",
    ],
    requirements: [
      "Have Bachelor's Degree with good industrial experience, with preference for an Engineering scientific or earth sciences discipline or relevant industry experience within product line",
"Show great experience of Reservoir Navigation Services or geo-steering",
"Have good interpersonal and leadership skills.",
"Demonstrate knowledge of drilling, LWD and wireline tools and measurements.",
"Demonstrate excellent proficiency and knowledge in RT log analysis",
"Have ability to manage multiple project and/or deadlines",
"Have good oral and written communication skills. Facility with other languages.",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://bakerhughes.wd5.myworkdayjobs.com/en-US/BakerHughes/job/NG-PORT-HARCOURT-125-TRANS-AMADI/Reservoir-Navigation-Services-Engineer_R156855-1?q=nigeria&utm_source=">HERE</a> to apply online',
    salary: "Not specific",
    deadline: "Not specific",
  },
{
    id: "auto-engineer-truck-technician-cng",
    title: "Auto Engineer (Truck Technician)",
    date: "2026-01-20",
    location: "Ogun, Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Carry out all minor maintenance on CNG skids and CNG trucks",
    responsibilities: [
      "Inspect and replace oil filters,gas filters and engine oil during routine servicing",
"Diagnose and fix brake related issues and other mechanical faults on CNG trucks",
"Inspect compressor belts,valves and fittings on skids and trucks",
"Ensure tightness of mechanical joints and fittings to prevent leaks",
"Maintain daily maintenance log all work carried out",
"Attend to all electrical and instrumentation issues on CNG skids and CNG trucks",
"Inspect and maintain control panels,electricalsystems,and grounding systems",
"Carry out trouble shooting on motors, relays, switches and sensors",
"Perform periodic checks on earthing continuity and insulation resistant",
"Report major faults or repeat failures immediately for action",
"Carry out preventive maintenance as per schedule",
"Review and act on drivers checklist daily to promptly fix reported issues.",
    ],
    requirements: [
      "Interested candidates should possess an OND qualification with 3 – 8 years experience",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:jobs@skacheintegrated.com">jobs@skacheintegrated.com </a> using the job title as the subject of the mail.',
    salary: "Not Specific",
    deadline: "Not Specific",
  },
  {
    id: "graduate-software-engineer-open-source-linux",
    title: "Graduate Software Engineer – Open Source and Linux",
    date: "2026-01-15",
    location: "Lagos",
    type: "Remote",
    seniority: "Senior",
    summary:
      "Working towards mastery of key programming languages and Linux system knowledge",
    responsibilities: [
      "Shaping the roadmap for your product at global sprints every six months.",
"Focusing on design and user experience, even for developer tooling and command line apps.",
"Writing high quality, resilient and performant code, potentially serving millions of demanding daily users.",
"Engaging with users and the open source community through code reviews and issue trackers.",
"Responding to customer issues as a priority, develop an understanding of enterprise requirements.",
"Developing skills and awareness of security in software design and implementation.",
    ],
    requirements: [
      "Exceptional academic track record from both high school and university.",
"Undergraduate Degree in Computer Science, Business Informatics, Mathematics or another STEM discipline with programming courses",
"Confidence to get started and deliver high quality code in one of Python, Rust, C/C++, Golang, JavaScript or Java",
"Experience with Ubuntu or another Linux distribution",
"Track record of going above-and-beyond expectations to achieve outstanding results",
"Result-oriented and organized, with the drive to meet commitments",
"Personal projects in technology and software engineering beyond the curriculum",
"Professional written and spoken English",
"Excellent interpersonal skills, curiosity, flexibility, and accountability",
"Thoughtfulness, self-awareness and the ability to reflect and develop",
"Ability to travel internationally twice a year for company events up to two weeks long.",
"Nice-to-have skills: Upstream open source contributions, Packaging and Linux distribution contributions – Debian, Fedora, Arch, Nix or another, Leadership and organization skills, Presentation and writing skills and Business and commercial interests.",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://job-boards.greenhouse.io/canonicaljobs/jobs/7563956?gh_src=659932kh1us">HERE</a> to apply',
    salary: "Not specific",
    deadline: "Not specific",
  },
{
    id: "ftth-project-site-engineer-rivers",
    title: "FTTH Project Site Engineer",
    date: "2026-01-10",
    location: "Rivers",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Supervise on-site construction activities, including fiber cable laying, splicing, splitter/cabinet installation, and equipment setup.",
    responsibilities: [
      "Ensure project quality, safety, and progress meet design and standard requirements.",
"Coordinate subcontractor work plans, materials, and manpower to achieve timely delivery.",
"Conduct site inspections, prepare daily/weekly progress and quality reports.",
"Support troubleshooting, technical guidance, and corrective actions for on-site issues.",
"Implement and monitor EHS (Environment, Health, Safety) compliance at all sites.",
"Manage and organize construction documents for project acceptance and audit.",
    ],
    requirements: [
      "Diploma or above in Telecommunications, Electronics, or related fields.",
"Minimum of 1 year of telecom field experience, preferably in FTTH/FTTX projects.",
"Solid understanding of ODN network structure, fiber splicing/testing, and construction standards.",
"Strong communication, coordination, and problem-solving skills.",
"Able to work under pressure and travel frequently for on-site work.",
"EHS or telecom vendor certification (Huawei, ZTE, FiberHome, etc.) is an advantage.",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://www.linkedin.com/jobs/view/4376217026/">HERE</a> to apply',
    salary: "Not specific",
    deadline: "Not Specific",
  },
{
    id: "ftth-project-site-engineer-kano",
    title: "FTTH Project Site Engineer ",
    date: "2026-01-05",
    location: "Kano",
    type: "Full-time",
    seniority: "Junior",
    summary:
      "Supervise on-site construction activities, including fiber cable laying, splicing, splitter/cabinet installation, and equipment setup.",
    responsibilities: [
      "Ensure project quality, safety, and progress meet design and standard requirements.",
"Coordinate subcontractor work plans, materials, and manpower to achieve timely delivery.",
"Conduct site inspections, prepare daily/weekly progress and quality reports.",
"Support troubleshooting, technical guidance, and corrective actions for on-site issues.",
  "Implement and monitor EHS (Environment, Health, Safety) compliance at all sites.",
"Manage and organize construction documents for project acceptance and audit",
    ],
    requirements: [
      "Diploma or above in Telecommunications, Electronics, or related fields.",
"Minimum 1 year of telecom field experience, preferably in FTTH/FTTX projects.",
"Solid understanding of ODN network structure, fiber splicing/testing, and construction standards.",
"Strong communication, coordination, and problem-solving skills.",
"Able to work under pressure and travel frequently for on-site work.",
"EHS or telecom vendor certification (Huawei, ZTE, FiberHome, etc.) is an advantage.",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://www.linkedin.com/jobs/view/4384031334/">HERE</a> to apply online',
    salary: "Not Specific",
    deadline: "Not Specific",
  },
{
    id: "quality-assurance-engineer-aircraft-design",
    title: "Quality Assurance Engineer (Aircraft Design)",
    date: "2026-01-02",
    location: "Abuja",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are looking for a high-impact Quality Assurance (Aircraft Design Engineer) to lead the definition, sizing, and validation of our aircraft systems.",
    responsibilities: [
      "You will be responsible for translating mission requirements into feasible aircraft configurations during the conceptual and preliminary design phases. Beyond engineering, you will hold general supervisory responsibilities—overseeing daily team performance, ensuring 100% regulatory compliance, and maintaining a culture of quality.",
"Conceptual Design: Translate mission requirements into aircraft layouts, perform initial sizing, and generate constraint diagrams.",
"Performance & Stability: Predict performance across the flight envelope and ensure static/dynamic stability and tail surface sizing.",
"Aerodynamics & Structures: Estimate lift/drag characteristics and perform first-order structural sizing and load path definition.",
"Weight & Balance: Build and maintain detailed weight breakdowns and track CG locations throughout the design cycle.",
"System Integration: Size and integrate propulsion systems and run multidisciplinary trade studies to resolve conflicting requirements.",
"Manufacturing & Quality: Ensure Design for Manufacturing (DFM) and 100% adherence to aviation regulations (NCAA, FAA).",
"Leadership: Supervise daily stand-ups, track deliverables, evaluate team performance, and oversee real-time quality monitoring systems.",
    ],
    requirements: [
      "Design Expertise: Mastery of aircraft configuration theory, performance equations, and atmosphere models.",
"Technical Modeling: Proficiency in solid modeling (CATIA, SolidWorks) and numerical modeling (MATLAB, Python, or Excel).",
"Analytical Strength: Deep understanding of static margins, stability derivatives, and aerodynamic theory (including CFD literacy).",
"Structural Knowledge: Familiarity with classical beam/shell theory, FEM awareness, and aerospace materials/tolerances.",
"Leadership Mindset: Strong engineering judgment, systems thinking, and a commitment to continuous safety training and cybersecurity frameworks",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:recruitment@uniccongroup.com">recruitment@uniccongroup.com</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
  },
{
    id: "quality-control-intern-engineering-maryland",
    title: "Quality Control Intern (Engineering)",
    date: "2025-12-28",
    location: "Maryland, Lagos",
    type: "Fulltime",
    seniority: "Senior",
    summary:
      "Leitung Gate Limited is seeking a detail-oriented and motivated Quality Control Analyst to join our team. This entry-level position is ideal for fresh graduates who are passionate about maintaining product and process quality.",
    responsibilities: [
      "Assist in completing assigned audit checklist sections under supervision to ensure all applicable standard requirements are evaluated.",
"Observe client processes during site visits and document accurate notes to support the team findings.",
"Draft summaries of audit observations and non-conformities for review by the Quality Manager.",
"Conduct basic research on industry regulations and ISO updates to support audit preparation.",
"Maintain the internal Audit Log, tracking audit progress from planning through report issuance.",
"Organize and archive audit workpapers and supporting documentation according to the company’s record-retention policy.",
"Assist in reviewing inspection reports, test results, and production records to confirm compliance with quality standards.",
"Participate in internal audits and quality improvement initiatives.",
"Ensure all activities comply with company policies, regulatory requirements, and safety standards",
    ],
    requirements: [
      "Bachelor’s degree in any Mechanical, chemical and Electrical Engineering or related field.",
"Fresh graduates or candidates with 0–2 years of experience are encouraged to apply.",
"Basic understanding of quality control principles and inspection techniques.",
"Strong attention to detail and analytical skills.",
"Good communication and teamwork abilities.",
"Proficiency in Microsoft Office (Excel, Word, PowerPoint).",
"Ability to work in a fast-paced environment and meet deadlines.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:careers@runola.ng">careers@runola.ng</a> using “Application for Quality Assurance/Control Laboratory Assistant Position” as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not Specific",
  },
{
    id: "ftth-project-site-engineer-enugu",
    title: "FTTH Project Site Engineer",
    date: "2025-12-25",
    location: "Enugu",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Supervise on-site construction activities, including fiber cable laying, splicing, splitter/cabinet installation, and equipment setup.",
    responsibilities: [
      "Ensure project quality, safety, and progress meet design and standard requirements.",
"Coordinate subcontractor work plans, materials, and manpower to achieve timely delivery.",
"Conduct site inspections, prepare daily/weekly progress and quality reports.",
"Support troubleshooting, technical guidance, and corrective actions for on-site issues.",
"Implement and monitor EHS (Environment, Health, Safety) compliance at all sites.",
"Manage and organize construction documents for project acceptance and audit.",
    ],
    requirements: [
      "Diploma or above in Telecommunications, Electronics, or related fields.",
"Minimum of 1 year of telecom field experience, preferably in FTTH/FTTX projects.",
"Solid understanding of ODN network structure, fiber splicing/testing, and construction standards.",
"Strong communication, coordination, and problem-solving skills.",
"Able to work under pressure and travel frequently for on-site work.",
"EHS or telecom vendor certification (Huawei, ZTE, FiberHome, etc.) is an advantage.",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://www.linkedin.com/jobs/view/4384038141/">HERE</a> to apply',
    salary: "Not Specific",
    deadline: "Not Specific",
  },
  {
    id: "project-manager-integrated-solutions-lagos",
    title: "Project Manager – Integrated & Solutions",
    date: "2025-12-22",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Acting as a strong, committed HSE Leader and provides a full HSE Leadership to all parties involved in the Project through the implementation of Baker Hughes HSE Management system and applicable customer’s HSE requirements. Promotes Stop Work Authority & speaking up culture at the project.",
    responsibilities: [
      "Leading all elements of the project including Baker Hughes products and services, contracted parties and client interfaces.",
"Managing for “on time’ delivery, performance Improvement, and incremental revenue through upsell strategies, additional pull through of additional products or services.",
"Owning the overall customer deliverables by having the responsibility for the Integrated Solutions compliance, financial KPI’s, service delivery and HSE performance.",
"Being responsible for all aspects of the financial performance of the project.",
"Leading the support for the sales team’s development of any future related opportunity pipelines.",
"Aligning cross product line strategies to the Integrated Solutions project deliverables.",
"Promoting and driving implementation of Remote Operations in the projects as applicable.",
"Managing the core Project Management Team, and indirectly all other project assigned personnel.",
"Managing multiple products and services across multiple wellsites/rigs, often in complex contractual arrangements.",
"Developing and managing the project schedule at the top level and applies solutions to both leading and lagging situations as well as to unforeseen and predicted events.",
"Appling Baker Hughes specific group (Integrated Solutions) Management System processes and procedures to the project, as well as any mandated software solutions that are applicable.",
"Utilizing project management methodology in daily working practice, additionally encouraging team members by example.",
    ],
    requirements: [
      "Have a Bachelor’s Degree in engineering or scientific discipline from an accredited university or relevant industry experience.",
"Have a minimum of 10+ years of experience in relevant industry (wellbore construction, completions, wellbore intervention, P&A etc.) with a minimum of 5 years as a project manager.",
"Well Control awareness is required. Well Control Certification would be an advantage.",
"Experience managing drilling and completions operations and with strong operational and technical capabilities.",
"Must be experienced managing change and assessing risk and financial implications of change, inclusive of managing Variation Requests.",
"Having a good leadership, excellent interpersonal, influencing and planning skills will be considered necessary for this position.",
"Have an excellent English oral and written communications skills, including ability to organize meetings and distributing accurate and succinct minutes of meetings.",
"Be experienced needs to include managing multiple product line P&L (Profit and Loss management) and experience managing multiple simultaneous rig/site operations.",
"Be skilled in functional use of MS Office Suite, with MS Project familiarity is required.",
"Ability to manage, develop, coach and mentor high level teams across organizational boundaries is required.",
"PMP (Project Management Professional) certification would be considered an advantage.",
"Proven personnel development skills will be required in this role.",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://careers.bakerhughes.com/global/en/job/R159441/Project-Manager-Integrated-Solutions">HERE</a> to apply.',
    salary: "Not specific",
    deadline: "Not specific",
},
{
    id: "ftth-project-design-engineer-lagos",
    title: "FTTH Project Design Engineer",
    date: "2025-12-18",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "The FTTH Project Design Engineer coordinate with site engineers, subcontractors, clients and subcontractors and is responsible for reviewing and updating subcontractors’ design documents.",
    responsibilities: [
      "Responsible for coordinating with clients and subcontractors, and ensuring subcontractors complete survey and design tasks on time.",
      "Responsible for reviewing and updating subcontractors’ design documents.",
      "Coordinate with site engineers and subcontractors to prepare as-built documentation",
    ],
    requirements: [
      "Bachelor’s Degree in Electronics, Telecommunications, or related field",
"Minimum of 2 years of FTTH design-related work experience",
"Proficient in design tools such as AutoCAD and Google Earth",
"Proficient in Microsoft Office software.",
    ],
    apply:
      'Interested and qualified candidates can apply online by clicking: <a href="https://www.linkedin.com/jobs/view/4376274721/">HERE</a>',
    salary: "Not specific",
    deadline: "Not specific",
},
{
    id: "hse-coordinator-amadi-base",
    title: "HSE Coordinator",
    date: "2025-12-15",
    location: "Amadi Base, Rivers",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Assist QHSE Manager in ensuring continuous improvement of operational safety management knowledge and application within the organization.",
    responsibilities: [
      "Implementation of pre-task planning tools: (Job Safety Analysis, Toolbox Talk, etc.).",
"Implementation of proactive tools (Bsafe Cards, Stop Work, Near Miss reporting.)",
" Assist in Shorebase induction, delivery, and coaching including Safety Takes Me Home deployment.",
"Participate in day-to-day incident management, including incident investigation, as delegated by the HSE manager.",
"Conducting ‘QHSE campaigns’ for onshore facilities and assisting in campaign application onboard vessels.",
"Maintain shore-based incidents databases including Incident reports, Investigation reports, medical reports (if applicable), Witness statements, Taproot® Snap Charts, Corrective action plans, Photos, drawings/sketches, etc.",
"Collate all general and client-specific monthly and weekly QHSE statistics for all vessels working in Nigeria (BINL and affiliates). ",
"Maintain shore medical facility including first aid box.",
"Update all records including HSE statistics on BINL and BOURBON portals, offshore visits, client meetings, etc. ",
"Conduct Risk Assessment at shore base locations and develop actions plan for effective close-out of any identified gaps and updating the JSAs whenever required.",
    ],
    requirements: [
      "BSc Social Sciences or related field with relevant HSE certifications. ",
"A Master’s Degree in a relevant field will be an added advantage.",
"Work Experience for 5 years and above minimum experience in HSE in a multinational",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://bourbon-career.talent-soft.com/job/job-hse-coordinator-m-f_2152.aspx?utm_source=">HERE</a> to apply online',
    salary: "Not specific",
    deadline: "Not specific",
},
    {
    id: "medical-laboratory-scientist-diagnostics-lagos",
    title: "Medical Laboratory Scientist",
    date: "2025-12-10",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "We are looking for a professional who is passionate about precision in laboratory testing, quality assurance, and contributing to high-standard healthcare delivery . We are seeking a competent, detail-oriented, and experienced Medical Laboratory Scientist to strengthen our diagnostics team. We are dedicated to providing accurate, reliable, and timely laboratory results that directly support clinical diagnosis, treatment decisions, and patient care excellence.",
    responsibilities: [
      "Conduct a comprehensive range of laboratory investigations in hematology, clinical chemistry, microbiology, parasitology, immunology, serology, coagulation, and urinalysis.",
"Receive, process, and analyze various clinical specimens (blood, urine, body fluids, swabs, tissues, etc.) using both manual and automated techniques.",
"Operate, calibrate, maintain, and perform daily/periodic quality control on laboratory analyzers and equipment.",
"Interpret test results, verify abnormal findings, and escalate critical values to clinicians in a timely manner.",
"Ensure strict compliance with infection prevention and control protocols, biohazard waste management, and laboratory safety standards.",
"Maintain accurate, complete, and confidential records of all tests, results, and procedures in the laboratory information system (LIS).",
"Assist in reagent preparation, inventory management, stock monitoring, and ordering of laboratory consumables.",
"Support continuous improvement initiatives, equipment troubleshooting, and training of junior staff or interns where applicable.",
"Collaborate with pathologists, clinicians, and other healthcare professionals to ensure diagnostic accuracy and optimal patient outcomes.",
    ],
    requirements: [
      "Bachelor of Medical Laboratory Science (BMLS) Degree from a recognized and accredited institution..",
"Full registration and valid/current practicing license from the Medical Laboratory Science Council of Nigeria (MLSCN)..",
"2–4 years of post-qualification experience in a busy hospital laboratory, diagnostic center, or private pathology lab..",
"Hands-on experience with automated analyzers (hematology, chemistry, immunoassay), microbiology culture techniques, and blood banking procedures is highly desirable..",
"Strong technical proficiency across multiple laboratory disciplines with excellent hands-on skills.",
"Ability to work efficiently in a high-volume environment while maintaining accuracy under pressure.",
"Strong organizational skills and commitment to documentation, traceability, and result integrity.",
"Effective communication skills for clear reporting of results and professional interaction with clinical teams.",
"Dedication to ethical practice, patient confidentiality, safety, and lifelong learning.",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:Admin@clinixhealthcare.com.ng">Admin@clinixhealthcare.com.ng</a> and copy to: <a href="mailto:hr@clinixhealthcare.com.ng"> hr@clinixhealthcare.com.ng</a> using the job title as the subject of the mail.',
    salary: "Not specific",
    deadline: "Not specific",
},
{
    id: "phone-repair-engineer-lagos",
    title: "Phone Repair Engineer",
    date: "2025-12-08",
    location: "Lagos",
    type: "Fulltime",
    seniority: "Junior",
    summary:
      "Diagnose and troubleshoot hardware (screens, ports, boards) and software issues.",
    responsibilities: [
      "Repair and replace damaged phone components such as screens, batteries, and cameras.",
"Conduct quality control tests to ensure repaired devices meet industry standards.",
"Accurately document repair details, parts used, and job outcomes.",
"Communicate clearly with customers regarding repair processes, timelines, and costs.",
"Stay updated on new phone models, technologies, and repair techniques.",
    ],
    requirements: [
      "Proficiency in soldering and chip-level repairs.",
"Strong knowledge of Android operating systems and mobile device hardware.",
"Excellent problem-solving, communication, and customer service skills.",
"Ability to work independently and collaboratively.",
"Good computer skills for diagnostics and documentation.",
"High attention to detail and strong work ethics.",
"Minimum qualification: National Diploma (ND).",
    ],
    apply:
      'Interested and qualified candidates should send their CV to: <a href="mailto:cvpool2021@oppo-aed.ng">cvpool2021@oppo-aed.ng</a> using the job title as the subject of the mail.',
    salary: "N70,000 – N80,000 per month",
    deadline: "31st May, 2026",
},
{
    id: "product-marketing-manager-remote",
    title: "Product Marketing Manager",
    date: "2025-12-05",
    location: "Lagos",
    type: "Remote",
    seniority: "Senior",
    summary:
      "The Naval Architect is responsible for the design, development, and optimization of marine vessels and offshore structures.",
    responsibilities: [
      "You’ll own the GTM strategy for key products, shaping messaging and positioning that speaks to developers and enterprise buyers alike.",
"You’ll collaborate cross-functionally with product management, sales, regional marketing, content, and partner marketing teams to bring campaigns to life.",
"You’ll get creative, crafting compelling advertising, launch plans, and campaigns that make our products stand out in a competitive landscape.",
"You’ll measure impact, using data to refine messaging, optimize marketing funnels, and drive customer engagement.",
"You’ll be part of a truly global team, working with colleagues in over 85 countries in a fully remote, high-performance environment.",
"Develop and execute go-to-market (GTM) strategies for a range of products.",
"Lead messaging and positioning efforts ensuring our products stand out in a competitive market.",
"Lead content planning with product managers —from website copy to whitepapers, blogs, and sales enablement materials.",
"Collaborate on marketing campaigns, partnering with regional marketing teams to execute integrated campaigns that drive pipeline growth.",
"Launch new products and features, leading cross-functional teams to drive awareness and adoption.",
"Run competitive analysis, staying ahead of market trends and evolving our positioning accordingly.",
"Support the customer success team on driving customer engagement and growth, working on strategies to upsell and cross-sell across our customer base.",
"Plan and execute global events, live webinars, and community meetups that align with our GTM priorities.",
    ],
    requirements: [
      "A passion for technology and open source—you get excited about innovation, software, and community-driven development.",
"Strong storytelling skills—you know how to craft messaging that resonates with both technical and business audiences.",
"Growth mindset—someone who thrives on experimentation, learning, and continuous improvement.",
"Excellent communication skills, both written and verbal.",
"Data-driven mindset, using insights to refine strategies and improve performance.",
"Experience in product marketing for enterprise software, cloud, DevOps, or open-source solutions.",
"Experience with demand generation, understanding how to translate GTM strategies into pipeline growth.",
"Comfort working cross-functionally with product, sales, partners, and marketing teams.",
    ],
    apply:
      'Interested and qualified candidates should click: <a href="https://job-boards.greenhouse.io/canonicaljobs/jobs/7619278?gh_src=jpx8xfro1us">HERE</a> to apply online.',
    salary: "Your base pay will depend on various factors including your geographical location, level of experience, knowledge and skills. Please note that additional benefits may apply depending on the work location and, for more information on these, please ask your Talent Partner.",
    deadline: "Not specific",
},
];

// Sort jobs by date descending (most recent first)
export const jobs = [...allJobs].sort((a, b) => b.date.localeCompare(a.date));
