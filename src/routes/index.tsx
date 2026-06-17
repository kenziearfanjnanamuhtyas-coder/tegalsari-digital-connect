import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-village.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Users, UserCheck, Home, UserPlus, ArrowRightLeft, UsersRound,
  Mountain, Store, ImageIcon, MapPin, Phone, Mail, Clock,
  Building2, FileText, BarChart3, ShieldCheck, ArrowRight, Facebook, Instagram, Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desa Tegalsari - Kec. Sidareja, Kab. Cilacap" },
      { name: "description", content: "Website resmi Desa Tegalsari, Kecamatan Sidareja, Kabupaten Cilacap, Jawa Tengah. Sumber informasi pemerintahan, layanan, dan potensi desa." },
      { property: "og:title", content: "Desa Tegalsari - Kec. Sidareja, Kab. Cilacap" },
      { property: "og:description", content: "Website resmi Desa Tegalsari. Pelayanan publik yang transparan, modern, dan terpercaya." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Users, label: "Penduduk", value: "4,287" },
  { icon: UserCheck, label: "Laki-Laki", value: "2,156" },
  { icon: UsersRound, label: "Perempuan", value: "2,131" },
  { icon: Home, label: "Kepala Keluarga", value: "1,342" },
  { icon: UserPlus, label: "Penduduk Sementara", value: "48" },
  { icon: ArrowRightLeft, label: "Mutasi Penduduk", value: "26" },
];

const services = [
  { icon: Building2, title: "Profil Desa", desc: "Sejarah, visi misi, dan struktur pemerintahan" },
  { icon: BarChart3, title: "Infografis", desc: "Data kependudukan dan pembangunan desa" },
  { icon: ShieldCheck, title: "IDM", desc: "Indeks Desa Membangun" },
  { icon: FileText, title: "PPID", desc: "Pejabat Pengelola Informasi & Dokumentasi" },
];

const news = [
  { tag: "Pengumuman", title: "Pembagian Bantuan Langsung Tunai Tahap II", date: "12 Juni 2026", img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80" },
  { tag: "Kegiatan", title: "Gotong Royong Pembersihan Saluran Irigasi", date: "8 Juni 2026", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80" },
  { tag: "Posyandu", title: "Pemeriksaan Kesehatan Balita & Lansia", date: "5 Juni 2026", img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80" },
];

const potensi = [
  { title: "Pertanian Padi", desc: "Lahan sawah produktif seluas 312 ha menghasilkan beras berkualitas.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
  { title: "UMKM Gula Kelapa", desc: "Industri rumahan gula kelapa khas Cilacap yang sudah turun-temurun.", img: "https://images.unsplash.com/photo-1606914469633-462e0a8d2eaf?w=800&q=80" },
  { title: "Wisata Sungai", desc: "Susur sungai dan area memancing dengan pemandangan alami.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <Mountain className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm">Desa Tegalsari</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Sidareja · Cilacap</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#beranda" className="hover:text-primary transition">Beranda</a>
            <a href="#profil" className="hover:text-primary transition">Profil</a>
            <a href="#layanan" className="hover:text-primary transition">Layanan</a>
            <a href="#berita" className="hover:text-primary transition">Berita</a>
            <a href="#potensi" className="hover:text-primary transition">Potensi</a>
            <a href="#kontak" className="hover:text-primary transition">Kontak</a>
          </nav>
          <Button size="sm" className="rounded-full">Pengaduan</Button>
        </div>
      </header>

      {/* HERO */}
      <section id="beranda" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Pemandangan Desa Tegalsari" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.2 0.05 155 / 0.55) 0%, oklch(0.15 0.05 155 / 0.85) 100%)" }} />
        </div>
        <div className="relative container mx-auto px-6 py-32 md:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Website Resmi Pemerintah Desa
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Selamat Datang di<br/>
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-accent)" }}>
                Desa Tegalsari
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Kecamatan Sidareja, Kabupaten Cilacap, Jawa Tengah. Membangun desa yang transparan, mandiri, dan sejahtera bersama masyarakat.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full h-12 px-7 text-base shadow-lg">
                Jelajahi Profil <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7 text-base bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:text-white">
                Layanan Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SAMBUTAN */}
      <section id="profil" className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Kepala Desa" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="text-xs text-muted-foreground">Kepala Desa</div>
              <div className="font-bold text-lg">H. Sutrisno, S.Pd</div>
              <div className="text-xs text-primary">Periode 2024 - 2030</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Sambutan</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Salam Hangat dari Desa Tegalsari</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Assalamu'alaikum Wr. Wb. Atas nama pemerintah Desa Tegalsari, kami menyambut hangat kunjungan Anda di portal resmi desa kami. Website ini hadir sebagai wujud komitmen kami menghadirkan pemerintahan yang transparan, akuntabel, dan dekat dengan masyarakat.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Mari bersama-sama membangun Desa Tegalsari yang maju, mandiri, dan sejahtera.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "1932", l: "Tahun Berdiri" },
                { v: "8", l: "Dusun" },
                { v: "24", l: "RT/RW" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold">{s.v}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section id="layanan" className="bg-muted/40 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Akses Cepat</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Layanan Digital Desa</h2>
            <p className="mt-4 text-muted-foreground text-lg">Informasi dan layanan publik dalam genggaman Anda.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="group p-7 hover:-translate-y-1 transition cursor-pointer border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition" style={{ background: "var(--gradient-primary)" }}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition">
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:sticky md:top-24">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Administrasi Penduduk</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Data Kependudukan Terkini</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Sistem digital untuk pengelolaan data kependudukan yang efektif, efisien, dan akurat.
            </p>
            <Button variant="outline" className="mt-6 rounded-full">Lihat Infografis Lengkap</Button>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Card key={s.label} className="p-6 border-border relative overflow-hidden" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                    <div className="text-4xl font-bold mt-2 tracking-tight">{s.value}</div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="mt-4 h-1 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${60 + i * 5}%`, background: "var(--gradient-primary)" }} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APBD */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Transparansi</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">APB Desa 2026</h2>
            <p className="mt-4 text-white/70 text-lg">Akses cepat dan transparan terhadap anggaran pendapatan dan belanja desa.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              { label: "Pendapatan", value: "Rp 2,84 M", trend: "+12%" },
              { label: "Belanja", value: "Rp 2,71 M", trend: "95.4%" },
              { label: "Penerimaan", value: "Rp 180 jt", trend: "+5%" },
              { label: "Surplus", value: "Rp 130 jt", trend: "Sehat" },
            ].map((a) => (
              <div key={a.label} className="rounded-2xl p-6 bg-white/10 backdrop-blur border border-white/15">
                <div className="text-white/60 text-sm">{a.label}</div>
                <div className="text-3xl font-bold text-white mt-2">{a.value}</div>
                <div className="text-accent text-xs mt-2 font-medium">{a.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BERITA */}
      <section id="berita" className="container mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Berita Desa</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Kabar Terbaru</h2>
          </div>
          <Button variant="ghost" className="rounded-full">Lihat Semua <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <Card key={n.title} className="overflow-hidden p-0 border-border group cursor-pointer" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={n.img} alt={n.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{n.tag}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold leading-snug group-hover:text-primary transition">{n.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* POTENSI */}
      <section id="potensi" className="bg-muted/40 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Potensi Desa</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Kekayaan Tegalsari</h2>
            <p className="mt-4 text-muted-foreground text-lg">Pertanian, UMKM, dan wisata yang menjadi tulang punggung perekonomian desa.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {potensi.map((p, i) => (
              <Card key={p.title} className={`overflow-hidden p-0 border-border ${i === 1 ? "md:translate-y-8" : ""}`} style={{ boxShadow: "var(--shadow-elegant)" }}>
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-white/80 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Mountain, label: "Potensi Alam" },
              { icon: Store, label: "UMKM Lokal" },
              { icon: ImageIcon, label: "Galeri Kegiatan" },
            ].map((q) => (
              <Card key={q.label} className="p-5 flex items-center gap-4 border-border hover:border-primary transition cursor-pointer">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <q.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-semibold">{q.label}</div>
                <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="container mx-auto px-6 py-24">
        <div className="rounded-3xl overflow-hidden grid md:grid-cols-2" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}>
          <div className="p-10 md:p-14 text-primary-foreground">
            <div className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-3">Hubungi Kami</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Kantor Desa Tegalsari</h2>
            <p className="mt-4 opacity-80 text-lg">Kami siap melayani dan mendengarkan aspirasi Anda.</p>
            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin, text: "Jl. Raya Tegalsari No. 12, Kec. Sidareja, Kab. Cilacap, Jawa Tengah 53261" },
                { icon: Phone, text: "(0282) 5295-148" },
                { icon: Mail, text: "pemdes.tegalsari@cilacapkab.go.id" },
                { icon: Clock, text: "Senin-Kamis 07.15-15.30 · Jumat 07.00-15.00 WIB" },
              ].map((c) => (
                <div key={c.text} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div className="pt-2 text-sm opacity-90">{c.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card p-10 md:p-14">
            <h3 className="text-2xl font-bold">Kirim Pengaduan / Aspirasi</h3>
            <p className="text-muted-foreground mt-2 text-sm">Pesan Anda akan ditanggapi dalam 2x24 jam kerja.</p>
            <form className="mt-6 space-y-4">
              <input className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Nama lengkap" />
              <input className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email atau No. HP" />
              <textarea rows={5} className="w-full p-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tuliskan pesan Anda..." />
              <Button size="lg" className="w-full rounded-xl h-12">Kirim Pesan</Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/80">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <Mountain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-background">Desa Tegalsari</div>
                  <div className="text-xs opacity-70">Kec. Sidareja · Kab. Cilacap · Jawa Tengah</div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed opacity-70 max-w-md">
                Website resmi Pemerintah Desa Tegalsari. Membangun pemerintahan yang transparan, akuntabel, dan melayani.
              </p>
              <div className="mt-6 flex gap-3">
                {[Facebook, Instagram, Youtube].map((I, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition">
                    <I className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-background font-semibold mb-4">Jelajahi</div>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#beranda" className="hover:text-accent">Beranda</a></li>
                <li><a href="#profil" className="hover:text-accent">Profil Desa</a></li>
                <li><a href="#berita" className="hover:text-accent">Berita</a></li>
                <li><a href="#potensi" className="hover:text-accent">Potensi</a></li>
                <li><a href="#kontak" className="hover:text-accent">Pengaduan</a></li>
              </ul>
            </div>
            <div>
              <div className="text-background font-semibold mb-4">Nomor Penting</div>
              <ul className="space-y-2 text-sm opacity-70">
                <li>Polsek Sidareja: 110</li>
                <li>Damkar Cilacap: 113</li>
                <li>Ambulans: 118</li>
                <li>Puskesmas: (0282) 5295-200</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs opacity-60">
            <div>© 2026 Pemerintah Desa Tegalsari. Seluruh hak cipta dilindungi.</div>
            <div>Total Kunjungan: 12,487</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
