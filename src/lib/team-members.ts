export type TeamMemberLanguage = 'uz' | 'en' | 'ru';

type LocalizedText = Record<TeamMemberLanguage, string>;

export type TeamMember = {
  id: number;
  name: string;
  image: string;
  hoverImage: string;
  role: LocalizedText;
  bio: LocalizedText;
};

import founderMember from '@/assets/team/optimized/founder-member.webp';
import founderMemberHover from '@/assets/team/optimized/founder-member-hover.webp';
import member1 from '@/assets/team/optimized/member-1.webp';
import member2 from '@/assets/team/optimized/member-2.webp';
import member3 from '@/assets/team/optimized/member-3.webp';
import member4 from '@/assets/team/optimized/member-4.webp';
import member5 from '@/assets/team/optimized/member-5.webp';
import member6 from '@/assets/team/optimized/member-6.webp';
import member7 from '@/assets/team/optimized/member-7.webp';
import member8 from '@/assets/team/optimized/member-8.webp';
import member9 from '@/assets/team/optimized/member-9.webp';
import member10 from '@/assets/team/optimized/member-10.webp';
import member11 from '@/assets/team/optimized/member-11.webp';

import member1Hover from '@/assets/team/optimized/member-1-hover.webp';
import member2Hover from '@/assets/team/optimized/member-2-hover.webp';
import member3Hover from '@/assets/team/optimized/member-3-hover.webp';
import member4Hover from '@/assets/team/optimized/member-4-hover.webp';
import member5Hover from '@/assets/team/optimized/member-5-hover.webp';
import member6Hover from '@/assets/team/optimized/member-6-hover.webp';
import member7Hover from '@/assets/team/optimized/member-7-hover.webp';
import member8Hover from '@/assets/team/optimized/member-8-hover.webp';
import member9Hover from '@/assets/team/optimized/member-9-hover.webp';
import member10Hover from '@/assets/team/optimized/member-10-hover.webp';
import member11Hover from '@/assets/team/optimized/member-11-hover.webp';

export const teamMembers: TeamMember[] = [
  {
    id: 11,
    name: "Habibullo Sa'dullayev",
    image: founderMember,
    hoverImage: founderMemberHover,
    role: {
      uz: 'Asoschi',
      en: 'Founder',
      ru: 'Основатель',
    },
    bio: {
      uz: "Agentlikning strategik yo'nalishi uning qarashlaridan boshlanadi. Marketing, tahlil va ta'limga tayangan yondashuv - bizneslar bilan uzoq muddatli hamkorlik modelining asosi.",
      en: "The agency's strategic direction begins with his vision. An approach built on marketing, analytics, and education forms the foundation of long-term partnerships with businesses.",
      ru: 'Стратегическое направление агентства основано на его взглядах. Маркетинг, аналитика и обучение - основа долгосрочной модели сотрудничества с бизнесом.',
    },
  },
  {
    id: 1,
    name: 'Sardor Safarov',
    image: member1,
    hoverImage: member1Hover,
    role: {
      uz: 'C.E.O.',
      en: 'C.E.O.',
      ru: 'C.E.O.',
    },
    bio: {
      uz: "G'oya bilan ijro orasidagi masofani qisqartiradi. Jamoa, mijoz va jarayon o'rtasidagi muvozanat - uning boshqaruv uslubidagi asosiy mezon.",
      en: 'Shortens the distance between idea and execution. Balancing the team, the client, and the process is the core principle behind his management style.',
      ru: 'Сокращает расстояние между идеей и исполнением. Баланс между командой, клиентом и процессом - главный ориентир в его управленческом подходе.',
    },
  },
  {
    id: 2,
    name: 'Bilol Qobiljonov',
    image: member2,
    hoverImage: member2Hover,
    role: {
      uz: 'Office manager',
      en: 'Office Manager',
      ru: 'Офис-менеджер',
    },
    bio: {
      uz: "Ofisdagi tartib, ta'minot va kundalik ishlar izchil yurishiga qaraydi. Jamoa bemalol ishlashi, vazifalar vaqtida bajarilishi va ichki jarayonlar to'xtab qolmasligi uning mas'uliyat maydoni.",
      en: "Oversees office order, supplies, and the smooth flow of daily operations. Making sure the team works comfortably, tasks are completed on time, and internal processes never stall is his area of responsibility.",
      ru: 'Отвечает за порядок в офисе, обеспечение команды и внутренние процессы. Рабочий ритм, своевременное выполнение задач и комфортная среда для команды - его зона ответственности.',
    },
  },
  {
    id: 3,
    name: 'Mehribon Jabborova',
    image: member3,
    hoverImage: member3Hover,
    role: {
      uz: 'Project manager',
      en: 'Project Manager',
      ru: 'Менеджер проектов',
    },
    bio: {
      uz: "Loyiha davomida jamoa bilan mijoz orasidagi ish ritmini ushlab turadi. Uchrashuvdagi kelishuvlar aniq vazifa, muddat va mas'uliyatga aylanadi. Natijada jamoa yo'nalishni, mijoz esa jarayonni ravshan ko'radi.",
      en: "Keeps the working rhythm between the team and the client steady throughout a project. Agreements from meetings turn into clear tasks, deadlines, and ownership - so the team sees the direction and the client sees a transparent process.",
      ru: 'Поддерживает рабочий ритм между командой и клиентом. Договорённости со встреч переходят в конкретные задачи, сроки и зоны ответственности. В итоге команда видит направление, а клиент - понятный процесс.',
    },
  },
  {
    id: 4,
    name: 'Sevinch Jahilova',
    image: member4,
    hoverImage: member4Hover,
    role: {
      uz: 'Project manager',
      en: 'Project Manager',
      ru: 'Менеджер проектов',
    },
    bio: {
      uz: "Loyiha jarayonida mayda detallar ham katta ahamiyatga ega. Vazifalar, muddatlar va kerakli materiallar joyida bo'lishi uchun jamoaga yordam beradi, mijoz bilan jarayon esa aniqroq va tartibliroq ko'rinadi.",
      en: 'In project work, even the smallest details matter. She helps the team keep tasks, deadlines, and required materials in order, so the process stays clear and organized for the client.',
      ru: 'В проектной работе даже небольшие детали имеют значение. Она помогает команде держать в порядке задачи, сроки и необходимые материалы, чтобы процесс для клиента оставался понятным и организованным.',
    },
  },
  {
    id: 5,
    name: 'Javohir Namozov',
    image: member5,
    hoverImage: member5Hover,
    role: {
      uz: 'Project manager',
      en: 'Project Manager',
      ru: 'Менеджер проектов',
    },
    bio: {
      uz: "Loyiha jarayonida vazifalar ko'zdan qochmasligi va mayda ishlar ortda qolmasligiga yordam beradi. Ishning holati, navbatdagi qadam va yordam kerak bo'ladigan joylar jamoaga vaqtida ko'rinib turishini ta'minlaydi.",
      en: "Helps make sure tasks don't slip through the cracks and small details don't fall behind during a project. Ensures the team always sees task status, the next step, and where support is needed, right on time.",
      ru: 'Помогает держать проектные задачи в поле внимания, чтобы важные детали не терялись по ходу работы. Следит, чтобы команда вовремя видела статус задач, следующий шаг и участки, где нужна поддержка.',
    },
  },
  {
    id: 6,
    name: 'Alisher Aripov',
    image: member6,
    hoverImage: member6Hover,
    role: {
      uz: 'Product group leader',
      en: 'Product Group Leader',
      ru: 'Руководитель продуктовой группы',
    },
    bio: {
      uz: "Mahsulot uning ishida ichki g'oya emas, bozorda tanlanishi kerak bo'lgan taklif. Jamoa mahsulot kimga, qaysi qiymat bilan va qanday farq orqali kerak bo'lishini aniq ko'rishi uchun yo'nalish beradi.",
      en: "In his work, a product is never just an internal idea - it's an offer that has to be chosen in the market. He gives the team direction so they clearly see who the product is for, what value it delivers, and what makes it different.",
      ru: 'Для него продукт - не просто внутренняя идея, а предложение, которое должно быть выбрано на рынке. Он помогает команде ясно видеть, для кого продукт, какую ценность он даёт и за счёт какого отличия становится сильнее.',
    },
  },
  {
    id: 7,
    name: 'Asadbek Irgashev',
    image: member7,
    hoverImage: member7Hover,
    role: {
      uz: 'Product group specialist',
      en: 'Product Group Specialist',
      ru: 'Специалист продуктовой группы',
    },
    bio: {
      uz: "Mahsulot ustidagi ishda tahlil va aniqlikni kuchaytiradi. Bozor, mijoz ehtiyoji va raqobatchilar haqidagi kuzatuvlarni tartibga solib, jamoaga taklif qiymatini aniqroq ko'rishga yordam beradi.",
      en: "Strengthens the analytical rigor and precision behind product work. Structures observations about the market, customer needs, and competitors to help the team see the value of the offer more clearly.",
      ru: 'Усиливает аналитическую точность в работе над продуктом. Структурирует наблюдения о рынке, потребностях клиента и конкурентах, помогая команде яснее видеть ценность предложения.',
    },
  },
  {
    id: 8,
    name: "Diana To'rayeva",
    image: member8,
    hoverImage: member8Hover,
    role: {
      uz: 'Product group specialist',
      en: 'Product Group Specialist',
      ru: 'Специалист продуктовой группы',
    },
    bio: {
      uz: "Qulay taxminlarga ishonib ketmaydi. Mahsulotga mijoz, bozor va raqobatchi tomondan qarab, jamoa ko'rmay qolishi mumkin bo'lgan joylarni vaqtida ochadi.",
      en: "Doesn't rely on convenient assumptions. Looks at the product from the customer's, the market's, and the competitors' point of view, and surfaces what the team might otherwise miss - in time.",
      ru: 'Не полагается на удобные предположения. Смотрит на продукт со стороны клиента, рынка и конкурентов и вовремя показывает то, что команда могла упустить.',
    },
  },
  {
    id: 9,
    name: 'Bobur Abduqakhkhorov',
    image: member9,
    hoverImage: member9Hover,
    role: {
      uz: "Ta'lim dasturlari kuratori",
      en: 'Education Programs Curator',
      ru: 'Куратор образовательных программ',
    },
    bio: {
      uz: "Dars, amaliyot va mentorlik dastur ichida bitta mantiqqa ulanadi. Uning roli - o'quvchi mavzuni tushunibgina qolmay, uni amalda qo'llay oladigan yo'lni qurish.",
      en: "Lessons, practice, and mentorship are connected by one logic inside the program. His role is to build a path where the learner doesn't just understand the topic, but learns to apply it in practice.",
      ru: 'Занятия, практика и наставничество в программе связаны одной логикой. Его роль - выстроить путь, в котором участник не только понимает тему, но и учится применять её на практике.',
    },
  },
  {
    id: 10,
    name: 'Ilhombek Zabixullayev',
    image: member10,
    hoverImage: member10Hover,
    role: {
      uz: 'Sales manager',
      en: 'Sales Manager',
      ru: 'Менеджер по продажам',
    },
    bio: {
      uz: "Mijoz bilan suhbatni avval vaziyatni eshitishdan boshlaydi. Qaysi xizmat mos kelishi, hamkorlikni nimadan boshlash ma'qulligi va kutilgan natija qayerda ekanini mijozga aniq qilib beradi.",
      en: 'Starts every client conversation by listening to the situation first. Makes it clear to the client which service fits, where to best begin the partnership, and what result to expect.',
      ru: 'Начинает разговор с внимательного понимания ситуации клиента. Помогает ясно увидеть, какая услуга подходит, с чего лучше начать сотрудничество и какого результата можно ожидать.',
    },
  },
  {
    id: 12,
    name: 'Islombek Safarov',
    image: member11,
    hoverImage: member11Hover,
    role: {
      uz: 'Sales manager',
      en: 'Sales Manager',
      ru: 'Менеджер по продажам',
    },
    bio: {
      uz: "Mijoz bilan ilk suhbatda vaziyat, ehtiyoj va kutilgan natijani aniqlashtiradi. Uning yondashuvida sotuv - bosim emas, biznesga mos yechimni ravshan tushuntirish.",
      en: "Clarifies the situation, need, and expected result from the very first conversation with a client. In his approach, sales isn't pressure - it's a clear explanation of the solution that fits the business.",
      ru: 'С первого разговора уточняет ситуацию клиента, его потребность и ожидаемый результат. В его подходе продажи - не давление, а понятное объяснение решения, которое подходит бизнесу.',
    },
  },
];
