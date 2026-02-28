export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  seniority?: string;
  summary: string;
  responsibilities: string[];
};

export const jobs: Job[] = [
  {
    id: "senior-designer",
    title: "Senior Product Designer",
    location: "Lagos",
    type: "Full-time",
    seniority: "Senior",
    summary: "Lead product design across web and mobile projects.",
    responsibilities: [
      "Design end-to-end user experiences",
      "Mentor junior designers",
      "Collaborate with PMs and engineers",
    ],
  },
  {
    id: "pm-growth",
    title: "Growth Product Manager",
    location: "Remote",
    type: "Full-time",
    seniority: "Mid",
    summary: "Run data-driven experiments to scale acquisition.",
    responsibilities: [
      "Define growth experiments",
      "Analyze funnels",
      "Coordinate cross-functional teams",
    ],
  },
  {
    id: "junior-developer",
    title: "Frontend Developer (Junior)",
    location: "Jos",
    type: "Contract",
    seniority: "Junior",
    summary: "Work with the design team to implement UI components.",
    responsibilities: [
      "Build accessible components",
      "Write tests",
      "Ship fast iterations",
    ],
  },
  {
    id: "customer-service",
    title: "Customer care Representative",
    location: "Jos",
    type: "Contract",
    seniority: "Junior",
    summary: "TAke care of customers complaint",
    responsibilities: [
      "Build accessible components",
      "Write tests",
      "Ship fast iterations",
    ],
  },
];
