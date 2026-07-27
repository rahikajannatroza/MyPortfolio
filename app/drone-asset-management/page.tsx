import { FaLocationArrow } from "react-icons/fa6";

const DroneAssetManagementPage = () => {
  const technologies = [
    "YOLO",
    "MobileNet SSD",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "RFID",
    "Barcode Detection",
    "QR Code Detection",
    "Autonomous Navigation",
    "Hardware Integration",
    "Warehouse Automation",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000319] px-6 py-24 text-white sm:px-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[160px]" />

      <section className="relative z-10 mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
          Patent Pending | 2024 - Present
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Autonomous Indoor Drone-Based{" "}
          <span className="text-purple-400">Asset Management System</span>
        </h1>

        <p className="mb-10 max-w-4xl text-lg leading-relaxed text-white/65 md:text-xl">
          An autonomous drone-based system designed for warehouse asset
          detection, verification, counting, and tracking using machine
          learning, computer vision, and asset identification technologies.
        </p>

        {/* Project image */}
        <div className="mb-12 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-purple-950/30">
          <img
            src="/drone-project.png"
            alt="Autonomous Indoor Drone-Based Asset Management System"
            className="h-[300px] w-full rounded-2xl object-cover md:h-[450px]"
          />
        </div>

        {/* Project information */}
        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.07]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Category
            </p>

            <h3 className="mb-2 text-xl font-bold">Project Type</h3>

            <p className="leading-7 text-white/60">
              Senior Design / Research / Startup
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.07]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Development
            </p>

            <h3 className="mb-2 text-xl font-bold">Status</h3>

            <p className="leading-7 text-white/60">Patent Pending</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.07]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Duration
            </p>

            <h3 className="mb-2 text-xl font-bold">Timeline</h3>

            <p className="leading-7 text-white/60">2024 - Present</p>
          </article>
        </div>

        {/* Project overview */}
        <section className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20 md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            About the project
          </p>

          <h2 className="mb-5 text-3xl font-bold">Project Overview</h2>

          <p className="text-lg leading-8 text-white/65">
            This project focuses on developing an autonomous drone-based system
            for warehouse asset management. The system detects, verifies, and
            counts assets using advanced machine learning techniques such as
            YOLO and MobileNet SSD for object detection and classification. It
            also integrates RFID, barcodes, and QR codes to support
            comprehensive asset identification.
          </p>
        </section>

        {/* Key contributions */}
        <section className="mb-10 rounded-3xl border border-white/10 bg-[#070a20] p-8 shadow-xl shadow-black/20 md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Responsibilities
          </p>

          <h2 className="mb-6 text-3xl font-bold">Key Contributions</h2>

          <ul className="space-y-4 text-lg leading-8 text-white/65">
            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Designed and implemented a fully functional prototype, including
                both hardware integration and software development.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Applied deep learning models for real-time object detection and
                classification.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Developed autonomous indoor navigation capabilities for
                efficient warehouse asset tracking.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Integrated YOLO and MobileNet SSD for machine-learning-based
                detection and classification.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Used RFID, barcodes, and QR codes for broader asset
                identification and verification.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Conducted system validation and performance assessment.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Proposed improvements to enhance detection accuracy and expand
                asset identification capabilities.
              </span>
            </li>
          </ul>
        </section>

        {/* Technologies */}
        <section className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20 md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Technology stack
          </p>

          <h2 className="mb-6 text-3xl font-bold">Technologies Used</h2>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 transition hover:border-purple-400/60 hover:bg-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-10 rounded-3xl border border-white/10 bg-[#070a20] p-8 shadow-xl shadow-black/20 md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Recognition
          </p>

          <h2 className="mb-6 text-3xl font-bold">Achievements</h2>

          <ul className="space-y-4 text-lg leading-8 text-white/65">
            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Presented at Innovation Day as the only undergraduate group
                selected.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Presented at an IEEE conference and received First Place in the
                Senior Design Category.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Currently working on turning the project into a startup company.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Currently working on publishing an academic paper based on this
                project.
              </span>
            </li>

            <li className="flex gap-4">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
              <span>
                Patent pending for the autonomous indoor drone-based asset
                management system.
              </span>
            </li>
          </ul>
        </section>

        {/* Future work */}
        <section className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-white/[0.03] to-transparent p-8 shadow-xl shadow-black/20 md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Next steps
          </p>

          <h2 className="mb-5 text-3xl font-bold">Future Work</h2>

          <p className="text-lg leading-8 text-white/65">
            Future development includes improving object detection accuracy,
            expanding the range of identifiable assets, refining indoor
            navigation performance, preparing the system for commercial use, and
            continuing research toward academic publication.
          </p>
        </section>

        <div className="mt-12">
          <a
            href="/#projects"
            className="inline-flex items-center gap-3 rounded-full bg-purple-500 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-600"
          >
            Back to Projects
            <FaLocationArrow />
          </a>
        </div>
      </section>
    </main>
  );
};

export default DroneAssetManagementPage;
