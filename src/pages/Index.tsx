import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const achievements = [
    { title: 'Современные образовательные технологии в ДОУ', year: '2024', hours: 72, org: 'ИРО' },
    { title: 'ФГОС дошкольного образования', year: '2023', hours: 108, org: 'НИРО' },
    { title: 'Развитие речи детей дошкольного возраста', year: '2023', hours: 36, org: 'ИРО' },
    { title: 'Психология детского развития', year: '2022', hours: 48, org: 'НИРО' },
  ];

  const consultations = [
    {
      title: 'Адаптация к детскому саду',
      icon: 'Heart',
      content: 'Первые недели в саду — важный этап. Приходите на 2-3 часа в первые дни, принесите любимую игрушку ребенка, сохраняйте спокойствие при расставании. Период адаптации обычно длится 2-3 недели.',
    },
    {
      title: 'Развитие речи дома',
      icon: 'MessageCircle',
      content: 'Читайте вслух минимум 15 минут в день, обсуждайте прочитанное, задавайте открытые вопросы. Пойте песенки, учите стихи, играйте в словесные игры. Разговаривайте с ребенком обо всем, что видите вокруг.',
    },
    {
      title: 'Подготовка к школе',
      icon: 'BookOpen',
      content: 'Развивайте внимание через настольные игры, мелкую моторику через рисование и лепку. Учите самостоятельности: одеваться, убирать игрушки. Формируйте позитивное отношение к учебе через игру.',
    },
    {
      title: 'Кризис 3-х лет',
      icon: 'AlertCircle',
      content: 'Это нормальный этап развития. Предлагайте выбор из 2-3 вариантов, сохраняйте спокойствие, устанавливайте четкие границы. Поддерживайте самостоятельность ребенка в безопасных ситуациях.',
    },
  ];

  const photoGalleries = [
    { name: 'Наши будни', count: 24, image: 'https://cdn.poehali.dev/projects/7393aa9a-69ef-4d5e-b3e6-5688e06acde1/files/75e4f7d7-9290-42ba-964a-6b7c5d512c95.jpg' },
    { name: 'Наши праздники', count: 18, image: 'https://cdn.poehali.dev/projects/7393aa9a-69ef-4d5e-b3e6-5688e06acde1/files/3859ce69-ed2b-4cf7-8d53-0ea54b0e8bab.jpg' },
    { name: 'Творческая мастерская', count: 32, image: 'https://cdn.poehali.dev/projects/7393aa9a-69ef-4d5e-b3e6-5688e06acde1/files/75e4f7d7-9290-42ba-964a-6b7c5d512c95.jpg' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Sparkles" className="text-primary" size={20} />
              </div>
              <span className="font-heading font-semibold text-lg">Портфолио воспитателя</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'parents', label: 'Родителям' },
                { id: 'gallery', label: 'Галерея' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground">МБДОУ «Детский сад № 180»</Badge>
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                Растем, играем и развиваемся вместе!
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Здравствуйте! Я — воспитатель с 12-летним опытом работы. Рада приветствовать вас на моем
                профессиональном сайте-портфолио. Здесь вы найдете информацию о моей деятельности, полезные
                материалы для родителей и фотографии из жизни нашей группы.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => scrollToSection('about')} size="lg" className="gap-2">
                  <Icon name="User" size={18} />
                  Обо мне
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} size="lg" variant="outline" className="gap-2">
                  <Icon name="Award" size={18} />
                  Достижения
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/7393aa9a-69ef-4d5e-b3e6-5688e06acde1/files/37055f97-2b8b-4e18-a321-e556421dc6e3.jpg"
                alt="Воспитатель"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-accent/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
            <p className="text-muted-foreground text-lg">Моя профессиональная философия и опыт</p>
          </div>

          <Card className="animate-scale-in shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="font-heading text-2xl">Моё педагогическое кредо</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-lg leading-relaxed italic">
                «Я верю, что каждый ребенок уникален и талантлив. Моя цель — создать атмосферу доверия, тепла и
                познания, где каждый малыш чувствует себя любимым и может раскрыть свой потенциал. Сердце отдаю детям!»
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="GraduationCap" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Образование</h3>
                      <p className="text-sm text-muted-foreground">
                        Педагогический университет, специальность «Дошкольная педагогика и психология», 2012 г.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Briefcase" className="text-secondary-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Общий стаж</h3>
                      <p className="text-sm text-muted-foreground">12 лет педагогической работы</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Building2" className="text-accent-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Место работы</h3>
                      <p className="text-sm text-muted-foreground">МБДОУ «Детский сад № 180» — 8 лет</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Контакт</h3>
                      <p className="text-sm text-muted-foreground">educator180@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Портфолио достижений</h2>
            <p className="text-muted-foreground text-lg">Повышение квалификации и профессиональное развитие</p>
          </div>

          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="courses">Курсы</TabsTrigger>
              <TabsTrigger value="awards">Награды</TabsTrigger>
              <TabsTrigger value="selfedu">Самообразование</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg leading-snug mb-2">{course.title}</CardTitle>
                          <CardDescription>{course.org}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="flex-shrink-0">
                          {course.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{course.hours} часов</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="awards" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Trophy" className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Почетная грамота</CardTitle>
                        <CardDescription>Управление образования, 2023</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      За значительные успехи в организации образовательного процесса
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                        <Icon name="Award" className="text-secondary-foreground" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Благодарственное письмо</CardTitle>
                        <CardDescription>Администрация ДОУ, 2024</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      За творческий подход и инновационную деятельность
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center">
                        <Icon name="Medal" className="text-accent-foreground" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Диплом участника</CardTitle>
                        <CardDescription>Всероссийский конкурс, 2023</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Конкурс «Лучшие практики дошкольного образования»
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="selfedu" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Тема самообразования 2024-2025 гг.</CardTitle>
                  <CardDescription className="text-base">
                    «Развитие познавательной активности детей дошкольного возраста через экспериментирование»
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-primary" />
                      Цель
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Создание условий для развития познавательной активности детей через организацию
                      экспериментальной деятельности, формирование исследовательских навыков и любознательности.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="ListChecks" size={18} className="text-primary" />
                      Задачи
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-secondary flex-shrink-0 mt-1" />
                        <span>Изучить методическую литературу по теме экспериментирования</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-secondary flex-shrink-0 mt-1" />
                        <span>Создать картотеку опытов и экспериментов для разных возрастных групп</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-secondary flex-shrink-0 mt-1" />
                        <span>Организовать мини-лабораторию в группе</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-secondary flex-shrink-0 mt-1" />
                        <span>Провести мастер-класс для педагогов ДОУ</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Lightbulb" size={18} className="text-primary" />
                      Результаты
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Разработано 25 конспектов занятий-экспериментов, создана авторская картотека опытов «Маленькие
                      исследователи», проведен проект «Огород на окне». Материалы опубликованы на педагогическом
                      портале.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="parents" className="py-20 px-4 bg-gradient-to-b from-accent/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Для родителей</h2>
            <p className="text-muted-foreground text-lg">Консультации и полезные рекомендации</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {consultations.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-primary" size={20} />
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-muted-foreground leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                Режим дня нашей группы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Прием детей</span>
                  <span className="font-semibold">7:00 - 8:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Завтрак</span>
                  <span className="font-semibold">8:30 - 9:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Занятия</span>
                  <span className="font-semibold">9:00 - 10:30</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Прогулка</span>
                  <span className="font-semibold">10:30 - 12:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Обед</span>
                  <span className="font-semibold">12:30 - 13:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Тихий час</span>
                  <span className="font-semibold">13:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Полдник</span>
                  <span className="font-semibold">15:30 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Уход домой</span>
                  <span className="font-semibold">16:00 - 19:00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Из жизни нашей группы</h2>
            <p className="text-muted-foreground text-lg">Группа «Солнышко» — фотогалерея</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {photoGalleries.map((gallery, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={gallery.image}
                    alt={gallery.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading font-semibold text-xl mb-1">{gallery.name}</h3>
                    <p className="text-sm text-white/80">{gallery.count} фотографий</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Icon name="Info" className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-heading text-xl font-semibold mb-2">Этичная фотосъемка</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Все фотографии сделаны с соблюдением этических норм и с письменного разрешения родителей. Лица детей
                размыты или не показаны в кадре для обеспечения конфиденциальности.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gradient-to-b from-transparent to-muted/30 border-t">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">МБДОУ «Детский сад № 180»</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Нижний Новгород, ул. Примерная, д. 10
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (831) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ds180.ru
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Полезные ссылки</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Официальный сайт учреждения
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Электронная очередь
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Управление образования
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Портфолио воспитателя МБДОУ «Детский сад № 180». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
