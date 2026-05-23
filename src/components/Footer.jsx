import { ActionButton } from "./ActionButton";

export function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-brand">
        <span className="eyebrow">AI Quiz Arena</span>
        <p>
          Our platform transforms static testing into an immersive,
          high-velocity cognitive arena. By marrying fluid visual motion with
          specialized AI architectures, we have engineered an ecosystem designed
          to stretch your analytical boundaries, consolidate memory retention,
          and drastically accelerate your exam readiness. Whether calibrating
          your skills for elite competitive tracks like the Odisha RI/AMIN exams
          or auditing your foundation in advanced technology fields, this is
          where raw knowledge evolves into rapid execution. Experience a
          frictionless pathway to intellectual expansion. Our design strips away
          traditional user interface distractions, channeling your focus
          entirely into precision-engineered, four-option prompts. With
          real-time telemetry tracking your progress, every session serves as a
          deliberate step toward raising your baseline intelligence.
          Intellectual development should never be bottlenecked by rigid design.
          Built entirely upon a modular React infrastructure, our application
          uses fluid, motion-driven screen transitions that adapt
          instantaneously to your processing speed. Navigate dense layers of
          geography, history, and current affairs with zero layout friction.
          True intellectual mastery requires continuity. Our system utilizes
          localized state persistence to securely cache your scores, custom
          profile configurations, and precision metrics directly on your device.
          Never lose your momentum—return to the arena instantly with your
          performance history fully preserved and optimized for the next
          challenge. The Performance Blueprint: Speed commands the leaderboard,
          but precision builds the foundation. Outscore the baseline parameters
          to feature your custom profile metrics across the platform matrix.
        </p>
      </div>

      <div className="footer-grid">
        <div>
          <span className="footer-heading">Quick links</span>
          <a href="#quiz-lab">Quiz lab</a>
          <a href="#features">Features</a>
          <a href="#register">Register</a>
        </div>

        <div>
          <span className="footer-heading">Explore</span>
          <a href="#gallery">Gallery</a>
          <a href="#top">Back to top</a>
          <a href="#">Privacy</a>
        </div>

        <div className="footer-newsletter">
          <span className="footer-heading">Newsletter</span>
          <p>Subscribe for fresh questions, fast feedback, and product news.</p>
          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="field-wrap">
              <span className="field-label">Email address</span>
              <input
                className="field-input"
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
              />
            </label>
            <ActionButton type="submit">Subscribe</ActionButton>
          </form>
        </div>
      </div>

      <div className="footer-credit">
        <p>
          © 2026 Quiz Arena. Built for playful learning and polished quiz flow.
        </p>
      </div>
    </footer>
  );
}
