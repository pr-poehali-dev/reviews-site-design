import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'stats') {
            setStatsAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('stats');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const stats = [
    { label: 'Отзывов размещено', value: 15847, icon: 'MessageSquare', color: 'text-primary' },
    { label: 'Довольных клиентов', value: 2341, icon: 'Users', color: 'text-secondary' },
    { label: 'Средний рейтинг', value: 4.9, icon: 'Star', color: 'text-accent' },
    { label: 'Лет на рынке', value: 5, icon: 'Trophy', color: 'text-primary' },
  ];

  const services = [
    {
      title: 'Базовый пакет',
      icon: 'Rocket',
      description: 'Идеально для старта',
      features: ['5 отзывов', 'Живые аккаунты', 'Гарантия 30 дней', 'Круглосуточная поддержка'],
      badge: '🎯',
      color: 'from-primary to-secondary',
    },
    {
      title: 'Профи пакет',
      icon: 'Zap',
      description: 'Максимальный эффект',
      features: ['15 отзывов', 'Премиум аккаунты', 'Гарантия 90 дней', 'Персональный менеджер', 'Бонусные отзывы'],
      badge: '⚡',
      color: 'from-secondary to-accent',
    },
    {
      title: 'VIP пакет',
      icon: 'Crown',
      description: 'Для лидеров рынка',
      features: ['30+ отзывов', 'Эксклюзивные аккаунты', 'Бессрочная гарантия', 'Приоритетная поддержка', 'Аналитика', 'Конкурентный анализ'],
      badge: '👑',
      color: 'from-accent to-primary',
    },
  ];

  const pricing = [
    {
      name: 'Старт',
      price: '2990',
      reviews: '5',
      features: ['Живые аккаунты', 'Гарантия 30 дней', 'Email поддержка'],
      popular: false,
    },
    {
      name: 'Бизнес',
      price: '7990',
      reviews: '15',
      features: ['Премиум аккаунты', 'Гарантия 90 дней', 'Приоритетная поддержка', '3 бонусных отзыва'],
      popular: true,
    },
    {
      name: 'Корпорат',
      price: '14990',
      reviews: '30',
      features: ['VIP аккаунты', 'Бессрочная гарантия', 'Персональный менеджер', '10 бонусных отзывов', 'Аналитика'],
      popular: false,
    },
  ];

  const portfolio = [
    { category: 'Ремонт', rating: 4.9, reviews: 234, growth: '+127%' },
    { category: 'Красота', rating: 5.0, reviews: 189, growth: '+156%' },
    { category: 'Репетиторы', rating: 4.8, reviews: 312, growth: '+98%' },
    { category: 'IT услуги', rating: 4.9, reviews: 156, growth: '+143%' },
  ];

  const faqs = [
    {
      question: 'Как быстро появятся отзывы?',
      answer: 'Отзывы начинают появляться в течение 24-48 часов после оплаты. Мы размещаем их постепенно, чтобы это выглядело естественно и не вызывало подозрений у модераторов площадки.',
    },
    {
      question: 'Это безопасно для моего аккаунта?',
      answer: 'Да, абсолютно безопасно. Мы используем только живые аккаунты реальных людей с историей и активностью. Все отзывы размещаются вручную, что исключает риск блокировки.',
    },
    {
      question: 'Какие гарантии вы даете?',
      answer: 'Мы гарантируем размещение всех оплаченных отзывов. Если какой-то отзыв будет удален модераторами в течение гарантийного периода, мы бесплатно разместим новый.',
    },
    {
      question: 'Можно ли выбрать текст отзыва?',
      answer: 'Да, вы можете предоставить свои тексты или воспользоваться нашими шаблонами. Наши копирайтеры адаптируют тексты под естественный стиль общения пользователей Профи.ру.',
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Мы принимаем оплату картами, СБП и криптовалютой. После оплаты вы получаете доступ к личному кабинету, где можете отслеживать статус размещения отзывов.',
    },
  ];

  const guarantees = [
    { title: 'Живые аккаунты', description: 'Только реальные пользователи с историей', icon: 'UserCheck' },
    { title: 'Постепенное размещение', description: 'Естественный прирост отзывов', icon: 'TrendingUp' },
    { title: 'Гарантия качества', description: 'Замена удаленных отзывов', icon: 'Shield' },
    { title: 'Конфиденциальность', description: 'Полная анонимность сотрудничества', icon: 'Lock' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-pink-50/30">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                ⭐
              </div>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ПрофиОтзыв
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['services', 'pricing', 'portfolio', 'faq', 'guarantees', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium capitalize"
                >
                  {section === 'services' && 'Услуги'}
                  {section === 'pricing' && 'Тарифы'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'guarantees' && 'Гарантии'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMTQtMi42ODYgNi02IDZMNTE2IDZjMy4zMTQgMCA2IDIuNjg2IDYgNnptMCA0OGMwLTMuMzE0LTIuNjg2LTYtNi02SDZjLTMuMzE0IDAtNiAyLjY4Ni02IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 animate-pulse-glow">
              🚀 Топ выбор на Профи.ру в 2024
            </Badge>
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl mb-6 leading-tight">
              Увеличьте{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-scale-in">
                продажи
              </span>
              <br />с качественными отзывами
            </h1>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Живые отзывы от реальных пользователей для роста вашего рейтинга на Профи.ру
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection('pricing')}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Выбрать пакет
              </Button>
              <Button
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
              >
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Примеры работ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-16 bg-white/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-4 animate-float">
                  <Icon name={stat.icon as any} className={stat.color} size={32} />
                </div>
                <div className={`font-heading font-bold text-4xl mb-2 ${stat.color}`}>
                  {statsAnimated ? (stat.label.includes('рейтинг') ? stat.value.toFixed(1) : stat.value.toLocaleString()) : '0'}
                </div>
                <div className="text-foreground/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Наши услуги</Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Выберите свой путь к успеху</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Пакеты услуг для любых целей и бюджетов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                      {service.badge}
                    </div>
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" className="text-primary" size={14} />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/30">Тарифы</Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Прозрачные цены без скрытых платежей</h2>
            <p className="text-foreground/70 text-lg">Выберите подходящий тариф и начните рост уже сегодня</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? 'border-primary border-3 shadow-2xl scale-105 z-10' : 'border-2'
                } hover:shadow-xl transition-all animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 shadow-lg">
                      🔥 Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-heading mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-5xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-foreground/60">₽</span>
                  </div>
                  <Badge variant="secondary" className="mx-auto">
                    {plan.reviews} отзывов
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">Портфолио</Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Результаты наших клиентов</h2>
            <p className="text-foreground/70 text-lg">Реальные кейсы по разным направлениям</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {portfolio.map((item, index) => (
              <Card key={index} className="border-2 hover:border-accent/50 transition-all hover:shadow-lg animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-heading">{item.category}</CardTitle>
                    <Badge className="bg-accent/20 text-accent">{item.growth}</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                    <span className="font-bold text-lg">{item.rating}</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  <p className="text-sm text-foreground/60 mt-2">{item.reviews} отзывов размещено</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">FAQ</Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Часто задаваемые вопросы</h2>
            <p className="text-foreground/70 text-lg">Ответы на популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="HelpCircle" className="text-primary" size={18} />
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pl-11 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/30">Гарантии</Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Почему нам доверяют</h2>
            <p className="text-foreground/70 text-lg">Мы гарантируем качество и безопасность</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {guarantees.map((item, index) => (
              <Card key={index} className="text-center border-2 hover:border-secondary/50 transition-all hover:shadow-lg animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-heading mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                  <Icon name="Rocket" className="text-white" size={32} />
                </div>
                <CardTitle className="text-3xl font-heading mb-2">Готовы начать?</CardTitle>
                <CardDescription className="text-base">
                  Оставьте заявку и получите бесплатную консультацию
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="Телефон / Telegram" className="h-12" />
                  </div>
                  <div>
                    <Textarea placeholder="Расскажите о вашем проекте на Профи.ру" className="min-h-24" />
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-foreground/60">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  ⭐
                </div>
                <span className="font-heading font-bold text-xl">ПрофиОтзыв</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональные услуги по размещению отзывов на Профи.ру
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Базовый пакет</li>
                <li>Профи пакет</li>
                <li>VIP пакет</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Гарантии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@profiotzyv.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Telegram: @profiotzyv
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 ПрофиОтзыв. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
