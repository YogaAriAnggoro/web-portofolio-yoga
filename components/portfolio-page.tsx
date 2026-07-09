"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Palette,
  Phone,
  Rocket,
  Send,
  Sparkles,
  Menu,
  X,
  Sun,
  Moon,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiFigma } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Saya", href: "#tentang" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Skill", href: "#skill" },
  { label: "Project", href: "#project" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Kontak", href: "#kontak" },
];

const aboutCards = [
  {
    title: "IT Programmer",
    icon: Code2,
    desc: "Membangun antarmuka web responsif dan maintainable dengan pendekatan modern, clean code, dan berorientasi pengguna.",
  },
  {
    title: "UI/UX Designer",
    icon: SiFigma,
    desc: "Merancang alur, wireframe, dan prototype yang fokus pada usability, konsistensi visual, serta pengalaman digital yang intuitif.",
  },
  {
    title: "Graphic Designer",
    icon: Palette,
    desc: "Menciptakan elemen visual, identitas brand, dan konten kreatif yang kuat untuk kebutuhan digital maupun media sosial.",
  },
];

const education = [
  {
    year: "2023 - Sekarang",
    school: "Universitas Negeri Surabaya",
    major: "D4 Manajemen Informatika",
    logo: "/img/logounesa.png",
    desc: "Mempelajari rekayasa perangkat lunak, sistem informasi, pemrograman web frontend & backend, basis data, dan manajemen proyek teknologi informasi.",
  },
  {
    year: "2020 - 2023",
    school: "SMAN 1 Sukomoro",
    major: "MIPA (Matematika dan Ilmu Pengetahuan Alam)",
    logo: "/img/logosmasas.png",
    desc: "Aktif dalam kegiatan OSIS dan ekstrakurikuler teknologi informasi, membangun fondasi logika dan pemecahan masalah.",
  },
];

const skillCards = [
  {
    title: "Front-End Developer",
    accent: "cyan" as const,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "React", "Next.js"],
    level: 82,
    icon: Code2,
  },
  {
    title: "UI/UX Designer",
    accent: "purple" as const,
    skills: ["Figma", "Wireframe", "Prototype", "User Flow", "Design System"],
    level: 78,
    icon: SiFigma,
  },
  {
    title: "Graphic Designer",
    accent: "default" as const,
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "CorelDRAW", "Branding"],
    level: 80,
    icon: Palette,
  },
];

const projectCategories = ["Semua", "Web Dev", "UI/UX Design", "Graphic Design"];

const projects = [
  {
    title: "Website Sinergi Unesa",
    category: "Web Dev",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    desc: "Pengembangan website organisasi dengan fokus tampilan modern, kemudahan akses lintas perangkat, serta struktur antarmuka yang mendukung publikasi informasi secara jelas dan profesional.",
    image: "/img/sinergiunesa.png",
    github: "https://github.com/YogaAriAnggoro/sinergiunesa.or.id",
    demo: "#",
  },
  {
    title: "Website Vocafit Unesa",
    category: "Web Dev",
    tags: ["React", "CSS Variables", "Framer Motion"],
    desc: "Membangun dasbor data anggota, kegiatan, dan pelaporan internal organisasi secara terpusat dan responsif.",
    image: "/img/vocafit.png",
    github: "https://github.com/reylighpsf/camp4-frontend-master.git",
    demo: "#https://vocafit.tail4d4969.ts.net/",
  },
  {
    title: "UI Redesign Akademik Mobile",
    category: "UI/UX Design",
    tags: ["Figma", "User Flow", "Prototype"],
    desc: "Merancang ulang antarmuka aplikasi akademik mahasiswa untuk meningkatkan kemudahan pengisian KRS dan akses transkrip nilai.",
    image: "/img/sinergiunesa.png",
    github: "#",
    demo: "https://figma.com",
  },
  {
    title: "Design System E-Learning",
    category: "UI/UX Design",
    tags: ["Figma", "Design System", "Components"],
    desc: "Mengembangkan pustaka komponen UI yang konsisten, modular, dan terstandardisasi untuk platform pembelajaran digital.",
    image: "/img/sinergiunesa.png",
    github: "#",
    demo: "https://figma.com",
  },
  {
    title: "Identitas Visual & Branding",
    category: "Graphic Design",
    tags: ["Illustrator", "Photoshop", "Branding"],
    desc: "Menciptakan logo, maskot, palet warna, dan panduan identitas visual resmi untuk memperkuat citra publik organisasi.",
    image: "/img/sinergiunesa.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Instagram Feeds Media Creative",
    category: "Graphic Design",
    tags: ["Canva", "CorelDRAW", "Social Media"],
    desc: "Merancang templat postingan kreatif mingguan untuk promosi program kerja departemen dan interaksi interaktif audiens.",
    image: "/img/sinergiunesa.png",
    github: "#",
    demo: "#",
  },
];

const experiences = [
  {
    year: "2023-2025",
    title: "UKM Formadiksi KIP-K Unesa",
    role: "Staff PSDM & Kominfo",
    desc: "Berkontribusi pada pengembangan SDM, publikasi kegiatan, serta koordinasi komunikasi internal organisasi.",
  },
  {
    year: "2025",
    title: "Sinergi Unesa",
    role: "Staff Media Creative",
    desc: "Mengelola konten visual dan strategi media sosial untuk meningkatkan keterlibatan audiens kegiatan organisasi.",
  },
  {
    year: "2025",
    title: "Website Sinergi Unesa",
    role: "Front-End Developer",
    desc: "Membangun dan merawat website organisasi, fokus pada tampilan responsif, performa, dan konsistensi UI.",
  },
  {
    year: "2026",
    title: "BEM Fakultas Vokasi Unesa",
    role: "Anggota Aktif Departemen Risnovtek",
    desc: "Terlibat dalam inisiatif inovasi teknologi dan kolaborasi lintas divisi untuk program pengembangan organisasi.",
  },
];

const socialLinks = [
  {
    title: "Instagram",
    value: "@yogaariii__",
    href: "https://www.instagram.com/yogaariii__/",
    icon: FaInstagram,
  },
  {
    title: "TikTok",
    value: "@checkoutpilihanmu_",
    href: "https://tiktok.com/@checkoutpilihanmu_",
    icon: FaTiktok,
  },
  {
    title: "LinkedIn",
    value: "yoga-ari-anggoro",
    href: "https://www.linkedin.com/in/yoga-ari-anggoro-/",
    icon: FaLinkedinIn,
  },
  {
    title: "WhatsApp",
    value: "+62 877 9772 8083",
    href: "https://wa.me/6287797728083",
    icon: FaWhatsapp,
  },
  {
    title: "GitHub",
    value: "github.com/yogaarianggoro",
    href: "https://github.com/yogaarianggoro",
    icon: FaGithub,
  },
  {
    title: "Email",
    value: "yoga.23049@mhs.unesa.ac.id",
    href: "mailto:yoga.23049@mhs.unesa.ac.id",
    icon: Mail,
  },
];

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function PortfolioPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const filteredProjects = activeCategory === "Semua"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(142,203,255,0.25),transparent_34%),radial-gradient(circle_at_85%_5%,rgba(255,232,154,0.22),transparent_30%),linear-gradient(180deg,var(--background)_0%,var(--background)_100%)] dark:bg-[radial-gradient(circle_at_15%_10%,rgba(64,142,207,0.12),transparent_34%),radial-gradient(circle_at_85%_5%,rgba(214,181,51,0.06),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-border bg-card/85 backdrop-blur-xl transition-colors duration-300 dark:bg-card/75">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#beranda" className="text-sm font-bold tracking-[0.2em] text-[#1d5d97] dark:text-[#8ecbff]">
            YOGA ARI
          </a>
          <ul className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-foreground/80 transition hover:text-[#1d5d97] dark:hover:text-[#8ecbff]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition hover:border-[#8ecbff] hover:text-[#1d5d97] dark:hover:text-[#8ecbff]"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="size-4.5" /> : <Sun className="size-4.5" />}
            </button>

            {/* Let's Talk (Desktop) */}
            <a
              href="#kontak"
              className="hidden rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition hover:border-[#8ecbff] hover:text-[#1d5d97] dark:hover:text-[#8ecbff] sm:inline-block"
            >
              Let&apos;s Talk
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition hover:border-[#8ecbff] hover:text-[#1d5d97] dark:hover:text-[#8ecbff] lg:hidden"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-b border-border bg-card/95 backdrop-blur-xl lg:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-4 px-6 py-6">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm font-medium text-foreground/80 transition hover:text-[#1d5d97] dark:hover:text-[#8ecbff]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#kontak"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center rounded-lg border border-border bg-linear-to-r from-[#8ecbff] via-[#ffffff] to-[#ffe89a] px-4 py-2.5 text-xs font-semibold text-[#12304f] transition hover:shadow-md"
                  >
                    Let&apos;s Talk
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-14 pt-16 sm:px-6">
        <motion.section
          id="beranda"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionAnim}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-7">
            <Badge variant="cyan" className="w-fit">
              Mahasiswa D4 Manajemen Informatika - Universitas Negeri Surabaya
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Yoga Ari Anggoro
              </h1>
              <p className="max-w-xl text-lg text-[#4f6f93]">
                Junior Front-End Developer, UI/UX Designer, dan Graphic Designer
                yang fokus menciptakan pengalaman digital modern, rapi, dan
                berorientasi hasil.
              </p>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#5f7d9c]">
              Saya menggabungkan kemampuan teknis pengembangan web dan pendekatan
              desain visual untuk menghasilkan produk digital yang menarik,
              mudah digunakan, dan siap berkembang sesuai kebutuhan bisnis.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#project" className={buttonVariants({ size: "lg" })}>
                Lihat Project <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#kontak"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                Hubungi Saya
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-[#8ecbff]/40 via-transparent to-[#ffe89a]/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-4xl border border-[#d8e9fb] bg-linear-to-b from-white to-[#fff8dc] p-3 shadow-[0_30px_100px_-45px_rgba(142,203,255,0.7)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                <Image
                  src="/img/FOTO PROFILE.png"
                  alt="Foto profil Yoga Ari Anggoro"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="tentang"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          variants={sectionAnim}
          className="space-y-8"
        >
          <div className="space-y-3">
            <Badge variant="purple" className="w-fit">
              Tentang Saya
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">Multidisiplin dan Problem Solver</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {aboutCards.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-[#e8f5ff] text-[#1d5d97]">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <Card>
            <CardContent className="pt-6 text-sm leading-relaxed text-foreground/80">
              Sebagai mahasiswa semester 6 D4 Manajemen Informatika Fakultas
              Vokasi Universitas Negeri Surabaya, saya memiliki minat yang kuat
              pada pengembangan web, UI/UX, dan desain grafis. Saya aktif
              mengembangkan kemampuan melalui proyek nyata, pengalaman organisasi,
              serta pembelajaran berkelanjutan untuk membangun produk digital
              yang relevan, fungsional, dan bernilai.
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="pendidikan"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          variants={sectionAnim}
          className="space-y-8"
        >
          <div className="space-y-3">
            <Badge variant="cyan" className="w-fit">
              Pendidikan
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">Latar Belakang Akademis</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <motion.div key={item.school} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <Card className="h-full overflow-hidden border border-border bg-card/60 backdrop-blur-lg">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="relative flex size-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm border border-border">
                      <Image
                        src={item.logo}
                        alt={`Logo ${item.school}`}
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <div className="space-y-1">
                      <Badge variant="purple" className="w-fit text-[10px] px-2 py-0.5">
                        {item.year}
                      </Badge>
                      <CardTitle className="text-lg font-bold text-foreground">
                        {item.school}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#1d5d97] dark:text-[#8ecbff]">
                      {item.major}
                    </h4>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skill"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          variants={sectionAnim}
          className="space-y-8"
        >
          <div className="space-y-3">
            <Badge className="w-fit">Skill</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">Spesialisasi Keahlian</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {skillCards.map((item) => (
              <Card key={item.title} className="group h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {item.title}
                    <Sparkles className="size-4 text-[#1d5d97]" />
                  </CardTitle>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#d8e9fb]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-linear-to-r from-[#8ecbff] via-[#ffffff] to-[#ffe89a]"
                    />
                  </div>
                  <p className="text-xs text-[#5f7d9c]">Proficiency {item.level}%</p>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant={item.accent}>
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="project"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          variants={sectionAnim}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3">
              <Badge variant="cyan" className="w-fit">
                Project
              </Badge>
              <h2 className="text-3xl font-bold sm:text-4xl">Galeri Karya & Portofolio</h2>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 self-start md:self-auto bg-card/40 p-1.5 rounded-2xl border border-border backdrop-blur-md">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 ${activeCategory === cat
                    ? "text-[#12304f] font-bold"
                    : "text-foreground/70 hover:text-foreground hover:bg-card/40"
                    }`}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 -z-10 rounded-xl bg-linear-to-r from-[#8ecbff] via-[#ffffff] to-[#ffe89a]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={project.title}
                >
                  <Card className="flex h-full flex-col overflow-hidden border border-border bg-card/60 backdrop-blur-lg transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_8px_32px_-12px_rgba(142,203,255,0.15)] hover:-translate-y-1">
                    {/* Project Image */}
                    <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-foreground/5">
                      <Image
                        src={project.image}
                        alt={`Preview ${project.title}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <Badge className="absolute right-3 top-3 bg-card/85 text-foreground backdrop-blur-md border border-border">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <CardHeader className="flex-1 space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block rounded-md bg-[#eef7ff] dark:bg-[#1e2f47]/50 border border-[#bcdcff] dark:border-[#213550] px-2 py-0.5 text-[10px] font-semibold text-[#1d5d97] dark:text-[#8ecbff]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
                      <CardDescription className="text-xs text-foreground/75 leading-relaxed line-clamp-3">
                        {project.desc}
                      </CardDescription>
                    </CardHeader>

                    {/* Actions */}
                    <CardContent className="flex gap-3 border-t border-border/40 pt-4">
                      {project.github !== "#" && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className={buttonVariants({ size: "sm", variant: "outline", className: "flex-1 text-xs py-1" })}
                        >
                          GitHub <FaGithub className="size-3.5" />
                        </Link>
                      )}
                      <Link
                        href={project.demo}
                        target={project.demo === "#" ? undefined : "_blank"}
                        className={buttonVariants({ size: "sm", className: `flex-1 text-xs py-1 ${project.github === "#" ? "w-full text-center" : ""}` })}
                      >
                        {project.category === "UI/UX Design" ? "Figma" : "Demo"}{" "}
                        <Rocket className="size-3.5" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        <motion.section
          id="pengalaman"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          variants={sectionAnim}
          className="space-y-8"
        >
          <div className="space-y-3">
            <Badge className="w-fit">Pengalaman</Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">Timeline Kontribusi</h2>
          </div>
          <div className="relative space-y-5 before:absolute before:bottom-2 before:left-4 before:top-2 before:w-px before:bg-linear-to-b before:from-[#8ecbff]/80 before:to-[#ffe89a]/80 sm:before:left-1/2 sm:before:-translate-x-1/2">
            {experiences.map((item, idx) => (
              <motion.div
                key={`${item.title}-${item.year}`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`relative sm:w-[calc(50%-1.5rem)] ${idx % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
              >
                <Card>
                  <CardHeader>
                    <Badge variant="purple" className="w-fit">
                      {item.year}
                    </Badge>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-[#4f6f93]">{item.desc}</CardContent>
                </Card>
                <span className="absolute left-4 top-8 size-3 translate-x-[-1.58rem] rounded-full border-2 border-[#eef7ff] bg-[#ffe89a] sm:left-auto sm:right-[-1.86rem] sm:translate-x-0" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="kontak"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          variants={sectionAnim}
          className="space-y-8"
        >
          <div className="space-y-3">
            <Badge variant="cyan" className="w-fit">
              Kontak
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">Mari Berkolaborasi</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="border border-border bg-card/60 backdrop-blur-lg">
              <CardHeader>
                <CardTitle>Terbuka untuk proyek, magang, dan freelance</CardTitle>
                <CardDescription>
                  Hubungi saya melalui platform favorit Anda untuk diskusi kerja sama.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border bg-card/60 px-4 py-3 transition hover:border-[#8ecbff] dark:hover:border-[#8ecbff]/60"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-lg bg-[#e8f5ff] dark:bg-[#1e2f47]/50 text-[#1d5d97] dark:text-[#8ecbff] group-hover:bg-[#8ecbff]/20">
                          <Icon className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="text-xs text-foreground/70">{item.value}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="size-4 text-foreground/50 group-hover:text-[#1d5d97] dark:group-hover:text-[#8ecbff]" />
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border border-border bg-card/60 backdrop-blur-lg">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir berikut, saya akan membalas secepat mungkin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 space-y-4"
                  >
                    <div className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                      <CheckCircle className="size-8 animate-bounce" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">Pesan Terkirim!</h3>
                      <p className="text-sm text-foreground/75 max-w-sm">
                        Terima kasih sudah menghubungi saya. Pesan Anda telah sukses dikirim dan saya akan segera membalasnya.
                      </p>
                    </div>
                    <div className="flex flex-col w-full gap-2 pt-4">
                      <a
                        href={`https://wa.me/6287797728083?text=Halo%20Yoga,%20saya%20tertarik%20bekerjasama.%20(Subjek:%20Tawaran%20Kerjasama)`}
                        target="_blank"
                        rel="noreferrer"
                        className={buttonVariants({ className: "w-full flex items-center justify-center gap-2" })}
                      >
                        Hubungi via WhatsApp <FaWhatsapp className="size-4" />
                      </a>
                      <Button
                        variant="outline"
                        onClick={() => setFormStatus("idle")}
                        className="w-full"
                      >
                        Kirim Pesan Lain
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground/80">
                          Nama
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nama lengkap"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-foreground/80">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="nama@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-foreground/80">
                        Subjek
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subjek pesan"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground/80">
                        Pesan
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tulis pesan Anda di sini..."
                        required
                      />
                    </div>
                    <Button type="submit" disabled={formStatus === "loading"} className="w-full flex items-center justify-center gap-2">
                      {formStatus === "loading" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#12304f] dark:text-[#0b1528]" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Pesan <Send className="size-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-[#071121]/95">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">Yoga Ari Anggoro</p>
            <p className="text-sm text-[#4f6f93]">
              Junior Front-End Developer | UI/UX Designer | Graphic Designer
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs text-[#4f6f93]">
              <MapPin className="size-3.5" /> Magetan, Indonesia
            </span>
            <span className="text-[#b8d8f2]">|</span>
            <span className="flex items-center gap-1 text-xs text-[#4f6f93]">
              <Phone className="size-3.5" /> +62 877 9772 8083
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#4f6f93]">
            {[FaInstagram, FaTiktok, FaLinkedinIn, FaGithub].map((Icon, idx) => (
              <span
                key={idx}
                className="flex size-8 items-center justify-center rounded-lg border border-[#d8e9fb] bg-white"
              >
                <Icon className="size-3.5" />
              </span>
            ))}
          </div>
        </div>
        <p className="border-t border-[#d8e9fb] py-4 text-center text-xs text-[#5f7d9c]">
          © 2026 Yoga Ari Anggoro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
