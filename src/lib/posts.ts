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
    id: "jamb-approved-universities-nigeria-2026",
    title: "Complete List of JAMB Approved Universities in Nigeria 2026",
    category: "Education",
    date: "2026-03-02",
    excerpt: "A comprehensive guide to all JAMB-approved universities in Nigeria. This list includes all 36 federal universities and other approved tertiary institutions recognized by JAMB for admission.",
    content:
      `<h2>JAMB Approved Universities in Nigeria</h2><p>The Joint Admissions and Matriculation Board (JAMB) is the official body responsible for conducting entrance examinations and admitting students into tertiary institutions in Nigeria. Here is a complete and accurate list of all JAMB-approved universities across the country.</p></br></br><h3>Federal Universities (36)</h3><p>The following are the 36 federally funded universities in Nigeria that are approved by JAMB for admission:</p><ol><li>University of Ibadan, Ibadan, Oyo State</li><li>University of Nigeria, Nsukka (UNN), Enugu State</li><li>Ahmadu Bello University (ABU), Zaria, Kaduna State</li><li>Obafemi Awolowo University (OAU), Ile-Ife, Osun State</li><li>University of Ilorin (UNILORIN), Kwara State</li><li>University of Lagos (UNILAG), Lagos State</li><li>Bayero University, Kano (BUK), Kano State</li><li>University of Benin (UNIBEN), Edo State</li><li>Federal University of Technology, Minna (FUTMinna), Niger State</li><li>Federal University of Technology, Owerri (FUTO), Imo State</li><li>Federal University of Technology, Akure (FUTA), Ondo State</li><li>University of Jos (UNIJOS), Plateau State</li><li>University of Maiduguri (UNIMAID), Borno State</li><li>Federal University of Agriculture, Abeokuta (FUNAAB), Ogun State</li><li>University of Calabar (UNICAL), Cross River State</li><li>University of Port-Harcourt (UNIPORT), Rivers State</li><li>Federal University Lokoja (FULokoja), Kogi State</li><li>Federal University of Petroleum Resources, Effurun (FUPRE), Delta State</li><li>Federal University Otuoke (FUOTUOKE), Bayelsa State</li><li>Federal University Dutse (FUDutse), Jigawa State</li><li>Federal University Gusau (FUGusau), Zamfara State</li><li>Federal University Birnin Kebbi (FUBirnin Kebbi), Kebbi State</li><li>Modibbo Adama University of Technology, Yola (MAUTECH), Adamawa State</li><li>University of Uyo (UNIUYO), Akwa Ibom State</li><li>Abubakar Tafawa Balewa University (ATBU), Bauchi, Bauchi State</li><li>Federal University Lafia (FULafia), Nasarawa State</li><li>Federal University Kashere (FUKashere), Gombe State</li><li>Nnamdi Azikiwe University (UNIZIK), Awka, Anambra State</li><li>Federal University Oye-Ekiti (FUOye), Ekiti State</li><li>Federal University Wukari (FUWukari), Taraba State</li><li>Tai Solarin University of Education (TASUED), Ijebu-Ode, Ogun State</li><li>University of Abuja (UNIABUJA), Federal Capital Territory</li><li>Federal University Nile Delta (FUNILEDELTA), Wilberforce Island, Rivers State</li><li>Federal University Pwani (FUPWANI), Badagry, Lagos State</li><li>Federal University of Technology, Bauchi (FUTBauchi), Bauchi State</li><li>University of Udusun (UNUDUS), Enugu State</li></ol></br></br><h3>State Universities</h3><p>In addition to federal universities, numerous state universities are also JAMB-approved. These include institutions such as:</p><ul><li>Nasarawa State University, Keffi</li><li>Ambrose Alli University, Ekpoma, Edo State</li><li>Lagos State University (LASU), Lagos</li><li>Osun State University (UNIOSUN), Osun State</li><li>Ebonyi State University (EBSU), Ebonyi State</li><li>Kogi State University (KOGISU), Kogi State</li><li>Enugu State University of Science and Technology (ESUT), Enugu</li><li>Ondo State University of Science and Technology (OSUSTECH), Ondo State</li><li>Abia State University (ABSU), Abia State</li></ul></br></br><h3>Minimum Age Requirement</h3><p>The minimum age for admission into tertiary institutions for the 2025/2026 academic session is <strong>16 years</strong>.</p></br></br><p><em>Note: This information is current as of March 2026 and is based on data from the Joint Admissions and Matriculation Board (JAMB), the official body governing tertiary admissions in Nigeria. Always verify information with official JAMB channels and the institutions' websites for the most up-to-date details.</em></p>`,
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
      "<p>Polytechnics provide technical and vocational education leading to National Diplomas (ND) and Higher National Diplomas (HND). JAMB maintains an official list of approved polytechnics where candidates can gain admission via UTME or Direct Entry.</p></br></br>" +
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
      "</ul></br></br>" +
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
      "</ul></br></br>" +
      "<h3>Private Polytechnics</h3>" +
      "<p>JAMB also approves several private polytechnics once they meet NUC and NBTE standards. Some recognised private polytechnics include:</p>" +
      "<ul>" +
      "<li>Pan-Atlantic University Polytechnic, Lagos</li>" +
      "<li>Petroleum Training Institute (PTI) Effurun – although federal, functions like a para‑statutory polytechnic</li>" +
      "<li>Dominion Polytechnic, Kogi State</li>" +
      "<li>Madonna Polytechnic, Elele, Rivers State</li>" +
      "<li>Rhema Polytechnic, Abia State</li>" +
      "</ul></br></br>" +
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
      "<p>Monotechnics are tertiary institutions that concentrate on one discipline or a narrow range of related subjects. They are licensed by JAMB once they satisfy the necessary regulatory criteria.</p></br></br>" +
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
      "</ul></br></br>" +
      "<h3>Admission Notes</h3>" +
      "<p>Candidates applying to monotechnics must follow steps similar to those for polytechnics:</p>" +
      "<ul>" +
      "<li>Register with JAMB and choose the correct institution type; minimum UTME score is usually 100</li>" +
      "<li>Submit relevant O’Level results and any additional qualifications specified</li>" +
      "<li>Attend screening or post‑UTME exercises where applicable</li>" +
      "</ul></br></br>" +
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
      "<p>Colleges of Education award the Nigerian Certificate in Education (NCE) and are integral to teacher training. JAMB manages admissions into these institutions just as it does for universities and polytechnics.</p></br></br>" +
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
      "</ul></br></br>" +
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
      "</ul></br></br>" +
      "<h3>Private Colleges of Education</h3>" +
      "<p>Several private institutions also offer NCE programmes subject to JAMB approval; examples include:</p>" +
      "<ul>" +
      "<li>Dominion University College of Education, Kogi State</li>" +
      "<li>Ladoke Akintola University of Technology College of Education (private affiliate)</li>" +
      "</ul></br></br>" +
      "<h3>Admission Requirements</h3>" +
      "<p>Prospective NCE students should:</p>" +
      "<ol>" +
      "<li>Register with JAMB and select a College of Education during UTME registration (minimum score usually 100)</li>" +
      "<li>Provide at least five credits in O’Level subjects, including English and Mathematics</li>" +
      "<li>Participate in any post‑UTME screening exercises</li>" +
      "<li>Possess relevant qualifications for specialised programmes (e.g., science subjects for science education)</li>" +
      "</ol></br></br>" +
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
      "<p>Each year, JAMB publishes minimum tolerable scores that candidates must attain in the Unified Tertiary Matriculation Examination (UTME) to qualify for admission. Individual institutions then set their own cut-off marks above these minima when conducting post-UTME or screening.</p></br></br>" +
      "<h3>Minimum Tolerable Scores (2026 Policy Meeting)</h3>" +
      "<ul>" +
      "<li><strong>Universities:</strong> 150</li>" +
      "<li><strong>Colleges of Nursing:</strong> 140</li>" +
      "<li><strong>Polytechnics, Monotechnics, Colleges of Agriculture, Colleges of Education:</strong> 100</li>" +
      "<li><strong>Innovation Enterprise Institutions (IEIs):</strong> 100</li>" +
      "</ul></br></br>" +
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
      "</ol></br></br>" +
      "<h3>Tips for Candidates</h3>" +
      "<ul>" +
      "<li>Aim for well above the minimum tolerable score to improve your chances.</li>" +
      "<li>Consider alternate institutions or programs if your score falls below typical cut-offs.</li>" +
      "<li>Attend post-UTME screenings and submit all required documents promptly.</li>" +
      "</ul></br></br>" +
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
      "<p>Kogi State Polytechnic will resume Second Semester 2025/2026 on 27 February 2026; academic activities start 2 March 2026.</p> </br></br>" +
      "<p>Notice applies to staff and students. Students should note the dates and comply and keep their plans in line with the official timetable.</p></br></br>" +
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
      "<p>The University of Nigeria, Nsukka (UNN) has announced the date for its 52nd Matriculation Ceremony.</p></br></br>" +
      "<p>The university scheduled the ceremony to take place on Saturday, 7 March 2026 at 10:00 am; each faculty across all campuses will host the matriculation at its designated venue.</p></br></br>" +
      "<p>UNN will hold the matriculation in the various faculties of all campuses of the university. That means each faculty will use its own venue; freshmen should plan around their faculty location.</p></br></br>" +
      "<p>The institution also advised the freshmen to confirm their faculty venue with the faculty officers; that quick check can prevent last-minute confusion on the matriculation day.</p></br></br>",
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
      "<p>Kariyoma College of Nursing Sciences, Lafia, in Nasarawa State, has officially received approval for establishment following a successful application process and an Approval/Resources Inspection visit by regulatory authorities.</p></br></br>" +
      "<p>The approval, conveyed on behalf of the Honourable Minister of Education, formally grants the institution the authorization to begin academic operations.</p>" +
      "<p>According to the official notice, the approval takes effect from 6 February 2026, granted under the provisions of Act CAP E3 LPN 2004. This marks the official go-ahead for the college to operate as a recognized institution for nursing education.</p></br></br>" +
      "<p>Alongside institutional approval, Interim Accreditation has also been granted for the take-off of the following programme:</p>" +
      "<ul><li>Institutional Administration (Granted Approval)</li><li>ND Nursing Sciences</li></ul>" +
      "<p>The approval covers the specified number of academic streams approved for commencement. The institution is expected to strictly comply with all existing government regulations and policies guiding private tertiary institutions and related training schools.</p></br></br>" +
      "<p>The college has been authorized to begin admitting students into the approved programme starting from the 2025/2026 academic session.</p></br></br>" +
      "<p>However, the approval comes with a clear condition that if admissions do not commence within the approved period, the authorization to run the programme will automatically lapse. Any future admission exercise would then require a fresh Resources Inspection visit initiated by the institution.</p></br></br>" +
      "<p>The approved Nursing Sciences programme will undergo Initial Accreditation once the pioneer set of students reaches their third or fourth semester of study, as stipulated in the approval notice.</p></br></br>" +
      "<p>The establishment of Kariyoma College of Nursing Sciences expands access to professional nursing education in Nasarawa State and surrounding regions, creating new opportunities for aspiring healthcare professionals seeking accredited training within Nigeria.</p></br></br>",
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
      "<p>The Usmanu Danfodiyo University, Sokoto (UDUSOK) has officially announced the date for its Matriculation Ceremony for newly admitted students of the 2025/2026 academic session.</p></br></br>" +
      "<p>The university's notice confirms that the ceremony will take place as scheduled, while emphasizing the need for early preparation by both students and members of the university community.</p></br></br>" +
      "<p>The matriculation exercise has been fixed for Wednesday, 4 March 2026. The event will formally welcome newly admitted students into the university community and mark the beginning of their academic journey at UDUSOK.</p></br></br>" +
      "<p>According to the notice, the university community is expected to commence preparations immediately to ensure a smooth and well-organized event. The new students are advised to stay informed through official university communication channels and comply with all instructions related to the matriculation exercise to ensure full participation in this important academic tradition.</p></br></br>",
    tags: ["Usmanu Danfodiyo University, Sokoto", "University"],
  },
  {
    id: "AAU-Postpones-2025-2026-Matriculation-ceremony",
    title: "AAU Postpones 2025/2026 Matriculation Ceremony, Announces New Date",
    category: "Education",
    date: "2026-02-28",
    excerpt: "The Ambrose Alli University (AAU), Ekpoma, in Edo State, has officially postponed its 2025/2026 Matriculation Ceremony earlier scheduled for Wednesday, 25 February 2026",
    content:
      "<img src=\"/aau-ekpoma.jpg\" class=\"w-full mb-4\" />" +
      "<p>The Ambrose Alli University (AAU), Ekpoma, in Edo State, has officially postponed its 2025/2026 Matriculation Ceremony earlier scheduled for Wednesday, 25 February 2026.</p></br></br>" +
      "<p>The announcement was made by the Vice-Chancellor, Eunice Eboserehimen Omonzejie, on behalf of the University Senate, confirming a change in the matriculation timetable.</p></br></br>" +
      "<p>AAU rescheduled the ceremony to 10:00AM on Wednesday, 18 March 2026 at Student International Conference Centre.</p></br></br>" +
      "<p>According to the university management, the postponement was approved to give candidates who have been offered provisional admission sufficient time to complete their clearance process. The completion of clearance is essential, as students must obtain their matriculation numbers, which form a critical requirement for participation in the matriculation ceremony.</p></br></br>",
    tags: ["AAU, Ekpoma", "University"],
  },
  {
    id: "NSUK-Announces-Matriculation-Ceremony-for-2025-2026",
    title: "NSUK Announces Matriculation Ceremony for 2025/2026 Newly Admitted Students",
    category: "Education",
    date: "2026-02-28",
    excerpt: "The Nasarawa State University, Keffi (NSUK) has officially announced details for the matriculation ceremony of newly admitted candidates for the 2025/2026 academic session.",
    content:
      "<img src=\"/keffi-nsuk.jpg\" class=\"w-full mb-4\" />" +
      "<p>The Nasarawa State University, Keffi (NSUK) has officially announced details for the matriculation ceremony of newly admitted candidates for the 2025/2026 academic session.</p></br></br>" +
      "<p>The 2025/2026 matriculation ceremony will hold on Friday, 27 February 2026 at about 9:00 a.m. in the Convocation Square, Main Campus.</p></br></br>" +
      "<p>The ceremony formally admits new students into the university community and marks the beginning of their academic journey at NSUK.</p></br></br>" +
      "<p>Matriculating students are to collect their academic gowns free of charge from the offices of their respective Faculty Officers beginning from Tuesday, 24 February 2026.</p></br></br>" +
      "<p>Students are required to return the gowns immediately after the ceremony. The university further emphasizes that all gowns must be returned within 24 hours after the matriculation exercise. Failure to comply with this directive will attract penalties.</p></br></br>" +
      "<p>All matriculating students are expected to assemble outside the Convocation Square by 8:00 a.m. prompt for the academic procession. Students will line up behind their Faculty Officers in alphabetical order.</p></br></br>" +
      "<p>NSUK noted that students in the Faculty of Agriculture and Faculty of Engineering will hold their matriculation ceremonies at their respective campuses, in line with existing practice.</p></br></br>" +
      "<p>Seating arrangements are as follows:</p></br></br>" +
      "<ul><li>Faculty of Engineering: Students must be seated by 9:00 a.m.</li><li>Faculty of Agriculture, Lafia: Students must be seated by 11:00 a.m.</li></ul>" +
      "<p>University management has warned that failure to return matriculation gowns within the stipulated timeframe will attract fines and/or other penalties.</p>" +
      "<p>All newly admitted students are advised to strictly follow the outlined instructions, arrive early, and comply with procession guidelines to ensure a smooth and successful matriculation ceremony.</p>",
    tags: ["Nasarawa State University, Keffi (NSUK)", "University"],
  },
];

// Sort posts by date descending (most recent first)
export const posts = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));

export function getPostById(id?: string | undefined) {
  if (!id) return undefined;
  return posts.find((p) => p.id === id);
}
