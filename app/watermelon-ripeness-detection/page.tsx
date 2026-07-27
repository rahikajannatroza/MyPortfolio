import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCamera,
  FaChartLine,
  FaCode,
  FaGithub,
  FaMicrophone,
  FaMobileAlt,
  FaServer,
  FaWaveSquare,
} from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa6";

const technologies = [
  "Python",
  "YOLO",
  "Roboflow",
  "TensorFlow",
  "Keras",
  "FastAPI",
  "React Native",
  "Expo",
  "MFCC",
  "FFT",
  "PSD",
  "Deep Learning",
];

const features = [
  {
    title: "Visual Ripeness Detection",
    description:
      "YOLO-based object detection models analyze watermelon images and classify different ripeness stages.",
    icon: FaCamera,
  },
  {
    title: "Acoustic Signal Analysis",
    description:
      "Tapping sounds are processed using FFT, PSD, resonant frequency, decay duration, and MFCC features.",
    icon: FaWaveSquare,
  },
  {
    title: "Audio Classification",
    description:
      "ANN, 1D-CNN, and 2D-CNN models were trained and compared for acoustic ripeness classification.",
    icon: FaMicrophone,
  },
  {
    title: "Fusion Learning",
    description:
      "Visual and acoustic model predictions are combined to improve classification reliability.",
    icon: FaChartLine,
  },
  {
    title: "Mobile Application",
    description:
      "A React Native mobile prototype captures images, video, and audio for real-time assessment.",
    icon: FaMobileAlt,
  },
  {
    title: "Real-Time Backend",
    description:
      "FastAPI connects the trained deep-learning models with the mobile application for prediction and testing.",
    icon: FaServer,
  },
];

const workflow = [
  {
    number: "01",
    title: "Data Collection",
    description:
      "Collected watermelon images and tapping sound recordings representing different ripeness stages.",
  },
  {
    number: "02",
    title: "Data Processing",
    description:
      "Prepared image datasets in Roboflow and extracted acoustic features from recorded tapping sounds.",
  },
  {
    number: "03",
    title: "Model Training",
    description:
      "Trained YOLO visual models and ANN, 1D-CNN, and 2D-CNN acoustic classification models.",
  },
  {
    number: "04",
    title: "Fusion Prediction",
    description:
      "Combined visual and acoustic probabilities to produce a more reliable final ripeness prediction.",
  },
  {
    number: "05",
    title: "Application Integration",
    description:
      "Integrated the trained models with FastAPI and connected them to a React Native mobile prototype.",
  },
];

export default function WatermelonRipenessPage() {
  return (
    <main className="min-h-screen bg-[#000319] text-white">
      <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/#projects"
            className="inline-flex items-center gap-3 rounded-full bg-purple-500 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-600"
          >
            Back to Projects
            <FaLocationArrow />
          </a>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                Master&apos;s Thesis Project
              </p>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Watermelon Ripeness Detection System Using{" "}
                <span className="text-purple-400">
                  YOLO, Audio Analysis, and Fusion Learning
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                A non-destructive watermelon ripeness detection system that
                combines computer vision, acoustic signal processing, deep
                learning, and fusion-based classification.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://github.com/rahikajannatroza/RipenessDetection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-6 py-3 text-sm font-semibold transition hover:bg-purple-600"
                >
                  <FaGithub className="text-lg" />
                  View source
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-purple-950/30">
              <div className="relative aspect-[2.75/1] w-full overflow-hidden rounded-2xl bg-[#080b25]">
                <Image
                  src="/watermelon-ripeness.png"
                  alt="Watermelon ripeness detection system"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Project Overview
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Non-destructive ripeness assessment
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/65">
            <p>
              This thesis project investigates whether watermelon ripeness can
              be assessed without cutting or damaging the fruit. The system
              analyzes both external visual characteristics and acoustic
              responses produced by tapping the watermelon.
            </p>

            <p>
              YOLO-based models classify ripeness stages from images, while
              audio models analyze frequency-domain and time-domain signal
              characteristics. The outputs are then combined using fusion
              learning to produce a more reliable final prediction.
            </p>

            <p>
              A mobile application prototype was also developed to capture
              images, video, and audio and send the collected data to a backend
              API for real-time model inference.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Core Features
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              A multimodal deep-learning system
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-[#070a20] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-xl text-purple-400">
                    <Icon />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/60">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              System Workflow
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              From raw data to ripeness prediction
            </h2>
          </div>

          <div className="space-y-5">
            {workflow.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[100px_1fr] md:items-center"
              >
                <span className="text-4xl font-bold text-purple-400/50">
                  {step.number}
                </span>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="leading-7 text-white/60">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#070a20] p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                <FaCode className="text-xl" />
              </div>

              <h2 className="mb-5 text-2xl font-bold">
                Computer Vision Pipeline
              </h2>

              <ul className="space-y-4 text-sm leading-7 text-white/65">
                <li>
                  • Annotated and managed watermelon image datasets using
                  Roboflow.
                </li>
                <li>
                  • Trained YOLO models to detect watermelons and classify
                  ripeness stages.
                </li>
                <li>
                  • Evaluated model accuracy, confidence scores, and
                  classification performance.
                </li>
                <li>
                  • Prepared the trained model for backend and mobile
                  integration.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#070a20] p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                <FaMicrophone className="text-xl" />
              </div>

              <h2 className="mb-5 text-2xl font-bold">
                Acoustic Analysis Pipeline
              </h2>

              <ul className="space-y-4 text-sm leading-7 text-white/65">
                <li>• Recorded tapping sounds from watermelon samples.</li>
                <li>
                  • Extracted FFT, PSD, resonant frequency, decay duration, and
                  MFCC features.
                </li>
                <li>
                  • Trained ANN, 1D-CNN, and 2D-CNN classification models.
                </li>
                <li>
                  • Compared model performance and combined acoustic results
                  with visual predictions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                  Fusion Learning
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  Combining image and audio predictions
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-white/65">
                <p>
                  Visual analysis alone can be affected by lighting, camera
                  angle, surface color, and image quality. Acoustic analysis can
                  also vary because of tapping force, background noise, and
                  recording conditions.
                </p>

                <p>
                  The fusion approach combines the confidence scores produced by
                  the visual and acoustic models. This allows the final
                  classifier to consider complementary information from both
                  modalities and improve the reliability of the ripeness
                  assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Technologies
            </p>

            <h2 className="text-3xl font-bold">Tools used in this project</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/75 transition hover:border-purple-400 hover:text-purple-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
