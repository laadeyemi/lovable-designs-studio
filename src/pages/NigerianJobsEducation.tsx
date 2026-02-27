import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export default function NigerianJobsEducation() {
  const jobs = [
    {
      id: 1,
      title: "Inbound Call Center Operator",
      company: "Cybercollect Limited",
      location: "Remote",
      salary: "$70,000 - $150,000/year",
      type: "Full-time",
      description: "Handle inbound customer calls for fintech company with 2+ years experience in collections, lending, or financial services"
    },
    {
      id: 2,
      title: "Remote Sales Closer",
      company: "Crezivanta",
      location: "Remote",
      salary: "Competitive",
      type: "Full-time",
      description: "Sales calls, presentation of services, negotiation and deal closing for web design agency"
    },
    {
      id: 3,
      title: "Remote Sales Setter",
      company: "Crezivanta",
      location: "Remote",
      salary: "Competitive",
      type: "Contract",
      description: "Appointment setting and lead generation for web design and browser extension agency"
    },
    {
      id: 4,
      title: "National Coordinator",
      company: "Wikimedia Nigeria",
      location: "Remote",
      salary: "Competitive",
      type: "Full-time",
      description: "Provide leadership, coordinate stakeholders, oversee grants, and ensure effective implementation of programs"
    },
    {
      id: 5,
      title: "Executive Assistant to the CEO",
      company: "Alpaca",
      location: "Remote",
      salary: "Competitive + Benefits",
      type: "Full-time",
      description: "Support CEO with experience in investment banking and entrepreneurship across multiple markets"
    },
    {
      id: 6,
      title: "Social Media Lead Generation Manager",
      company: "OBIS Junction Ltd",
      location: "Remote",
      salary: "Competitive",
      type: "Full-time",
      description: "Build, manage, and grow multiple social media accounts for lead generation"
    },
    {
      id: 7,
      title: "Geological Database Assistant",
      company: "PEC GeoSystems Inc",
      location: "Remote",
      salary: "Competitive",
      type: "Full-time",
      description: "Support senior database geologist in managing geological data and assay data"
    },
    {
      id: 8,
      title: "Freelance Student Recruitment Officer",
      company: "Zain Global",
      location: "Remote",
      salary: "Freelance",
      type: "Contract",
      description: "Source and counsel prospective students seeking admission into international universities"
    },
    {
      id: 9,
      title: "Creative Strategist",
      company: "Wellagainremedy Global Limited",
      location: "Remote",
      salary: "Competitive",
      type: "Full-time",
      description: "Mid-level creative role requiring S.S.C.E qualification with 3+ years experience"
    },
    {
      id: 10,
      title: "Social Media Manager and Graphic Designer",
      company: "WORKNOON",
      location: "Remote",
      salary: "Competitive + Benefits",
      type: "Full-time",
      description: "Creative social media management and graphic design with work from home stipend and health insurance"
    },
    {
      id: 11,
      title: "Channel Manager",
      company: "Teclib",
      location: "Remote",
      salary: "Competitive",
      type: "Full-time",
      description: "Client acquisition and channel management for mid-level professional with degree and 3+ years experience"
    },
    {
      id: 12,
      title: "Contract Product Designer",
      company: "Authority Wit",
      location: "Remote",
      salary: "Contract",
      type: "Contract",
      description: "Web application design from discovery to developer-ready designs with expert Figma proficiency"
    },
    {
      id: 13,
      title: "Staff Database Administrator",
      company: "Wikimedia Foundation",
      location: "Remote",
      salary: "Competitive",
      type: "Full-time",
      description: "Database design, operation, and optimization with strong expertise in MariaDB"
    },
    {
      id: 14,
      title: "Senior Software Engineer (Privacy)",
      company: "Wikimedia Foundation",
      location: "Remote",
      salary: "Senior Level",
      type: "Full-time",
      description: "Seasoned software engineer designing security features for large-scale systems"
    },
    {
      id: 15,
      title: "Senior Payroll Specialist (Global)",
      company: "Alpaca",
      location: "Remote",
      salary: "Senior + Benefits",
      type: "Full-time",
      description: "International payroll management across multiple tax jurisdictions with Employer of Record experience"
    },
    {
      id: 16,
      title: "UI/UX Designer",
      company: "Multiple Companies",
      location: "Remote",
      salary: "$50,000 - $120,000/year",
      type: "Full-time",
      description: "Design user interfaces and experiences for web and mobile applications"
    },
    {
      id: 17,
      title: "Data Analyst",
      company: "Tech Companies",
      location: "Remote/Lagos",
      salary: "$40,000 - $100,000/year",
      type: "Full-time",
      description: "Analyze business data and provide insights for strategic decision-making"
    },
    {
      id: 18,
      title: "Full Stack Developer",
      company: "Tech Startups",
      location: "Remote",
      salary: "$60,000 - $150,000/year",
      type: "Full-time",
      description: "Develop complete web applications using modern technologies and frameworks"
    },
    {
      id: 19,
      title: "Content Writer",
      company: "Marketing Agencies",
      location: "Remote",
      salary: "$30,000 - $80,000/year",
      type: "Full-time/Freelance",
      description: "Create engaging content for blogs, websites, and social media platforms"
    },
    {
      id: 20,
      title: "Business Development Executive",
      company: "Growing Companies",
      location: "Remote/Hybrid",
      salary: "$45,000 - $110,000/year",
      type: "Full-time",
      description: "Identify new business opportunities and expand company market presence"
    }
  ];

  const educationPosts = [
    "Understanding JAMB: The Gateway to Nigerian University Education",
    "Complete Guide to JAMB Registration: Steps and Requirements 2024",
    "Preparing for JAMB: Study Tips and Resources",
    "JAMB Subject Combinations: Making the Right Choice",
    "JAMB Score Interpretation: Understanding Your Results",
    "Post-JAMB: What Happens After You Write the Exam",
    "NYSC Scheme for Fresh Graduates: Everything You Need to Know",
    "NYSC Mobilization Process: Timeline and Requirements",
    "Life in NYSC Orientation Camp: What to Expect",
    "NYSC Community Development Service: Making an Impact",
    "NYSC Certificate: Importance and Verification Process",
    "Career Opportunities After NYSC Service",
    "Nigerian University Admission: JAMB to Final Acceptance",
    "Top Universities in Nigeria and Their Ranking",
    "Choosing Your Ideal University Course in Nigeria",
    "UTME vs Direct Entry: Which Path is Right for You?",
    "Managing University Life as a Nigerian Student",
    "Funding Your Nigerian University Education",
    "Scholarship Opportunities for Nigerian Students",
    "University Accommodation: Hostel Living During Your Studies",
    "Balancing Academics and Social Life in Nigerian Universities",
    "Professional Certification During University Studies",
    "Internship Opportunities for Nigerian University Students",
    "Remote Employment While Pursuing University Education",
    "Building Your Portfolio as a Nigerian University Student",
    "Networking in Nigerian Universities: Key Relationships",
    "Graduate Employment Prospects and Career Planning",
    "Alumni Networks: Leveraging University Connections",
    "Postgraduate Studies in Nigeria and Abroad",
    "Success Stories: Nigerian University Graduates Making Impact"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nigerian Job Opportunities & University Education Guide
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Complete Resource for Career Development and Education in Nigeria
          </p>
          <p className="text-gray-500">
            Updated: February 2026 | 20 Job Positions | 30 Education Topics
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="jobs">20 Job Opportunities</TabsTrigger>
            <TabsTrigger value="education">30 Education Topics</TabsTrigger>
          </TabsList>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">{job.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Location</p>
                        <p className="font-semibold text-gray-900">{job.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Salary</p>
                        <p className="font-semibold text-gray-900">{job.salary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Guide to Nigerian University Education</CardTitle>
                <CardDescription>
                  30 Essential Topics for Students and Aspiring Graduates
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* JAMB Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-blue-600 mr-3">JAMB</Badge>
                    Joint Admissions and Matriculation Board
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card className="bg-blue-50">
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">•</span>
                            <span>Understanding JAMB: The Gateway to Nigerian University Education</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">•</span>
                            <span>Complete Guide to JAMB Registration: Steps and Requirements 2024</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">•</span>
                            <span>Preparing for JAMB: Study Tips and Resources</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">•</span>
                            <span>JAMB Subject Combinations: Making the Right Choice</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">•</span>
                            <span>JAMB Score Interpretation: Understanding Your Results</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-50">
                      <CardContent className="pt-4">
                        <h4 className="font-bold text-gray-900 mb-3">Why JAMB Matters</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The Joint Admissions and Matriculation Board (JAMB) serves as the official body responsible for conducting entrance examinations into tertiary institutions in Nigeria. Your JAMB score determines your eligibility for university admission.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Key Facts:</strong> JAMB exams are computer-based (CBT), offered multiple times per year, and your score is valid for 2 years.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* NYSC Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-green-600 mr-3">NYSC</Badge>
                    National Youth Service Corps
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card className="bg-green-50">
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-3">•</span>
                            <span>NYSC Scheme for Fresh Graduates: Everything You Need to Know</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-3">•</span>
                            <span>NYSC Mobilization Process: Timeline and Requirements</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-3">•</span>
                            <span>Life in NYSC Orientation Camp: What to Expect</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-3">•</span>
                            <span>NYSC Community Development Service: Making an Impact</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-3">•</span>
                            <span>NYSC Certificate: Importance and Verification Process</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 font-bold mr-3">•</span>
                            <span>Career Opportunities After NYSC Service</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50">
                      <CardContent className="pt-4">
                        <h4 className="font-bold text-gray-900 mb-3">NYSC Overview</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The National Youth Service Corps (NYSC) is a 12-month mandatory service program for Nigerian graduates aged 30 and below. It aims to foster unity, development, and leadership among Nigerian youth.
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Key Components:</strong>
                        </p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 3 weeks orientation camp</li>
                          <li>• 9 months community service</li>
                          <li>• Certificate upon completion</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* University Education Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-purple-600 mr-3">EDUCATION</Badge>
                    University Education in Nigeria
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-base">Admission & Selection</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sm">
                          <li>• Nigerian University Admission: JAMB to Final Acceptance</li>
                          <li>• Top Universities in Nigeria and Their Ranking</li>
                          <li>• Choosing Your Ideal University Course in Nigeria</li>
                          <li>• UTME vs Direct Entry: Which Path is Right for You?</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-base">Student Life & Support</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sm">
                          <li>• Managing University Life as a Nigerian Student</li>
                          <li>• Funding Your Nigerian University Education</li>
                          <li>• Scholarship Opportunities for Nigerian Students</li>
                          <li>• University Accommodation: Hostel Living During Your Studies</li>
                          <li>• Balancing Academics and Social Life</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-base">Career Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sm">
                          <li>• Professional Certification During University Studies</li>
                          <li>• Internship Opportunities for Nigerian Students</li>
                          <li>• Remote Employment While Pursuing University Education</li>
                          <li>• Building Your Portfolio as a Nigerian Student</li>
                          <li>• Networking in Nigerian Universities</li>
                          <li>• Graduate Employment Prospects</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Additional Topics */}
                  <Card className="mt-4 bg-gradient-to-r from-purple-50 to-blue-50">
                    <CardHeader>
                      <CardTitle className="text-base">Career & Advancement Topics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-2">Career Growth:</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Alumni Networks: Leveraging University Connections</li>
                            <li>• Postgraduate Studies in Nigeria and Abroad</li>
                            <li>• Success Stories: Nigerian University Graduates Making Impact</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-2">Practical Skills:</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Post-JAMB: What Happens After You Write the Exam</li>
                            <li>• Professional Certification Programs</li>
                            <li>• Building Your Professional Network</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Summary Stats */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <CardHeader>
                <CardTitle className="text-white">Education Resources Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold">30</p>
                    <p className="text-slate-300">Education Topics Covered</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold">3</p>
                    <p className="text-slate-300">Main Focus Areas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold">100%</p>
                    <p className="text-slate-300">Nigerian Context</p>
                  </div>
                </div>
                <p className="text-slate-300 mt-6 text-center">
                  This comprehensive guide covers JAMB entrance exams, NYSC service, university admission processes, 
                  student life, funding options, internship opportunities, and career development pathways for Nigerian 
                  students and graduates.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">JAMB Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Register for JAMB examinations and check your results
              </p>
              <a href="https://www.jamb.org.ng/" className="text-blue-600 hover:underline text-sm font-semibold">
                Visit JAMB Official →
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">NYSC Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Register for NYSC service and check mobilization status
              </p>
              <a href="https://www.nysc.gov.ng/" className="text-blue-600 hover:underline text-sm font-semibold">
                Visit NYSC Official →
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Job Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Explore remote and Nigeria-based job positions
              </p>
              <a href="https://www.indeed.com/jobs?q=Nigeria&l=Remote" className="text-blue-600 hover:underline text-sm font-semibold">
                Browse Jobs →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
