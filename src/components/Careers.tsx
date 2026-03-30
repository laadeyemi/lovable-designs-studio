import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Building2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { jobs } from "@/lib/jobs";


export function Careers({ limit, showAllLink = true }: { limit?: number; showAllLink?: boolean }) {
  // Shows the latest 5 job updates if a limit is provided
  const displayJobs = limit ? [...jobs].reverse().slice(0, limit) : jobs;

  return (
    <section id="careers" className="py-24 bg-card/5">
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
            Job Board
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Job Vacancies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover exciting job opportunities from top companies across various industries. 
            Browse the latest job vacancies near you.
          </p>
        </motion.div>

        {/* Jobs List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {displayJobs.map((job, index) => (
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
                      {job.seniority}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 lg:mb-0">
                    {job.summary}
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
                <Button variant="outline" size="sm" className="lg:ml-4 shrink-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                  <Link to="/careers" className="flex items-center gap-1">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link - Shown on homepage when list is limited */}
        {showAllLink && limit && jobs.length > limit && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <Link
              to="/careers"
              className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              View All Job Vacancies
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to post a job vacancy? Reach out to advertise your opening.
          </p>
          <Button variant="heroOutline">
            Post a Job
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
