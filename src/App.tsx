/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ChevronDown, 
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
  DollarSign
} from "lucide-react";
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
          <div className="w-full md:hidden relative z-10 -mb-12">
            <img 
              src="https://rafaelpedrozo.online/wp-content/uploads/2026/04/ChatGPT-Image-13-de-abr.-de-2026-14_48_20-Copia.png" 
              alt="Hero Mobile" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-20 w-full px-4">
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-4 border-gold/50 text-gold px-3 py-0.5 md:px-4 md:py-1 uppercase tracking-widest text-[9px] md:text-[10px] font-bold bg-black/40 backdrop-blur-sm">
                  Oportunidade Única para Iniciantes
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 text-balance leading-[1.15] md:leading-[1.1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Lucre mais na revenda de eletrônicos com <span className="text-gold italic">segurança</span> e margem real.
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

        {/* Problem Section */}
        <section className="py-16 md:py-24 px-4 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight text-balance">
                  Você não está vendendo pouco. <br />
                  <span className="text-gold">Você está perdendo margem.</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-8">
                  Quando a operação não é estruturada, o prejuízo não aparece só no caixa — ele aparece na sua segurança, no seu crescimento e na sua paz.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: AlertTriangle, text: "Risco oculto de mercadoria sem procedência" },
                    { icon: TrendingUp, text: "Margens esmagadas por fornecedores caros" },
                    { icon: Clock, text: "Esforço sem escala: trabalha muito e ganha pouco" },
                    { icon: DollarSign, text: "Caixa instável e falta de previsibilidade" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="text-red-500 w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 gold-glow mt-8 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://picsum.photos/seed/business-money/1200/800" 
                  alt="Business Success" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-8">
                  <p className="text-white text-sm md:text-base font-medium italic">"A real mudança começa quando você para de vender no improviso."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">Eu vou te entregar os <span className="text-gold">maiores e melhores</span> fornecedores do mercado</h2>
              <p className="text-muted-foreground text-sm md:text-base">iPhone, Xiaomi, DJI, PlayStation, JBL e muito mais.</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">O que você recebe?</h2>
              <p className="text-muted-foreground text-sm md:text-base">Fornecedores nacionais, internacionais e estratégias de elite.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Módulo 1: Fornecedores com Nota Fiscal", 
                  desc: "Lista validada de fornecedores nacionais para compra segura, legal e com margem real.",
                  tag: "ESSENCIAL"
                },
                { 
                  title: "Módulo 2: Fornecedores de Baixo Custo", 
                  desc: "Estratégias para acessar fornecedores com preços competitivos mantendo controle e lucro.",
                  tag: "ESTRATÉGICO"
                },
                { 
                  title: "Módulo 3: Compras Internacionais", 
                  desc: "Métodos para importar com segurança e previsibilidade. Aprenda a comprar e enviar direto para seu endereço.",
                  tag: "AVANÇADO"
                },
                { 
                  title: "Módulo 4: Bônus Exclusivos", 
                  desc: "Materiais extras, atualizações futuras e conteúdos estratégicos liberados aos alunos.",
                  tag: "BÔNUS"
                }
              ].map((module, i) => (
                <Card key={i} className="bg-black border-white/10 hover:border-gold/50 transition-all duration-500 overflow-hidden group">
                  <CardHeader className="relative">
                    <Badge className="absolute top-4 right-4 bg-gold text-black font-bold text-[10px]">{module.tag}</Badge>
                    <CardTitle className="text-lg pt-4">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{module.desc}</p>
                    <div className="mt-6 flex items-center text-gold text-xs font-bold gap-1 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                      VER DETALHES <ArrowRight className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Bonuses */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">Entrando hoje você recebe esses <span className="text-gold">presentes exclusivos</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <motion.div 
                className="p-6 md:p-8 rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10">
                  <Badge className="mb-4 bg-gold text-black">BÔNUS 1</Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 italic uppercase tracking-tighter">Empresa de Envio</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">Você terá acesso a uma empresa de envio internacional, confiável e uma aula bônus completa para entender exatamente como funciona o processo de envio.</p>
                  <div className="text-gold font-bold">De R$97 por R$0</div>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap className="w-32 h-32 md:w-40 md:h-40 text-gold" />
                </div>
              </motion.div>
              
              <motion.div 
                className="p-6 md:p-8 rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10">
                  <Badge className="mb-4 bg-gold text-black">BÔNUS 2</Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 italic uppercase tracking-tighter">Master Class Estratégica</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">Uma master class exclusiva com estrategista digital para você aprender como estruturar anúncios, posicionar sua loja e escalar vendas com método.</p>
                  <div className="text-gold font-bold">De R$197 por R$0</div>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="w-32 h-32 md:w-40 md:h-40 text-gold" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials / Social Proof */}
        <section className="py-16 md:py-24 px-4 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-12 md:mb-16 italic uppercase tracking-tighter">Quem comprou <span className="text-gold">aprovou!</span></h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-black p-6 rounded-2xl border border-white/5 text-left">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-gold text-gold" />)}
                  </div>
                  <p className="text-sm italic text-muted-foreground mb-6">"Melhor investimento que fiz para minha loja. Os fornecedores são reais e a margem é exatamente o que eu precisava para crescer."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20" />
                    <div>
                      <div className="text-sm font-bold">Lojista Satisfeito</div>
                      <div className="text-[10px] text-muted-foreground">Verificado</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl border border-white/5 bg-black inline-block max-w-md mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="text-gold w-6 h-6" />
                <span className="font-bold">Suporte via WhatsApp</span>
              </div>
              <p className="text-sm text-muted-foreground">Temos um time dedicado para tirar suas dúvidas e garantir que você tenha a melhor experiência possível.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 px-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-xl mx-auto relative z-10">
            <div className="text-center mb-10 md:mb-12">
              <Badge className="bg-gold text-black mb-4">OFERTA LIMITADA</Badge>
              <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">LISTA <span className="text-gold">PREMIUM</span></h2>
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
                
                <Button className="w-full bg-gold text-black hover:bg-gold/90 h-14 md:h-16 text-lg md:text-xl font-black italic uppercase tracking-tight rounded-2xl gold-glow transition-all hover:scale-[1.02]">
                  QUERO MEU ACESSO AGORA
                </Button>
                
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 italic uppercase tracking-tighter text-balance">Risco zero para você. <br /><span className="text-gold">Garantia incondicional de 7 dias.</span></h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Você pode acessar todo o conteúdo, explorar os fornecedores, assistir às aulas e analisar com calma. Se por qualquer motivo você sentir que isso não é para você, basta solicitar o reembolso dentro de 7 dias e devolveremos 100% do seu investimento. Sem perguntas. Sem burocracia.
            </p>
            <p className="mt-8 font-bold text-gold italic text-sm md:text-base">Ou você avança com segurança... ou não paga absolutamente nada.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-12 text-center italic uppercase tracking-tighter">Dúvidas <span className="text-gold">frequentes</span></h2>
            
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
                <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 italic uppercase tracking-tighter">Quem está por trás <br /><span className="text-gold">dessa solução?</span></h2>
                <p className="text-sm md:text-lg text-muted-foreground mb-6">
                  Estrategista com anos de experiência no mercado de eletrônicos, focado em ajudar novos empreendedores a evitarem os erros que custam caro.
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
