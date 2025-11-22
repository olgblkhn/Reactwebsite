import { useEffect, useRef } from 'react';
import './App.css';

const stats = [
  { value: '850+', label: 'успешных операций по разрядке' },
  { value: '100+', label: 'спущенных обсадных колонн' },
  { value: '16', label: 'комплексных звеньев' },
  { value: '160+', label: 'квалифицированных специалистов' },
  { value: '30+', label: 'единиц спецтехники' },
  { value: '100%', label: 'успешность работ' },
];

const services = [
  {
    title: 'Разрядка скважин после ГРП',
    description: 'Снижаем пластовое давление без тяжёлых растворов. Контролируем данные в реальном времени.',
    items: ['Автоматизированная лаборатория (ИВЭ-50)', 'Емкости с дегазатором и вытяжной системой', 'Газоанализаторы и линия разрядки', '850+ операций, 100% успешность'],
  },
  {
    title: 'РИР и ремонтно-изоляционные работы',
    description: 'Ликвидация негерметичности, изоляция водопритоков, продление ресурса фонда скважин.',
    items: ['Пакерные решения и пробки', 'Комплексы КФРГ/ОКГМ', 'Цементировочные агрегаты и контроль качества', 'Работа в сложных геологических условиях'],
  },
  {
    title: 'Технологии ВСП и ЗБС',
    description: 'Инжиниринговое сопровождение и технологии боковых стволов.',
    items: ['ВСП Logan 120-ton — вырезка окна за один рейс', 'Обратная промывка, исключение шламования', 'Спуск обсадных колонн Ø178 мм', '100+ успешно спущенных колонн'],
  },
];

const steps = [
  { title: 'Диагностика и бриф', text: 'Фиксируем цели, метрики, требования безопасности. Планируем технологию под объект.' },
  { title: 'Инжиниринг и подготовка', text: 'Подбираем состав звена, оборудование и расходные материалы. Готовим схему работ и контроль качества.' },
  { title: 'Выполнение и аналитика', text: 'Работаем по регламенту, контролируем параметры онлайн, оформляем отчёт и рекомендации.' },
];

const equipment = [
  { name: 'ВСП Logan 120-ton', detail: 'Для вырезки окна под боковой ствол. Надёжная кинематика и точность.' },
  { name: 'Автоматизированная лаборатория', detail: 'Контроль состава и параметров. Дистанционный мониторинг и логирование.' },
  { name: 'Емкости с дегазатором', detail: 'Безопасная разрядка, вытяжная система, контроль выбросов.' },
  { name: 'Моментоповышающие кольца', detail: 'Для спуска обсадных колонн Ø178 мм в сложных стволах.' },
  { name: 'Калибратор-турбулизатор', detail: 'Повышает управляемость потока и чистоту ствола.' },
  { name: 'Башмак колонный прорабатывающий', detail: 'Снижает риски прихвата и обеспечивает плавный спуск.' },
];

const cases = [
  {
    client: 'РН-Юганскнефтегаз',
    work: 'Разрядка + ВСП + РИР',
    result: 'Полная успешность операций, рост дебита, отсутствие аварийных остановов.',
    metrics: ['100% успешность', 'Контроль выбросов', 'Детальные отчёты'],
  },
  {
    client: 'Газпромнефть-Хантос',
    work: 'Разрядка скважин после ГРП',
    result: 'Стабильная динамика давления, продление ресурса ЭЦН, отсутствие солеотложений.',
    metrics: ['850+ операций', 'Нулевая аварийность', 'Сервис 24/7'],
  },
];

const partners = ['РН-Юганскнефтегаз', 'Газпромнефть-Хантос', 'Экотон'];

function App() {
  const modelRef = useRef(null);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    const handleScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const clamped = Math.max(0, Math.min(1, progress));
      document.documentElement.style.setProperty('--scroll-progress', clamped.toString());
      if (modelRef.current) {
        const angle = 1440 * clamped;
        const elevation = 70;
        modelRef.current.cameraOrbit = `${angle}deg ${elevation}deg 120%`;
      }
    };

    setVh();
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', setVh);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <div className="page">
      <div className="model-bg" aria-hidden="true">
        <model-viewer
          src="/auger.glb"
          class="scroll-drill"
          ref={modelRef}
          disable-zoom
          interaction-prompt="none"
          exposure="1.1"
        />
      </div>

      <nav className="top-nav">
        <div className="brand">
          <div className="brand-mark">АТ</div>
          <div>
            <div className="brand-name">АТЕРРА</div>
            <div className="brand-tag">Сила Русской Земли</div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#home">Главная</a>
          <a href="#services">Услуги</a>
          <a href="#about">О компании</a>
          <a href="#equipment">Оборудование</a>
          <a href="#cases">Кейсы</a>
          <a href="#contacts">Контакты</a>
        </div>
        <div className="nav-contacts">
          <a href="tel:+79026917733">+7 902 691 77 33</a>
          <a href="mailto:aterra.ooo@gmail.com">aterra.ooo@gmail.com</a>
        </div>
      </nav>

      <header className="hero slide" id="home">
        <div className="hero-content">
          <p className="pill">Инжиниринговые услуги</p>
          <h1>Инжиниринговые услуги для нефтегазовой отрасли</h1>
          <p className="lead">
            Снижение рисков и повышение эффективности бурения и капитального ремонта скважин.
            Работы под ключ с отчётностью и контролем параметров в реальном времени.
          </p>
          <div className="actions">
            <a className="btn primary" href="#contacts">Получить КП</a>
            <a className="btn ghost" href="#services">Узнать подробнее</a>
          </div>
          <div className="pill-row">
            <span className="chip">Разрядка после ГРП</span>
            <span className="chip">РИР</span>
            <span className="chip">ВСП и ЗБС</span>
            <span className="chip">Спуск обсадных колонн</span>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map((item) => (
            <div className="stat" key={item.label}>
              <span className="stat-number">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="section about slide" id="about">
        <div className="section-head">
          <p className="eyebrow">О компании</p>
          <h2>ООО «АТЕРРА» — технологический партнёр нефтегазовых проектов</h2>
          <p className="section-description">
            Основаны в 2021 году. Работаем для лидеров отрасли — РН-Юганскнефтегаз, Газпромнефть-Хантос и др.
            Наша миссия — безопасность, предсказуемость и результат в самых сложных условиях.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <h3>Ценности</h3>
            <ul>
              <li>Качество и выполнение обязательств</li>
              <li>Безопасность на каждом этапе</li>
              <li>Инновации и локальная экспертиза</li>
            </ul>
            <p className="note">Производственная база: п. Сингапай, г. Нефтеюганск.</p>
          </div>
          <div className="about-highlight">
            <div className="mini-pill">Слоган</div>
            <h3>«Сила Русской Земли»</h3>
            <p>Подчеркиваем надёжность, технологическую мощь и глубокое знание российских месторождений.</p>
            <div className="badges">
              {partners.map((partner) => (
                <span key={partner} className="badge">{partner}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section slide" id="services">
        <div className="section-head">
          <p className="eyebrow">Услуги</p>
          <h2>Ключевые направления: разрядка, РИР, ВСП и ЗБС</h2>
          <p className="section-description">Выполняем работы под ключ — от проектирования до отчётности и обученных бригад.</p>
        </div>
        <div className="cards service-cards">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <div className="card-icon">◆</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section steps slide">
        <div className="section-head">
          <p className="eyebrow">Процесс</p>
          <h2>От заявки до закрытия работ — прозрачно и безопасно</h2>
        </div>
        <ol className="step-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section equipment slide" id="equipment">
        <div className="section-head">
          <p className="eyebrow">Оборудование и технологии</p>
          <h2>Современный парк для сложных задач</h2>
          <p className="section-description">ВСП Logan, лаборатории, дегазирующие ёмкости, моментоповышающие кольца и прочее.</p>
        </div>
        <div className="cards equipment-cards">
          {equipment.map((item) => (
            <article className="card equipment-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cases slide" id="cases">
        <div className="section-head">
          <p className="eyebrow">Проекты и кейсы</p>
          <h2>Работаем для крупнейших заказчиков</h2>
        </div>
        <div className="cards case-cards">
          {cases.map((item) => (
            <article className="card case-card" key={item.client}>
              <div className="case-top">
                <span className="badge accent">{item.client}</span>
                <span className="mini-pill">{item.work}</span>
              </div>
              <p>{item.result}</p>
              <div className="tags">
                {item.metrics.map((metric) => (
                  <span key={metric} className="chip small">{metric}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contacts slide" id="contacts">
        <div className="section-head">
          <p className="eyebrow">Контакты</p>
          <h2>Свяжитесь с нами</h2>
          <p className="section-description">Готовы обсудить задачу и предложить план в течение 24 часов.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>ООО «АТЕРРА»</h3>
            <p>Юр. адрес: г. Нефтеюганск</p>
            <p>Производственная база: п. Сингапай</p>
            <p>Контактное лицо: Генеральный директор Заикин Николай Викторович</p>
            <div className="contact-links">
              <a href="tel:+79026917733" className="btn primary">+7 902 691 77 33</a>
              <a href="mailto:aterra.ooo@gmail.com" className="btn ghost">aterra.ooo@gmail.com</a>
            </div>
          </div>
          <div className="contact-card ghost">
            <h4>Форма обратной связи</h4>
            <p>Оставьте заявку — подготовим коммерческое предложение.</p>
            <div className="tags">
              <span className="chip small">КП за 24 часа</span>
              <span className="chip small">Сертификаты по запросу</span>
              <span className="chip small">Доступ к кейсам</span>
            </div>
            <a className="btn primary full" href="mailto:aterra.ooo@gmail.com">Запросить КП</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-mark small">АТ</div>
          <div>
            <div className="brand-name">АТЕРРА</div>
            <div className="brand-tag">Инжиниринговые решения</div>
          </div>
        </div>
        <div className="footer-links">
          <a href="#home">Главная</a>
          <a href="#services">Услуги</a>
          <a href="#about">О компании</a>
          <a href="#cases">Кейсы</a>
          <a href="#contacts">Контакты</a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} ООО «АТЕРРА». Все права защищены.</div>
      </footer>
    </div>
  );
}

export default App;
