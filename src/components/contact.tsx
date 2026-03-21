import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/data/portfolio";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function hasEmailJsConfig() {
  return Boolean(
      EMAILJS_PUBLIC_KEY &&
      EMAILJS_SERVICE_ID &&
      EMAILJS_TEMPLATE_ID,
  );
}

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasEmailJsConfig()) {
      toast({
        title: "Contact form not configured",
        description:
            "Add your EmailJS environment variables before using the form.",
        variant: "destructive",
      });
      return;
    }

    if (!formRef.current) {
      toast({
        title: "Unable to send message",
        description: "The contact form was not ready. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          { publicKey: EMAILJS_PUBLIC_KEY },
      );

      toast({
        title: "Message sent",
        description: "Thanks — your email was sent successfully.",
      });

      formRef.current.reset();
    } catch (error: any) {
      console.error("EmailJS send failed:", error);
      console.error("status:", error?.status);
      console.error("text:", error?.text);

      toast({
        title: "Failed to send message",
        description:
            error?.text || "Please try again in a moment or reach out directly by email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" className="py-24 bg-background relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="md:col-span-5 space-y-4"
            >
              <a
                  href={`tel:${PORTFOLIO.personal.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="text-foreground font-semibold">{PORTFOLIO.personal.phone}</p>
                </div>
              </a>

              <a
                  href={`mailto:${PORTFOLIO.personal.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-foreground font-semibold">{PORTFOLIO.personal.email}</p>
                </div>
              </a>

              <a
                  href={PORTFOLIO.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">GitHub</p>
                  <p className="text-foreground font-semibold">Explore my code</p>
                </div>
              </a>

              <a
                  href={PORTFOLIO.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground font-semibold">Let&apos;s connect</p>
                </div>
              </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="md:col-span-7 bg-card border border-border/50 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/5"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="time" value={new Date().toLocaleString()} readOnly />
                <input type="hidden" name="to_email" value={PORTFOLIO.personal.email} readOnly />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <input
                      type="text"
                      id="subject"
                      name="title"
                      required
                      placeholder="Job opportunity, project idea, collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y"
                  />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
  );
}