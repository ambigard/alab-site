import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Templates | ALAB",
  description:
    "Eight ready-to-use letters and request forms based on real Louisiana law.",
};

const templates = [
  {
    id: "t1",
    badge: "Standard — 3 working day response required",
    icon: "📋",
    title: "Public Records Request Letter",
    useFor:
      "budgets, bylaws, board member info, charter contracts, board minutes, vendor contracts, discipline data",
    legalBasis: "RS 44:1 et seq. — Louisiana Public Records Law",
    body: `[TODAY'S DATE]

To: [NAME AND TITLE OF RECORDS CUSTODIAN]
[SCHOOL NAME]
[SCHOOL ADDRESS]
[CITY, STATE, ZIP]

Re: Public Records Request — Louisiana RS 44:1 et seq.

Dear [NAME OF CUSTODIAN OR "Records Custodian"],

Pursuant to the Louisiana Public Records Law, RS 44:1 et seq., I hereby request access to and copies of the following public records maintained by [SCHOOL NAME]:

1. [DESCRIBE FIRST RECORD — e.g., "The school's annual operating budget for the 2024–2025 school year"]
2. [DESCRIBE SECOND RECORD — e.g., "The current bylaws of the governing board"]
3. [DESCRIBE THIRD RECORD — add or remove items as needed]

I understand that under RS 44:32, you are required to respond to this request within three (3) working days of receipt. If you require additional time to fulfill this request, please notify me in writing with an estimated completion date within that same 3-day window.

If any portion of the requested records is withheld, please provide a written explanation citing the specific legal exemption that applies to each withheld item, as required by law. A general refusal without legal citation is not a valid response under Louisiana law.

I prefer to receive these records electronically via email at [YOUR EMAIL ADDRESS]. I am prepared to pay reasonable copying fees for physical copies if electronic delivery is not possible.

Please feel free to contact me with any questions.

Respectfully,

[YOUR FULL NAME]
[YOUR ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL ADDRESS]

Parent/Guardian of: [CHILD'S NAME, GRADE, SCHOOL]`,
    afterSend: [
      "Note the date and time you sent it — the 3-day clock starts on receipt",
      "If no response by Day 4, send a follow-up email referencing the original request date",
      "If still no response by Day 7, file a complaint with LDOE and the chartering authority",
      "Courts can award up to $100 per day for each day of non-compliance after the deadline",
    ],
  },
  {
    id: "t2",
    badge: "Standard — 10 business day response required",
    icon: "🎓",
    title: "Request for Your Child's School Records",
    useFor:
      "academic records, discipline history, IEP documents, health records, assessment results, teacher notes",
    legalBasis: "RS 17:406.9 (Parents' Bill of Rights) + FERPA",
    body: `[TODAY'S DATE]

To: [PRINCIPAL'S NAME]
[SCHOOL NAME]
[SCHOOL ADDRESS]
[CITY, STATE, ZIP]

Re: Request for Student Records — RS 17:406.9 and FERPA

Dear [PRINCIPAL'S NAME],

I am the parent/legal guardian of [CHILD'S FULL NAME], a student in [GRADE] at [SCHOOL NAME]. Pursuant to Louisiana RS 17:406.9 (Louisiana's Parents' Bill of Rights for Public Schools) and the Family Educational Rights and Privacy Act (FERPA), I am requesting complete copies of the following records related to my child:

☐ All academic records, including report cards and benchmark/interim assessments
☐ Complete attendance records for the current and prior school year
☐ All discipline records, incident reports, and documentation of any consequences
☐ Any IEP, 504 Plan, or Individual Accommodation Plan currently in place
☐ Records of any evaluations, screenings, or assessments for learning challenges or exceptionalities
☐ Health records maintained by the school
☐ Any teacher notes, communications, or documentation that are part of the official student file
☐ Other: [DESCRIBE ANY ADDITIONAL SPECIFIC RECORDS]

Under RS 17:406.9, I understand that I am entitled to receive these records within ten (10) business days of this written request. I further understand that I am not required to appear in person to make or validate this request, and that electronic copies shall be provided at no charge.

Please send the records electronically to [YOUR EMAIL ADDRESS].

If any records are withheld, please provide a written explanation citing the specific legal basis for the withholding.

Thank you for your prompt attention to this request.

Sincerely,

[YOUR FULL NAME]
[YOUR RELATIONSHIP TO CHILD — e.g., Mother, Legal Guardian]
[YOUR ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL ADDRESS]

Student: [CHILD'S FULL NAME]
Date of Birth: [CHILD'S DATE OF BIRTH]
Student ID (if known): [STUDENT ID]`,
    afterSend: [
      "Count 10 business days from the date the school receives your email",
      "If records are incomplete or missing, follow up in writing identifying exactly what is missing",
      "If they charge you for electronic copies, that is a violation — note it in writing and report it",
      "If the school demands you appear in person, send them a written citation of RS 17:406.9 and refuse",
    ],
  },
  {
    id: "t3",
    badge: "URGENT — Send the same day you learn of an incident",
    icon: "🎥",
    title: "Surveillance Footage Preservation & Viewing Request",
    useFor:
      "the school claims your child was involved in an incident captured on camera. Do not wait.",
    legalBasis: "RS 44:3.1.1 — School surveillance video; parent/guardian viewing rights",
    body: `[TODAY'S DATE — TIME IF POSSIBLE]

To: [PRINCIPAL'S NAME]
[SCHOOL NAME]
[SCHOOL ADDRESS]

URGENT: Surveillance Footage Preservation and Viewing Request
Re: RS 44:3.1.1 — School Surveillance and Security Video

Dear [PRINCIPAL'S NAME],

I am the parent/legal guardian of [CHILD'S FULL NAME], a student at [SCHOOL NAME]. I am writing to formally request the immediate preservation and my right to view surveillance footage related to an incident involving my child.

INCIDENT DETAILS:
Date of incident: [DATE]
Approximate time: [TIME]
Location in school: [e.g., hallway outside Room 204, cafeteria, gymnasium]
Brief description: [DESCRIBE WHAT YOU WERE TOLD HAPPENED]

Pursuant to Louisiana RS 44:3.1.1, I am requesting:

1. IMMEDIATE PRESERVATION of all surveillance and security camera footage from the above-described date, time, and location(s). This written request constitutes notice that this footage must be preserved and must not be overwritten, deleted, or altered.

2. The opportunity to VIEW the relevant footage at a mutually agreed time, as provided by Louisiana law.

Please confirm receipt of this request in writing and provide the earliest available time for me to view the footage. If for any reason this request is denied, please provide the denial in writing, citing the specific legal basis for the denial.

I am available at [YOUR PHONE NUMBER] and [YOUR EMAIL ADDRESS].

Respectfully,

[YOUR FULL NAME]
[YOUR RELATIONSHIP TO CHILD]
[YOUR PHONE NUMBER]
[YOUR EMAIL ADDRESS]

Student: [CHILD'S FULL NAME], [GRADE], [SCHOOL NAME]`,
    afterSend: [
      "Follow up by phone the same day to confirm receipt — then send a follow-up email confirming the phone call",
      "If they deny the request, demand the denial in writing with a specific legal citation",
      "If they cannot produce footage that should exist, ask in writing when it was last backed up and whether it was overwritten",
      "Destruction of footage after a written preservation request can be raised in any legal proceeding",
    ],
  },
  {
    id: "t4",
    badge: "Time-sensitive — File as soon as possible after suspension",
    icon: "⚖️",
    title: "Suspension Appeal Letter",
    useFor:
      "your child has been suspended and you want to formally appeal to the district superintendent",
    legalBasis: "RS 17:416(B) — Parent right to appeal suspension to superintendent",
    body: `[TODAY'S DATE]

To: [SUPERINTENDENT'S NAME]
Superintendent, [SCHOOL DISTRICT NAME]
[DISTRICT ADDRESS]
[CITY, STATE, ZIP]

Re: Formal Appeal of Suspension — [CHILD'S NAME]
School: [SCHOOL NAME] | Date of Suspension: [DATE]

Dear Superintendent [LAST NAME],

I am the parent/legal guardian of [CHILD'S FULL NAME], currently enrolled in [GRADE] at [SCHOOL NAME]. My child was suspended on [DATE OF SUSPENSION] for [STATED REASON FOR SUSPENSION].

Pursuant to Louisiana RS 17:416(B), I am formally appealing this suspension and requesting a hearing before you or your designee on the merits of this case.

GROUNDS FOR APPEAL:
[Choose and complete the ones that apply — delete those that do not]

☐ The school did not provide adequate notice of the reason for the suspension
☐ The school did not follow required procedures before imposing the suspension
☐ The stated reason for the suspension is factually inaccurate — [BRIEF EXPLANATION]
☐ The punishment is disproportionate to the alleged conduct
☐ My child has an IEP / 504 Plan and the behavior may be related to their disability — a Manifestation Determination Review is required before this suspension can stand
☐ Other: [EXPLAIN]

WHAT I AM REQUESTING:
1. A formal hearing on the merits of this suspension, as provided under RS 17:416(B)
2. That my child have continued access to classwork and the ability to earn academic credit during this suspension
3. [Any additional requests — e.g., reinstatement pending the hearing]

I can be reached at [YOUR PHONE NUMBER] and [YOUR EMAIL ADDRESS] and am available to schedule a hearing at your earliest convenience.

Respectfully,

[YOUR FULL NAME]
[YOUR ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL ADDRESS]

Student: [CHILD'S FULL NAME]
Grade: [GRADE]
School: [SCHOOL NAME]
Date of Suspension: [DATE]`,
    afterSend: [
      "Send to the superintendent AND the school principal — keep both on notice",
      "Follow up within 2 business days if you haven't received a response confirming a hearing date",
      "Bring documentation to the hearing — any evidence your child did not do what is alleged, or that the school did not follow process",
      "If your child has an IEP or 504 Plan, contact a free legal clinic before the hearing",
      "After the hearing, request the decision in writing",
    ],
  },
  {
    id: "t5",
    badge: "Use any time — you do not need to wait for the annual review",
    icon: "📘",
    title: "Request for IEP Meeting",
    useFor:
      "services aren't being delivered, child's needs have changed, a new diagnosis came in, or something isn't working",
    legalBasis:
      "IDEA 2004 + Louisiana Bulletin 1530 — Parents are equal IEP team members and may request meetings at any time",
    body: `[TODAY'S DATE]

To: [SPECIAL EDUCATION COORDINATOR OR PRINCIPAL'S NAME]
[SCHOOL NAME]
[SCHOOL ADDRESS]

Re: Request for IEP Team Meeting — [CHILD'S NAME]

Dear [NAME],

I am the parent/legal guardian of [CHILD'S FULL NAME], who currently has an active Individualized Education Program (IEP) at [SCHOOL NAME]. I am writing to formally request an IEP Team meeting pursuant to my rights under the Individuals with Disabilities Education Act (IDEA) and Louisiana Bulletin 1530.

REASON FOR REQUESTING THIS MEETING:
[Choose and complete the ones that apply — delete those that do not]

☐ I have concerns that the current IEP is not being fully implemented
 Specifically: [DESCRIBE WHAT IS NOT BEING DONE]

☐ My child's needs have changed and I believe the current IEP no longer adequately addresses them
 Specifically: [DESCRIBE THE CHANGE]

☐ My child has received a new evaluation or diagnosis that should be considered
 Specifically: [DESCRIBE]

☐ I have concerns about my child's current placement
 Specifically: [DESCRIBE]

☐ My child is experiencing behavioral or academic difficulties that I believe require team discussion
 Specifically: [DESCRIBE]

☐ Other: [EXPLAIN]

I am requesting that the following individuals be present at the meeting:
- An officially designated LEA representative
- My child's regular education teacher(s)
- My child's special education teacher
- A person qualified to interpret evaluation results
- [ANY ADDITIONAL PEOPLE YOU WANT PRESENT]
- I will also be bringing [ADVOCATE'S NAME / ATTORNEY'S NAME] as my support person

I am available on the following dates and times: [LIST 3 OPTIONS]

Please confirm the meeting date, time, and location in writing. I request that all meeting materials, including my child's current IEP, be made available to me in advance.

Sincerely,

[YOUR FULL NAME]
[YOUR RELATIONSHIP TO CHILD]
[YOUR PHONE NUMBER]
[YOUR EMAIL ADDRESS]

Student: [CHILD'S FULL NAME]
Date of Birth: [DATE OF BIRTH]
Current Grade: [GRADE]`,
    afterSend: [
      "The school must respond and schedule the meeting — they cannot ignore a written IEP meeting request",
      "Before the meeting, review the current IEP carefully — note every service and check whether it is actually being delivered",
      "Bring a written parent statement describing your concerns and your child's needs",
      "Take notes during the meeting or bring someone who can",
      "Request the finalized meeting notes and any revised IEP in writing after the meeting",
    ],
  },
  {
    id: "t6",
    badge: "Send as soon as a violation occurs — document while it is fresh",
    icon: "📝",
    title: "School Violation Documentation Letter",
    useFor:
      "the school skipped a required step, violated your rights, failed to follow proper process, or retaliated against you",
    legalBasis: "RS 17:416 / RS 44:1 / IDEA — Creates the paper trail that makes legal action possible",
    body: `[TODAY'S DATE]

To: [PRINCIPAL'S NAME]
[SCHOOL NAME]
[SCHOOL ADDRESS]

CC: [SUPERINTENDENT'S NAME], [SCHOOL DISTRICT]
CC: [CHARTER BOARD CHAIR, if applicable]

Re: Documentation of Procedural Violation — [CHILD'S NAME]

Dear [PRINCIPAL'S NAME],

I am writing to formally document a violation of [my child's / my] legal rights that occurred on [DATE OF VIOLATION] at [SCHOOL NAME]. I am sending this letter to create an official written record of this matter.

DESCRIPTION OF THE VIOLATION:

On [DATE], the following occurred:
[DESCRIBE WHAT HAPPENED IN CLEAR, FACTUAL TERMS — who did what, when, what was said, what was not done that should have been done. Be specific. Include dates and times.]

APPLICABLE LAW THAT WAS VIOLATED:

This conduct appears to violate the following:
☐ RS 17:416 — Louisiana student discipline procedures (required notice / hearing process not followed)
☐ Louisiana Public Records Law RS 44:1 — records request not responded to within required timeframe
☐ IDEA / Louisiana Bulletin 1530 — IEP process requirements were not followed
☐ RS 42:11 — Open Meetings Law (meeting held without proper notice / agenda)
☐ RS 17:406.9 — Parents' Bill of Rights (school records not provided within required time)
☐ Other: [SPECIFY]

WHAT I AM REQUESTING:
1. Written acknowledgment of receipt of this letter within [3] business days
2. [DESCRIBE WHAT YOU WANT THE SCHOOL TO DO — e.g., provide the missing records, schedule the required hearing, comply with the IEP, etc.]
3. Written confirmation of the steps the school will take to correct this violation

Please be aware that if this matter is not resolved, I intend to file a formal complaint with the Louisiana Department of Education and, if applicable, the U.S. Department of Education Office for Civil Rights.

I am available at [YOUR PHONE NUMBER] and [YOUR EMAIL ADDRESS].

Respectfully,

[YOUR FULL NAME]
[YOUR ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL ADDRESS]

Parent/Guardian of: [CHILD'S NAME, GRADE, SCHOOL]`,
    afterSend: [
      "CC the superintendent and board chair so the school knows this is documented beyond just the principal",
      "If no response in 3 business days, file the LDOE complaint (Template 8 below)",
      "Keep all correspondence organized in a dated folder — paper or digital",
      "Share your documentation with your free legal clinic contact before escalating",
    ],
  },
  {
    id: "t7",
    badge: "Send before the 24-hour notice deadline for the meeting",
    icon: "📅",
    title: "Board Meeting Agenda Request",
    useFor:
      "you want to speak at a charter school or school board meeting about an issue affecting your child or school",
    legalBasis: "RS 42:11 — Louisiana Open Meetings Law; public right to attend and participate",
    body: `[TODAY'S DATE]

To: [BOARD CHAIR'S NAME]
Board of Directors / Governing Board
[SCHOOL NAME]
[SCHOOL EMAIL OR ADDRESS]

Re: Request to Be Added to Agenda — [UPCOMING MEETING DATE]

Dear [BOARD CHAIR'S NAME],

I am the parent/legal guardian of [CHILD'S NAME], a student at [SCHOOL NAME]. I am writing to request that I be added to the agenda for the upcoming board meeting scheduled for [DATE OF MEETING].

TOPIC I WISH TO ADDRESS:
[DESCRIBE YOUR TOPIC CLEARLY AND PROFESSIONALLY — e.g., "I wish to address the school's current discipline practices and their compliance with Louisiana RS 17:416," or "I wish to present concerns about the school's failure to respond to public records requests made by multiple families."]

I understand that under Louisiana's Open Meetings Law (RS 42:11), board meetings are open to the public and that members of the public have the right to participate. I am requesting a reasonable amount of time — [3–5 minutes] — to address the board on the above matter.

Please confirm whether this request is granted and provide me with the time allotted on the agenda. If this request is denied, please provide the denial in writing along with the legal basis for the denial.

I can be reached at [YOUR PHONE NUMBER] and [YOUR EMAIL ADDRESS].

Respectfully,

[YOUR FULL NAME]
[YOUR PHONE NUMBER]
[YOUR EMAIL ADDRESS]

Parent/Guardian of: [CHILD'S NAME, GRADE]`,
    afterSend: [
      "Prepare your remarks in advance — practice staying within your time limit",
      "Bring printed copies of any documentation you want the board to see — hand them out at the meeting",
      "Bring other parents if possible — numbers matter and the board will notice",
      "After the meeting, request the official minutes in writing to confirm what was discussed and decided",
    ],
  },
  {
    id: "t8",
    badge: "Escalation — Use after the school has failed to respond or resolve",
    icon: "🏛️",
    title: "LDOE Formal Complaint Escalation Letter",
    useFor:
      "the school has violated the law and failed to correct it after direct contact, or when you need a formal state investigation",
    legalBasis: "LDOE formal complaint process — available for violations of state and federal education law",
    body: `[TODAY'S DATE]

To: Louisiana Department of Education
Office of Student and School Performance / Special Education
[OR: Dispute Resolution Section, if Special Education related]
P.O. Box 94064
Baton Rouge, LA 70804
Email: [Find current LDOE complaint email at louisianabelieves.com]

CC: [CHARTERING AUTHORITY — e.g., OPSB, BESE]
CC: [SCHOOL PRINCIPAL AND BOARD CHAIR]

Re: Formal Complaint Against [SCHOOL NAME]
Student: [CHILD'S NAME] | School: [SCHOOL NAME] | District/Authorizer: [NAME]

Dear Louisiana Department of Education,

I am submitting this formal complaint against [SCHOOL NAME], located at [SCHOOL ADDRESS], regarding violations of [state / federal] education law that have directly affected my child, [CHILD'S FULL NAME].

NATURE OF THE COMPLAINT:
[DESCRIBE THE VIOLATION CLEARLY — what happened, on what date, who was involved, and what legal requirement was not met. Be specific and factual. Attach any supporting documentation.]

TIMELINE OF EVENTS:
[DATE]: [WHAT HAPPENED]
[DATE]: [WHAT HAPPENED]
[DATE]: I sent a written letter to the school documenting the violation and requesting correction (copy attached)
[DATE]: [SCHOOL'S RESPONSE OR LACK OF RESPONSE]
[DATE]: [ANY FURTHER COMMUNICATIONS]

LAWS ALLEGEDLY VIOLATED:
☐ RS 17:416 — Student discipline procedures
☐ RS 44:1 — Louisiana Public Records Law (failure to respond within 3 working days)
☐ RS 17:406.9 — Parents' Bill of Rights (student records not provided within 10 business days)
☐ RS 42:11 — Open Meetings Law
☐ IDEA — IEP procedural requirements / Manifestation Determination not conducted
☐ FERPA — Student records access denied
☐ Section 504 — Disability accommodation violations
☐ Other: [SPECIFY]

DOCUMENTATION ATTACHED:
☐ Copy of original records request / letter sent to school (dated [DATE])
☐ Copy of school's response (or documentation of non-response)
☐ Copy of violation documentation letter sent to school (dated [DATE])
☐ [ANY OTHER SUPPORTING DOCUMENTS]

RELIEF REQUESTED:
1. A formal investigation into [SCHOOL NAME]'s compliance with the above laws
2. [DESCRIBE WHAT YOU WANT TO HAPPEN — e.g., "That the school be required to produce the requested records," "That the school be required to conduct the MDR that was skipped," etc.]
3. Written notification of the outcome of this investigation

I understand that LDOE must investigate formal complaints and respond within 60 days. I am available to provide additional information at any time.

Respectfully,

[YOUR FULL NAME]
[YOUR ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL ADDRESS]

Parent/Guardian of: [CHILD'S NAME, GRADE, SCHOOL]`,
    afterSend: [
      "Send by email AND certified mail — you want proof of both the content and the delivery",
      "LDOE must investigate and respond within 60 days for most complaints",
      "You can file an LDOE complaint AND a federal OCR/FPCO complaint at the same time — they are separate processes",
      "Notify your free legal clinic contact that you have filed — they can advise on next steps based on the school's response",
      "Continue to document everything — the investigation is not a pause on your rights",
    ],
  },
];

export default function TemplatesPage() {
  return (
    <div className="bg-[#0d1b2a] text-[#f4f1ea] min-h-screen">
      <div className="bg-[#c9a13b] text-[#0d1b2a] text-sm text-center py-2 px-4 font-medium">
        🔊 Amplify Justice Liberation Project — Free advocacy resources for Louisiana parents
      </div>

      <header className="border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-bold text-lg tracking-tight">
            ALAB <span className="opacity-60 font-normal">Advocates Louisiana &amp; Beyond</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/rights" className="hover:opacity-80">Know Your Rights</Link>
            <Link href="/templates" className="hover:opacity-80">Templates</Link>
            <Link href="/#about" className="hover:opacity-80">About</Link>
          </div>
        </nav>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-sm text-[#f4f1ea]/60 mb-2">
          <Link href="/" className="hover:underline">Home</Link> › Document Templates
        </p>
        <p className="text-[#c9a13b] font-semibold text-sm uppercase tracking-wide mb-2">
          📄 Document Templates
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ready-to-Use Letters and Request Forms
        </h1>
        <p className="text-[#f4f1ea]/80 mb-8">
          Every template here is based on real Louisiana law. Fill in the
          brackets, send it, and keep a copy. Putting things in writing is
          how you create a paper trail — and paper trails win cases.
        </p>

        <div className="rounded-xl border border-[#c9a13b]/30 bg-[#c9a13b]/10 p-4 mb-10 text-sm">
          ⚠️ <strong>Always send by email when possible.</strong> Email gives
          you automatic proof of delivery with a date and time stamp. If you
          must mail, use certified mail with return receipt. Never rely on a
          verbal request — it is too easy for the school to claim they never
          received it.
        </div>

        <nav className="flex flex-wrap gap-2 mb-12 text-sm">
          {templates.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="rounded-full border border-white/20 px-3 py-1 hover:border-[#c9a13b] hover:text-[#c9a13b] transition"
            >
              {t.title.split(" ").slice(0, 2).join(" ")}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {templates.map((t) => (
            <section key={t.id} id={t.id} className="scroll-mt-24">
              <p className="inline-block rounded-full bg-[#c9a13b]/20 text-[#c9a13b] text-xs font-medium px-3 py-1 mb-3">
                {t.badge}
              </p>
              <h2 className="text-2xl font-bold mb-2">
                {t.icon} {t.title}
              </h2>
              <p className="text-sm text-[#f4f1ea]/70 mb-1">
                <strong>Use for:</strong> {t.useFor}
              </p>
              <p className="text-sm text-[#f4f1ea]/70 mb-4">
                <strong>Legal basis:</strong> {t.legalBasis}
              </p>

              <pre className="whitespace-pre-wrap rounded-xl bg-[#f4f1ea] text-[#0d1b2a] p-5 text-sm leading-relaxed font-sans overflow-x-auto">
                {t.body}
              </pre>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-sm mb-2">✅ After you send this:</p>
                <ul className="list-disc ms-5 space-y-1 text-sm text-[#f4f1ea]/80">
                  {t.afterSend.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 text-sm text-[#f4f1ea]/60 border-t border-white/10 pt-8">
          This site is for informational purposes only and does not
          constitute legal advice. Templates are starting points — consult a
          legal advocate for your specific situation. Laws change — check the
          last-reviewed date.
          <br />
          Last reviewed: June 2026
        </p>
      </div>
    </div>
  );
}
