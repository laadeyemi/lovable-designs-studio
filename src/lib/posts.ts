export type Post = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
};

const allPosts: Post[] = [
  {
    id: "opay-national-innovation-challenge-2026",
    title: "OPay National Innovation Challenge 2026: Win Up to ₦10 Million Grant, Scholarships and Career Opportunities",
    category: "Scholarship",
    date: "2026-05-31",
    excerpt: "OPay opens applications for its 2026 National Innovation Challenge, offering Nigerian undergraduates up to ₦10 million in grants, scholarships, and career pathways.",
    content: `<h2>OPay National Innovation Challenge 2026: Win Up to ₦10 Million Grant, Scholarships and Career Opportunities</h2>
      <p>The OPay National Innovation Challenge 2026 is now open to Nigerian undergraduate students with innovative technology-driven solutions to real-world problems. The programme combines project grants, scholarship awards, mentorship, professional development, and career opportunities to help young innovators transform their ideas into impactful solutions.</p>
      <p>The initiative is part of OPay's ₦1.2 billion, 10-year scholarship commitment aimed at empowering Nigerian students through innovation, technology, and entrepreneurship.</p>

      <h3>About the OPay National Innovation Challenge 2026</h3>
      <p>The challenge is designed to encourage students to develop practical technology-based solutions that address pressing social and economic challenges across various sectors such as healthcare, agriculture, education, and financial services.</p>

      <h3>Eligibility Requirements</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Requirement</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Student Status</td><td class="border border-gray-300 p-2">Undergraduate student in a Nigerian tertiary institution</td></tr>
          <tr><td class="border border-gray-300 p-2">Course of Study</td><td class="border border-gray-300 p-2">Open to all disciplines</td></tr>
          <tr><td class="border border-gray-300 p-2">Design Skill</td><td class="border border-gray-300 p-2">Proficiency in AI-assisted design using Canva-Gemini workflow</td></tr>
          <tr><td class="border border-gray-300 p-2">Polytechnic CGPA</td><td class="border border-gray-300 p-2">Minimum 2.8 on a 4.0 scale</td></tr>
          <tr><td class="border border-gray-300 p-2">University CGPA</td><td class="border border-gray-300 p-2">Minimum 3.5 on a 5.0 scale (2.1 equivalent)</td></tr>
          <tr><td class="border border-gray-300 p-2">Financial Need</td><td class="border border-gray-300 p-2">Preference given to applicants with demonstrated hardship</td></tr>
        </tbody>
      </table>

      <h3>Innovation Areas</h3>
      <ul>
        <li><strong>Fintech:</strong> Digital transactions and financial inclusion.</li>
        <li><strong>Healthtech:</strong> Healthcare delivery and accessibility.</li>
        <li><strong>Cybersecurity:</strong> Data protection and fraud prevention.</li>
        <li><strong>EdTech:</strong> Learning platforms and student support.</li>
        <li><strong>Agritech:</strong> Farming practices and supply chains.</li>
        <li><strong>SMEs:</strong> Digital tools for informal sector operators.</li>
      </ul>

      <h3>Prize Awards and Benefits</h3>
      <h4>First Place Prize (OPay National Innovator of the Year)</h4>
      <ul>
        <li>₦10,000,000 project grant</li>
        <li>₦300,000 scholarship award</li>
        <li>National media recognition & Mentorship</li>
        <li>Job opportunity placement support</li>
      </ul>

      <h4>Second Place Prize</h4>
      <ul>
        <li>₦5,000,000 project grant</li>
        <li>₦300,000 scholarship award</li>
        <li>OPay Innovation Fellowship</li>
      </ul>

      <h4>Third Place Prize</h4>
      <ul>
        <li>₦3,000,000 project grant</li>
        <li>₦300,000 scholarship award</li>
        <li>OPay Innovation Fellowship</li>
      </ul>

      <h3>Programme Timeline</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Period</th>
            <th class="border border-gray-300 p-2">Stage</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">May – June 2026</td><td class="border border-gray-300 p-2">Application</td><td class="border border-gray-300 p-2">Screening of over 100k applicants; 48 teams shortlisted</td></tr>
          <tr><td class="border border-gray-300 p-2">June – Aug 2026</td><td class="border border-gray-300 p-2">Examination</td><td class="border border-gray-300 p-2">6-week training followed by timed examination</td></tr>
          <tr><td class="border border-gray-300 p-2">Aug – Sept 2026</td><td class="border border-gray-300 p-2">Bootcamp</td><td class="border border-gray-300 p-2">Virtual bootcamp facilitated by OPay experts</td></tr>
          <tr><td class="border border-gray-300 p-2">6 Nov 2026</td><td class="border border-gray-300 p-2">Grand Finale</td><td class="border border-gray-300 p-2">Top 4 teams pitch at Empowering Futures Conference 2.0</td></tr>
        </tbody>
      </table>

      <h3>How to Apply</h3>
      <ol>
        <li>Visit the <a href="https://forms.gle/XrBeCYeMvPyY81wr5">official OPay Challenge 2026 application portal</a>.</li>
        <li>Carefully read all instructions and eligibility requirements.</li>
        <li>Complete all required sections of the application form in English.</li>
        <li>Submit your proposal and review carefully before the deadline.</li>
      </ol>

      <h3>Application Checklist</h3>
      <ul>
        <li>Undergraduate status confirmed.</li>
        <li>CGPA meets minimum requirements (2.8 for Poly, 3.5 for Uni).</li>
        <li>Proficient in Canva-Gemini AI design workflow.</li>
        <li>Project aligns with approved innovation sectors.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>The OPay National Innovation Challenge 2026 offers more than just financial rewards; it is a launchpad for the next generation of African tech leaders. Eligible students are encouraged to prepare their applications early to secure their chance at this life-changing opportunity.</p>`,
    tags: [
      "OPay",
      "Innovation Challenge",
      "Scholarship",
      "Tech",
      "Grant",
      "Nigeria",
      "2026",
      "Undergraduate",
    ],
  },
  {
    id: "nnpc-snepco-postgraduate-scholarship-2026",
    title: "NNPC–SNEPCo Postgraduate Scholarship 2026: Study MSc in the UK Fully Supported",
    category: "Scholarship",
    date: "2026-05-31",
    excerpt: "NNPC and SNEPCo invite Nigerian graduates to apply for a fully supported one-year MSc scholarship in the UK at the University of Aberdeen or Newcastle University.",
    content: `<h2>NNPC–SNEPCo Postgraduate Scholarship 2026: Study MSc in the UK Fully Supported</h2>
      <p>The NNPC–SNEPCo Postgraduate Scholarship 2026 is a competitive award designed to support qualified Nigerian graduates who wish to pursue a one-year MSc programme in the United Kingdom. The scholarship is open to applicants from all 36 states of Nigeria and the Federal Capital Territory (FCT), Abuja.</p>
      <p>The programme is jointly run by Shell Nigeria Exploration and Production Company Limited (SNEPCo), operating under Oil Mining Lease 118 in partnership with Nigerian National Petroleum Company Limited (NNPC) and co-venturers Esso Exploration and Production Nigeria and Nigerian Agip Exploration Company Limited.</p>
      <hr>
      <h3>What the Scholarship Covers</h3>
      <p>The award provides partial financial support for studying in the UK, including:</p>
      <ul>
        <li>Full tuition coverage</li>
        <li>One economy return flight ticket (Nigeria–UK–Nigeria)</li>
        <li>Contribution to living expenses based on Association of Commonwealth Universities (ACU) rates</li>
        <li>Medical insurance in line with UK Student Visa requirements</li>
      </ul>
      <hr>
      <h3>Participating Universities</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">University</th>
            <th class="border border-gray-300 p-2">Application Link</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">University of Aberdeen</td><td class="border border-gray-300 p-2"><a href="https://www.abdn.ac.uk/">Official university website</a></td></tr>
          <tr><td class="border border-gray-300 p-2">Newcastle University</td><td class="border border-gray-300 p-2"><a href="https://www.ncl.ac.uk/">Official university website</a></td></tr>
        </tbody>
      </table>
      <hr>
      <h3>Eligible MSc Courses</h3>
      <h4>University of Aberdeen</h4>
      <ul>
        <li>MSc Geophysics</li>
        <li>MSc Safety and Reliability Engineering for Oil and Gas</li>
        <li>MSc Advanced Chemical Engineering</li>
        <li>MSc Integrated Petroleum Geoscience</li>
      </ul>
      <h4>Newcastle University</h4>
      <ul>
        <li>MSc Data Science</li>
        <li>MSc Data Science and Artificial Intelligence</li>
        <li>MSc Artificial Intelligence</li>
        <li>MSc Robotics and Artificial Intelligence</li>
        <li>MSc Engineering Management</li>
        <li>MSc Sustainable Chemical Engineering</li>
        <li>MSc Marine and Ocean Engineering</li>
      </ul>
      <hr>
      <h3>Eligibility Criteria</h3>
      <p>Applicants must meet strict requirements:</p>
      <ul>
        <li><strong>Nationality:</strong> Must be Nigerian and resident in Nigeria.</li>
        <li><strong>Age:</strong> 21 to 28 years by 30 September 2026.</li>
        <li><strong>Academic:</strong> Hold or expect a UK Upper Second-Class Honours equivalent degree.</li>
        <li><strong>NYSC:</strong> Completed NYSC by September 2026.</li>
        <li><strong>Language:</strong> Minimum IELTS score of 6.5.</li>
        <li><strong>Travel:</strong> Must possess a valid Nigerian international passport (valid until Dec 2026).</li>
      </ul>
      <hr>
      <h3>How to Apply</h3>
      <ol>
        <li><strong>Choose an Eligible Course:</strong> Select a supported programme at Aberdeen or Newcastle.</li>
        <li><strong>Apply for Admission:</strong> Submit an application through the university's portal.</li>
        <li><strong>Receive Offer:</strong> Obtain a formal offer of admission.</li>
        <li><strong>Submit Scholarship Application:</strong> Complete the form via the university website after receiving an offer.</li>
      </ol>
      <hr>
      <h3>Application Deadline</h3>
      <ul>
        <li><strong>Closing date:</strong> 30 June 2026</li>
        <li><strong>Academic session begins:</strong> September 2026</li>
      </ul>
      <hr>
      <h3>Application Checklist</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Checklist Item</th>
            <th class="border border-gray-300 p-2">Requirement</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Age</td><td class="border border-gray-300 p-2">Between 21 and 28 years</td></tr>
          <tr><td class="border border-gray-300 p-2">IELTS Score</td><td class="border border-gray-300 p-2">At least 6.5</td></tr>
          <tr><td class="border border-gray-300 p-2">Passport</td><td class="border border-gray-300 p-2">Valid until Dec 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Deadline</td><td class="border border-gray-300 p-2">Before 30 June 2026</td></tr>
        </tbody>
      </table>
      <hr>
      <h3>Conclusion</h3>
      <p>The NNPC–SNEPCo Postgraduate Scholarship 2026 offers a valuable opportunity for Nigerian graduates to pursue advanced MSc studies in the United Kingdom. With full tuition support and living contributions, the programme is designed to build skilled professionals in the energy and technology sectors. Interested applicants should begin early by securing university admission.</p>`,
    tags: [
      "NNPC",
      "SNEPCo",
      "Scholarship",
      "Postgraduate",
      "UK Study",
      "MSc",
      "Nigeria",
      "Aberdeen",
      "Newcastle",
      "2026",
    ],
  },
  {
    id: "heirs-insurance-essay-championship-2026",
    title: "Heirs Insurance Essay Championship 2026: Win Up to ₦5 Million Scholarship Award",
    category: "Scholarship",
    date: "2026-05-31",
    excerpt: "Heirs Insurance opens its 2026 Essay Championship for Nigerian JSS1-JSS3 students, offering a grand prize of a ₦5,000,000 scholarship and ₦1,000,000 school grant.",
    content: `<h2>Heirs Insurance Essay Championship 2026: Win Up to ₦5 Million Scholarship Award</h2>
      <p>The Heirs Insurance Essay Championship 2026 is now open to junior secondary school students across Nigeria. The annual competition provides an opportunity for students in JSS1 to JSS3 to showcase their writing skills, creativity, and understanding of insurance through a structured essay contest.</p>
      <p>This year's competition offers scholarship prizes worth millions of naira, with the overall winner receiving a ₦5,000,000 scholarship award. In addition, the winner's school will receive a ₦1,000,000 educational grant.</p>
      <p>Students interested in participating are encouraged to carefully review the competition requirements and submit their entries before the application deadline.</p>

      <h3>Eligibility Requirements</h3>
      <p>The competition is open to junior secondary school students in Nigeria. Applicants must meet the following requirements:</p>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Eligibility Criteria</th>
            <th class="border border-gray-300 p-2">Requirement</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">School Level</td><td class="border border-gray-300 p-2">JSS1 to JSS3</td></tr>
          <tr><td class="border border-gray-300 p-2">Location</td><td class="border border-gray-300 p-2">Nigeria</td></tr>
          <tr><td class="border border-gray-300 p-2">Essay Format</td><td class="border border-gray-300 p-2">Typed essay (Word Document)</td></tr>
          <tr><td class="border border-gray-300 p-2">Topic Area</td><td class="border border-gray-300 p-2">Insurance and safer, more secure societies</td></tr>
          <tr><td class="border border-gray-300 p-2">Submission Deadline</td><td class="border border-gray-300 p-2">8 July 2026</td></tr>
        </tbody>
      </table>

      <h3>Essay Topic for 2026</h3>
      <p>The 2026 essay competition focuses on the role of insurance in creating safer and more secure societies. Participants are expected to discuss how insurance contributes to protecting individuals, families, businesses, and communities from unexpected risks and losses.</p>

      <h3>Scholarship Prizes and Awards</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Position</th>
            <th class="border border-gray-300 p-2">Prize</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Winner</td><td class="border border-gray-300 p-2">₦5,000,000 Scholarship</td></tr>
          <tr><td class="border border-gray-300 p-2">First Runner-Up</td><td class="border border-gray-300 p-2">₦3,000,000 Scholarship</td></tr>
          <tr><td class="border border-gray-300 p-2">Second Runner-Up</td><td class="border border-gray-300 p-2">₦1,000,000 Scholarship</td></tr>
          <tr><td class="border border-gray-300 p-2">Winner's School</td><td class="border border-gray-300 p-2">₦1,000,000 Educational Grant</td></tr>
        </tbody>
      </table>

      <h3>Submission Guidelines</h3>
      <ul>
        <li>The essay must contain no more than <strong>500 words</strong>.</li>
        <li>Must be typed and submitted as a <strong>Microsoft Word document</strong>.</li>
        <li>Must include the student's full name, school, and class.</li>
        <li>File must be saved using the <strong>student's full name</strong> as the file name.</li>
        <li>A recent passport photograph and valid identification must be uploaded.</li>
      </ul>

      <h3>Artificial Intelligence Policy</h3>
      <p>The use of artificial intelligence (AI) tools is <strong>strictly prohibited</strong>. Participants must not use AI tools to generate, rewrite, or expand content. All submissions must reflect the student's original thoughts and writing ability.</p>

      <h3>How to Apply</h3>
      <ol>
        <li>Prepare a typed essay on the approved topic (max 500 words).</li>
        <li>Ensure your full name, school name, and class are clearly stated on the document.</li>
        <li>Save the document using your full name.</li>
        <li>Visit the <a href="https://forms.heirsinsurance.com/essaychampionship">official Heirs Insurance Essay Championship portal</a> to submit.</li>
      </ol>
      <p>For additional details, visit the <a href="https://www.heirsinsurancegroup.com/essay/">Heirs Insurance Championship page</a>.</p>

      <h3>Application Checklist</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Checklist Item</th>
            <th class="border border-gray-300 p-2">Requirement</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Word Count</td><td class="border border-gray-300 p-2">Under 500 words</td></tr>
          <tr><td class="border border-gray-300 p-2">File Format</td><td class="border border-gray-300 p-2">.doc or .docx</td></tr>
          <tr><td class="border border-gray-300 p-2">AI Usage</td><td class="border border-gray-300 p-2">Zero AI assistance</td></tr>
          <tr><td class="border border-gray-300 p-2">Deadline</td><td class="border border-gray-300 p-2">Before 8 July 2026</td></tr>
        </tbody>
      </table>

      <h3>Conclusion</h3>
      <p>The Heirs Insurance Essay Championship 2026 offers Nigerian junior secondary school students a valuable opportunity to showcase their writing talent while competing for substantial scholarship awards. Eligible candidates should prepare their entries early to avoid the deadline rush.</p>`,
    tags: [
      "Heirs Insurance",
      "Essay Competition",
      "Scholarship",
      "Junior Secondary",
      "Nigeria",
      "Education",
      "JSS",
      "2026",
    ],
  },
  {
    id: "long-empowerment-foundation-scholarship-2026",
    title: "LONG Empowerment Foundation Scholarship 2026 for Nigerian Students: Eligibility, Benefits and How to Apply",
    category: "Scholarship",
    date: "2026-05-31",
    excerpt: "The LONG Empowerment Foundation has opened applications for its 2026 scholarship programme, providing comprehensive support to Nigerian students across secondary, polytechnic, and university levels.",
    content: `<h2>LONG Empowerment Foundation Scholarship 2026 for Nigerian Students: Eligibility, Benefits and How to Apply</h2>
      <p>The LONG Empowerment Foundation Scholarship 2026 is now open to eligible Nigerian students from low-income families. The scholarship programme is designed to provide financial support to students at different levels of education, including secondary schools, polytechnics, and universities.</p>
      <p>The initiative aims to remove financial barriers to education by covering essential academic expenses such as tuition fees, accommodation, living expenses, examination fees, and learning materials.</p>

      <h3>Scholarship Categories Available</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Scholarship Category</th>
            <th class="border border-gray-300 p-2">Target Beneficiaries</th>
            <th class="border border-gray-300 p-2">Support Provided</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Undergraduate Scholarship</td><td class="border border-gray-300 p-2">Students in accredited Nigerian universities</td><td class="border border-gray-300 p-2">Tuition, accommodation, and living expenses for one academic year</td></tr>
          <tr><td class="border border-gray-300 p-2">OND/HND Scholarship</td><td class="border border-gray-300 p-2">Polytechnic students</td><td class="border border-gray-300 p-2">Tuition, accommodation, and living expenses for one academic year</td></tr>
          <tr><td class="border border-gray-300 p-2">Young Achievers Scholarship</td><td class="border border-gray-300 p-2">Junior and senior secondary school students</td><td class="border border-gray-300 p-2">Educational support for up to six academic years</td></tr>
          <tr><td class="border border-gray-300 p-2">WAEC/JAMB Support Scheme</td><td class="border border-gray-300 p-2">Final-year secondary school students</td><td class="border border-gray-300 p-2">WAEC and JAMB registration fees</td></tr>
        </tbody>
      </table>

      <h3>Undergraduate and OND/HND Scholarship Benefits</h3>
      <p>The LONG Scholars Program provides financial assistance to students enrolled in accredited Nigerian institutions. Successful applicants may receive support covering tuition fees, accommodation expenses, and living stipends. These awards are valid for one academic session and may be renewed based on academic performance and continued financial need.</p>

      <h3>Young Achievers and Examination Support</h3>
      <p>The Young Achievers Scholarship targets exceptional secondary school students at risk of dropping out. Additionally, the foundation provides registration fee support for WAEC and JAMB to ensure financially disadvantaged final-year students can transition to tertiary education.</p>

      <h3>Eligibility Requirements for Undergraduate Applicants</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Requirement</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Age</td><td class="border border-gray-300 p-2">Between 16 and 26 years</td></tr>
          <tr><td class="border border-gray-300 p-2">Admission Status</td><td class="border border-gray-300 p-2">Must have gained admission into an accredited Nigerian university</td></tr>
          <tr><td class="border border-gray-300 p-2">Continuing Students</td><td class="border border-gray-300 p-2">Minimum CGPA of 3.5 on a 5.0 scale or Second Class Upper equivalent</td></tr>
          <tr><td class="border border-gray-300 p-2">WAEC Result</td><td class="border border-gray-300 p-2">Minimum of five credit passes</td></tr>
          <tr><td class="border border-gray-300 p-2">JAMB Score</td><td class="border border-gray-300 p-2">At least 200</td></tr>
          <tr><td class="border border-gray-300 p-2">Family Income</td><td class="border border-gray-300 p-2">Less than ₦3 million annually</td></tr>
        </tbody>
      </table>

      <h3>Eligibility Requirements for Secondary School Applicants</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Requirement</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Age</td><td class="border border-gray-300 p-2">10 to 19 years</td></tr>
          <tr><td class="border border-gray-300 p-2">School Level</td><td class="border border-gray-300 p-2">JSS1 to SS3</td></tr>
          <tr><td class="border border-gray-300 p-2">Academic Performance</td><td class="border border-gray-300 p-2">Preference for students in the top 20% of their class</td></tr>
          <tr><td class="border border-gray-300 p-2">Financial Need</td><td class="border border-gray-300 p-2">Evidence of financial hardship (lack of support or bank statements)</td></tr>
        </tbody>
      </table>

      <h3>How to Apply</h3>
      <p>The application process is completed through the following steps:</p>
      <ol>
        <li>Access the <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8Uvn9yJ4kq9PoHjVMau4n6bew066rf4mLqP1etAZFPZjS4A/viewform">LONG Empowerment Foundation Scholarship application form</a>.</li>
        <li>Fill in all required personal and academic information.</li>
        <li>Upload necessary academic documents (Admission letters, Results, Transcripts).</li>
        <li>Submit relevant financial documents/proof of need.</li>
        <li>Review and submit the application.</li>
      </ol>
      <p>Candidates can find more detailed information <a href="https://longempowerment.org/scholarships">HERE</a>.</p>

      <h3>Important Information</h3>
      <ul>
        <li><strong>Fee:</strong> The application is completely free. Do not pay anyone claiming to facilitate the process.</li>
        <li><strong>Documentation:</strong> Providing complete and accurate documentation improves the chances of successful consideration.</li>
        <li><strong>Selection:</strong> Only shortlisted candidates will be contacted by the foundation for the next stage.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>The LONG Empowerment Foundation Scholarship 2026 offers a valuable opportunity for Nigerian students facing financial challenges to continue their education without excessive financial pressure. Eligible students are encouraged to prepare their documents early and submit their applications before the deadline.</p>`,
    tags: [
      "Scholarship",
      "LONG Foundation",
      "Nigeria",
      "Education",
      "Undergraduate",
      "Secondary School",
      "WAEC",
      "JAMB",
      "2026",
    ],
  },
  {
    id: "ospohas-post-utme-form-nd-admission-2026-2027",
    title: "OSPOHAS Post UTME Form 2026/2027: Apply for ND Full-Time Admission",
    category: "Education",
    date: "2026-05-31",
    excerpt: "The Ogun State Polytechnic of Health and Allied Sciences (OSPOHAS), Ilese-Ijebu, has commenced the sale of its Post UTME screening form for the 2026/2027 academic session.",
    content: `<h2>OSPOHAS Post UTME Form 2026/2027: Apply for ND Full-Time Admission</h2>
      <p>The Ogun State Polytechnic of Health and Allied Sciences (OSPOHAS), Ilese-Ijebu, has commenced the sale of its Post UTME screening form for admission into National Diploma (ND) full-time programmes for the 2026/2027 academic session.</p>
      <p>Interested candidates who meet the admission requirements can now apply online through the institution's admission portal. The application fee is <strong>₦2,000 only</strong>.</p>

      <h3>Who Is Eligible to Apply?</h3>
      <p>Candidates seeking admission into OSPOHAS must meet the following requirements:</p>
      <ul>
        <li>Must have participated in the 2026 UTME.</li>
        <li>Must score at least <strong>100</strong> in the UTME.</li>
        <li>Must have selected OSPOHAS as their first-choice institution.</li>
      </ul>
      <p>Candidates who did not initially choose OSPOHAS can still apply after completing a change of institution through any JAMB-accredited CBT centre and selecting OSPOHAS as their first choice. Applicants must also be at least <strong>16 years old on or before 30 September 2026</strong>.</p>

      <h3>OSPOHAS Post UTME Application Fee</h3>
      <p>The Post UTME screening form costs <strong>₦2,000 only</strong>. The Polytechnic has stated that payment must be made online through its official portal. Manual payments and POS transactions are not accepted.</p>

      <h3>Available ND Programmes</h3>
      <p>OSPOHAS offers admission into various health, science, engineering, and technology-related programmes, including Statistics, Computer Engineering, Public Health Technology, Nutrition and Dietetics, Computer Science, Pharmacy Technician, and Science Laboratory Technology.</p>
      <p>They also offer ND/HND integrated programmes in Community Health, Dental Therapy, Dental Technology, Environmental Health Technology, and Health Information Management.</p>

      <h3>O’Level Requirements</h3>
      <p>Applicants must possess a minimum of five credit passes in relevant subjects obtained in not more than two sittings from WAEC, NECO, or NABTEB. The required subjects are:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Physics</li>
      </ul>

      <h3>Requirements for HND Applicants</h3>
      <p>Applicants seeking admission into HND-related programmes must possess a National Diploma (ND) with at least a Lower Credit in a relevant discipline, a valid JAMB admission letter for the ND programme, and five O'Level credits in the required science subjects.</p>

      <h3>How to Apply for OSPOHAS Post UTME</h3>
      <ol>
        <li>Visit the <a href="https://my.ospohasilese.edu.ng/admission/apply/application">official OSPOHAS admission portal</a>.</li>
        <li>Select the Post UTME screening application option.</li>
        <li>Complete the online application form with accurate details.</li>
        <li>Pay the ₦2,000 application fee online.</li>
        <li>Submit the application and print any required acknowledgement documents.</li>
      </ol>

      <h3>Key Admission Details at a Glance</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Item</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2">Institution</td>
            <td class="border border-gray-300 p-2">Ogun State Polytechnic of Health and Allied Sciences (OSPOHAS)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Minimum UTME Score</td>
            <td class="border border-gray-300 p-2">100</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Application Fee</td>
            <td class="border border-gray-300 p-2">₦2,000</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">O'Level Requirement</td>
            <td class="border border-gray-300 p-2">Five Credits including English, Mathematics, Biology, Chemistry, and Physics</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Payment Method</td>
            <td class="border border-gray-300 p-2">Online Only</td>
          </tr>
        </tbody>
      </table>

      <p>Prospective applicants are encouraged to complete their applications early and ensure all admission requirements are met before the closing date.</p>`,
    tags: [
      "OSPOHAS",
      "Ogun State",
      "Post UTME",
      "Admission",
      "2026/2027",
      "ND",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "uniben-post-utme-direct-entry-screening-2026-2027",
    title: "University of Benin Opens 2026/2027 Post UTME and Direct Entry Screening",
    category: "Education",
    date: "2026-05-31",
    excerpt: "University of Benin (UNIBEN) has officially released details for its Post UTME and Direct Entry screening exercise for the 2026/2027 academic session. Application window closes July 3, 2026.",
    content: `<h2>University of Benin Opens 2026/2027 Post UTME and Direct Entry Screening</h2>
      <p>University of Benin has officially released details for its Post UTME and Direct Entry screening exercise for the 2026/2027 academic session.</p>
      <p>The application window will run from <strong>Friday, 5 June 2026</strong> to <strong>midnight on Friday, 3 July 2026</strong>, and is open to qualified candidates seeking admission into undergraduate programmes of the institution.</p>

      <h3>Who Can Apply for UNIBEN Post UTME?</h3>
      <p>To be eligible, candidates must:</p>
      <ul>
        <li>Choose University of Benin as <strong>first choice through JAMB</strong></li>
        <li>Score <strong>200 and above in the 2026 UTME</strong></li>
      </ul>
      <p>Direct Entry candidates who selected UNIBEN as their first choice through Joint Admissions and Matriculation Board are also eligible to participate in the screening exercise.</p>

      <h3>Application Period</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Item</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Institution</td><td class="border border-gray-300 p-2">University of Benin</td></tr>
          <tr><td class="border border-gray-300 p-2">Screening Type</td><td class="border border-gray-300 p-2">Post UTME & Post Direct Entry</td></tr>
          <tr><td class="border border-gray-300 p-2">Session</td><td class="border border-gray-300 p-2">2026/2027</td></tr>
          <tr><td class="border border-gray-300 p-2">Application Starts</td><td class="border border-gray-300 p-2">8:00 a.m., Friday, 5 June 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Application Closes</td><td class="border border-gray-300 p-2">Midnight, Friday, 3 July 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Screening Dates</td><td class="border border-gray-300 p-2">27 July – 1 August 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Mode</td><td class="border border-gray-300 p-2">Computer-Based Test (CBT)</td></tr>
          <tr><td class="border border-gray-300 p-2">Venue</td><td class="border border-gray-300 p-2">Ugbowo Campus Centres</td></tr>
          <tr><td class="border border-gray-300 p-2">Fee</td><td class="border border-gray-300 p-2">₦2,000 (excluding portal charges)</td></tr>
        </tbody>
      </table>
      <p>Candidates are strongly advised to complete all registration and payment before the deadline, as late submissions will not be considered.</p>

      <h3>O’Level Requirements</h3>
      <p>Applicants must possess at least <strong>five credit passes</strong> in relevant subjects obtained in WAEC, NECO, GCE O’Level, or equivalent examinations.</p>
      <p>Key conditions include:</p>
      <ul>
        <li>English Language is compulsory</li>
        <li>Mathematics is required for courses that demand it</li>
        <li>Three other relevant subjects based on the chosen course</li>
        <li>A maximum of <strong>two sittings</strong> is allowed</li>
      </ul>

      <h3>How to Apply for UNIBEN Post UTME</h3>
      <p>Candidates are required to apply online through the university portal by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://unibenportal.com/#application">UNIBEN admission portal</a></li>
        <li>Navigate to the Application Menu</li>
        <li>Read instructions under Post UTME Application</li>
        <li>Click “Begin Application Process”</li>
        <li>Enter JAMB Registration Number, score, and password</li>
        <li>Log in using JAMB number as User ID</li>
        <li>Fill in required personal details</li>
        <li>Make payment of ₦2,000 via Remita</li>
        <li>Use an ATM-enabled bank card</li>
        <li>Preview and submit the application</li>
      </ol>
      <p>Applicants are warned that <strong>no correction will be allowed after submission</strong>, so all details must be carefully checked.</p>

      <h3>Screening Examination Details</h3>
      <p>The CBT screening exercise is scheduled to hold from <strong>Monday, 27 July 2026 – Saturday, 1 August 2026</strong>. Candidates will be assigned specific dates, venues, and times within this period. The screening will take place at designated centres within the <strong>Ugbowo Campus</strong>.</p>

      <h3>Checking Screening Schedule</h3>
      <p>Candidates are expected to return to the portal from <strong>Friday, 17 July 2026</strong>, to check their screening date, venue, and time.</p>

      <h3>Documents Required at the Screening Centre</h3>
      <p>Candidates must bring their Acknowledgement Slip and Screening Invitation Slip. These documents are compulsory for entry into the examination hall.</p>

      <h3>Screening Rules and Guidelines</h3>
      <ul>
        <li>Candidates must arrive at least <strong>one hour before</strong> their scheduled time</li>
        <li>Mobile phones and calculators are prohibited</li>
        <li>Only approved materials will be permitted inside the venue</li>
      </ul>

      <h3>Conclusion</h3>
      <p>The UNIBEN Post UTME and Direct Entry screening remains one of the most competitive admission processes in Nigeria. Candidates are advised to complete their registration early and prepare adequately for the CBT screening ahead of the <strong>2026/2027 admission exercise</strong>.</p>`,
    tags: [
      "UNIBEN",
      "University of Benin",
      "Post UTME",
      "Direct Entry",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "unical-post-utme-direct-entry-screening-2026-2027",
    title: "University of Calabar Opens 2026/2027 Post UTME and Direct Entry Screening",
    category: "Education",
    date: "2026-05-31",
    excerpt: "University of Calabar (UNICAL) has officially announced the commencement of its Post UTME and Direct Entry screening registration for the 2026/2027 undergraduate admission exercise.",
    content: `<h2>University of Calabar Opens 2026/2027 Post UTME and Direct Entry Screening</h2>
      <p>University of Calabar has officially announced the commencement of its Post UTME and Direct Entry screening registration for the 2026/2027 undergraduate admission exercise.</p>
      <p>The application process is strictly online, and candidates are required to complete registration, pay the ₦2,000 screening fee, and print their registration slip before the closing date.</p>

      <h3>Who Can Apply for UNICAL Post UTME?</h3>
      <p>The screening exercise is open to JAMB UTME candidates in two categories:</p>
      <ul>
        <li>Candidates who selected UNICAL as <strong>first choice</strong> and scored <strong>150 and above</strong></li>
        <li>Candidates who did not select UNICAL as first choice but wish to study there and also scored <strong>150 and above</strong></li>
      </ul>
      <p>The minimum requirement remains a UTME score of <strong>150</strong>, and applicants below this mark are not eligible.</p>

      <h3>Application Period</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Item</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Institution</td><td class="border border-gray-300 p-2">University of Calabar</td></tr>
          <tr><td class="border border-gray-300 p-2">Screening Type</td><td class="border border-gray-300 p-2">Post UTME & Direct Entry</td></tr>
          <tr><td class="border border-gray-300 p-2">Session</td><td class="border border-gray-300 p-2">2026/2027</td></tr>
          <tr><td class="border border-gray-300 p-2">Registration Opens</td><td class="border border-gray-300 p-2">Monday, 1 June 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Registration Closes</td><td class="border border-gray-300 p-2">Friday, 31 July 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Application Fee</td><td class="border border-gray-300 p-2">₦2,000 (non-refundable)</td></tr>
          <tr><td class="border border-gray-300 p-2">Payment Methods</td><td class="border border-gray-300 p-2">ATM card, bank transfer, USSD</td></tr>
        </tbody>
      </table>
      <p>Applicants are strongly advised to complete registration early, as late applications will not be considered.</p>

      <h3>How to Apply for UNICAL Post UTME</h3>
      <p>Candidates must complete the application through the official UNICAL portal by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://postutme.unical.edu.ng/">UNICAL Post UTME portal</a></li>
        <li>Enter your JAMB registration number to verify eligibility</li>
        <li>Fill in the required personal details</li>
        <li>Provide a valid email address and phone number</li>
        <li>Pay the ₦2,000 screening fee online</li>
        <li>Confirm all entries carefully</li>
        <li>Click SUBMIT</li>
        <li>Print the completed registration slip</li>
      </ol>

      <h3>Important O’Level Requirement</h3>
      <p>All applicants must possess the required O’Level credits in relevant subjects. A special note applies to Medicine and Surgery applicants: Only <strong>one sitting</strong> O’Level result is accepted, in line with CCMAS guidelines.</p>

      <h3>Direct Entry Applicants</h3>
      <p>Direct Entry candidates are also eligible to apply if they possess relevant qualifications such as OND, HND, NCE, or A’Level. Applicants must ensure their qualifications match their intended course of study.</p>

      <h3>Payment Information</h3>
      <p>The screening fee is <strong>₦2,000 (non-refundable)</strong>. Accepted payment methods include ATM debit card, bank transfer, and USSD payment. The university has discontinued E-transact and scratch card PIN payments.</p>

      <h3>Important Application Warnings</h3>
      <p>UNICAL has warned that candidates may be disqualified for:</p>
      <ul>
        <li>False UTME score declarations</li>
        <li>Incorrect O’Level result details</li>
        <li>False state of origin information</li>
      </ul>

      <h3>Required Documents After Registration</h3>
      <p>After completing the application, candidates must print and keep the Registration slip and Payment confirmation details. The slip serves as proof of successful registration and may be required during screening.</p>

      <h3>Contact and Support</h3>
      <p>Candidates needing assistance can reach the ICT support team via:</p>
      <ul>
        <li>+234-706-859-7968</li>
        <li>+234-806-933-1454</li>
        <li>+234-0802-363-0209</li>
        <li>Email: <a href="mailto:ictsupport@unical.edu.ng">ictsupport@unical.edu.ng</a></li>
      </ul>

      <h3>Final Note</h3>
      <p>Admission into the University of Calabar remains competitive, and only candidates who follow the correct process and meet all requirements will be considered for the 2026/2027 screening exercise.</p>`,
    tags: [
      "UNICAL",
      "University of Calabar",
      "Post UTME",
      "Direct Entry",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "ebsconsu-nd-hnd-nursing-admission-form-2026-2027",
    title: "EBSCONSU ND/HND Nursing Admission Form 2026/2027 Now Available",
    category: "Education",
    date: "2026-05-31",
    excerpt: "The Ebonyi State College of Nursing Sciences (EBSCONSU), Uburu, Ebonyi State, has commenced the sale of admission forms into its National Diploma (ND) and Higher National Diploma (HND) Nursing programmes for the 2026/2027 academic session.",
    content: `<h2>EBSCONSU ND/HND Nursing Admission Form 2026/2027 Now Available</h2>
      <p>The Ebonyi State College of Nursing Sciences (EBSCONSU), Uburu, Ebonyi State, has commenced the sale of admission forms into its National Diploma (ND) and Higher National Diploma (HND) Nursing programmes for the 2026/2027 academic session.</p>
      <p>Interested and qualified candidates can now apply through the college admission portal. Applicants must possess a valid 2026 UTME registration number, score at least 160 in the UTME, and meet the required O'Level qualifications.</p>

      <h3>Admission Requirements for EBSCONSU Nursing Programmes</h3>
      <p>Candidates seeking admission into the ND/HND Nursing programme must satisfy the following requirements:</p>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Requirement</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">UTME Year</td><td class="border border-gray-300 p-2">2026 UTME</td></tr>
          <tr><td class="border border-gray-300 p-2">UTME Registration</td><td class="border border-gray-300 p-2">Valid UTME registration number required</td></tr>
          <tr><td class="border border-gray-300 p-2">Minimum UTME Score</td><td class="border border-gray-300 p-2">160</td></tr>
          <tr><td class="border border-gray-300 p-2">O'Level Results</td><td class="border border-gray-300 p-2">WAEC, GCE, NECO, or NABTEB</td></tr>
          <tr><td class="border border-gray-300 p-2">Required Subjects</td><td class="border border-gray-300 p-2">English Language, Mathematics, Biology, Chemistry, and Physics</td></tr>
          <tr><td class="border border-gray-300 p-2">Number of Sittings</td><td class="border border-gray-300 p-2">Not more than two sittings</td></tr>
          <tr><td class="border border-gray-300 p-2">NABTEB Combination Rule</td><td class="border border-gray-300 p-2">NABTEB can only be combined with NABTEB</td></tr>
        </tbody>
      </table>
      <p>Applicants are advised to carefully verify that they possess all the required subjects before proceeding with the application process, as failure to meet any requirement may affect their eligibility during screening.</p>

      <h3>NABTEB Result Combination Policy</h3>
      <p>The college has stated clearly that NABTEB results can only be combined with another NABTEB result. Candidates using NABTEB should not combine it with WAEC, GCE, or NECO results. Applicants are encouraged to take note of this requirement before submitting their O'Level details.</p>

      <h3>Application Fee</h3>
      <p>The EBSCONSU admission form costs <strong>₦25,200</strong>, and the fee is non-refundable. Payment can be made online or at any commercial bank after generating a Remita Retrieval Reference (RRR) through the application portal.</p>
      <p>Applicants should ensure that all payments are made strictly through the approved process and avoid making payments to individuals claiming to facilitate admission.</p>

      <h3>How to Apply for EBSCONSU Admission</h3>
      <p>Candidates should follow the steps below to complete their application:</p>
      <ol>
        <li>Visit the <a href="https://www.ebsconsu.edu.ng/apply">EBSCONSU application portal</a>.</li>
        <li>Generate a Remita Retrieval Reference (RRR).</li>
        <li>Pay the non-refundable application fee of ₦25,200 online or at any commercial bank using the generated RRR.</li>
        <li>Return to the <a href="https://www.ebsconsu.edu.ng/continueApplication">application continuation portal</a>.</li>
        <li>Complete the online application form.</li>
        <li>Submit the form and print the application slip.</li>
      </ol>

      <h3>Screening Examination Details</h3>
      <p>Qualified candidates will participate in a Computer-Based Test (CBT) as part of the admission screening exercise.</p>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Screening Details</th>
            <th class="border border-gray-300 p-2">Information</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Examination Type</td><td class="border border-gray-300 p-2">Computer-Based Test (CBT)</td></tr>
          <tr><td class="border border-gray-300 p-2">Date</td><td class="border border-gray-300 p-2">Saturday, 29 August 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Time</td><td class="border border-gray-300 p-2">9:00 a.m. Prompt</td></tr>
          <tr><td class="border border-gray-300 p-2">Venue</td><td class="border border-gray-300 p-2">College of Nursing Sciences, Uburu</td></tr>
        </tbody>
      </table>

      <h3>Documents Required for Screening</h3>
      <p>Applicants are expected to come to the screening venue with their printed application slip, UTME registration details, O'Level result details, and evidence of payment. The application slip serves as proof that the online application process was successfully completed.</p>

      <h3>Important Fraud Warning</h3>
      <p>The college management has warned applicants to be vigilant and avoid fraudsters. The management does not authorize any agent or representative to collect admission fees on its behalf. All payments must be made only through the official RRR payment process.</p>

      <h3>Contact Information</h3>
      <p>For enquiries regarding admission, candidates may contact the college through the following phone numbers: 08167346493 or 08144943583. Applicants are advised to have their application details readily available before making enquiries.</p>

      <h3>Summary</h3>
      <p>Candidates seeking admission into the EBSCONSU ND/HND Nursing programme for the 2026/2027 academic session must score at least 160 in the 2026 UTME and have the required five O'Level science credits. Applicants must complete the online application and attend the CBT screening on Saturday, 29 August 2026.</p>`,
    tags: [
      "EBSCONSU",
      "Ebonyi",
      "Nursing",
      "Admission",
      "2026/2027",
      "ND",
      "HND",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "uniport-post-utme-registration-2026-2027-official",
    title: "UNIPORT Opens 2026/2027 Post UTME Screening Registration",
    category: "Education",
    date: "2026-05-31",
    excerpt: "University of Port Harcourt has officially announced the commencement of its Post UTME screening registration for the 2026/2027 undergraduate admission exercise.",
    content: `<h2>UNIPORT Opens 2026/2027 Post UTME Screening Registration</h2>
      <p>University of Port Harcourt has officially announced the commencement of its Post UTME screening registration for the 2026/2027 undergraduate admission exercise.</p>
      <p>The screening exercise is open to qualified candidates seeking admission into various degree programmes offered by the university.</p>

      <h3>Who Can Apply for UNIPORT Post UTME?</h3>
      <p>Candidates are eligible if they:</p>
      <ul>
        <li>Selected UNIPORT as <strong>first choice</strong> during the 2026 UTME</li>
        <li>Scored <strong>160 and above</strong> in the UTME</li>
      </ul>
      <p>Candidates who initially selected UNIPORT as second choice must first change their institution to first choice on the JAMB portal before they can apply.</p>

      <h3>Registration Timeline</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Item</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Institution</td><td class="border border-gray-300 p-2">University of Port Harcourt</td></tr>
          <tr><td class="border border-gray-300 p-2">Admission Type</td><td class="border border-gray-300 p-2">Post UTME Screening</td></tr>
          <tr><td class="border border-gray-300 p-2">Session</td><td class="border border-gray-300 p-2">2026/2027</td></tr>
          <tr><td class="border border-gray-300 p-2">Registration Opens</td><td class="border border-gray-300 p-2">Friday, 15 May 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Registration Closes</td><td class="border border-gray-300 p-2">Friday, 29 May 2026 (official deadline notice as stated)</td></tr>
          <tr><td class="border border-gray-300 p-2">Application Fee</td><td class="border border-gray-300 p-2">₦2,000</td></tr>
          <tr><td class="border border-gray-300 p-2">Mode of Payment</td><td class="border border-gray-300 p-2">Remita</td></tr>
        </tbody>
      </table>
      <p>Applicants are strongly advised to complete registration within the official window, as late applications will not be accepted.</p>

      <h3>How to Apply for UNIPORT Post UTME</h3>
      <p>Candidates are required to complete their registration online through the official UNIPORT screening portal by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://utmedetails.uniport.edu.ng/welcome_utme.php">UNIPORT Post UTME registration portal</a></li>
        <li>Enter your JAMB Registration Number</li>
        <li>Confirm pre-loaded UTME details</li>
        <li>Generate a Remita payment code</li>
        <li>Pay the ₦2,000 screening fee via Remita</li>
        <li>Print payment slip or obtain Remita receipt (with access code)</li>
        <li>Return to the portal and log in with JAMB number and access code</li>
        <li>Complete the application form</li>
        <li>Submit and print the registration slip</li>
      </ol>
      <p>Candidates are advised to keep their printed slip safe, as it will be required during screening.</p>

      <h3>Screening Fee</h3>
      <p>The screening fee is <strong>₦2,000</strong>.</p>
      <p>Payment can be made:</p>
      <ul>
        <li>Online using ATM debit card</li>
        <li>At any bank supporting Remita payment</li>
      </ul>

      <h3>Important Eligibility Rule</h3>
      <p>Applicants must be at least <strong>16 years old by 30 September 2026</strong> to be eligible for admission consideration.</p>

      <h3>JAMB CAPS Requirement</h3>
      <p>All candidates must upload their O’Level results to the Joint Admissions and Matriculation Board CAPS portal.</p>
      <p>Failure to upload O’Level results may lead to automatic disqualification from admission consideration.</p>

      <h3>Screening Guidelines</h3>
      <ul>
        <li>Candidates must appear on their scheduled screening date once announced</li>
        <li>Missing the screening schedule may result in disqualification</li>
        <li>Parents, guardians, and unauthorized persons are not allowed at the screening venue</li>
        <li>Candidates are expected to complete registration online only</li>
      </ul>

      <h3>Examination Rules</h3>
      <p>The university has strictly prohibited the use of:</p>
      <ul>
        <li>Mobile phones</li>
        <li>iPads, iPods, Walkman devices</li>
        <li>Any unauthorized electronic gadgets or materials</li>
      </ul>
      <p>Candidates are advised to comply strictly with all instructions to avoid disqualification.</p>

      <h3>Screening Schedule</h3>
      <p>UNIPORT has not yet released the official screening timetable. Candidates are advised to regularly check the university website for updates regarding:</p>
      <ul>
        <li>Screening dates</li>
        <li>Venue allocation</li>
        <li>Examination instructions</li>
      </ul>

      <h3>Technical Support and Enquiries</h3>
      <p>For assistance during registration, candidates can contact via email at <a href="mailto:putme2026@uniport.edu.ng">putme2026@uniport.edu.ng</a> or via phone at 08123241152, 08032943819, or 07058555101.</p>

      <h3>Final Note</h3>
      <p>Admission into the University of Port Harcourt remains competitive, and only candidates who meet the requirements and follow the correct application process will be considered for the 2026/2027 screening exercise.</p>`,
    tags: ["UNIPORT", "Admission", "Post UTME", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "fuoye-admission-cut-off-marks-2026-2027",
    title: "FUOYE Releases 2026/2027 Admission Cut-Off Marks for All Courses",
    category: "Education",
    date: "2026-05-31",
    excerpt: "Federal University Oye-Ekiti has published the approved minimum UTME scores required for admission into its undergraduate programmes for the 2026/2027 academic session.",
    content: `<h2>FUOYE Releases 2026/2027 Admission Cut-Off Marks for All Courses</h2>
      <p>Federal University Oye-Ekiti has published the approved minimum UTME scores required for admission into its undergraduate programmes for the 2026/2027 academic session.</p>
      <p>The announcement applies to candidates who selected FUOYE as their <strong>first choice during the 2026 UTME</strong>, and it serves as a guide for determining eligibility before the Post UTME screening process begins.</p>

      <h3>What the FUOYE Cut-Off Mark Means</h3>
      <p>The FUOYE cut-off mark refers to the <strong>minimum UTME score required for admission consideration</strong> into a specific course.</p>
      <ul>
        <li>The lowest approved score is <strong>150</strong></li>
        <li>The highest approved score is <strong>280 (Medicine and Surgery)</strong></li>
        <li>Each course has its own requirement depending on competitiveness and capacity</li>
      </ul>
      <p>Meeting the cut-off mark does not guarantee admission, but it is the first requirement for screening consideration.</p>

      <h3>FUOYE Courses With the Highest Cut-Off Marks</h3>
      <p>Some of the most competitive programmes include:</p>
      <ul>
        <li>Medicine and Surgery — <strong>280</strong></li>
        <li>Nursing Science — <strong>240</strong></li>
        <li>Medical Laboratory Science — <strong>230</strong></li>
        <li>Doctor of Pharmacy — <strong>230</strong></li>
        <li>Radiography — <strong>220</strong></li>
        <li>Criminology and Security Studies — <strong>210</strong></li>
        <li>Computer Science / Mass Communication — <strong>200</strong></li>
      </ul>
      <p>These courses require high UTME performance due to demand and limited admission slots.</p>

      <h3>FUOYE Cut-Off Marks by Faculty (Overview)</h3>
      <p>Below is a summary of minimum scores across major faculties:</p>
      
      <h4>Faculty of Agriculture</h4>
      <p>Most programmes: <strong>150–180</strong></p>

      <h4>Faculty of Arts</h4>
      <ul>
        <li>English and Literary Studies — 180</li>
        <li>Theatre and Media Arts — 200</li>
        <li>Philosophy — 160–180 range</li>
      </ul>

      <h4>Basic Medical Sciences</h4>
      <ul>
        <li>Nursing Science — 240</li>
        <li>Medical Laboratory Science — 230</li>
        <li>Radiography — 220</li>
      </ul>

      <h4>College of Medicine</h4>
      <ul>
        <li>Medicine and Surgery — 280</li>
      </ul>

      <h4>Engineering</h4>
      <ul>
        <li>Civil Engineering — 190</li>
        <li>Electrical/Electronics Engineering — 190</li>
        <li>Mechanical Engineering — 180</li>
      </ul>

      <h4>Management Sciences</h4>
      <ul>
        <li>Accounting — 200</li>
        <li>Business Administration — 200</li>
        <li>Public Administration — 170–180</li>
      </ul>

      <h4>Computing & ICT Courses</h4>
      <ul>
        <li>Computer Science — 200</li>
        <li>Cyber Security — 180</li>
        <li>Software Engineering — 160–180</li>
      </ul>

      <h4>Social Sciences</h4>
      <ul>
        <li>Economics — 180</li>
        <li>Political Science — 180</li>
        <li>Criminology — 210</li>
      </ul>

      <h4>Education, Sciences & Others</h4>
      <p>Many programmes fall within <strong>150–180</strong>, especially in Education, Physical Sciences, Agriculture, and Environmental Sciences.</p>

      <h3>Courses With 150 Minimum Score</h3>
      <p>A large number of FUOYE programmes accept <strong>150 as the entry benchmark</strong>, particularly in:</p>
      <ul>
        <li>Agriculture-related courses</li>
        <li>Education programmes</li>
        <li>Physical sciences (Chemistry, Physics, Mathematics, Statistics)</li>
        <li>Environmental and life sciences (Biology, Plant Science, etc.)</li>
        <li>Some computing and engineering support courses</li>
      </ul>
      <p>However, candidates must still verify their <strong>exact course line</strong>, as similar programme names may carry different requirements.</p>

      <h3>Final Note</h3>
      <p>FUOYE’s 2026/2027 cut-off list gives candidates a clear picture of their admission chances. The key is not just meeting the minimum score, but aligning your UTME result with a realistic course choice before the Post UTME stage begins.</p>`,
    tags: ["FUOYE", "Admission", "Cut-off Marks", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "oauthc-school-of-community-health-higher-diploma-admission-2026-2027",
    title: "OAUTHC School of Community Health Opens Admission for 2026/2027 Higher Diploma Programme",
    category: "Education",
    date: "2026-05-30",
    excerpt: "Obafemi Awolowo University Teaching Hospitals Complex (OAUTHC) has announced the commencement of applications for admission into its School of Community Health for the 2026/2027 academic session.",
    content: `<h2>OAUTHC School of Community Health Opens Admission for 2026/2027 Higher Diploma Programme</h2>
      <p>Obafemi Awolowo University Teaching Hospitals Complex (OAUTHC) has announced the commencement of applications for admission into its School of Community Health for the 2026/2027 academic session.</p>
      <p>The programme is designed for qualified Community Health practitioners seeking advanced professional training and leads to the award of a <strong>Higher Diploma in Community Health</strong>. Successful candidates will begin their studies in <strong>September 2026</strong>.</p>

      <h3>Programme Duration and Award</h3>
      <p>The School of Community Health offers two admission routes:</p>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Programme Route</th>
            <th class="border border-gray-300 p-2">Duration</th>
            <th class="border border-gray-300 p-2">Qualification Award</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">One-Year Programme</td><td class="border border-gray-300 p-2">One Calendar Year</td><td class="border border-gray-300 p-2">Higher Diploma in Community Health</td></tr>
          <tr><td class="border border-gray-300 p-2">Two-Year Programme</td><td class="border border-gray-300 p-2">Two Calendar Years</td><td class="border border-gray-300 p-2">Higher Diploma in Community Health</td></tr>
        </tbody>
      </table>
      <p>Applicants are advised to select the route that matches their academic qualifications, professional certifications, and work experience.</p>

      <h3>General Admission Requirements</h3>
      <p>All applicants must possess five credit passes in relevant subjects obtained in not more than two sittings from WAEC, GCE O’Level, NECO, or NABTEB. The required subjects are:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Physics</li>
      </ul>

      <h3>Eligibility for the One-Year Programme</h3>
      <p>Candidates applying for the one-year Higher Diploma programme must be qualified as a Community Health Extension Worker (CHEW) and possess a First Degree in Community Health Science, Health Education, or Public Health, <strong>OR</strong> hold an HND in Community Health. Candidates must be registered with the Community Health Practitioners Registration Board of Nigeria and possess a valid practising licence.</p>

      <h3>Eligibility for the Two-Year Programme</h3>
      <p>Applicants seeking admission into the two-year programme must possess a Diploma in Community Health <strong>OR</strong> a CHEW Certificate with at least five years of professional experience. Candidates must be registered with the CHPRBN and hold a valid practising licence.</p>

      <h3>Application Fee and How to Apply</h3>
      <p>The admission form costs <strong>₦15,000</strong> only, payable online through Remita.</p>
      <p>Interested candidates should complete their application through the <a href="https://oauthc.gov.ng/schools/index.php">OAUTHC School application website</a> by following these steps:</p>
      <ol>
        <li>Follow all application instructions carefully.</li>
        <li>Complete the online application form.</li>
        <li>Select <strong>CHEW and BSc</strong> for the One-Year Programme or <strong>CHEW</strong> for the Two-Year Programme.</li>
        <li>Pay the fee through Remita and submit the form before the deadline.</li>
      </ol>

      <h3>Application Deadline and Selection Schedule</h3>
      <p>The closing date for submission is <strong>Wednesday, 24 July 2026</strong>. Selection will be based on a competitive written test and oral interview.</p>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Activity</th>
            <th class="border border-gray-300 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Written Test</td><td class="border border-gray-300 p-2">Monday, 27 July 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Oral Interview</td><td class="border border-gray-300 p-2">Tuesday, 28 July 2026</td></tr>
        </tbody>
      </table>

      <h3>Required Documents for Screening</h3>
      <p>Applicants must bring the following to the venue:</p>
      <ul>
        <li>Examination slip</li>
        <li>Original academic and professional certificates</li>
        <li>Valid practising licence</li>
      </ul>

      <h3>Contact Information</h3>
      <p>For enquiries, contact the School of Community Health through:</p>
      <ul>
        <li>+234 8152092797</li>
        <li>+234 7058537022</li>
        <li>Email: <a href="mailto:schoolofcommunityhealthobafemi@gmail.com">schoolofcommunityhealthobafemi@gmail.com</a></li>
      </ul>`,
    tags: [
      "OAUTHC",
      "Community Health",
      "Admission",
      "Higher Diploma",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "lagos-state-college-of-nursing-nd-hnd-nursing-admission-2026-2027",
    title: "Lagos State College of Nursing Opens 2026/2027 ND/HND Nursing Admission Application",
    category: "Education",
    date: "2026-05-29",
    excerpt: "Lagos State College of Nursing (LASCON) has announced the commencement of applications for admission into its National Diploma (ND) and Higher National Diploma (HND) Nursing programme for the 2026/2027 academic session.",
    content: `<h2>Lagos State College of Nursing Opens 2026/2027 ND/HND Nursing Admission Application</h2>
      <p>Lagos State College of Nursing (LASCON) has announced the commencement of applications for admission into its National Diploma (ND) and Higher National Diploma (HND) Nursing programme for the 2026/2027 academic session.</p>
      <p>Qualified candidates are invited to apply for the Computer Assisted Screening Exercise scheduled for later in the year. The programme is offered at the college's Igando campus and runs on a four-year non-terminal HND/RM/RPHN pathway.</p>

      <h3>Application Period</h3>
      <p>The online application portal will be open from:</p>
      <ul>
        <li><strong>Opening Date:</strong> Tuesday, 26 May 2026</li>
        <li><strong>Closing Date:</strong> Tuesday, 21 July 2026</li>
      </ul>
      <p>Prospective applicants are encouraged to complete their registration before the deadline, as no provision has been announced for late applications.</p>

      <h3>Eligibility Requirements for LASCON ND/HND Nursing Admission</h3>
      <p>Candidates seeking admission into the nursing programme must satisfy the following requirements:</p>
      <ul>
        <li>Score a minimum of <strong>200</strong> in the 2026 UTME</li>
        <li>Select Lagos State College of Nursing as their <strong>first-choice institution</strong></li>
        <li>Be at least <strong>17 years old</strong> before the end of the 2026 admission exercise</li>
        <li>Possess five relevant O’Level credit passes</li>
      </ul>

      <h4>Required O’Level Subjects</h4>
      <p>Applicants must have credit passes in English Language, Mathematics, Biology, Chemistry, and Physics. The college accepts:</p>
      <ul>
        <li>WAEC and/or NECO results in not more than two sittings</li>
        <li>NABTEB results in one sitting only</li>
      </ul>
      <p>Candidates are advised to verify that they meet all admission requirements before proceeding with payment.</p>

      <h3>Programme Duration</h3>
      <p>The ND/HND Nursing programme runs for <strong>four years</strong> and follows a non-terminal pathway leading to Higher National Diploma (HND), Registered Midwife (RM), and Registered Public Health Nurse (RPHN). Training is fully residential.</p>

      <h3>Fees Payable</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Fee Category</th>
            <th class="border border-gray-300 p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Application Fee</td><td class="border border-gray-300 p-2">₦25,000</td></tr>
          <tr><td class="border border-gray-300 p-2">Acceptance Fee</td><td class="border border-gray-300 p-2">₦100,000</td></tr>
          <tr><td class="border border-gray-300 p-2">First-Year Tuition Fee</td><td class="border border-gray-300 p-2">₦300,000</td></tr>
        </tbody>
      </table>
      <p>The application and acceptance fees are non-refundable.</p>

      <h3>How to Apply</h3>
      <p>Interested candidates should complete their application through the official LASCON admission portal by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://admissions.lascon.edu.ng/Main/freshman">LASCON freshman application portal</a>.</li>
        <li>Create a new application account.</li>
        <li>Enter the required details, including Surname, First Name, Email, Phone Number, JAMB Registration Number, and Course Selection.</li>
        <li>Submit the registration form and check the registered email address for the confirmation message.</li>
        <li>Open the email and access the payment link to pay the non-refundable application fee of ₦25,000.</li>
        <li>Receive your application number and password via email, then log in to continue the application.</li>
        <li>Complete all required sections, submit the form, and print the examination slip.</li>
      </ol>

      <h3>Screening Date and Venue</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Activity</th>
            <th class="border border-gray-300 p-2">Date</th>
            <th class="border border-gray-300 p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2">Computer Assisted Screening</td>
            <td class="border border-gray-300 p-2">Saturday, 22 August 2026</td>
            <td class="border border-gray-300 p-2">8:00 a.m.</td>
          </tr>
        </tbody>
      </table>

      <h4>Venue</h4>
      <p>Lagos State College of Nursing, Inside Alimosho General Hospital, Igando, Lagos State.</p>
      <p>The examination will be computer-based and will cover English Language, Mathematics, Biology, Chemistry, Physics, and Current Affairs.</p>

      <h3>Fraud Warning</h3>
      <p>The college has warned applicants to be cautious of fraudsters and unauthorised admission agents. Candidates are advised to rely only on the official admission portal and approved communication channels.</p>

      <h3>Contact Information</h3>
      <ul>
        <li>08027247149</li>
        <li>08033270037</li>
        <li>08026944259</li>
      </ul>`,
    tags: [
      "LASCON",
      "Lagos State College of Nursing",
      "Nursing Admission",
      "ND",
      "HND",
      "2026/2027",
      "Education",
      "Nigeria",
      "Igando",
    ],
  },
  {
    id: "delsu-post-utme-direct-entry-screening-admission-2026-2027",
    title: "DELSU Opens 2026/2027 Post UTME and Direct Entry Screening for Admission",
    category: "Education",
    date: "2026-05-29",
    excerpt: "Delta State University (DELSU) has officially announced the commencement of its Post UTME and Direct Entry screening application for the 2026/2027 academic session.",
    content: `<h2>DELSU Opens 2026/2027 Post UTME and Direct Entry Screening for Admission</h2>
      <p>Delta State University has officially announced the commencement of its Post UTME and Direct Entry screening application for the 2026/2027 academic session.</p>
      <p>The admission exercise is open to qualified candidates seeking undergraduate placement into various programmes offered by the university.</p>

      <h3>Who Can Apply for DELSU Post UTME?</h3>
      <p>Candidates are eligible to apply if they:</p>
      <ul>
        <li>Chose Delta State University, Abraka as their <strong>first choice</strong> during UTME registration</li>
        <li>Scored <strong>150 and above</strong> in the 2026 UTME</li>
      </ul>
      <p>Candidates who did not initially select DELSU can still apply, but they must first change their institution of choice on the JAMB portal to DELSU before the application deadline.</p>

      <h3>Application Timeline</h3>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Item</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Institution</td><td class="border border-gray-300 p-2">Delta State University, Abraka</td></tr>
          <tr><td class="border border-gray-300 p-2">Admission Type</td><td class="border border-gray-300 p-2">Post UTME and Direct Entry</td></tr>
          <tr><td class="border border-gray-300 p-2">Academic Session</td><td class="border border-gray-300 p-2">2026/2027</td></tr>
          <tr><td class="border border-gray-300 p-2">Application Starts</td><td class="border border-gray-300 p-2">Friday, 29 May 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Application Closes</td><td class="border border-gray-300 p-2">Tuesday, 30 June 2026 (12:00 midnight)</td></tr>
          <tr><td class="border border-gray-300 p-2">UTME Cut-Off Mark</td><td class="border border-gray-300 p-2">150 and above</td></tr>
          <tr><td class="border border-gray-300 p-2">Application Fee</td><td class="border border-gray-300 p-2">₦2,000</td></tr>
        </tbody>
      </table>
      <p>Applicants are strongly advised to complete their registration before the deadline, as late applications will not be accepted.</p>

      <h3>How to Apply for DELSU Post UTME</h3>
      <p>Candidates are required to complete their application online through the official DELSU portal by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://portal.delsuces.online/">DELSU Post UTME application portal</a></li>
        <li>Click on “POST UTME 2026/2027”</li>
        <li>Select “Start Form”</li>
        <li>Enter your JAMB registration number</li>
        <li>Complete the application form and pay the ₦2,000 fee</li>
        <li>Fill in O’Level and guardian details</li>
        <li>Upload a passport photograph</li>
        <li>Submit the application</li>
        <li>Print and keep a copy of the completed form</li>
      </ol>

      <h3>Direct Entry Admission Requirements</h3>
      <p>Direct Entry candidates can also apply using the same screening portal. Eligible qualifications include: NCE, OND, HND, First Degree, and A’Level or equivalent qualifications. Candidates must ensure their qualifications match the requirements of their chosen course of study.</p>

      <h3>Important O’Level and JAMB Upload Rules</h3>
      <ul>
        <li>Their O’Level results are uploaded to the JAMB portal</li>
        <li>Awaiting results are uploaded immediately once available</li>
        <li>A’Level results (for Direct Entry candidates) are properly verified</li>
      </ul>
      <p>Joint Admissions and Matriculation Board requires proper result upload for admission consideration, and failure to comply may lead to disqualification.</p>

      <h3>Communication and Screening Updates</h3>
      <p>The university will communicate screening details using the phone numbers and email address provided during registration. Applicants are advised to use active and accessible contact information to avoid missing important updates.</p>

      <h3>Important Information to Check Before Submission</h3>
      <ul>
        <li>JAMB registration number</li>
        <li>O’Level details</li>
        <li>Passport photograph</li>
        <li>Payment status</li>
        <li>Email and phone number</li>
        <li>Guardian information</li>
      </ul>

      <h3>Contact Information</h3>
      <p>For enquiries and support, candidates can contact the university via:</p>
      <ul>
        <li>Email: <a href="mailto:admission@delsu.edu.ng">admission@delsu.edu.ng</a></li>
        <li>WhatsApp: 08060264240, 07039151870</li>
      </ul>

      <h3>Final Note</h3>
      <p>Candidates are advised to complete their registration early, ensure accurate information is provided, and confirm that all required JAMB and O’Level details are properly uploaded before the <strong>30 June 2026</strong> deadline.</p>
      <p>Admission into DELSU remains competitive, and only candidates who meet all requirements and complete their application correctly will be considered for the 2026/2027 screening exercise.</p>`,
    tags: [
      "DELSU",
      "Delta State University",
      "Admission",
      "Post UTME",
      "Direct Entry",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "lacohtmas-admission-form-health-management-science-programmes",
    title: "LACOHTMAS Admission Form Now Available for Health and Management Science Programmes",
    category: "Education",
    date: "2026-05-30",
    excerpt: "Lafia College of Health Technology and Management Science (LACOHTMAS) has commenced the sale of admission forms for various professional health and management programmes.",
    content: `<h2>LACOHTMAS Admission Form Now Available for Health and Management Science Programmes</h2>
      <p>Lafia College of Health Technology and Management Science, popularly known as LACOHTMAS, has commenced the sale of admission forms for the current academic session.</p>
      <p>The institution is inviting qualified candidates to apply for admission into its various health and management science programmes. Prospective students are advised to review the available courses, application fee, and contact information before purchasing the admission form.</p>

      <h3>LACOHTMAS Admission Form Details</h3>
      <p>The admission form provides an opportunity for candidates to gain entry into professional health-related and management science programmes offered by the college. Applicants are encouraged to choose a programme that aligns with their interests and career goals before beginning the admission process.</p>

      <h3>Available Courses at LACOHTMAS</h3>
      <p>The college offers admission into the following professional programmes:</p>
      <ul>
        <li>Community Health Extension Workers (CHEW)</li>
        <li>Junior Community Health Extension Workers (JCHEW)</li>
        <li>Public Health Technology (PHT)</li>
        <li>Epidemiology and Disease Control Technology</li>
        <li>Nutrition and Dietetics</li>
        <li>Health Education</li>
        <li>Medical Laboratory Technology (MLT)</li>
        <li>Health Information Management</li>
        <li>Medical Imaging Processing/X-Ray Technician (MIPT)</li>
        <li>Dental Surgery Technician (DST)</li>
        <li>Dental Therapy (HND)</li>
        <li>Abridgement Programme</li>
        <li>Pharmacy Technician (PT)</li>
      </ul>

      <h3>Cost of the Admission Form</h3>
      <p>The admission form costs <strong>₦7,500 only</strong>. According to the admission notice, applicants are required to purchase the form directly from the college campus.</p>

      <h3>How to Purchase the LACOHTMAS Admission Form</h3>
      <ol>
        <li>Visit the LACOHTMAS campus in Lafia, Nasarawa State.</li>
        <li>Request the admission form for the current academic session.</li>
        <li>Confirm the programme you wish to apply for.</li>
        <li>Pay the admission form fee of ₦7,500.</li>
        <li>Obtain guidance from the college if additional information is required.</li>
      </ol>
      <p>The institution advises applicants to rely only on official communication channels when seeking admission information.</p>

      <h3>LACOHTMAS Campus Address</h3>
      <p>The college is located at:<br />
      <strong>Behind Ta’al Conference Hotel Annex</strong><br />
      <strong>Jos Road, Lafia</strong><br />
      <strong>Nasarawa State</strong><br />
      <strong>P.O. Box 665</strong></p>

      <h3>Official Contact Information</h3>
      <p>Applicants can contact the college through the following channels:</p>
      <h4>Phone Numbers</h4>
      <ul>
        <li><a href="tel:08087154240">08087154240</a></li>
        <li><a href="tel:09150745015">09150745015</a></li>
      </ul>
      <h4>WhatsApp</h4>
      <ul>
        <li><a href="https://wa.me/2348121111106">08121111106</a></li>
      </ul>
      <h4>Email Addresses</h4>
      <ul>
        <li><a href="mailto:lacohtmas@gmail.com">lacohtmas@gmail.com</a></li>
        <li><a href="mailto:shtlafia@yahoo.com">shtlafia@yahoo.com</a></li>
        <li><a href="mailto:chtlafia@gmail.com">chtlafia@gmail.com</a></li>
      </ul>

      <h3>Important Information for Applicants</h3>
      <p>Before purchasing the admission form, candidates should confirm the course they intend to study, verify the fee, and visit the correct campus location. Candidates interested in building a career in the health sector are encouraged to contact the college early and obtain complete admission details before applying.</p>`,
    tags: [
      "LACOHTMAS",
      "Lafia",
      "Admission",
      "Health Technology",
      "Nasarawa",
    ],
  },
  {
    id: "kogi-state-polytechnic-post-utme-registration-2026-2027",
    title: "Kogi State Polytechnic Opens 2026/2027 Post UTME Registration for ND Full-Time Admission",
    category: "Education",
    date: "2026-05-25",
    excerpt: "Kogi State Polytechnic has announced the commencement of its Post UTME screening registration for National Diploma (ND) full-time programmes for the 2026/2027 academic session.",
    content: `<h2>Kogi State Polytechnic Opens 2026/2027 Post UTME Registration for ND Full-Time Admission</h2>
      <p>Kogi State Polytechnic has announced the commencement of its Post UTME screening registration for candidates seeking admission into National Diploma (ND) full-time programmes for the 2026/2027 academic session.</p>
      <p>The admission exercise covers a wide range of programmes across agriculture, engineering, applied sciences, environmental technology, communication studies, art and design, and management sciences.</p>

      <h3>KSP Post UTME Registration Dates</h3>
      <p>Eligible candidates can begin registration from:</p>
      <ul>
        <li><strong>Opening Date:</strong> Monday, 25 May 2026</li>
        <li><strong>Closing Date:</strong> Tuesday, 30 June 2026</li>
      </ul>
      <p>Applicants are advised to complete their registration before the deadline to avoid missing the opportunity.</p>

      <h4>Admission Overview</h4>
      <table class="w-full border-collapse border border-gray-300 my-4 text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="border border-gray-300 p-2">Item</th>
            <th class="border border-gray-300 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-gray-300 p-2">Institution</td><td class="border border-gray-300 p-2">Kogi State Polytechnic, Lokoja</td></tr>
          <tr><td class="border border-gray-300 p-2">Admission Type</td><td class="border border-gray-300 p-2">ND Full-Time</td></tr>
          <tr><td class="border border-gray-300 p-2">Academic Session</td><td class="border border-gray-300 p-2">2026/2027</td></tr>
          <tr><td class="border border-gray-300 p-2">Registration Opens</td><td class="border border-gray-300 p-2">Monday, 25 May 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Registration Closes</td><td class="border border-gray-300 p-2">Tuesday, 30 June 2026</td></tr>
          <tr><td class="border border-gray-300 p-2">Minimum UTME Score</td><td class="border border-gray-300 p-2">100</td></tr>
          <tr><td class="border border-gray-300 p-2">Application Fee</td><td class="border border-gray-300 p-2">₦2,000</td></tr>
          <tr><td class="border border-gray-300 p-2">Mode of Application</td><td class="border border-gray-300 p-2">Online</td></tr>
        </tbody>
      </table>

      <h3>Eligibility Requirements</h3>
      <p>Candidates seeking admission into Kogi State Polytechnic must meet the following conditions:</p>
      <ul>
        <li>Have participated in the 2026 UTME</li>
        <li>Score a minimum of <strong>100</strong> in the examination</li>
        <li>Possess at least five O’Level credits, including English Language and Mathematics</li>
        <li>Obtain the required credits in not more than two sittings</li>
      </ul>
      <p>The institution also gives preference to candidates who selected Kogi State Polytechnic as their first-choice institution during UTME registration.</p>

      <h3>Can Awaiting-Result Candidates Apply?</h3>
      <p><strong>Yes.</strong> Candidates awaiting the release of their O’Level results are eligible to apply, provided they meet the minimum UTME score requirement. Such candidates must correctly indicate their awaiting-result status during registration.</p>

      <h3>Importance of Correct Subject Combinations</h3>
      <p>The polytechnic has advised candidates to carefully check the subject requirements for their chosen programmes. Meeting the UTME cut-off mark alone does not guarantee admission if the candidate's subject combination does not match the course requirements.</p>

      <h3>Available ND Full-Time Programmes</h3>
      <h4>School of Agricultural Technology</h4>
      <ul><li>Agricultural Technology</li><li>Animal Health and Production Technology</li><li>Horticultural Technology</li></ul>
      <h4>School of Applied Sciences</h4>
      <ul><li>Computer Science</li><li>Science Laboratory Technology</li><li>Statistics</li></ul>
      <h4>School of Art, Design and Printing</h4>
      <ul><li>Art & Design</li><li>Fashion Design and Clothing Technology</li><li>Printing Technology</li></ul>
      <h4>School of Engineering Technology</h4>
      <ul><li>Agricultural & Bio-Environmental Engineering Technology</li><li>Civil Engineering Technology</li><li>Computer Engineering Technology</li><li>Electrical/Electronic Engineering Technology</li><li>Foundry Engineering Technology</li><li>Mechanical Engineering Technology</li><li>Mechatronics Engineering Technology</li><li>Metallurgical Engineering Technology</li><li>Mineral & Petroleum Resources Engineering Technology</li></ul>
      <h4>School of Environmental Technology</h4>
      <ul><li>Architectural Technology</li><li>Building Technology</li><li>Surveying & Geo-Informatics</li><li>Urban & Regional Planning</li></ul>
      <h4>School of General and Communication Studies</h4>
      <ul><li>Mass Communication</li></ul>
      <h4>School of Management Studies</h4>
      <ul><li>Accountancy</li><li>Business Administration</li><li>Library & Information Science</li><li>Office Technology & Management</li><li>Public Administration</li></ul>

      <h3>Application Fee and Registration Process</h3>
      <p>The Post UTME application fee is <strong>₦2,000</strong> only (non-refundable).</p>
      <p>Interested candidates should complete their application through the official admission portal by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://portal.kogistatepolytechnic.edu.ng/">Kogi State Polytechnic admission portal</a></li>
        <li>Click on <strong>"Apply Now"</strong></li>
        <li>Fill in the required information</li>
        <li>Pay the ₦2,000 screening fee</li>
        <li>Complete and submit the application form</li>
      </ol>

      <h3>Important Admission Guidelines</h3>
      <ul>
        <li>Upload your O’Level results to the JAMB portal</li>
        <li>Use correct personal and academic information during registration</li>
        <li>Verify your course choice and subject combinations before submission</li>
        <li>Keep your contact details active throughout the admission process</li>
      </ul>

      <h3>Warning Against Admission Fraud</h3>
      <p>The polytechnic has stated that it does not engage admission agents for the screening exercise. Applicants should avoid dealing with third parties and complete their registration only through the official application platform.</p>

      <h3>What Can Lead to Disqualification?</h3>
      <p>Kogi State Polytechnic warns that any candidate found providing false information during registration will be automatically disqualified. Applicants should carefully review their names, UTME information, O’Level records, and course selection before submitting their application.</p>
      <p>Candidates who meet the requirements and complete their registration before <strong>30 June 2026</strong> will be considered for admission into the 2026/2027 ND full-time programmes.</p>`,
    tags: [
      "KSP",
      "Kogi State Polytechnic",
      "Admission",
      "Post UTME",
      "ND",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "ogun-state-college-of-nursing-sciences-nd-nursing-admission-2026-2027",
    title: "Ogun State College of Nursing Sciences Opens ND Nursing Admission for 2026/2027 Session",
    category: "Education",
    date: "2026-05-30",
    excerpt: "Ogun State College of Nursing Sciences has commenced the sale of application forms for its National Diploma (ND) Nursing programme for the 2026/2027 academic session.",
    content: `<h2>Ogun State College of Nursing Sciences Opens ND Nursing Admission for 2026/2027 Session</h2>
      <p>Ogun State College of Nursing Sciences has commenced the sale of application forms for admission into its National Diploma (ND) Nursing programme for the 2026/2027 academic session.</p>
      <p>The admission exercise covers the college's campuses in Abeokuta, Ijebu-Ode, and Ilaro. Prospective candidates are advised to carefully review the admission requirements, application dates, and eligibility criteria before beginning the online registration process.</p>

      <h3>Application Period</h3>
      <p>The application portal opens on <strong>25 May 2026</strong> and will close on <strong>20 July 2026</strong>.</p>
      <p>Interested applicants are encouraged to complete their registration early and ensure they meet all admission requirements before making payment.</p>

      <h3>Eligibility Requirements for OGCON ND Nursing Admission</h3>
      <p>To qualify for admission, candidates must meet the following conditions:</p>

      <h4>UTME Requirement</h4>
      <p>Applicants must:</p>
      <ul>
        <li>Have participated in the 2026 UTME</li>
        <li>Score a minimum of <strong>180</strong> in the examination</li>
        <li>Select Ogun State College of Nursing Sciences (Abeokuta, Ijebu-Ode, or Ilaro Campus) as their <strong>first-choice institution</strong></li>
      </ul>
      <p>Candidates who did not choose the college as their first choice should take note of this requirement before applying.</p>

      <h3>O’Level Requirements</h3>
      <p>Applicants must possess at least five credit passes in the following subjects:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Physics</li>
      </ul>
      <p>The required credits must be obtained in <strong>not more than two sittings</strong>.</p>
      <p>The college has also stated that <strong>awaiting results will not be accepted</strong> for this admission exercise.</p>

      <h3>Age Requirement</h3>
      <p>Candidates applying for the ND Nursing programme must be at least <strong>16 years old on or before 31 August 2026</strong>.</p>
      <p>Applicants who do not meet the age requirement will not be considered for admission.</p>

      <h3>Application Fee and Registration Process</h3>
      <p>The application processing fee is <strong>₦23,200</strong>.</p>
      <p>Eligible candidates are required to complete their registration through the official <a href="https://apply.ogcon.edu.ng/">OGCON ND Nursing application portal</a>, where payment and submission of application details will be carried out.</p>
      <p>Applicants should ensure that all information provided during registration is accurate and consistent with their academic records.</p>

      <h3>Support and Enquiries</h3>
      <p>Candidates requiring technical assistance or admission-related support can contact the college during official working hours, Monday to Friday, from <strong>9:00 a.m. to 4:00 p.m.</strong></p>

      <h4>Phone and WhatsApp Support (Text Messages Only)</h4>
      <ul>
        <li>08035702722</li>
        <li>09097348494</li>
        <li>09039891825</li>
      </ul>

      <h4>Official Email</h4>
      <ul>
        <li><a href="mailto:admissions@nursingcollege.edu.ng">admissions@nursingcollege.edu.ng</a></li>
      </ul>

      <h3>Final Reminder</h3>
      <p>Prospective applicants should verify that they meet the JAMB score requirement, possess the required O’Level credits, satisfy the age condition, and have selected Ogun State College of Nursing Sciences as their first choice before proceeding with the application.</p>
      <p>All applications must be submitted on or before <strong>20 July 2026</strong> to be considered for admission into the 2026/2027 ND Nursing programme.</p>`,
    tags: [
      "Ogun State",
      "Nursing",
      "Admission",
      "ND Nursing",
      "2026/2027",
      "Education",
      "Nigeria",
      "Abeokuta",
    ],
  },
  {
    id: "kwasued-admission-screening-2026-2027",
    title: "KWASUED Opens 2026/2027 Admission Screening Registration",
    category: "Education",
    date: "2026-05-28",
    excerpt: "Kwara State University of Education has announced the commencement of its admission screening exercise for the 2026/2027 academic session.",
    content: `<h2>KWASUED Opens 2026/2027 Admission Screening Registration</h2>
      <p>Kwara State University of Education has announced the commencement of its admission screening exercise for the 2026/2027 academic session.</p>
      <p>According to a statement signed by the Registrar, Mohammed Jimada Jibril, the university’s online registration portal will officially open on <strong>8 June 2026</strong> for interested candidates seeking undergraduate admission.</p>

      <h2>KWASUED Cut-Off Mark for 2026/2027 Admission</h2>
      <p>The university has approved a minimum UTME score of <strong>150</strong> for candidates applying for admission.</p>
      <p>Candidates who scored 150 and above in the 2026 UTME and meet the required academic qualifications will be considered for admission into the available undergraduate programmes.</p>
      <p>Direct Entry candidates are also eligible to apply for the screening exercise.</p>

      <h2>List of Courses Available at KWASUED</h2>
      <p>Kwara State University of Education has listed 20 undergraduate programmes across education, sciences, business, arts, and technical fields for the 2026/2027 academic session.</p>

      <h3>Education, Business and Social Science Courses</h3>
      <p>Applicants can apply for the following programmes:</p>
      <ul>
        <li>B.Sc.(Ed) Business Education</li>
        <li>B.Ed. Entrepreneurship</li>
        <li>B.Ed. Educational Technology</li>
        <li>B.Ed. Educational Management</li>
        <li>B.Ed. Guidance and Counselling</li>
        <li>B.Ed. Sustainable Development</li>
        <li>B.Sc.(Ed) Accounting</li>
        <li>B.Sc.(Ed) Economics</li>
      </ul>

      <h3>Science and Technical Education Courses</h3>
      <p>Science and technical education options include:</p>
      <ul>
        <li>B.Sc.(Ed) Home Economics</li>
        <li>B.Sc.(Ed) Mathematics</li>
        <li>B.Sc.(Ed) Physics</li>
        <li>B.Sc.(Ed) Agriculture</li>
        <li>B.Sc.(Ed) Biology</li>
        <li>B.Sc.(Ed) Chemistry</li>
        <li>B.Sc.(Ed) Computer Science</li>
        <li>B.Tech.(Ed) Electronics and Electrical</li>
      </ul>

      <h3>Arts and Humanities Education Courses</h3>
      <p>Candidates interested in arts and humanities education may apply for:</p>
      <ul>
        <li>B.A.(Ed) Creative Arts</li>
        <li>B.A.(Ed) English Language</li>
        <li>B.A.(Ed) Yoruba</li>
        <li>B.A.(Ed) History</li>
      </ul>

      <h2>Important JAMB Requirements for Applicants</h2>
      <p>The university advised all UTME and Direct Entry candidates to:</p>
      <ul>
        <li>Visit an accredited JAMB CBT centre</li>
        <li>Select KWASUED as their institution of choice</li>
        <li>Ensure that their O’Level results are uploaded on JAMB CAPS</li>
      </ul>
      <p>The institution emphasized that failure to upload O’Level results on the JAMB Central Admissions Processing System may delay or affect admission processing.</p>

      <h2>How to Apply for KWASUED Screening Exercise</h2>
      <p>The online screening registration portal will become active on <strong>8 June 2026</strong>.</p>
      <p>Interested candidates should visit the <a href="https://portal.kwasued.edu.ng/">official KWASUED admission portal</a> to complete their application once registration begins.</p>
      <p>Applicants are advised to carefully provide accurate personal information, academic records, and JAMB details during registration.</p>

      <h2>KWASUED Contact Information</h2>
      <p>Candidates who need assistance regarding the admission screening exercise can contact the university through the following lines:</p>
      <ul>
        <li>08056664797</li>
        <li>08066001312</li>
      </ul>`,
    tags: [
      "KWASUED",
      "Kwara State University of Education",
      "Admission",
      "Post UTME",
      "Direct Entry",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "unilesa-post-utme-direct-entry-2026-2027",
    title: "UNILESA Opens 2026/2027 Post UTME and Direct Entry Screening Registration",
    category: "Education",
    date: "2026-05-28",
    excerpt: "University of Ilesa has announced the commencement of its Post UTME and Direct Entry admission screening exercise for the 2026/2027 academic session.",
    content: `<h2>UNILESA Opens 2026/2027 Post UTME and Direct Entry Screening Registration</h2>
      <p>University of Ilesa has announced the commencement of its Post UTME and Direct Entry admission screening exercise for the 2026/2027 academic session.</p>
      <p>The screening exercise covers a wide range of undergraduate programmes across nursing sciences, medical sciences, computing, law, arts, sciences, management, education, and agriculture.</p>

      <h3>UNILESA Admission Eligibility Requirements</h3>
      <p>The university invited qualified UTME and Direct Entry candidates to apply for admission into its undergraduate programmes.</p>

      <h4>UTME Candidates</h4>
      <p>Applicants seeking admission through UTME must:</p>
      <ul>
        <li>Score at least <strong>160</strong> in the 2026 UTME</li>
        <li>Choose UNILESA as their preferred institution</li>
        <li>Be at least <strong>16 years old by 30 September 2026</strong></li>
      </ul>
      <p>Candidates who did not initially select the university as first choice are required to change their institution to UNILESA through JAMB CAPS before applying.</p>

      <h4>Direct Entry Candidates</h4>
      <p>Direct Entry applicants must possess relevant qualifications suitable for admission into 200 Level programmes.</p>
      <p>They are also expected to complete the Direct Entry process through the JAMB admission platform alongside the university portal.</p>

      <h3>O’Level Requirements for UNILESA Admission</h3>
      <p>University of Ilesa stated that candidates must possess at least five credit passes in relevant subjects.</p>
      <p>Accepted examination bodies include:</p>
      <ul>
        <li>WAEC</li>
        <li>NECO</li>
        <li>NABTEB</li>
        <li>Senior Arabic and Islamic Secondary School Certificate Examinations (SAISSCE)</li>
      </ul>
      <p>The university accepts a maximum of two sittings.</p>
      <p>Candidates are advised to carefully confirm the UTME subject combination and O’Level requirements for their chosen courses before registration.</p>

      <h3>Courses Available at UNILESA for 2026/2027 Admission</h3>
      <p>The university listed programmes across several faculties.</p>

      <h4>Faculty of Nursing Sciences</h4>
      <ul>
        <li>B.N.Sc. Nursing Sciences</li>
      </ul>

      <h4>Faculty of Basic Medical Sciences</h4>
      <ul>
        <li>Anatomy, Physiology, Health Information Management, Radiography, Dental Therapy, Dental Technology, Physiotherapy, Optometry, Pharmacology, Human Nutrition and Dietetics, Information Technology and Health Informatics.</li>
      </ul>

      <h4>Faculty of Medical Laboratory Science</h4>
      <ul>
        <li>Medical Laboratory Science</li>
      </ul>

      <h4>Faculty of Public Health</h4>
      <ul>
        <li>Public Health</li>
      </ul>

      <h4>Faculty of Computing</h4>
      <ul>
        <li>Computer Science, Cybersecurity, Software Engineering, Information and Communication Technology, Data Science.</li>
      </ul>

      <h4>Faculty of Arts</h4>
      <ul>
        <li>English Language, History and International Studies, Linguistics, Music, Arabic Studies, Christian Religious Studies, Islamic Studies, Theatre Arts, Chinese Studies, French, Yoruba.</li>
      </ul>

      <h4>Faculty of Sciences</h4>
      <ul>
        <li>Microbiology, Biochemistry, Industrial Chemistry, Mathematics, Physics and Electronics, Geology and Mining Sciences, Brewing Science and Technology, Environmental Management and Toxicology, Clothing and Textile Design, Physics, Chemistry, Biology.</li>
      </ul>

      <h4>Faculty of Social and Management Sciences</h4>
      <ul>
        <li>Economics, Accounting, Business Administration, Political Science, Tourism and Hospitality, Sociology, Criminology and Security Studies, Psychology, Public Administration, Peace and Conflict Studies, Finance, Marketing, Entrepreneurship, Taxation, Project Management, Social Work, Geography and Geoinformatics.</li>
      </ul>

      <h4>Faculty of Education</h4>
      <p>Programmes include:</p>
      <ul>
        <li>Computer Science Education, Integrated Science Education, English Language Education, Political Science Education, Economics Education, Guidance and Counselling, Educational Management, Entrepreneurship Education, Special Education, Health Education, Music Education, Yoruba Education, Physical Education, Early Childhood Education, Library and Information Education.</li>
      </ul>

      <h4>Faculty of Agriculture</h4>
      <ul>
        <li>Agricultural Economics, Agribusiness, Animal Science, Crop Science, Soil Science, Fisheries and Aquaculture, Agriculture.</li>
      </ul>

      <h4>Faculty of Law</h4>
      <ul>
        <li>LL.B. Law</li>
        <li>LL.B. Common and Islamic Law</li>
      </ul>

      <h3>How to Apply for UNILESA Post UTME/DE Screening</h3>
      <p>Candidates should complete their application through the <a href="https://admissions.unilesa.edu.ng/home">UNILESA admission portal</a>.</p>
      <p>The screening fee is <strong>₦2,000 only</strong>, and payment must be made into the university’s designated account as provided on the portal.</p>
      <p>Applicants are advised to carefully complete all sections of the registration form using accurate information.</p>

      <h3>Important Notice to Applicants</h3>
      <p>The university warned candidates against submitting false information during registration, stating that any form of misrepresentation may lead to disqualification.</p>
      <p>UNILESA also stated clearly that it does not operate through admission agents or consultants.</p>
      <p>For more details about the admission process, candidates can visit the official website of University of Ilesa.</p>`,
    tags: [
      "UNILESA",
      "University of Ilesa",
      "Post UTME",
      "Direct Entry",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "futa-post-utme-direct-entry-2026-2027",
    title: "FUTA Opens 2026/2027 Post UTME and Direct Entry Screening Registration",
    category: "Education",
    date: "2026-05-28",
    excerpt: "Federal University of Technology Akure has officially announced the commencement of online registration for its 2026/2027 Post UTME and Direct Entry screening exercise.",
    content: `<h2>FUTA Opens 2026/2027 Post UTME and Direct Entry Screening Registration</h2>
      <p>Federal University of Technology Akure has officially announced the commencement of online registration for its 2026/2027 Post UTME and Direct Entry screening exercise.</p>
      <p>The registration exercise covers admission into all undergraduate programmes offered by the university and will run from <strong>Monday, 1 June 2026</strong>, to <strong>Friday, 3 July 2026</strong>.</p>

      <h2>FUTA Post UTME/Direct Entry Registration Dates and Fee</h2>
      <p>According to the university, eligible candidates are expected to complete their registration within the approved period.</p>
      <ul>
        <li><strong>Registration Begins:</strong> Monday, 1 June 2026</li>
        <li><strong>Registration Closes:</strong> Friday, 3 July 2026</li>
        <li><strong>Screening Fee:</strong> ₦2,000</li>
      </ul>
      <p>The screening fee must be paid through the Remita payment platform after generating the required payment code on the university portal.</p>
      <p>FUTA warned that candidates who fail to complete their registration before the deadline will not be allowed to participate in the screening exercise.</p>

      <h2>Eligibility Requirements for FUTA Post UTME</h2>
      <h3>UTME Candidates</h3>
      <p>Candidates applying through UTME must:</p>
      <ul>
        <li>Score at least <strong>180</strong> in the 2026 UTME conducted by JAMB</li>
        <li>Choose FUTA as their first-choice institution</li>
        <li>Possess at least five O’Level credit passes, including:
          <ul>
            <li>English Language</li>
            <li>Mathematics</li>
          </ul>
        </li>
      </ul>
      <p>The required credits must be obtained in WAEC, NECO, NABTEB, or equivalent examinations in not more than two sittings.</p>

      <h3>Direct Entry Candidates</h3>
      <p>Direct Entry applicants must also select FUTA as their first-choice university before applying for the screening exercise.</p>
      <p>The university stated that admission processing will strictly follow JAMB records.</p>

      <h2>FUTA Admission Age Requirement</h2>
      <p>FUTA has also stated that candidates seeking admission into the university must be at least <strong>16 years old by 30 September 2026</strong>.</p>
      <p>Candidates who do not meet the age requirement may not be considered for admission.</p>

      <h2>FUTA Restores MBBS Admission</h2>
      <p>The university also announced the return of admission into its MBBS programme after an earlier suspension.</p>
      <p>Qualified candidates interested in studying Medicine and Surgery can now apply for admission during the 2026/2027 admission exercise.</p>

      <h2>How to Apply for FUTA Post UTME/DE Screening</h2>
      <p>Interested applicants should complete the registration online through the official FUTA portal by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://www.futa.edu.ng/">FUTA website</a></li>
        <li>Generate the Remita payment code</li>
        <li>Pay the ₦2,000 screening fee through Remita at any bank</li>
        <li>Return to the FUTA portal after payment</li>
        <li>Complete and submit the online registration form</li>
        <li>Print the completed application slip</li>
      </ol>
      <p>Candidates are advised to carefully use the correct UTME registration number and ensure that their names match their JAMB records.</p>

      <h2>Important Instructions for Candidates</h2>
      <p>FUTA emphasized that all candidates must:</p>
      <ul>
        <li>Complete the online screening registration before the deadline</li>
        <li>Upload their O’Level results to JAMB CAPS on or before Friday, 3 July 2026</li>
        <li>Participate fully in the screening process</li>
      </ul>
      <p>The university warned that candidates who fail to upload their results or participate in the screening exercise will not be considered for admission.</p>

      <h2>FUTA Contact Information</h2>
      <p>Applicants seeking further clarification can visit the official website of Federal University of Technology Akure or contact the university through the following numbers:</p>
      <ul>
        <li>+2348062484770</li>
        <li>+2347062320151</li>
        <li>+2348034277322</li>
        <li>+2348034655619</li>
        <li>+2348126049786</li>
      </ul>`,
    tags: [
      "FUTA",
      "Federal University of Technology Akure",
      "Post UTME",
      "Direct Entry",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
      "MBBS",
    ],
  },
  {
    id: "futa-departmental-cut-off-mark-2026-2027",
    title: "FUTA Departmental Cut-Off Mark for 2026/2027 Admission",
    category: "Education",
    date: "2026-05-28",
    excerpt: "Federal University of Technology Akure has officially announced the departmental cut-off mark for admission into its undergraduate programmes for the 2026/2027 academic session.",
    content: `<h2>FUTA Departmental Cut-Off Mark for 2026/2027 Admission</h2>
      <p>Federal University of Technology Akure has officially announced the departmental cut-off mark for admission into its undergraduate programmes for the 2026/2027 academic session.</p>
      <p>The update is important for candidates preparing for the university’s Post-UTME screening exercise, as it outlines the minimum UTME score required to qualify for admission consideration.</p>
      <p>Founded in 1981, the Federal University of Technology, Akure (FUTA), remains one of Nigeria’s leading technology-focused universities, known for combining practical and theoretical training across science, engineering, technology, and management disciplines.</p>

      <h3>FUTA Post-UTME Eligibility for 2026/2027</h3>
      <p>According to the university, candidates who selected FUTA as their first-choice institution during the 2026 UTME and scored a minimum of <strong>180</strong> are eligible to apply for the Post-UTME screening exercise.</p>
      <p>This cut-off mark serves as the general benchmark for admission consideration into the university’s undergraduate programmes.</p>

      <h3>FUTA Courses and Approved Cut-Off Mark</h3>
      <p>Candidates who scored at least 180 in the UTME can apply for admission into the following courses:</p>

      <h4>School of Engineering and Engineering Technology</h4>
      <ul>
        <li>Agricultural Engineering</li>
        <li>Civil Engineering</li>
        <li>Computer Engineering</li>
        <li>Electrical/Electronics Engineering</li>
        <li>Industrial and Production Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Metallurgical and Material Engineering</li>
        <li>Mining Engineering</li>
      </ul>

      <h4>School of Computing and Information Technology</h4>
      <ul>
        <li>Computer Science</li>
        <li>Cyber Security</li>
        <li>Information and Communication Technology</li>
        <li>Information Systems</li>
        <li>Information Technology</li>
        <li>Software Engineering</li>
      </ul>

      <h4>School of Sciences</h4>
      <ul>
        <li>Biochemistry</li>
        <li>Biology</li>
        <li>Biotechnology</li>
        <li>Industrial Chemistry</li>
        <li>Industrial Mathematics</li>
        <li>Mathematics</li>
        <li>Microbiology</li>
        <li>Physics</li>
        <li>Statistics</li>
      </ul>

      <h4>School of Environmental Technology</h4>
      <ul>
        <li>Architecture</li>
        <li>Building</li>
        <li>Estate Management</li>
        <li>Quantity Surveying</li>
        <li>Surveying and Geoinformatics</li>
        <li>Urban and Regional Planning</li>
      </ul>

      <h4>School of Agriculture and Agricultural Technology</h4>
      <ul>
        <li>Agriculture and Resource Economics</li>
        <li>Agricultural Extension and Communication Technology</li>
        <li>Animal Production and Health</li>
        <li>Crop, Soil and Pest Management</li>
        <li>Fisheries and Aquaculture Technology</li>
        <li>Forestry and Wood Technology</li>
      </ul>

      <h4>Other Available Courses</h4>
      <ul>
        <li>Applied Geology</li>
        <li>Applied Geophysics</li>
        <li>Biomedical Technology</li>
        <li>Ecotourism and Wildlife Management</li>
        <li>Food Science and Technology</li>
        <li>Human Anatomy</li>
        <li>Industrial Design</li>
        <li>Marine Science and Technology</li>
        <li>Meteorology</li>
        <li>Physiology</li>
        <li>Remote Sensing and Geosciences Information System</li>
      </ul>

      <h3>Why the FUTA Cut-Off Mark Matters</h3>
      <p>Understanding the approved cut-off mark helps candidates:</p>
      <ul>
        <li>Confirm eligibility for the Post-UTME screening</li>
        <li>Select suitable courses based on UTME performance</li>
        <li>Prepare ahead for admission screening requirements</li>
        <li>Avoid mistakes during the admission process</li>
      </ul>
      <p>Candidates are advised to carefully check course requirements and ensure that their UTME subject combination and O’Level results match the programme they intend to study.</p>

      <h3>Final Advice for Prospective FUTA Students</h3>
      <p>Admission into Federal University of Technology Akure remains competitive, especially for courses in engineering, computing, and health sciences.</p>
      <p>Prospective candidates should prepare adequately for the Post-UTME screening exercise and ensure all required documents and results are properly uploaded through the appropriate portals to improve their admission chances for the 2026/2027 academic session.</p>`,
    tags: ["FUTA", "Federal University of Technology Akure", "Cut-off Mark", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "aaua-post-utme-direct-entry-2026-2027",
    title: "AAUA Opens 2026/2027 Post UTME and Direct Entry Screening Registration",
    category: "Education",
    date: "2026-05-26",
    excerpt: "Adekunle Ajasin University has announced the commencement of registration for its 2026/2027 Post UTME and Direct Entry screening exercise.",
    content: `<h2>AAUA Opens 2026/2027 Post UTME and Direct Entry Screening Registration</h2>
      <p>Adekunle Ajasin University has announced the commencement of registration for its 2026/2027 Post UTME and Direct Entry screening exercise.</p>
      <p>The online screening registration begins on <strong>Tuesday, 26 May 2026</strong>, for candidates seeking undergraduate admission into the university.</p>

      <h3>AAUA Post UTME Eligibility Requirements</h3>
      <p>Candidates applying for the AAUA Post UTME screening must meet the following conditions:</p>
      <ul>
        <li>Score at least <strong>160</strong> in the 2026/2027 UTME</li>
        <li>Choose AAUA as first-choice institution on JAMB CAPS</li>
        <li>Be at least <strong>16 years old by 30 September 2026</strong></li>
      </ul>
      <p>Candidates who did not initially select AAUA can still apply, but they must first change their institution to Adekunle Ajasin University through the JAMB portal before the registration deadline.</p>

      <h3>AAUA Post UTME Registration Fee</h3>
      <p>Eligible applicants are required to pay a total of <strong>₦5,000</strong> through the university screening portal.</p>
      <p>The fee breakdown includes:</p>
      <ul>
        <li>₦2,000 for Post UTME registration</li>
        <li>₦3,000 for portal access fee</li>
      </ul>
      <p>Payments are to be made online via E-tranzact through the official AAUA screening portal.</p>

      <h3>How to Register for AAUA Post UTME/Direct Entry Screening</h3>
      <p>Candidates should complete their registration online by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://putme.aaua.edu.ng/">AAUA screening portal</a></li>
        <li>Create an account using a valid JAMB Registration Number and email address</li>
        <li>Confirm the email address through the verification link sent to the inbox</li>
        <li>Check the spam folder if the email is not found in the inbox</li>
        <li>Log in and pay the ₦5,000 screening fee through E-tranzact</li>
        <li>Complete the biodata form carefully</li>
        <li>Print the completed biodata slip</li>
      </ol>
      <p>Applicants are advised to review all entries before submission to avoid mistakes that may affect their admission processing.</p>

      <h3>O’Level and Direct Entry Requirements</h3>
      <p>AAUA accepts WAEC, NECO, and NABTEB results, with a maximum of two sittings allowed.</p>
      <p>Candidates awaiting results can also apply, but they must upload their results to both:</p>
      <ul>
        <li>The AAUA portal</li>
        <li>JAMB CAPS</li>
      </ul>
      <p>All candidates must possess credit passes in English Language and Mathematics alongside other course-specific requirements.</p>

      <h4>Direct Entry Qualifications Accepted by AAUA</h4>
      <p>Direct Entry applicants may apply with any of the following:</p>
      <ul>
        <li>First Degree with at least Second Class Lower</li>
        <li>ND with Upper Credit</li>
        <li>HND with Lower Credit</li>
        <li>JUPEB with a minimum of 6 points</li>
        <li>NCE with at least 8 points</li>
      </ul>
      <p>Candidates are advised to confirm the specific admission requirements for their chosen course before registration.</p>

      <h3>Important Instructions for Applicants</h3>
      <p>The university emphasized that candidates must ensure:</p>
      <ul>
        <li>Correct UTME subject combinations</li>
        <li>Proper O’Level subject requirements</li>
        <li>Accurate personal information during registration</li>
      </ul>
      <p>Candidates with incorrect UTME subject combinations are advised to change to suitable courses on JAMB CAPS.</p>
      <p>AAUA warned that false information, misrepresentation, or document falsification may lead to disqualification from the admission process.</p>

      <h3>Screening Participation Is Mandatory</h3>
      <p>The university stated clearly that participation in the online screening exercise is compulsory for all applicants.</p>
      <p>After registration, candidates should print and keep proof of payment and registration for future reference.</p>

      <h3>Final Notice to AAUA Applicants</h3>
      <p>Adekunle Ajasin University also advised candidates to provide active email addresses and reachable phone numbers during registration.</p>
      <p>The institution warned that it will not be responsible for missed updates caused by invalid contact details or phone settings such as “Do Not Disturb” mode.</p>
      <p>The university further stated that it does not operate through admission agents, and applicants should avoid dealing with unauthorised individuals.</p>`,
    tags: ["AAUA", "Adekunle Ajasin University", "Post UTME", "Direct Entry", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "jamb-2026-utme-mop-up-examination",
    title: "JAMB Fixes 13 June 2026 for 2026 UTME Mop-Up Examination",
    category: "Education",
    date: "2026-05-26",
    excerpt: "The Joint Admissions and Matriculation Board has announced Saturday, 13 June 2026, as the date for the 2026 Unified Tertiary Matriculation Examination (UTME) mop-up examination.",
    content: `<h2>JAMB Fixes 13 June 2026 for 2026 UTME Mop-Up Examination</h2>
      <p>The Joint Admissions and Matriculation Board (JAMB) has announced <strong>Saturday, 13 June 2026</strong>, as the date for the 2026 Unified Tertiary Matriculation Examination (UTME) mop-up examination.</p>
      <p>The mop-up exercise is designed for candidates who participated in the main 2026 UTME but, for various reasons, were unable to complete or sit for their examinations.</p>

      <h3>Who Is Eligible for the Mop-Up Exam?</h3>
      <p>According to JAMB, the mop-up examination is strictly for:</p>
      <ul>
        <li>Candidates who were present during the 2026 UTME and completed biometric verification but were unable to sit for the exam</li>
        <li>Candidates affected by technical challenges at examination centres</li>
        <li>Candidates who experienced biometric verification issues</li>
        <li>Candidates whose results were withdrawn due to examination infractions</li>
      </ul>
      <p>The board emphasized that only candidates already captured within the 2026 UTME system are eligible for this final opportunity.</p>

      <h3>Background of the 2026 UTME Exercise</h3>
      <p>The main 2026 UTME was conducted between <strong>16 April and 25 April 2026</strong> across approved centres nationwide.</p>
      <p>However, some candidates encountered disruptions, including system failures, centre-related technical issues, and biometric verification delays. These challenges prevented them from completing the examination.</p>
      <p>The mop-up examination now serves as the final phase of the 2026 UTME process for affected candidates.</p>
      <p>JAMB has also made it clear that this mop-up is the <strong>final opportunity</strong> for candidates in the 2026 UTME cycle.</p>

      <h3>Printing of Examination Notification Slips</h3>
      <p>Affected candidates are expected to begin printing their examination notification slips from <strong>Saturday, 6 June 2026</strong>.</p>
      <p>The slip will contain important information such as:</p>
      <ul>
        <li>Examination centre</li>
        <li>Date and time of the exam</li>
        <li>Candidate details and instructions</li>
      </ul>
      <p>Candidates are advised to print their slips early to avoid last-minute challenges and to confirm their assigned centres in advance.</p>

      <h3>Important Instructions for Candidates</h3>
      <p>Candidates scheduled for the mop-up examination are strongly advised to:</p>
      <ul>
        <li>Print and review their examination slips immediately they become available</li>
        <li>Confirm their examination centre location</li>
        <li>Plan transportation and logistics ahead of the exam date</li>
        <li>Arrive early at their assigned centres</li>
      </ul>
      <p>Late preparation or failure to check details early may result in avoidable difficulties on examination day.</p>

      <h3>Final Note for Affected Candidates</h3>
      <p>The mop-up examination represents the final stage of the 2026 UTME cycle for all eligible candidates.</p>
      <p>Candidates are advised to treat the 13 June 2026 date as final and ensure full preparation ahead of the examination.</p>
      <p>No further opportunity will be provided after this mop-up exercise.</p>`,
    tags: ["JAMB", "UTME", "Mop-Up Exam", "Education", "Nigeria", "2026"],
  },
  {
    id: "ebonyi-state-university-post-utme-direct-entry-2026-2027",
    title: "Ebonyi State University Begins 2026/2027 Post UTME and Direct Entry Screening",
    category: "Education",
    date: "2026-05-26",
    excerpt: "Ebonyi State University has officially commenced its Post UTME and Direct Entry screening exercise for the 2026/2027 academic session.",
    content: `<h2>Ebonyi State University Begins 2026/2027 Post UTME and Direct Entry Screening</h2>
      <p>Ebonyi State University has officially commenced its Post UTME and Direct Entry screening exercise for the 2026/2027 academic session.</p>
      <p>The screening process is open to candidates seeking admission into various undergraduate programmes of the institution, including both UTME and Direct Entry applicants.</p>

      <h3>Who Can Apply for EBSU Post UTME?</h3>
      <p>The application is open to:</p>
      <ul>
        <li>Candidates who selected EBSU as their first choice in JAMB</li>
        <li>Candidates who did not choose EBSU initially but are willing to change their institution to EBSU</li>
      </ul>
      <p>All applicants must have scored <strong>150 and above in the 2026 UTME</strong> before they can be considered for admission screening.</p>
      <p>Candidates changing their institution of choice are advised to complete the update on the JAMB portal before the application deadline.</p>

      <h3>EBSU Direct Entry Screening</h3>
      <p>Direct Entry candidates are also required to participate in the online screening exercise.</p>
      <p>Applicants must:</p>
      <ul>
        <li>Possess relevant qualifications such as A’Level, OND, HND, or equivalent certificates</li>
        <li>Ensure their previous institutions verify their credentials through the JAMB portal</li>
        <li>Match their qualifications to the course requirements selected at EBSU</li>
      </ul>

      <h3>Application Period and Deadline</h3>
      <p>The EBSU Post UTME and Direct Entry screening schedule is as follows:</p>
      <ul>
        <li><strong>Opening Date:</strong> 22 May 2026</li>
        <li><strong>Closing Date:</strong> 22 June 2026</li>
      </ul>
      <p>Candidates are strongly advised to complete their registration within the stipulated period, as late applications will not be considered.</p>

      <h3>Screening Fee</h3>
      <p>The application fee is <strong>₦2,000 (non-refundable)</strong>.</p>
      <p>Applicants must ensure that their personal details are correctly entered during payment and registration, as errors may affect their admission process.</p>

      <h3>Important Guidelines for Applicants</h3>
      <p>EBSU has issued the following key instructions:</p>
      <ul>
        <li>Candidates awaiting WAEC, NECO, or NABTEB results can apply but must upload results once released</li>
        <li>All names must match across JAMB, O’Level, and registration documents</li>
        <li>Candidates are not required to appear for physical screening</li>
        <li>Admission status will be communicated via the EBSU portal</li>
        <li>O’Level results must be uploaded to both the EBSU and JAMB portals</li>
      </ul>
      <p>Additionally, admitted candidates must accept their admission on JAMB CAPS within <strong>two weeks</strong>, or the offer will be withdrawn.</p>

      <h3>How to Apply for EBSU Post UTME / Direct Entry</h3>
      <p>Applicants should complete the process online via the official EBSU portal:</p>
      <ol>
        <li>Visit the <a href="https://portal.ebsu.edu.ng/">EBSU application portal</a></li>
        <li>Click on “Online Application Forms”</li>
        <li>Select either Post UTME or Direct Entry form</li>
        <li>Enter your JAMB registration number</li>
        <li>Generate invoice and proceed to payment</li>
        <li>Pay via bank or debit card</li>
        <li>Return to the portal after payment</li>
        <li>Complete and submit the application form</li>
      </ol>
      <p>Applicants are advised to use a valid email address and phone number throughout the process.</p>

      <h3>Available Courses for Screening</h3>
      <p>EBSU offers a wide range of programmes across several faculties, including:</p>
      <ul>
        <li>Medicine and Surgery, Nursing Science, Medical Laboratory Science</li>
        <li>Law</li>
        <li>Engineering and Environmental Sciences</li>
        <li>Management and Social Sciences</li>
        <li>Education</li>
        <li>Science and Technology</li>
        <li>Agriculture</li>
        <li>Arts, Humanities, and Social Sciences</li>
      </ul>
      <p>Candidates are expected to ensure their course choice aligns with their UTME subject combination and O’Level results.</p>

      <h3>Final Note</h3>
      <p>The university emphasized that all applications must be completed on or before <strong>22 June 2026</strong>.</p>
      <p>Since the screening process is fully online, candidates are not required to appear physically for screening. However, accurate information is essential, as admission decisions will be based strictly on submitted records.</p>`,
    tags: ["EBSU", "Ebonyi State University", "Post UTME", "Direct Entry", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "imo-state-university-post-utme-direct-entry-2026-2027",
    title: "Imo State University Begins 2026/2027 Post UTME and Direct Entry Screening Registration",
    category: "Education",
    date: "2026-05-26",
    excerpt: "Imo State University has officially announced the commencement of its Post UTME and Direct Entry screening registration for the 2026/2027 academic session.",
    content: `<h2>Imo State University Begins 2026/2027 Post UTME and Direct Entry Screening Registration</h2>
      <p>Imo State University has officially announced the commencement of its Post UTME and Direct Entry screening registration for the 2026/2027 academic session.</p>
      <p>The registration exercise is set to begin on <strong>Monday, 25 May 2026</strong>, and is open to eligible candidates seeking admission into various undergraduate programmes of the university.</p>

      <h2>Who Can Apply for IMSU Post UTME 2026/2027?</h2>
      <p>The screening exercise is open to two main categories of candidates:</p>

      <h3>UTME Candidates</h3>
      <ul>
        <li>Candidates who selected IMSU as their first choice and scored <strong>at least 160 in the UTME</strong> are eligible to apply.</li>
        <li>Candidates who did not initially choose IMSU can still apply, but must first change their institution of choice to Imo State University, Owerri, through the JAMB portal before the application closes.</li>
      </ul>

      <h3>Direct Entry Candidates</h3>
      <p>Direct Entry applicants must possess any of the following qualifications:</p>
      <ul>
        <li>OND</li>
        <li>HND</li>
        <li>First Degree</li>
        <li>A’Level or equivalent qualifications</li>
      </ul>
      <p>However, all qualifications must be relevant to the chosen course of study, as IMSU will only consider candidates whose academic backgrounds match their intended programme.</p>

      <h2>Important O’Level Requirement for All Candidates</h2>
      <p>All applicants, whether UTME or Direct Entry, must ensure that their O’Level results are properly uploaded to the JAMB portal.</p>
      <p>Candidates awaiting results are advised to upload them immediately once available.</p>
      <p>The university has clearly stated that failure to upload O’Level results to JAMB will lead to automatic disqualification from the admission process.</p>

      <h2>How to Apply for IMSU Post UTME / Direct Entry Screening</h2>
      <p>Applicants are required to complete their registration online via the university portal by following these steps:</p>
      <ol>
        <li>Visit the <a href="https://www.imsuonline.edu.ng/">IMSU official application portal</a></li>
        <li>Click on the 2026/2027 Post UTME/Direct Entry application link</li>
        <li>Enter your JAMB registration number to check eligibility</li>
        <li>Proceed to payment if eligible</li>
        <li>Pay a fee of ₦2,000 using your JAMB registration number as the invoice number</li>
        <li>Return to the portal after 24 hours to complete the application form</li>
        <li>Print your acknowledgement slip for screening</li>
      </ol>
      <p>Candidates are also encouraged to use IMSU Microfinance Bank for smoother payment processing.</p>

      <h2>IMSU Screening and Aptitude Test Details</h2>
      <p>The university has stated that the exact date and time for the aptitude test or screening exercise will be communicated later to candidates.</p>
      <p>Applicants are advised to regularly check their application status and keep their acknowledgement slip safe, as it will be required at the screening venue.</p>

      <h2>IMSU Post UTME Closing Date</h2>
      <p>The deadline for submission of applications for the 2026/2027 Post UTME and Direct Entry screening is <strong>Thursday, 25 June 2026</strong>.</p>
      <p>Candidates are strongly advised to complete all registration steps early to avoid last-minute errors or system challenges.</p>

      <h2>Final Note</h2>
      <p>Prospective students are encouraged to prepare ahead of the screening exercise and may also review past questions to improve their chances of success in the IMSU admission process.</p>`,
    tags: ["IMSU", "Imo State University", "Post UTME", "Direct Entry", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "adeseun-ogundoyin-polytechnic-post-utme-2026-2027",
    title: "Adeseun Ogundoyin Polytechnic Opens 2026/2027 Post UTME Application for ND Full-Time Admission",
    category: "Education",
    date: "2026-05-26",
    excerpt: "Adeseun Ogundoyin Polytechnic, formerly known as Ibarapa Polytechnic, has announced the commencement of its Post UTME application for National Diploma (ND) full-time admission for the 2026/2027 academic session.",
    content: `<h2>Adeseun Ogundoyin Polytechnic Opens 2026/2027 Post UTME Application for ND Full-Time Admission</h2>
      <p>Adeseun Ogundoyin Polytechnic, formerly known as Ibarapa Polytechnic, has announced the commencement of its Post UTME application for National Diploma (ND) full-time admission for the 2026/2027 academic session.</p>
      <p>The admission exercise is open to candidates who selected the institution as their first-choice polytechnic during the 2026/2027 UTME and scored the required minimum mark.</p>
      <p>Interested applicants are advised to carefully review the admission requirements and available courses before beginning the online application process.</p>

      <h3>AOPE Admission Requirements for 2026/2027 ND Programmes</h3>
      <p>Candidates seeking admission into any ND full-time programme at Adeseun Ogundoyin Polytechnic must meet the following conditions:</p>
      <ul>
        <li>Applicants must score at least 100 in the 2026/2027 UTME.</li>
        <li>Candidates must have selected AOPE, Eruwa, Oyo State, as their first-choice institution.</li>
        <li>Applicants must possess five relevant O’Level credit passes required for their chosen course of study.</li>
      </ul>
      <p>Candidates are encouraged to confirm the exact subject requirements for their preferred programme before submitting the application form.</p>

      <h3>List of AOPE ND Courses for 2026/2027 Admission</h3>
      <p>The polytechnic offers ND full-time programmes across four major faculties.</p>

      <h4>Faculty of Communication and Management Studies</h4>
      <ul>
        <li>ND Accountancy</li>
        <li>ND Business Administration and Management</li>
        <li>ND Marketing</li>
        <li>ND Mass Communication</li>
        <li>ND Office Technology and Management</li>
        <li>ND Public Administration</li>
        <li>ND Procurement and Supply Chain Management</li>
      </ul>

      <h4>Faculty of Engineering</h4>
      <ul>
        <li>ND Civil Engineering</li>
        <li>ND Computer Engineering</li>
        <li>ND Electrical Engineering</li>
        <li>ND Mechanical Engineering</li>
      </ul>

      <h4>Faculty of Science</h4>
      <ul>
        <li>ND Computer Science</li>
        <li>ND Library and Information Science</li>
        <li>ND Science Laboratory Technology</li>
        <li>ND Statistics</li>
      </ul>

      <h4>Faculty of Environmental Studies</h4>
      <ul>
        <li>ND Architectural Technology</li>
        <li>ND Art and Industrial Design</li>
        <li>ND Estate Management and Valuation</li>
        <li>ND Fashion Design and Clothing Technology</li>
      </ul>
      <p>Applicants are advised to carefully choose a course that matches their UTME subjects and O’Level qualifications.</p>

      <h3>How to Apply for AOPE Post UTME Form</h3>
      <p>Interested candidates should complete the application online through the official AOPE admission portal.</p>
      <p>Applicants are expected to provide accurate details, including:</p>
      <ul>
        <li>UTME information</li>
        <li>O’Level results</li>
        <li>Personal data</li>
        <li>Preferred course of study</li>
      </ul>
      <p>Candidates should ensure that all submitted information matches their official examination records.</p>

      <h3>AOPE Post UTME Application Deadline</h3>
      <p>The deadline for submission of applications is <strong>Monday, 29 June 2026</strong>.</p>
      <p>Applicants are advised to complete the registration process early to avoid mistakes or last-minute technical issues.</p>

      <h3>AOPE Contact Information</h3>
      <p>Candidates who require further information can visit the official website of Adeseun Ogundoyin Polytechnic. For enquiries, applicants may also contact the institution through the following email addresses: <a href="mailto:info@aope.edu.ng">info@aope.edu.ng</a> or <a href="mailto:admission@aope.edu.ng">admission@aope.edu.ng</a>.</p>`,
    tags: ["Adeseun Ogundoyin Polytechnic", "AOPE", "Post UTME", "Admission", "2026/2027", "ND", "Education", "Nigeria"],
  },
  {
    id: "jigawa-state-college-nursing-sciences-hadejia-post-utme-2026-2027",
    title: "Jigawa State College of Nursing Sciences Hadejia Opens 2026/2027 Post UTME Application",
    category: "Education",
    date: "2026-05-25",
    excerpt: "Jigawa State College of Nursing Sciences has announced the commencement of Post UTME applications for its ND/HND Nursing Programme for the 2026/2027 academic session.",
    content: `<h2>Jigawa State College of Nursing Sciences Hadejia Opens 2026/2027 Post UTME Application</h2>
      <p>Jigawa State College of Nursing Sciences has announced the commencement of Post UTME applications for its ND/HND Nursing Programme for the 2026/2027 academic session.</p>
      <p>The admission form is open to candidates who selected the college as their first choice during the 2026 UTME and meet all the admission requirements. Interested applicants are advised to carefully check the eligibility conditions before beginning the online registration process, as errors in subject combination or qualifications may affect admission chances.</p>

      <h3>Eligibility Requirements for Hadejia ND/HND Nursing Admission</h3>
      <p>To qualify for admission, candidates must meet the following conditions:</p>
      <ul>
        <li>Applicants must be at least 18 years old.</li>
        <li>Candidates must score a minimum of 150 in the 2026 UTME.</li>
        <li>The approved JAMB subject combination includes:
          <ul>
            <li>English Language</li>
            <li>Biology</li>
            <li>Chemistry</li>
            <li>Physics</li>
          </ul>
        </li>
      </ul>
      <p>The college stressed that candidates without the correct subject combination will not be considered for admission.</p>

      <h4>O’Level Requirements</h4>
      <p>Applicants must possess five credit passes in not more than two sittings in the following subjects: English Language, Mathematics, Biology, Chemistry, and Physics.</p>
      <p>The institution accepts these result combinations: WAEC/WAEC, NECO/NECO, WAEC/NECO, and NABTEB/NABTEB.</p>

      <h3>Hadejia Post UTME Application Dates</h3>
      <p>The online application portal opened on <strong>Monday, 25 May 2026</strong>. The deadline for submission is <strong>Monday, 29 June 2026</strong>.</p>
      <p>Applicants are expected to complete registration, payment, and print their application slip before the closing date.</p>

      <h3>How to Apply for the Hadejia Post UTME Form</h3>
      <p>Interested candidates should complete their registration through the official Hadejia Campus application portal. Applicants are required to:</p>
      <ol>
        <li>Visit the <a href"https://conhadejia.edu.ng/utme/newuser.php">application portal</a></li>
        <li>Click on “Click here to Register”</li>
        <li>Fill in the required personal details</li>
        <li>Proceed with payment (₦2,000 fee, excluding bank charges)</li>
        <li>Complete and submit the application form</li>
        <li>Print the application slip after submission</li>
      </ol>

      <h3>Entrance Examination Details</h3>
      <p>The entrance examination will be conducted as a Computer Based Test (CBT). Applicants should keep their printed registration slip safe because it contains instructions and details relating to the screening exercise.</p>

      <h3>College Warns Against Fraudsters and Agents</h3>
      <p>The college stated clearly that it has not authorised any individual or agent to process admission applications on behalf of candidates. Applicants are strongly advised to use only the official application portal and avoid making payments to third parties.</p>

      <h3>Contact Information</h3>
      <p>For further enquiries, candidates can contact the Hadejia Campus through: <strong>07034488375</strong>.</p>`,
    tags: ["Jigawa State", "Nursing", "Post UTME", "Admission", "2026/2027", "Hadejia", "Education", "Nigeria"],
  },
  {
    id: "fg-declares-public-holiday-eid-el-kabir-2026",
    title: "Federal Government Declares Two-Day Public Holiday for Eid-el-Kabir 2026",
    category: "News",
    date: "2026-05-26",
    excerpt: "The Federal Government has declared Wednesday, 27 May, and Thursday, 28 May 2026, as public holidays to mark this year’s Eid-el-Kabir celebration.",
    content: `<h2>Federal Government Declares Two-Day Public Holiday for Eid-el-Kabir 2026</h2>
      <p>The Federal Government has declared Wednesday, 27 May, and Thursday, 28 May 2026, as public holidays to mark this year’s Eid-el-Kabir celebration.</p>
      <p>The announcement was made by the Minister of Interior, Olubunmi Tunji-Ojo, through a statement released on Monday by the ministry’s Permanent Secretary, Magdalene Ajani.</p>
      <p>According to the statement, the declaration reflects the Federal Government’s recognition of the religious significance of Eid-el-Kabir and its importance to millions of Muslims in Nigeria and across the world.</p>

      <h2>Eid-el-Kabir and Its Spiritual Significance</h2>
      <p>Eid-el-Kabir, also known as Eid-ul-Adha, is one of the most important celebrations in Islam. The festival symbolises sacrifice, obedience to God, faith, and compassion for humanity.</p>
      <p>In his message to Muslim faithful across Nigeria and in the diaspora, Tunji-Ojo described the occasion as a time for deep spiritual reflection and renewed commitment to peace and kindness.</p>
      <p>He encouraged Nigerians to use the holiday period to pray for the nation and seek divine guidance as the country continues its pursuit of peace, security, and prosperity.</p>
      <p>According to the statement, the Federal Government urged citizens to embrace “prayer and sober reflection” during the celebration.</p>

      <h2>Call for Unity and Peaceful Coexistence</h2>
      <p>The minister also called on Nigerians to strengthen the spirit of unity, brotherhood, and peaceful coexistence during the festive season.</p>
      <p>He urged citizens to show love and care for one another regardless of religious or ethnic differences, stressing the importance of national unity at this time.</p>
      <p>The Federal Government further wished Muslims across the country a peaceful, joyful, and blessed Eid-ul-Adha celebration.</p>

      <h2>Public Holidays Confirmed</h2>
      <p>With the declaration, Nigerians will observe public holidays on:</p>
      <ul>
        <li>Wednesday, 27 May 2026</li>
        <li>Thursday, 28 May 2026</li>
      </ul>
      <p>The two-day break will allow Muslim faithful and families across the country to fully participate in the Eid-el-Kabir celebrations and related activities.</p>`,
    tags: ["Nigeria", "Public Holiday", "Eid-el-Kabir", "Government", "News", "2026"],
  },
  {
    id: "futo-post-utme-direct-entry-2026-2027",
    title: "FUTO Opens 2026/2027 Post UTME and Direct Entry Screening Registration",
    category: "Education",
    date: "2026-05-22",
    excerpt: "Federal University of Technology, Owerri (FUTO) has commenced Post UTME and Direct Entry screening for the 2026/2027 academic session.",
    content: `<h2>FUTO Opens 2026/2027 Post UTME and Direct Entry Screening Registration</h2>
      <p>Federal University of Technology, Owerri has announced the commencement of Post UTME and Direct Entry screening registration for the 2026/2027 academic session.</p>
      <p>The screening exercise is open to candidates who applied through Joint Admissions and Matriculation Board for undergraduate admission and selected FUTO as their first-choice institution.</p>
      <p>Candidates who did not initially choose FUTO may still apply after changing their institution to FUTO on JAMB CAPS on or before <strong>31 July 2026</strong>.</p>

      <h3>FUTO Post UTME Registration Dates and Eligibility</h3>
      <p>The university stated that:</p>
      <ul>
        <li>Registration begins on <strong>Friday, 22 May 2026</strong></li>
        <li>Registration closes on <strong>Friday, 31 July 2026</strong></li>
      </ul>
      <p>To qualify for the screening exercise, candidates must be at least 16 years old by 30 September 2026 and score a minimum of <strong>150</strong> in the 2026 UTME.</p>

      <h3>FUTO O’Level Requirements</h3>
      <p>Applicants must possess at least five O’Level credit passes, including English Language, Mathematics, and three other subjects relevant to the chosen course. Results must be obtained in not more than two sittings.</p>
      <p><strong>Special Requirement for MBBS Candidates:</strong> Candidates applying for Medicine and Surgery (MBBS) must possess credit passes in English, Mathematics, Physics, Chemistry, and Biology obtained in <strong>one sitting</strong>.</p>

      <h3>FUTO Courses and Minimum Score Requirements</h3>
      <p>The university has categorized courses based on UTME performance requirements:</p>
      
      <h4>Programmes Requiring a Minimum JAMB Score of 150:</h4>
      <ul>
        <li><strong>Agriculture:</strong> Agribusiness, Agricultural Economics, Animal Science, Crop Science, Soil Science, Fisheries, Forestry.</li>
        <li><strong>Biological Sciences:</strong> Biochemistry, Biological Science, Biotechnology, Forensic Science, Microbiology.</li>
        <li><strong>Environmental Sciences:</strong> Building Technology, Environmental Management, Estate Management, Quantity Surveying, Urban and Regional Planning.</li>
        <li><strong>Logistics:</strong> Entrepreneurship, Finance, Logistics & Transport, Maritime Science, Project Management, Supply Chain Management.</li>
        <li><strong>Physical Sciences:</strong> Chemistry, Geology, Mathematics, Physics, SLT, Statistics.</li>
      </ul>

      <h4>Programmes Requiring a Minimum JAMB Score of 170:</h4>
      <ul>
        <li><strong>ICT:</strong> Computer Science, Cyber Security, Information Technology, Software Engineering.</li>
        <li><strong>Engineering:</strong> Chemical, Civil, Mechanical, Petroleum, Computer, Electrical, Mechatronic, Telecommunication Engineering.</li>
        <li><strong>Health & Medical:</strong> Architecture, Optometry, Radiography, Public Health, Human Anatomy, Human Physiology.</li>
      </ul>

      <h4>MBBS Requirement:</h4>
      <p>The MBBS programme under the College of Medicine requires a minimum UTME score of <strong>200</strong> and a one-sitting O'Level result.</p>

      <h3>FUTO Direct Entry Requirements</h3>
      <p>Direct Entry candidates must possess A’Level passes in relevant subjects, OND, HND, or a first degree in related disciplines. Applicants must ensure academic transcripts reach the Registrar of FUTO on or before 17 August 2026.</p>

      <h3>FUTO Screening Method</h3>
      <p>FUTO stated that the 2026/2027 screening exercise will be conducted through <strong>internal screening</strong> of verified JAMB scores and uploaded O’Level results on JAMB CAPS. Candidates must upload their O’Level results on JAMB CAPS on or before <strong>17 August 2026</strong> to be considered for admission.</p>

      <h3>How to Apply for FUTO Post UTME and Direct Entry Screening</h3>
      <p>Candidates should follow these steps carefully:</p>
      <ol>
        <li>Visit the <a href="https://futo.edu.ng/">FUTO website</a> and click “Prospective Students”.</li>
        <li>Select <a href="https://portal.futo.edu.ng/#undergraduate">“Undergraduate”</a>.</li>
        <li>Click “Generate Invoice” and enter your JAMB registration number.</li>
        <li>Generate payment invoice with Remita Retrieval Reference (RRR) and pay <strong>₦2,000</strong> at any bank or online.</li>
        <li>Return to the <a href="https://portal.futo.edu.ng/putme_login">FUTO Post UTME portal</a> and log in.</li>
        <li>Complete and submit the application form.</li>
        <li>Print the acknowledgement slip.</li>
      </ol>

      <h3>Important Notice to Applicants</h3>
      <p>Ensure that details on JAMB CAPS (Date of Birth, State of Origin, Course Choice, etc.) match the information entered on the FUTO portal. Only candidates whose selected course matches on both platforms will be considered.</p>

      <h3>FUTO Support Contact</h3>
      <p>For assistance, contact the university via:</p>
      <ul>
        <li>Email: <a href="mailto:ict@futo.edu.ng">ict@futo.edu.ng</a></li>
        <li>Hotline: 08139833300</li>
      </ul>`,
    tags: [
      "FUTO",
      "Post UTME",
      "Direct Entry",
      "Admission",
      "2026/2027",
      "Nigeria",
      "Engineering",
      "Medicine",
    ],
  },
  {
    id: "unidel-post-utme-direct-entry-2026-2027",
    title: "UNIDEL Opens Post UTME and Direct Entry Screening for 2026/2027 Admission",
    category: "Education",
    date: "2026-05-25",
    excerpt: "University of Delta has announced the commencement of Post UTME and Direct Entry screening registration for the 2026/2027 academic session.",
    content: `<h2>UNIDEL Opens Post UTME and Direct Entry Screening for 2026/2027 Admission</h2>
      <p>University of Delta has announced the commencement of Post UTME and Direct Entry screening registration for the 2026/2027 academic session.</p>
      <p>The application portal opened on <strong>25 May 2026</strong> and will close on <strong>15 June 2026</strong>.</p>
      <p>Candidates seeking admission into the university are advised to carefully check the course list, eligibility requirements, application procedures and payment guidelines before completing the online form.</p>

      <h2>UNIDEL Available Undergraduate Courses</h2>
      <p>UNIDEL offers programmes across several faculties, including agriculture, arts, sciences, medicine, law, engineering, education and computing.</p>

      <h3>Faculty of Agriculture</h3>
      <ul>
        <li>B.Sc. Animal Science</li>
        <li>B.Sc. Crop Science</li>
        <li>B.Sc. Agricultural Extension</li>
        <li>B.Sc. Agricultural Economics</li>
        <li>B.Sc. Family and Consumer Science</li>
      </ul>

      <h3>Faculty of Arts</h3>
      <ul>
        <li>B.A English and Literary Studies</li>
        <li>B.A Linguistics</li>
        <li>B.A French</li>
        <li>B.A Music</li>
        <li>B.A Philosophy</li>
        <li>B.A Religious Studies</li>
        <li>B.A History and International Studies</li>
        <li>B.A Theatre Arts</li>
      </ul>

      <h3>Faculty of Basic Medical Sciences</h3>
      <ul>
        <li>B.Sc. Human Physiology</li>
        <li>B.Sc. Medical Biochemistry</li>
        <li>B.Sc. Radiography and Radiation Science</li>
        <li>B.Sc. Anatomy</li>
        <li>B.Sc. Public Health</li>
        <li>B.Sc. Nursing Science</li>
        <li>B.Sc. Medical Laboratory Science</li>
      </ul>

      <h3>Faculty of Computing</h3>
      <ul>
        <li>B.Sc. Computer Science</li>
        <li>B.Sc. Cyber Security</li>
        <li>B.Sc. Software Engineering</li>
        <li>B.Sc. Information and Communication Technology</li>
        <li>B.Sc. Data Science</li>
        <li>B.Sc. Information System</li>
      </ul>

      <h3>Faculty of Education</h3>
      <p>Programmes include:</p>
      <ul>
        <li>Early Childhood Care Education</li>
        <li>Educational Management</li>
        <li>Guidance and Counselling</li>
        <li>Special Education</li>
        <li>Adult and Continuing Education</li>
        <li>English Education</li>
        <li>History Education</li>
        <li>French Education</li>
        <li>Economics Education</li>
        <li>Political Science Education</li>
        <li>Biology Education</li>
        <li>Chemistry Education</li>
        <li>Computer Education</li>
        <li>Mathematics Education</li>
        <li>Physics Education</li>
        <li>Agricultural Science Education</li>
        <li>Business Education</li>
        <li>Educational Technology</li>
        <li>Health Education</li>
        <li>Home Economics Education</li>
        <li>Human Kinetics and Sports Science</li>
      </ul>

      <h3>Faculty of Engineering</h3>
      <ul>
        <li>Mechanical Engineering</li>
        <li>Civil Engineering</li>
        <li>Water Resources Engineering</li>
        <li>Electrical/Electronics Engineering</li>
        <li>Mechatronics Engineering</li>
        <li>Chemical Engineering</li>
        <li>Computer Engineering</li>
      </ul>

      <h3>Faculty of Environmental Sciences</h3>
      <ul>
        <li>Architecture</li>
        <li>Estate Management</li>
        <li>Urban and Regional Planning</li>
        <li>Fine and Applied Arts</li>
        <li>Geography and Environmental Management</li>
        <li>Surveying and Geo-Informatics</li>
      </ul>

      <h3>Faculty of Law</h3>
      <ul>
        <li>LLB Law</li>
      </ul>

      <h3>Faculty of Management Sciences</h3>
      <ul>
        <li>Banking and Finance</li>
        <li>Accounting</li>
        <li>Public Administration</li>
        <li>Business Administration</li>
        <li>Entrepreneurship and Business Innovation</li>
      </ul>

      <h3>Faculty of Medicine</h3>
      <ul>
        <li>MBBS Medicine and Surgery</li>
      </ul>

      <h3>Faculty of Sciences</h3>
      <ul>
        <li>Microbiology</li>
        <li>Biology</li>
        <li>Industrial Chemistry</li>
        <li>Biochemistry</li>
        <li>Chemistry</li>
        <li>Marine Science</li>
        <li>Environmental Management and Toxicology</li>
        <li>Mathematics</li>
        <li>Statistics</li>
        <li>Physics</li>
        <li>Geology</li>
        <li>Biotechnology</li>
      </ul>

      <h3>Faculty of Social Sciences</h3>
      <ul>
        <li>Sociology</li>
        <li>Criminology and Security Studies</li>
        <li>Psychology</li>
        <li>Political Science</li>
        <li>International Relations</li>
        <li>Peace and Conflict Resolution</li>
        <li>Mass Communication</li>
        <li>Economics</li>
        <li>Library and Information Science</li>
      </ul>

      <h2>UNIDEL Post UTME Eligibility Requirements</h2>
      <p>Candidates applying for:</p>
      <ul>
        <li>Medicine and Surgery</li>
        <li>Nursing Science</li>
        <li>Medical Laboratory Science</li>
        <li>Law</li>
      </ul>
      <p>must score at least <strong>230</strong> in the 2026 UTME.</p>
      <p>Applicants for all other courses require a minimum UTME score of <strong>150</strong>.</p>
      <p>Candidates must also possess:</p>
      <ul>
        <li>At least five O’Level credit passes</li>
        <li>Relevant subjects related to the intended course</li>
        <li>Results obtained in not more than two sittings</li>
      </ul>
      <p>Accepted examination bodies include:</p>
      <ul>
        <li>WAEC</li>
        <li>NECO</li>
        <li>GCE</li>
      </ul>

      <h2>UNIDEL Direct Entry Requirements</h2>
      <p>Direct Entry candidates are eligible if they:</p>
      <ul>
        <li>Chose UNIDEL as first-choice institution</li>
        <li>Or completed change of institution to UNIDEL through JAMB</li>
      </ul>
      <p>Accepted qualifications include:</p>
      <ul>
        <li>Diplomas</li>
        <li>Degrees</li>
        <li>Other recognised certificates approved by NUC, NBTE or NCCE</li>
      </ul>
      <p>However, the university stated clearly that Direct Entry admission is not available for:</p>
      <ul>
        <li>Medicine and Surgery</li>
        <li>Nursing Science</li>
        <li>Medical Laboratory Science</li>
      </ul>

      <h2>UNIDEL Age Requirement</h2>
      <p>Candidates must be at least <strong>16 years old by 30 September 2026</strong> in line with the JAMB admission policy.</p>

      <h2>UNIDEL Screening Fee</h2>
      <p>The screening fee is <strong>₦2,000</strong> only.</p>
      <p>Applicants are expected to complete payment through the university portal and print the required payment slip after validation.</p>

      <h2>How to Apply for UNIDEL Post UTME and Direct Entry Screening</h2>
      <p>Eligible candidates should follow these steps carefully.</p>
      <ol>
        <li>Visit the <a href="https://unidel.waeup.org/applicants/ase2026">UNIDEL application portal</a></li>
        <li>Click “Register for application”</li>
        <li>Enter surname exactly as written on JAMB slip</li>
        <li>Enter JAMB registration number and active email address</li>
        <li>Click “Send credentials to e-mail address”</li>
        <li>Open the email inbox and check the KOFA credentials sent by the portal</li>
        <li>Click the confirmation link in the email</li>
        <li>Log in using the provided details</li>
        <li>Click “Edit application record”</li>
        <li>Fill the application form with correct information</li>
        <li>Print the completed application form for future reference</li>
      </ol>
      <p>Candidates are advised to use an active email address because login credentials and updates will be sent there.</p>

      <h2>How to Pay the UNIDEL Screening Fee</h2>
      <p>After logging into the portal:</p>
      <ol>
        <li>Visit the <a href="https://unidel.waeup.org/login">UNIDEL KOFA login portal</a></li>
        <li>Enter username and password</li>
        <li>Click “Edit application record”</li>
        <li>Scroll down and click “Add online payment ticket”</li>
        <li>Click the generated Payment ID</li>
        <li>Select “CollegePay”</li>
        <li>Confirm payment details</li>
        <li>Click “Submit”</li>
        <li>Proceed through the Interswitch payment gateway</li>
        <li>Select the transfer payment option</li>
        <li>Complete payment and validation</li>
        <li>Print the application slip</li>
      </ol>
      <p>The university stated that payment through Interswitch is strictly by transfer.</p>

      <h2>UNIDEL Application Deadline and Screening Date</h2>
      <p>The application portal will close on <strong>15 June 2026</strong>.</p>
      <p>UNIDEL stated that the Post UTME screening date will later be announced through the university’s official channels.</p>
      <p>Candidates who need assistance may contact the university through:</p>
      <ul>
        <li>08119064321</li>
        <li>07026910316</li>
      </ul>`,
    tags: [
      "UNIDEL",
      "University of Delta",
      "Post UTME",
      "Direct Entry",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "nysc-batch-b-stream-i-orientation-2026",
    title: "NYSC Batch B Stream I Orientation Course 2026 Begins June 10",
    category: "Education",
    date: "2026-05-23",
    excerpt: "National Youth Service Corps has announced the official timetable for the 2026 Batch B Stream I Orientation Course, beginning June 10, 2026.",
    content:
      `<h2>NYSC Batch B Stream I 2026 Official Dates</h2>
      <p>National Youth Service Corps has announced the official timetable for the 2026 Batch B Stream I Orientation Course. The orientation exercise will begin on <strong>Wednesday, 10 June 2026</strong>, and end on <strong>Tuesday, 30 June 2026</strong>.</p>
      <p>For many Nigerian graduates, the NYSC orientation camp marks the beginning of national service and the transition from campus life into a new stage of responsibility and experience.</p>

      <h3>Official Timetable Highlights</h3>
      <ul>
        <li><strong>Commencement:</strong> Wednesday, 10 June 2026</li>
        <li><strong>Registration Period:</strong> Wednesday, 10 June to Friday, 12 June 2026</li>
        <li><strong>Registration Cut-Off:</strong> Midnight, Friday, 12 June 2026</li>
        <li><strong>Swearing-In Ceremony:</strong> Friday, 12 June 2026</li>
        <li><strong>Closing Ceremony:</strong> Tuesday, 30 June 2026</li>
      </ul>
      <p>PCMs are expected to report to their assigned orientation camps within the registration window to avoid missing camp activities or facing disqualification.</p>

      <h2>Essential Preparation for Prospective Corps Members</h2>
      <p>Preparation before camp can help prospective corps members avoid stress during registration and clearance.</p>

      <h3>Documentation Requirements</h3>
      <p>The <strong>NYSC Call-Up Letter</strong> is the most critical document. PCMs should print it early and keep extra copies. Other required items include:</p>
      <ul>
        <li>Original academic certificates and photocopies</li>
        <li>Passport photographs</li>
        <li>School identity card</li>
        <li>Valid means of identification (NIN, Voter's Card, etc.)</li>
      </ul>
      <p>Foreign-trained graduates must also bring their international passport and original credentials.</p>

      <h3>What to Pack</h3>
      <p>NYSC camp life is easier with practical items. Recommended gear includes:</p>
      <ul>
        <li>White T-shirts, shorts, and sneakers</li>
        <li>Toiletries and basic medications</li>
        <li>Writing materials and a power bank</li>
        <li>Important documents stored in waterproof folders</li>
      </ul>

      <h2>Travel and Safety Tips</h2>
      <p>PCMs are encouraged to travel during the daytime. Late-night journeys pose significant security risks. If you cannot reach your destination before nightfall, seek shelter at:</p>
      <ul>
        <li>NYSC offices or Corps lodges</li>
        <li>Police or Army barracks</li>
      </ul>
      <p>Always board vehicles from recognized motor parks and avoid roadside pickups.</p>

      <h2>Special Provisions and Warnings</h2>
      <h3>Married, Pregnant, and Nursing Mothers</h3>
      <p>Affected candidates may report to camps closer to their spouses by providing supporting documents like marriage certificates and medical reports during registration.</p>

      <h3>Polytechnic Graduates</h3>
      <p>Graduates from polytechnics <strong>must</strong> present their National Diploma (ND) certificates during clearance to avoid registration issues.</p>

      <h3>Warning Against Fraud</h3>
      <p>NYSC warns against fake certificates and multiple registrations. Such attempts attract severe disciplinary actions and legal consequences. PCMs who lose their call-up letters should follow official replacement procedures immediately.</p>

      <p>Proper preparation is key to a smooth camp experience. PCMs who organize their documents early and follow official instructions are more likely to settle quickly once activities begin.</p>`,
    tags: [
      "NYSC",
      "Orientation",
      "Batch B",
      "Stream I",
      "2026",
      "Nigeria",
      "PCMs",
      "National Service",
    ],
  },
  {
    id: "david-oyedepo-foundation-scholarship-2026",
    title: "David Oyedepo Foundation Scholarship 2026 Opens for Young African Students",
    category: "Scholarship",
    date: "2026-05-23",
    excerpt: "David Oyedepo Foundation has opened applications for its 2026 Scholarship Programme for young African students seeking admission into Covenant University and Landmark University.",
    content:
      `<h2>David Oyedepo Foundation Scholarship 2026 Opens for Young African Students</h2>
      <p>David Oyedepo Foundation has opened applications for its 2026 Scholarship Programme for young African students seeking admission into Covenant University and Landmark University.</p>
      <p>The scholarship programme provides full academic fee support for selected students and forms part of the Foundation’s mission to develop future African leaders through quality university education.</p>
      <p>Applicants should note that the scholarship does not automatically grant admission into either university. Every candidate must separately apply for and secure admission through the normal university admission process.</p>

      <h2>What the David Oyedepo Foundation Scholarship Covers</h2>
      <p>The scholarship covers full academic fees for the duration of the approved course of study.</p>
      <p>According to the Foundation, the award may run for a maximum of five years, depending on the programme duration set by the university.</p>
      <p>However, the scholarship does not cover certain personal and extra expenses.</p>

      <h3>Expenses Not Covered by the Scholarship</h3>
      <p>The scholarship excludes:</p>
      <ul>
        <li>Travel expenses</li>
        <li>Feeding allowances</li>
        <li>Medical or health insurance</li>
        <li>Any non-academic university charges outside approved tuition-related fees</li>
      </ul>
      <p>Applicants are advised to understand these conditions before applying.</p>

      <h2>Eligibility Requirements for the David Oyedepo Foundation Scholarship</h2>
      <p>The scholarship is open to young Africans who meet all the stated eligibility conditions.</p>
      <p>Applicants must:</p>
      <ul>
        <li>Be citizens and permanent residents of an African country</li>
        <li>Be between 16 and 25 years old at the time of application</li>
        <li>Qualify for a Nigerian student visa</li>
        <li>Be able to read, write and communicate effectively in English</li>
        <li>Show strong academic performance in secondary school</li>
        <li>Have already started admission applications to Covenant University or Landmark University</li>
      </ul>

      <h3>Academic Requirements</h3>
      <p>For Nigerian applicants:</p>
      <ul>
        <li>A minimum JAMB score of 240 is required</li>
      </ul>
      <p>For applicants from other African countries:</p>
      <ul>
        <li>At least 80 percent average performance</li>
        <li>Or a minimum GPA of 4.0 on a 5.0 scale</li>
      </ul>

      <h2>Scholarship Depends on University Admission</h2>
      <p>The Foundation stressed that scholarship selection depends on successful admission into Covenant University or Landmark University.</p>
      <p>Applicants who fail to secure admission into either institution will not qualify for the scholarship award, even if they perform well during the scholarship selection process.</p>

      <h2>Selection Process for the Scholarship</h2>
      <p>The David Oyedepo Foundation Scholarship combines:</p>
      <ul>
        <li>Merit-based assessment</li>
        <li>Financial need evaluation</li>
      </ul>
      <p>After the application deadline, eligible applications will be reviewed by a selection panel.</p>
      <p>Shortlisted candidates will proceed to online interviews conducted through video conferencing platforms.</p>
      <p>Finalists will be required to present:</p>
      <ul>
        <li>Proof of university application</li>
        <li>Proof of citizenship</li>
        <li>Original copies of uploaded documents</li>
      </ul>

      <h2>Criteria Used for Selection</h2>
      <p>The Foundation stated that applicants will be assessed based on:</p>
      <ul>
        <li>Academic excellence</li>
        <li>Financial need</li>
        <li>Leadership qualities</li>
        <li>Community involvement</li>
        <li>Good character</li>
        <li>Commitment to contributing positively to their home communities</li>
      </ul>

      <h2>Important Application Guidelines</h2>
      <p>Interested applicants should apply through the <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoboBr-Qf7weSM3g7vp2YjjnYMI-FCyQXa4O7N-VTVy66osw/viewform">official David Oyedepo Foundation Scholarship application portal</a>.</p>
      <p>Applicants are advised to use a computer with internet access and scan all required documents properly. Avoid uploading phone-snapped documents, as such submissions may lead to disqualification.</p>

      <h2>Education and Examination Requirements</h2>
      <p>Applicants must upload their secondary school transcripts and provide details of proposed university and course of study. Note that only Covenant and Landmark Universities are accepted, and combination of results is not allowed.</p>

      <h2>Essay and Reference Requirements</h2>
      <p>Applicants are required to answer four essay questions (max 500 words each) in English. Additionally, details for an academic and a religious referee must be provided, along with their recommendation letters. Parents or guardians are not allowed to serve as referees.</p>

      <h2>Application Deadline</h2>
      <p>Applications for the 2026 David Oyedepo Foundation Scholarship Programme will close at 11:59 pm GMT+1 on <b>Friday, 19 June 2026</b>. No extension will be granted.</p>
      <p>For additional information, contact the Foundation at <a href="mailto:davidoyedepofdn@gmail.com">davidoyedepofdn@gmail.com</a>.</p>`,
    tags: [
      "David Oyedepo Foundation",
      "Scholarship",
      "Covenant University",
      "Landmark University",
      "Africa",
      "Education",
      "2026",
      "Nigeria",
    ],
  },
  {
    id: "concept-academy-national-medical-essay-competition-2026",
    title: "Concept Academy Opens 2026 National Medical Essay Competition for Nigerian Medical Students",
    category: "Education",
    date: "2026-05-22",
    excerpt: "Concept Academy has announced its 2026 National Intercollegiate Medical Essay Competition, focusing on AI and telemedicine in African patient care. Top prize is ₦1,000,000.",
    content:
      `<h2>Concept Academy Opens 2026 National Medical Essay Competition for Nigerian Medical Students</h2>
      <p>Concept Academy has announced the 2026 edition of its National Intercollegiate Medical Essay Competition for medical students across Nigeria.</p>
      <p>The competition focuses on the growing role of technology in healthcare and challenges students to examine how modern digital tools may influence patient care across Africa in the coming years.</p>
      <p>This year’s essay topic is:</p>
      <h3>“Artificial Intelligence, Telemedicine, and the Future of Patient Care in Africa”</h3>
      <p>According to the organisers, applicants are required to begin with a short abstract submission before moving to the full essay stage.</p>
      <p>Only shortlisted candidates will proceed after the abstract review phase.</p>

      <h2>Who Can Apply?</h2>
      <p>The competition is strictly open to students studying Medicine and Surgery in recognised Nigerian universities and medical colleges.</p>
      <p>Concept Academy stated that the contest is designed specifically for medical students, meaning applicants from other academic disciplines are not eligible.</p>

      <h2>Abstract Submission Guidelines</h2>
      <p>Interested participants must submit an abstract between 70 and 100 words based on the essay topic.</p>
      <p>The organisers explained that abstracts will serve as the first screening stage for the competition. Candidates whose abstracts meet the required standard will then be invited to submit full essays.</p>
      <p>Applicants are encouraged to keep their writing focused, concise and directly connected to the topic.</p>

      <h2>Cash Prizes for Winners</h2>
      <p>The competition offers substantial cash rewards for the top entries:</p>
      <ul>
        <li>First Prize — ₦1,000,000</li>
        <li>Second Prize — ₦500,000</li>
        <li>Third Prize — ₦250,000</li>
      </ul>

      <h2>How to Apply</h2>
      <p>Medical students interested in participating should submit their abstracts through the <a href="https://theconcept.academy/competition-form/">official Concept Academy competition portal</a>.</p>
      <p>Applicants are advised to:</p>
      <ul>
        <li>Stay within the 70–100 word limit</li>
        <li>Address the topic directly</li>
        <li>Avoid unnecessary details or off-topic writing</li>
      </ul>
      <p>A clear and well-structured abstract may improve the chances of being shortlisted for the next stage of the competition.</p>

      <h2>Application Deadline</h2>
      <p>All abstract submissions must be completed on or before 31 May 2026.</p>
      <p>Candidates interested in the Concept Academy National Intercollegiate Medical Essay Competition are advised to apply before the deadline to avoid missing the opportunity.</p>`,
    tags: [
      "Concept Academy",
      "Medical",
      "Essay Competition",
      "2026",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "mtn-foundation-scholarship-2026",
    title: "MTN Foundation Scholarship 2026 Opens for Nigerian Students in Public Tertiary Institutions",
    category: "Scholarship",
    date: "2026-05-22",
    excerpt: "MTN Foundation has announced the 2026 edition of its annual scholarship programme for Nigerian students in public tertiary institutions, covering Science and Technology, Blind Students, and Top 10 UTME scorers.",
    content:
      `<h2>MTN Foundation Scholarship 2026 Opens for Nigerian Students in Public Tertiary Institutions</h2>
      <p>MTN Foundation has announced the 2026 edition of its annual scholarship programme for Nigerian students in public tertiary institutions.</p>
      <p>The scholarship scheme, which started in 2010, continues to support high-performing students across universities, polytechnics and colleges of education in Nigeria.</p>
      <p>For 2026, the programme will run under three different categories, each designed for a specific group of students based on course of study, academic level and performance.</p>

      <h2>MTN Foundation Scholarship Categories</h2>
      <p>The MTN Foundation Scholarship Programme is divided into:</p>
      <ul>
        <li>Science and Technology Scholarship (STS)</li>
        <li>Scholarship for Blind Students (SBS)</li>
        <li>Top 10 UTME Scholarship</li>
      </ul>
      <p>Students are advised to carefully check the category that matches their academic qualification before applying.</p>

      <h2>MTN Science and Technology Scholarship</h2>
      <p>The Science and Technology Scholarship supports students studying science and technology-related courses in Nigerian public tertiary institutions.</p>
      <p>The scholarship is open to:</p>
      <ul>
        <li>300 Level students in universities, polytechnics and colleges of education</li>
        <li>400 Level medical students in public universities and teaching hospitals</li>
      </ul>
      <p>According to MTN Foundation, 400 students will receive ₦300,000 each under this category in 2026.</p>
      <p>Beneficiaries may continue receiving the scholarship until graduation if they maintain the required academic performance and meet other programme conditions.</p>

      <h2>MTN Scholarship for Blind Students</h2>
      <p>The Scholarship for Blind Students was introduced in 2012 to support visually impaired students in Nigerian public tertiary institutions.</p>
      <p>The category is open to:</p>
      <ul>
        <li>200 Level students</li>
        <li>300 Level students</li>
      </ul>
      <p>Eligible students may study any course in:</p>
      <ul>
        <li>Public universities</li>
        <li>Polytechnics</li>
        <li>Colleges of education</li>
      </ul>
      <p>Under this category, 100 students will receive ₦300,000 each annually.</p>
      <p>The scholarship remains renewable until graduation, provided recipients maintain the required academic standard.</p>

      <h2>MTN Top 10 UTME Scholarship</h2>
      <p>The Top 10 UTME Scholarship began in 2020.</p>
      <p>This category automatically rewards the top 10 highest-scoring UTME candidates announced by Joint Admissions and Matriculation Board.</p>
      <p>Each beneficiary receives ₦300,000 yearly from 100 Level until graduation, as long as the required grades are maintained.</p>
      <p>Unlike the other categories, this scholarship applies to:</p>
      <ul>
        <li>Any course of study</li>
        <li>Both public and private tertiary institutions</li>
      </ul>

      <h2>Eligibility Requirements for MTN Scholarships 2026</h2>
      <p>The eligibility conditions differ across categories, especially for the Science and Technology Scholarship and the Scholarship for Blind Students.</p>

      <h3>School Type Requirements</h3>
      <p>For the Science and Technology Scholarship, applicants must be students in:</p>
      <ul>
        <li>Public universities</li>
        <li>Teaching hospitals</li>
        <li>Polytechnics</li>
        <li>Colleges of education</li>
      </ul>
      <p>For the Scholarship for Blind Students, applicants must also be students in Nigerian public tertiary institutions.</p>

      <h3>Course of Study Requirements</h3>
      <p>The Science and Technology Scholarship covers:</p>
      <ul>
        <li>Science-related courses</li>
        <li>Technology-related courses</li>
        <li>Medical programmes</li>
      </ul>
      <p>The Scholarship for Blind Students accepts candidates studying any course.</p>

      <h3>Level of Study Requirements</h3>
      <p>For the Science and Technology Scholarship:</p>
      <ul>
        <li>Applicants should have completed second semester examinations in 200 Level and be moving to 300 Level</li>
        <li>Students already in 300 Level may also apply</li>
        <li>Medical students should have completed second semester 300 Level examinations and be moving to 400 Level</li>
      </ul>
      <p>For the Scholarship for Blind Students:</p>
      <ul>
        <li>Only 200 and 300 Level students are eligible</li>
        <li>Law students may apply only in 300 Level because of the programme structure</li>
      </ul>

      <h2>MTN Scholarship CGPA Requirements</h2>
      <h3>Science and Technology Scholarship CGPA</h3>
      <p>For university and college of education students:</p>
      <ul>
        <li>Minimum CGPA of 3.0 on a 4.0 scale</li>
        <li>Or 3.5 on a 5.0 scale</li>
      </ul>
      <p>For polytechnic students:</p>
      <ul>
        <li>Minimum CGPA of 3.0 in OND</li>
        <li>Must have secured admission into HND</li>
      </ul>
      <p>For Direct Entry students:</p>
      <ul>
        <li>Minimum CGPA of 3.0 in OND</li>
        <li>Must have secured admission into 300 Level in a public university</li>
      </ul>
      <p>Medical students:</p>
      <ul>
        <li>Must possess the required pass grade or equivalent academic standing</li>
      </ul>

      <h3>Scholarship for Blind Students CGPA</h3>
      <p>For universities and colleges of education:</p>
      <ul>
        <li>Minimum CGPA of 2.5</li>
      </ul>
      <p>For polytechnic students:</p>
      <ul>
        <li>Minimum CGPA of 2.0 in OND</li>
        <li>Must have gained admission into HND</li>
      </ul>

      <h2>How to Apply for MTN Scholarships 2026</h2>
      <p>Eligible students can apply through the <a href="https://apps.mtn.ng/scholarships/form">MTN Scholarships application portal</a>.</p>
      <p>Applicants are expected to:</p>
      <ul>
        <li>Choose the correct scholarship category</li>
        <li>Provide accurate academic details</li>
        <li>Confirm that they meet the level and CGPA requirements before submission</li>
      </ul>
      <p>Students seeking additional details about the programme can also check the official <a href="https://www.mtn.ng/scholarships/">MTN Scholarships information page</a> for further guidance.</p>`,
    tags: [
      "MTN",
      "Scholarship",
      "Education",
      "Science and Technology",
      "Blind Students",
      "UTME",
      "Nigeria",
      "2026",
    ],
  },
  {
    id: "nnpc-renaissance-jv-university-scholarship-2026",
    title: "NNPC-Renaissance JV University Scholarship 2026 Opens for Nigerian Undergraduates",
    category: "Scholarship",
    date: "2026-05-22",
    excerpt: "Renaissance African Energy Company Limited has announced the opening of applications for the 2026 NNPC-Renaissance JV University Scholarship Programme, designed to support academic excellence among Nigerian undergraduates.",
    content:
      `<h2>NNPC-Renaissance JV University Scholarship 2026 Opens for Nigerian Undergraduates</h2>
      <p>Renaissance African Energy Company Limited, operator of the NNPC/Renaissance/TotalEnergies/AENR Joint Venture, has announced the opening of applications for the 2026 NNPC-Renaissance JV University Scholarship Programme.</p>
      <p>The scholarship is designed to support academic excellence and educational development among Nigerian undergraduates studying in accredited universities across the country.</p>
      <p>According to the organisers, successful candidates will receive yearly financial support throughout the duration of their undergraduate studies.</p>

      <h2>Categories of the NNPC-Renaissance JV Scholarship</h2>
      <p>The scholarship programme is merit-based and divided into two award categories.</p>

      <h3>National Merit Award (NM)</h3>
      <p>The National Merit Award is open to all qualified Nigerian students regardless of state of origin.</p>

      <h3>Areas of Operation Merit Award (OM)</h3>
      <p>The Areas of Operation Merit Award is specifically for students who are indigenes of Renaissance operational communities located in:</p>
      <ul>
        <li>Bayelsa State</li>
        <li>Delta State</li>
        <li>Imo State</li>
        <li>Rivers State</li>
      </ul>
      <p>Applicants under this category must provide additional proof of community origin during application.</p>

      <h2>Eligibility Requirements</h2>
      <p>To qualify for the scholarship, applicants must:</p>
      <ul>
        <li>Be citizens of the Federal Republic of Nigeria</li>
        <li>Be full-time undergraduate students in accredited Nigerian universities</li>
        <li>Be currently in 200 Level</li>
        <li>Provide proof of admission into the 2024/2025 academic session</li>
      </ul>
      <p>The organisers also stated that candidates already benefiting from scholarships offered by oil and gas companies or related agencies are not eligible to apply.</p>

      <h2>Required Documents for Application</h2>
      <p>Applicants are expected to upload clear scanned copies of the following documents:</p>
      <ul>
        <li>Recent passport photograph with white background</li>
        <li>School identity card</li>
        <li>University admission letter or JAMB admission letter</li>
        <li>JAMB result slip</li>
        <li>2024/2025 academic transcript or 100 Level result</li>
        <li>Letter of identification from state or local government</li>
      </ul>

      <h3>Additional Requirement for Areas of Operation Applicants</h3>
      <p>Candidates applying under the Areas of Operation Merit Award must also submit:</p>
      <ul>
        <li>Community identification letter signed by the Paramount Ruler</li>
        <li>Letter endorsed by the CDC or CEC Chairman</li>
      </ul>

      <h2>How to Apply for the NNPC-Renaissance JV Scholarship</h2>
      <p>Interested and qualified students should complete their applications online through the <a href="https://candidate.scholastica.ng/schemes/NNPCRENAISSANCEJV2026">official NNPC-Renaissance JV scholarship portal</a>.</p>

      <p>The organisers stressed that:</p>
      <ul>
        <li>The application process is completely free</li>
        <li>Applicants should not pay money to anyone during the application process</li>
      </ul>

      <h2>Application Deadline</h2>
      <p>Applications for the scholarship opened on 30 April 2026 and will close on 31 May 2026.</p>
      <p>Only shortlisted candidates will be invited to participate in the computer-based test stage of the selection process.</p>`,
    tags: [
      "NNPC",
      "Renaissance",
      "Scholarship",
      "Undergraduate",
      "Nigeria",
      "2026",
    ],
  },
  {
    id: "unicross-post-utme-direct-entry-2026-2027",
    title: "UNICROSS Opens Post UTME and Direct Entry Registration for 2026/2027 Session",
    category: "Education",
    date: "2026-05-21",
    excerpt: "University of Cross River State (UNICROSS) has announced the commencement of Post UTME and Direct Entry registration for the 2026/2027 academic session, starting May 21, 2026.",
    content:
      `<h2>UNICROSS Opens Post UTME and Direct Entry Registration for 2026/2027 Session</h2>
      <p>University of Cross River State, formerly known as CRUTECH, has announced the commencement of Post UTME and Direct Entry registration for the 2026/2027 academic session.</p>
      <p>The university stated that online registration officially begins on <strong>Thursday, 21 May 2026</strong>, for candidates seeking undergraduate admission into the institution.</p>

      <h2>UNICROSS Post UTME Eligibility Requirements</h2>
      <p>Candidates who selected UNICROSS as their first-choice institution in the 2026 UTME and scored at least <strong>150</strong> are eligible to apply for the screening exercise.</p>
      <p>The university also stated that candidates who did not initially choose UNICROSS during JAMB registration may still apply after completing a change of institution through the Joint Admissions and Matriculation Board portal. Both UTME and Direct Entry candidates are eligible once the required conditions are met.</p>

      <h2>UNICROSS Screening Fee</h2>
      <p>Applicants are required to pay a non-refundable screening fee of <strong>₦2,000</strong>. Payment can be completed through:</p>
      <ul>
        <li>MasterCard, Visa, or Verve cards</li>
        <li>Bank transfer or USSD</li>
        <li>Commercial banks linked to the university portal</li>
      </ul>

      <h2>How to Apply for UNICROSS Post UTME / Direct Entry Form</h2>
      <p>Candidates are expected to complete the application process online through the official UNICROSS Post UTME portal.</p>
      <h3>Application Steps</h3>
      <ol>
        <li>Visit the UNICROSS Post UTME registration portal.</li>
        <li>Enter your JAMB registration number under the “New Candidate” section.</li>
        <li>Click on “Proceed to Purchase E-Pin” and confirm your details.</li>
        <li>Update your phone number and email address, then click “Pay Now”.</li>
        <li>Copy and save the generated <strong>E-PIN</strong>.</li>
        <li>Return to the portal and select “Already Have an E-PIN?”.</li>
        <li>Upload all required documents and fill the form carefully.</li>
        <li>Print the acknowledgement slip after successful submission.</li>
      </ol>
      <p><em>Note: Keep your E-PIN safe as it will be needed for future access.</em></p>

      <h2>Important Screening Notice</h2>
      <ul>
        <li>Only candidates with a minimum UTME score of 150 can participate.</li>
        <li>Screening will be conducted <strong>online</strong>. Candidates should NOT travel to Calabar or any campus for physical screening.</li>
        <li>Confirm the campus hosting your preferred course before completing registration.</li>
      </ul>

      <h2>UNICROSS Courses and Campuses</h2>
      <p>The university offers programmes across its Calabar, Ogoja and Okuku campuses.</p>

      <h3>Calabar Campus</h3>
      <p><strong>Faculty of Architecture:</strong> Architecture</p>
      <p><strong>Faculty of Biological Sciences:</strong> Plant Science and Biotechnology, Animal Health and Environmental Biology, Microbiology</p>
      <p><strong>Faculty of Communication and Media Studies:</strong> Journalism and Media Studies, Mass Communication, Broadcasting, Library and Information Science</p>
      <p><strong>Faculty of Education:</strong> Education and (Biology, Chemistry, Mathematics, Physics), Educational Management, Education Foundations and Administration, Business Education, Technical Education, Guidance and Counselling, Early Childhood Education, Human Kinetics and Health Education</p>
      <p><strong>Faculty of Engineering:</strong> Electrical/Electronics, Mechanical, Civil, and Wood Products Engineering</p>
      <p><strong>Faculty of Environmental Sciences:</strong> Estate Management, Visual Arts and Technology, Urban and Regional Planning</p>
      <p><strong>Faculty of Physical Sciences:</strong> Chemistry, Industrial Chemistry, Biochemistry, Mathematics, Statistics, Physics</p>
      <p><strong>Faculty of Computing:</strong> Computer Science, Information Systems, Software Engineering</p>

      <h3>Ogoja Campus</h3>
      <p><strong>Faculty of Management Sciences:</strong> Accounting, Banking and Finance, Business Administration, Economics, Entrepreneurship Studies, Peace Studies and Conflict Resolution, Sociology, Hospitality and Tourism Management, Marketing</p>

      <h3>Okuku Campus</h3>
      <p><strong>Faculty of Agriculture:</strong> Agriculture, Agricultural Economics and Extension, Agronomy, Animal Science, Fisheries, Forestry and Wildlife</p>
      <p><strong>Faculty of Basic Medical Sciences:</strong> Medical Biochemistry, Human Anatomy, Physiology</p>

      <h2>Document Upload & Help Lines</h2>
      <p>Ensure scanned copies are clear and not below 50KB. For assistance, contact the help lines: 08189351784, 09015055999, 09053310247, 09068968666, or 07071919527.</p>

      <p><strong>Final Note:</strong> Use only the official portal, upload clear documents, and print your acknowledgement slip. Careful completion will help avoid admission problems later.</p>`,
    tags: [
      "UNICROSS",
      "CRUTECH",
      "Post UTME",
      "Direct Entry",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "nsuk-pre-degree-ijmb-admission-2026-2027",
    title: "NSUK Begins Sale of Pre-Degree and IJMB Admission Forms for 2026/2027 Session",
    category: "Education",
    date: "2026-05-21",
    excerpt: "Nasarawa State University, Keffi (NSUK) has opened applications for its Pre-Degree and IJMB programmes for the 2026/2027 academic session. Sale of forms ends July 30, 2026.",
    content:
      `<h2>NSUK Begins Sale of Pre-Degree and IJMB Admission Forms for 2026/2027 Session</h2>
      <p>Nasarawa State University, Keffi has opened applications for its Pre-Degree and IJMB programmes for the 2026/2027 academic session.</p>
      <p>The School of Preliminary and Remedial Studies is inviting qualified candidates to apply for admission into the available programmes before the deadline.</p>
      <p>According to the university, candidates are expected to carefully review the admission requirements for each programme before starting the application process, since subject combinations and entry conditions differ across programmes.</p>
      <p>The sale of forms will close on <strong>30 July 2026</strong>.</p>

      <h2>NSUK IJMB Programme Requirements</h2>
      <p>The Interim Joint Matriculation Board (IJMB) programme is available to candidates with at least five O’Level credit passes.</p>
      <p>Applicants must have credits in:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Three other subjects related to their intended course of study</li>
      </ul>
      <p>Candidates may combine results from not more than two sittings.</p>
      <p>The IJMB programme lasts for one year (12 months) and prepares candidates for Direct Entry admission into 200 Level at Nasarawa State University, Keffi, and other universities across Nigeria.</p>
      <p>Candidates are advised to check the university’s official website for approved subject combinations and available undergraduate courses linked to the programme.</p>

      <h2>NSUK Preliminary Science Programme</h2>
      <p>The Preliminary Science programme is designed for candidates seeking admission into science-related degree courses.</p>
      <p>To qualify, candidates must possess at least five O’Level credits in:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Biology</li>
      </ul>
      <p>Candidates who successfully complete the programme must still sit for the Unified Tertiary Matriculation Examination (UTME), meet the required national minimum score, and satisfy the university’s cut-off mark before gaining admission into degree programmes.</p>

      <h2>NSUK One-Year Remedial French Programme</h2>
      <p>The university also offers a one-year Remedial French programme for candidates interested in building a career in French studies.</p>
      <p>Applicants under this category are expected to remedy deficiencies in their O’Level results and obtain five required credits, including:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>French</li>
      </ul>
      <p>They must also meet the required UTME cut-off mark before qualifying for admission into the 100 Level French programme.</p>

      <h2>How to Apply for NSUK Pre-Degree and IJMB Admission</h2>
      <p>Interested candidates should complete the online application through the <a href="https://prelim.nsuk.edu.ng/">NSUK preliminary studies application portal</a>.</p>
      <p>Applicants are required to pay a non-refundable application fee of <strong>₦10,000</strong>, alongside <strong>₦315 bank charges</strong> through the CBS Nasarawa State University payment platform before accessing the form.</p>
      <p>Candidates are advised to provide accurate information during registration, as errors in personal or academic details may delay processing.</p>

      <h2>NSUK Pre-Degree and IJMB Closing Date</h2>
      <p>The university stated that the sale of admission forms for the 2026/2027 academic session will officially end on <strong>30 July 2026</strong>.</p>
      <p>Candidates interested in any of the available programmes are encouraged to complete their applications before the deadline to avoid missing the opportunity.</p>`,
    tags: [
      "NSUK",
      "Pre-Degree",
      "IJMB",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "waec-gce-2026-second-series-registration",
    title: "WAEC GCE 2026 Second Series Registration Begins as CBT Exam Fee Revealed",
    category: "Education",
    date: "2026-05-21",
    excerpt: "The registration process for the 2026 WAEC GCE Second Series has officially started, with the examination set to be conducted as a Computer-Based Test (CBT).",
    content:
      `<h2>WAEC GCE 2026 Second Series Registration Begins</h2>
      <p>The registration process for the 2026 Second Series of the West African Senior School Certificate Examination (WASSCE) for Private Candidates, popularly known as WAEC GCE, has officially started.</p>
      <p>Candidates planning to sit for the examination are expected to complete their registration early to avoid late charges and possible registration issues before the deadline.</p>
      <p>WAEC has fixed the registration fee at Twenty-Seven Thousand Naira (₦27,000), while the examination itself will be conducted as a Computer-Based Test (CBT).</p>

      <h2>WAEC GCE 2026 Registration Deadline</h2>
      <p>WAEC announced two important deadlines candidates must take seriously:</p>
      <ul>
        <li>Generation of Registration PIN closes on <strong>Friday, 31 July 2026</strong></li>
        <li>Biometrics capturing and online registration will end by <strong>11:59pm on Sunday, 2 August 2026</strong></li>
      </ul>
      <p>Candidates are advised not to wait until the final days before beginning the process. WAEC also stated that registration should be completed within two weeks of first accessing the registration portal during the registration period.</p>

      <h2>WAEC GCE 2026 Registration Process</h2>
      <p>The registration process is completely online for private candidates. After purchasing the Registration PIN, candidates are expected to visit the <a href="https://registration.waecdirect.org/">WAEC GCE registration portal</a> and complete their entries. The registration includes biometric capturing, which WAEC will use for candidate verification at examination centres.</p>
      <p>Candidates should carefully review all information entered before final submission because WAEC will not accept correction requests after upload.</p>

      <h2>WAEC GCE Registration Fee and Payment Details</h2>
      <p>The official registration fee for the 2026 WAEC GCE Second Series is <strong>₦27,000</strong>. Candidates can make payment at approved banks or through accredited agents. In addition to the registration fee, a commission fee of ₦500 will be charged by banks and accredited agents.</p>
      <p>After payment, candidates will receive a Registration PIN and an Information VCD.</p>

      <h2>Approved Banks for Payment</h2>
      <p>Candidates can pay at any of the following approved banks: Access Bank Plc, Ecobank Plc, Fidelity Bank Plc, First Bank of Nigeria, First City Monument Bank Plc, GTBank, Heritage Bank, Jaiz Bank, Polaris Bank, Stanbic IBTC, Standard Chartered, Sterling Bank, Union Bank, UBA, Unity Bank, WEMA Bank, and Zenith Bank.</p>

      <h2>WAEC GCE Cashless Payment Channels</h2>
      <p>Candidates may also purchase registration tokens through approved cashless payment platforms using debit or credit cards. Approved platforms include: Bancwize Limited, Bring Africa, Broadshift Technologies Ltd, Citiserve Ltd, Xpress Payment, Paga, PalmPay, Paycom, System Specs Ltd, Interswitch, Coralpay, Etranzact, IQ Pay, Cyberspace Ltd, Fidelity Bank, Itex, Unified Payments, UBA, Capricorn Ltd, and Kudi.</p>

      <h2>Walk-In Registration for WAEC GCE 2026</h2>
      <p>Candidates who fail to register before the official closing date may still participate as Walk-in Candidates. However, WAEC requires walk-in registration to be completed at least 24 hours before the paper the candidate intends to write. The walk-in registration fee is <strong>₦45,000</strong>.</p>

      <h2>Candidates With Special Needs</h2>
      <p>Candidates with special needs are expected to register online like every other candidate. During registration, they must clearly indicate their condition (visual impairment, speech impairment, hearing difficulty, etc.) to help WAEC provide the proper examination arrangements.</p>

      <h2>WAEC GCE 2026 Examination Format</h2>
      <p>WAEC confirmed that the 2026 Second Series examination will be computer-based:</p>
      <ul>
        <li>Objective papers will be <strong>fully CBT</strong></li>
        <li>Essay and practical papers will follow a <strong>hybrid format</strong></li>
      </ul>
      <p>Questions will appear on computer screens, while candidates will write answers in provided answer booklets. WAEC will also organise an online mock examination for interested candidates.</p>

      <h2>Important Registration Guidelines</h2>
      <ul>
        <li>Registration fees are non-refundable.</li>
        <li>Passport photographs must be captured digitally (JPEG only, 275 × 314 pixels).</li>
        <li>Mobile phones and electronic gadgets are strictly prohibited in the examination hall.</li>
        <li>Candidates must attend the examination in mufti; professional uniforms are not allowed.</li>
        <li>Sitting for the examination in multiple centres will lead to cancellation of results.</li>
        <li>Examination malpractice may lead to cancellation of results and prosecution.</li>
      </ul>

      <h2>Completion of Registration</h2>
      <p>After successful registration, candidates should print their <strong>Admission Notice</strong>, which serves as identification during the examination. The Result Checker PIN will also be included on the Admission Notice. WAEC stated that the approved fingerprint scanner is the UareU DigitalPersona device.</p>

      <p>Candidates are strongly advised to provide valid phone numbers and email addresses during registration to receive updates and examination information.</p>`,
    tags: [
      "WAEC",
      "GCE",
      "WASSCE",
      "Registration",
      "CBT",
      "Nigeria",
      "Education",
      "2026",
      "Exam Guide",
    ],
  },
  {
    id: "uniosun-secures-full-nuc-accreditation-2025",
    title: "UNIOSUN Secures Full Accreditation for All 29 Programmes Presented to NUC",
    category: "Education",
    date: "2026-05-21",
    excerpt: "Osun State University (UNIOSUN) has achieved a 100 per cent success rate in its latest accreditation exercise, with all 29 programmes receiving full approval from the NUC.",
    content:
      `<h2>UNIOSUN Records 100 Percent Accreditation Success</h2>
      <p>Osun State University, popularly known as UNIOSUN, has achieved a 100 per cent success rate in its latest accreditation exercise conducted by the National Universities Commission (NUC).</p>
      <p>The university announced that all 29 academic programmes presented during the October/November 2025 accreditation exercise received full accreditation status from the commission.</p>
      <p>The development was disclosed in a statement issued by the university’s Public Relations Officer, Ademola Adesoji.</p>
      <p>According to the statement, the approval was communicated through an official letter signed by Abraham Chundusu on behalf of the Executive Secretary of the National Universities Commission.</p>

      <h2>Academic Areas Covered by the Accreditation Exercise</h2>
      <p>The accredited programmes span major academic fields within the university, including:</p>
      <ul>
        <li>Administration and Management</li>
        <li>Allied Health Sciences</li>
        <li>Environmental Sciences</li>
        <li>Arts and Humanities</li>
        <li>Computing</li>
        <li>Education</li>
        <li>Sciences</li>
        <li>Social Sciences</li>
      </ul>
      <p>The accreditation process examined several key areas such as:</p>
      <ul>
        <li>Quality of teaching</li>
        <li>Academic staffing</li>
        <li>Research output</li>
        <li>Learning facilities</li>
        <li>Infrastructure</li>
        <li>Programme stability</li>
      </ul>

      <h2>Vice-Chancellor Commends Staff and Stakeholders</h2>
      <p>The Vice-Chancellor of the university, Odunayo Clement Adebooye, expressed appreciation to the National Universities Commission for the confidence shown in the institution.</p>
      <p>He described the achievement as the outcome of consistent planning, quality assurance efforts and sustained investment in academic development.</p>
      <p>Professor Adebooye also credited the success to the collective contributions of staff members, students, the Governing Council, alumni, and university partners.</p>
      <p>He further acknowledged the support of the Osun State Government under Governor Ademola Adeleke.</p>

      <h2>Factors Behind the Accreditation Success</h2>
      <p>According to the university administration, the positive result was supported by steady improvements in teaching quality, research activities, digital development, infrastructure expansion, and academic stability.</p>
      <p>The institution noted that it has continued to record growth in programme expansion, staff development, research visibility and public reputation since Professor Adebooye assumed office.</p>

      <h2>Why the Accreditation Matters</h2>
      <p>The latest accreditation success is expected to strengthen the value and recognition of certificates issued by UNIOSUN.</p>
      <p>For prospective students, current undergraduates and alumni, full accreditation across all presented programmes provides additional confidence in the university’s academic standards and long-term credibility.</p>
      <p>The result also reinforces UNIOSUN’s position as one of the universities attracting attention for stable academic operations and quality higher education in Nigeria.</p>`,
    tags: [
      "UNIOSUN",
      "Osun State University",
      "NUC",
      "Accreditation",
      "Education",
      "Nigeria",
      "2025",
      "Admissions",
    ],
  },
  {
    id: "auchi-polytechnic-post-utme-admission-2026-2027",
    title: "Auchi Polytechnic Opens 2026/2027 Post UTME Application for ND Admission",
    category: "Education",
    date: "2026-05-20",
    excerpt: "Auchi Polytechnic has officially commenced its Post UTME application for candidates seeking admission into full-time National Diploma (ND) programmes for the 2026/2027 academic session.",
    content:
      `<h2>Auchi Polytechnic Opens 2026/2027 Post UTME Application for ND Admission</h2>
      <p>Auchi Polytechnic has officially commenced its Post UTME application for candidates seeking admission into full-time National Diploma (ND) programmes for the 2026/2027 academic session.</p>
      <p>The admission exercise is open to qualified UTME candidates who meet the institution’s requirements and selected Auchi Polytechnic as their first-choice institution in the 2026 UTME.</p>

      <h2>Eligibility for Auchi Polytechnic Post UTME</h2>
      <p>To be eligible for admission screening, candidates must:</p>
      <ul>
        <li>Have sat for the 2026 Unified Tertiary Matriculation Examination (UTME)</li>
        <li>Select Auchi Polytechnic as their <strong>first choice institution</strong></li>
        <li>Meet the required JAMB cut-off mark as specified by the polytechnic</li>
        <li>Possess at least <strong>five (5) O’Level credit passes at one sitting</strong>, or <strong>six (6) credits at not more than two sittings</strong></li>
        <li>Credits must include <strong>English Language and Mathematics</strong></li>
      </ul>
      <p>Candidates who initially selected Auchi Polytechnic as second choice must change to first choice before applying.</p>

      <h2>Auchi Polytechnic Post UTME Screening Fee</h2>
      <p>All applicants are required to pay a <strong>₦2,000 CBT screening fee</strong>.</p>
      <p>Payment must be made using the Remita Retrieval Reference (RRR) generated from the official Auchi Polytechnic portal.</p>

      <h2>How to Apply for Auchi Polytechnic Post UTME</h2>
      <p>Applicants are required to complete their registration online through the <a href="https://www.auchipoly-online.com/jamb_register1.php">official admission portal</a>.</p>
      <p>The application process involves generating a Remita invoice, making payment, and completing the screening form.</p>

      <h2>Step-by-Step Application Process</h2>
      <ol>
        <li>Visit the official <a href="https://www.auchipoly-online.com/jamb_register1.php">Auchi Polytechnic Post UTME portal</a></li>
        <li>Fill in the required personal and academic details</li>
        <li>Generate a Remita Retrieval Reference (RRR) invoice</li>
        <li>Make payment online or through any approved bank channel</li>
        <li>Return to the polytechnic admission portal</li>
        <li>Complete the online application form</li>
        <li>Upload all required academic credentials</li>
        <li>Complete the eligibility clearance form where applicable</li>
      </ol>
      <p>Applicants are advised to ensure all information is correct before final submission.</p>

      <h2>Important Information for Candidates</h2>
      <p>Auchi Polytechnic has emphasized that only candidates who follow the correct application process will be considered for admission.</p>
      <p>Applicants are expected to:</p>
      <ul>
        <li>Confirm their JAMB choice status before applying</li>
        <li>Pay the ₦2,000 screening fee through the approved Remita platform</li>
        <li>Upload all required documents</li>
        <li>Complete the application form within the official portal</li>
      </ul>

      <h2>Final Note</h2>
      <p>The 2026/2027 Post UTME admission process at Auchi Polytechnic is now open for eligible candidates.</p>
      <p>Applicants are advised to complete their registration early, ensure accurate information is provided, and follow all instructions on the official admission portal.</p>`,
    tags: [
      "Auchi Polytechnic",
      "Post UTME",
      "Admission",
      "ND",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "ndu-post-utme-screening-registration-2026-2027",
    title: "Niger Delta University Opens 2026/2027 Post UTME Screening Registration",
    category: "Education",
    date: "2026-05-20",
    excerpt: "Niger Delta University (NDU) has announced the commencement of its Post UTME and Direct Entry screening application for the 2026/2027 academic session.",
    content:
      `<h2>Niger Delta University Opens 2026/2027 Post UTME Screening Registration</h2>
      <p>Niger Delta University has announced the commencement of its Post UTME and Direct Entry screening application for the 2026/2027 academic session.</p>
      <p>The screening exercise is for qualified UTME and Direct Entry candidates seeking admission into various undergraduate programmes at the university.</p>
      <p>According to the announcement, only eligible candidates who meet the requirements will be allowed to participate in the admission screening process.</p>

      <h2>NDU Post UTME Eligibility Requirements</h2>
      <p>Candidates are eligible to apply if they:</p>
      <ul>
        <li>Selected Niger Delta University as <strong>first choice</strong> in the 2026 UTME</li>
        <li>Scored <strong>150 and above</strong> in the UTME</li>
        <li>Are at least <strong>16 years old by 30 September 2026</strong></li>
      </ul>
      <p>Applicants are advised to confirm their eligibility before starting the registration process.</p>

      <h2>NDU Screening Form Application Date</h2>
      <p>The sale of the Post UTME screening form will begin on <strong>Monday, 1 June 2026</strong>.</p>
      <p>Candidates are expected to complete and submit their application within the official registration period.</p>

      <h2>How to Apply for NDU Post UTME Screening Form</h2>
      <p>Applicants are required to complete their registration through the official NDU admission portal. The application process involves providing JAMB details, personal information, O’Level results, and making online payment.</p>

      <h3>Step-by-Step Application Process</h3>
      <ol>
        <li>Visit the official <a href="https://nduportal.com/">NDU admission portal</a></li>
        <li>Enter your JAMB registration number and UTME score</li>
        <li>Fill in personal details including GSM number and email address</li>
        <li>Pay the ₦2,000 screening fee via the online payment platform</li>
        <li>Enter your O’Level results and grades</li>
        <li>Preview the application form carefully</li>
        <li>Make corrections where necessary</li>
        <li>Submit the completed form</li>
        <li>Print out the application slip</li>
      </ol>
      <p>Applicants are advised to ensure all information is accurate before submission, as incorrect details may affect admission processing.</p>

      <h2>Direct Entry Candidates</h2>
      <p>Direct Entry applicants who selected Niger Delta University as their first choice must also complete the screening form. All Direct Entry applications must be submitted on or before <strong>31 July 2026</strong>.</p>

      <h2>Change of Institution Option</h2>
      <p>Candidates who did not initially select NDU as their first choice can change their institution through JAMB. After updating their choice to NDU, they can proceed to apply for the Post UTME screening before the deadline.</p>

      <h2>NDU Screening Deadline and Examination Date</h2>
      <ul>
        <li>Application Deadline: <strong>31 July 2026</strong></li>
        <li>Screening Examination: <strong>3 August – 7 August 2026</strong></li>
      </ul>
      <p>Candidates are expected to strictly adhere to these dates.</p>

      <h2>Important Instructions for Applicants</h2>
      <p>The university has issued the following guidelines:</p>
      <ul>
        <li>Candidates must upload their O’Level results on the <a href="https://myschoolgist.com/news/pload-olevel-result-jamb-portal/">JAMB CAPS portal</a></li>
        <li>Failure to upload O’Level results on CAPS will lead to disqualification</li>
        <li>Applicants are responsible for the accuracy of all information submitted</li>
        <li>Correct GSM number and email address must be provided for communication</li>
        <li>Candidates must print and keep their application slip for the screening exercise</li>
      </ul>

      <h2>Final Note</h2>
      <p>The 2026/2027 NDU Post UTME screening registration is now open for eligible candidates. Applicants are encouraged to complete their registration early, ensure accurate details, and follow all admission instructions carefully before the deadline.</p>`,
    tags: [
      "NDU",
      "Niger Delta University",
      "Post UTME",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
      "Direct Entry",
    ],
  },
  {
    id: "ds-adegbenro-ict-polytechnic-hnd-admission-2026-2027",
    title: "D.S. Adegbenro ICT Polytechnic Opens 2026/2027 HND Admission Form",
    category: "Education",
    date: "2026-05-20",
    excerpt: "D.S. Adegbenro ICT Polytechnic has announced the commencement of admission into its Higher National Diploma (HND) programmes for the 2026/2027 academic session.",
    content:
      `<h2>D.S. Adegbenro ICT Polytechnic Opens 2026/2027 HND Admission Form</h2>
      <p>D.S. Adegbenro ICT Polytechnic has announced the commencement of admission into its Higher National Diploma (HND) programmes for the 2026/2027 academic session.</p>
      <p>Qualified candidates who meet the admission requirements can now apply through the institution’s official admission portal.</p>
      <p>The admission exercise is open to applicants seeking Higher National Diploma programmes in relevant fields offered by the polytechnic.</p>

      <h2>D.S. Adegbenro ICT Poly HND Admission Requirements</h2>
      <p>Candidates applying for HND admission must satisfy the following conditions:</p>
      <ul>
        <li>Possess a National Diploma (ND) with at least a Lower Credit in a relevant discipline</li>
        <li>Have five relevant O’Level credit passes in WAEC, GCE, NECO, or NABTEB obtained in not more than two sittings</li>
        <li>English Language and Mathematics are compulsory subjects</li>
        <li>Present evidence of one-year post-ND Industrial Training (IT) experience</li>
        <li>Candidates with a Pass grade in ND must have at least two years of industrial experience after graduation</li>
      </ul>
      <p>The polytechnic also noted that professional certifications such as:</p>
      <ul>
        <li>ICAN</li>
        <li>ACA</li>
        <li>ANAN</li>
      </ul>
      <p>may provide applicants with an added advantage during the admission process.</p>
      <p>Applicants are also expected to have completed both their National Diploma programme and the mandatory Industrial Training requirement before applying.</p>

      <h2>Application Fee and Portal Access Fee</h2>
      <p>The HND application process is completed online.</p>
      <p>Applicants are required to pay:</p>
      <ul>
        <li>Screening Fee — ₦2,000</li>
        <li>Portal Access Fee — ₦5,000</li>
      </ul>
      <p>Payments should be made online using either a Mastercard or VISA ATM card.</p>
      <p>Candidates are advised to print their payment receipts after successful payment for record purposes.</p>

      <h2>How to Apply for D.S. Adegbenro ICT Polytechnic HND Admission</h2>
      <p>Interested candidates should complete their application through the <a href="https://v4.dsadegbenropoly.edu.ng/admission/apply/application">official admission portal of the institution</a>.</p>
      <p>The online application process includes:</p>
      <ul>
        <li>Profile creation</li>
        <li>Email verification</li>
        <li>Fee payment</li>
        <li>Form completion</li>
        <li>O’Level result verification</li>
        <li>Printing of application documents</li>
      </ul>
      <p>Applicants are advised to provide accurate details during registration because all login and activation information will be sent to the supplied email address.</p>

      <h2>Step-by-Step Registration Guide</h2>
      <p>Candidates should carefully follow these application steps:</p>
      <ol>
        <li>Click on “Apply Now” on the admission portal</li>
        <li>Fill out the account profile creation form</li>
        <li>Provide a valid email address and phone number</li>
        <li>Check the inbox or spam folder for the activation link and login details</li>
        <li>Activate the account using the link sent through email</li>
        <li>Log in using the provided login credentials</li>
        <li>Pay the required application fees</li>
        <li>Complete the application form with correct information</li>
        <li>Review all entries carefully before submission</li>
        <li>Submit the form</li>
        <li>Print the application form and screening slip</li>
      </ol>
      <p>Applicants are encouraged to keep all printed documents safely for future reference.</p>

      <h2>O’Level Result Verification</h2>
      <p>Applicants are also required to obtain the appropriate Result Checker scratch card for WAEC, NECO, or NABTEB to verify O’Level results through the online verification system.</p>

      <h2>Final Note</h2>
      <p>The 2026/2027 HND admission process at D.S. Adegbenro ICT Polytechnic is currently open for qualified applicants. Candidates are advised to review the requirements carefully and print all necessary documents after submission.</p>`,
    tags: [
      "D.S. Adegbenro",
      "ICT Polytechnic",
      "HND",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "azman-university-undergraduate-admission-2026-2027",
    title: "Azman University Opens 2026/2027 Undergraduate Admission for UTME and Direct Entry Candidates",
    category: "Education",
    date: "2026-05-20",
    excerpt: "Azman University has officially opened its undergraduate admission application for the 2026/2027 academic session for both UTME and Direct Entry candidates.",
    content:
      `<h2>Azman University Opens 2026/2027 Undergraduate Admission for UTME and Direct Entry Candidates</h2>
      <p>Azman University has officially opened its undergraduate admission application for the 2026/2027 academic session.</p>
      <p>The admission form is available for both UTME and Direct Entry candidates who meet the university’s entry requirements.</p>
      <p>The institution stated that it welcomes qualified applicants regardless of religion, ethnicity, or gender.</p>

      <h2>General Admission Requirements</h2>
      <p>To be eligible for admission into Azman University, candidates must meet the following conditions:</p>
      <ul>
        <li>Minimum of five (5) O’Level credit passes, including English Language and Mathematics</li>
        <li>Credits must be obtained in not more than two sittings (SSCE, WAEC, NECO, or equivalent)</li>
        <li>Candidates must be at least 16 years old</li>
        <li>Minimum JAMB score of 150</li>
      </ul>
      <p>Applicants are advised to ensure they meet all requirements before beginning the application process.</p>

      <h2>UTME Admission (100 Level Entry)</h2>
      <p>Candidates applying through UTME for 100 Level admission must:</p>
      <ul>
        <li>Sit for the JAMB UTME examination</li>
        <li>Score at least 150</li>
        <li>Possess five relevant O’Level credit passes, including English Language and Mathematics</li>
      </ul>
      <p>Eligible candidates will be considered for admission into various undergraduate programmes.</p>

      <h2>Direct Entry Admission (200 Level Entry)</h2>
      <p>Candidates applying for Direct Entry admission into 200 Level must meet the following requirements:</p>
      <ul>
        <li>Five O’Level credit passes, including English Language and Mathematics</li>
        <li>One of the following qualifications:
          <ul>
            <li>Two A’Level passes in relevant subjects</li>
            <li>National Diploma (ND) with credit</li>
            <li>Recognised first degree</li>
          </ul>
        </li>
      </ul>
      <p>These qualifications allow candidates to gain admission directly into the second year of study.</p>

      <h2>Important Notice on Transfer Students</h2>
      <p>The university has stated that it will not accept transfer students until it has completed its first two academic years.</p>
      <p>Prospective applicants seeking transfer admission are advised to take note of this policy before making enquiries.</p>

      <h2>How to Apply for Azman University Admission</h2>
      <p>The application process is fully online.</p>
      <p>Candidates should follow these steps:</p>
      <ol>
        <li>Visit the official <a href="https://apply.azmanuniversity.edu.ng/auth/register.php">Azman University admission portal</a></li>
        <li>Enter accurate personal details</li>
        <li>Click on “Sign Up”</li>
        <li>Log in using the email and password created during registration</li>
        <li>Complete all sections of the application form</li>
        <li>Review and submit the application</li>
      </ol>
      <p>After submission, candidates should wait for further instructions from the university regarding the next stage of the admission process.</p>

      <h2>Final Note</h2>
      <p>The 2026/2027 Post UTME and Direct Entry admission process at Azman University is now open.</p>
      <p>Applicants are advised to carefully review all UTME, Direct Entry, and age requirements before completing the online application form.</p>`,
    tags: [
      "Azman University",
      "Admission",
      "Undergraduate",
      "2026/2027",
      "UTME",
      "Direct Entry",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "mountain-top-university-post-utme-admission-form-2026-2027",
    title: "Mountain Top University Opens 2026/2027 Post UTME Admission Form",
    category: "Education",
    date: "2026-05-20",
    excerpt: "Mountain Top University (MTU) has announced the release of its Post UTME application form for the 2026/2027 academic session. Discover available courses and special tuition rebates.",
    content:
      `<h2>Mountain Top University Opens 2026/2027 Post UTME Admission Form</h2>
      <p>Mountain Top University has announced the release of its Post UTME application form for the 2026/2027 academic session.</p>
      <p>The admission exercise is open to candidates seeking undergraduate degree programmes across the university’s approved colleges.</p>
      <p>Applicants are advised to review the available courses carefully before applying, as each programme is assigned to a specific college within the institution.</p>

      <h2>Colleges and Available Undergraduate Courses at MTU</h2>
      <h3>College of Humanities, Management & Social Sciences</h3>
      <ul>
        <li>Accounting</li>
        <li>Business Administration</li>
        <li>Economics</li>
        <li>English</li>
        <li>Finance</li>
        <li>Fine and Applied Arts</li>
        <li>International Relations</li>
        <li>Industrial Relations and Personnel Management</li>
        <li>Mass Communication</li>
        <li>Music</li>
        <li>Public Administration</li>
        <li>Religious Studies</li>
        <li>Securities and Investment</li>
      </ul>

      <h3>College of Basic & Applied Sciences</h3>
      <ul>
        <li>Biology</li>
        <li>Biochemistry</li>
        <li>Chemistry</li>
        <li>Biotechnology</li>
        <li>Computer Science</li>
        <li>Cyber Security</li>
        <li>Data Science</li>
        <li>Environmental Management and Toxicology</li>
        <li>Food Science & Technology</li>
        <li>Geology</li>
        <li>Geophysics</li>
        <li>Industrial Chemistry</li>
        <li>Information and Communication Technology</li>
        <li>Information Systems</li>
        <li>Mathematics</li>
        <li>Microbiology</li>
        <li>Physics</li>
        <li>Physics with Electronics</li>
        <li>Software Engineering</li>
      </ul>

      <h3>College of Allied Health Sciences</h3>
      <ul>
        <li>Nursing Science</li>
        <li>Medical Laboratory Science</li>
        <li>Biomedical Technology</li>
        <li>Community Health</li>
        <li>Public Health</li>
        <li>Nutrition and Dietetics</li>
      </ul>

      <h2>MTU Study Features</h2>
      <p>The university highlighted several academic and campus facilities designed to support student learning and development, including well-equipped laboratories, air-conditioned classrooms, scholarship opportunities, a hybrid library system, and a Wi-Fi enabled campus with a morally guided learning environment.</p>

      <h2>Courses With 50% Tuition Rebate</h2>
      <p>Mountain Top University also offers a 50% tuition rebate for selected programmes. The affected courses include:</p>
      <ul>
        <li>Physics</li>
        <li>Biology</li>
        <li>Religious Studies</li>
        <li>Mathematics</li>
        <li>Chemistry</li>
      </ul>

      <h2>General Admission Requirements</h2>
      <p>Candidates applying for 100 Level admission must meet the following conditions:</p>
      <ul>
        <li>Minimum of five (5) O’Level credit passes in WAEC, NECO, NABTEB, or equivalent in not more than two sittings.</li>
        <li>Subjects must be relevant to the chosen course of study.</li>
        <li>Must have sat for the UTME examination and met the approved cut-off mark.</li>
      </ul>

      <h2>How to Apply for MTU Post UTME</h2>
      <p>Interested candidates are required to complete their application through the <a href="https://applications.mtu.edu.ng/fresh-application">official MTU admission portal</a>.</p>
      <p>Applicants should fill in accurate personal and academic details, upload all required documents, and submit the completed application form online.</p>

      <h2>Contact for Enquiries</h2>
      <p>For further information or assistance, applicants can contact the university via:</p>
      <p>
        📞 0806 096 9250<br/>
        📞 0803 780 7841<br/>
        📞 0803 950 5596
      </p>

      <h2>Final Note</h2>
      <p>The 2026/2027 Post UTME application process at Mountain Top University is now open. Applicants are encouraged to choose their programmes carefully, meet all requirements, and complete their registration within the application period.</p>`,
    tags: ["MTU", "Mountain Top University", "Post UTME", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "ds-adegbenro-ict-polytechnic-post-utme-2026-2027",
    title: "D.S. Adegbenro ICT Polytechnic Opens 2026/2027 Post UTME Admission Form",
    category: "Education",
    date: "2026-05-20",
    excerpt: "D.S. Adegbenro ICT Polytechnic has commenced the sale of its Post UTME application form for the 2026/2027 academic session for candidates seeking admission into full-time National Diploma (ND) programmes.",
    content:
      `<h2>D.S. Adegbenro ICT Polytechnic Opens 2026/2027 Post UTME Admission Form</h2>
      <p>D.S. Adegbenro ICT Polytechnic has commenced the sale of its Post UTME application form for the 2026/2027 academic session.</p>
      <p>The admission exercise is for candidates seeking admission into full-time National Diploma (ND) programmes offered by the polytechnic.</p>
      <p>According to the institution, candidates who scored 100 and above in the 2026 Unified Tertiary Matriculation Examination (UTME) are eligible to apply.</p>
      <p>Applicants who scored below 100 may consider the institution’s part-time ND programmes, which offer weekday and weekend study options.</p>

      <h2>Available ND Full-Time Courses</h2>
      <p>The polytechnic listed the following National Diploma full-time programmes for the 2026/2027 admission session:</p>
      <ul>
        <li>Accountancy</li>
        <li>Architectural Technology</li>
        <li>Banking and Finance</li>
        <li>Building Technology</li>
        <li>Business Administration</li>
        <li>Computer Engineering</li>
        <li>Computer Science</li>
        <li>Electrical and Electronics Engineering</li>
        <li>Estate Management and Valuation</li>
        <li>Library and Information Science</li>
        <li>Marketing</li>
        <li>Mass Communication</li>
        <li>Office Technology Management</li>
        <li>Public Administration</li>
        <li>Science Laboratory Technology</li>
        <li>Statistics</li>
        <li>Surveying and Geo-Informatics</li>
      </ul>
      <p>Candidates are advised to choose courses that align with their UTME subject combination and academic interests.</p>

      <h2>Eligibility for D.S. Adegbenro ICT Poly Post UTME</h2>
      <p>To qualify for the screening exercise, applicants must:</p>
      <ul>
        <li>Score at least 100 in the 2026 UTME</li>
        <li>Apply for admission into a full-time ND programme at the polytechnic</li>
      </ul>
      <p>Candidates should ensure all information supplied during registration is accurate.</p>

      <h2>How to Apply for D.S. Adegbenro ICT Polytechnic Post UTME</h2>
      <p>Applicants are expected to complete the application process through the <a href="https://v4.dsadegbenropoly.edu.ng/admission/apply/application">official admission portal of the institution</a>.</p>
      <p>The portal handles:</p>
      <ul>
        <li>Account creation</li>
        <li>Email verification</li>
        <li>Fee payment</li>
        <li>Admission form completion</li>
        <li>Printing of screening documents</li>
      </ul>
      <p>Candidates must use a valid and accessible email address because login and verification details will be sent through email.</p>

      <h2>Step-by-Step Application Guide</h2>
      <p>Applicants should carefully follow the instructions below when completing the form:</p>
      <ol>
        <li>Read the application instructions on the portal</li>
        <li>Tick the checkbox to confirm the instructions have been read</li>
        <li>Click the “Continue Admission” button</li>
        <li>Select the preferred study programme</li>
        <li>Click “Apply” beside the chosen programme</li>
        <li>Fill out the account creation form correctly</li>
        <li>Provide a valid email address</li>
        <li>Click “Create Account” to continue</li>
        <li>Check the registered email address for the validation link</li>
        <li>Activate the account using the email link</li>
        <li>Log in with the username and password sent to the email</li>
        <li>Pay the application fee</li>
        <li>Complete the admission form carefully</li>
        <li>Print the completed application form</li>
        <li>Print the screening slip for reference</li>
      </ol>
      <p>Applicants are encouraged to review all information carefully before final submission.</p>

      <h2>Information for Returning Applicants</h2>
      <p>Candidates who already created an account previously should not open a new account.</p>
      <p>Returning applicants should click “Return to Login Page”, sign in using their existing username and password, access the admission module within their student profile, and continue or complete their application.</p>

      <h2>Important Account Security Notice</h2>
      <p>The institution advised applicants to improve account security after registration. Candidates are encouraged to change their default password through the Edit Profile section and enable Two-Factor Authentication (2FA) for extra security.</p>

      <h2>Final Note for Applicants</h2>
      <p>The 2026/2027 D.S. Adegbenro ICT Polytechnic Post UTME form is available for candidates who scored 100 and above in UTME. Applicants should complete their registration through the official portal, select their preferred courses carefully, and print all important documents after submitting the application form.</p>`,
    tags: ["D.S. Adegbenro", "ICT Polytechnic", "Post UTME", "Admission", "ND", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "adeleke-university-postgraduate-admission-2026-2027",
    title: "Adeleke University Opens 2026/2027 Postgraduate Admission Application",
    category: "Education",
    date: "2026-05-20",
    excerpt: "Adeleke University has announced the commencement of postgraduate admission for the 2026/2027 academic session through its College of Postgraduate Studies.",
    content:
      `<h2>Adeleke University Opens 2026/2027 Postgraduate Admission Application</h2>
      <p>Adeleke University has announced the commencement of postgraduate admission for the 2026/2027 academic session through its College of Postgraduate Studies.</p>
      <p>The admission exercise covers academic and professional postgraduate programmes across several faculties, including arts, sciences, engineering, law, business, social sciences, and medical sciences.</p>
      <p>The university offers Postgraduate Diploma (PGD), Master’s, MBA, M.P.H., M.Eng., LLM, MLIS, and Ph.D. programmes for qualified candidates.</p>
      <p>Applicants are advised to carefully review the available courses and admission requirements before starting the application process.</p>

      <h2>Adeleke University Postgraduate Courses</h2>
      <h3>Faculty of Arts</h3>
      <p>Available programmes include:</p>
      <ul>
        <li>M.A./Ph.D. Religious Studies</li>
        <li>M.A./Ph.D. History</li>
        <li>M.A./Ph.D. English (Language)</li>
        <li>M.A./Ph.D. English (Literature)</li>
        <li>M.A./Ph.D. International Studies</li>
      </ul>

      <h3>Faculty of Science</h3>
      <ul>
        <li>PGD/M.Sc./Ph.D. Biochemistry</li>
        <li>PGD/M.Sc./Ph.D. Microbiology</li>
        <li>PGD/M.Sc./Ph.D. Computer Science</li>
      </ul>

      <h3>Faculty of Business and Social Sciences</h3>
      <ul>
        <li>PGD/M.Sc./Ph.D. Economics</li>
        <li>PGD/M.Sc./Ph.D. Mass Communication</li>
        <li>PGD/MPA Public Administration</li>
        <li>M.Sc./Ph.D. Public Administration</li>
        <li>M.Sc./Ph.D. Political Science</li>
        <li>PGD/M.Sc./Ph.D. Accounting</li>
        <li>MLIS/Ph.D. Library and Information Science</li>
        <li>M.Sc./MBA/Ph.D. Business Administration</li>
      </ul>

      <h3>Faculty of Law</h3>
      <ul>
        <li>PGD/LLM/Ph.D. Law</li>
      </ul>

      <h3>Faculty of Basic Medical Sciences</h3>
      <ul>
        <li>PGD/M.P.H./Ph.D. Public Health</li>
        <li>PGD/M.Sc. Anatomy</li>
        <li>PGD/M.P.H./M.Sc./Ph.D. Physiology</li>
        <li>PGD/M.P.H./M.Sc./Ph.D. Medical Laboratory Science</li>
        <li>PGD/M.P.H./M.Sc./Ph.D. Nursing Science</li>
      </ul>

      <h3>Faculty of Engineering</h3>
      <ul>
        <li>PGD/M.Eng./Ph.D. Agricultural Engineering</li>
        <li>PGD/M.Eng./Ph.D. Civil Engineering</li>
        <li>PGD/M.Eng./Ph.D. Electrical and Electronic Engineering</li>
        <li>PGD/M.Eng./Ph.D. Mechanical Engineering</li>
      </ul>

      <h2>Adeleke University Postgraduate School Fees</h2>
      <p>The university explained that postgraduate fees are structured as a composite package. According to the institution, the fee covers:</p>
      <ul>
        <li>Tuition</li>
        <li>Accommodation</li>
        <li>Feeding</li>
      </ul>
      <p>The university also allows students to pay through a four-instalment payment plan.</p>

      <h2>Duration of Programmes</h2>
      <ul>
        <li>Postgraduate Diploma (PGD) — 2 semesters</li>
        <li>Master’s Degree — 3 semesters</li>
        <li>Ph.D. Programme — 6 semesters</li>
      </ul>

      <h2>How to Apply for Adeleke University Postgraduate Admission</h2>
      <p>Interested candidates are expected to complete their applications through the <a href="https://umis.adelekeuniversity.edu.ng/adeleke/a_application.jsp">official Adeleke University postgraduate portal</a>.</p>
      <p>Applicants should fill out the application form carefully, upload all required documents, and complete payment before submission. The university noted that incomplete or unpaid applications will not be processed.</p>

      <h2>Transcript Submission Requirement</h2>
      <p>Adeleke University stated that all academic transcripts must be sent directly to:</p>
      <p><strong>The Secretary, College of Postgraduate Studies, Adeleke University, Ede</strong></p>
      <p>The institution clarified that transcripts submitted by hand will not be accepted.</p>

      <h2>Special Requirement for Ph.D. Applicants</h2>
      <p>Candidates applying for Ph.D. programmes must submit a research proposal and at least one confidential referee report from a former lecturer. At least one referee must be an academic referee; friends or family members cannot serve as referees.</p>

      <h2>Important Admission Notes</h2>
      <p>The university warned that admission offers may lapse if candidates fail to accept them within the period stated in the admission letter. Applicants are also expected to present original copies of all credentials during registration.</p>

      <h2>Fraud Warning to Applicants</h2>
      <p>The university advised candidates not to pay money into private or personal accounts. All payments should be made only into official Adeleke University accounts.</p>

      <h2>Contact Information for Enquiries</h2>
      <p>Applicants who need assistance can contact the College of Postgraduate Studies through:</p>
      <p>📞 09069631925</p>
      <p>📧 <a href="mailto:cpgs.admissions@adelekeuniversity.edu.ng">cpgs.admissions@adelekeuniversity.edu.ng</a></p>`,
    tags: ["Adeleke University", "Postgraduate", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "adeleke-university-post-utme-direct-entry-admission-2026-2027",
    title: "Adeleke University Opens 2026/2027 Post UTME and Direct Entry Admission Forms",
    category: "Education",
    date: "2026-05-20",
    excerpt: "Adeleke University has commenced the sale of its Post UTME and Direct Entry admission forms for the 2026/2027 academic session, inviting qualified candidates to apply for undergraduate programmes.",
    content:
      `<h2>Adeleke University Opens 2026/2027 Post UTME and Direct Entry Admission Forms</h2>
      <p>Adeleke University has commenced the sale of its Post UTME and Direct Entry admission forms for the 2026/2027 academic session.</p>
      <p>The university is inviting qualified candidates to apply for admission into its undergraduate programmes across several faculties and professional fields.</p>
      <p>Although Adeleke University is a Christian-owned institution, the university stated that applicants from all religious and cultural backgrounds are welcome to apply.</p>
      <p>The institution received its operational licence from the National Universities Commission in 2011 as a private university in Nigeria.</p>
      <p>According to the university, the campus operates a fully residential system and provides a learning environment equipped with modern classrooms, laboratories, wireless internet access, and a digital library.</p>

      <h2>Adeleke University Undergraduate Courses</h2>

      <h3>Faculty of Arts</h3>
      <p>Available courses include:</p>
      <ul>
        <li>English Studies</li>
        <li>History and International Studies</li>
        <li>Religious Studies</li>
        <li>Theatre Arts</li>
      </ul>

      <h2>Faculty of Business and Social Sciences</h2>
      <p>Programmes offered include:</p>
      <ul>
        <li>Accounting</li>
        <li>Business Administration</li>
        <li>Economics</li>
        <li>Mass Communication</li>
        <li>Library and Information Science</li>
        <li>Political Science</li>
        <li>Public Administration</li>
        <li>Office and Information Management</li>
        <li>Finance</li>
      </ul>

      <h2>Faculty of Basic Medical Sciences</h2>
      <p>Courses available are:</p>
      <ul>
        <li>Anatomy</li>
        <li>Medical Laboratory Science</li>
        <li>Nursing</li>
        <li>Physiology</li>
        <li>Public Health</li>
        <li>Health Information Management</li>
      </ul>

      <h2>Faculty of Law</h2>
      <ul>
        <li>LL.B. Hons. Law</li>
      </ul>

      <h2>Faculty of Science</h2>
      <p>Available programmes include:</p>
      <ul>
        <li>Biological Science</li>
        <li>Biochemistry</li>
        <li>Cyber Security</li>
        <li>Chemistry</li>
        <li>Computer Science</li>
        <li>Biotechnology</li>
        <li>Information System</li>
        <li>Information Technology</li>
        <li>Microbiology</li>
        <li>Mathematical Science</li>
        <li>Physics</li>
        <li>Statistics</li>
        <li>Software Engineering</li>
        <li>Food Science and Technology (5 years)</li>
      </ul>

      <h2>Faculty of Engineering</h2>
      <p>Programmes offered include:</p>
      <ul>
        <li>Agricultural and Biosystems Engineering</li>
        <li>Civil Engineering</li>
        <li>Computer Engineering</li>
        <li>Chemical Engineering</li>
        <li>Electrical and Electronics Engineering</li>
        <li>Mechanical Engineering</li>
      </ul>

      <h2>College of Medicine</h2>
      <ul>
        <li>Bachelor of Medicine and Surgery (MBBS)</li>
      </ul>

      <h2>Faculty of Pharmacy</h2>
      <ul>
        <li>Doctor of Pharmacy (Pharm.D)</li>
      </ul>

      <h2>Adeleke University Admission Requirements</h2>
      <p>Candidates applying for undergraduate admission must meet the following conditions:</p>
      <ul>
        <li>Applicants must be at least 16 years old by 31 August 2026</li>
        <li>Candidates seeking 100 Level admission must possess at least five O’Level credit passes, including English Language and Mathematics</li>
        <li>Results must be obtained in not more than two sittings in SSCE, GCE O’Level, or NECO examinations</li>
      </ul>
      <p>The university also stated that applicants for:</p>
      <ul>
        <li>MBBS</li>
        <li>Pharm.D</li>
      </ul>
      <p>must obtain all required O’Level credits in one sitting.</p>
      <p>In addition, candidates must possess an acceptable score in the 2026 Unified Tertiary Matriculation Examination conducted by the Joint Admissions and Matriculation Board.</p>

      <h2>Adeleke University Post UTME Examination</h2>
      <p>The university announced that a Post UTME screening examination will be conducted for candidates applying into selected professional programmes.</p>
      <p>The affected courses include:</p>
      <ul>
        <li>Law</li>
        <li>Medical Laboratory Science</li>
        <li>Nursing Science</li>
        <li>Bachelor of Medicine and Surgery (MBBS)</li>
        <li>Doctor of Pharmacy (Pharm.D)</li>
      </ul>
      <p>Candidates applying for these programmes should prepare for the screening exercise.</p>

      <h2>School Fees and Payment Plan</h2>
      <p>Adeleke University explained that its school fees operate under a composite payment structure.</p>
      <p>The fee package covers:</p>
      <ul>
        <li>Tuition</li>
        <li>Accommodation</li>
        <li>Feeding</li>
      </ul>
      <p>The university also allows students to pay fees in four instalments.</p>

      <h2>How to Apply for Adeleke University Post UTME and Direct Entry Form</h2>
      <p>Interested candidates should complete their application through the official <a href="https://umis.adelekeuniversity.edu.ng/adeleke/a_application.jsp">Adeleke University admission portal</a>.</p>
      <p>Applicants are advised to:</p>
      <ul>
        <li>Fill out the application form carefully</li>
        <li>Provide correct personal and academic details</li>
        <li>Submit the form online after completion</li>
      </ul>

      <h2>Contact for Admission Enquiries</h2>
      <p>Applicants who need assistance can contact the university through:</p>
      <p>📞 09069631925</p>
      <p>📧 <a href="mailto:admissions@adelekeuniversity.edu.ng">admissions@adelekeuniversity.edu.ng</a></p>`,
    tags: ["Adeleke University", "Admission", "Post UTME", "Direct Entry", "Undergraduate", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "ds-adegbenro-ict-polytechnic-nd-part-time-admission-2026-2027",
    title: "D.S. Adegbenro ICT Polytechnic Opens 2026/2027 ND Part-Time Admission",
    category: "Education",
    date: "2026-05-20",
    excerpt: "D.S. Adegbenro ICT Polytechnic has announced the commencement of admission into its part-time evening and weekend National Diploma (ND) programmes for the 2026/2027 academic session.",
    content:
      `<h2>D.S. Adegbenro ICT Polytechnic Opens 2026/2027 ND Part-Time Admission</h2>
      <p>D.S. Adegbenro ICT Polytechnic has announced the commencement of admission into its part-time evening and weekend National Diploma (ND) programmes for the 2026/2027 academic session.</p>
      <p>The admission opportunity is designed for qualified candidates who wish to combine their studies with work, business, family responsibilities, or other personal commitments.</p>
      <p>The institution offers flexible learning options through evening and weekend programmes under its National Diploma curriculum.</p>

      <h2>Available ND Part-Time Programmes</h2>
      <p>Candidates can apply for admission into the following programmes:</p>
      <ul>
        <li>Accountancy</li>
        <li>Architectural Technology</li>
        <li>Banking and Finance</li>
        <li>Building Technology</li>
        <li>Business Administration</li>
        <li>Computer Engineering</li>
        <li>Computer Science</li>
        <li>Electrical and Electronics Engineering</li>
        <li>Estate Management and Valuation</li>
        <li>Library and Information Science</li>
        <li>Marketing</li>
        <li>Mass Communication</li>
        <li>Office Technology Management</li>
        <li>Public Administration</li>
        <li>Science Laboratory Technology</li>
        <li>Statistics</li>
        <li>Surveying and Geo-Informatics</li>
      </ul>
      <p>Applicants are advised to select programmes that match their academic qualifications and career interests.</p>

      <h2>Admission Requirements</h2>
      <p>The polytechnic stated that applicants must meet the approved entry requirements before applying.</p>
      <p>Candidates are expected to have either:</p>
      <ul>
        <li>A minimum of four O’Level credit passes in one sitting, including English Language and Mathematics, or</li>
        <li>Five O’Level credits obtained in not more than two sittings, including English Language, Mathematics, and three other relevant subjects</li>
      </ul>
      <p>The institution emphasized that credit passes in English Language and Mathematics are compulsory for all applicants.</p>
      <p>The notice also indicated that candidates should have completed their National Diploma and the mandatory one-year Industrial Training (IT) programme.</p>

      <h2>Application Fee and Portal Access Fee</h2>
      <p>Applicants are required to pay the following fees during the application process:</p>
      <ul>
        <li>Screening/Application Fee — ₦2,000</li>
        <li>Portal Access Fee — ₦5,000</li>
      </ul>
      <p>Payments should be made online using a Mastercard or VISA ATM card.</p>
      <p>Candidates are advised to print their payment receipts after successful transactions.</p>

      <h2>How to Apply for D.S. Adegbenro ICT Polytechnic ND Part-Time Admission</h2>
      <p>Interested applicants should complete their registration through the <a href="https://v4.dsadegbenropoly.edu.ng/admission/apply/application">official admission portal of the polytechnic</a>.</p>
      <p>The portal handles:</p>
      <ul>
        <li>Account creation</li>
        <li>Profile activation</li>
        <li>Fee payment</li>
        <li>O’Level verification</li>
        <li>Application submission</li>
        <li>Printing of admission documents</li>
      </ul>

      <h2>Step-by-Step Registration Process</h2>
      <p>Candidates should carefully follow the application instructions below:</p>
      <ol>
        <li>Click on “Apply Now” on the admission portal</li>
        <li>Complete the account profile creation form</li>
        <li>Provide a valid email address and active phone number</li>
        <li>Check email inbox or spam folder for activation details</li>
        <li>Activate the account using the email link</li>
        <li>Log in to continue the application</li>
        <li>Pay the required fees online</li>
        <li>Fill out the application form correctly</li>
        <li>Review all details before submission</li>
        <li>Submit the completed application</li>
        <li>Print the application form and screening slip</li>
      </ol>

      <h2>O’Level Result Verification</h2>
      <p>The institution also directed applicants to obtain the correct scratch card for online O’Level result verification during the application process for WAEC, NECO, or NABTEB.</p>

      <h2>Final Note for Applicants</h2>
      <p>The ND part-time programme at D.S. Adegbenro ICT Polytechnic provides flexible study options through evening and weekend classes. Candidates are encouraged to apply only through the official admission portal and ensure all documents are printed after submission.</p>`,
    tags: ["D.S. Adegbenro", "ICT Polytechnic", "ND", "Part-Time", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "ebsu-postgraduate-admission-2026-2027",
    title: "EBSU Opens 2026/2027 Postgraduate Admission Application",
    category: "Education",
    date: "2026-05-20",
    excerpt: "Ebonyi State University (EBSU) has announced the commencement of applications for its postgraduate programmes for the 2026/2027 academic session. Learn about requirements, fees, and the application process.",
    content:
      `<h2>EBSU Opens 2026/2027 Postgraduate Admission Application</h2>
      <p>Ebonyi State University has announced the commencement of applications for admission into its postgraduate programmes for the 2026/2027 academic session.</p>
      <p>Qualified candidates can now apply through the university’s official postgraduate admission portal.</p>
      <p>Applicants are advised to review the available postgraduate courses before starting the application, as each programme must align with the candidate’s academic background.</p>

      <h2>Available Postgraduate Programmes</h2>
      <p>The postgraduate courses for the 2026/2027 academic session are listed on the official EBSU postgraduate courses page.</p>
      <p>Candidates are expected to select programmes carefully to match their qualifications and field of study.</p>

      <h2>How to Apply for EBSU Postgraduate Admission</h2>
      <p>Applicants are required to complete their registration through the official <a href="https://portal.ebsu.edu.ng/PG/Applications/PGApplicationLogin.aspx">Ebonyi State University postgraduate application portal</a>.</p>
      <p>The application process involves providing personal details, selecting the academic session, making payment, uploading documents, and submitting referee information.</p>

      <h2>Step-by-Step Application Process</h2>
      <p>Candidates should follow these steps:</p>
      <ol>
        <li>Visit the EBSU postgraduate application portal</li>
        <li>Enter a valid phone number</li>
        <li>Select the 2026/2027 academic session</li>
        <li>Click “Proceed”</li>
        <li>Fill in the initial application form</li>
        <li>Generate an invoice</li>
        <li>Pay the application fee of ₦10,050.00</li>
        <li>Return to the portal after payment</li>
        <li>Complete the full application form</li>
        <li>Request reference letters from three referees</li>
        <li>Upload all required original documents</li>
        <li>Submit the completed application</li>
      </ol>
      <p>Applicants are advised to ensure all information entered is accurate to avoid delays in processing.</p>

      <h2>Referee Requirements</h2>
      <p>Candidates are required to provide reference letters from <strong>three referees</strong>.</p>
      <ul>
        <li>Two referees must be academic staff familiar with the candidate’s academic performance</li>
        <li>The third referee may also be academic or professional, depending on the applicant’s background</li>
      </ul>

      <h2>Transcript Submission Requirement</h2>
      <p>Applicants must request their former institutions to send official academic transcripts directly to:</p>
      <p>📧 <a href="mailto:spgs@ebsu.edu.ng">spgs@ebsu.edu.ng</a></p>
      <p>The university will only consider transcripts submitted directly to the official email address before the application deadline.</p>

      <h2>Closing Date for EBSU Postgraduate Admission</h2>
      <p>The deadline for submission of applications is <strong>30 June 2026</strong>.</p>
      <p>Candidates are encouraged to complete their applications early and ensure that referee letters and transcripts are submitted before the closing date.</p>

      <h2>Final Note</h2>
      <p>The 2026/2027 postgraduate admission exercise at Ebonyi State University is now open.</p>
      <p>Applicants should carefully follow all instructions, complete their application on time, and ensure all supporting documents are properly submitted.</p>`,
    tags: ["EBSU", "Ebonyi State University", "Postgraduate", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "ahns-scholarship-phase-2-2026",
    title: "AHNS Scholarship Opens Phase 2 of 2026 Student Support Programme",
    category: "Scholarship",
    date: "2026-05-19",
    excerpt: "The AHNS Scholarship Programme has announced the opening of Phase 2 of its 2026 scholarship support cycle for Nigerian students, offering tuition assistance to deserving students regardless of their institution.",
    content:
      `<h2>AHNS Scholarship Opens Phase 2 of 2026 Student Support Programme</h2>
      <p>The AHNS Scholarship Programme has announced the opening of Phase 2 of its 2026 scholarship support cycle for Nigerian students.</p>
      <p>The initiative, which operates under the theme <em>“Supporting Students for a Brighter Future,”</em> is aimed at helping students who are struggling financially to continue their education.</p>
      <p>According to the organisers, the scholarship programme is designed to provide tuition assistance to deserving students across Nigeria, regardless of their institution, course of study, or academic level.</p>

      <h2>AHNS Scholarship Eligibility</h2>
      <p>The scholarship is open to Nigerian students who can demonstrate genuine financial need.</p>
      <p>Unlike many scholarship programmes that focus on selected courses or institutions, the AHNS Scholarship allows students from different academic backgrounds to apply.</p>
      <p>This means applicants from universities, polytechnics, colleges of education, and other recognised institutions may be considered for support.</p>

      <h2>AHNS Scholarship Benefits</h2>
      <p>Successful applicants will receive tuition support based on their level of financial need and the availability of funds.</p>
      <p>The organisers explained that support may cover:</p>
      <ul>
        <li>Full tuition payment</li>
        <li>Partial tuition payment</li>
      </ul>
      <p>Shortlisted candidates will also be required to submit their official school tuition invoice to enable direct payment processing.</p>

      <h2>How to Apply for AHNS Scholarship 2026</h2>
      <p>Interested students are expected to complete their application through the <a href="https://ahnsscholarship.com/">official AHNS Scholarship application portal</a>.</p>
      <p>The portal also contains additional information about the scholarship programme and application requirements.</p>
      <p>Applicants are advised to:</p>
      <ul>
        <li>Enter accurate personal and academic details</li>
        <li>Submit their applications early</li>
        <li>Ensure all required information is properly completed</li>
      </ul>

      <h2>AHNS Scholarship Application Deadline</h2>
      <p>The organisers have not announced an official closing date for Phase 2 applications.</p>
      <p>However, interested students are encouraged to apply as early as possible to improve their chances of consideration before the programme reaches capacity.</p>`,
    tags: [
      "AHNS",
      "Scholarship",
      "Nigeria",
      "Education",
      "2026",
      "Tuition Support",
    ],
  },
  {
    id: "ai-revolutionizing-personal-finance-2026",
    title: "How AI Is Revolutionizing Personal Finance Management in 2026",
    category: "Technology",
    date: "2026-05-19",
    excerpt: "In 2026, Artificial Intelligence (AI) is no longer a futuristic concept but a fundamental force reshaping how individuals manage their money, making personal finance more accessible, efficient, and intelligent.",
    content:
      `<h2>How AI Is Revolutionizing Personal Finance Management in 2026</h2>
      <p>In 2026, Artificial Intelligence (AI) is no longer a futuristic concept but a fundamental force reshaping how individuals manage their money. From automating mundane tasks to providing hyper-personalized financial advice, AI-powered tools are making personal finance more accessible, efficient, and intelligent than ever before. This revolution is empowering users to achieve their financial goals with unprecedented clarity and control.</p>

      <h3>Automated Budgeting and Expense Tracking</h3>
      <p>Gone are the days of manually categorizing every transaction. AI algorithms now seamlessly integrate with bank accounts, credit cards, and investment platforms to automatically track and categorize spending. Beyond simple categorization, these systems learn spending habits, predict future expenses, and even suggest optimal budget adjustments in real-time. For instance, an AI might flag an unusual spending pattern, identify subscription services you no longer use, or recommend shifting funds to a savings goal based on your recent income.</p>

      <h3>Personalized Investment Advice</h3>
      <p>Robo-advisors, powered by sophisticated AI, have moved beyond basic portfolio rebalancing. In 2026, they offer highly personalized investment strategies tailored to individual risk tolerance, financial goals, and even ethical preferences. These AI platforms analyze vast amounts of market data, economic indicators, and news sentiment to identify opportunities and mitigate risks, often outperforming human-managed portfolios at a fraction of the cost. They can dynamically adjust portfolios in response to market shifts or changes in a user's life circumstances, such as a new job or a major purchase.</p>

      <h3>Enhanced Fraud Detection and Security</h3>
      <p>AI's ability to detect anomalies is a game-changer for financial security. By continuously monitoring transaction patterns and user behavior, AI systems can identify and flag suspicious activities with remarkable accuracy, often before the user even notices. This proactive approach helps prevent fraud, protects assets, and provides an added layer of security that traditional methods simply cannot match. Machine learning models adapt to new fraud tactics, making them increasingly resilient against cyber threats.</p>

      <h3>Optimized Debt Management</h3>
      <p>For many, debt is a significant financial burden. AI is stepping in to help. Advanced algorithms analyze various debts (credit cards, loans, mortgages), interest rates, and repayment terms to recommend the most efficient strategies for debt reduction. Whether it's suggesting a debt snowball, avalanche method, or identifying opportunities for refinancing, AI provides actionable plans to minimize interest payments and accelerate freedom from debt. Some platforms even negotiate with creditors on behalf of users.</p>

      <h3>Proactive Financial Planning and Goal Setting</h3>
      <p>AI is transforming long-term financial planning from a static annual review into a dynamic, ongoing process. Users can set complex financial goals—like buying a home, funding retirement, or saving for a child's education—and AI models will simulate various scenarios, adjust plans based on market performance, and provide proactive recommendations. These systems can even integrate with other aspects of a user's life, such as career progression or health changes, to offer holistic financial guidance.</p>

      <h3>The Benefits for Users</h3>
      <ul>
        <li><strong>Accessibility:</strong> Sophisticated financial tools are now available to a broader audience, not just the wealthy.</li>
        <li><strong>Efficiency:</strong> Automation frees up time and reduces the mental load of managing finances.</li>
        <li><strong>Personalization:</strong> Advice and strategies are uniquely tailored to individual needs and goals.</li>
        <li><strong>Empowerment:</strong> Users gain greater control and understanding of their financial health.</li>
        <li><strong>Accuracy:</strong> Data-driven insights reduce human error and emotional biases in financial decisions.</li>
      </ul>

      <h3>Challenges and Considerations</h3>
      <p>While the benefits are immense, challenges remain. Data privacy and security are paramount, requiring robust encryption and ethical AI development. The potential for algorithmic bias, though constantly being addressed, also necessitates transparency and oversight. Furthermore, financial literacy remains crucial, as AI tools are most effective when users understand the underlying principles and can critically evaluate recommendations.</p>

      <h3>Conclusion</h3>
      <p>In 2026, AI is not just assisting with personal finance; it's fundamentally redefining it. By offering intelligent automation, personalized insights, and enhanced security, AI is making financial management more intuitive, powerful, and ultimately, more human-centric. As these technologies continue to evolve, they promise an even brighter future where financial well-being is within reach for everyone.</p>`,
    tags: ["AI", "Personal Finance", "Fintech", "Technology", "2026", "Financial Management"],
  },
  {
    id: "business-case-for-upskilling-2026",
    title: "The Business Case for Upskilling: Why Companies Must Invest in Employee Education Today",
    category: "Business",
    date: "2026-05-19",
    excerpt: "In a rapidly evolving market, companies face a critical choice: invest in upskilling their workforce or watch talent migrate to competitors. Organizations prioritizing continuous learning outperform peers by significant margins.",
    content:
      `<h2>The Business Case for Upskilling</h2>
      <p>In a rapidly evolving market, companies face a critical choice: invest in upskilling their workforce or watch talent migrate to competitors. The data is clear—organizations prioritizing continuous learning outperform peers by significant margins. Yet many businesses still treat education as a cost center rather than a strategic investment. This needs to change.</p>

      <h2>The Talent Crisis and Its Root Cause</h2>
      <p><strong>The Skills Gap Is Widening</strong></p>
      <p>According to recent industry surveys, 67% of business leaders report a significant skills gap in their workforce. Technology evolves faster than education systems can adapt, leaving workers unprepared for roles that didn't exist five years ago.</p>
      <p>Meanwhile, top talent is increasingly selective about employers:</p>
      <ul>
        <li><strong>58% of professionals</strong> would leave a job if there were no learning opportunities</li>
        <li><strong>76% of millennials and Gen Z</strong> consider professional development when choosing employers</li>
        <li><strong>Companies with strong learning cultures</strong> retain 37% more employees</li>
      </ul>
      <p>The math is simple: upskilling is cheaper than hiring and rehiring.</p>

      <h2>Business Benefits That Impact Your Bottom Line</h2>
      <h3>1. Increased Productivity and Performance</h3>
      <p>Employees with recent training perform 25% better in their roles. They:</p>
      <ul>
        <li>Make fewer costly errors</li>
        <li>Adopt new tools and processes faster</li>
        <li>Require less supervision</li>
        <li>Contribute fresh perspectives to problem-solving</li>
      </ul>
      <h3>2. Reduced Turnover Costs</h3>
      <p>Replacing an employee costs 50-200% of their annual salary (recruiting, hiring, training replacements). In contrast, a robust upskilling program costs a fraction of that and keeps institutional knowledge in-house.</p>
      <h3>3. Competitive Advantage</h3>
      <p>Companies that adapt quickly win in competitive markets. An educated workforce capable of learning new skills faster than competitors becomes your greatest strategic asset.</p>
      <h3>4. Innovation and Culture</h3>
      <p>When employees see investment in their growth, engagement increases. Engaged teams:</p>
      <ul>
        <li>Generate better ideas</li>
        <li>Solve problems more creatively</li>
        <li>Build stronger internal collaboration</li>
        <li>Attract higher-quality candidates</li>
      </ul>

      <h2>Practical Implementation Strategies</h2>
      <h3>Start Small, Scale Strategically</h3>
      <ul>
        <li><strong>Identify critical skills gaps</strong> through skills assessments and role analysis</li>
        <li><strong>Partner with educational providers</strong> (online platforms, universities, industry certifications)</li>
        <li><strong>Allocate 2-5% of payroll</strong> to learning initiatives</li>
        <li><strong>Measure ROI</strong> through performance metrics and retention rates</li>
      </ul>
      <h3>Create a Learning Culture</h3>
      <ul>
        <li>Dedicate time: Allow 4-8 hours monthly for learning during work hours</li>
        <li>Lead by example: Executives should participate in upskilling initiatives</li>
        <li>Recognize achievement: Celebrate and reward completed certifications</li>
        <li>Connect to strategy: Link learning to career progression and business goals</li>
      </ul>

      <h2>Real-World Impact</h2>
      <p><strong>Case Study: Tech Company Transformation</strong></p>
      <p>A mid-sized software company implemented a 6-month upskilling program for 200 employees in cloud technologies. Results:</p>
      <ul>
        <li>Project delivery time reduced by 30%</li>
        <li>Employee satisfaction scores increased 42%</li>
        <li>Voluntary turnover dropped from 18% to 8% annually</li>
        <li>Estimated annual savings: $2.1M in reduced turnover alone</li>
      </ul>

      <h2>Common Objections—And Why They Don't Hold Up</h2>
      <table class="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2 text-left">Objection</th>
            <th class="border border-gray-300 p-2 text-left">Reality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2">\"We can't afford it\"</td>
            <td class="border border-gray-300 p-2">You can't afford not to—the cost of turnover far exceeds training budgets</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">\"Employees will leave after training\"</td>
            <td class="border border-gray-300 p-2">Employees without training leave anyway. Trained employees stay longer and perform better</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">\"Our industry changes too fast to train\"</td>
            <td class="border border-gray-300 p-2">Exactly why continuous learning is essential, not optional</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">\"It's HR's job, not mine\"</td>
            <td class="border border-gray-300 p-2">Learning ROI is everyone's responsibility—especially leadership</td>
          </tr>
        </tbody>
      </table>

      <h2>The Future of Work Demands Learning Organizations</h2>
      <p>The companies winning in 2026 and beyond are those that treat continuous upskilling as central to strategy, not peripheral to HR. AI, automation, and market disruption mean the skills your team needs next year don't exist today.</p>

      <h2>Action Items for Leaders</h2>
      <ol>
        <li><strong>Audit your current workforce</strong> against future role requirements</li>
        <li><strong>Benchmark against competitors</strong> in learning investment</li>
        <li><strong>Build a 12-month upskilling roadmap</strong> aligned with business strategy</li>
        <li><strong>Allocate budget and accountability</strong> to department leaders</li>
        <li><strong>Measure progress quarterly</strong> against retention, performance, and innovation metrics</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Upskilling isn't a nice-to-have—it's a business imperative. The companies that recognize this and act decisively will attract better talent, improve performance, reduce costs, and stay competitive through inevitable market shifts.</p>
      <p>The question isn't \"Can we afford to upskill?\" It's \"Can we afford not to?\"</p>`,
    tags: ["Business", "Upskilling", "Education", "Employee Development", "Leadership", "2026"],
  },
  {
    id: "uniabuja-ijmb-admission-form-2026-2027",
    title: "UNIABUJA Opens IJMB Admission Form for 2026/2027 Academic Session",
    category: "Education",
    date: "2026-05-16",
    excerpt: "The University of Abuja (UNIABUJA) has started the sale of its Interim Joint Matriculation Board (IJMB) admission form for the 2026/2027 academic session. Learn about requirements, fees, and how to apply.",
    content:
      `<h2>UNIABUJA IJMB Admission for 2026/2027 Academic Session</h2>
      <p>The University of Abuja, popularly known as UNIABUJA, has started the sale of its Interim Joint Matriculation Board (IJMB) admission form for the 2026/2027 academic session.</p>
      <p>The programme runs for one academic session and offers candidates an alternative route to gain Direct Entry admission into UNIABUJA and other Nigerian universities that accept IJMB qualifications.</p>
      <p>Interested applicants are expected to complete their registration before the application deadline.</p>

      <h2>Faculties Available for UNIABUJA IJMB Admission</h2>
      <p>Candidates applying for the IJMB programme can seek admission into several faculties across the university. The available faculties include:</p>
      <ul>
        <li>Agriculture</li>
        <li>Arts</li>
        <li>Engineering</li>
        <li>Environmental Sciences</li>
        <li>Health Sciences</li>
        <li>Law</li>
        <li>Management Sciences</li>
        <li>Pharmaceutical Sciences</li>
        <li>Sciences</li>
        <li>Social Sciences</li>
        <li>Veterinary Medicine</li>
      </ul>
      <p>Applicants are advised to select faculties that align with their O’Level subject combinations and intended degree programmes.</p>

      <h2>UNIABUJA IJMB Entry Requirements</h2>
      <p>To qualify for admission, candidates must possess at least five credit passes in relevant O’Level subjects. The required subjects must include:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Three other relevant subjects related to the chosen course</li>
      </ul>
      <p>Applicants should carefully confirm their subject combinations before starting the online application process.</p>

      <h2>UNIABUJA IJMB Application Fees</h2>
      <p>The university stated the following fees for the application process:</p>
      <ul>
        <li><strong>Application Fee:</strong> ₦25,000</li>
        <li><strong>Acceptance Fee:</strong> ₦30,000</li>
      </ul>
      <p>Candidates should ensure they complete payment through the approved payment channel during registration.</p>

      <h2>How to Apply for UNIABUJA IJMB Admission Form</h2>
      <p>Applicants should complete their registration through the official UNIABUJA portal by following these steps:</p>
      <ol>
        <li>Visit the UNIABUJA application portal.</li>
        <li>Click on “Start Application.”</li>
        <li>Select “Interim Joint Matriculation Board.”</li>
        <li>Enter required details including surname, first name, other names, email address, and phone number.</li>
        <li>Click “Next.”</li>
        <li>On the payment preview page, click “Generate RRR.”</li>
        <li>Click “Make Payment” to continue to the Remita platform.</li>
        <li>Pay using a MasterCard or Visa ATM card.</li>
        <li>After payment, check the portal for the application number.</li>
        <li>Applicants will also receive the application number through SMS.</li>
        <li>Return to “Main Login.”</li>
        <li>Enter the application number and surname to continue the application.</li>
        <li>Complete and submit the form.</li>
      </ol>
      <p>Candidates are advised to print or save all payment receipts and application evidence after submission.</p>

      <h2>Important Rules Applicants Should Note</h2>
      <p>UNIABUJA advised applicants to use active email addresses and phone numbers during registration. The university will communicate important updates through SMS and email, so candidates should avoid using inaccessible contact details.</p>
      <p>The university also noted that:</p>
      <ul>
        <li>Candidates who fail IJMB can reapply</li>
        <li>Fees paid will not be refunded if a student withdraws or gets withdrawn after registration</li>
      </ul>

      <h2>UNIABUJA IJMB Application Deadline</h2>
      <p>The deadline for the 2026/2027 UNIABUJA IJMB admission application is <strong>30 June 2026</strong>. Interested candidates are encouraged to complete their applications early before the portal closes.</p>`,
    tags: [
      "UNIABUJA",
      "IJMB",
      "Admission",
      "Nigeria",
      "Education",
      "2026",
    ],
  },
  {
    id: "neco-2026-ssce-internal-registration-deadline",
    title: "NECO Announces 2026 SSCE Internal Registration Deadline for Schools",
    category: "Education",
    date: "2026-05-16",
    excerpt: "The National Examinations Council (NECO) has released the official registration schedule for the 2026 Senior School Certificate Examination (SSCE) Internal, outlining deadlines for normal and late registration.",
    content:
      `<h2>NECO Announces 2026 SSCE Internal Registration Deadline</h2>
      <p>The National Examinations Council has released the official registration schedule for the 2026 Senior School Certificate Examination (SSCE) Internal.</p>
      <p>The announcement, directed at the general public and school administrators, outlines the deadlines for normal registration, late registration, and final portal closure for the 2026 examination exercise.</p>
      <p>According to the Council, the registration timetable was issued through an internal memo from NECO’s Registration Department.</p>
      <p>Schools and examination officers are advised to pay close attention to the schedule, as the registration portal will close immediately after the stated deadline.</p>

      <h2>Normal Registration Deadline for 2026 NECO SSCE Internal</h2>
      <p>NECO announced that normal registration for the 2026 SSCE Internal examination will end on Monday, 25 May 2026.</p>
      <p>School administrators are expected to complete all standard candidate registrations before the deadline to avoid additional charges or registration issues.</p>

      <h2>Late Registration Period</h2>
      <p>The Council also approved a short late registration window for schools that may not complete their entries during the normal registration period.</p>
      <p>Late registration will run from:</p>
      <ul>
        <li>Tuesday, 26 May 2026</li>
        <li>To Friday, 29 May 2026</li>
      </ul>
      <p>Schools are encouraged to use this period only for pending registrations, as the Council has made it clear that the portal will not remain open beyond the stated timeframe.</p>

      <h2>Final Closure of NECO Registration Portal</h2>
      <p>NECO stated that the registration website for the 2026 SSCE Internal examination will officially close at exactly 11:59 pm on Friday, 29 May 2026.</p>
      <p>After this deadline, schools will no longer be able to access the portal for candidate registration or modifications connected to the 2026 examination exercise.</p>

      <h2>NECO Urges Schools to Register Candidates Early</h2>
      <p>The Council’s Director, Dr Charles E. Udoh, advised schools and stakeholders to speed up the registration process for their candidates.</p>
      <p>According to the notice, NECO does not plan to extend the registration period beyond 29 May 2026.</p>
      <p>School administrators are therefore encouraged to:</p>
      <ul>
        <li>Review all candidate lists carefully</li>
        <li>Complete pending registrations early</li>
        <li>Avoid last-minute portal activity</li>
        <li>Ensure all candidate details are correctly entered before submission</li>
      </ul>
      <p>Schools that fail to meet the deadline may lose the opportunity to register candidates for the 2026 NECO SSCE Internal examination.</p>`,
    tags: [
      "NECO",
      "SSCE",
      "Registration",
      "Deadline",
      "Education",
      "Nigeria",
      "2026",
    ],
  },
  {
    id: "lasued-2026-2027-indigeneship-verification-exercise",
    title: "LASUED Opens 2026/2027 Indigeneship Verification Exercise for Lagos State Candidates",
    category: "Education",
    date: "2026-05-16",
    excerpt: "The Lagos State University of Education (LASUED) has announced the commencement of its Independent Indigeneship Verification Exercise for candidates of Lagos State origin for the 2026/2027 admission session.",
    content:
      `<h2>LASUED Indigeneship Verification Exercise for 2026/2027</h2>
      <p>The Lagos State University of Education has announced the commencement of its Independent Indigeneship Verification Exercise for the 2026/2027 admission session.</p>
      <p>The exercise is specifically for candidates of Lagos State origin who selected LASUED as their first-choice institution during the 2026 Unified Tertiary Matriculation Examination (UTME) and scored at least 185.</p>
      <p>According to the university, only candidates who successfully complete the verification process will be considered for admission under the indigeneship category.</p>

      <h2>LASUED Indigeneship Verification Registration Date</h2>
      <p>Online registration for the verification exercise will begin on <strong>Monday, 18 May 2026</strong>. The registration portal will remain open until <strong>Sunday, 14 June 2026</strong>.</p>
      <p>Eligible candidates are advised to complete their registration within the approved period to avoid disqualification from the exercise.</p>

      <h2>LASUED Verification Interview Dates</h2>
      <p>The verification interview exercise will run for four weeks, starting from <strong>Monday, 1 June 2026</strong>, and ending on <strong>Thursday, 25 June 2026</strong>.</p>
      <p>Candidates are expected to attend the interview according to the official schedule released by the university at the <strong>Senator Oluremi Tinubu Hall</strong> within the university campus.</p>

      <h2>LASUED Verification Interview Schedule</h2>
      <h3>First Week</h3>
      <ul>
        <li>Monday, 1 June 2026</li>
        <li>Tuesday, 2 June 2026</li>
        <li>Wednesday, 3 June 2026</li>
        <li>Thursday, 4 June 2026</li>
      </ul>
      <h3>Second Week</h3>
      <ul>
        <li>Monday, 8 June 2026</li>
        <li>Tuesday, 9 June 2026</li>
        <li>Wednesday, 10 June 2026</li>
        <li>Thursday, 11 June 2026</li>
      </ul>
      <h3>Third Week</h3>
      <ul>
        <li>Monday, 15 June 2026</li>
        <li>Tuesday, 16 June 2026</li>
        <li>Wednesday, 17 June 2026</li>
        <li>Thursday, 18 June 2026</li>
      </ul>
      <h3>Fourth Week</h3>
      <ul>
        <li>Monday, 22 June 2026</li>
        <li>Tuesday, 23 June 2026</li>
        <li>Wednesday, 24 June 2026</li>
        <li>Thursday, 25 June 2026</li>
      </ul>

      <h2>Documents Required for LASUED Indigeneship Verification</h2>
      <p>Candidates must appear for the screening with the following documents:</p>
      <ul>
        <li>Completed indigeneship form</li>
        <li>Payment receipt from the official LASUED verification portal</li>
        <li>Candidate’s birth certificate (original and photocopy)</li>
        <li>Father’s birth certificate (original and photocopy)</li>
        <li>Letter from a recognised Oba</li>
        <li>Letter from Chairman of the Local Government Area</li>
        <li>Landed property documents</li>
      </ul>

      <h2>Important Information for Candidates</h2>
      <p>LASUED clarified that only candidates of Lagos State origin are eligible for the exercise. All applicants must obtain clearance from the Independent Indigeneship Verification Committee before they can be considered for admission.</p>
      <p>However, the institution noted that participation in the exercise does not automatically guarantee admission, and the clearance certificate does not serve as proof of admission.</p>

      <h2>Information for Old Applicants and Direct Entry Candidates</h2>
      <p>Candidates from the 2025/2026 admission cycle who were previously verified but did not gain admission are only required to revalidate their Indigeneship Clearance Certificates at the same venue.</p>
      <p>In addition, all Direct Entry applicants of Lagos State origin must participate in the verification exercise before they can be considered for admission.</p>

      <h2>LASUED Warns Against Wrong Payments</h2>
      <p>The university warned candidates not to pay money into personal accounts or use unofficial payment channels. Applicants who make payments outside the approved platform do so at their own risk.</p>
      <p>Only candidates who scored <strong>185 and above</strong> in the 2026 UTME are eligible to apply for the verification exercise.</p>`,
    tags: [
      "LASUED",
      "Indigeneship Verification",
      "Lagos State",
      "Admission",
      "Nigeria",
      "2026",
    ],
  },
  {
    id: "uniport-2026-2027-post-utme-screening-registration",
    title: "UNIPORT Opens 2026/2027 Post UTME Screening Registration for Admission",
    category: "Education",
    date: "2026-05-16",
    excerpt: "The University of Port Harcourt has officially opened its Post UTME screening registration for the 2026/2027 undergraduate admission exercise. Learn about eligibility, fees, and how to apply.",
    content:
      `<h2>UNIPORT Opens 2026/2027 Post UTME Screening Registration</h2>
      <p>The University of Port Harcourt has officially opened its Post UTME screening registration for the 2026/2027 undergraduate admission exercise.</p>
      <p>The screening is part of the university’s admission process for candidates seeking entry into various degree programmes for the new academic session.</p>
      <p>According to the announcement, only eligible candidates who meet the required cut-off mark and choice conditions will be considered for screening.</p>

      <h2>Who Is Eligible for UNIPORT Post UTME?</h2>
      <p>Candidates must meet the following conditions to apply:</p>
      <ul>
        <li>Must have selected UNIPORT as <strong>first choice</strong> in the 2026 UTME</li>
        <li>Must have scored <strong>at least 160</strong> in the UTME</li>
        <li>Candidates who initially chose UNIPORT as second choice must change to first choice before applying</li>
      </ul>
      <p>Only candidates who satisfy these requirements will be allowed to participate in the screening exercise.</p>

      <h2>UNIPORT Post UTME Registration Date</h2>
      <p>Online registration for the screening exercise begins on <strong>Friday, 15 May 2026</strong>.</p>
      <p>The registration portal will close at <strong>midnight on Friday, 29 May 2026</strong>.</p>
      <p>Candidates who fail to register within the stated period will not be eligible for the screening.</p>

      <h2>UNIPORT Post UTME Screening Fee</h2>
      <p>The registration fee for the screening exercise is <strong>₦2,000</strong>.</p>
      <p>Payment can be made in two ways:</p>
      <ul>
        <li>Online payment using an ATM card after generating a Remita code</li>
        <li>Payment at any bank branch after printing the Remita payment slip</li>
      </ul>
      <p>Applicants are advised to ensure proper payment processing to avoid registration issues.</p>

      <h2>How to Apply for UNIPORT Post UTME</h2>
      <p>Candidates are required to complete their registration through the official screening portal.</p>
      <p>Steps include:</p>
      <ol>
        <li>Visit the <a href="https://utmedetails.uniport.edu.ng/welcome_utme.php">UNIPORT Post UTME registration portal</a></li>
        <li>Enter your UTME Registration Number</li>
        <li>Confirm your pre-loaded UTME details</li>
        <li>Generate a Remita payment code or print the payment slip</li>
        <li>Pay the ₦2,000 screening fee via Remita</li>
        <li>Obtain a Remita receipt with an access code (if paid at the bank)</li>
        <li>Log back into the portal using your UTME number and access code</li>
        <li>Confirm payment</li>
        <li>Fill out the online registration form</li>
        <li>Submit the application and print your registration slip</li>
      </ol>
      <p>Candidates are advised to keep their printed slip safe, as it will be required during the screening exercise.</p>

      <h2>Important Rules for Candidates</h2>
      <ul>
        <li>Candidates must be at least <strong>16 years old by 30 September 2026</strong></li>
        <li>The use of mobile phones, tablets, smart devices, and similar gadgets is strictly prohibited at the screening venue</li>
        <li>Registration is fully online; candidates do not need to visit the campus</li>
        <li>Applicants must use a valid GSM number and email address for registration</li>
      </ul>

      <h2>Technical Support and Enquiries</h2>
      <p>For technical issues during registration, candidates can contact:</p>
      <p>📧 <a href="mailto:putme2026@uniport.edu.ng">putme2026@uniport.edu.ng</a></p>
      <p>📞 08123241152<br>
      📞 08032943819<br>
      📞 07058555101</p>
      <p>Applicants are advised to complete their registration within the official timeframe and keep checking the university portal for further updates on the screening schedule.</p>`,
    tags: [
      "UNIPORT",
      "Post UTME",
      "Admission",
      "Nigeria",
      "2026",
    ],
  },
  {
    id: "delta-state-bursary-registration-2025-2026",
    title: "Delta State Opens 2025/2026 Bursary Registration for Eligible Students",
    category: "Scholarship",
    date: "2026-05-16",
    excerpt: "The Delta State Bursary and Scholarship Board has officially opened registration for the 2025/2026 Students Special Assistance Scheme (SSAS) Bursary Award Programme for eligible students of Delta State origin.",
    content:
      `<h2>Delta State Opens 2025/2026 Bursary Registration</h2>
      <p>The Delta State Bursary and Scholarship Board has officially opened registration for the 2025/2026 Students Special Assistance Scheme (SSAS) Bursary Award Programme.</p>
      <p>The bursary scheme is designed to support eligible students of Delta State origin who are studying full-time in approved universities, polytechnics, monotechnics, and colleges of education across Nigeria.</p>
      <p>According to the Board, online registration began on Monday, 11 May 2026, and interested applicants are expected to complete their applications before the closing date on Wednesday, 10 June 2026.</p>
      <p>Students are advised to complete the registration process early, upload all required documents, and print their acknowledgement slip before the portal closes.</p>

      <h2>Delta State Bursary Application Portal</h2>
      <p>Eligible students can apply through the <a href="https://dsbsb.dl.gov.ng/register/index.php" target="_blank" rel="noopener noreferrer">official Delta State bursary registration portal</a>.</p>
      <p>Applicants are expected to provide accurate personal and academic information during registration, as incorrect or incomplete details may affect the application process.</p>

      <h2>Requirements for Delta State Bursary Application</h2>
      <p>The Board outlined several steps applicants must complete successfully before their application can be considered.</p>
      <p>Applicants must:</p>
      <ul>
        <li>Complete the online registration process</li>
        <li>Upload all required documents</li>
        <li>Provide correct personal and school details</li>
        <li>Pay a non-refundable processing fee of ₦800</li>
        <li>Print and keep the acknowledgement slip after submission</li>
      </ul>
      <p>The acknowledgement slip is an important document and should be kept safe throughout the application process.</p>

      <h2>Who Can Apply for the 2025/2026 Delta State Bursary?</h2>
      <p>To qualify for the bursary programme, applicants must meet the following conditions:</p>
      <ul>
        <li>Be of Delta State origin</li>
        <li>Possess a valid National Identification Number (NIN)</li>
        <li>Be a full-time student in an approved tertiary institution</li>
        <li>Have a minimum CGPA of 2.20</li>
        <li>Meet the approved academic level requirement for their institution category</li>
      </ul>

      <h2>Approved Academic Levels</h2>
      <p>The Board also released the minimum academic levels required for each institution type.</p>
      <h3>University Students</h3>
      <p>Applicants in universities must be in 200 Level or above to qualify.</p>
      <h3>Polytechnic and Monotechnic Students</h3>
      <p>Students in polytechnics and monotechnics must be in either ND II or HND II.</p>
      <h3>College of Education Students</h3>
      <p>Eligible applicants in colleges of education must be in NCE II or NCE III.</p>

      <h2>Students Not Eligible for the Bursary</h2>
      <p>The Board clarified that postgraduate students are not eligible for the 2025/2026 bursary programme. This includes students enrolled in PGD programmes, Master’s degree programmes, and PhD programmes.</p>

      <h2>What Happens After Registration?</h2>
      <p>Applicants are encouraged to monitor the Board’s official communication channels after submitting their forms. The Board may release additional updates regarding verification exercises, screening procedures, and other important notices connected to the bursary process.</p>
      <p>Students should therefore stay updated both before and after the application deadline.</p>

      <h2>Delta State Bursary Support and Enquiries</h2>
      <p>Applicants who need assistance or have questions regarding the application process can contact the Board through its official support channels.</p>
      <h3>Support Email</h3>
      <ul>
        <li><a href="mailto:support@dsbsb.dl.gov.ng">support@dsbsb.dl.gov.ng</a></li>
      </ul>
      <h3>Support Lines</h3>
      <ul>
        <li>0810-978-6538</li>
        <li>0805-694-9376</li>
        <li>0810-978-6538</li>
      </ul>
      <p>Students who meet the requirements are advised to apply early and ensure they keep their printed acknowledgement slip for future reference.</p>`,
    tags: [
      "Delta State",
      "Bursary",
      "Scholarship",
      "SSAS",
      "2026",
    ],
  },
  {
    id: "lasu-wins-25-million-jamb-award-2026",
    title: "LASU Wins ₦25 Million JAMB Award After Emerging Nigeria’s Most Preferred University Again",
    category: "Education",
    date: "2026-05-16",
    excerpt: "Lagos State University has received a ₦25 million award from the Joint Admissions and Matriculation Board after emerging as Nigeria's most subscribed university for the second consecutive year.",
    content:
      `<h2>LASU Emerges as Nigeria’s Most Preferred University</h2>
      <p>Lagos State University has received a ₦25 million award from the Joint Admissions and Matriculation Board following another major milestone in Nigeria’s university admission cycle.</p>
      <p>The award came shortly after LASU emerged as the most subscribed university in the country for the second consecutive year, with 84,326 candidates selecting the institution as their first choice during the 2026 Unified Tertiary Matriculation Examination admission exercise.</p>
      <p>JAMB presented the award during the 2026 Policy Meeting held on Monday, 11 May 2026, in Abuja.</p>

      <h2>LASU Emerges Among Top Institutions in JAMB Merit Awards</h2>
      <p>The ₦25 million prize formed part of the National Tertiary Admissions’ Performance-Merit Award, widely known as the NATAP-M Awards.</p>
      <p>LASU finished as the Second Runner-Up in the overall category for the 2025 admission year under the 6th edition of the award programme.</p>
      <p>According to the details presented at the policy meeting, the university recorded an aggregate score of three points across the five assessment elements used for the Mega Award category.</p>
      <p>The recognition further strengthens LASU’s growing national profile in admission performance and institutional competitiveness.</p>

      <h2>Award Presented to LASU Vice-Chancellor</h2>
      <p>The Registrar of JAMB, Prof. Ishaq Oloyede, presented the award to the Vice-Chancellor of LASU, Prof. Ibiyemi Ibilola Olatunji-Bello.</p>
      <p>The presentation took place before stakeholders in Nigeria’s tertiary education sector during the annual national admission policy meeting.</p>
      <p>The ceremony added another national recognition to LASU’s recent achievements in the education sector.</p>

      <h2>LASU Retains Position as Nigeria’s Most Preferred University</h2>
      <p>The award followed LASU’s strong showing in the 2026 admission statistics released during the UTME exercise.</p>
      <p>A total of 84,326 candidates selected LASU as their first-choice institution, placing the university at the top of Nigeria’s admission demand chart for the second year in a row.</p>
      <p>The figure highlights the growing preference for the university among admission seekers across the country.</p>

      <h2>Vice-Chancellor Reacts to the Achievement</h2>
      <p>Reacting to the recognition, Professor Olatunji-Bello described both achievements as evidence of LASU’s commitment to excellence, innovation, transparency, and student-focused administration.</p>
      <p>For the university, the ₦25 million JAMB award and its record-breaking first-choice application numbers now stand as two major highlights from the same admission cycle.</p>
      <p>Both developments have also kept LASU firmly in the national spotlight as one of Nigeria’s most sought-after public universities.</p>`,
    tags: [
      "LASU",
      "JAMB",
      "NATAP-M Awards",
      "Education",
      "Nigeria",
      "Admission",
      "2026",
    ],
  },
  {
    id: "oduduwa-university-nuc-accreditation-2025",
    title: "Oduduwa University Secures Full NUC Accreditation for 10 Academic Programmes",
    category: "Education",
    date: "2026-05-15",
    excerpt: "Oduduwa University has received full accreditation from the National Universities Commission for 10 academic programmes following the October/November 2025 accreditation exercise.",
    content:
      `<h2>Oduduwa University Secures Full NUC Accreditation for 10 Academic Programmes</h2>
      <p>Oduduwa University has received full accreditation from the National Universities Commission for 10 academic programmes following the October/November 2025 accreditation exercise.</p>
      <p>The development gives students, parents, and members of the university community fresh confidence in the institution’s academic standards and approved courses. It also confirms that the affected programmes successfully met the National Universities Commission’s requirements in curriculum quality, staffing, facilities, and research output.</p>
      <p>The accredited programmes cut across administration, health sciences, communication studies, environmental sciences, natural sciences, and social sciences.</p>
      <p>Among the programmes expected to attract major attention are Nursing Science, Mass Communication, and Public Administration, which all secured full accreditation after the review exercise.</p>

      <h2>Full List of Fully Accredited Programmes</h2>
      <h3>Faculty of Administration and Management Science</h3>
      <ul>
        <li>Public Administration</li>
      </ul>
      <h3>Faculty of Allied Health Sciences</h3>
      <ul>
        <li>Nursing Science</li>
      </ul>
      <h3>Faculty of Communication Arts and Media Studies</h3>
      <ul>
        <li>Mass Communication</li>
      </ul>
      <h3>Faculty of Environmental Sciences</h3>
      <ul>
        <li>Quantity Surveying</li>
      </ul>
      <h3>Faculty of Science</h3>
      <ul>
        <li>Biochemistry</li>
        <li>Industrial Chemistry</li>
        <li>Microbiology</li>
      </ul>
      <h3>Faculty of Social Sciences</h3>
      <ul>
        <li>Economics</li>
        <li>Political Science</li>
        <li>International Relations</li>
      </ul>

      <h2>What the NUC Evaluated</h2>
      <p>During the October/November 2025 accreditation exercise, the National Universities Commission assessed key academic and institutional standards across the university.</p>
      <p>The evaluation focused on:</p>
      <ul>
        <li>Curriculum quality</li>
        <li>Academic staffing</li>
        <li>Learning facilities</li>
        <li>Research output</li>
        <li>Overall programme delivery</li>
      </ul>
      <p>The successful outcome indicates that the programmes satisfied the commission’s academic benchmarks and operational standards.</p>

      <h2>Vice Chancellor Speaks on the Accreditation Success</h2>
      <p>The Vice Chancellor of Oduduwa University, Prof. C. I. N. Uche, described the accreditation result as a reflection of the university’s commitment to academic excellence and graduate development.</p>
      <p>According to him:</p>
      <blockquote>“Accreditation ensures our programmes remain relevant and competitive.”</blockquote>
      <p>Prof. Uche also expressed appreciation to the university’s financial supporters for providing the resources needed during the accreditation process. He further commended members of staff for their contributions toward the successful exercise.</p>

      <h2>Celebration Across the University Community</h2>
      <p>The accreditation outcome has sparked celebration within the university community, with staff, students, and stakeholders congratulated on the achievement.</p>
      <p>For prospective students seeking admission into the institution, the accreditation serves as an important assurance that the approved programmes meet the standards required by Nigeria’s university regulatory body.</p>`,
    tags: [
      "Oduduwa University", "NUC", "Accreditation", "Education", "Nigeria", "2025"
    ],
  },
  {
    id: "jamb-2026-2027-cut-off-marks-announcement",
    title: "JAMB Releases 2026/2027 Cut-Off Marks for Universities, Polytechnics and Nursing Schools",
    category: "Education",
    date: "2026-05-13",
    excerpt: "Joint Admissions and Matriculation Board has officially announced the minimum cut-off marks for admissions into universities, polytechnics, Colleges of Nursing, Colleges of Education and agriculture-related programmes for the 2026/2027 academic session.",
    content:
      `<h2>JAMB Releases 2026/2027 Cut-Off Marks for Universities, Polytechnics and Nursing Schools</h2>
      <p>Joint Admissions and Matriculation Board has officially announced the minimum cut-off marks for admissions into universities, polytechnics, Colleges of Nursing, Colleges of Education and agriculture-related programmes for the 2026/2027 academic session.</p>
      <p>The admission benchmarks were approved during JAMB’s policy meeting held on 11 May in Abuja.</p>
      <p>The meeting was attended by Maruf Tunji Alausa alongside vice-chancellors, rectors, registrars and other education stakeholders.</p>
      <p>According to JAMB, the approved scores represent the minimum admission benchmarks institutions are allowed to accept for the new admission cycle.</p>
      <hr>
      <h2>Official JAMB Cut-Off Marks for 2026/2027</h2>
      <p>JAMB approved the following minimum admissible scores:</p>
      <table>
        <thead>
          <tr>
            <th>Institution Type</th>
            <th>Minimum Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Universities</td>
            <td>150</td>
          </tr>
          <tr>
            <td>Colleges of Nursing</td>
            <td>150</td>
          </tr>
          <tr>
            <td>Polytechnics</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Colleges of Education/Agriculture</td>
            <td>No UTME score required</td>
          </tr>
        </tbody>
      </table>
      <p>The Board explained that institutions may still set higher cut-off marks depending on course demand and internal admission policies, but no school is permitted to admit candidates below the approved minimum score.</p>
      <hr>
      <h2>No UTME Requirement for Some Programmes</h2>
      <p>One of the major changes announced during the policy meeting concerns Colleges of Education and some agriculture-related programmes.</p>
      <p>According to JAMB, candidates seeking admission into NCE programmes and approved agriculture courses outside Engineering will no longer need a UTME score for admission.</p>
      <p>The decision follows the Federal Government’s recent policy aimed at widening access to teacher education and agriculture-related studies.</p>
      <p>Schools offering the affected programmes are expected to release their individual admission procedures and application details later.</p>
      <hr>
      <h2>What the New JAMB Cut-Off Marks Mean</h2>
      <p>The approved cut-off marks only serve as the minimum requirement for admission consideration.</p>
      <p>For university admission, a score of 150 does not automatically guarantee admission, especially for competitive courses where institutions may set higher departmental requirements.</p>
      <p>The same applies to Colleges of Nursing and polytechnics, where candidates may still need to:</p>
      <ul>
        <li>Pass Post-UTME examinations</li>
        <li>Participate in screening exercises</li>
        <li>Meet departmental admission requirements</li>
      </ul>
      <p>Candidates applying for exempted NCE and agriculture programmes should also note that institutions may still conduct screenings and verification processes despite the UTME waiver.</p>
      <hr>
      <h2>Schools Expected to Announce Post-UTME Forms Soon</h2>
      <p>Following the release of the official cut-off marks, many public tertiary institutions are expected to begin announcing:</p>
      <ul>
        <li>Post-UTME application forms</li>
        <li>Screening dates</li>
        <li>Admission guidelines</li>
        <li>Departmental cut-off marks</li>
      </ul>
      <p>Candidates are advised to regularly check updates from their preferred institutions to avoid missing important deadlines.</p>
      <hr>
      <h2>Candidates Advised to Start Preparation Early</h2>
      <p>Admission experts have also advised candidates to begin preparation for Post-UTME and screening exercises early rather than waiting for forms to be released.</p>
      <p>Many institutions are expected to commence admission activities shortly after the policy meeting, making early preparation important for candidates hoping to secure admission in the 2026/2027 session.</p>`,
    tags: [
      "JAMB",
      "Cut-off Marks",
      "Admission",
      "Universities",
      "Polytechnics",
      "Nursing Schools",
      "Education",
      "Nigeria",
      "2026",
      "2027",
    ],
  },
  {
    id: "nigerians-react-jamb-cut-off-marks-reduction-2026",
    title: "Nigerians React as JAMB Further Reduces Higher Institution Cut-Off Marks",
    category: "Education",
    date: "2026-05-13",
    excerpt: "The decision by the Joint Admissions and Matriculation Board to further reduce admission cut-off marks for tertiary institutions has sparked widespread concern among Nigerians.",
    content:
      `<h2>Nigerians React as JAMB Further Reduces Higher Institution Cut-Off Marks</h2>
      <p>The decision by the Joint Admissions and Matriculation Board (JAMB) to further reduce admission cut-off marks for tertiary institutions has sparked widespread concern among Nigerians, especially students, parents, lecturers, and education advocates.</p>
      <p>At the 2026 policy meeting held in Abuja, JAMB approved 150 as the minimum cut-off mark for universities and Colleges of Nursing Sciences, while polytechnics were pegged at 100. The board also announced exemptions from UTME for some Colleges of Education and agriculture-related programmes.</p>
      <p>While some Nigerians believe the move could improve access to education, many others fear it signals a dangerous decline in academic standards.</p>
      <hr>
      <h2>“Are We Lowering the Value of Education?”</h2>
      <p>Soon after the announcement surfaced online, reactions flooded X (formerly Twitter), with many users describing the development as “worrying,” “embarrassing,” and “a sign of educational collapse.”</p>
      <p>One X user argued that lowering standards would only worsen the quality of graduates entering the system.</p>
      <p>According to reports compiled from reactions on X, education advocate Alex Onyia criticised the policy, saying:</p>
      <blockquote>“This is a very wrong and terrible move.”</blockquote>
      <p>He warned that reducing entry requirements for education programmes could eventually produce poorly trained teachers.</p>
      <p>Another user, identified as Àgbà John Doe on X, questioned why future teachers should bypass rigorous screening entirely, insisting that the government should instead increase standards rather than reduce them.</p>
      <p>Many users also linked the decision to the growing decline in Nigeria’s educational quality. A trending sentiment across social media was that a university admission benchmark of 150 out of 400 makes competitive education appear less serious.</p>
      <p>One viral post on X stated:</p>
      <blockquote>“Reducing JAMB cut-off mark reflects a deeper problem.”</blockquote>
      <p>The post argued that the country should focus on fixing poor learning conditions instead of continuously lowering admission benchmarks.</p>
      <hr>
      <h2>Concerns Over Merit and Competition</h2>
      <p>Several Nigerians fear the reduced cut-off marks may discourage hard-working students who spend months preparing for UTME examinations.</p>
      <p>For years, admission into competitive universities like University of Lagos and University of Ibadan has been associated with high performance and fierce competition. Critics now worry that lowering the baseline sends the wrong message to younger students.</p>
      <p>Others argued that instead of addressing issues such as poor secondary education, lack of infrastructure, and overcrowded classrooms, policymakers are choosing the “easier route” by lowering requirements.</p>
      <hr>
      <h2>Some Nigerians Support the Move</h2>
      <p>Despite the criticism, not everyone opposed the policy.</p>
      <p>Former senator Shehu Sani described the exemption for education and agriculture programmes as “commendable,” arguing that it could encourage more young Nigerians to enter sectors where the country urgently needs manpower.</p>
      <p>Supporters also pointed out that many brilliant students fail to secure admission yearly because of limited university spaces, not necessarily because they are academically weak. Some students welcomed the lower cut-off marks, saying it may provide hope for candidates who struggled with the increasingly difficult UTME process.</p>
      <hr>
      <h2>Bigger Questions About Nigeria’s Education System</h2>
      <p>Beyond the online outrage, the controversy has reopened broader conversations about the state of education in Nigeria.</p>
      <p>Many Nigerians believe the recurring reduction of cut-off marks reflects deeper structural issues, including declining learning standards in secondary schools, poor funding, and increasing pressure to absorb millions of admission seekers yearly.</p>
      <p>Education analysts have also warned that lowering standards without improving teaching quality and institutional capacity could create long-term consequences for universities and the labour market.</p>
      <p>For now, reactions continue to pour in across X, Facebook, and other platforms as Nigerians debate whether the policy is a practical solution to admission challenges or another sign of weakening academic standards in the country.</p>`,
    tags: [
      "JAMB",
      "UTME",
      "Cut-off Marks",
      "Education",
      "Nigeria",
      "Reactions",
      "2026",
    ],
  },
  {
    id: "fg-removes-utme-nce-admission-2026",
    title: "FG Removes UTME Requirement for NCE Admission in Nigeria",
    category: "Education",
    date: "2026-05-12",
    excerpt: "The Federal Government has announced that candidates seeking admission into Nigeria Certificate in Education (NCE) programmes will no longer need to sit for the Unified Tertiary Matriculation Examination (UTME).",
    content:
      `<h2>FG Removes UTME Requirement for NCE Admission in Nigeria</h2>
      <p>The Federal Government has announced a significant change for candidates seeking admission into Nigeria Certificate in Education (NCE) programmes: they will no longer be required to sit for the Unified Tertiary Matriculation Examination (UTME). This move aims to address the issue of available admission spaces in Colleges of Education and attract more individuals to the teaching profession.</p>
      <p>The announcement was made by Maruf Tunji Alausa during the 2026 Policy Meeting on Admissions into Tertiary Institutions, held at the Body of Benchers. Under this new policy, prospective NCE students can now apply with at least four credit passes, bypassing the UTME.</p>
      <p>According to the Minister, this decision was influenced by data from the Joint Admissions and Matriculation Board (JAMB), which indicated that many Colleges of Education still have vacant admission slots. The government believes this policy will encourage more young Nigerians to pursue teacher education, particularly those from communities where financial constraints, geographical distance, and limited opportunities often hinder access to higher education.</p>
      <h3>JAMB Registration Still Required</h3>
      <p>Despite the removal of the UTME requirement for NCE applicants, the Minister clarified that all affected candidates must still register with JAMB. Admissions will continue to be processed through the Central Admissions Processing System (CAPS), where candidates’ credentials will undergo thorough screening and verification before admission letters are issued. The Minister issued a stern warning against institutions conducting admissions outside CAPS, emphasizing that such practices remain illegal.</p>
      <h3>Minimum Admission Age Remains 16</h3>
      <p>The Federal Government also reaffirmed that the minimum admission age for tertiary institutions remains 16 years. This age policy, according to the Minister, remains unchanged following extensive consultations with various stakeholders in the education sector.</p>
      <h3>Colleges of Education Expected to Benefit</h3>
      <p>This new policy is anticipated to significantly benefit Colleges of Education by enabling them to utilize their available admission spaces more effectively. By making teacher education more accessible, the government hopes to address the challenge of out-of-school adolescents and improve the supply of qualified teachers across the country.</p>`,
    tags: ["NCE", "UTME", "Admission", "Education", "Nigeria", "JAMB", "2026"],
  },
  {
    id: "fg-waives-utme-agricultural-nd-2026",
    title: "FG Waives UTME for Selected Agricultural ND Courses, Pushes Wider Education Reforms",
    category: "Education",
    date: "2026-05-12",
    excerpt: "The Federal Government has approved the removal of the Unified Tertiary Matriculation Examination (UTME) requirement for candidates seeking admission into selected National Diploma (ND) programmes in agriculture and agriculture-related fields.",
    content:
      `<h2>FG Waives UTME for Selected Agricultural ND Courses, Pushes Wider Education Reforms</h2>
      <p>The Federal Government has approved the waiver of the Unified Tertiary Matriculation Examination (UTME) requirement for candidates seeking admission into specific National Diploma (ND) programmes in agriculture and agriculture-related fields. This initiative is part of broader efforts to bolster national development in the agricultural sector.</p>
      <p>Maruf Tunji Alausa announced this policy during the 2026 Policy Meeting on Admissions into Tertiary Institutions in Abuja. The waiver applies specifically to non-technology agricultural and agriculture-related ND programmes, aiming to attract more young Nigerians into these crucial educational pathways.</p>
      <h3>JAMB Registration and CAPS Still Mandatory</h3>
      <p>Even though candidates for the affected agricultural ND programmes will not need to write the UTME, they are still required to register with JAMB. The Minister reiterated that all admissions must continue to be processed through the Central Admissions Processing System (CAPS). This system ensures that candidates’ credentials are verified before admission letters are issued. Institutions were warned against bypassing CAPS, as admissions conducted outside this approved system are illegal and may lead to sanctions.</p>
      <h3>Student Loan Scheme and Digital Education Reforms</h3>
      <p>The Minister also highlighted ongoing wider education reforms in Nigeria. He specifically mentioned the student loan initiative, which operates under the <a href="https://nelfund.gov.ng">Nigerian Education Loan Fund</a>, as part of efforts to reduce financial barriers for students through interest-free education loans.</p>
      <p>Furthermore, the Federal Government is focusing on several key areas to modernize the education sector:</p>
      <ul>
        <li>Expanding computer-based testing</li>
        <li>Improving digital learning skills</li>
        <li>Strengthening examination monitoring</li>
        <li>Combating examination malpractice through enhanced verification systems</li>
      </ul>
      <h3>Support for Students With Disabilities</h3>
      <p>The Joint Admissions and Matriculation Board (JAMB) received commendation from the Minister for its support of Persons Living with Disabilities, including fee waivers and other inclusive measures. Tertiary institutions were urged to create learning environments that ensure dignity and proper support for every student.</p>
      <h3>FG Speaks on ASUU Agreement</h3>
      <p>Alausa also described the 2025 agreement between the Federal Government and the Academic Staff Union of Universities (ASUU) as a positive development. He noted that this agreement is a step towards improving staff welfare, funding, and stability within Nigerian universities. He concluded by calling on all stakeholders in the education sector to support these ongoing reforms, which are designed to enhance access, quality, and accountability in tertiary education.</p>`,
    tags: ["UTME", "ND Courses", "Agriculture", "Education Reform", "JAMB", "Nigeria", "2026"],
  },
  {
    id: "ucth-fake-admission-warning-fraudulent-requests-2026",
    title: "UCTH Warns Public Against Fake Admission Offers and Fraudulent Payment Requests",
    category: "Education",
    date: "2026-05-10",
    excerpt: "University of Calabar Teaching Hospital (UCTH) has issued a public warning regarding fake admission offers and fraudulent payment requests being circulated by individuals posing as hospital representatives.",
    content:
      `<h2>UCTH Warns Public Against Fake Admission Offers and Fraudulent Payment Requests</h2>
      <p>University of Calabar Teaching Hospital has issued a public warning over fake admission offers being circulated by fraudsters posing as representatives of the hospital.</p>
      <p>The management of UCTH disclosed that some individuals and criminal groups have been using the institution’s name to deceive members of the public with false admission claims and unauthorised payment requests.</p>
      <p>According to the hospital, the fraudsters usually ask unsuspecting applicants to pay money into personal or unapproved bank accounts while pretending to facilitate admission into the institution.</p>
      <hr>
      <h2>UCTH Does Not Use Agents for Admission</h2>
      <p>The hospital made it clear that admissions are not handled through agents, middlemen or third-party representatives. UCTH advised prospective students and members of the public to verify any admission message claiming to come from the institution before taking further action.</p>
      <p>The management also stressed that the hospital does not request payments through personal bank accounts or unverified channels.</p>
      <hr>
      <h2>Approved UCTH Admission and Payment Channels</h2>
      <p>According to the notice, all official admission and payment information must come through the recognised channels listed on the official fliers of:</p>
      <ul>
        <li>The College of Nursing Sciences</li>
        <li>The School of Health Information Management</li>
      </ul>
      <p>Applicants were advised to carefully confirm that every payment instruction matches the approved details connected to the relevant school. The hospital warned that any request for payment into a suspicious or unfamiliar account should be treated as a red flag.</p>
      <hr>
      <h2>Advice to Prospective Students and the Public</h2>
      <p>UCTH urged the public to ignore suspicious admission posts, messages, phone calls or chats from individuals claiming to represent the institution. The hospital also advised applicants not to make payments into unknown accounts, even when the message appears urgent or carries the hospital’s name.</p>
      <p>According to the management, fraudsters often use pressure tactics to deceive victims, but proper verification can help prevent financial loss.</p>
      <hr>
      <h2>UCTH Rejects Liability for Fraudulent Transactions</h2>
      <p>The hospital further stated that it will not accept responsibility for losses resulting from dealings with fake agents, fraudsters or unverified payment platforms. Prospective students were therefore encouraged to confirm every admission and payment detail through official sources before making any transaction.</p>
      <hr>
      <h2>Where to Get Official UCTH Information</h2>
      <p>For accurate admission information and official updates, the public was advised to contact UCTH through its official communication platforms, including:</p>
      <ul>
        <li>The <a href="https://ucthcalabar.gov.ng/">official UCTH website</a></li>
        <li>Facebook page: <strong>@UCTH Corporate Affairs</strong></li>
      </ul>`,
    tags: ["UCTH", "Admission", "Fraud Warning", "Education", "Nigeria", "Calabar", "2026"],
  },
  {
    id: "kwara-state-college-of-nursing-sciences-oke-ode-nd-nursing-admission-2026-2027",
    title: "Kwara State College of Nursing Sciences Oke-Ode Opens 2026/2027 ND Nursing Admission Form",
    category: "Education",
    date: "2026-05-09",
    excerpt: "Kwara State College of Nursing Sciences, Oke-Ode (KWCONOO) has commenced the sale of admission forms for its 2026/2027 National Diploma (ND) Nursing Programme.",
    content:
      `<h2>Kwara State College of Nursing Sciences Oke-Ode Opens 2026/2027 ND Nursing Admission Form</h2>
      <p>Kwara State College of Nursing Sciences has commenced the sale of admission forms for its 2026/2027 National Diploma (ND) Nursing Programme.</p>
      <p>The college management approved the online sale of forms during a meeting held on Monday, 27 April 2026, while the application portal officially opened on Monday, 4 May 2026, for qualified candidates seeking admission into the ND Nursing programme at KWCONOO.</p>
      <p>The institution advised interested applicants to carefully note the admission requirements, application fee and JAMB score before starting the registration process.</p>
      <hr>
      <h2>KWCONOO ND Nursing Admission Details</h2>
      <ul>
        <li><strong>Programme:</strong> National Diploma Nursing</li>
        <li><strong>Academic Session:</strong> 2026/2027</li>
        <li><strong>Application Fee:</strong> ₦30,000</li>
        <li><strong>JAMB Cut-Off Mark:</strong> 180</li>
        <li><strong>Application Method:</strong> Online</li>
      </ul>
      <p>The college stated that all applications must be completed through the official college portal only.</p>
      <hr>
      <h2>KWCONOO Post UTME Admission Requirements</h2>
      <p>Candidates applying for the ND Nursing programme must possess credit passes in five relevant O’level subjects:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Chemistry</li>
        <li>Physics</li>
        <li>Biology</li>
      </ul>
      <p>According to the college, the results must be obtained from WAEC, NECO or NABTEB in not more than two sittings. The institution stressed that candidates who do not meet the stated subject requirements should not proceed with the application.</p>
      <hr>
      <h2>How to Apply for KWCONOO Post UTME Form</h2>
      <p>Interested candidates are expected to complete their registration online through the KWCONOO application portal by following these steps:</p>
      <ol>
        <li>Visit the application portal</li>
        <li>Click on <strong>“Application Form / Instructions”</strong></li>
        <li>Enter full name, valid email address and phone number</li>
        <li>Click <strong>“Verify & Make Payment”</strong></li>
        <li>Make payment using an ATM card</li>
        <li>Obtain the application number</li>
        <li>Log in using the email address and application number</li>
        <li>Complete the application form</li>
        <li>Upload a passport photograph</li>
        <li>Print the completed form and payment receipt</li>
      </ol>
      <hr>
      <h2>What Happens After the Application?</h2>
      <p>After completing the online registration, applicants are expected to prepare for the next stages of the admission process, including the Computer-Based Test (CBT), interview/screening, and the eventual release of the admission list.</p>
      <p>The college advised candidates to visit the school portal regularly for updates regarding examination dates and screening schedules.</p>`,
    tags: ["Kwara State", "Nursing", "Admission", "ND Nursing", "2026", "Education", "KWCONOO"],
  },
  {
    id: "how-to-prioritize-tasks-entrepreneur-guide",
    title: "How to Prioritize Tasks as an Entrepreneur: A Step-by-Step Guide",
    category: "Business",
    date: "2026-05-08",
    excerpt: "Mastering task prioritization is crucial for any founder. This guide provides a strategic framework to help you manage your time and focus on what truly grows your business.",
    content:
      `<h2>Mastering the Entrepreneurial To-Do List</h2>
      <p>As an entrepreneur, your to-do list is never-ending. Between managing team members, handling customer feedback, and planning long-term strategy, it is easy to feel overwhelmed. The key to success isn't working more hours—it's ensuring that the hours you do work are spent on the right things.</p>
      <p>Here is a step-by-step guide to help you prioritize your tasks and reclaim your focus.</p>
      <hr>
      <h2>Step 1: The Brain Dump</h2>
      <p>The first step to prioritization is getting everything out of your head and onto paper (or a digital tool). List every single task you are currently worried about, no matter how small. Trying to keep track of a dozen tasks mentally creates cognitive load that reduces your actual productivity.</p>
      <hr>
      <h2>Step 2: Use the Eisenhower Matrix</h2>
      <p>Once you have your list, categorize each item into one of four quadrants based on Urgency and Importance:</p>
      <ul>
        <li><strong>Important & Urgent:</strong> Do these immediately (e.g., a server crash or a major client deadline).</li>
        <li><strong>Important but Not Urgent:</strong> Schedule these (e.g., long-term strategy, networking, or exercise). This is where growth happens.</li>
        <li><strong>Urgent but Not Important:</strong> Delegate these (e.g., most emails, phone calls, or administrative busywork).</li>
        <li><strong>Neither Urgent nor Important:</strong> Eliminate these. They are distractions.</li>
      </ul>
      <hr>
      <h2>Step 3: Apply the Pareto Principle (80/20 Rule)</h2>
      <p>The Pareto Principle states that 80% of your results come from 20% of your efforts. Look at your "Important" tasks and identify the ones that will have the biggest impact on your bottom line or long-term vision. Focus on those few items first.</p>
      <hr>
      <h2>Step 4: Implement Time Blocking</h2>
      <p>Instead of just listing tasks, assign them a specific home in your calendar. Give your high-priority 20% tasks your "prime time"—the hours of the day when you have the most energy and focus. Protect these blocks of time fiercely from interruptions.</p>
      <hr>
      <h2>Step 5: The "Rule of Three"</h2>
      <p>Every morning (or the night before), identify the three most important things you must accomplish that day to feel successful. If you do nothing else, completing these three "Must-Dos" ensures that you are moving the needle forward.</p>
      <hr>
      <h2>Step 6: Review and Reflect</h2>
      <p>At the end of each week, review what you accomplished and what got pushed aside. Were you distracted by "urgent" but unimportant tasks? Adjust your plan for the following week based on these insights.</p>
      <hr>
      <h2>Final Thought</h2>
      <p>Prioritization is a muscle that gets stronger with practice. By being intentional about where you spend your energy, you transition from being a busy entrepreneur to being an effective leader.</p>`,
    tags: [
      "Business",
      "Productivity",
      "Entrepreneurship",
      "Time Management",
      "Leadership",
      "2026",
    ],
  },
  {
    id: "cipm-annual-essay-competition-2026",
    title: "CIPM Opens Entries for 2026 Annual Essay Competition for Nigerian Undergraduates",
    category: "Education",
    date: "2026-05-08",
    excerpt: "The Chartered Institute of Personnel Management (CIPM) has announced its 2026 Annual Essay Competition for Nigerian undergraduates, focusing on the readiness of graduates for the workforce.",
    content:
      `<h2>CIPM Opens Entries for 2026 Annual Essay Competition for Nigerian Undergraduates</h2>
      <p>Chartered Institute of Personnel Management of Nigeria has announced the commencement of entries for its 2026 Annual Essay Competition.</p>
      <p>The competition is open to undergraduate students in Nigerian tertiary institutions and focuses on a question that continues to generate debate among students, educators and employers across the country.</p>
      <p>The essay topic for the 2026 edition is:</p>
      <blockquote>“Are Nigerian Tertiary Institutions Truly Preparing Students for the World of Work?”</blockquote>
      <p>According to CIPM, participants are expected to present strong arguments, demonstrate a sound understanding of the topic and apply proper academic referencing throughout the essay.</p>
      <hr>
      <h2>Who Can Apply for the CIPM Essay Competition?</h2>
      <p>The competition is strictly open to undergraduates currently studying in Nigerian tertiary institutions.</p>
      <p>However, previous winners of the competition are not eligible to participate again. CIPM also noted that only shortlisted candidates will be contacted, so applicants are advised to provide accurate contact details during submission.</p>
      <hr>
      <h2>Guidelines for the CIPM 2026 Essay Competition</h2>
      <p>Applicants are expected to follow the stated submission guidelines carefully. The requirements include:</p>
      <ul>
        <li>Essay must not exceed 3,000 words</li>
        <li>References must follow APA Style, 7th Edition</li>
        <li>Font style must be Times New Roman</li>
        <li>Font size should be 12-point</li>
        <li>Essay must be typed with double line spacing</li>
        <li>Submission must be in Microsoft Word format only</li>
        <li>Plagiarised entries will be disqualified</li>
      </ul>
      <p>The institute stressed that failure to follow the guidelines may affect the applicant’s chances in the competition.</p>
      <hr>
      <h2>CIPM Essay Competition Prizes</h2>
      <p>Winners of the competition will receive cash rewards alongside Human Resource Management books:</p>
      <ul>
        <li><strong>1st Prize:</strong> ₦300,000 + 2 HRM books</li>
        <li><strong>2nd Prize:</strong> ₦250,000 + 2 HRM books</li>
        <li><strong>3rd Prize:</strong> ₦200,000 + 2 HRM books</li>
      </ul>
      <p>In addition to the prizes, all winners will gain access to a network of employers. Winners who are not already members will receive free student membership registration.</p>
      <p>The top winners will equally enjoy an all-expense-paid trip to Abuja for the CIPM 2026 International Conference and Exhibitions.</p>
      <hr>
      <h2>Required Documents for Submission</h2>
      <p>Applicants must submit the following documents together with their essay:</p>
      <ul>
        <li>Valid student ID card</li>
        <li>Copy of admission letter</li>
        <li>One recent passport photograph</li>
        <li>Current mobile phone number</li>
        <li>Email address</li>
      </ul>
      <p>The institute instructed applicants to scan all required documents and merge them with the essay into a <strong>single Microsoft Word document</strong> before submission.</p>
      <hr>
      <h2>How to Submit Entries</h2>
      <p>Completed entries should be sent via email to: <strong><a href="mailto:essaycompetition@cipmnigeria.org">essaycompetition@cipmnigeria.org</a></strong></p>
      <p>Applicants are advised to ensure the essay and supporting documents are submitted together as one complete file to avoid disqualification or processing issues.</p>
      <hr>
      <h2>Deadline for Submission</h2>
      <p>The deadline for the CIPM 2026 Annual Essay Competition is <strong>Friday, 31 July 2026</strong>.</p>
      <p>Interested students are encouraged to prepare their essays early and submit all required documents before the closing date.</p>
      <hr>
      <h2>CIPM Contact Details for Enquiries</h2>
      <p>For enquiries, applicants can contact CIPM through:</p>
      <ul>
        <li>08160380205</li>
        <li>07025709873</li>
        <li><a href="mailto:essaycompetition@cipmnigeria.org">essaycompetition@cipmnigeria.org</a></li>
      </ul>`,
    tags: [
      "CIPM",
      "Essay Competition",
      "Undergraduate",
      "Nigeria",
      "Education",
      "2026",
    ],
  },
  {
    id: "northwest-university-kano-ijmb-admission-2026-2027",
    title: "Northwest University Kano Opens 2026/2027 IJMB Admission Application",
    category: "Education",
    date: "2026-05-08",
    excerpt: "Northwest University has commenced the sale of application forms for its one-year IJMB programme for the 2026/2027 academic session through the Institute of Continuing Education.",
    content:
      `<h2>Northwest University Kano Opens 2026/2027 IJMB Admission Application</h2>
      <p>Northwest University has commenced the sale of application forms for its one-year IJMB programme for the 2026/2027 academic session through the Institute of Continuing Education.</p>
      <p>According to the university, the application form became available on <strong>4 May 2026</strong>, while the deadline for submission is <strong>26 July 2026</strong>.</p>
      <p>The IJMB programme provides candidates with an alternative route to gain Direct Entry admission into 200 Level in universities across Nigeria after successful completion of the programme and examination.</p>
      <p>The university also stated that qualified candidates may secure admission into Northwest University, Kano, through the Institute of Continuing Education.</p>
      <hr>
      <h2>O’Level Requirements for NWU Kano IJMB Admission</h2>
      <p>Applicants must possess at least five O’level credit passes. The credits must include either Mathematics or English Language, while acceptable examination bodies include:</p>
      <ul>
        <li>WAEC</li>
        <li>NECO</li>
        <li>NABTEB</li>
        <li>MBAIS</li>
      </ul>
      <p>Candidates are advised to confirm that their O’level subjects match their intended course of study before completing the application process.</p>
      <hr>
      <h2>NWU Kano IJMB Subject Combinations</h2>
      <p>The IJMB programme offers subject combinations across science, humanities, social sciences and management sciences.</p>
      <h3>Science Subjects</h3>
      <ul>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Physics</li>
        <li>A’Level Mathematics</li>
        <li>Geography</li>
      </ul>
      <h3>Humanities Subjects</h3>
      <ul>
        <li>Government</li>
        <li>Literature</li>
        <li>Islamic Studies</li>
        <li>Hausa</li>
        <li>Arabic</li>
        <li>Sociology</li>
      </ul>
      <h3>Social and Management Science Subjects</h3>
      <ul>
        <li>Accounting</li>
        <li>Economics</li>
        <li>Business Management</li>
        <li>Geography</li>
      </ul>
      <hr>
      <h2>Courses Candidates Can Study After IJMB</h2>
      <p>A successful IJMB result can be used to apply for Direct Entry admission into several undergraduate programmes depending on the candidate’s subject combination and university requirements.</p>
      <br>
      <h3>Social and Management Science Courses</h3>
      <p>Possible courses include: Accounting, Business Administration, Economics, Public Administration, Banking and Finance, and Marketing.</p>
      <h3>Arts and Humanities Courses</h3>
      <p>Candidates may also pursue programmes such as: Sociology, Political Science, International Studies, Mass Communication, Arabic, Hausa, Islamic Studies, and Law.</p>
      <h3>Science and Medical Courses</h3>
      <p>Science candidates may use the IJMB result for admission into: Medicine, Veterinary Medicine, Pharmacy, Nursing, Medical Laboratory Sciences, Biochemistry, Microbiology, Agricultural Science, Engineering, Textile Science and Technology, Geophysics, Archaeology, and Computer Science.</p>
      <br>
      <hr>
      <h2>How to Apply for NWU Kano IJMB Admission</h2>
      <p>Interested applicants are expected to begin the application through the Northwest University website or directly through the NWU IJMB application portal by following these steps:</p>
      <ol>
        <li>Open the application portal and click on <strong>“Applicant”</strong>.</li>
        <li>Enter a valid email address.</li>
        <li>Retrieve the verification code sent to the email.</li>
        <li>Return to the portal and enter the verification code.</li>
        <li>Print the payment invoice.</li>
        <li>Make payment through a bank or the Nabroll gateway.</li>
        <li>Return to the portal for payment verification.</li>
        <li>Log in with the application number and email address to complete the application.</li>
      </ol>
      <p><strong>Note:</strong> Applicants without an active email address are advised to create one before starting the process, since the verification code will be sent through email.</p>
      <hr>
      <h2>NWU Kano IJMB Enquiry Contacts</h2>
      <p>For further enquiries, applicants may contact: <strong>08065495093</strong> or <strong>08122302555</strong>.</p>`,
    tags: ["NWU", "Kano", "IJMB", "Admission", "Direct Entry", "Education", "Nigeria", "2026"],
  },
  {
    id: "neco-transition-to-computer-based-testing-cbt-announcement",
    title: "Federal Government Announces NECO Transition to Computer-Based Testing",
    category: "Education",
    date: "2026-05-08",
    excerpt: "The National Examinations Council will begin moving its examinations to Computer-Based Testing (CBT) this year, following a new directive announced by the Federal Government.",
    content:
      `<h2>Federal Government Announces NECO Transition to Computer-Based Testing</h2>
      <p>The National Examinations Council will begin moving its examinations to Computer-Based Testing (CBT) this year, following a new directive announced by the Federal Government.</p>
      <p>The update was revealed by Tunji Alausa during NECO’s 25th anniversary celebration held in Abuja on Thursday. According to the Minister, the transition forms part of broader education reforms aimed at improving the credibility, security and reliability of public examinations across Nigeria.</p>
      <hr>
      <h2>NECO to Begin CBT Examinations This Year</h2>
      <p>The Federal Government confirmed that NECO will gradually introduce computer-based examinations starting this year. The move places the examination body on a new path for test administration, especially as more national examinations continue to adopt digital systems.</p>
      <p>Candidates preparing for future NECO examinations are therefore expected to begin familiarising themselves with computer-based testing methods and digital examination environments.</p>
      <hr>
      <h2>Why the Government Is Introducing CBT for NECO</h2>
      <p>The Minister of Education explained that the transition to CBT is mainly intended to reduce examination malpractice and improve monitoring during examinations. According to him, computer-based examinations will allow authorities to:</p>
      <ul>
        <li>Monitor candidates in real time</li>
        <li>Detect suspicious activities faster</li>
        <li>Reduce fraud during examinations</li>
        <li>Strengthen examination security nationwide</li>
      </ul>
      <p>The Federal Government believes the system will improve public confidence in national assessments and make examination processes more transparent.</p>
      <hr>
      <h2>NECO Now Operates in Eight Countries</h2>
      <p>NECO Registrar, Dantani Wushishi, disclosed that NECO examinations are now conducted in eight countries. He described the expansion as evidence of growing international recognition and acceptance of NECO certificates.</p>
      <p>He further highlighted several digital reforms introduced by the council, including digital verification systems, electronic certificates, e-library services, and data analytics platforms.</p>
      <hr>
      <h2>What NECO Candidates Should Expect</h2>
      <p>With the planned transition to CBT, candidates are expected to prepare for changes in the way future NECO examinations will be conducted. Students preparing for upcoming NECO examinations may need to improve their computer literacy and become more comfortable with digital testing platforms ahead of the rollout.</p>`,
    tags: ["NECO", "CBT", "Federal Government", "Education Reform", "Digital Testing", "Nigeria", "2026"],
  },
  {
    id: "ecwa-college-of-nursing-post-utme-2026-2027",
    title: "ECWA College of Nursing Sciences Opens 2026/2027 Post UTME Application for ND Nursing Admission",
    category: "Education",
    date: "2026-05-07",
    excerpt: "ECWA College of Nursing Sciences (ECONS) has announced the commencement of its Post UTME application for admission into the National Diploma (ND) Nursing Programme for the 2026/2027 academic session.",
    content:
      `<h2>ECWA College of Nursing Sciences Opens 2026/2027 Post UTME Application for ND Nursing Admission</h2>
      <p>ECWA College of Nursing Sciences (ECONS) has officially announced the commencement of its Post UTME application for admission into the National Diploma (ND) Nursing Programme for the 2026/2027 academic session.</p>
      <p>The admission exercise is open to qualified candidates who meet the institution’s O’level, UTME, age, and JAMB choice requirements. Applicants are advised to carefully review all conditions before completing the online application.</p>
      <hr>
      <h2>Admission Requirements for ND Nursing</h2>
      <p>Candidates applying for the ND Nursing Programme must possess at least five credit passes in relevant O’level subjects, obtained in not more than two sittings from WAEC, NECO, or NABTEB:</p>
      <ul>
        <li>Mathematics</li>
        <li>English Language</li>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Physics</li>
      </ul>
      <p>Additionally, applicants are required to score a minimum aggregate of <strong>170</strong> in the 2026 UTME. The approved subject combination includes Use of English, Biology, Chemistry, and Physics.</p>
      <hr>
      <h2>JAMB First Choice and Age Requirements</h2>
      <p>Candidates must select ECWA College of Nursing Sciences, Egbe (ECONS) as their first-choice institution in JAMB. Those who did not initially choose ECONS must complete a change of institution on or before <strong>16 September 2026</strong>.</p>
      <p>Applicants must also be at least 16 years old by 30 September 2026. The institution stressed that candidates should confirm their date of birth before submitting the application form.</p>
      <hr>
      <h2>How to Apply for ECONS Post UTME</h2>
      <p>Applications are to be completed online through the college’s application portal. The process involves creating an account, following the portal instructions, and completing the application form. Login details will be sent to the email address provided during registration.</p>
      <h3>Application Fee and Payment Procedure</h3>
      <p>Applicants are required to pay a non-refundable application fee. The college instructs candidates to select the <strong>“Bank Transfer”</strong> option during payment to generate a virtual account. <strong>Note:</strong> USSD, card, eNaira, and cash payments are not accepted.</p>
      <hr>
      <h2>Important Dates for Applicants</h2>
      <ul>
        <li><strong>Application Portal Closing Date:</strong> 14 August 2026</li>
        <li><strong>CBT Examination Date:</strong> 16 September 2026 (9:00 AM at the College premises)</li>
        <li><strong>Screening and Credential Verification:</strong> 17 September 2026 (9:00 AM)</li>
      </ul>
      <p>Candidates are expected to arrive at least 30 minutes before the examination begins and bring original copies of their credentials for verification during the screening exercise.</p>
      <hr>
      <h2>Contact Details for Enquiries</h2>
      <p>For further assistance, applicants can contact the college via email at <strong><a href="mailto:econs.infotech@gmail.com">econs.infotech@gmail.com</a></strong> or call the following numbers:</p>
      <ul>
        <li>08119420462</li>
        <li>09061138504</li>
        <li>08075760481</li>
        <li>08035915623</li>
      </ul>`,
    tags: ["ECWA", "Nursing", "Post UTME", "Admission", "ND Nursing", "2026", "Egbe"],
  },
  {
    id: "oscoms-post-utme-2026-2027",
    title: "OSCOMS Opens 2026/2027 Post UTME Application for ND Full-Time Admission",
    category: "Education",
    date: "2026-05-07",
    excerpt: "Osun College of Management Sciences (OSCOMS) has commenced its 2026/2027 Post UTME admission exercise for candidates seeking admission into its National Diploma (ND) full-time programmes.",
    content:
      `<h2>OSCOMS Opens 2026/2027 Post UTME Application for ND Full-Time Admission</h2>
      <p>Osun College of Management Sciences, popularly known as OSCOMS, has commenced its 2026/2027 Post UTME admission exercise for candidates seeking admission into its National Diploma (ND) full-time programmes.</p>
      <p>The admission form is open to candidates who sat for the 2026 Unified Tertiary Matriculation Examination (UTME) and wish to study any of the institution’s NBTE-accredited courses across its Schools of Law, Management Sciences, and Health Technology.</p>
      <p>According to the college, each programme has its own minimum JAMB score requirement, making it important for applicants to confirm eligibility before starting the application process.</p>
      <hr>
      <h2>OSCOMS ND Courses and Cut-Off Marks</h2>
      <h3>School of Law and Management Sciences</h3>
      <p>The following programmes are available under the School of Law and Management Sciences:</p>
      <ul>
        <li>ND Law – <strong>140</strong></li>
        <li>ND Mass Communication – <strong>100</strong></li>
        <li>ND Business Administration – <strong>100</strong></li>
        <li>ND Accountancy – <strong>100</strong></li>
        <li>ND Public Administration – <strong>100</strong></li>
        <li>ND Marketing – <strong>100</strong></li>
        <li>ND Computer Science – <strong>100</strong></li>
      </ul>
      <p>The institution also announced scholarship opportunities for students applying to ND Public Administration and ND Marketing.</p>
      <h3>School of Health Technology Courses</h3>
      <p>The School of Health Technology offers the following ND programmes:</p>
      <ul>
        <li>ND Community Health Technology – <strong>120</strong></li>
        <li>ND Medical Laboratory Technology – <strong>120</strong></li>
        <li>ND Public Health Technology – <strong>120</strong></li>
        <li>ND Paramedics – <strong>120</strong></li>
        <li>ND Science Laboratory Technology – <strong>120</strong></li>
        <li>ND Health Information Management – <strong>120</strong></li>
        <li>ND Pharmacy Technology – Accreditation in progress; admission begins soon</li>
      </ul>
      <p>Scholarship opportunities are also available for students applying to ND Health Information Management.</p>
      <hr>
      <h2>OSCOMS Scholarship Opportunity for Early Applicants</h2>
      <p>OSCOMS disclosed that tuition scholarships will be awarded to the first 100 students who complete registration in selected departments.</p>
      <p>The scholarship offer applies to candidates admitted into:</p>
      <ul>
        <li>ND Marketing</li>
        <li>ND Public Administration</li>
        <li>ND Health Information Management</li>
      </ul>
      <p>The college stated that the scholarship slots are limited and will be awarded on a first-come, first-served basis, subject to terms and conditions.</p>
      <hr>
      <h2>Why Students Choose OSCOMS</h2>
      <p>The institution highlighted several reasons why candidates continue to choose OSCOMS for their tertiary education.</p>
      <p>Some of the benefits listed by the college include:</p>
      <ul>
        <li>NBTE-accredited programmes</li>
        <li>Experienced and qualified lecturers</li>
        <li>Conducive learning environment at the permanent campus along Akure Expressway, Ipetu Ijesha</li>
        <li>Eligibility for NYSC mobilisation after graduation</li>
        <li>Affordable tuition fees with flexible payment plans</li>
        <li>Scholarship opportunities for early applicants</li>
      </ul>
      <hr>
      <h2>How to Apply for OSCOMS Post UTME 2026/2027</h2>
      <p>Interested candidates are advised to apply through the OSCOMS Post UTME admission portal.</p>
      <p>Applicants can also select OSCOMS as their institution of choice through the JAMB portal.</p>
      <p>Candidates who require assistance regarding the application process, screening schedule, scholarship opportunities, or tuition fees can contact the OSCOMS Admission Office through the numbers below.</p>
      <hr>
      <h2>OSCOMS Admission Office Contact Details</h2>
      <ul>
        <li><strong>08130637625</strong></li>
        <li><strong>08102710300</strong></li>
        <li><strong>08142506541</strong></li>
      </ul>`,
    tags: ["OSCOMS", "Post UTME", "Admission", "ND", "Scholarship", "Education", "Nigeria", "2026", "2027"],
  },
  {
    id: "funato-official-university-anthem-competition-2026",
    title: "FUNATO Invites Students to Compose Official University Anthem",
    category: "Education",
    date: "2026-04-29",
    excerpt: "The Federal University of Agriculture and Technology, Okeho (FUNATO) is calling for student entries to compose its official anthem, with prizes up to ₦250,000.",
    content:
      `<h2>FUNATO Invites Students to Compose Official University Anthem</h2>
      <p>The Federal University of Agriculture and Technology, Okeho (FUNATO), has announced a call for entries from students to create its official university anthem. The decision, approved by the university Senate, opens the door for creative students to contribute a lasting piece to the institution’s identity.</p>
      <p>This opportunity is open to students with talent in writing, music composition, or both. The selected entry will become the official anthem of the university, making this a rare chance to leave a permanent mark on FUNATO’s history.</p>
      <hr>
      <h2>What FUNATO is Looking For</h2>
      <p>FUNATO is inviting submissions in the form of:</p>
      <ul>
        <li><strong>Written compositions (lyrics)</strong></li>
        <li><strong>Voice compositions (recorded anthem)</strong></li>
        <li>Or a <strong>combination of both</strong></li>
      </ul>
      <p>Students are encouraged to submit original and well-prepared entries that reflect the values and spirit of the university. All submissions will be reviewed by a dedicated panel set up by the institution.</p>
      <hr>
      <h2>How to Submit Your Entry</h2>
      <p>All entries should be directed to the <strong>Dean of Students, Professor Luqman Akinbile</strong>.</p>
      <p>Submissions must be sent via WhatsApp using the official number below:</p>
      <ul>
        <li><strong>0802 325 0454</strong></li>
      </ul>
      <p>Applicants are advised to ensure their submissions are clear, polished, and properly presented, as unclear audio or poorly written text may affect the chances of selection.</p>
      <hr>
      <h2>Prizes for Winning Entries</h2>
      <p>FUNATO has announced cash rewards for the top three entries:</p>
      <ul>
        <li><strong>1st Prize:</strong> ₦250,000</li>
        <li><strong>2nd Prize:</strong> ₦200,000</li>
        <li><strong>3rd Prize:</strong> ₦150,000</li>
      </ul>
      <p>The best overall entry will be adopted as the official university anthem.</p>
      <hr>
      <h2>Submission Deadline</h2>
      <p>The deadline for all entries is:</p>
      <p><strong>Friday, 8 May 2026 (close of work)</strong></p>
      <p>Students interested in participating are encouraged to submit their entries on time. Late submissions will not be accepted, regardless of quality.</p>
      <hr>
      <h2>Final Note</h2>
      <p>This competition is more than just a contest—it is a chance to contribute creatively to FUNATO’s legacy. Students with a passion for music, writing, or both should take advantage of this opportunity and submit their best work before the deadline.</p>`,
    tags: ["FUNATO", "University Anthem", "Competition", "Education", "Nigeria", "Music", "Writing"],
  },
  {
    id: "michael-olusoji-foundation-scholarship-2026",
    title: "Michael Olusoji Foundation Scholarship 2026 Opens for Nigerian Students",
    category: "Scholarship",
    date: "2026-04-29",
    excerpt: "The Michael Olusoji Foundation has opened applications for its 2026 scholarship programme, offering grants and mentorship to aspirants and undergraduates in Nigerian federal universities.",
    content:
      `<h2>Michael Olusoji Foundation Scholarship 2026 Opens for Nigerian Students</h2>
      <p>The Michael Olusoji Foundation has officially opened applications for its 2026 scholarship programme, offering financial support to Nigerian students with strong academic potential who are facing financial challenges.</p>
      <p>This initiative is designed to help students stay on track with their education by providing not just funding, but also mentorship and access to a supportive academic community.</p>
      <hr>
      <h2>Who the Scholarship is For</h2>
      <p>The scholarship targets two categories of students:</p>
      <ul>
        <li><strong>Aspirants</strong> – students preparing to gain admission into federal universities in Nigeria</li>
        <li><strong>Undergraduates</strong> – students already studying in Nigerian federal universities</li>
      </ul>
      <p>For many students, financial difficulties can delay or even derail academic plans. This scholarship aims to bridge that gap by supporting talented individuals who are determined to succeed despite limited resources.</p>
      <hr>
      <h2>Eligibility Criteria for Aspirants</h2>
      <p>Students applying under the aspirant category must meet the following requirements:</p>
      <ul>
        <li>Must be seeking admission into a federal university in Nigeria</li>
        <li>Must have at least <strong>five (5) O’Level credits</strong>, including <strong>English Language and Mathematics</strong></li>
        <li>Must have a <strong>JAMB score of 250 or above</strong></li>
        <li>Must be available to attend the scholarship conference and award event if selected</li>
      </ul>
      <p><strong>Award Details:</strong></p>
      <ul>
        <li>₦50,000 grant</li>
        <li>Only <strong>10 applicants</strong> will be selected</li>
      </ul>
      <hr>
      <h2>Eligibility Criteria for Undergraduates</h2>
      <p>Applicants in this category must:</p>
      <ul>
        <li>Be currently enrolled in a <strong>federal university in Nigeria</strong></li>
        <li>Have a <strong>minimum CGPA of 3.5 on a 5.0 scale</strong></li>
        <li>Demonstrate strong academic performance</li>
        <li>Be available for the scholarship conference and award event if selected</li>
      </ul>
      <p><strong>Award Details:</strong></p>
      <ul>
        <li>₦40,000 grant</li>
        <li>Only <strong>10 students</strong> will be selected</li>
      </ul>
      <hr>
      <h2>Scholarship Benefits</h2>
      <p>Beyond the financial support, the Michael Olusoji Foundation Scholarship offers:</p>
      <ul>
        <li>Funding to support essential academic needs</li>
        <li>Mentorship and academic guidance</li>
        <li>Access to a network of like-minded, high-achieving students</li>
      </ul>
      <p>This combination of financial aid and community support makes the programme especially valuable for students navigating academic and personal challenges.</p>
      <hr>
      <h2>How to Apply</h2>
      <p>Applicants are required to apply based on their category by completing the relevant Scholarship Application Form. For more information about the programme, applicants can visit the official Michael Olusoji Foundation page.</p>
      <hr>
      <h2>Application Deadline</h2>
      <p>The deadline for submission is <strong>30 May 2026</strong>. Interested and qualified candidates are encouraged to apply early, as late applications will not be considered.</p>
      <hr>
      <h2>Contact Information</h2>
      <p>For enquiries or further clarification, applicants can reach out via email: <strong><a href="mailto:themichaelolusojifoundation@gmail.com">themichaelolusojifoundation@gmail.com</a></strong></p>
      <hr>
      <p>This scholarship presents a valuable opportunity for Nigerian students to ease financial burdens while gaining access to mentorship and a supportive academic network. Eligible candidates should take advantage of this chance and apply before the deadline.</p>`,
    tags: ["Scholarship", "Michael Olusoji Foundation", "Education", "Nigeria", "Undergraduate", "Aspirant"],
  },
  {
    id: "yabatech-extends-registration-screening",
    title: "YABATECH Extends Registration and Screening by One Week",
    category: "Education",
    date: "2026-04-29",
    excerpt: "Yaba College of Technology (YABATECH) has approved a one-week extension for its registration and screening exercise, effective from Monday, 27 April 2026, with a late registration penalty fee.",
    content:
      `<h2>YABATECH Extends Registration and Screening by One Week</h2>
      <p>Yaba College of Technology (YABATECH) has approved a one-week extension for its registration and screening exercise, effective from <strong>Monday, 27 April 2026</strong>.</p>
      <p>However, the extension comes with a condition: affected students must pay a <strong>late registration penalty fee of ₦20,000</strong> to complete the process.</p>
      <br>
      <h3>Late Registration Fee Requirement</h3>
      <p>According to the college management, students who are yet to complete their registration and screening must pay the stated penalty before they can proceed.</p>
      <p>The institution made it clear that this extension is strictly tied to the payment of the late fee. Students are advised to act quickly, as failure to meet this requirement may affect access to lectures and official student records.</p>
      <br>
      <h3>Strict Directive on Matric Numbers</h3>
      <p>The college has issued a firm directive to Heads of Department (HODs):</p>
      <ul>
        <li>Students attending lectures without matric numbers must be sent out of classrooms</li>
        <li>This directive takes immediate effect</li>
      </ul>
      <p>This means that only properly registered students with valid matric numbers will be allowed to attend lectures going forward.</p>
      <br>
      <h3>CITM to Publish Names of Unregistered Students</h3>
      <p>The Centre for Information Technology and Management (CITM) has been instructed to publish the names of students who have not completed their registration.</p>
      <p>This move is aimed at identifying and notifying affected students. While no separate checking process was announced, CITM will handle the release of this information.</p>
      <br>
      <h3>Who This Affects</h3>
      <p>This update applies to:</p>
      <ul>
        <li>Students who have not completed registration and screening</li>
        <li>Students currently attending lectures without matric numbers</li>
        <li>Heads of Department responsible for enforcing the directive</li>
        <li>CITM, which will publish the list of unregistered students</li>
      </ul>
      <p>All affected individuals are expected to treat the notice with urgency.</p>
      <hr>
      <p>YABATECH’s decision signals a stricter enforcement of registration compliance, making it essential for students to complete all required processes within the extended period to avoid academic disruptions.</p>`,
    tags: [
      "YABATECH",
      "Registration",
      "Screening",
      "Education",
      "Nigeria",
      "2026",
      "College",
    ],
  },
  {
    id: "lasustech-nuc-accreditation-2025",
    title: "LASUSTECH Secures Full Accreditation for 13 Programmes in 2025 NUC Exercise",
    category: "Education",
    date: "2026-04-29",
    excerpt: "Lagos State University of Science and Technology (LASUSTECH) achieved full NUC accreditation for 13 out of 14 undergraduate programmes in its 2025 exercise, with one receiving interim status.",
    content:
      `<h2>LASUSTECH Secures Full Accreditation for 13 Programmes in 2025 NUC Exercise</h2>
      <p>The Lagos State University of Science and Technology (LASUSTECH) has announced the outcome of its 2025 undergraduate programme accreditation conducted by the National Universities Commission (NUC).</p>
      <p>According to the Vice-Chancellor, Olumuyiwa Omotola Odusanya, the university recorded an impressive result, with <strong>13 out of 14 programmes receiving full accreditation</strong>, while only one programme was granted interim status.</p>
      <p>For students, parents, and stakeholders, this outcome reinforces the university’s growing academic standing and commitment to quality education.</p>
      <hr>
      <h2>Fully Accredited Programmes by College</h2>
      <p>LASUSTECH presented programmes across five colleges, and the majority earned full accreditation status.</p>
      <h3>College of Basic Sciences</h3>
      <ul>
        <li>Industrial Mathematics – Full Accreditation</li>
      </ul>
      <h3>College of Applied Social Sciences</h3>
      <ul>
        <li>Insurance – Full Accreditation</li>
        <li>Tourism and Hospitality Management – Full Accreditation</li>
      </ul>
      <h3>College of Environmental Design and Technology</h3>
      <ul>
        <li>Estate Management and Valuation – Full Accreditation</li>
        <li>Quantity Surveying – Full Accreditation</li>
        <li>Building Technology – Full Accreditation</li>
        <li>Urban and Regional Planning – Full Accreditation</li>
      </ul>
      <h3>College of Engineering and Technology</h3>
      <ul>
        <li>Food Science and Bio-Technology – Full Accreditation</li>
        <li>Agriculture and Biosystems Engineering – Full Accreditation</li>
        <li>Civil and Construction Engineering – Full Accreditation</li>
        <li>Computer Engineering – Full Accreditation</li>
        <li>Mechanical Engineering – Full Accreditation</li>
        <li>Mechatronics Engineering – Full Accreditation</li>
      </ul>
      <hr>
      <h2>Programme with Interim Accreditation</h2>
      <p>Only one programme received interim accreditation:</p>
      <ul>
        <li><strong>Electrical and Electronics Engineering</strong></li>
      </ul>
      <p>While not a full accreditation, interim status still allows the programme to continue running, with improvements expected before the next review by the National Universities Commission.</p>
      <hr>
      <h2>Additional Accreditation: Architecture</h2>
      <p>Beyond the NUC exercise, LASUSTECH also secured <strong>full accreditation for Architecture</strong> from the Architects Registration Council of Nigeria (ARCON).</p>
      <p>Although separate from the NUC process, this achievement adds to the university’s overall academic credibility.</p>
      <hr>
      <h2>LASUSTECH’s Growing Accreditation Record</h2>
      <p>With this latest result, LASUSTECH revealed that it has now recorded success across <strong>all 39 programmes</strong> presented for accreditation since its establishment.</p>
      <p>Notably, the university stated that <strong>no programme has failed accreditation so far</strong>, a strong indicator of consistent academic quality for a relatively young institution.</p>
      <hr>
      <h2>Vice-Chancellor Commends Staff and Students</h2>
      <p>Speaking on the achievement, Olumuyiwa Omotola Odusanya commended both staff and students for their roles in the successful accreditation exercise.</p>
      <p>He also encouraged the university community to build on this success as preparations begin for the <strong>2026 accreditation cycle</strong>.</p>
      <hr>
      <h2>What This Means for Students</h2>
      <p>For prospective and current students, accreditation remains a key factor when choosing a course or institution. The strong performance by LASUSTECH in the 2025 exercise provides reassurance that its programmes meet national academic standards set by the National Universities Commission.</p>
      <p>As the university continues to expand and strengthen its offerings, this result positions LASUSTECH as a competitive option within Nigeria’s higher education landscape.</p>`,
    tags: [
      "LASUSTECH",
      "NUC",
      "Accreditation",
      "Education",
      "Nigeria",
      "2025",
      "University",
    ],
  },
  {
    id: "nnpc-nae-psc-postgraduate-scholarship-2026-2027",
    title: "NNPC/NAE PSC Postgraduate Scholarship Scheme (2026/2027)",
    category: "Scholarship",
    date: "2026-04-28",
    excerpt: "An opportunity for outstanding Nigerian graduates to pursue a fully funded one-year Master’s degree locally or overseas.",
    content:
      `<h2>NNPC/NAE PSC Postgraduate Scholarship Scheme (2026/2027)</h2>
      <p>The Nigerian National Petroleum Company Limited (NNPC) and Nigerian Agip Exploration Limited (NAE) are offering an opportunity for outstanding Nigerian graduates to pursue a fully funded one-year Master’s degree locally or overseas.</p>
      <p>This scholarship scheme is part of the NNPC/NAE PSC Corporate Social Responsibility (CSR) initiative, aimed at promoting academic excellence and manpower development in Nigeria’s oil and gas industry.</p>
      <br>
      <h3>Key Requirements</h3>
      <p>To be eligible for the scholarship, applicants must meet the following criteria:</p>
      <ul>
        <li>Possess a minimum of <strong>Second Class Upper (2.1)</strong> degree in a relevant field.</li>
        <li>Have secured <strong>admission into a recognised university</strong> for a one-year Master’s degree programme.</li>
        <li>Must have <strong>completed the National Youth Service Corps (NYSC)</strong> programme.</li>
        <li>Must <strong>not be above 28 years of age</strong> by December 31, 2026.</li>
      </ul>
      <br>
      <h3>Eligible Fields of Study</h3>
      <p>The scholarship is available for candidates pursuing a Master's degree in the following fields:</p>
      <ul>
        <li>Geosciences</li>
        <li>Engineering</li>
        <li>Petroleum Economics</li>
        <li>Oil & Gas Law</li>
      </ul>
      <br>
      <h3>How to Apply</h3>
      <p>Interested and qualified candidates are invited to apply online through the official application portal.</p>
      <p><strong>Apply here:</strong> <a href="https://candidate.scholastica.ng/schemes/thennpcltdnaescholarships2026" target="_blank" rel="noopener noreferrer">NNPC/NAE Scholarship Application Portal</a></p>
      <br>
      <p>Ensure you review all requirements and have your documents ready before starting the application. This is a prestigious opportunity to advance your academic career with full financial support.</p>`,
    tags: [
      "NNPC",
      "NAE",
      "Scholarship",
      "Postgraduate",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "eksu-nuc-accreditation-three-additional-programmes-2026",
    title: "EKSU Secures Full NUC Accreditation for Three Additional Programmes",
    category: "Education",
    date: "2026-04-26",
    excerpt: "Ekiti State University (EKSU), Ado Ekiti, has received full accreditation from the National Universities Commission (NUC) for three more academic programmes: Nursing Science, Adult Education, and Education English Language.",
    content:
      `<h2>EKSU Secures Full NUC Accreditation for Three Additional Programmes</h2>
      <p>Ekiti State University (EKSU), Ado Ekiti, has received <strong>full accreditation</strong> from the National Universities Commission (NUC) for three more academic programmes.</p>
      <p>The approval followed the commission’s October/November 2025 accreditation exercise, where NUC experts assessed the programmes based on staffing, facilities, and compliance with minimum academic standards.</p>
      <br>
      <h3>Newly Accredited Programmes</h3>
      <p>The programmes granted full accreditation are:</p>
      <ul>
        <li>Nursing Science</li>
        <li>Adult Education</li>
        <li>Education English Language</li>
      </ul>
      <p>According to the NUC, the accreditation status for these programmes will remain valid for <strong>five years</strong>, after which they will be due for reaccreditation.</p>
      <br>
      <h3>Details of the Approval</h3>
      <p>The accreditation was conveyed in an official letter dated <strong>7 April 2026</strong>, addressed to the Vice-Chancellor of EKSU. The letter was signed by the NUC Director of Accreditation, Engr. Abraham Chundusu, on behalf of the Executive Secretary.</p>
      <p>The evaluation focused on both human and material resources available for the programmes, ensuring they meet national benchmarks for university education.</p>
      <br>
      <h3>Vice-Chancellor Reacts</h3>
      <p>The Vice-Chancellor of EKSU, Joseph Babatola Ayodele, expressed satisfaction with the outcome.</p>
      <p>He commended the Executive Secretary of the NUC for the approval and noted that the accreditation aligns with the university’s commitment to academic excellence.</p>
      <p>He also acknowledged the support of Biodun Abayomi Oyebanji, Governor of Ekiti State and Visitor to the University, as well as the institution’s Governing Council and Senate for their contributions to the process.</p>
      <br>
      <h3>EKSU’s Accreditation Profile Improves</h3>
      <p>With the addition of these three programmes, EKSU’s total number of fully accredited programmes has increased from <strong>76 to 79</strong>.</p>
      <p>The university stated that this represents <strong>100% full accreditation status</strong> across its listed programmes, further strengthening its academic reputation.</p>
      <br>
      <h3>What This Means for Students</h3>
      <p>The full accreditation confirms that the affected programmes meet the standards set by the NUC and are officially recognised for a five-year period.</p>
      <p>For prospective students, especially those interested in Nursing Science and education-related courses, this update provides assurance about the quality and recognition of these programmes.</p>
      <br>
      <p>The latest accreditation milestone reinforces EKSU’s position as a competitive institution in Nigeria’s higher education system, with a growing record of fully approved academic programmes.</p>`,
    tags: [
      "EKSU",
      "Ekiti State University",
      "NUC",
      "Accreditation",
      "Nursing Science",
      "Adult Education",
      "Education English Language",
      "2026",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "uuth-college-of-community-health-admission-2026-2027",
    title: "UUTH Opens Admission into College of Community Health for 2026/2027 Session",
    category: "Education",
    date: "2026-04-26",
    excerpt: "University of Uyo Teaching Hospital (UUTH) has announced the sale of application forms for admission into its College of Community Health for the 2026/2027 academic session.",
    content:
      `<h2>UUTH Opens Admission into College of Community Health for 2026/2027 Session</h2>
      <p>University of Uyo Teaching Hospital (UUTH) has announced the sale of application forms for admission into its College of Community Health for the 2026/2027 academic session.</p>
      <p>Interested applicants are advised to review the admission requirements, application fees, programme duration, and deadline before purchasing the form.</p>
      <br>
      <h3>Available Programme</h3>
      <p>The admission is open to candidates with a background in community health, as well as degree holders in selected health-related fields.</p>
      <p>A special <strong>one-year programme</strong> is also available for qualified degree holders.</p>
      <br>
      <h3>Admission Requirements</h3>
      <p>Applicants must meet the following academic and professional criteria:</p>
      <br>
      <h4>Basic Qualification</h4>
      <p>Candidates must possess either:</p>
      <ul>
        <li>Diploma in Community Health</li>
        <li>Community Health Extension Workers (CHEW) Certificate</li>
      </ul>
      <br>
      <h4>O’Level Requirements</h4>
      <p>Applicants must have at least five credit passes in:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Physics</li>
      </ul>
      <p>Results must be obtained in not more than two sittings from SSCE, WASCE, NECO, or GCE.</p>
      <br>
      <h4>Professional Registration</h4>
      <p>Applicants must:</p>
      <ul>
        <li>Be registered with the Community Health Practitioners Registration Board of Nigeria</li>
        <li>Hold a valid practising licence</li>
      </ul>
      <br>
      <h3>One-Year Programme for Degree Holders</h3>
      <p>Candidates with a first degree in Health Education, Community Health, or Public Health can apply for the <strong>one-year programme</strong>, designed specifically for degree holders seeking further professional training.</p>
      <br>
      <h3>Application Fee and Programme Duration</h3>
      <br>
      <h4>Degree Holders</h4>
      <ul>
        <li><strong>Application Fee:</strong> ₦15,000</li>
        <li><strong>Duration:</strong> 1 academic session</li>
      </ul>
      <br>
      <h4>Non-Degree Holders</h4>
      <ul>
        <li><strong>Application Fee:</strong> ₦10,000</li>
        <li><strong>Duration:</strong> 2 academic sessions</li>
      </ul>
      <br>
      <h3>How to Apply</h3>
      <p>Applicants should obtain the application form directly from:</p>
      <ul>
        <li><strong>College of Community Health, University of Uyo Teaching Hospital, Uyo</strong></li>
      </ul>
      <p><strong>Important:</strong> Candidates must present their <strong>purchase receipt</strong> before the application form will be issued.</p>
      <br>
      <h3>Application Deadline</h3>
      <ul>
        <li><strong>Closing Date:</strong> Friday, 26 June 2026</li>
      </ul>
      <br>
      <h3>Entrance Examination</h3>
      <p>The date for the entrance examination has not yet been publicly announced. Shortlisted candidates will be contacted directly by the hospital with details of the examination.</p>
      <br>
      <p>Prospective applicants are encouraged to apply early and ensure all requirements are met to secure a place in the 2026/2027 admission cycle.</p>`,
    tags: ["UUTH", "University of Uyo Teaching Hospital", "Admission", "Community Health", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "bauchi-state-scholarship-deadline-extended-2026",
    title: "Bauchi State Scholarship Deadline Extended to 30 April 2026",
    category: "Scholarship",
    date: "2026-04-26",
    excerpt: "National Union of Bauchi State Students (NUBASS) has announced a new deadline for the 2026/2027 Bauchi State Scholarship application, extending it to April 30, 2026.",
    content:
      `<h2>Bauchi State Scholarship Deadline Extended to 30 April 2026</h2>
      <p>National Union of Bauchi State Students (NUBASS) has announced a new deadline for the 2026/2027 Bauchi State Scholarship application.</p>
      <p>The closing date has been extended from <strong>23 April 2026 to Thursday, 30 April 2026</strong>, giving eligible students additional time to complete and submit their applications.</p>
      <br>
      <h3>Reason for the Extension</h3>
      <p>According to NUBASS, the extension followed efforts by its National President, Muhammad Sulaiman Abdulwahab, with support from the Bauchi State Government.</p>
      <p>The union explained that the decision was influenced by feedback and appeals from students across various institutions. Many applicants experienced delays while trying to access the application portal or complete required documentation before the initial deadline.</p>
      <br>
      <h3>Who Should Apply Before the New Deadline</h3>
      <p>The extension applies to <strong>eligible Bauchi State students</strong> who have not yet submitted their scholarship applications.</p>
      <p>Students who fall into this category are advised to:</p>
      <ul>
        <li>Complete their applications before the new deadline</li>
        <li>Review their details carefully</li>
        <li>Ensure all required documents are properly uploaded</li>
      </ul>
      <p>This extension provides a <strong>final window</strong>, and applicants are urged not to delay further.</p>
      <br>
      <h3>What Happens After the Deadline</h3>
      <p>NUBASS stated that once the portal closes on <strong>30 April 2026</strong>, the relevant authorities will begin:</p>
      <ul>
        <li>Screening of applications</li>
        <li>Verification of submitted documents</li>
        <li>Assessment based on eligibility criteria</li>
      </ul>
      <p>All submitted applications will undergo the official review process in line with the scholarship guidelines.</p>
      <br>
      <h3>NUBASS Message to Students</h3>
      <p>The union encouraged all eligible students who are yet to apply to take advantage of the extended deadline and complete the process.</p>
      <p>It also commended the level of participation recorded so far and assured students that updates will be provided as the scholarship process progresses.</p>
      <br>
      <h3>Final Deadline Reminder</h3>
      <ul>
        <li><strong>New Closing Date:</strong> Thursday, 30 April 2026</li>
      </ul>
      <p>Eligible applicants are strongly advised to submit their forms before the portal closes, as late applications may not be considered.</p>
      <br>
      <p>This extension offers a final opportunity for Bauchi State students to benefit from the scholarship programme for the 2026/2027 academic session.</p>`,
    tags: [
      "Bauchi State",
      "Scholarship",
      "NUBASS",
      "Deadline Extension",
      "2026/2027",
      "Education",
      "Nigeria",
      "Students",
    ],
  },
  {
    id: "unidel-ijmb-foundation-school-admission-2026-2027",
    title: "UNIDEL Opens IJMB Foundation School Admission for 2026/2027 Session",
    category: "Education",
    date: "2026-04-26",
    excerpt: "University of Delta Agbor (UNIDEL) has announced the commencement of applications for its IJMB Foundation School programmes for the 2026/2027 academic session.",
    content:
      `<h2>UNIDEL Opens IJMB Foundation School Admission for 2026/2027 Session</h2>
      <p>University of Delta Agbor (UNIDEL) has announced the commencement of applications for its IJMB Foundation School programmes for the <strong>2026/2027 academic session</strong>.</p>
      <p>The IJMB programme serves as a pathway for candidates seeking admission into the university, offering an alternative route into undergraduate studies.</p>
      <br>
      <h3>Entry Requirements for UNIDEL IJMB Programme</h3>
      <p>Prospective applicants must meet the following conditions:</p>
      <br>
      <h4>O’Level Requirements</h4>
      <p>Candidates must have at least <strong>five credit passes</strong> in relevant subjects from any of the following examinations:</p>
      <ul>
        <li>SSCE</li>
        <li>NECO</li>
        <li>GCE O’Level</li>
      </ul>
      <p>All required credits must be obtained in <strong>not more than two sittings</strong>.</p>
      <br>
      <h4>JAMB Requirement</h4>
      <p>Applicants are also expected to meet other matriculation requirements set by the Joint Admissions and Matriculation Board (JAMB).</p>
      <br>
      <h3>How to Apply for UNIDEL IJMB Admission</h3>
      <p>Candidates applying for the first time should follow these steps carefully:</p>
      <ol>
        <li><strong>Get a Valid Email Address:</strong> Applicants must have an active and accessible email address. This will be used to receive login details such as application ID and password.</li>
        <li><strong>Fill in Required Details:</strong> Provide Name, Surname, Email address, and Phone number on the application portal. After submission, login details will be sent to the email provided.</li>
        <li><strong>Continue Application via Email Link:</strong> Open your email inbox, click the link sent to you, and continue your application on the portal.</li>
      </ol>
      <p>Applicants can complete their registration through the <a href="https://unidel.waeup.org/applicants/ijmb2026/register">official UNIDEL IJMB application portal</a>.</p>
      <br>
      <h3>Application Deadline</h3>
      <ul>
        <li><strong>Closing Date:</strong> Sunday, 31 May 2026</li>
      </ul>
      <p>Candidates are advised to complete their applications before the deadline to avoid disqualification or delays.</p>
      <br>
      <p>The UNIDEL IJMB Foundation School programme offers a structured route into university education, making it a suitable option for candidates seeking admission into degree programmes without direct entry through UTME.</p>`,
    tags: [
      "UNIDEL",
      "University of Delta",
      "Admission",
      "IJMB",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "rivers-state-university-postgraduate-admission-2026-2027",
    title: "Rivers Uni Opens Postgraduate Admission for 2026/2027 Academic Session",
    category: "Education",
    date: "2026-04-25",
    excerpt: "Rivers State University (RSU) has announced the commencement of applications for its postgraduate programmes for the 2026/2027 academic session across multiple faculties and institutes.",
    content:
      `<h2>Rivers Uni Opens Postgraduate Admission for 2026/2027 Academic Session</h2>
      <p>Rivers State University (RSU), Nkpolu-Oroworukwo, Port Harcourt, has announced the commencement of applications for its postgraduate programmes for the <strong>2026/2027 academic session</strong>.</p>
      <p>The university invites suitably qualified candidates to apply across a wide range of faculties, institutes, and specialised centres. While the application is completed online via the RSU eCampus portal, candidates are also required to submit hard copies of relevant documents after filling out the form.</p>
      <br>
      <h3>Available Postgraduate Programmes</h3>
      <p>The RSU postgraduate admission covers multiple academic and professional qualifications, offering flexible study pathways based on applicants’ academic background and career goals.</p>
      <p>Available programmes include:</p>
      <ul>
        <li>Postgraduate Diploma (PGD)</li>
        <li>Master’s Degrees (MSc, MEd, MA, MTech, LLM)</li>
        <li>Master of Philosophy (MPhil)</li>
        <li>Doctor of Philosophy (PhD)</li>
        <li>Professional Master’s and Doctorate Degrees</li>
      </ul>
      <br>
      <h3>Faculties Offering Postgraduate Programmes</h3>
      <p>Applicants can apply to programmes under the following faculties:</p>
      <ul>
        <li>Administration and Management</li>
        <li>Agriculture</li>
        <li>Basic Medical Sciences</li>
        <li>Clinical Sciences</li>
        <li>Communication and Media Studies</li>
        <li>Education</li>
        <li>Engineering</li>
        <li>Environmental Sciences</li>
        <li>Humanities</li>
        <li>Law</li>
        <li>Medical Laboratory Science</li>
        <li>Science</li>
        <li>Social Sciences</li>
      </ul>
      <br>
      <h3>Institutes and Specialised Centres</h3>
      <p>RSU also offers postgraduate study through dedicated institutes and centres, including:</p>
      <ul>
        <li>Water and Sanitation Studies</li>
        <li>Marine and Offshore Engineering</li>
        <li>Advanced Law Research</li>
        <li>Climate Change and Sustainable Development Studies</li>
        <li>Institute of Geosciences and Environmental Management</li>
        <li>Institute of Education</li>
      </ul>
      <p>Candidates are advised to carefully select programmes that align with their qualifications and long-term career plans.</p>
      <br>
      <h3>Application Fees</h3>
      <p>The cost of application varies by programme type:</p>
      <ul>
        <li><strong>Standard Postgraduate Programmes:</strong> ₦60,000</li>
        <li><strong>Sandwich Programmes:</strong> ₦50,000</li>
      </ul>
      <p>Payments are to be made using Interswitch Verve-enabled cards via the application portal.</p>
      <br>
      <h3>How to Apply</h3>
      <p>To apply for RSU postgraduate admission, candidates should:</p>
      <ol>
        <li>Visit the RSU postgraduate application portal.</li>
        <li>Complete the online application form.</li>
        <li>Make the required payment.</li>
        <li>Follow all instructions provided on the portal.</li>
      </ol>
      <p>After completing the online process, applicants must submit hard copies of required documents.</p>
      <br>
      <h3>Required Documents</h3>
      <p>Applicants are expected to provide the following:</p>
      <ul>
        <li>Completed online application form</li>
        <li>Copies of academic certificates</li>
        <li>Academic transcripts (sent directly from previous institutions)</li>
        <li>Three referee reports</li>
        <li>Research proposal (for PhD applicants only)</li>
      </ul>
      <blockquote>
        <p><strong>Important:</strong> Academic transcripts must be sent directly by previous institutions. Delays in transcript submission may affect application processing.</p>
      </blockquote>
      <br>
      <h3>Special Requirement for PhD Applicants</h3>
      <p>Candidates applying for PhD programmes must include a <strong>research proposal</strong> as part of their application. This is a mandatory requirement in addition to other documents.</p>
      <br>
      <h3>Application Deadline</h3>
      <p>The deadline for submission of all RSU postgraduate applications is <strong>Monday, 31 August 2026</strong>. Applicants are advised to complete both the online application and submission of required documents before the closing date.</p>
      <br>
      <p>RSU’s postgraduate admission offers a broad range of academic opportunities for graduates seeking advanced qualifications in diverse fields. Early application is recommended to avoid delays, especially with document processing.</p>`,
    tags: [
      "RSU",
      "Rivers State University",
      "Postgraduate",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "kasu-part-time-degree-admission-2025-2026",
    title: "KASU Reopens Part-Time Degree Application Portal for 2025/2026 Session",
    category: "Education",
    date: "2026-04-25",
    excerpt: "Kaduna State University (KASU) has reopened its College of Continuing Education (CCE) application portal for part-time degree programmes for the 2025/2026 academic session.",
    content:
      `<h2>KASU Reopens Part-Time Degree Application Portal for 2025/2026 Session</h2>
      <p>Kaduna State University (KASU) has reopened its College of Continuing Education (CCE) application portal for part-time degree programmes for the <strong>2025/2026 academic session</strong>.</p>
      <p>The application window is now open from <strong>20 April to 3 May 2026</strong>, giving interested candidates a limited period to complete and submit their applications.</p>
      <br>
      <h3>Available KASU Part-Time Degree Programmes</h3>
      <p>The College of Continuing Education offers the following undergraduate programmes:</p>
      <ul>
        <li>B.A. History and Strategic Studies</li>
        <li>B.Sc. Mass Communication and Media Studies</li>
        <li>B.Sc. Procurement</li>
        <li>B.Sc. Public Administration</li>
      </ul>
      <p>All programmes lead to the award of <strong>B.A. or B.Sc. degrees</strong> upon completion.</p>
      <br>
      <h3>Admission Requirements</h3>
      <p>Candidates must meet the following requirements depending on their entry route:</p>
      <br>
      <h4>O’Level Requirements</h4>
      <p>Applicants must have at least five credit passes, including:</p>
      <ul>
        <li>English Language</li>
        <li>Mathematics</li>
        <li>Three other relevant subjects</li>
      </ul>
      <p>Results must not exceed two sittings.</p>
      <br>
      <h4>Direct Entry Requirements</h4>
      <p>Direct Entry applicants must meet the O’Level requirements above and possess relevant A’Level qualifications such as an <strong>NCE or Diploma</strong>. Eligible candidates may be admitted into <strong>200 level</strong>, depending on the programme.</p>
      <br>
      <h4>Top-Up Admission Requirements</h4>
      <p>Candidates applying for Top-Up must meet O’Level requirements and possess one of the following: <strong>HND, B.Sc. (Third Class), or NYSC Certificate</strong>. Such candidates may be considered for admission into <strong>400 level</strong>.</p>
      <br>
      <blockquote>
        <p><strong>Important Note:</strong> Candidates who graduated five years ago or earlier must present original certificates instead of statements of results during admission processing.</p>
      </blockquote>
      <br>
      <h3>Duration of Programmes</h3>
      <p>The length of study depends on the entry level:</p>
      <ul>
        <li><strong>100 Level Entry:</strong> Minimum of 5 academic sessions</li>
        <li><strong>200 Level Entry:</strong> Minimum of 4 academic sessions</li>
        <li><strong>400 Level Entry:</strong> Minimum of 2 academic sessions</li>
      </ul>
      <br>
      <h3>Provisional Admission Notice</h3>
      <p>KASU notes that all admissions are <strong>provisional</strong>. Even if candidates meet the requirements, the College reserves the right to confirm or deny admission. Successful applicants must present <strong>original credentials</strong> during registration.</p>
      <br>
      <h3>Application Fee</h3>
      <p>Applicants are required to pay a non-refundable processing fee through the official portal:</p>
      <ul>
        <li><strong>Nigerians:</strong> ₦10,000</li>
        <li><strong>Non-Nigerians:</strong> $20</li>
      </ul>
      <br>
      <h3>How to Apply</h3>
      <p>Interested candidates should apply through the KASU CCE portal by following these steps:</p>
      <ol>
        <li>Create a profile on the portal.</li>
        <li>Check your email for login details.</li>
        <li>Log in and complete your profile.</li>
        <li>Proceed to payment.</li>
        <li>Fill out the application form.</li>
        <li>Preview your entries.</li>
        <li>Submit the form.</li>
      </ol>
      <p>Applicants can edit their details before final submission using the “Update form” option.</p>
      <br>
      <h3>Application Deadline</h3>
      <p>The deadline for submission of applications is <strong>Sunday, 3 May 2026</strong>. Applicants are advised to complete their registration before the closing date, as late submissions may not be processed.</p>
      <br>
      <h3>Enquiries</h3>
      <p>For further information, candidates can contact the College of Continuing Education via email: <a href="mailto:cce@kasu.edu.ng">cce@kasu.edu.ng</a></p>
      <br>
      <p>Prospective students seeking flexible study options are encouraged to take advantage of this opportunity and apply before the deadline.</p>`,
    tags: [
      "KASU",
      "Kaduna State University",
      "Admission",
      "Part-time",
      "CCE",
      "2025/2026",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "buk-academic-calendar-2025-2026",
    title: "BUK Releases Proposed 2025/2026 Undergraduate Academic Calendar",
    category: "Education",
    date: "2026-04-23",
    excerpt: "Bayero University Kano (BUK) has presented a reviewed undergraduate academic calendar for the 2025/2026 session, outlining key academic activities from screening to examinations.",
    content:
      `<h2>BUK Releases Proposed 2025/2026 Undergraduate Academic Calendar</h2>
      <p>Bayero University Kano (BUK) has presented a reviewed undergraduate academic calendar for the <strong>2025/2026 session</strong>.</p>
      <p>The draft timetable, submitted to the Senate for consideration and approval, outlines key academic activities including screening, registration, lectures, examinations, and breaks. The schedule is structured to run through the full academic cycle, ending with the commencement of a new session in February 2027.</p>
      <br>
      <h3>Overview of the Academic Schedule</h3>
      <p>The proposed calendar begins with online screening for newly admitted students in March 2026. It then progresses through registration phases for both fresh and returning students, followed by first and second semester academic activities.</p>
      <p>The session is expected to conclude with an eight-week break before a new academic session begins on <strong>Monday, 15 February 2027</strong>.</p>
      <br>
      <h3>Fresh Students Screening and Registration</h3>
      <p>Newly admitted students are scheduled to begin with online screening before proceeding to registration.</p>
      <ul>
        <li><strong>Online screening:</strong> Monday, 2 March 2026 – Saturday, 4 April 2026 (5 weeks)</li>
        <li><strong>Registration (fresh students):</strong> Monday, 30 March 2026 – Saturday, 2 May 2026 (5 weeks)</li>
      </ul>
      <p>Returning students also have a dedicated registration window:</p>
      <ul>
        <li><strong>Registration (returning students):</strong> Monday, 4 May 2026 – Saturday, 16 May 2026 (2 weeks)</li>
      </ul>
      <br>
      <h3>First Semester Activities</h3>
      <p>The first semester is structured to accommodate lectures, examinations, and a short break.</p>
      <ul>
        <li><strong>Lectures:</strong> Monday, 18 May 2026 – Saturday, 8 August 2026 (12 weeks)</li>
        <li><strong>GSP Examinations:</strong> Monday, 3 August 2026 – Saturday, 8 August 2026 (1 week)</li>
        <li><strong>Main Examinations:</strong> Monday, 10 August 2026 – Saturday, 29 August 2026 (3 weeks)</li>
        <li><strong>Break:</strong> Monday, 31 August 2026 – Saturday, 5 September 2026 (1 week)</li>
      </ul>
      <br>
      <h3>Second Semester Activities</h3>
      <p>The second semester follows a similar structure with lectures and examinations.</p>
      <ul>
        <li><strong>Lectures:</strong> Monday, 7 September 2026 – Saturday, 28 November 2026 (12 weeks)</li>
        <li><strong>GSP Examinations:</strong> Monday, 23 November 2026 – Saturday, 28 November 2026 (1 week)</li>
        <li><strong>Main Examinations:</strong> Monday, 30 November 2026 – Saturday, 19 December 2026 (3 weeks)</li>
      </ul>
      <br>
      <h3>End-of-Session Break and New Session</h3>
      <p>At the end of the second semester examinations, students proceed on a long break.</p>
      <ul>
        <li><strong>End-of-session break:</strong> Monday, 21 December 2026 – Saturday, 13 February 2027 (8 weeks)</li>
      </ul>
      <p>The next academic session is scheduled to begin on:</p>
      <ul>
        <li><strong>Monday, 15 February 2027</strong></li>
      </ul>
      <br>
      <h3>Full Calendar at a Glance</h3>
      <p>For quick reference, here is the complete proposed schedule:</p>
      <ul>
        <li>2 March – 4 April 2026: Online screening (fresh students)</li>
        <li>30 March – 2 May 2026: Registration (fresh students)</li>
        <li>4 May – 16 May 2026: Registration (returning students)</li>
        <li>18 May – 8 August 2026: First semester lectures</li>
        <li>3 August – 8 August 2026: GSP first semester exams</li>
        <li>10 August – 29 August 2026: First semester exams</li>
        <li>31 August – 5 September 2026: First semester break</li>
        <li>7 September – 28 November 2026: Second semester lectures</li>
        <li>23 November – 28 November 2026: GSP second semester exams</li>
        <li>30 November – 19 December 2026: Second semester exams</li>
        <li>21 December 2026 – 13 February 2027: End-of-session break</li>
        <li>15 February 2027: New session begins</li>
      </ul>
      <br>
      <p>The proposed calendar provides a clear and structured academic timeline for students and staff, pending final approval by the university Senate.</p>`,
    tags: ["BUK", "Bayero University Kano", "Academic Calendar", "2025/2026", "Education", "Nigeria"],
  },
  {
    id: "fubk-nuc-accreditation-11-programmes",
    title: "FUBK Secures Full NUC Accreditation for 11 Academic Programmes",
    category: "Education",
    date: "2026-04-23",
    excerpt: "Federal University Birnin Kebbi (FUBK) has achieved full NUC accreditation for 11 of its academic programmes, covering both undergraduate and postgraduate levels.",
    content:
      `<h2>FUBK Secures Full NUC Accreditation for 11 Academic Programmes</h2>
      <p>Federal University Birnin Kebbi (FUBK) has recorded a major academic milestone as the National Universities Commission (NUC) granted <strong>full accreditation</strong> to 11 of its programmes.</p>
      <p>The accreditation followed the commission’s October/November 2025 exercise and was officially communicated in a letter dated April 7, 2026. The letter, signed by the NUC Director of Accreditation, Engr. Abraham Chundusu, conveyed the results on behalf of the Executive Secretary.</p>
      <p>The update was disclosed in a statement issued by the university’s Head of Information and Public Relations, Mr Jamilu Magaji, to journalists in Birnin Kebbi.</p>
      <br>
      <h3>Accreditation Covers Undergraduate and Postgraduate Programmes</h3>
      <p>According to the university, all 11 programmes assessed during the exercise received <strong>full accreditation</strong>, covering both undergraduate and postgraduate levels. This outcome confirms that the programmes meet the academic standards set by the NUC.</p>
      <br>
      <h3>Full List of Accredited Programmes</h3>
      <p>The following programmes were granted full accreditation:</p>
      <ul>
        <li>Masters in Accounting</li>
        <li>M.Sc. Accounting and Finance</li>
        <li>Accounting</li>
        <li>English Language</li>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Geology</li>
        <li>Industrial Chemistry</li>
        <li>Microbiology</li>
        <li>Physics with Electronics</li>
        <li>Geography</li>
      </ul>
      <br>
      <h3>Vice-Chancellor Reacts</h3>
      <p>Reacting to the development, the Vice-Chancellor of FUBK, Muhammad Zaiyan-Umar, described the achievement as a reflection of the university’s commitment to academic excellence.</p>
      <p>He noted that the success was made possible through the combined efforts of academic and administrative staff, as well as the support of the university’s Governing Council and students.</p>
      <blockquote>
        <p>“This success is a reflection of the hard work and dedication of our academic and administrative staff, the support of the University’s Governing Council, and the commitment of our staff and students.</p>
        <p>We remain focused on building a strong and reputable university that meets global standards.”</p>
      </blockquote>
      <br>
      <h3>What This Means</h3>
      <p>The accreditation strengthens FUBK’s academic credibility and assures current and prospective students that its programmes align with national quality benchmarks.</p>
      <p>It also reinforces the university’s position as a growing institution committed to delivering standard, recognised degrees across key fields of study.</p>
      <br>
      <p>With this achievement, Federal University Birnin Kebbi continues to build its reputation within Nigeria’s higher education landscape, particularly in science, management, and humanities programmes.</p>`,
    tags: [
      "FUBK",
      "NUC",
      "Accreditation",
      "Education",
      "Birnin Kebbi",
      "Undergraduate",
      "Postgraduate",
      "2026",
    ],
  },
  {
    id: "edusoko-university-bida-nuc-accreditation-2025",
    title: "Edusoko University Bida Secures Full NUC Accreditation for Four Programmes",
    category: "Education",
    date: "2026-04-23",
    excerpt: "Edusoko University Bida has announced the successful outcome of the recent NUC accreditation exercise, achieving a 100% success rate across four key programmes.",
    content:
      `<h2>Edusoko University Bida Secures Full NUC Accreditation for Four Programmes</h2>
      <p>Edusoko University Bida has announced the successful outcome of the recent accreditation exercise conducted by the National Universities Commission (NUC).</p>
      <p>According to the university, all four programmes assessed during the October and November 2025 accreditation exercise received <strong>full accreditation</strong>, marking a 100 per cent success rate across the board.</p>
      <br>
      <h3>Overview of the Accreditation Exercise</h3>
      <p>The NUC team carried out a comprehensive evaluation of selected academic programmes during its October/November 2025 visit. Following the assessment, the university confirmed that each programme reviewed met the required national standards and was granted full accreditation.</p>
      <p>This result covers programmes within the fields of Allied Health Sciences and Computing Sciences, reinforcing the institution’s academic standing in both areas.</p>
      <br>
      <h3>Accredited Faculties and Programmes</h3>
      <p>The accreditation outcome spans two faculties:</p>
      <p><strong>Faculty of Allied Health Sciences</strong></p>
      <ul>
        <li>Public Health — Full Accreditation</li>
      </ul>
      <p><strong>Faculty of Computing Sciences</strong></p>
      <ul>
        <li>Computer Science — Full Accreditation</li>
        <li>Cyber Security — Full Accreditation</li>
        <li>Software Engineering — Full Accreditation</li>
      </ul>
      <br>
      <h3>University’s Reaction to the Outcome</h3>
      <p>In an official statement, the Office of the Registrar, on behalf of the Vice-Chancellor, expressed appreciation to members of the university community for their contributions throughout the accreditation process.</p>
      <p>The management credited the success to the collective efforts of academic staff, non-academic staff, and students who played roles—directly and indirectly—during the evaluation period.</p>
      <br>
      <h3>What This Means for Students and the Institution</h3>
      <p>The university noted that the accreditation outcome confirms that its curriculum aligns with national academic benchmarks set by the NUC.</p>
      <p>It also strengthens the institution’s reputation, particularly in the fields of Computing and Health Sciences, positioning it as a credible option for students seeking quality education in these disciplines.</p>
      <br>
      <p>With this achievement, Edusoko University Bida reinforces its commitment to maintaining academic standards and delivering recognised, quality programmes in Nigeria’s higher education system.</p>`,
    tags: [
      "Edusoko University",
      "NUC",
      "Accreditation",
      "Education",
      "Bida",
      "Computing Sciences",
      "Allied Health Sciences",
    ],
  },
  {
    id: "immaculate-academy-of-health-technology-chikanda-admission-form-2026-2027",
    title: "Immaculate Academy of Health Technology Chikanda Releases 2026/2027 Admission Form",
    category: "Education",
    date: "2026-04-23",
    excerpt: "Immaculate Academy of Health Technology Chikanda has officially announced the sale of its admission form for the 2026/2027 academic session across multiple health-related programmes.",
    content:
      `<h2>Immaculate Academy of Health Technology Chikanda Admission 2026/2027</h2>
      <p>Immaculate Academy of Health Technology Chikanda has officially announced the sale of its admission form for the <strong>2026/2027 academic session</strong>, inviting qualified candidates to apply for its range of professional diploma and certificate programmes.</p>
      <p>The academy is approved by the Kwara State Government and fully accredited by relevant federal regulatory bodies. Prospective students can expect a conducive learning environment, modern training facilities, and instruction from experienced lecturers.</p>
      <br>
      <h3>Available Programmes</h3>
      <p>The academy offers a variety of courses designed to prepare students for careers in the health sector:</p>
      <p><strong>Diploma Courses:</strong></p>
      <ul>
        <li>Diploma in Community Health (CHEW)</li>
        <li>Diploma in Medical Imaging (X-Ray)</li>
        <li>Diploma in Pharmacy Technician (DPT)</li>
        <li>Diploma in Medical Laboratory Technician (DMLT)</li>
        <li>Diploma in Dispensing Opticianry (DOT)</li>
      </ul>
      <p><strong>Certificate Courses:</strong></p>
      <ul>
        <li>Certificate in Community Health (JCHEW)</li>
        <li>Health Assistant Certificate (HA)</li>
        <li>Public Health Technician Certificate (PHT)</li>
      </ul>
      <p><strong>Other Specialised Programmes:</strong></p>
      <ul>
        <li>Emergency Paramedics Technicians (EPT)</li>
        <li>Biomedical Equipment Technician (BET)</li>
      </ul>
      <br>
      <h3>Admission Requirements</h3>
      <p>Candidates seeking admission must meet the following criteria:</p>
      <ul>
        <li><strong>O’Level Requirements:</strong> At least five credit passes in English Language, Mathematics, Biology, Chemistry, and Physics.</li>
        <li><strong>Number of Sittings:</strong> Results must be obtained in not more than two sittings.</li>
        <li><strong>No JAMB Required:</strong> Admission into these programmes does <strong>not require</strong> JAMB or Post-UTME.</li>
      </ul>
      <p>The institution also prides itself on a stable academic calendar, ensuring students graduate without strike-related delays.</p>
      <br>
      <h3>How to Apply</h3>
      <p>The application form costs <strong>₦7,500</strong>. Interested applicants can obtain the form directly from the <strong>College Admission Office</strong> located in Chikanda, Baruten LGA, Kwara State.</p>
      <br>
      <h3>Enquiries and Contact Information</h3>
      <p>For further details regarding tuition fees, flexible payment plans, or hostel accommodation, you can reach the admissions office via:</p>
      <ul>
        <li>07053244590</li>
        <li>08066968621</li>
        <li>07035678027</li>
      </ul>
      <br>
      <p>Prospective students are encouraged to apply early to secure their place for the 2026/2027 session.</p>`,
    tags: ["Immaculate Academy", "Admission", "Health Technology", "2026/2027", "Kwara State", "Education"],
  },
  {
    id: "kariyoma-college-of-nursing-sciences-admission-requirements-2026-2027",
    title: "Kariyoma College of Nursing Sciences Admission Requirements 2026/2027",
    category: "Education",
    date: "2026-04-22",
    excerpt: "Kariyoma College of Nursing Sciences has outlined the key admission requirements for the 2026/2027 academic session, including a JAMB cut-off mark of 140.",
    content:
      `<h2>Admission Requirements for 2026/2027 Academic Session</h2>
      <p>Kariyoma College of Nursing Sciences has outlined the key admission requirements for the <strong>2026/2027 academic session</strong>, giving prospective applicants a clear idea of what is expected before the admission form goes on sale.</p>
      <p>For candidates planning ahead, the college has already specified the required <strong>JAMB score, subject combination, and O’Level results</strong>—all of which must be met before applying.</p>
      <br>
      <h3>JAMB Cut-Off Mark for 2026/2027</h3>
      <p>One of the most important details for applicants is the minimum score requirement. The college has set its <strong>JAMB cut-off mark at 140</strong> for the 2026/2027 admission cycle. Candidates scoring below this threshold will not be considered.</p>
      <br>
      <h3>Required JAMB Subject Combination</h3>
      <p>Applicants are expected to sit for the correct subjects in the Joint Admissions and Matriculation Board (JAMB) examination. The approved combination includes:</p>
      <ul>
        <li>English Language</li>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Physics</li>
      </ul>
      <p>Choosing the right subjects is essential, as incorrect combinations can affect admission eligibility.</p>
      <br>
      <h3>First Choice Requirement</h3>
      <p>Kariyoma College of Nursing Sciences must be selected as the <strong>first choice institution</strong> during JAMB registration. This is a strict condition. Candidates who do not choose the college as their first choice may not be considered for admission.</p>
      <br>
      <h3>O’Level Requirements</h3>
      <p>Applicants must also meet the required O’Level criteria. This includes <strong>at least five credit passes</strong> in the following subjects:</p>
      <ul>
        <li>Mathematics</li>
        <li>English Language</li>
        <li>Biology</li>
        <li>Physics</li>
        <li>Chemistry</li>
      </ul>
      <p>These core science subjects form the foundation for admission into the nursing programme.</p>
      <br>
      <h3>Admission Form Status</h3>
      <p>At the moment, the admission form is <strong>not yet on sale</strong>. The college has stated that sales will be announced later through its official communication channels, including social media platforms. Applicants are advised to stay updated and be ready once the form becomes available.</p>
      <br>
      <h3>Final Note</h3>
      <p>With the requirements already released, prospective students now have time to prepare. Meeting these conditions early will make the application process smoother once the admission form is officially released.</p>`,
    tags: ["Kariyoma College", "Nursing", "Admission", "2026/2027", "JAMB", "Education"],
  },
  {
    id: "ecohsat-admission-form-2026-2027",
    title: "Emirates College of Health Sciences and Technology (ECOHSAT) Admission 2026/2027",
    category: "Education",
    date: "2026-04-22",
    excerpt: "Emirates College of Health Sciences and Technology (ECOHSAT) has announced the sale of admission forms for the 2026/2027 academic session across ND, HND, and BSc programmes.",
    content:
      `<h2>ECOHSAT Admission for 2026/2027 Academic Session</h2>
      <p>Emirates College of Health Sciences and Technology (ECOHSAT) has announced the sale of admission forms for the <strong>2026/2027 academic session</strong>, inviting qualified candidates to apply for its wide range of health-related programmes.</p>
      <p>The institution offers multiple study pathways, including <strong>Professional Diploma, National Diploma (ND), Higher National Diploma (HND), Bachelor’s degree (BSc), and Remedial programmes</strong>, giving applicants flexible entry options depending on their qualifications.</p>
      <br>
      <h3>Available Programmes</h3>
      <p>ECOHSAT has opened applications across several disciplines in the health sciences field:</p>
      <p><strong>Professional Diploma Programme:</strong></p>
      <ul>
        <li>Community Health Extension Worker (CHEW)</li>
      </ul>
      <p><strong>National Diploma (ND) and Higher National Diploma (HND):</strong></p>
      <ul>
        <li>Medical Laboratory Technology (MLT)</li>
        <li>Pharmacy Technician (PT)</li>
        <li>Nutrition and Dietetics (NUD)</li>
        <li>Dental Therapy (DT)</li>
        <li>Health Information Management (HIM)</li>
        <li>Community Health (CH)</li>
        <li>Public Health Technology</li>
      </ul>
      <p><strong>BSc Programmes:</strong></p>
      <ul>
        <li>BSc Public Health</li>
        <li>Bachelor of Community Health Science (BCHS)</li>
        <li>Bachelor of Environmental Health Science (BEHS)</li>
        <li>Bachelor of Health Information Management (BHIM)</li>
      </ul>
      <p><strong>General and Allied Remedial Science:</strong></p>
      <ul>
        <li>Remedial Basic Science</li>
      </ul>
      <br>
      <h3>What the College Offers</h3>
      <p>Students can expect accredited and industry-relevant programmes with a strong emphasis on practical exposure and academic excellence. The campus features modern training facilities, dedicated lecturers, campus-wide internet access, and secure hostel accommodation.</p>
      <br>
      <h3>How to Apply & Contact Information</h3>
      <p>Interested candidates can reach out to the college through the following channels:</p>
      <ul>
        <li><strong>Phone:</strong> 07074444487, 07074444489, 07074444485</li>
        <li><strong>WhatsApp:</strong> 07074444486</li>
        <li><strong>Email:</strong> <a href="mailto:info@ecohsat.edu.ng">info@ecohsat.edu.ng</a></li>
        <li><strong>Address:</strong> Kobuga Satellite Town, Behind Andal Science Academy, Tudun Yola, Kano</li>
      </ul>
      <p>Applicants are encouraged to visit the official ECOHSAT website for further details and updates on the admission process.</p>
      <br>
      <h3>Final Note</h3>
      <p>With forms already on sale, prospective students looking to build a career in the health sector should consider applying early. ECOHSAT’s mix of diploma, degree, and remedial options provides multiple entry points into the healthcare field for the 2026/2027 academic session.</p>`,
    tags: ["ECOHSAT", "Admission", "Health Sciences", "2026/2027", "Kano", "Education"],
  },
  {
    id: "ptdf-in-country-scholarship-scheme-2025-2026",
    title: "PTDF 2025/2026 In-Country Scholarship Scheme: Official Application Guide",
    category: "Education",
    date: "2026-04-20",
    excerpt: "The Petroleum Technology Development Fund (PTDF) has officially opened applications for its 2025/2026 In-Country Scholarship Scheme for Nigerian students in oil and gas disciplines.",
    content:
      `<h2>2025/2026 PTDF In-Country Scholarship Scheme</h2>
      <p>The Petroleum Technology Development Fund (PTDF) has officially opened applications for its <strong>2025/2026 In-Country Scholarship Scheme</strong>, offering support to qualified Nigerian students pursuing studies in oil and gas-related disciplines.</p>
      <p>This annual scholarship is part of PTDF’s mission to build skilled manpower for Nigeria’s energy sector, and it remains one of the key funding opportunities for students in relevant fields across the country.</p>
      <br>
      <h3>Application Timeline</h3>
      <p>The application window is already open and will run for six weeks. Interested candidates should take note of the fixed dates:</p>
      <ul>
        <li><strong>Opening date:</strong> Monday, 20 April 2026</li>
        <li><strong>Closing date:</strong> Friday, 29 May 2026</li>
      </ul>
      <p>Applicants are expected to complete and submit their entries within this period, as late applications will not be accepted.</p>
      <br>
      <h3>Who Can Apply?</h3>
      <p>PTDF is inviting applications from:</p>
      <ul>
        <li><strong>Undergraduate students</strong></li>
        <li><strong>Postgraduate students</strong></li>
        <li><strong>Candidates in oil and gas-related disciplines</strong></li>
      </ul>
      <p>The scheme is strictly for qualified Nigerian students enrolled in relevant academic programmes within the country.</p>
      <br>
      <h3>What the Scholarship Covers</h3>
      <p>The PTDF In-Country Scholarship supports both undergraduate and postgraduate studies in approved fields linked to the oil and gas industry.</p>
      <p>According to PTDF, the initiative is designed to strengthen human capacity and ensure the development of skilled professionals who can contribute to Nigeria’s energy sector.</p>
      <p>For eligible students, this scholarship provides a structured pathway to advance their education without leaving the country.</p>
      <br>
      <h3>How to Apply</h3>
      <p>Applications must be submitted online through the official PTDF scholarship portal. To apply successfully, candidates should:</p>
      <ul>
        <li>Complete the online application form</li>
        <li>Provide accurate academic and personal information</li>
        <li>Upload all required documents</li>
        <li>Submit before the deadline</li>
      </ul>
      <p>Starting early is strongly advised, as it allows enough time to correct errors and avoid last-minute issues.</p>
      <br>
      <h3>Why This Opportunity Matters</h3>
      <p>With increasing competition in higher education funding, the PTDF scholarship stands out as a focused intervention for students in oil and gas-related disciplines. It not only provides financial support but also aligns with national priorities in energy development and capacity building.</p>
      <br>
      <h3>Final Note</h3>
      <p>The <strong>2025/2026 PTDF In-Country Scholarship Scheme</strong> is open from <strong>20 April to 29 May 2026</strong>. Eligible Nigerian students are encouraged to apply as soon as possible. The six-week window is fixed, and early submission can make the difference between a complete application and a missed opportunity.</p>`,
    tags: [
      "PTDF",
      "Scholarship",
      "Oil and Gas",
      "Energy Sector",
      "Education",
      "Nigeria",
      "2026",
    ],
  },
  {
    id: "ptdf-scholarship-unilag-2025-2026",
    title: "PTDF In-Country Scholarship 2025/2026 for UNILAG Students: Application Guide",
    category: "Education",
    date: "2026-04-21",
    excerpt: "The Petroleum Technology Development Fund (PTDF) is offering scholarships to UNILAG students in oil and gas disciplines for the 2025/2026 session. Apply by May 29, 2026.",
    content:
      `<h2>PTDF In-Country Scholarship Scheme 2025/2026</h2>
      <p>Undergraduate and postgraduate students of University of Lagos (UNILAG) studying oil and gas-related disciplines have been invited to apply for the 2025/2026 In-Country Scholarship Scheme offered by the Petroleum Technology Development Fund (PTDF).</p>
      <p>The scholarship is part of PTDF’s broader mandate to develop human capacity for Nigeria’s oil and gas industry, supporting qualified students pursuing relevant programmes within the country.</p>
      <br>
      <h3>Who Can Apply?</h3>
      <p>The opportunity is open to qualified Nigerians already studying in fields connected to the energy sector, specifically:</p>
      <ul>
        <li>Undergraduate students of UNILAG</li>
        <li>Postgraduate students of UNILAG</li>
        <li>Students in oil and gas-related disciplines</li>
      </ul>
      <br>
      <h3>Application Timeline</h3>
      <p>Applicants should pay close attention to the timeline, as the window is fixed:</p>
      <ul>
        <li><strong>Opening date:</strong> Monday, 20 April 2026</li>
        <li><strong>Closing date:</strong> Friday, 29 May 2026</li>
      </ul>
      <p>This provides a <strong>six-week application period</strong>. Candidates are encouraged to apply early to avoid last-minute errors or technical issues that often arise near deadlines.</p>
      <br>
      <h3>How to Apply</h3>
      <p>All applications must be completed online through the official PTDF scholarship portal. Candidates are expected to:</p>
      <ul>
        <li>Fill in accurate personal and academic details.</li>
        <li>Upload all required documents.</li>
        <li>Submit the application before the closing date.</li>
      </ul>
      <p>Note: Incomplete or late submissions will not be considered.</p>
      <br>
      <h3>Key Things to Keep in Mind</h3>
      <p>Success in scholarship applications often comes down to attention to detail. Applicants should start the process early, double-check all entries and uploads, and ensure they meet all eligibility requirements before hitting submit.</p>
      <br>
      <h3>Why This Scholarship Matters</h3>
      <p>The PTDF In-Country Scholarship Scheme offers more than financial support—it provides a pathway for students to strengthen their academic journey and build careers in Nigeria’s oil and gas sector. For UNILAG students, this is a direct opportunity to gain support while staying within the country’s education system.</p>
      <br>
      <h3>Final Note</h3>
      <p>Applications are open until <strong>29 May 2026</strong>. Eligible UNILAG students are encouraged to take advantage of this opportunity and complete their submissions well before the deadline to ensure they are considered.</p>`,
    tags: [
      "PTDF",
      "UNILAG",
      "Scholarship",
      "Oil and Gas",
      "Education",
      "Nigeria",
      "2026",
    ],
  },
  {
    id: "nwu-kano-new-programmes-approval-2026",
    title: "Northwest University Kano Receives NUC Approval for New Academic Programmes",
    category: "Education",
    date: "2026-04-21",
    excerpt: "Northwest University, Kano, has secured NUC approval to establish several new undergraduate and postgraduate programmes starting from the 2026/2027 academic session.",
    content:
      `<h2>Academic Expansion: NUC Approves New Courses for NWU Kano</h2>
      <p>Northwest University, Kano, has received approval from the National Universities Commission (NUC) to establish more academic programmes after a successful resource assessment and verification exercise.</p>
      <p>The Vice-Chancellor, Professor Amina Salihi Bayero, informed members of the university community and the general public of the approval. The official communication confirms that the Executive Secretary of the Commission approved the full-time mode of these programmes at the Main Campus starting from the <strong>2026/2027 academic session</strong>.</p>
      <br>
      <h3>Newly Approved Undergraduate Programmes</h3>
      <p>The undergraduate expansion includes specialized courses in physics, media, and geophysics:</p>
      <ul>
        <li>B.Sc Physics with Electronics</li>
        <li>B.Sc Industrial Physics</li>
        <li>B.Sc Broadcasting</li>
        <li>B.Sc Development and Communication Studies</li>
        <li>B.Sc Information and Media Studies</li>
        <li>B.Sc Journalism and Media Studies</li>
        <li>B.Sc Applied Geophysics</li>
      </ul>
      <br>
      <h3>Newly Approved Postgraduate Programmes</h3>
      <p>The university is also expanding its advanced degree offerings in education:</p>
      <ul>
        <li>M.Ed Philosophy of Education</li>
        <li>Ph.D Philosophy of Education</li>
      </ul>
      <br>
      <h3>Why the Approval Was Granted</h3>
      <p>The approval came after a thorough resource assessment and verification exercise. A panel of experts examined the human and material resources available to ensure a smooth take-off for these proposed programmes. The review confirmed that the university is well-equipped to maintain academic standards for these new additions.</p>
      <br>
      <h3>Commitment to Academic Growth</h3>
      <p>Professor Amina Salihi Bayero stated that the approval stands as one of the key achievements recorded within her first months in office as Vice-Chancellor. She emphasized that this development reflects her administration’s commitment to academic expansion and alignment with global best practices.</p>
      <p>The university will continue to strengthen its human and material resources to ensure the continued growth and high standards of these programmes.</p>
      <br>
      <h3>What This Means for Applicants</h3>
      <p>From the 2026/2027 academic session, Northwest University, Kano, will run these newly approved programmes in full-time mode at the Main Campus. For prospective students and researchers, this update provides a significantly wider range of specialized course options at both undergraduate and postgraduate levels.</p>`,
    tags: [
      "NWU",
      "Kano",
      "NUC",
      "Admission",
      "Undergraduate",
      "Postgraduate",
      "2026",
    ],
  },
  {
    id: "unijos-long-vacation-part-time-degree-2026",
    title: "UNIJOS Part-Time Degree Admission 2026: Requirements and Application Guide",
    category: "Education",
    date: "2026-04-21",
    excerpt: "The University of Jos (UNIJOS), in collaboration with FUEP, has opened applications for its 2026 long vacation part-time degree programme. Learn about available courses and how to apply.",
    content:
      `<h2>UNIJOS Long Vacation Part-Time Degree Programme 2026</h2>
      <p>The Institute of Education, University of Jos, in collaboration with the Federal University of Education, Pankshin Study Centre, has opened applications for its 2026 long vacation part-time degree programme.</p>
      <p>Designed for flexibility, the programme runs across <strong>four to five long vacation periods</strong>, making it a practical option for candidates balancing work or other commitments. The university has clearly outlined the available courses, entry routes, application steps, and deadline—giving applicants a straightforward path to plan their admission.</p>
      <br>
      <h3>Available Degree Programmes</h3>
      <p>Applicants can choose from a wide range of education and specialised courses, including:</p>
      <ul>
        <li>B.Ed Educational Management, B.Ed Adult and Continuing Education</li>
        <li>B.Sc.Ed Economics, B.A.Ed English, B.Ed Guidance and Counselling</li>
        <li>B.A.Ed History and International Studies, B.Sc.Ed Geography</li>
        <li>B.A.Ed Religion (CRS), B.Sc.Ed Social Studies, B.Sc.Ed Home Economics</li>
        <li>B.Sc.Ed Integrated Science, B.Sc.Ed Mathematics, B.Sc.Ed Chemistry</li>
        <li>B.Sc.Ed Biology, B.Sc.Ed Special Education, B.Ed Early Childhood Education</li>
        <li>BLIS Library Science, B.Sc.Ed Physical and Health Education</li>
        <li>B.A.Ed French, B.Sc.Ed Computer Science</li>
      </ul>
      <br>
      <h3>Admission Requirements</h3>
      <p>Entry requirements vary depending on the applicant’s qualifications:</p>
      <h4>For NCE/Diploma Holders</h4>
      <p>Candidates applying for degree programmes must possess a <strong>good NCE or Diploma</strong> in a relevant field with at least <strong>Lower Credit</strong>. Additionally, candidates with five SSCE credits, including Mathematics and English, may apply through Direct Entry (Contact II).</p>
      <h4>For WAEC, NECO, and NABTEB Candidates</h4>
      <p>Applicants with at least <strong>five credits</strong>, including Mathematics and English, can apply through <strong>Contact One</strong>.</p>
      <br>
      <h3>Step-by-Step Application Process</h3>
      <ol>
        <li><strong>Register with JAMB:</strong> Applicants must register for the part-time programme through JAMB at any accredited office or CBT centre. <strong>Important:</strong> During registration, candidates must select <strong>University of Jos</strong>, not the Federal University of Education, Pankshin.</li>
        <li><strong>Visit the FUEP Ventures Office:</strong> After JAMB registration, proceed to the VENTURES office at FUEP Pankshin with proof of registration. The application fee is <strong>N8,000</strong>.</li>
        <li><strong>Complete and Submit:</strong> Fill out the form and attach photocopies of your JAMB registration printout, VENTURES payment receipt, and academic credentials.</li>
      </ol>
      <br>
      <h3>Important Document Note</h3>
      <p>Applications <strong>will not be processed</strong> without complete documentation. Missing even a single required document—especially the JAMB printout—can lead to disqualification.</p>
      <br>
      <h3>Application Deadline</h3>
      <p>All completed application forms must be submitted on or before: <strong>Friday, 19 June 2026</strong>. Note that change of course will not be allowed after admission.</p>
      <br>
      <h3>Enquiries</h3>
      <p>For further information, applicants can contact:</p>
      <ul>
        <li>0806 973 9912</li>
        <li>0802 292 4691</li>
      </ul>
      <p>Acting early, following instructions carefully, and submitting complete documents will be key to a successful application.</p>`,
    tags: [
      "UNIJOS",
      "Admission",
      "Education",
      "Part-time",
      "2026",
      "Nigeria",
    ],
  },
  {
    id: "how-to-delegate-effectively-guide",
    title: "How to Delegate Tasks Effectively as an Entrepreneur: A Guide to Outsourcing and Delegation",
    category: "Business",
    date: "2026-04-20",
    excerpt: "Scaling a business requires letting go of control. Learn the strategic framework for delegating and outsourcing to reclaim your time and focus on growth.",
    content:
      `<h2>The Entrepreneur's Greatest Challenge: Letting Go</h2>
      <p>In the early stages of a business, entrepreneurs often wear every hat—from visionary and salesperson to customer support and janitor. While this "hustle" is necessary at the start, it becomes the very thing that prevents growth as the business scales. To grow beyond yourself, you must master the art of delegation.</p>
      <p>Effective delegation isn't just about offloading work; it’s about empowering others and freeing up your mental capacity to focus on high-impact, strategic decisions.</p>
      <br>
      <h3>1. Identify What to Delegate</h3>
      <p>Not every task should be handed off. Use the <strong>Delegation Matrix</strong> to categorize your workload:</p>
      <ul>
        <li><strong>Low Value, Low Skill:</strong> Admin tasks, scheduling, and data entry. These should be delegated or automated immediately.</li>
        <li><strong>Low Value, High Skill:</strong> Specialized tasks like basic bookkeeping or technical maintenance. These are prime candidates for outsourcing.</li>
        <li><strong>High Value, Low Skill:</strong> Tasks that require your unique perspective but not necessarily a specific technical skill. Train internal team members to handle these.</li>
        <li><strong>High Value, High Skill:</strong> Strategy, product vision, and core relationship building. Keep these for yourself.</li>
      </ul>
      <br>
      <h3>2. Outsourcing vs. Internal Delegation</h3>
      <p>Choosing between hiring an employee and hiring a contractor depends on the nature of the work:</p>
      <p><strong>Outsourcing:</strong> Ideal for specialized, project-based, or repetitive tasks. This includes graphic design, social media management, or lead generation. It offers flexibility and lower overhead.</p>
      <p><strong>Internal Delegation:</strong> Better for core business processes that require deep institutional knowledge and long-term consistency. Build an internal team for roles that define your company culture.</p>
      <br>
      <h3>3. The 5 Steps to Effective Delegation</h3>
      <ol>
        <li><strong>Define the Desired Outcome:</strong> Focus on the <em>what</em> and <em>why</em>, not just the <em>how</em>. Give clear success criteria.</li>
        <li><strong>Select the Right Person:</strong> Match the task to the individual's strengths and current capacity.</li>
        <li><strong>Provide Resources and Authority:</strong> Ensure they have the tools, information, and permission to make decisions without constant supervision.</li>
        <li><strong>Establish a Feedback Loop:</strong> Set checkpoints for progress reports. Avoid micromanaging, but maintain visibility.</li>
        <li><strong>Review and Recognize:</strong> Provide constructive feedback upon completion and recognize their success to build confidence.</li>
      </ol>
      <br>
      <h3>4. Avoid the Perfectionism Trap</h3>
      <p>One of the biggest hurdles for entrepreneurs is the "I can do it better myself" mindset. While you might be faster at a task today, doing it yourself prevents someone else from learning it. Accept the <strong>80% Rule</strong>: If someone can do it at least 80% as well as you, let them do it. The remaining 20% is the cost of your freedom.</p>
      <br>
      <h3>Final Thought</h3>
      <p>Your business is limited by your time and energy. Delegation is the mechanism that multiplies your impact. Start small—outsource one recurring administrative task this week—and feel the immediate relief in your schedule.</p>`,
    tags: [
      "Delegation",
      "Entrepreneurship",
      "Business Strategy",
      "Outsourcing",
      "Leadership",
    ],
  },
  {
    id: "noun-solution-to-nigeria-university-admission-crisis-tinubu",
    title: "Tinubu Identifies NOUN as Solution to Nigeria’s University Admission Crisis",
    category: "Education",
    date: "2026-04-18",
    excerpt: "President Bola Ahmed Tinubu identifies open and distance learning via NOUN as a practical solution to Nigeria’s admission crisis, highlighting its role in expanding access to higher education.",
    content:
      `<h2>NOUN: A Practical Response to Admission Crisis</h2>
      <p>President Bola Ahmed Tinubu has identified open and distance learning as a practical solution to Nigeria’s long-standing university admission crisis, pointing to the growing role of the <strong>National Open University of Nigeria (NOUN)</strong> in expanding access to higher education.</p>
      <p>Speaking at the university’s 15th convocation ceremony, the President—represented by Abdullahi Yusufu Ribadu, Executive Secretary of the NUC—said NOUN is helping bridge the gap between the millions of Nigerians seeking admission and the limited spaces in conventional universities.</p>
      <br>
      <h3>A Growing Admission Gap</h3>
      <p>Each year, over two million candidates sit for the JAMB examination, but only a fraction secure admission. Tinubu’s message was clear: Nigeria needs flexible learning models that can accommodate more people without compromising academic standards. NOUN has proven that this is possible.</p>
      <br>
      <h3>Education Without Barriers</h3>
      <p>NOUN’s model opens doors for groups often excluded from traditional campus-based education, including:</p>
      <ul>
        <li>Working professionals</li>
        <li>Women balancing family responsibilities</li>
        <li>Entrepreneurs and security personnel</li>
        <li>Individuals limited by location or personal circumstances</li>
        <li>Inmates within the Nigerian Correctional Service</li>
      </ul>
      <br>
      <h3>Graduation Highlights from the 15th Convocation</h3>
      <p>The ceremony showcased the university’s scale, with over 24,000 students graduating. The breakdown includes:</p>
      <ul>
        <li><strong>17,474</strong> undergraduate degree holders</li>
        <li><strong>1,788</strong> postgraduate diploma recipients</li>
        <li><strong>5,282</strong> master’s degree graduates</li>
        <li><strong>31</strong> doctoral degree awardees</li>
      </ul>
      <p>Among them were <strong>57 First Class graduates</strong>, as well as <strong>57 inmates</strong> who earned first degrees through NOUN’s correctional education programme.</p>
      <br>
      <h3>Digital Growth and Infrastructure</h3>
      <p>Vice-Chancellor Uduma Oji Uduma unveiled the university’s five-year strategic plan (2026–2031). Key highlights include:</p>
      <ul>
        <li>University systems now hosted on <strong>Amazon Web Services (AWS)</strong>.</li>
        <li>Operating the largest Moodle-based learning management system in West Africa.</li>
        <li>Serving over 180,000 active users with more than 2,000 courses each semester.</li>
      </ul>
      <br>
      <h3>Call for Inclusion in NYSC</h3>
      <p>The Chancellor of NOUN and Oba of Benin, Oba Ewuare II, used the occasion to call for the removal of restrictions preventing eligible NOUN graduates from participating in the National Youth Service Corps (NYSC), advocating for equal recognition for distance learning graduates.</p>
      <br>
      <h3>Conclusion</h3>
      <p>The themes of <strong>access</strong> and <strong>scale</strong> defined this convocation. Tinubu’s remarks positioned NOUN as a viable solution to Nigeria’s admission challenges, signaling a major shift toward more inclusive and flexible learning pathways in the national education system.</p>`,
    tags: [
      "NOUN",
      "Tinubu",
      "Education",
      "Admission",
      "Nigeria",
      "NYSC",
    ],
  },
  {
    id: "unizik-postgraduate-admissions-2026-2027",
    title: "UNIZIK Opens 2026/2027 Postgraduate Admissions: Requirements and How to Apply",
    category: "Education",
    date: "2026-04-18",
    excerpt: "Nnamdi Azikiwe University (UNIZIK) has opened applications for its 2026/2027 postgraduate programmes. Learn about available courses, fees, and the transcript submission process.",
    content:
      `<h2>UNIZIK Opens 2026/2027 Postgraduate Admissions</h2>
      <p>The College of Postgraduate Studies at Nnamdi Azikiwe University (UNIZIK) has officially opened applications for the 2026/2027 academic session, offering a range of postgraduate programmes across Full-Time, Part-Time, and Online study modes.</p>
      <p>If you’re planning to apply, this is one admission process where details matter. From application fees to deadlines and transcript submission, missing a step could affect your chances.</p>
      <br>
      <h3>Available Programmes and Application Fees</h3>
      <p>UNIZIK has outlined the application fees based on programme level. It’s important to confirm your intended course before making payment, as the fee differs at the PhD stage:</p>
      <ul>
        <li><strong>Postgraduate Diploma (PGD):</strong> N25,000</li>
        <li><strong>Master’s Degree:</strong> N25,000</li>
        <li><strong>Master of Philosophy (MPhil) / PhD:</strong> N25,000</li>
        <li><strong>Doctor of Philosophy (PhD):</strong> N50,000</li>
      </ul>
      <p>Make sure you select the correct category when applying to avoid complications later.</p>
      <br>
      <h3>Key Application Dates</h3>
      <p>The university has already released the full schedule for the admission process. Applicants should take note of the following deadlines:</p>
      <ul>
        <li><strong>Commencement of form sales:</strong> 15 April 2026</li>
        <li><strong>Application deadline:</strong> 8 September 2026</li>
        <li><strong>Final submission (all modes):</strong> 11 September 2026</li>
      </ul>
      <p>While the deadline for completing applications is 8 September, all submissions—regardless of study mode—must be finalised by 11 September 2026.</p>
      <br>
      <h3>Transcript Submission Guidelines</h3>
      <p>Every applicant is required to submit their academic transcripts to the Secretary, College of Postgraduate Studies on or before <strong>11 September 2026</strong>.</p>
      <p>UNIZIK accepts both hard copy and soft copy transcripts. For those choosing the soft copy option, transcripts must be sent directly from official institutional email addresses to: <a href="mailto:secdr_transcript.cpgs@unizik.edu.ng">secdr_transcript.cpgs@unizik.edu.ng</a></p>
      <br>
      <h3>Special Requirements for PhD Applicants</h3>
      <p>Candidates applying for PhD programmes have additional steps to complete:</p>
      <ul>
        <li>Submit a <strong>typed research proposal</strong> (not more than five pages) via the application portal.</li>
        <li>Prepare for a <strong>virtual proposal defence</strong>, with the schedule to be announced later by the university.</li>
      </ul>
      <br>
      <h3>How to Apply</h3>
      <p>Interested candidates should begin their application through the UNIZIK postgraduate portal. Ensure that you complete your application within the specified timeframe and all required documents are uploaded correctly.</p>
      <p>With the application window already open, prospective students are advised to act promptly and carefully follow all instructions to avoid delays in admission.</p>`,
    tags: [
      "UNIZIK",
      "Postgraduate",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "waec-2026-timetable-nigeria-full-schedule",
    title: "WAEC 2026 Timetable for Nigeria: Full Schedule, Dates & Times",
    category: "Education",
    date: "2026-04-18",
    excerpt: "The West African Examinations Council (WAEC) has released the official 2026 May/June WASSCE timetable. View the full schedule of dates and times for all subjects.",
    content:
      `<h2>WAEC 2026 Timetable Released</h2>
      <p>The West African Examinations Council (WAEC) has released the <strong>official 2026 May/June WASSCE timetable</strong> for school candidates in Nigeria. The examination runs from <strong>Tuesday, 21 April to Friday, 19 June 2026</strong>, covering practicals, theory, and objective papers across all subjects.</p>
      <br>
      <h3>April 2026 Schedule</h3>
      <p>The exam kicks off with practical planning on April 21. Between April 27 and May 8, oral and performance tests for French, Arabic, and Music will be held. Note that Friday, May 1st, is a public holiday (Workers' Day).</p>
      <br>
      <h3>May 2026 Highlights</h3>
      <ul>
        <li><strong>May 12:</strong> Nigerian Languages (Hausa, Yoruba, Igbo) and Livestock Farming.</li>
        <li><strong>May 15:</strong> Foods & Nutrition and French.</li>
        <li><strong>May 20:</strong> Chemistry Practical and Solar PV Installation.</li>
        <li><strong>May 21:</strong> Further Mathematics (Essay & Objective).</li>
      </ul>
      <p><em>Note: Public holidays for Eid al-Adha are observed between May 26 and May 28.</em></p>
      <br>
      <h3>June 2026 Highlights</h3>
      <ul>
        <li><strong>June 3:</strong> General Mathematics (Core).</li>
        <li><strong>June 4:</strong> Government and Agricultural Science Practical.</li>
        <li><strong>June 10:</strong> English Language (Essay, Objective & Oral).</li>
        <li><strong>June 11:</strong> Chemistry and Literature-in-English.</li>
        <li><strong>June 12:</strong> Public Holiday (Democracy Day).</li>
        <li><strong>June 15:</strong> Physics Practical and Marketing.</li>
        <li><strong>June 16:</strong> Biology and Literature (Drama & Poetry).</li>
        <li><strong>June 17:</strong> Biology Practical and Economics.</li>
        <li><strong>June 18:</strong> Financial Accounting.</li>
        <li><strong>June 19:</strong> Commerce and Catering Craft (Final Day).</li>
      </ul>
      <br>
      <h3>Important WAEC Instructions</h3>
      <p>Candidates are advised to follow the <strong>time printed on the question paper</strong> if it differs from the general timetable. Special needs candidates receive an extra 50% of the prescribed time. Additionally, certain practical materials may be provided in advance for preparation.</p>
      <br>
      <h3>Final Advice</h3>
      <p>With a comprehensive two-month schedule, candidates should prioritize a study plan that covers core subjects and practicals. Use this official timetable released by the West African Examinations Council as your primary success guide.</p>`,
    tags: [
      "WAEC",
      "WASSCE",
      "Timetable",
      "2026",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "kogi-poly-hnd-part-time-admission-2026-2027",
    title: "Kogi State Polytechnic Opens 2026/2027 HND & Part-Time Admissions",
    category: "Education",
    date: "2026-04-18",
    excerpt: "Kogi State Polytechnic is now accepting applications for Higher National Diploma (HND) and part-time programmes for the 2026/2027 session. View full course lists and entry requirements.",
    content:
      `<h2>Kogi State Polytechnic HND & Part-Time Admissions</h2>
      <p>Kogi State Polytechnic has announced the sale of application forms for admission into its <strong>regular Higher National Diploma (HND)</strong> and <strong>part-time programmes</strong> for the 2026/2027 academic session.</p>
      <p>The admission notice outlines available HND courses across different schools, entry requirements, application procedures, fees, and key deadlines. Prospective applicants are advised to read all details carefully before applying.</p>
      <br>
      <h3>HND Courses by School</h3>
      <p><strong>School of Applied Sciences</strong></p>
      <ul>
        <li>Computer Science (Software & Web Development / Networking & Cloud Computing)</li>
        <li>Statistics</li>
        <li>Science Laboratory Technology (Chemistry, Biochemistry, Microbiology, Environmental Biology)</li>
      </ul>
      <p><strong>School of Engineering Technology</strong></p>
      <ul>
        <li>Mineral/Petroleum Resources Engineering</li>
        <li>Electrical/Electronic Engineering (Power & Machine, Telecom)</li>
        <li>Metallurgical and Material Engineering</li>
        <li>Civil Engineering Technology</li>
        <li>Mechanical Engineering (Manufacturing Option)</li>
      </ul>
      <p><strong>School of Management Studies</strong></p>
      <ul>
        <li>Accountancy</li>
        <li>Business Administration and Management</li>
        <li>Library and Information Science</li>
        <li>Office Technology and Management</li>
        <li>Public Administration</li>
      </ul>
      <p><em>Other courses are available in the School of Art, Design and Printing, and the School of Environmental Technology.</em></p>
      <br>
      <h3>General HND Entry Requirements</h3>
      <p>While requirements vary slightly by course, most programmes require:</p>
      <ul>
        <li>A <strong>relevant National Diploma (ND)</strong>.</li>
        <li>Minimum of <strong>Lower Credit (CGPA 2.50)</strong>.</li>
        <li><strong>Five O’Level credits</strong> (maximum of two sittings), including English and Mathematics.</li>
        <li><strong>One year Industrial Training (IT)</strong> (or two years if the applicant has a Pass grade at ND).</li>
        <li><strong>ND transcript</strong> (mandatory for all applicants).</li>
      </ul>
      <br>
      <h3>How to Apply</h3>
      <p>Candidates can apply through the Polytechnic’s official portal by following these steps:</p>
      <ol>
        <li>Generate <strong>two separate RRR numbers</strong> on the portal: one for the admission form and one for the screening fee.</li>
        <li>Make payment via the approved channels.</li>
        <li>Return to the portal and complete the application online.</li>
      </ol>
      <br>
      <h3>Application Fees</h3>
      <ul>
        <li><strong>Admission Form:</strong> ₦10,000</li>
        <li><strong>Screening Fee:</strong> ₦10,000</li>
      </ul>
      <br>
      <h3>Transcript & Document Submission</h3>
      <p>Applicants must arrange for their <strong>ND transcripts</strong> to be sent directly to: <strong>The Registrar, Kogi State Polytechnic, Lokoja</strong>. Hard copies of credentials must also be submitted at the Polytechnic Admission Office before the deadline. <strong>Applications without transcripts will not be processed.</strong></p>
      <br>
      <h3>Closing Date</h3>
      <p>The deadline for submission of completed application forms is <strong>16 June 2026</strong>. The Polytechnic has clearly noted that <strong>there will be no extension</strong>.</p>
      <br>
      <h3>Final Note</h3>
      <p>Kogi State Polytechnic offers a wide range of HND programmes across science, engineering, environmental, arts, and management disciplines. Interested candidates should ensure they meet all requirements and submit all necessary documents on time to secure consideration.</p>`,
    tags: [
      "Kogi State Polytechnic",
      "HND",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "wesley-university-jupeb-ijmb-admissions-2026-2027",
    title: "Wesley University Opens JUPEB & IJMB Admissions for 2026/2027",
    category: "Education",
    date: "2026-04-18",
    excerpt: "Wesley University Ondo has announced admission into its JUPEB and IJMB programmes for the 2026/2027 academic session. These A-Level pathways provide Direct Entry admission into 200 Level.",
    content:
      `<h2>Wesley University JUPEB & IJMB Admissions 2026/2027</h2>
      <p>Wesley University Ondo has announced admission into its <strong>JUPEB and IJMB programmes</strong> for the 2026/2027 academic session. These programmes provide recognised <strong>A-Level pathways</strong> for students seeking <strong>Direct Entry admission into 200 Level</strong> in Nigerian universities.</p>
      <p>Both options are widely accepted nationwide and offer a solid alternative route to university admission.</p>
      <br>
      <h3>Why Choose JUPEB or IJMB?</h3>
      <p>The university highlights several benefits for choosing their pre-degree pathways:</p>
      <ul>
        <li>Nationally accredited programmes</li>
        <li>Direct Entry admission into 200 Level</li>
        <li>Experienced lecturers</li>
        <li>Modern learning facilities</li>
      </ul>
      <br>
      <h3>JUPEB Programme</h3>
      <h4>What is JUPEB?</h4>
      <p>The Joint Universities Preliminary Examinations Board (JUPEB) is a national examination body approved by the Federal Government. It provides a pathway for students to gain Direct Entry admission into universities in Nigeria and some partner institutions abroad.</p>
      <p><strong>Duration:</strong> 1 academic session (2 semesters)<br>
      <strong>Qualification:</strong> JUPEB Certificate (A-Level equivalent)</p>
      <p><strong>Entry Requirements:</strong></p>
      <ul>
        <li>Minimum of 5 O’Level credits in relevant subjects</li>
        <li>Must include English Language and Mathematics</li>
        <li>Maximum of two sittings (WAEC, NECO, or NABTEB)</li>
        <li>Awaiting results may be considered</li>
      </ul>
      <br>
      <h3>IJMB Programme</h3>
      <h4>What is IJMB?</h4>
      <p>The Interim Joint Matriculation Board (IJMB) is an A-Level programme established by Ahmadu Bello University. It is recognised nationwide for Direct Entry admission into universities.</p>
      <p><strong>Duration:</strong> 9–12 months (2 semesters)<br>
      <strong>Qualification:</strong> IJMB Certificate</p>
      <p><strong>Entry Requirements:</strong></p>
      <ul>
        <li>Minimum of 5 O’Level credits including English and Mathematics</li>
        <li>Maximum of two sittings (WAEC, NECO, or NABTEB)</li>
        <li>Awaiting results can apply</li>
      </ul>
      <br>
      <h3>How to Apply</h3>
      <p>Follow these steps to apply for the 2026/2027 session:</p>
      <ol>
        <li><strong>Purchase Application Form:</strong> Obtain the form from the Wesley University admissions office.</li>
        <li><strong>Submit Required Documents:</strong> Upload O’Level results, personal details, and passport photograph.</li>
        <li><strong>Application Processing:</strong> Applications are reviewed within 5 working days.</li>
        <li><strong>Admission Offer:</strong> Successful candidates receive admission letters and registration details.</li>
      </ol>
      <br>
      <h3>Contact Information</h3>
      <p>For enquiries (calls or WhatsApp):</p>
      <ul>
        <li>08070962165</li>
        <li>0814 799 7370</li>
        <li>+2348034827190</li>
      </ul>
      <br>
      <h3>Frequently Asked Questions</h3>
      <p><strong>Can JUPEB or IJMB be used for admission into any university?</strong><br>Yes. Both programmes are accepted by Nigerian universities for Direct Entry into 200 Level, though specific grade requirements may vary by institution.</p>
      <p><strong>Is accommodation available?</strong><br>Yes. Wesley University Ondo provides hostel accommodation for students, subject to availability.</p>
      <br>
      <p>If you’re looking for an alternative route into university without waiting for UTME alone, JUPEB and IJMB at Wesley University Ondo offer a reliable and recognised pathway to secure your admission into 200 Level.</p>`,
    tags: [
      "Wesley University",
      "JUPEB",
      "IJMB",
      "Admission",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "kogi-state-poly-part-time-admission-2026-2027",
    title: "Kogi State Polytechnic Opens 2026/2027 Part-Time Admission",
    category: "Education",
    date: "2026-04-18",
    excerpt: "Kogi State Polytechnic has announced the commencement of applications for its part-time programmes for the 2026/2027 academic session. Learn about available courses, fees, and requirements.",
    content:
      `<h2>Kogi State Polytechnic 2026/2027 Part-Time Admission</h2>
      <p>Kogi State Polytechnic has announced the commencement of applications for its part-time programmes for the 2026/2027 academic session. The admission notice outlines available study centres, courses, application procedures, fees, and key requirements.</p>
      <br>
      <h3>Available Study Centres</h3>
      <p>Applicants are required to select their preferred study centre during registration. The available centres are:</p>
      <ul>
        <li>Anyigba</li>
        <li>Kabba</li>
        <li>Okene</li>
        <li>Lokoja</li>
      </ul>
      <br>
      <h3>Part-Time Courses Offered</h3>
      <p>The Polytechnic offers the following programmes across various levels (NDS, ND, HND):</p>
      <ul>
        <li><strong>Accountancy</strong></li>
        <li><strong>Business Administration</strong></li>
        <li><strong>Computer Science</strong></li>
        <li><strong>Public Administration</strong></li>
        <li><strong>Office Technology and Management (OTM)</strong></li>
        <li><strong>Library and Information Science</strong></li>
        <li><strong>Diploma in Law</strong></li>
      </ul>
      <br>
      <h3>Admission Requirements</h3>
      <p><strong>Accountancy (HND):</strong> Requires a National Diploma in Accountancy or related field with a minimum of <strong>Lower Credit (CGPA 2.50)</strong> and five O’Level credits including English and Mathematics.</p>
      <p><strong>Accountancy (ND):</strong> Requires five O’Level credits (maximum of two sittings), including English Language, Mathematics, and any three relevant subjects such as Economics, Geography, or Government.</p>
      <br>
      <h3>How to Apply</h3>
      <p>Interested candidates can apply via the Polytechnic’s official portal by following these steps:</p>
      <ol>
        <li>Generate <strong>two separate RRR numbers</strong> on the portal (one for the admission form and one for the screening fee).</li>
        <li>Proceed to make payments of ₦10,000 each.</li>
        <li>Complete the application process online.</li>
      </ol>
      <br>
      <h3>Important Notes for Applicants</h3>
      <ul>
        <li><strong>Transcript Submission:</strong> Candidates from other institutions must arrange for their transcripts to be sent directly to the Registrar in Lokoja.</li>
        <li><strong>Hard Copy Submission:</strong> All applicants must submit physical copies of their credentials at the Polytechnic Admission Office before the deadline.</li>
        <li><strong>Closing Date:</strong> The deadline for submission is <strong>six weeks from the date of advertisement</strong>. The Polytechnic has stated there will be no extension.</li>
      </ul>
      <br>
      <h3>Final Note</h3>
      <p>Kogi State Polytechnic provides flexible part-time study options across multiple disciplines and locations. Applicants should ensure they meet all requirements, follow the application steps correctly, and submit all necessary documents before the deadline to avoid disqualification.</p>`,
    tags: [
      "Kogi State Polytechnic",
      "Admission",
      "Part-Time",
      "2026/2027",
      "Education",
      "Nigeria",
    ],
  },
  {
    id: "fuo-business-school-admissions-2026-2027",
    title: "FUO Business School Opens 2026/2027 Admissions: Courses, Requirements, and How to Apply",
    category: "Education",
    date: "2026-04-18",
    excerpt: "Federal University Otuoke Business School (FUOBS) has announced the start of applications for the 2026/2027 academic session. Explore available courses from certificates to PhDs.",
    content:
      `<h2>FUO Business School Opens 2026/2027 Admissions</h2>
      <p>Federal University Otuoke Business School (FUOBS) has announced the start of applications for the 2026/2027 academic session. The Business School offers a wide range of programmes—from short certificate courses to doctoral degrees—designed to meet the needs of professionals, graduates, and researchers.</p>
      <p>One standout feature is its flexible learning system, which supports <strong>hybrid, in-person, and fully virtual study options</strong>, giving applicants the freedom to choose what works best for them.</p>
      <br>
      <h3>Available Programmes at FUOBS</h3>
      <p><strong>Certificate and Short Courses</strong></p>
      <ul>
        <li>Procurement, Logistics and Supply Chain Management</li>
        <li>Strategic Project Management</li>
        <li>Strategic Peace, Security, and Conflict Management and Transformation</li>
      </ul>
      <p><strong>Postgraduate Diploma (PGD)</strong></p>
      <ul>
        <li>Accounting and Financial Analysis</li>
        <li>Management and Artificial Intelligence</li>
        <li>Business Intelligence</li>
        <li>Tourism and Hospitality Management</li>
        <li>Human Resource Management</li>
      </ul>
      <p><strong>Executive and Professional Master’s</strong></p>
      <ul>
        <li>Artificial Intelligence and Change Management</li>
        <li>Communication and Media Management in the Digital Economy</li>
        <li>Taxation in the Digital Era</li>
        <li>Business Administration</li>
        <li>Public Administration</li>
      </ul>
      <p><strong>Master of Science (M.Sc.) & Ph.D.</strong></p>
      <p>FUOBS offers specialized M.Sc. and Ph.D. tracks in Oil and Gas Accounting, Sustainable Tourism, HR, Business Administration, and Public Administration. Professional Doctorates are also available in Business and Public Administration Strategy.</p>
      <br>
      <h3>Entry Requirements</h3>
      <ul>
        <li><strong>Certificate:</strong> Five passes including English and Mathematics.</li>
        <li><strong>PGD:</strong> Bachelor’s degree (min. 3rd class) or HND (Upper Credit).</li>
        <li><strong>Executive Master’s:</strong> Bachelor’s/HND/PGD plus <strong>5 years work experience</strong>.</li>
        <li><strong>M.Sc.:</strong> Second-class lower degree or PGD with 3.00 CGPA.</li>
        <li><strong>Ph.D.:</strong> Master’s degree with min. 3.5 CGPA.</li>
      </ul>
      <br>
      <h3>Programme Duration</h3>
      <ul>
        <li><strong>Certificate:</strong> 3 weeks to 6 months</li>
        <li><strong>PGD:</strong> 2–4 semesters (Full-time)</li>
        <li><strong>Master’s:</strong> 2–4 semesters</li>
        <li><strong>Ph.D.:</strong> 6–8 semesters</li>
      </ul>
      <br>
      <h3>How to Apply</h3>
      <p>Applicants can apply online through the FUO portal:</p>
      <ol>
        <li>Generate an invoice via the FUOBS application page.</li>
        <li>Use a valid phone number during registration.</li>
        <li>Pay the application fee (₦25k for Certificates, ₦30k for PGD/MSc/PhD, ₦50k for Executive Masters) via Remita at any bank.</li>
        <li>Return to the portal and complete the application form.</li>
      </ol>
      <br>
      <h3>Important Guidelines</h3>
      <p>Ensure transcripts are sent within <strong>one month of application</strong>. Applications without referee reports or transcripts will not be processed. After completing the form, submit a hard copy to: <strong>The Secretary, FUO Business School, Federal University Otuoke, Bayelsa State.</strong></p>
      <br>
      <h3>Contact Information</h3>
      <p>Email: <a href="mailto:businessschool@fuotuoke.edu.ng">businessschool@fuotuoke.edu.ng</a><br>
      WhatsApp only: 09042205859</p>
      <br>
      <p>Interested applicants are advised to carefully follow the application steps and submit all required documents on time to avoid delays.</p>`,
    tags: ["FUO", "Business School", "Admission", "2026/2027", "Education", "Nigeria"],
  },
  {
    id: "jamb-releases-2026-utme-results-how-to-check",
    title: "JAMB Releases 2026 UTME Results: Here’s How to Check Yours",
    category: "Education",
    date: "2026-04-18",
    excerpt: "JAMB has officially released the 2026 UTME results. Learn the official SMS method to check your score and read the urgent warning against result manipulation.",
    content:
      `<h2>JAMB Releases 2026 UTME Results</h2>
      <p>The Joint Admissions and Matriculation Board (JAMB) has officially released the results of candidates who sat for the <strong>2026 Unified Tertiary Matriculation Examination (UTME)</strong> held on Thursday, 16 April 2026.</p>
      <p>According to the Board, a total of <strong>632,788 results</strong> are currently available for viewing, with more expected to be released in batches as the examination process continues.</p>
      <br>
      <h3>How to Check Your 2026 UTME Result</h3>
      <p>JAMB has directed candidates to check their results via SMS. To do this:</p>
      <ul>
        <li>Send <strong>“UTMERESULT”</strong> to <strong>55019</strong> or <strong>66019</strong></li>
        <li>Use the <strong>same phone number (SIM)</strong> you used during registration</li>
      </ul>
      <p>This detail is crucial—using a different phone number will not work.</p>
      <br>
      <h3>Result Printing Not Yet Available</h3>
      <p>At this stage, candidates can only <strong>view their results via SMS</strong>. JAMB has not yet enabled the result printing option. So for now, you can see your score—but you cannot print it yet.</p>
      <br>
      <h3>JAMB Warns Against Result Manipulation</h3>
      <p>JAMB has issued a strong warning to candidates against altering or falsifying the SMS results received from its official platform.</p>
      <p>In its statement, the Board made it clear that: <em>“Candidates are strongly cautioned against manipulating the SMS received from the official platform (55019/66019) to fabricate or alter scores with the intent to mislead others, including parents. Such actions constitute a serious criminal offence.”</em></p>
      <p>This warning underscores the seriousness of maintaining integrity in the examination process.</p>
      <br>
      <h3>Offenders Already in Custody</h3>
      <p>The Board also revealed that enforcement actions have already begun. According to JAMB, <strong>two candidates and one parent are currently in custody</strong> for allegedly falsifying results using AI and other electronic methods. The Board emphasized that anyone found guilty will face legal consequences.</p>
      <br>
      <h3>More Results to Be Released</h3>
      <p>JAMB noted that the UTME process is still ongoing, which means <strong>additional results will be released in batches</strong>. Candidates who have not yet received their results are advised to remain patient and check again later.</p>
      <br>
      <h3>Final Note</h3>
      <p>The release of the 2026 UTME results marks an important step for candidates awaiting admission into Nigerian tertiary institutions. Be sure to follow the official process, avoid shortcuts, and stay updated as more results become available through the Joint Admissions and Matriculation Board.</p>`,
    tags: ["JAMB", "UTME 2026", "Results", "Education", "Nigeria"],
  },
  {
    id: "5-productivity-hacks-for-busy-entrepreneurs",
    title: "5 Productivity Hacks for Busy Entrepreneurs to Boost Efficiency",
    category: "Business",
    date: "2026-04-13",
    excerpt: "Maximize your output and reclaim your time with these five proven productivity hacks designed specifically for the modern entrepreneur.",
    content:
      `<h2>Master Your Schedule: 5 Productivity Hacks</h2>
      <p>For entrepreneurs, time is the most valuable currency. When you are balancing product development, marketing, and team management, it is easy to feel like 24 hours just isn't enough. However, the most successful founders aren't necessarily working harder—they are working smarter.</p>
      <p>Here are five productivity hacks to help you boost your efficiency and scale your business without burning out.</p>
      <br>
      <h3>1. Implementation of Time Blocking</h3>
      <p>Instead of a standard to-do list, try <strong>Time Blocking</strong>. Assign specific blocks of time in your calendar for certain tasks. For example, block 9:00 AM to 11:00 AM for "Deep Work" where you tackle your most difficult task without distractions. By giving a task a dedicated slot, you reduce the mental fatigue of deciding what to do next.</p>
      <br>
      <h3>2. The 2-Minute Rule</h3>
      <p>Proposed by productivity expert David Allen, the rule is simple: <strong>If a task takes less than two minutes, do it immediately.</strong> Whether it's replying to a quick email, filing a document, or confirming a meeting, doing it now prevents small tasks from piling up into a daunting mountain of "micro-stressors."</p>
      <br>
      <h3>3. Leverage the Power of Automation</h3>
      <p>In 2026, there is no excuse for manual repetition. Use tools like Zapier, Make, or built-in AI workflows to automate your lead generation, social media posting, and invoicing. If you find yourself doing the same digital task three times, find a way to automate it.</p>
      <br>
      <h3>4. Practice Single-Tasking</h3>
      <p>Multitasking is a myth that actually reduces productivity by up to 40%. The "context switching" required for your brain to jump between a spreadsheet and a Slack message creates a massive cognitive drain. Focus on one needle-moving task at a time, finish it, and then move to the next.</p>
      <br>
      <h3>5. The "Delete, Delegate, Defer" Framework</h3>
      <p>Look at your schedule every morning and apply this framework to every meeting and task:</p>
      <ul>
        <li><strong>Delete:</strong> Is this task actually necessary for growth? If not, scrap it.</li>
        <li><strong>Delegate:</strong> Can someone else on your team (or a freelancer) do this?</li>
        <li><strong>Defer:</strong> If it's important but not urgent, schedule it for later in the week.</li>
      </ul>
      <br>
      <h3>Final Thought</h3>
      <p>Productivity is about being effective, not just busy. Start by implementing just one of these hacks this week, and observe how your focus shifts from "putting out fires" to actual strategic growth.</p>`,
    tags: ["Productivity", "Entrepreneurship", "Business Growth", "Time Management"],
  },
  {
    id: "neco-bece-2026-official-timetable",
    title: "NECO Releases Official 2026 BECE Timetable — Full Schedule & Instructions",
    category: "Education",
    date: "2026-04-12",
    excerpt: "The National Examinations Council (NECO) has officially released the timetable for the 2026 Basic Education Certificate Examination (BECE). View the full schedule and candidate instructions.",
    content:
      `<h2>NECO BECE 2026 Timetable Released</h2>
      <p>The National Examinations Council (NECO) has officially released the timetable for the <strong>2026 Basic Education Certificate Examination (BECE)</strong>.</p>
      <p>According to the schedule, the examination will run from <strong>Monday, 20 April to Thursday, 30 April 2026</strong>, covering a wide range of subjects for junior secondary school students across Nigeria.</p>
      <br>
      <h3>Full NECO BECE 2026 Timetable Overview</h3>
      <p><strong>Monday, 20 April 2026</strong></p>
      <ul><li>Paper III: Practical – Business Studies (10:00 am – 10:20 am)</li></ul>
      <p><strong>Tuesday, 21 April 2026</strong></p>
      <ul><li>Paper III: Computer Practical – Basic Science & Technology (10:00 am – 10:45 am)</li></ul>
      <p><strong>Wednesday, 22 April 2026</strong></p>
      <ul>
        <li>Paper IV: Drawing – BST (10:00 am – 10:45 am)</li>
        <li>Paper III: Practical – Cultural & Creative Arts (2:00 pm – 3:00 pm)</li>
      </ul>
      <p><strong>Thursday, 23 April 2026</strong></p>
      <ul><li>Objective papers for History, Hausa, Igbo, and Yoruba (10:00 am – 4:30 pm)</li></ul>
      <p><strong>Friday, 24 April 2026</strong></p>
      <ul><li>CRS and Islamic Studies (10:00 am – 12:00 noon)</li></ul>
      <p><strong>Saturday, 25 April 2026</strong></p>
      <ul><li>Mathematics: Objective & Essay (10:00 am – 3:10 pm)</li></ul>
      <p><strong>Monday, 27 April 2026</strong></p>
      <ul><li>CCA and Business Studies (10:00 am – 4:30 pm)</li></ul>
      <p><strong>Tuesday, 28 April 2026</strong></p>
      <ul><li>BST and Pre-Vocational Studies (10:00 am – 4:30 pm)</li></ul>
      <p><strong>Wednesday, 29 April 2026</strong></p>
      <ul><li>English Studies: Objective & Essay and Arabic (10:00 am – 5:00 pm)</li></ul>
      <p><strong>Thursday, 30 April 2026</strong></p>
      <ul><li>National Values Education and French (10:00 am – 4:30 pm)</li></ul>
      <br>
      <h3>Important Instructions for Candidates</h3>
      <ul>
        <li>Carry a <strong>photocard for identification</strong>.</li>
        <li>Follow the <strong>exact time stated on question papers</strong>.</li>
        <li><strong>Blind candidates</strong> will be given 30 extra minutes.</li>
        <li><strong>Electronic devices are strictly prohibited</strong>, including mobile phones, smartwatches, and tablets.</li>
      </ul>
      <br>
      <h3>Key Notes for Schools</h3>
      <p>Practical subjects like Business Studies and BST may be grouped depending on available facilities. Schools must ensure proper supervision and that exams do not extend beyond 5:00 pm.</p>
      <br>
      <h3>Final Advice</h3>
      <p>With the timetable now available, candidates should start revising early, create a subject-based reading plan, and practice past questions. Arrive early at exam centres to avoid any last-minute stress.</p>
      <p>The NECO BECE is a crucial step in every student’s academic journey. Proper preparation will make all the difference.</p>`,
    tags: ["NECO", "BECE 2026", "Education", "Timetable", "Nigeria", "Junior Secondary"],
  },
  {
    id: "jamb-2026-utme-slip-printing-portal-open",
    title: "JAMB Opens 2026 UTME Slip Printing — What Candidates Must Do Now",
    category: "Education",
    date: "2026-04-12",
    excerpt: "JAMB has officially opened the 2026 UTME examination slip printing portal. Learn the official methods to print your slip and the essential rules for exam day.",
    content:
      `<h2>JAMB Opens 2026 UTME Slip Printing</h2>
      <p>The Joint Admissions and Matriculation Board (JAMB) has officially opened the <strong>examination slip printing portal</strong> for candidates registered for the <strong>2026 Unified Tertiary Matriculation Examination (UTME)</strong>.</p>
      <p>With the exam set to begin on <strong>16 April 2026</strong>, candidates are strongly advised to print their slips early and confirm all required details ahead of time.</p>
      <br>
      <h3>Why the JAMB Slip Is Important</h3>
      <p>The UTME examination slip is not just a formality—it is <strong>mandatory for entry into the exam hall</strong>. Each slip contains your exam date, time, and centre address.</p>
      <p><strong>Important:</strong> Without the slip, you will <strong>not be allowed into the exam hall</strong>, and missing your exam means losing that attempt entirely.</p>
      <br>
      <h3>How to Print Your 2026 UTME Slip</h3>
      <p>Candidates can print their slips using either of the two official methods:</p>
      <br>
      <h4>Method 1: JAMB Slip Printing Page</h4>
      <ol>
        <li>Visit the <a href="https://slipsprinting.jamb.gov.ng/main-examination">official JAMB slip printing portal</a></li>
        <li>Enter your registration number, phone number, or email address</li>
        <li>Click <strong>“Print Examination Slip”</strong></li>
      </ol>
      <br>
      <h4>Method 2: JAMB eFacility Portal</h4>
      <ol>
        <li>Go to the <a href="https://efacility.jamb.gov.ng/">official JAMB eFacility portal</a></li>
        <li>Log in with your email and password</li>
        <li>Click <strong>“Print UTME Main Examination Slip”</strong></li>
      </ol>
      <br>
      <h3>Important Rules for Candidates</h3>
      <ul>
        <li>Do <strong>not bring phones, smartwatches, or banned items</strong></li>
        <li>Carry a <strong>printed copy of your exam slip</strong></li>
        <li>Entry is by <strong>biometric thumbprint verification</strong></li>
        <li>Visit your centre early to avoid confusion on exam day</li>
      </ul>
      <br>
      <h3>JAMB Warns Against Score Manipulation Scams</h3>
      <p>JAMB has issued a strong warning about fraudsters who claim they can <strong>upgrade UTME scores</strong>. The board described such claims as <em>“False and criminal.”</em> Any candidate found engaging in such activities risks cancellation of registration and withholding of results.</p>
      <br>
      <h3>Final Note</h3>
      <p>Print your UTME slip immediately and confirm your exam details. Focus on final preparation using the JAMB syllabus and past questions. approach your UTME with confidence!</p>`,
    tags: ["JAMB", "UTME 2026", "Slip Printing", "Education", "Exam Guide"],
  },
  {
    id: "jamb-2026-novel-the-lekki-headmaster-guide",
    title: "JAMB 2026 Novel: The Lekki Headmaster — Full Guide with Questions & Answers",
    category: "Education",
    date: "2026-04-11",
    excerpt: "Master the official JAMB 2026 novel, 'The Lekki Headmaster' by Kabir Alabi Garba. Our comprehensive guide includes a plot overview and over 50 essential practice questions and answers.",
    content:
      `<h2>JAMB 2026 Novel: The Lekki Headmaster</h2>
      <p>The Joint Admissions and Matriculation Board (JAMB) has selected <strong>The Lekki Headmaster</strong> by Kabir Alabi Garba as the official novel for the 2026 UTME Use of English. For every candidate, this is the primary text to study.</p>
      <br>
      <h3>Overview of the Novel</h3>
      <p><em>The Lekki Headmaster</em> follows Mr. Bepo, the principal of Stardom Schools, as he navigates staff conflicts, financial struggles, parental pressure, and emotional personal challenges. The novel presents a realistic picture of Nigeria’s education system, with a strong focus on leadership, responsibility, and human relationships.</p>
      <br><br>
      <h3>Complete UTME Practice Questions & Answers</h3>
      <p>Below is the full compiled list of key questions and answers for effective revision:</p>
      <br>
      <h4>Characters & Identity</h4>
      <p><strong>Q1: Who is the principal of Stardom Schools?</strong><br>A: Mr. Bepo</p>
      <p><strong>Q2: What nickname was given to Mr. Bepo?</strong><br>A: “The Lekki Headmaster”</p>
      <p><strong>Q3: How long did Mr. Bepo serve as Headmaster at Stardom Kiddies?</strong><br>A: Four years</p>
      <br>
      <h4>Personal Life & Decisions</h4>
      <p><strong>Q4: Why was Mr. Bepo considering relocation?</strong><br>A: Due to family pressure and the need to join his wife and children in the UK</p>
      <p><strong>Q5: How did his colleagues react to his relocation plan?</strong><br>A: They found his reaction funny</p>
      <p><strong>Q6: How did Bepo feel about leaving his students?</strong><br>A: He felt emotionally attached and conflicted</p>
      <br>
      <h4>School Conflicts & Legal Issues</h4>
      <p><strong>Q7: What caused a legal issue involving a student?</strong><br>A: A parent sued the school over visual exploitation</p>
      <p><strong>Q8: What was the outcome of the case?</strong><br>A: Settled out of court; student got a free term, teacher suspended</p>
      <p><strong>Q9: How did Bepo feel about unresolved issues?</strong><br>A: He wished they didn’t linger</p>
      <br>
      <h4>Leadership & Conflict Resolution</h4>
      <p><strong>Q10: How did Bepo resolve staff conflicts?</strong><br>A: With empathy and a humanistic approach</p>
      <p><strong>Q11: How did he react to jokes about his leadership style?</strong><br>A: He found them funny</p>
      <p><strong>Q12: How did his leadership style affect the school?</strong><br>A: It created a supportive and inclusive environment</p>
      <br>
      <h4>Financial & Administrative Decisions</h4>
      <p><strong>Q13: What was done to reduce lateness?</strong><br>A: Boarding fees were reduced</p>
      <p><strong>Q14: What was the effect of this policy?</strong><br>A: Over 80% moved to boarding; punctuality improved</p>
      <p><strong>Q15: How much did Head Girl forms cost?</strong><br>A: ₦50,000</p>
      <p><strong>Q16: What concern did Bepo have about cooperative funds?</strong><br>A: Fear of mismanagement and staff rebellion</p>
      <br>
      <h4>Students & School Policies</h4>
      <p><strong>Q17: What criteria were used for prefect selection?</strong><br>A: Academic performance, moral history, attendance, fee status</p>
      <p><strong>Q18: What was the purpose of prefect elections?</strong><br>A: To teach leadership and democracy</p>
      <p><strong>Q19: What role did the panel play?</strong><br>A: Screening candidates</p>
      <br>
      <h4>Teaching Methods & Innovation</h4>
      <p><strong>Q20: What unique teaching method did Bepo introduce?</strong><br>A: Students teaching parents at home</p>
      <p><strong>Q21: What was the result?</strong><br>A: Positive feedback and increased enrollment</p>
      <p><strong>Q22: How many students were enrolled eventually?</strong><br>A: Over 70 pupils</p>
      <br>
      <h4>Strange Events & Ethical Concerns</h4>
      <p><strong>Q23: What was the cow burial incident?</strong><br>A: A bizarre ritual that shocked Bepo</p>
      <p><strong>Q24: How did Bepo react?</strong><br>A: He was skeptical and concerned</p>
      <br>
      <h4>Financial Situation</h4>
      <p><strong>Q25: How much was in the cooperative?</strong><br>A: ₦95 million</p>
      <p><strong>Q26: How much was loaned out?</strong><br>A: Over ₦50 million</p>
      <br>
      <h4>Culture & Activities</h4>
      <p><strong>Q27: What dances were performed?</strong><br>A: Bata, Atilogwu, Koroso, Canoe</p>
      <p><strong>Q28: Why were they significant?</strong><br>A: They showcased Nigerian culture</p>
      <br>
      <h4>Emotional & Psychological State</h4>
      <p><strong>Q29: What happened during assembly?</strong><br>A: Bepo broke down emotionally</p>
      <p><strong>Q30: How did he feel about challenges?</strong><br>A: Overwhelmed but reflective</p>
      <br>
      <h4>School Development & Vision</h4>
      <p><strong>Q31: How did Bepo ensure quality education?</strong><br>A: Innovation, lower fees, parental involvement</p>
      <p><strong>Q32: What was his view on extracurricular activities?</strong><br>A: Essential for development</p>
      <p><strong>Q33: What was his approach to bullying?</strong><br>A: Promoting respect and safety</p>
      <br>
      <h4>Parent & Community Relations</h4>
      <p><strong>Q34: How did Bepo handle parental criticism?</strong><br>A: Constructively</p>
      <p><strong>Q35: How did he encourage parental involvement?</strong><br>A: Through meetings and engagement</p>
      <br>
      <h4>Academic & Student Development</h4>
      <p><strong>Q36: What was his view on academic performance?</strong><br>A: Very important</p>
      <p><strong>Q37: How were achievements celebrated?</strong><br>A: Awards and recognition</p>
      <br>
      <h4>Teachers & Staff</h4>
      <p><strong>Q38: How did Bepo support teachers?</strong><br>A: Training and development</p>
      <p><strong>Q39: How did he address burnout?</strong><br>A: Support systems and development</p>
      <br>
      <h4>Values & Philosophy</h4>
      <p><strong>Q40: What was his view on education?</strong><br>A: Academic + personal development</p>
      <p><strong>Q41: What about lifelong learning?</strong><br>A: Strongly encouraged</p>
      <br>
      <h4>Modern Education & Technology</h4>
      <p><strong>Q42: What was his view on technology?</strong><br>A: Important for modern learning</p>
      <p><strong>Q43: How did he handle remote learning?</strong><br>A: Quick adaptation</p>
      <br>
      <h4>School Environment & Culture</h4>
      <p><strong>Q44: How did he build a positive environment?</strong><br>A: Inclusiveness and strong relationships</p>
      <p><strong>Q45: How did he promote respect?</strong><br>A: Policies and education</p>
      <br>
      <h4>Leadership & Mentorship</h4>
      <p><strong>Q46: What role did mentorship play?</strong><br>A: Key to growth</p>
      <p><strong>Q47: How did he encourage leadership?</strong><br>A: Through roles and activities</p>
      <br>
      <h4>Student Welfare & Behaviour</h4>
      <p><strong>Q48: How did he address mental health?</strong><br>A: Awareness and support programs</p>
      <p><strong>Q49: How did he handle peer pressure?</strong><br>A: Education and guidance</p>
      <br>
      <h4>General Administration</h4>
      <p><strong>Q50: How did he improve communication?</strong><br>A: Open channels</p>
      <p><strong>Q51: How did he use feedback?</strong><br>A: For decision-making</p>
      <br><hr><br>
      <h3>Final Tip for UTME Candidates</h3>
      <p>Mastering <em>The Lekki Headmaster</em> requires more than memorizing answers. Focus on:</p>
      <ul>
        <li>Understanding characters and themes</li>
        <li>Linking events to real-life situations</li>
        <li>Practicing consistently</li>
      </ul>
      <p>This novel will play a <strong>major role in your Use of English score</strong>, so take it seriously.</p>`,
    tags: ["JAMB", "The Lekki Headmaster", "UTME 2026", "Education", "Study Guide"],
  },
  {
    id: "jamb-approved-universities-nigeria-2026",
    title: "Complete List of JAMB Approved Universities in Nigeria 2026",
    category: "Education",
    date: "2026-03-02",
    excerpt: "A comprehensive guide to all JAMB-approved universities in Nigeria. This list includes all 36 federal universities and other approved tertiary institutions recognized by JAMB for admission.",
    content:
      `<h2>JAMB Approved Universities in Nigeria</h2><p>The Joint Admissions and Matriculation Board (JAMB) is the official body responsible for conducting entrance examinations and admitting students into tertiary institutions in Nigeria. Here is a complete and accurate list of all JAMB-approved universities across the country.</p><br><br><h3>Federal Universities (36)</h3><p>The following are the 36 federally funded universities in Nigeria that are approved by JAMB for admission:</p><ol><li>University of Ibadan, Ibadan, Oyo State</li><li>University of Nigeria, Nsukka (UNN), Enugu State</li><li>Ahmadu Bello University (ABU), Zaria, Kaduna State</li><li>Obafemi Awolowo University (OAU), Ile-Ife, Osun State</li><li>University of Ilorin (UNILORIN), Kwara State</li><li>University of Lagos (UNILAG), Lagos State</li><li>Bayero University, Kano (BUK), Kano State</li><li>University of Benin (UNIBEN), Edo State</li><li>Federal University of Technology, Minna (FUTMinna), Niger State</li><li>Federal University of Technology, Owerri (FUTO), Imo State</li><li>Federal University of Technology, Akure (FUTA), Ondo State</li><li>University of Jos (UNIJOS), Plateau State</li><li>University of Maiduguri (UNIMAID), Borno State</li><li>Federal University of Agriculture, Abeokuta (FUNAAB), Ogun State</li><li>University of Calabar (UNICAL), Cross River State</li><li>University of Port-Harcourt (UNIPORT), Rivers State</li><li>Federal University Lokoja (FULokoja), Kogi State</li><li>Federal University of Petroleum Resources, Effurun (FUPRE), Delta State</li><li>Federal University Otuoke (FUOTUOKE), Bayelsa State</li><li>Federal University Dutse (FUDutse), Jigawa State</li><li>Federal University Gusau (FUGusau), Zamfara State</li><li>Federal University Birnin Kebbi (FUBirnin Kebbi), Kebbi State</li><li>Modibbo Adama University of Technology, Yola (MAUTECH), Adamawa State</li><li>University of Uyo (UNIUYO), Akwa Ibom State</li><li>Abubakar Tafawa Balewa University (ATBU), Bauchi, Bauchi State</li><li>Federal University Lafia (FULafia), Nasarawa State</li><li>Federal University Kashere (FUKashere), Gombe State</li><li>Nnamdi Azikiwe University (UNIZIK), Awka, Anambra State</li><li>Federal University Oye-Ekiti (FUOye), Ekiti State</li><li>Federal University Wukari (FUWukari), Taraba State</li><li>Tai Solarin University of Education (TASUED), Ijebu-Ode, Ogun State</li><li>University of Abuja (UNIABUJA), Federal Capital Territory</li><li>Federal University Nile Delta (FUNILEDELTA), Wilberforce Island, Rivers State</li><li>Federal University Pwani (FUPWANI), Badagry, Lagos State</li><li>Federal University of Technology, Bauchi (FUTBauchi), Bauchi State</li><li>University of Udusun (UNUDUS), Enugu State</li></ol><br><br><h3>State Universities</h3><p>In addition to federal universities, numerous state universities are also JAMB-approved. These include institutions such as:</p><ul><li>Nasarawa State University, Keffi</li><li>Ambrose Alli University, Ekpoma, Edo State</li><li>Lagos State University (LASU), Lagos</li><li>Osun State University (UNIOSUN), Osun State</li><li>Ebonyi State University (EBSU), Ebonyi State</li><li>Kogi State University (KOGISU), Kogi State</li><li>Enugu State University of Science and Technology (ESUT), Enugu</li><li>Ondo State University of Science and Technology (OSUSTECH), Ondo State</li><li>Abia State University (ABSU), Abia State</li></ul><br><br><h3>Minimum Age Requirement</h3><p>The minimum age for admission into tertiary institutions for the 2025/2026 academic session is <strong>16 years</strong>.</p><br><br><p><em>Note: This information is current as of March 2026 and is based on data from the Joint Admissions and Matriculation Board (JAMB), the official body governing tertiary admissions in Nigeria. Always verify information with official JAMB channels and the institutions' websites for the most up-to-date details.</em></p>`,
    tags: ["JAMB", "Universities", "Nigeria", "Admission", "Education"],
  },
  {
    id: "jamb-approved-polytechnics-nigeria-2026",
    title: "Complete List of JAMB Approved Polytechnics in Nigeria 2026",
    category: "Education",
    date: "2026-03-02",
    excerpt: "An accurate and comprehensive catalogue of all polytechnics approved by JAMB across Nigeria, including federal, state and private institutions.",
    content:
      "<h2>JAMB Approved Polytechnics in Nigeria</h2>" +
      "<p>Polytechnics provide technical and vocational education leading to National Diplomas (ND) and Higher National Diplomas (HND). JAMB maintains an official list of approved polytechnics where candidates can gain admission via UTME or Direct Entry.</p><br><br>" +
      "<h3>Federal Polytechnics</h3>" +
      "<ul>" +
      "<li>Federal Polytechnic, Offa, Kwara State</li>" +
      "<li>Federal Polytechnic, Ilaro, Ogun State</li>" +
      "<li>Federal Polytechnic Nekede, Imo State</li>" +
      "<li>Federal Polytechnic Oko, Anambra State</li>" +
      "<li>Federal Polytechnic Ede, Osun State</li>" +
      "<li>Federal Polytechnic Ado-Ekiti, Ekiti State</li>" +
      "<li>Federal Polytechnic Bauchi, Bauchi State</li>" +
      "<li>Federal Polytechnic Bida, Niger State</li>" +
      "<li>Federal Polytechnic Mubi, Adamawa State</li>" +
      "<li>Federal Polytechnic Kogi (Lokoja), Kogi State</li>" +
      "<li>Federal Polytechnic Ede, Osun State</li>" +
      "<li>Federal Polytechnic Bali, Taraba State</li>" +
      "<li>Federal Polytechnic Ekowe, Bayelsa State</li>" +
      "<li>Federal Polytechnic Nasarawa, Nasarawa State</li>" +
      "<li>Federal Polytechnic Kaura Namoda, Zamfara State</li>" +
      "<li>Federal Polytechnic Ukana, Akwa Ibom State</li>" +
      "<li>Federal Polytechnic Idah, Kogi State</li>" +
      "<li>Federal Polytechnic Bebeji, Kano State</li>" +
      "<li>Federal Polytechnic Kaltungo, Gombe State</li>" +
      "<li>Federal Polytechnic Ilaro, Ogun State</li>" +
      "</ul><br><br>" +
      "<h3>State Polytechnics</h3>" +
      "<ul>" +
      "<li>Yaba College of Technology (YABATECH), Lagos State</li>" +
      "<li>Auchi Polytechnic, Edo State</li>" +
      "<li>Lagos State Polytechnic (LSP), Ikorodu, Lagos</li>" +
      "<li>Kaduna Polytechnic, Kaduna State</li>" +
      "<li>Benin Polytechnic, Edo State</li>" +
      "<li>Ibadan Polytechnic, Oyo State</li>" +
      "<li>Osun State Polytechnic, Iree</li>" +
      "<li>Kwara State Polytechnic, Ilorin</li>" +
      "<li>Delta State Polytechnic, Ozoro; Otefe-Oghara; Ogwashi-Uku</li>" +
      "<li>Rivers State Polytechnic, Bori</li>" +
      "<li>Enugu State Polytechnic (ISPOLY), Nekede</li>" +
      "<li>Ogun State Polytechnic (OGTECH), Igbesa</li>" +
      "<li>Abia State Polytechnic, Aba</li>" +
      "<li>Kano State Polytechnic, Kano</li>" +
      "</ul><br><br>" +
      "<h3>Private Polytechnics</h3>" +
      "<p>JAMB also approves several private polytechnics once they meet NUC and NBTE standards. Some recognised private polytechnics include:</p>" +
      "<ul>" +
      "<li>Pan-Atlantic University Polytechnic, Lagos</li>" +
      "<li>Petroleum Training Institute (PTI) Effurun – although federal, functions like a para‑statutory polytechnic</li>" +
      "<li>Dominion Polytechnic, Kogi State</li>" +
      "<li>Madonna Polytechnic, Elele, Rivers State</li>" +
      "<li>Rhema Polytechnic, Abia State</li>" +
      "</ul><br><br>" +
      "<h3>Admission Requirements</h3>" +
      "<p>To secure admission into any JAMB-approved polytechnic, candidates must:</p>" +
      "<ol>" +
      "<li>Register and sit for the UTME with a minimum score of 100 for polytechnics (as per 2025 policy)</li>" +
      "<li>Choose the polytechnic and programme during JAMB registration</li>" +
      "<li>Meet the institution’s own cut‑off marks and post‑UTME requirements</li>" +
      "<li>Provide O’Level results (WAEC, NECO or NABTEB) with at least five credits in relevant subjects</li>" +
      "</ol></br></br>" +
      "<p><em>Note: Lists above are indicative and reflect institutions recognised by JAMB as of March 2026. Prospective candidates should verify current accreditation status on the official JAMB website or contact schools directly.</em></p>",
    tags: ["JAMB", "Polytechnics", "Nigeria", "Education"],
  },
  {
    id: "jamb-approved-monotechnics-nigeria-2026",
    title: "Complete List of JAMB Approved Monotechnics in Nigeria 2026",
    category: "Education",
    date: "2026-03-02",
    excerpt: "A detailed overview of monotechnics endorsed by JAMB—specialized institutions focused on a single field of study.",
    content:
      "<h2>JAMB Approved Monotechnics in Nigeria</h2>" +
      "<p>Monotechnics are tertiary institutions that concentrate on one discipline or a narrow range of related subjects. They are licensed by JAMB once they satisfy the necessary regulatory criteria.</p><br><br>" +
      "<h3>Examples of Recognised Monotechnics</h3>" +
      "<ul>" +
      "<li>Federal Deep Sea Diving Centre, Calabar (Navy‑run specialised training institution)</li>" +
      "<li>Federal College of Petroleum Resources, Effurun (PTI) – specialises in petroleum technology</li>" +
      "<li>Federal College of Agriculture, Akure – agriculture‑focused monotechnic</li>" +
      "<li>Federal School of Dental Technology and Therapy, Enugu</li>" +
      "<li>Federal College of Animal Health and Production Technology, Ibadan</li>" +
      "<li>College of Health Technology, Calabar</li>" +
      "<li>Federal College of Forestry, Jos</li>" +
      "<li>Federal College of Fisheries and Marine Technology, Lagos</li>" +
      "<li>Nigerian Maritime University, Okerenkoko (technically a university but functions monotechnic prior to upgrading)</li>" +
      "</ul><br><br>" +
      "<h3>Admission Notes</h3>" +
      "<p>Candidates applying to monotechnics must follow steps similar to those for polytechnics:</p>" +
      "<ul>" +
      "<li>Register with JAMB and choose the correct institution type; minimum UTME score is usually 100</li>" +
      "<li>Submit relevant O’Level results and any additional qualifications specified</li>" +
      "<li>Attend screening or post‑UTME exercises where applicable</li>" +
      "</ul><br><br>" +
      "<p><em>Information accurate as of March 2026; consult official JAMB channels for any updates or new monotechnic approvals.</em></p>",
    tags: ["JAMB", "Monotechnics", "Nigeria", "Education"],
  },
  {
    id: "jamb-approved-colleges-of-education-nigeria-2026",
    title: "Complete List of JAMB Approved Colleges of Education in Nigeria 2026",
    category: "Education",
    date: "2026-03-02",
    excerpt: "The definitive list of Colleges of Education in Nigeria recognised by JAMB for admission into Nigerian Certificate in Education (NCE) programmes.",
    content:
      "<h2>JAMB Approved Colleges of Education in Nigeria</h2>" +
      "<p>Colleges of Education award the Nigerian Certificate in Education (NCE) and are integral to teacher training. JAMB manages admissions into these institutions just as it does for universities and polytechnics.</p><br><br>" +
      "<h3>Notable Federal Colleges of Education</h3>" +
      "<ul>" +
      "<li>Federal College of Education, Zaria (Giwa Road Campus)</li>" +
      "<li>Federal College of Education, Kano</li>" +
      "<li>Federal College of Education (Special), Oyo</li>" +
      "<li>Federal College of Education (Technical), Akoka, Lagos</li>" +
      "<li>Adeyemi College of Education, Ondo</li>" +
      "<li>Federal College of Education, Eha‑Amufu, Enugu State</li>" +
      "<li>Federal College of Education, Osiele, Abeokuta</li>" +
      "<li>Federal College of Education, Umunze, Anambra State</li>" +
      "</ul><br><br>" +
      "<h3>State Colleges of Education</h3>" +
      "<ul>" +
      "<li>College of Education, Warri (Delta State)</li>" +
      "<li>College of Education, Agbor (Delta State)</li>" +
      "<li>Alvan Ikoku Federal College of Education (now federal but listed originally as state)</li>" +
      "<li>College of Education, Akwanga (Nasarawa State)</li>" +
      "<li>College of Education, Nsugbe (Anambra State)</li>" +
      "<li>Prince Abubakar Audu University College of Education (Gboko) – state</li>" +
      "<li>Osun State College of Education, Ilesa</li>" +
      "" +
      "</ul><br><br>" +
      "<h3>Private Colleges of Education</h3>" +
      "<p>Several private institutions also offer NCE programmes subject to JAMB approval; examples include:</p>" +
      "<ul>" +
      "<li>Dominion University College of Education, Kogi State</li>" +
      "<li>Ladoke Akintola University of Technology College of Education (private affiliate)</li>" +
      "</ul><br><br>" +
      "<h3>Admission Requirements</h3>" +
      "<p>Prospective NCE students should:</p>" +
      "<ol>" +
      "<li>Register with JAMB and select a College of Education during UTME registration (minimum score usually 100)</li>" +
      "<li>Provide at least five credits in O’Level subjects, including English and Mathematics</li>" +
      "<li>Participate in any post‑UTME screening exercises</li>" +
      "<li>Possess relevant qualifications for specialised programmes (e.g., science subjects for science education)</li>" +
      "</ol><br><br>" +
      "<p><em>The list reflects institutions acknowledged by JAMB as of March 2026; always confirm status via the official JAMB website or the institutions themselves.</em></p>",
    tags: ["JAMB", "Colleges of Education", "Nigeria", "Education"],
  },
  {
    id: "jamb-cutoff-marks-2026",
    title: "JAMB Cut-Off Marks for 2026 Admissions (All Institution Types)",
    category: "Education",
    date: "2026-03-02",
    excerpt: "Understand the official JAMB cut-off marks for the 2026 admission cycle across universities, polytechnics, colleges of education and other institutions.",
    content:
      "<h2>JAMB Cut-Off Marks for 2026 Admissions</h2>" +
      "<p>Each year, JAMB publishes minimum tolerable scores that candidates must attain in the Unified Tertiary Matriculation Examination (UTME) to qualify for admission. Individual institutions then set their own cut-off marks above these minima when conducting post-UTME or screening.</p><br><br>" +
      "<h3>Minimum Tolerable Scores (2026 Policy Meeting)</h3>" +
      "<ul>" +
      "<li><strong>Universities:</strong> 150</li>" +
      "<li><strong>Colleges of Nursing:</strong> 140</li>" +
      "<li><strong>Polytechnics, Monotechnics, Colleges of Agriculture, Colleges of Education:</strong> 100</li>" +
      "<li><strong>Innovation Enterprise Institutions (IEIs):</strong> 100</li>" +
      "</ul><br><br>" +
      "<h3>Institutional Cut-Off Marks</h3>" +
      "<p>While JAMB provides the floor, each institution has the autonomy to determine its own admission cut-off based on factors such as:</p>" +
      "<ul>" +
      "<li>Number of available spaces in a course</li>" +
      "<li>Aggregate performance of candidates</li>" +
      "<li>Prevalence of high-demand programs</li>" +
      "<li>School fees and funding considerations</li>" +
      "</ul></br></br>" +
      "<p>Common practice for federal universities is to set cut-offs between 180 and 200, though competitive programs like medicine and law may require scores above 240. State universities and polytechnics typically set marks from 120 to 180 depending on the institution’s prestige and program.</p></br></br>" +
      "<h3>How to Check a Specific Institution's Cut-Off</h3>" +
      "<ol>" +
      "<li>Visit the institution’s official website during admission period.</li>" +
      "<li>Check the admissions or news section for 'cut-off marks' announcements.</li>" +
      "<li>Contact the admissions office directly if information is not readily available online.</li>" +
      "</ol><br><br>" +
      "<h3>Tips for Candidates</h3>" +
      "<ul>" +
      "<li>Aim for well above the minimum tolerable score to improve your chances.</li>" +
      "<li>Consider alternate institutions or programs if your score falls below typical cut-offs.</li>" +
      "<li>Attend post-UTME screenings and submit all required documents promptly.</li>" +
      "</ul><br><br>" +
      "<p><em>Note: The information above is accurate as of March 2026, based on the latest JAMB Policy Meeting outcomes. Prospective candidates should verify current cut-off details directly with JAMB and their chosen institutions during the admission season.</em></p>",
    tags: ["JAMB", "Cut-off", "Admission", "2026", "Education"],
  },
  {
    id: "kogi-poly-resumption-2026",
    title: "Kogi State Polytechnic Second Semester 2025/2026 Resumption",
    category: "Education",
    date: "2026-02-28",
    excerpt: "Kogi State Polytechnic will resume second semester on 27 February 2026 with classes starting 2 March.",
    content:
      "<img src=\"https://upload.wikimedia.org/wikipedia/commons/3/3b/Kogi_State_Polytechnic_Campus.jpg\" alt=\"Kogi State Polytechnic campus\" class=\"w-full mb-4\" />" +
      "<p>Kogi State Polytechnic will resume Second Semester 2025/2026 on 27 February 2026; academic activities start 2 March 2026.</p><br><br>" +
      "<p>Notice applies to staff and students. Students should note the dates and comply and keep their plans in line with the official timetable.</p><br><br>" +
      "<p><em>Image: Kogi State Polytechnic campus, sourced from Wikimedia Commons (CC BY-SA).</em></p>",
    tags: ["Kogi state polytechnic", "education"],
  },
  {
    id: "unn-announced-52nd-matriculation-ceremony",
    title: "UNN Announces Date for its 52nd Matriculation Ceremony",
    category: "Education",
    date: "2026-02-28",
    excerpt: "The University of Nigeria, Nsukka (UNN) has scheduled its 52nd Matriculation Ceremony for Saturday, 7 March 2026.",
    content:
      "<img src=\"/unn.avif\" class=\"w-full mb-4\" />" +
      "<p>The University of Nigeria, Nsukka (UNN) has announced the date for its 52nd Matriculation Ceremony.</p><br><br>" +
      "<p>The university scheduled the ceremony to take place on Saturday, 7 March 2026 at 10:00 am; each faculty across all campuses will host the matriculation at its designated venue.</p><br><br>" +
      "<p>UNN will hold the matriculation in the various faculties of all campuses of the university. That means each faculty will use its own venue; freshmen should plan around their faculty location.</p><br><br>" +
      "<p>The institution also advised the freshmen to confirm their faculty venue with the faculty officers; that quick check can prevent last-minute confusion on the matriculation day.</p><br><br>",
    tags: ["University of Nigeria, Nsukka", "University"],
  },
  {
    id: "kariyoma-college-receives-federal-approval-to-commence-operations",
    title: "Kariyoma College receives Federal approval to commence operations",
    category: "Education",
    date: "2026-02-28",
    excerpt: "Kariyoma College of Nursing Sciences, Lafia, in Nasarawa State, has officially received approval for establishment following a successful application process and an Approval/Resources Inspection visit by regulatory authorities.",
    content:
      "<img src=\"/kariyoma.jpg\" class=\"w-full mb-4\" />" +
      "<p>Kariyoma College of Nursing Sciences, Lafia, in Nasarawa State, has officially received approval for establishment following a successful application process and an Approval/Resources Inspection visit by regulatory authorities.</p><br><br>" +
      "<p>The approval, conveyed on behalf of the Honourable Minister of Education, formally grants the institution the authorization to begin academic operations.</p>" +
      "<p>According to the official notice, the approval takes effect from 6 February 2026, granted under the provisions of Act CAP E3 LPN 2004. This marks the official go-ahead for the college to operate as a recognized institution for nursing education.</p><br><br>" +
      "<p>Alongside institutional approval, Interim Accreditation has also been granted for the take-off of the following programme:</p>" +
      "<ul><li>Institutional Administration (Granted Approval)</li><li>ND Nursing Sciences</li></ul>" +
      "<p>The approval covers the specified number of academic streams approved for commencement. The institution is expected to strictly comply with all existing government regulations and policies guiding private tertiary institutions and related training schools.</p><br><br>" +
      "<p>The college has been authorized to begin admitting students into the approved programme starting from the 2025/2026 academic session.</p><br><br>" +
      "<p>However, the approval comes with a clear condition that if admissions do not commence within the approved period, the authorization to run the programme will automatically lapse. Any future admission exercise would then require a fresh Resources Inspection visit initiated by the institution.</p><br><br>" +
      "<p>The approved Nursing Sciences programme will undergo Initial Accreditation once the pioneer set of students reaches their third or fourth semester of study, as stipulated in the approval notice.</p><br><br>" +
      "<p>The establishment of Kariyoma College of Nursing Sciences expands access to professional nursing education in Nasarawa State and surrounding regions, creating new opportunities for aspiring healthcare professionals seeking accredited training within Nigeria.</p><br><br>",
    tags: ["Kariyoma College of Nursing Sciences, Lafia", "College"],
  },
  {
    id: "UDUSOK-Announces-Matriculation-Ceremony-Date-for-2025/2026",
    title: "UDUSOK Announces Matriculation Ceremony Date for 2025/2026 Newly Admitted Students",
    category: "Education",
    date: "2026-02-28",
    excerpt: "The Usmanu Danfodiyo University, Sokoto (UDUSOK) has officially announced the date for its Matriculation Ceremony for newly admitted students of the 2025/2026 academic session.",
    content:
      "<img src=\"/usmanu-danfodiyo-university.avif\" class=\"w-full mb-4\" />" +
      "<p>The Usmanu Danfodiyo University, Sokoto (UDUSOK) has officially announced the date for its Matriculation Ceremony for newly admitted students of the 2025/2026 academic session.</p><br><br>" +
      "<p>The university's notice confirms that the ceremony will take place as scheduled, while emphasizing the need for early preparation by both students and members of the university community.</p><br><br>" +
      "<p>The matriculation exercise has been fixed for Wednesday, 4 March 2026. The event will formally welcome newly admitted students into the university community and mark the beginning of their academic journey at UDUSOK.</p><br><br>" +
      "<p>According to the notice, the university community is expected to commence preparations immediately to ensure a smooth and well-organized event. The new students are advised to stay informed through official university communication channels and comply with all instructions related to the matriculation exercise to ensure full participation in this important academic tradition.</p><br><br>",
    tags: ["Usmanu Danfodiyo University, Sokoto", "University"],
  },
  {
    id: "aau-postpones-2025-2026-matriculation-ceremony",
    title: "AAU Postpones 2025/2026 Matriculation Ceremony, Announces New Date",
    category: "Education",
    date: "2026-02-28",
    excerpt: "The Ambrose Alli University (AAU), Ekpoma, in Edo State, has officially postponed its 2025/2026 Matriculation Ceremony earlier scheduled for Wednesday, 25 February 2026",
    content:
      "<img src=\"/aau-ekpoma.jpg\" class=\"w-full mb-4\" />" +
      "<p>The Ambrose Alli University (AAU), Ekpoma, in Edo State, has officially postponed its 2025/2026 Matriculation Ceremony earlier scheduled for Wednesday, 25 February 2026.</p><br><br>" +
      "<p>The announcement was made by the Vice-Chancellor, Eunice Eboserehimen Omonzejie, on behalf of the University Senate, confirming a change in the matriculation timetable.</p><br><br>" +
      "<p>AAU rescheduled the ceremony to 10:00AM on Wednesday, 18 March 2026 at Student International Conference Centre.</p><br><br>" +
      "<p>According to the university management, the postponement was approved to give candidates who have been offered provisional admission sufficient time to complete their clearance process. The completion of clearance is essential, as students must obtain their matriculation numbers, which form a critical requirement for participation in the matriculation ceremony.</p><br><br>",
    tags: ["AAU, Ekpoma", "University"],
  },
  {
    id: "nsuk-announces-matriculation-ceremony-for-2025-2026",
    title: "NSUK Announces Matriculation Ceremony for 2025/2026 Newly Admitted Students",
    category: "Education",
    date: "2026-02-28",
    excerpt: "The Nasarawa State University, Keffi (NSUK) has officially announced details for the matriculation ceremony of newly admitted candidates for the 2025/2026 academic session.",
    content:
      "<img src=\"/keffi-nsuk.jpg\" class=\"w-full mb-4\" />" +
      "<p>The Nasarawa State University, Keffi (NSUK) has officially announced details for the matriculation ceremony of newly admitted candidates for the 2025/2026 academic session.</p><br><br>" +
      "<p>The 2025/2026 matriculation ceremony will hold on Friday, 27 February 2026 at about 9:00 a.m. in the Convocation Square, Main Campus.</p><br><br>" +
      "<p>The ceremony formally admits new students into the university community and marks the beginning of their academic journey at NSUK.</p><br><br>" +
      "<p>Matriculating students are to collect their academic gowns free of charge from the offices of their respective Faculty Officers beginning from Tuesday, 24 February 2026.</p><br><br>" +
      "<p>Students are required to return the gowns immediately after the ceremony. The university further emphasizes that all gowns must be returned within 24 hours after the matriculation exercise. Failure to comply with this directive will attract penalties.</p><br><br>" +
      "<p>All matriculating students are expected to assemble outside the Convocation Square by 8:00 a.m. prompt for the academic procession. Students will line up behind their Faculty Officers in alphabetical order.</p><br><br>" +
      "<p>NSUK noted that students in the Faculty of Agriculture and Faculty of Engineering will hold their matriculation ceremonies at their respective campuses, in line with existing practice.</p><br><br>" +
      "<p>Seating arrangements are as follows:</p><br><br>" +
      "<ul><li>Faculty of Engineering: Students must be seated by 9:00 a.m.</li><li>Faculty of Agriculture, Lafia: Students must be seated by 11:00 a.m.</li></ul>" +
      "<p>University management has warned that failure to return matriculation gowns within the stipulated timeframe will attract fines and/or other penalties.</p>" +
      "<p>All newly admitted students are advised to strictly follow the outlined instructions, arrive early, and comply with procession guidelines to ensure a smooth and successful matriculation ceremony.</p>",
    tags: ["Nasarawa State University, Keffi (NSUK)", "University"],
  },
  {
    id: "modibbo-adama-university-matriculation-2026",
    title: "Modibbo Adama University Releases 2025/2026 Matriculation Ceremony Schedule",
    category: "Education",
    date: "2026-04-09",
    excerpt: "Modibbo Adama University has released the full schedule for its 2025/2026 matriculation ceremony, providing newly admitted students with key details on dates, venues, and important requirements.",
    content:
      "<h2>Modibbo Adama University Releases 2025/2026 Matriculation Ceremony Schedule</h2>" +
      "<p>The Modibbo Adama University has released the full schedule for its <strong>2025/2026 matriculation ceremony</strong>, providing newly admitted students with key details on dates, venues, and important requirements.</p><br><br>" +
      "<p>From the main ceremony to rehearsal arrangements and gown collection, the notice outlines everything fresh students need to know ahead of this important academic milestone.</p><br><br>" +
      "<h3>Main Ceremony Details</h3>" +
      "<p>The main matriculation ceremony has been scheduled as follows:</p>" +
      "<ul>" +
      "<li><strong>Date:</strong> Thursday, 16 April 2026</li>" +
      "<li><strong>Time:</strong> 10:00 AM</li>" +
      "<li><strong>Venue:</strong> Convocation Square</li>" +
      "</ul><br><br>" +
      "<p>This event officially marks the admission of new students into the university, making attendance a significant part of the academic calendar.</p><br><br>" +
      "<h3>Compulsory Rehearsal</h3>" +
      "<p>To ensure a smooth and well-organized ceremony, the university has arranged a compulsory rehearsal exercise:</p>" +
      "<ul>" +
      "<li><strong>Date:</strong> Tuesday, 14 April 2026</li>" +
      "<li><strong>Time:</strong> 3:00 PM</li>" +
      "<li><strong>Venue:</strong> Convocation Square</li>" +
      "</ul><br><br>" +
      "<p>Students are expected to participate in the rehearsal, as it provides guidance on the procession and overall conduct during the main event.</p><br><br>" +
      "<h3>Academic Gown Collection</h3>" +
      "<p>All matriculating students are required to collect their academic gowns ahead of the ceremony. Details are as follows:</p>" +
      "<ul>" +
      "<li><strong>Date:</strong> Tuesday, 14 April 2026</li>" +
      "<li><strong>Time:</strong> From 10:00 AM</li>" +
      "<li><strong>Venue:</strong> Respective Faculties</li>" +
      "</ul><br><br>" +
      "<p>To obtain the gown, students must:</p>" +
      "<ol>" +
      "<li>Pay a <strong>₦1,000 deposit</strong> at the University Microfinance Bank</li>" +
      "<li>Present the payment receipt to their Faculty Officer</li>" +
      "</ol><br><br>" +
      "<p>Only students who complete this process will be issued academic gowns.</p><br><br>" +
      "<h3>Mandatory Attendance</h3>" +
      "<p>The university has made it clear that <strong>attendance is mandatory</strong> for all matriculating students at both events:</p>" +
      "<ul>" +
      "<li>The <strong>rehearsal exercise</strong></li>" +
      "<li>The <strong>main matriculation ceremony</strong></li>" +
      "</ul><br><br>" +
      "<p>This directive is strict, and all new students are expected to be present at both scheduled activities.</p><br><br>" +
      "<h3>Conclusion</h3>" +
      "<p>As the matriculation ceremony approaches, students are encouraged to complete all required steps on time and prepare accordingly. Staying organized and following the outlined instructions will ensure a smooth and memorable start to university life.</p>",
    tags: ["Modibbo Adama University", "Matriculation", "Education", "Nigeria"],
  },
  {
    id: "kano-poly-pgd-lecture-commencement-2026",
    title: "Kano State Polytechnic Announces PGD Lecture Commencement and Registration Deadline",
    category: "Education",
    date: "2026-04-09",
    excerpt: "Kano State Polytechnic has officially announced that lectures for PGD programmes will begin on April 17, 2026, with the registration portal set to close on April 30.",
    content:
      "<h2>Kano State Polytechnic PGD Academic Update</h2>" +
      "<p>The Kano State Polytechnic has officially announced the commencement of lectures for its Postgraduate Diploma (PGD) programmes, giving newly admitted students a clear timeline to begin their academic journey.</p><br><br>" +
      "<p>According to a notice released by the School of Continuing Education and Postgraduate Studies (SCEPS), lectures for all newly admitted PGD students will begin on <strong>Friday, 17 April 2026</strong>.</p><br><br>" +
      "<p>This announcement provides students with a definite date to finalize preparations, including accommodation, course registration, and other academic arrangements.</p><br><br>" +
      "<h3>Registration Deadline and Portal Closure</h3>" +
      "<p>While lectures are set to commence, the institution has also confirmed that the application portal remains open—for now. However, both the <strong>application portal and registration exercise will officially close on 30 April 2026</strong>.</p><br><br>" +
      "<p>This means prospective and admitted students need to keep two important dates in mind:</p>" +
      "<ul>" +
      "<li><strong>17 April 2026</strong> – Lectures begin</li>" +
      "<li><strong>30 April 2026</strong> – Portal and registration close</li>" +
      "</ul><br><br>" +
      "<p>Missing the registration deadline could affect participation in the academic session, so timely action is strongly advised. This update is specifically for <strong>newly admitted students</strong> into the PGD programmes at Kano State Polytechnic.</p><br><br>" +
      "<h3>Contact and Inquiries</h3>" +
      "<p>The information was communicated through SCEPS, the division responsible for managing continuing education and postgraduate studies within the institution. Students who require further clarification or assistance can visit the School of Continuing Education and Postgraduate Studies located at:</p>" +
      "<p><strong>School of Management Studies, Yahaya Gusau Road, Kano</strong></p><br><br>" +
      "<p>Alternatively, inquiries can be made via phone:</p>" +
      "<ul>" +
      "<li>07063769241</li>" +
      "<li>08068964277</li>" +
      "</ul><br><br>" +
      "<p>Staying informed and meeting deadlines is crucial for a smooth start to your postgraduate studies. Make sure to prepare ahead and complete all necessary steps before the deadline.</p>",
    tags: [
      "Kano State Polytechnic",
      "Postgraduate",
      "PGD",
      "Education",
      "Admission",
      "Nigeria",
    ],
  },
  {
    id: "oau-odl-admissions-2026-2027",
    title: "Obafemi Awolowo University Opens Admissions for 2026/2027 Open Distance Learning Programs",
    category: "Education",
    date: "2026-04-09",
    excerpt: "Obafemi Awolowo University (OAU) has announced admissions for its 2026/2027 Open Distance Learning (ODL) undergraduate degree programmes, offering flexible online and face-to-face learning.",
    content:
      "<h2>Obafemi Awolowo University Opens Admissions for 2026/2027 Open Distance Learning Programs</h2>" +
      "<p>The Obafemi Awolowo University (OAU) has officially announced the commencement of admission into its <strong>Open Distance Learning (ODL) undergraduate degree programmes</strong> for the <strong>2026/2027 academic session</strong>.</p><br><br>" +
      "<p>Designed to offer flexible and accessible education, the ODL platform allows students to learn both <strong>online and through limited face-to-face interactions</strong>, while earning the same certificate as on-campus students.</p><br><br>" +
      "<h2>Available ODL Undergraduate Programmes</h2>" +
      "<p>OAU is offering admission into the following degree programmes:</p>" +
      "<ul>" +
      "<li><strong>B.NSc Nursing</strong></li>" +
      "<li><strong>B.Sc Accounting</strong></li>" +
      "<li><strong>B.Sc Agric Extension & Rural Development</strong></li>" +
      "<li><strong>B.Sc Business Administration</strong></li>" +
      "<li><strong>B.Sc Economics</strong></li>" +
      "</ul><br><br>" +
      "<h2>Admission Requirements & Programme Duration</h2>" +
      "<h3>B.NSc Nursing</h3>" +
      "<p>This programme is strictly for <strong>registered nurses</strong> under the Nursing and Midwifery Council of Nigeria.</p>" +
      "<p><strong>Requirements:</strong></p>" +
      "<ul>" +
      "<li>Valid registration (RN, RPN, RM, or RPHN)</li>" +
      "<li>Five O’Level credits (English, Mathematics, Physics, Biology, Chemistry)</li>" +
      "<li>Maximum of two sittings</li>" +
      "<li>Must pass <strong>written and oral interviews</strong></li>" +
      "</ul>" +
      "<p><strong>Duration:</strong> 4 years</p><br><br>" +
      "<h3>B.Sc Accounting</h3>" +
      "<p>OAU provides three entry pathways for Accounting:</p>" +
      "<ol>" +
      "<li>O’Level Entry" +
      "    <ul>" +
      "    <li>Five credits including English, Mathematics, Economics</li>" +
      "    <li>Any two of Government, Financial Accounting, Geography</li>" +
      "    </ul>" +
      "</li>" +
      "</ol>" +
      "<p><strong>Duration:</strong> 5 years</p>" +
      "<ol start=\"2\">" +
      "<li>Direct Entry to Part II" +
      "    <ul>" +
      "    <li>O’Level credits including English, Maths, Economics</li>" +
      "    <li>A-Level passes or qualifications like OND (Upper Credit), ATS-ICAN, ANAN, etc.</li>" +
      "    </ul>" +
      "</li>" +
      "</ol>" +
      "<p><strong>Duration:</strong> 4 years</p>" +
      "<ol start=\"3\">" +
      "<li>Direct Entry to Part III" +
      "    <ul>" +
      "    <li>HND in Accounting/Business Admin or certifications like ICAN, ACCA, CFA, ANAN</li>" +
      "    <li>Five O’Level credits including English, Maths, Economics</li>" +
      "    </ul>" +
      "</li>" +
      "</ol>" +
      "<p><strong>Duration:</strong> 3 years</p>" +
      "<p><strong>Mode of Study:</strong> Online + Face-to-Face</p><br><br>" +
      "<h3>B.Sc Agric Extension & Rural Development</h3>" +
      "<p>This programme targets professionals in agriculture and related sectors.</p>" +
      "<p>Entry Categories:</p>" +
      "<ul>" +
      "<li><strong>ND/NCE Holders</strong>" +
      "    <ul>" +
      "    <li>With agricultural background: 3 years</li>" +
      "    <li>Without: 4 years</li>" +
      "    </ul>" +
      "</li>" +
      "<li><strong>HND Holders</strong>" +
      "    <ul>" +
      "    <li>With agricultural background: 3 years</li>" +
      "    <li>Without: 4 years</li>" +
      "    </ul>" +
      "</li>" +
      "<li><strong>Transfer Students</strong>" +
      "    <ul>" +
      "    <li>Minimum CGPA: 1.00</li>" +
      "    <li>Duration: 4 years</li>" +
      "    </ul>" +
      "</li>" +
      "</ul>" +
      "<p><strong>General Requirements:</strong></p>" +
      "<ul>" +
      "<li>At least two years post-qualification experience</li>" +
      "<li>Employer sponsorship (or teacher recommendation for self-employed)</li>" +
      "<li>Five O’Level credits including English & Mathematics</li>" +
      "</ul>" +
      "<p><strong>Mode of Study:</strong> Online + Face-to-Face</p><br><br>" +
      "<h3>B.Sc Business Administration & 📈 B.Sc Economics</h3>" +
      "<p>Both programmes share the same admission criteria.</p>" +
      "<p>General Entry Requirements:</p>" +
      "<ul>" +
      "<li>Five O’Level credits including English and Mathematics</li>" +
      "</ul>" +
      "<p>Direct Entry:</p>" +
      "<ul>" +
      "<li>A-Level passes or equivalent qualifications</li>" +
      "<li>Must meet OAU minimum admission requirements</li>" +
      "</ul>" +
      "<p>Graduation Requirements:</p>" +
      "<ul>" +
      "<li>O’Level entrants: Minimum of <strong>145 units</strong></li>" +
      "<li>Direct Entry students: Minimum of <strong>113 units</strong></li>" +
      "</ul>" +
      "<p><strong>Mode of Study:</strong> Online + Face-to-Face</p><br><br>" +
      "<h2>Flexible Learning Format</h2>" +
      "<p>All ODL programmes follow a <strong>blended learning model</strong>, combining:</p>" +
      "<ul>" +
      "<li>Online lectures</li>" +
      "<li>Periodic physical sessions</li>" +
      "</ul>" +
      "<p>OAU emphasizes that students will be taught by the <strong>same lecturers</strong> and receive the <strong>same degree certificate</strong> as their on-campus counterparts.</p><br><br>" +
      "<p>Interested applicants can apply through the official OAU Open Distance Learning portal.</p><br><br>" +
      "<p><strong>Application Closing Date:</strong> 30 June 2026</p><br><br>" +
      "<p>With its promise of being <strong>“Flexible. Fast. Affordable. Anywhere. Anytime.”</strong>, OAU’s Open Distance Learning platform offers a strong alternative for individuals seeking quality education without disrupting their daily commitments.</p>" +
      "<p>Prospective students are advised to review the requirements carefully and submit their applications before the deadline.</p>",
    tags: ["OAU", "Open Distance Learning", "ODL", "Admission", "Education", "Nigeria"],
  },
  {
    id: "elrazi-medical-university-admission-2026-2027",
    title: "Elrazi Medical University Admission 2026/2027 — Apply Now",
    category: "Education",
    date: "2026-04-14",
    excerpt: "Elrazi Medical University has announced the commencement of applications for the 2026/2027 academic session, inviting qualified candidates for undergraduate programmes in medical and health science disciplines.",
    content:
      `<h2>Elrazi Medical University Admission 2026/2027 — Apply Now</h2>
      <p>Elrazi Medical University has officially announced the commencement of applications for the <strong>2026/2027 academic session</strong>. The institution is inviting suitably qualified candidates to apply for its wide range of undergraduate programmes in medical and health science disciplines.</p>
      <p>This admission opportunity is open to prospective students seeking to pursue degree courses in various healthcare-related fields. The university has also outlined the available programmes and provided a clear application process for interested applicants.</p>
      <br>
      <h3>Available Undergraduate Programmes</h3>
      <p>Candidates can apply for any of the following courses:</p>
      <ul>
        <li><strong>MBBS</strong> – Bachelor of Medicine, Bachelor of Surgery</li>
        <li><strong>Pharm.D</strong> – Doctor of Pharmacy</li>
        <li><strong>B.D.S</strong> – Bachelor of Dental Surgery</li>
        <li><strong>BMLS</strong> – Medical Laboratory Science</li>
        <li><strong>B.N.Sc</strong> – Nursing Science</li>
        <li><strong>DPT</strong> – Doctor of Physiotherapy</li>
        <li><strong>B.Sc. Radiography and Radiation Science</strong></li>
        <li><strong>B.Sc. Environmental Health Science</strong></li>
        <li><strong>B.Sc. Human Nutrition and Dietetics</strong></li>
        <li><strong>B.Sc. Health Information and Management</strong></li>
        <li><strong>B.Sc. Public Health</strong></li>
        <li><strong>B.Sc. Health Care Administration and Hospital Management</strong></li>
      </ul>
      <br>
      <h3>How to Apply</h3>
      <p>Interested candidates are required to submit their applications online through the official Elrazi admission portal. This is the only approved channel for starting the admission process, so applicants are advised to follow the instructions carefully on the portal.</p>
      <br>
      <h3>Contact Details</h3>
      <p>For further enquiries regarding admission requirements, procedures, or campus visits, applicants can reach out using the details below:</p>
      <ul>
        <li><strong>Address:</strong> Aminu Babakusa Street, Yargaya, Kano State, Nigeria</li>
        <li><strong>Website:</strong> Official Elrazi Medical University website</li>
        <li><strong>Phone:</strong> +234 902 316 8968 | +234 703 078 5761</li>
        <li><strong>Email:</strong> <a href="mailto:info@elrazi.edu.ng">info@elrazi.edu.ng</a></li>
      </ul>
      <br>
      <h3>Important Information for Applicants</h3>
      <p>The admission notice clearly outlines all available undergraduate programmes and directs applicants to the appropriate online application portal. Additionally, the university has provided multiple contact options, making it easy for prospective students to get accurate information and support throughout the application process.</p>
      <p>If you're planning to build a career in the medical or health sciences, this is a great opportunity to begin your journey with Elrazi Medical University.</p>`,
    tags: ["Elrazi Medical University", "Admission", "2026/2027", "MBBS", "Pharm.D", "B.D.S", "BMLS", "B.N.Sc", "DPT", "Education", "Nigeria"],
  },
  {
    id: "uniuyo-resumption-academic-calendar-2026",
    title: "University of Uyo (UNIUYO) Announces Resumption Date and 2025/2026 Academic Calendar",
    category: "Education",
    date: "2026-04-10",
    excerpt: "The University of Uyo (UNIUYO) has officially released its academic calendar for the 2025/2026 session, with the second semester set to commence on Monday, 20 April 2026.",
    content:
      `<h2>UNIUYO Resumption and Academic Calendar</h2>
       <p>The University of Uyo (UNIUYO) has officially announced the resumption date for all undergraduate students (Years 1–5) and postgraduate students, alongside a detailed academic calendar for the upcoming semester.</p><br><br>
       <p>According to the notice, the <strong>second semester for the 2024/2025 and 2025/2026 academic sessions will commence on Monday, 20 April 2026</strong>. Students across all levels are expected to take note of this date and follow the approved academic schedule.</p><br><br>
       <h3>Key Dates at a Glance</h3>
       <p>UNIUYO has outlined important milestones leading into the new semester:</p>
       <ul>
         <li><strong>2 April 2026:</strong> End of first semester examinations</li>
         <li><strong>6 April – 17 April 2026:</strong> First semester break (Years 1–5)</li>
         <li><strong>20 April 2026:</strong> Second semester begins</li>
         <li><strong>20 April – 8 May 2026:</strong> Registration without penalty</li>
         <li><strong>11 May – 22 May 2026:</strong> Registration with penalty</li>
       </ul><br><br>
       <h3>Lecture Period, Union Week & Revision</h3>
       <p>Academic activities for both undergraduate and postgraduate students will follow a structured timeline:</p>
       <ul>
         <li><strong>20 April – 10 July 2026:</strong> Lecture period</li>
         <li><strong>13 July – 17 July 2026:</strong> Students' Union Week</li>
         <li><strong>20 July – 24 July 2026:</strong> Revision exercise (Years 1–5)</li>
       </ul>
       <p>The sequence is clearly defined—<strong>lectures first, followed by union activities, and then revision</strong> ahead of examinations.</p><br><br>
       <h3> Examination & Long Vacation Schedule</h3>
       <p>The university has also fixed dates for examinations and the long vacation:</p>
       <ul>
         <li><strong>27 July – 21 August 2026:</strong> Second semester examinations (Years 1–5)</li>
         <li><strong>24 August – 2 October 2026:</strong> Long vacation</li>
       </ul>
       <p>Students are advised to prepare early and align their academic plans with these dates.</p></br></br>
       <h3> Next Academic Session Begins</h3>
       <p>Looking ahead, UNIUYO has confirmed that the <strong>first semester for the 2025/2026 and 2026/2027 sessions will begin on 5 October 2026</strong>.</p>
       <p>This provides students with a clear transition point into the next academic cycle.</p></br></br>
       <h3> Final Note</h3>
       <p>With a well-structured calendar now in place, students of the University of Uyo are encouraged to stay organized, complete registrations on time, and prepare fully for the semester ahead. Missing key dates—especially registration deadlines—could come with penalties, so early action is essential.</p>`,
    tags: ["UNIUYO", "Resumption", "Academic Calendar", "Education", "Nigeria"],
  },
];

// Sort posts by date descending (most recent first)
export const posts = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));

export function getPostById(id?: string | undefined) {
  if (!id) return undefined;
  return posts.find((p) => p.id === id);
}
