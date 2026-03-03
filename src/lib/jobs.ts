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
  deadline: string;
}

export const jobs: Job[] = [
  {
    id: "Naval-Architect",
    title: "Naval Architect",
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
    deadline: "Not specific",
  },
];
