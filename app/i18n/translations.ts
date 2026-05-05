export type Lang = 'uk' | 'en';

const uk = {
    nav: {
        services: 'Послуги',
        industries: 'Галузі',
        cases: 'Кейси',
        about: 'Про нас',
        quality: 'Якість',
        cta: 'Надіслати креслення',
    },
    hero: {
        badge: 'ISO 9001 · ISO 14001 · ISO 45001 · EN 1090',
        title1: 'NexusFab',
        title2: 'Marketplace',
        desc: 'Контрактне виробництво металевих деталей та вузлів під ключ - від різки до складання, покриття та доставки',
        cta1: 'Надіслати креслення',
        cta2: 'Наші послуги',
        stats: [
            { value: '210 000 м²', label: 'виробничих площ' },
            { value: '125 000 т', label: 'металу на рік' },
            { value: '65 країн', label: 'постачань' },
            { value: '30+ років', label: 'на ринку' },
        ],
    },
    services: {
        label: 'Послуги',
        title1: 'Наявне обладнання для',
        title2: 'виконання ваших замовлень',
        subtitle:
            'Обладнання виробничих потужностей — від лазерної різки до покриття поверхні під ключ',
        cta: 'Отримати комерційну пропозицію',
        items: [
            {
                num: '01',
                img: '/images/services/laser-cutting.jpg',
                title: 'Лазерна різка металу',
                desc: 'Листова та трубна лазерна різка, плазмова різка металу до 60 мм на столах до 6000×2000 мм.',
                specs: [
                    'Aramis 3 кВт — чорний метал до 16 мм, нерж./алюміній до 10 мм',
                    'Aramis 4 кВт — чорний метал до 20 мм, нерж./алюміній до 10 мм',
                    'Durma 3015, Trumpf 3030 (×2), 3040, 4050, 5060',
                    'Столи: 3000×1500 / 4000×2000 / 6000×2000 мм (до 6 кВт)',
                    'Лазер труб — заготовка до 9000 мм',
                    'Плазма: стіл 12×2 м, різка до 60 мм',
                ],
            },
            {
                num: '02',
                img: '/images/services/tube-processing.jpg',
                title: 'Гнуття та листообробка',
                desc: 'Гнуття листового металу, пробивання, гільйотинна різка та вальцювання на пресах зусиллям до 160 т.',
                specs: [
                    'Durma AD-S 40220 — тандем до 8 м, Baykal 41-160 — 160 т / 3000 мм',
                    'Durma AS 37220, Durma AS 25100',
                    'Горизонтальний CNC-прес BP30 Karmak — 30 т',
                    'Вальцювання Durma — товщина до 10 мм, довжина до 3000 мм',
                    'Гільйотина CNC Durma SBT 3013 — до 13 мм / 3000 мм',
                    'Пробивання Trumpf 3000, Bocher TRI — 2500×1250 мм',
                ],
            },
            {
                num: '03',
                img: '/images/services/cnc-machining.jpg',
                title: 'CNC-фрезерування',
                desc: '3- та 4-осьове фрезерування на верстатах Haas, DMG, SMEC для деталей до 2500 мм.',
                specs: [
                    'DMG DMF 250 Linea — 2500×1000×920 мм',
                    'Haas VF6 — 1626×813×762 мм',
                    'Haas VF10 / VF20 — 762×508×508 мм',
                    'SMEC MCV5700 — 4-осьовий, 1050×570×520 мм',
                    'Haas Micron VCE 1250 / VCE 10 — 1250×500 мм',
                ],
            },
            {
                num: '04',
                img: '/images/services/welding.jpg',
                title: 'Токарна та розточна обробка',
                desc: 'CNC-токарна обробка прутка та деталей, горизонтальне розточування полів до 2000×3000 мм.',
                specs: [
                    'Hanwha XD-42NH — токарний автомат швейцарського типу',
                    'Haas ST20 з подавачем прутка, Haas ST10Y',
                    'Gildemeister CTX-600S2',
                    'Токарні 16K20F3 Westlab / Fanuc 10i (×2)',
                    'UNION BFT-90/3-1 — X/Y/Z 1000×1600×1000 мм',
                    'Розточний CNC — робоче поле 2000×3000 мм',
                ],
            },
            {
                num: '05',
                img: '/images/services/painting.jpg',
                title: 'Зварювання та складання',
                desc: 'MIG/MAG, TIG, імпульсне та аргонодугове зварювання. 22 апарати Fronius, 6 роботів Fanuc.',
                specs: [
                    '22 напівавтомати Fronius 5000 MIG/MAG/TIG',
                    '6 зварювальних роботів Fanuc ARC Mate',
                    'Імпульсне та аргонодугове зварювання Tesla',
                    'Сталь, нержавіюча сталь, алюміній',
                ],
            },
            {
                num: '06',
                img: '/images/services/contract-manufacturing.jpg',
                title: 'Покриття поверхні',
                desc: 'Дробеструйна підготовка, цинкування, хромування, термообробка, порошкове та рідке фарбування.',
                specs: [
                    'Дробеструй SkiTec Window — 900×380 мм',
                    'Автоматизована лінія холодного цинкування (барабан + підвіс)',
                    'Лінія хромування (тверде хромування, гальваніка)',
                    '3 автоматичні лінії порошкового + рідкого фарбування',
                    '5 ручних ліній фарбування (піч 4 м)',
                    'Термічні печі: гартування, відпуск',
                ],
            },
        ],
    },
    industries: {
        title: 'Індустрії наших клієнтів',
        subtitle:
            'Ми виробляємо металеві деталі, вузли та конструкції для компаній із різних галузей промисловості в Україні та Європі',
        items: [
            {
                title: 'Машинобудування',
                desc: 'Виготовлення деталей, корпусів та вузлів для промислового обладнання і машин',
                detail: 'Рами машин, корпуси механізмів, елементи трансмісії',
                img: '/images/industries/machine-building.jpg',
            },
            {
                title: 'Агросектор',
                desc: 'Металеві компоненти та конструкції для сільськогосподарської техніки та обладнання',
                detail: 'Каркаси посівних і збиральних агрегатів, деталі причіпної техніки',
                img: '/images/industries/agriculture.jpg',
            },
            {
                title: 'Енергетика',
                desc: 'Металоконструкції та компоненти для енергетичних систем і інфраструктури',
                detail: 'Трансформатори, генератори, газорозподільчі станції',
                img: '/images/industries/energy.jpg',
            },
            {
                title: 'Інфраструктура',
                desc: 'Металеві конструкції для будівництва, транспортної та міської інфраструктури',
                detail: 'Мостові конструкції, опори освітлення, елементи електропідстанцій',
                img: '/images/industries/infrastructure.jpg',
            },
            {
                title: 'Транспорт',
                desc: 'Виробництво деталей та конструкцій для транспортної техніки і логістики',
                detail: 'Деталі кузовів, шасі, контейнерні конструкції',
                img: '/images/industries/transport.jpg',
            },
            {
                title: 'Оборона',
                desc: 'Виготовлення металевих елементів і конструкцій для оборонної та безпекової сфери',
                detail: 'Бронекорпуси, захисні елементи, спеціалізовані конструкції',
                img: '/images/industries/defense.jpg',
            },
        ],
    },
    cases: {
        label: 'Наші роботи',
        title: 'Приклади виконаних замовлень',
    },
    quality: {
        label: 'Якість та інновації',
        title1: 'Якість на кожному',
        title2: 'етапі виробництва',
        subtitle:
            'Від вхідного контролю матеріалів до фінальної інспекції готового виробу - кожен процес підкріплений стандартами ISO та власною системою управління якістю',
        labAlt: 'Лабораторія контролю якості',
        items: [
            {
                title: 'Дослідно-випробувальна лабораторія',
                desc: "Оптико-емісійний аналізатор хімічного складу металу до 6 класу точності. Розривна машина 50 т для випробування зварних швів та з'єднань.",
            },
            {
                title: 'Система простежуваності',
                desc: 'Кожна деталь відстежується від вхідного матеріалу до відвантаження — паспорт якості, протоколи контролю вимірювань по кожній партії.',
            },
            {
                title: 'Lean та Kaizen',
                desc: 'Постійне вдосконалення виробничих процесів. Скорочення часу переналадки, мінімізація браку, оптимізація маршрутів деталей по цехах.',
            },
            {
                title: 'ERP та CRM системи',
                desc: 'Цифрове управління виробництвом: відстеження замовлень в режимі реального часу, автоматичне планування та контроль термінів виконання.',
            },
            {
                title: 'Інженерно-конструкторське бюро',
                desc: 'Власні конструктори та технологи оптимізують креслення для зниження собівартості без втрати функціональності. Аналіз DFM на старті проєкту.',
            },
            {
                title: 'Зварювальна школа',
                desc: 'Власний навчальний центр підготовки та атестації зварювальників. Сертифікати IWE, WPS/WPQR за міжнародними стандартами EN ISO 9606.',
            },
        ],
    },
    advantages: {
        label: 'Переваги',
        title: 'Чому обирають нас',
        subtitle:
            'За 30 років ми побудували вертикально інтегроване виробництво, яке дає нашим клієнтам єдине вікно для будь-якого металовиробу - від простої деталі до складного вузла в серійному тиражі.',
        cta: 'Розпочати проєкт',
        items: [
            {
                title: 'Закритий виробничий цикл',
                desc: 'Від різки та гнуття до механічної обробки, зварювання, нанесення покриттів та пакування - все на власних потужностях.',
            },
            {
                title: 'Сертифікати ISO та CE',
                desc: 'ISO 9001, ISO 14001, ISO 45001, EN 1090, ISO 3834, WPS/WPQR, IWE. Підтверджена система управління якістю.',
            },
            {
                title: 'Власна інженерна команда',
                desc: 'Конструктори, технологи та робототехніки допомагають оптимізувати дизайн деталей для зниження собівартості.',
            },
            {
                title: 'Lean виробництво та ERP',
                desc: 'Kaizen, ERP та CRM системи для управління виробництвом забезпечують точні терміни та прозорість замовлення.',
            },
            {
                title: '210 000 м² і 12 заводів',
                desc: '12 підприємств в Україні та Румунії. 125 000 тонн металу на рік. Потужності для будь-якого обсягу замовлення.',
            },
            {
                title: 'Власна лабораторія контролю',
                desc: 'Оптичний емісійний аналізатор, розривні машини, система трасуваності матеріалів і виробів від заготовки до відвантаження.',
            },
        ],
    },
    about: {
        label: 'About us',
        title: 'Про компанію',
        lead: 'Ми працюємо з проєктами різної складності - від виготовлення окремих металевих компонентів до повного виробничого циклу складних конструкцій і обладнання',
        p1: "До об'єднання входять виробничі компанії з багаторічним досвідом роботи, частина з яких працює на ринку з 1991 року. Така експертиза у поєднанні з вертикально інтегрованими процесами дозволяє забезпечувати контроль якості на кожному етапі — від вхідного контролю металу до фінального тестування готових вузлів.",
        p2: 'Ми поставляємо продукцію в 65 країн світу та співпрацюємо з провідними виробниками техніки в Європі. Власна зварювальна школа та дослідно-випробувальна лабораторія гарантують найвищі стандарти якості.',
        cards: [
            {
                label: '12 підприємств в Україні та Румунії',
                sub: '210 000 м² виробничих площ',
                img: '/images/about/factory.jpg',
            },
            {
                label: '125 000 тонн металу на рік, 65 країн постачань',
                sub: 'Серійне та одиничне виробництво',
                img: '/images/about/workers.jpg',
            },
            {
                label: 'ISO 9001, ISO 14001, ISO 45001, EN 1090, ISO 3834, WPS/WPQR, IWE',
                sub: 'Підтверджена система управління якістю',
                img: '/images/about/warehouse.jpg',
            },
        ],
    },
    nexusBrand: {
        title: 'Nexus — ядро мережі заводів',
        desc: "Nexus означає «зв'язок» або «центр сплетіння». Ми заявляємо, що є ядром мережі заводів. Це назва про екосистему — де кожне підприємство посилює інше, а замовник отримує єдину точку входу у повний виробничий цикл.",
        traits: ['Інтелектуальний', 'Мережевий', 'Масштабний'],
        points: [
            {
                tag: 'Для Європи',
                title: 'Латинізована стабільність та інтелект',
                desc: 'Назва звучить латинізовано — це дає відчуття стабільності та інтелекту на європейських ринках, де довіра будується на академічній і технічній репутації.',
            },
            {
                tag: 'Масштабування',
                title: 'Fab — універсальна мова виробництва',
                desc: "Слово Fab (Fabrication) є універсальним для будь-якого виробництва, де створюється фізичний об'єкт. Це дозволяє масштабувати бренд без прив'язки до конкретного матеріалу чи галузі.",
            },
        ],
    },
    clients: {
        label: 'Clients',
        title: 'Компанії, які нам довіряють',
    },
    quote: {
        badge: 'Talk to us',
        title: 'Потрібен надійний виробничий партнер для вашого проєкту?',
        desc: 'Надішліть нам креслення або короткий опис завдання - наша команда проаналізує проєкт і запропонує оптимальне виробниче рішення.',
        formats: 'Працюємо з кресленнями:',
        labelName: "Ім'я *",
        labelCompany: 'Компанія *',
        labelEmail: 'Email *',
        labelPhone: 'Телефон',
        labelMaterial: 'Матеріал',
        labelQuantity: 'Кількість',
        labelDeadline: 'Дедлайн',
        labelMessage: 'Опис або технічне завдання',
        labelFiles: 'Завантажити креслення',
        placeholderName: 'Іван Петренко',
        placeholderCompany: 'ТОВ «Назва»',
        placeholderMaterial: 'Сталь S355, алюміній...',
        placeholderQuantity: '100 штук/місяць',
        placeholderMessage: 'Опишіть ваш проєкт...',
        filesHint: 'STEP, STP, DXF, DWG, PDF, ZIP - до 50 МБ',
        nda: 'Я погоджуюсь з умовами конфіденційності. За потреби ми можемо укласти NDA перед початком співпраці.',
        submit: "Зв'язатись",
        sending: 'Надсилаємо...',
        successTitle: 'Запит надіслано!',
        successDesc:
            "Наш менеджер зв'яжеться з вами щоб обговорити деталі проєкту.",
    },
    footer: {
        desc: 'Контрактне виробництво металевих деталей та вузлів під ключ. 30+ років досвіду, 12 заводів, 65 країн.',
        cols: [
            {
                title: 'Послуги',
                links: [
                    'Листова металообробка',
                    'Обробка труб',
                    'CNC-механічна обробка',
                    'Зварювання та складання',
                    'Покриття поверхні',
                    'Контрактне виробництво',
                ],
            },
            {
                title: 'Галузі',
                links: [
                    'Машинобудування',
                    'Агросектор',
                    'Енергетика',
                    'Інфраструктура',
                    'Транспорт',
                    'Оборона',
                ],
            },
            {
                title: 'Компанія',
                links: [
                    'Про нас',
                    'Якість та ISO',
                    'Кейси',
                    'Новини',
                    "Кар'єра",
                    'Контакти',
                ],
            },
        ],
        privacy: 'Політика конфіденційності',
        terms: 'Умови використання',
        rights: 'Всі права захищені.',
    },
};

const en: typeof uk = {
    nav: {
        services: 'Services',
        industries: 'Industries',
        cases: 'Cases',
        about: 'About',
        quality: 'Quality',
        cta: 'Send Drawing',
    },
    hero: {
        badge: 'ISO 9001 · ISO 14001 · ISO 45001 · EN 1090',
        title1: 'NexusFab',
        title2: 'Marketplace',
        desc: 'Contract manufacturing of metal parts and assemblies — from cutting to welding, coating and delivery',
        cta1: 'Send Drawing',
        cta2: 'Our Services',
        stats: [
            { value: '210,000 m²', label: 'production area' },
            { value: '125,000 t', label: 'metal per year' },
            { value: '65 countries', label: 'deliveries' },
            { value: '30+ years', label: 'on the market' },
        ],
    },
    services: {
        label: 'Services',
        title1: 'Available equipment for',
        title2: 'fulfilling your orders',
        subtitle:
            'Production facility equipment — from laser cutting to surface coating, all under one roof',
        cta: 'Get a Quote',
        items: [
            {
                num: '01',
                img: '/images/services/laser-cutting.jpg',
                title: 'Laser Metal Cutting',
                desc: 'Sheet and tube laser cutting, plasma cutting up to 60 mm on tables up to 6000×2000 mm.',
                specs: [
                    'Aramis 3 kW — mild steel up to 16 mm, SS/aluminium up to 10 mm',
                    'Aramis 4 kW — mild steel up to 20 mm, SS/aluminium up to 10 mm',
                    'Durma 3015, Trumpf 3030 (×2), 3040, 4050, 5060',
                    'Tables: 3000×1500 / 4000×2000 / 6000×2000 mm (up to 6 kW)',
                    'Tube laser — blank length up to 9000 mm',
                    'Plasma: table 12×2 m, cutting up to 60 mm',
                ],
            },
            {
                num: '02',
                img: '/images/services/tube-processing.jpg',
                title: 'Bending & Sheet Forming',
                desc: 'Sheet metal bending, punching, guillotine shearing and rolling on presses up to 160 t.',
                specs: [
                    'Durma AD-S 40220 — tandem up to 8 m, Baykal 41-160 — 160 t / 3000 mm',
                    'Durma AS 37220, Durma AS 25100',
                    'Horizontal CNC press BP30 Karmak — 30 t',
                    'Durma rolling — thickness up to 10 mm, length up to 3000 mm',
                    'CNC guillotine Durma SBT 3013 — up to 13 mm / 3000 mm',
                    'Punching Trumpf 3000, Bocher TRI — 2500×1250 mm',
                ],
            },
            {
                num: '03',
                img: '/images/services/cnc-machining.jpg',
                title: 'CNC Milling',
                desc: '3- and 4-axis milling on Haas, DMG, SMEC machines for parts up to 2500 mm.',
                specs: [
                    'DMG DMF 250 Linea — 2500×1000×920 mm',
                    'Haas VF6 — 1626×813×762 mm',
                    'Haas VF10 / VF20 — 762×508×508 mm',
                    'SMEC MCV5700 — 4-axis, 1050×570×520 mm',
                    'Haas Micron VCE 1250 / VCE 10 — 1250×500 mm',
                ],
            },
            {
                num: '04',
                img: '/images/services/welding.jpg',
                title: 'Turning & Boring',
                desc: 'CNC turning of bar stock and parts, horizontal boring up to 2000×3000 mm.',
                specs: [
                    'Hanwha XD-42NH — Swiss-type automatic lathe',
                    'Haas ST20 with bar feeder, Haas ST10Y',
                    'Gildemeister CTX-600S2',
                    '16K20F3 Westlab / Fanuc 10i (×2)',
                    'UNION BFT-90/3-1 — X/Y/Z 1000×1600×1000 mm',
                    'CNC boring — work area 2000×3000 mm',
                ],
            },
            {
                num: '05',
                img: '/images/services/painting.jpg',
                title: 'Welding & Assembly',
                desc: 'MIG/MAG, TIG, pulse and argon-arc welding. 22 Fronius units, 6 Fanuc robots.',
                specs: [
                    '22 Fronius 5000 semi-automatic MIG/MAG/TIG',
                    '6 Fanuc ARC Mate welding robots',
                    'Pulse and argon-arc welding Tesla',
                    'Steel, stainless steel, aluminium',
                ],
            },
            {
                num: '06',
                img: '/images/services/contract-manufacturing.jpg',
                title: 'Surface Treatment',
                desc: 'Shot blasting, zinc plating, chrome plating, heat treatment, powder and liquid painting.',
                specs: [
                    'Shot blast SkiTec Window — 900×380 mm',
                    'Automated cold zinc plating line (drum + overhead)',
                    'Chrome plating line (hard chrome, electroplating)',
                    '3 automatic powder + liquid painting lines',
                    '5 manual painting lines (4 m oven)',
                    'Thermal furnaces: hardening, tempering',
                ],
            },
        ],
    },
    industries: {
        title: 'Industries We Serve',
        subtitle:
            'We manufacture metal parts, assemblies and structures for companies across various industrial sectors in Ukraine and Europe',
        items: [
            {
                title: 'Machine Building',
                desc: 'Manufacturing parts, housings and assemblies for industrial equipment and machinery',
                detail: 'Machine frames, mechanism housings, transmission components',
                img: '/images/industries/machine-building.jpg',
            },
            {
                title: 'Agriculture',
                desc: 'Metal components and structures for agricultural machinery and equipment',
                detail: 'Seeder and harvester frames, towed equipment parts',
                img: '/images/industries/agriculture.jpg',
            },
            {
                title: 'Energy',
                desc: 'Metal structures and components for energy systems and infrastructure',
                detail: 'Transformers, generators, gas distribution stations',
                img: '/images/industries/energy.jpg',
            },
            {
                title: 'Infrastructure',
                desc: 'Metal structures for construction, transport and urban infrastructure',
                detail: 'Bridge structures, lighting poles, substation elements',
                img: '/images/industries/infrastructure.jpg',
            },
            {
                title: 'Transport',
                desc: 'Manufacturing parts and structures for transport vehicles and logistics',
                detail: 'Body parts, chassis, container structures',
                img: '/images/industries/transport.jpg',
            },
            {
                title: 'Defence',
                desc: 'Manufacturing metal elements and structures for the defence and security sector',
                detail: 'Armoured hulls, protective elements, specialised structures',
                img: '/images/industries/defense.jpg',
            },
        ],
    },
    cases: {
        label: 'Our Work',
        title: 'Examples of Completed Orders',
    },
    quality: {
        label: 'Quality & Innovation',
        title1: 'Quality at every',
        title2: 'stage of production',
        subtitle:
            'From incoming material inspection to final product inspection — every process is backed by ISO standards and our own quality management system',
        labAlt: 'Quality control laboratory',
        items: [
            {
                title: 'Research & Testing Laboratory',
                desc: 'Optical emission analyser of metal chemical composition up to accuracy class 6. 50 t tensile testing machine for weld seams and joints.',
            },
            {
                title: 'Traceability System',
                desc: 'Every part is tracked from incoming material to shipment — quality passport and measurement control records for each batch.',
            },
            {
                title: 'Lean & Kaizen',
                desc: 'Continuous improvement of production processes. Reduced changeover time, minimised defects, optimised part routing through workshops.',
            },
            {
                title: 'ERP & CRM Systems',
                desc: 'Digital production management: real-time order tracking, automatic scheduling and deadline control.',
            },
            {
                title: 'Engineering Design Bureau',
                desc: 'In-house designers and process engineers optimise drawings to reduce cost without losing functionality. DFM analysis at project start.',
            },
            {
                title: 'Welding School',
                desc: 'Own training centre for welder preparation and certification. IWE, WPS/WPQR certificates to international standards EN ISO 9606.',
            },
        ],
    },
    advantages: {
        label: 'Advantages',
        title: 'Why Choose Us',
        subtitle:
            'Over 30 years we have built a vertically integrated production that gives our clients a single window for any metal product — from a simple part to a complex assembly in serial production.',
        cta: 'Start a Project',
        items: [
            {
                title: 'Closed Production Cycle',
                desc: 'From cutting and bending to machining, welding, coating and packaging — all on our own premises.',
            },
            {
                title: 'ISO & CE Certificates',
                desc: 'ISO 9001, ISO 14001, ISO 45001, EN 1090, ISO 3834, WPS/WPQR, IWE. Verified quality management system.',
            },
            {
                title: 'In-House Engineering Team',
                desc: 'Designers, process engineers and robotics specialists help optimise part design to reduce unit cost.',
            },
            {
                title: 'Lean Production & ERP',
                desc: 'Kaizen, ERP and CRM systems for production management ensure precise deadlines and order transparency.',
            },
            {
                title: '210,000 m² & 12 Plants',
                desc: '12 enterprises in Ukraine and Romania. 125,000 tonnes of metal per year. Capacity for any order volume.',
            },
            {
                title: 'In-House QC Laboratory',
                desc: 'Optical emission analyser, tensile testing machines, material and product traceability system from blank to shipment.',
            },
        ],
    },
    about: {
        label: 'About us',
        title: 'About the Company',
        lead: 'We handle projects of any complexity — from manufacturing individual metal components to full production cycles of complex structures and equipment',
        p1: 'The group comprises manufacturing companies with extensive industry experience, some operating since 1991. This expertise combined with vertically integrated processes ensures quality control at every stage — from incoming metal inspection to final assembly testing.',
        p2: 'We deliver to 65 countries and partner with leading European equipment manufacturers. Our in-house welding school and testing laboratory guarantee the highest quality standards.',
        cards: [
            {
                label: '12 enterprises in Ukraine and Romania',
                sub: '210,000 m² of production area',
                img: '/images/about/factory.jpg',
            },
            {
                label: '125,000 tonnes of metal per year, 65 countries',
                sub: 'Serial and one-off production',
                img: '/images/about/workers.jpg',
            },
            {
                label: 'ISO 9001, ISO 14001, ISO 45001, EN 1090, ISO 3834, WPS/WPQR, IWE',
                sub: 'Verified quality management system',
                img: '/images/about/warehouse.jpg',
            },
        ],
    },
    nexusBrand: {
        title: 'Nexus — the hub of a factory network',
        desc: 'Nexus means "connection" or "center of interweaving." We position ourselves as the core of a factory ecosystem — where every plant reinforces the others, and every client gets a single entry point into a full production cycle.',
        traits: ['Intellectual', 'Networked', 'Scalable'],
        points: [
            {
                tag: 'For Europe',
                title: 'Latinised stability and intelligence',
                desc: 'The name has a Latinised sound that conveys stability and intellectual authority on European markets — where trust is built on academic and technical reputation.',
            },
            {
                tag: 'Scalability',
                title: 'Fab — the universal language of manufacturing',
                desc: 'Fab (Fabrication) is universal across any production where a physical object is created — enabling the brand to scale beyond any single material or sector.',
            },
        ],
    },
    clients: {
        label: 'Clients',
        title: 'Companies That Trust Us',
    },
    quote: {
        badge: 'Talk to us',
        title: 'Need a reliable manufacturing partner for your project?',
        desc: 'Send us a drawing or a brief project description — our team will analyse the project and propose the optimal manufacturing solution.',
        formats: 'We work with drawings:',
        labelName: 'Name *',
        labelCompany: 'Company *',
        labelEmail: 'Email *',
        labelPhone: 'Phone',
        labelMaterial: 'Material',
        labelQuantity: 'Quantity',
        labelDeadline: 'Deadline',
        labelMessage: 'Description or technical specification',
        labelFiles: 'Upload drawings',
        placeholderName: 'John Smith',
        placeholderCompany: 'Company Ltd.',
        placeholderMaterial: 'Steel S355, aluminium...',
        placeholderQuantity: '100 pcs/month',
        placeholderMessage: 'Describe your project...',
        filesHint: 'STEP, STP, DXF, DWG, PDF, ZIP — up to 50 MB',
        nda: 'I agree to the confidentiality terms. If needed, we can sign an NDA before starting the cooperation.',
        submit: 'Get in Touch',
        sending: 'Sending...',
        successTitle: 'Request sent!',
        successDesc:
            'Our manager will contact you to discuss the project details.',
    },
    footer: {
        desc: 'Contract manufacturing of metal parts and assemblies. 30+ years of experience, 12 plants, 65 countries.',
        cols: [
            {
                title: 'Services',
                links: [
                    'Sheet Metal Processing',
                    'Tube Processing',
                    'CNC Machining',
                    'Welding & Assembly',
                    'Surface Coating',
                    'Contract Manufacturing',
                ],
            },
            {
                title: 'Industries',
                links: [
                    'Machine Building',
                    'Agriculture',
                    'Energy',
                    'Infrastructure',
                    'Transport',
                    'Defence',
                ],
            },
            {
                title: 'Company',
                links: [
                    'About Us',
                    'Quality & ISO',
                    'Cases',
                    'News',
                    'Careers',
                    'Contact',
                ],
            },
        ],
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        rights: 'All rights reserved.',
    },
};

export const translations = { uk, en };
