import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Senior UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    description: "Lead design projects and mentor junior designers in creating exceptional user experiences.",
  },
  {
    title: "Brand Strategist",
    location: "New York, NY",
    type: "Full-time",
    department: "Strategy",
    description: "Develop brand strategies that connect businesses with their target audiences.",
  },
  {
    title: "Motion Designer",
    location: "Remote",
    type: "Contract",
    department: "Animation",
    description: "Create stunning motion graphics and animations for digital campaigns.",
  },
  {
    title: "Junior Graphic Designer",
    location: "Los Angeles, CA",
    type: "Full-time",
    department: "Design",
    description: "Join our creative team and grow your skills working on diverse design projects.",
  },
];

export function Careers() {
  return (
    <section id="careers" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Join Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Open <span className="text-gradient">Positions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're always looking for talented individuals to join our creative team. 
            Check out our current openings below.
          </p>
        </motion.div>

        {/* Jobs List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {job.department}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 lg:mb-0">
                    {job.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                </div>

                {/* Apply Button */}
                <Button variant="outline" size="sm" className="lg:ml-4 shrink-0">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see a role that fits? We'd still love to hear from you.
          </p>
          <Button variant="heroOutline">
            Send Open Application
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
