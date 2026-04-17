/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  ShieldCheck, 
  Zap, 
  Star, 
  Users, 
  Smartphone, 
  Watch, 
  Gamepad2, 
  Headphones,
  ArrowRight,
  Lock,
  MessageCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Play
} from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/prova1.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/prova2.jpg"
  ];

  return (
    <div className="relative group max-w-[280px] sm:max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl border border-white/10 gold-glow" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <img 
                src={src} 
                alt={`Prova Social ${index + 1}`} 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-black"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold hover:text-black"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

const SupplierShowcase = () => {
  const images = [
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1355.JPG.jpeg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1356.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1357.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1359.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1360.JPG.jpeg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1361.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1362.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1364.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1365.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1366.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1379.jpg",
    "https://rafaelpedrozo.online/wp-content/uploads/2026/04/IMG_1380.jpg"
  ];

  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    align: 'start'
  }, [
    AutoScroll({ 
      speed: 0.5, // Even slower and smoother
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  ]);

  return (
    <div className="py-12 bg-black/40 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="flex mb-8 justify-center">
        <Badge className="bg-gold text-black font-bold px-4 py-1 uppercase tracking-tighter">Produtos reais dos fornecedores</Badge>
      </div>

      <div className="cursor-grab active:cursor-grabbing mb-8" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="w-[200px] md:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shrink-0 gold-glow bg-zinc-900"
            >
              <img 
                src={src} 
                alt={`Supplier product ${index}`} 
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((src, index) => (
            <div 
              key={`dup-${index}`} 
              className="w-[200px] md:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shrink-0 gold-glow bg-zinc-900"
            >
              <img 
                src={src} 
                alt={`Supplier product ${index} duplicate`} 
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Badge className="bg-gold/20 text-gold border-gold/30 font-medium px-4 py-1 italic uppercase text-[10px] md:text-xs">
          Arraste para explorar
        </Badge>
      </div>
    </div>
  );
};

export default function App() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pb-24 md:pb-0">
      {/* Header / Logo Area */}
      <header className="py-4 md:py-6 px-4 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gold rounded-lg flex items-center justify-center gold-glow">
              <Zap className="text-black w-5 h-5 md:w-6 md:h-6 fill-current" />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tighter uppercase italic">
              Lista <span className="text-gold">Premium</span>
            </span>
          </div>
          <Button 
            size="sm"
            className="bg-gold text-black font-black italic uppercase tracking-tight rounded-2xl hover:bg-gold/90 transition-all hover:scale-105 hidden sm:flex"
            onClick={scrollToPricing}
          >
            Acessar Agora
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col md:flex-row items-center pt-0 md:pt-20 pb-20 md:pb-32 px-0 md:px-4 overflow-hidden">
          {/* Background Images (Desktop Only) */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <img 
              src="https://rafaelpedrozo.online/wp-content/uploads/2026/04/ChatGPT-Image-13-de-abr.-de-2026-14_48_20.png" 
              alt="Background Desktop" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent/20" />
          </div>

          {/* Mobile Image (Top) */}
          <div className="w-full md:hidden relative z-10 -mb-40 sm:-mb-56">
            <img 
              src="https://rafaelpedrozo.online/wp-content/uploads/2026/04/ChatGPT-Image-13-de-abr.-de-2026-14_48_20-Copia.png" 
              alt="Hero Mobile" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-20 w-full px-4">
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left -mt-10 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-4 border-gold/50 text-gold px-3 py-0.5 md:px-4 md:py-1 uppercase tracking-widest text-[9px] md:text-[10px] font-bold bg-black/40 backdrop-blur-sm">
                  Oportunidade Única
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-2xl md:text-7xl font-bold uppercase tracking-tighter mb-6 text-balance leading-[1.15] md:leading-[1.1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Eu vou te entregar os <span className="text-gold">maiores e melhores</span> fornecedores do mercado.
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-xl text-white mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0 text-balance drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Chega de vender com medo, sem saber se o lucro é verdadeiro. Transforme sua operação em um negócio previsível, lucrativo e profissional.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gold text-black hover:bg-gold/90 h-14 px-10 text-lg font-black italic uppercase tracking-tight rounded-2xl gold-glow transition-all hover:scale-105"
                  onClick={scrollToPricing}
                >
                  QUERO GARANTIR MEU ACESSO
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ticker Section */}
        <div className="bg-gold py-3 md:py-4 overflow-hidden border-y border-white/10 relative z-30">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 20, 
              ease: "linear" 
            }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center mx-4 md:mx-8">
                <span className="text-black font-black italic uppercase tracking-tighter text-sm md:text-xl">
                  LISTA PREMIUM - RAFAEL PEDROZO
                </span>
                <span className="text-black mx-4 md:mx-8 text-xl md:text-2xl">★</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Problem Section */}
        <section className="py-20 md:py-32 px-4 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div {...fadeIn}>
                <h2 className="text-xl md:text-5xl font-bold uppercase tracking-tighter mb-6 md:mb-8 leading-tight text-balance font-heading">
                  Você não está vendendo pouco. <br />
                  <span className="text-gold">Você está perdendo margem.</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-lg mb-10 max-w-2xl mx-auto">
                  Quando a operação não é estruturada, o prejuízo não aparece só no caixa — ele aparece na sua segurança, no seu crescimento e na sua paz.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-12 w-full">
                  {[
                    { icon: AlertTriangle, text: "Risco oculto de mercadoria sem procedência" },
                    { icon: TrendingUp, text: "Margens esmagadas por fornecedores caros" },
                    { icon: Clock, text: "Esforço sem escala: trabalha muito e ganha pouco" },
                    { icon: DollarSign, text: "Caixa instável e falta de previsibilidade" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="text-red-500 w-4 h-4" />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-left">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 gold-glow w-full max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://rafaelpedrozo.online/wp-content/uploads/2026/04/ChatGPT-Image-13-de-abr.-de-2026-15_24_03.png" 
                  alt="Business Success" 
                  className="object-cover w-full h-full transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-8">
                  <p className="text-white text-xs md:text-base font-medium italic">"A real mudança começa quando você para de vender no improviso."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-lg md:text-4xl font-bold uppercase tracking-tighter mb-4 text-balance font-heading">Eu vou te entregar os <span className="text-gold">maiores e melhores</span> fornecedores do mercado</h2>
              <p className="text-muted-foreground text-xs md:text-base">iPhone, Xiaomi, DJI, PlayStation, JBL e muito mais.</p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { name: "Apple", icon: Smartphone, desc: "iPhones e toda linha Apple com procedência." },
                { name: "Xiaomi", icon: Smartphone, desc: "Toda linha Xiaomi com nota fiscal e frete CIF." },
                { name: "DJI", icon: Zap, desc: "Distribuidora oficial com GARANTIA no Brasil." },
                { name: "PlayStation", icon: Gamepad2, desc: "Consoles e acessórios com margem real." },
                { name: "JBL", icon: Headphones, desc: "Áudio premium direto do distribuidor oficial." }
              ].map((brand, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeIn}
                  className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-gold/30 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <brand.icon className="text-gold w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{brand.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{brand.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 md:py-24 px-4 bg-gold/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-xl md:text-5xl font-bold uppercase tracking-tighter mb-4 font-heading">O que você recebe?</h2>
              <p className="text-muted-foreground text-xs md:text-base">Fornecedores nacionais, internacionais e estratégias de elite.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "Uma Lista Premium de Fornecedores", 
                  desc: "Lista de fornecedores validadas por mim, compre de forma segura, legal e com margem.",
                  tag: "LISTA"
                },
                { 
                  title: "Bônus Exclusivos", 
                  desc: "Materiais extras, atualizações futuras e conteúdos estratégicos liberados aos alunos.",
                  tag: "BÔNUS"
                },
                { 
                  title: "Suporte Personalizado", 
                  desc: "Acesso direto ao meu WhatsApp pessoal para tirar dúvidas, validar fornecedores e garantir que você tenha o acompanhamento necessário para lucrar.",
                  tag: "SUPORTE"
                }
              ].map((item, i) => (
                <Card key={i} className="bg-black border-white/10 hover:border-gold/50 transition-all duration-500 overflow-hidden group">
                  <CardHeader className="space-y-3">
                    <Badge className="w-fit bg-gold text-black font-bold text-[10px]">{item.tag}</Badge>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <SupplierShowcase />

        {/* Exclusive Bonuses */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-lg md:text-4xl font-bold uppercase tracking-tighter mb-4 text-balance font-heading">Entrando hoje você recebe esses <span className="text-gold">presentes exclusivos</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              <motion.div 
                className="rounded-3xl border border-white/10 bg-black overflow-hidden group hover:border-gold/30 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://rafaelpedrozo.online/wp-content/uploads/2026/04/ChatGPT-Image-13-de-abr.-de-2026-17_05_12.png" 
                    alt="MasterClass Bonus" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <Badge className="mb-4 bg-gold text-black font-bold">BÔNUS 1</Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tighter font-heading">MasterClass - Os Principais Pilares para uma Loja de Sucesso</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">Domine as estratégias que os grandes players usam para escalar do zero ao faturamento sólido, sem perder tempo com amadorismo.</p>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through text-xs md:text-sm">De R$97</span>
                    <span className="text-gold font-black text-lg md:text-xl">POR R$0</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="rounded-3xl border border-white/10 bg-black overflow-hidden group hover:border-gold/30 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://rafaelpedrozo.online/wp-content/uploads/2026/04/ChatGPT-Image-13-de-abr.-de-2026-16_58_12.png" 
                    alt="Planilha Bonus" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <Badge className="mb-4 bg-gold text-black font-bold">BÔNUS 2</Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tighter font-heading">Planilha para Gestão Financeira do seu Negócio</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">Tenha o controle total do seu lucro. Saiba exatamente quanto entra e quanto sai para tomar decisões inteligentes e lucrativas.</p>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through text-xs md:text-sm">De R$47</span>
                    <span className="text-gold font-black text-lg md:text-xl">POR R$0</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials / Social Proof */}
        <section className="py-16 md:py-24 px-4 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-lg md:text-5xl font-bold uppercase tracking-tighter mb-12 md:mb-16 font-heading">Quem comprou <span className="text-gold">aprovou!</span></h2>
            
            <TestimonialCarousel />

            <div className="mt-20 md:mt-32">
              <h2 className="text-lg md:text-4xl font-bold uppercase tracking-tighter mb-8 md:mb-12 font-heading">Assista o depoimento do <span className="text-gold">Renato</span></h2>
              <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 gold-glow bg-black group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/A424YzHQO3c?playsinline=1&rel=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 px-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-xl mx-auto relative z-10">
            <div className="text-center mb-10 md:mb-12">
              <Badge className="bg-gold text-black mb-4">OFERTA LIMITADA</Badge>
              <h2 className="text-xl md:text-6xl font-black uppercase tracking-tighter mb-4 font-heading">LISTA <span className="text-gold">PREMIUM</span></h2>
              <p className="text-muted-foreground text-sm md:text-base">Direto da Fonte - Acesso Imediato</p>
            </div>
            
            <Card className="bg-black border-gold/50 gold-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-black px-3 py-0.5 md:px-4 md:py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Mais Vendido</div>
              <CardHeader className="text-center pt-10 md:pt-12">
                <CardTitle className="text-xl md:text-2xl font-bold">PLANO ÚNICO</CardTitle>
              </CardHeader>
              <CardContent className="px-6 md:px-8 pb-10 md:pb-12">
                <div className="space-y-4 mb-8 md:mb-10">
                  {[
                    "Os melhores fornecedores do Brasil",
                    "Aulas complementares estratégicas",
                    "Área de membros exclusiva",
                    "Bônus exclusivos liberados",
                    "Suporte via WhatsApp",
                    "Atualizações futuras inclusas",
                    "Acesso vitalício"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-gold w-4 h-4 md:w-5 md:h-5 shrink-0" />
                      <span className="text-xs md:text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-muted-foreground line-through text-xs md:text-sm mb-1">De R$ 297,00</div>
                  <div className="text-xs md:text-sm font-bold text-gold mb-2 uppercase tracking-wider">Por apenas</div>
                  <div className="text-5xl md:text-6xl font-black tracking-tighter">R$ 99,60</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-2">Pagamento único. Sem mensalidades.</div>
                </div>
                
                <a href="https://pay.cakto.com.br/3e67ky2_846038" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full bg-gold text-black hover:bg-gold/90 h-14 md:h-16 text-lg md:text-xl font-black italic uppercase tracking-tight rounded-2xl gold-glow transition-all hover:scale-[1.02]">
                    QUERO MEU ACESSO AGORA
                  </Button>
                </a>
                
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 opacity-50 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3 md:h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 md:h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 md:h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Pix_logo.svg" alt="Pix" className="h-3 md:h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShieldCheck className="text-gold w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h2 className="text-lg md:text-3xl font-bold mb-6 uppercase tracking-tighter text-balance font-heading">Risco zero para você. <br /><span className="text-gold">Garantia incondicional de 7 dias.</span></h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Você pode acessar todo o conteúdo, explorar os fornecedores, assistir às aulas e analisar com calma. Se por qualquer motivo você sentir que isso não é para você, basta solicitar o reembolso dentro de 7 dias e devolveremos 100% do seu investimento. Sem perguntas. Sem burocracia.
            </p>
            <p className="mt-8 font-bold text-gold italic text-sm md:text-base">Ou você avança com segurança... ou não paga absolutamente nada.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg md:text-4xl font-bold mb-10 md:mb-12 text-center uppercase tracking-tighter font-heading">Dúvidas <span className="text-gold">frequentes</span></h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "Como funciona a lista?", a: "Após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso à nossa área de membros exclusiva, onde encontrará todos os contatos e aulas." },
                { q: "Serve para quem não sabe nada?", a: "Sim! A lista foi desenhada pensando justamente no lojista iniciante que precisa de um caminho seguro e validado para começar." },
                { q: "Como vou receber acesso aos fornecedores?", a: "Dentro da plataforma, você terá os links diretos, números de WhatsApp e catálogos de cada fornecedor parceiro." },
                { q: "Existe alguma garantia?", a: "Sim, você tem 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro." },
                { q: "Tem suporte?", a: "Com certeza. Temos um suporte dedicado via WhatsApp para auxiliar em qualquer dúvida técnica ou sobre o conteúdo." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-black rounded-xl px-4 md:px-6">
                  <AccordionTrigger className="hover:no-underline font-bold text-left py-4 md:py-6 text-sm md:text-base">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 md:pb-6 text-xs md:text-sm">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 px-4 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative aspect-square max-w-xs md:max-w-md mx-auto md:mx-0 rounded-3xl overflow-hidden border border-gold/20">
                <img 
                  src="https://rafaelpedrozo.online/wp-content/uploads/2026/04/rafa.png" 
                  alt="Founder" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-lg md:text-5xl font-bold mb-6 md:mb-8 uppercase tracking-tighter font-heading">Quem está por trás <br /><span className="text-gold">dessa solução?</span></h2>
                <p className="text-sm md:text-lg text-muted-foreground mb-6">
                  Rafael Diogo Pedrozo Dias, 33 anos, empresário, dono de duas lojas no segmento. Cristão, casado, pai do Vitor e da Rafaela.
                </p>
                <p className="text-sm md:text-lg text-muted-foreground mb-8">
                  Depois de conquistar meus principais objetivos, resolvi proporcionar a oportunidade de realizar os seus sonhos nesse mercado que está apenas começando.
                </p>
                <div className="font-black text-gold italic text-lg md:text-xl">A hora de surfar essa onda é agora.</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
              <Zap className="text-black w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-lg tracking-tighter uppercase italic">
              Lista <span className="text-gold">Premium</span>
            </span>
          </div>
          <p className="text-[10px] md:text-xs text-muted-foreground mb-4">Copyright 2026 © Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
