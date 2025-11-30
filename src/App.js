import './App.css';
import logo from './images/aterraLogo.png';

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Оборудование', href: '#equipment' },
  { label: 'Проекты', href: '#projects' },
];

const metrics = [
  { value: '800+', label: 'успешных операций', side: 'right' },
  { value: '14', label: 'комплексных звеньев', side: 'left' },
  { value: '30+', label: 'единиц спецтехники', side: 'right' },
  { value: '130+', label: 'квалифицированных специалистов', side: 'left' },
  { value: '100%', label: 'успешность работ', side: 'right' },
];

const directions = [
  {
    number: '1',
    title: 'Разрядка скважин',
    description:
      'Снижение пластового давления до расчетных значений с использованием лаборатории, газоанализаторов и емкостей с вытяжной системой.',
  },
  {
    number: '2',
    title: 'Ремонтные работы',
    description:
      'Технологическое сопровождение спуска обсадных колонн в сложных условиях, применение моментоповышающих колец и спецоборудования.',
  },
  {
    number: '3',
    title: 'Инжиниринговое сопровождение',
    description:
      'Применение специализированного оборудования и технологическое сопровождение с верхним силовым приводом при вырезке окон.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="logo-mark">AT</div>
        <nav className="nav">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className={index === 0 ? 'active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__overlay" />
          <div className="hero__content">
            <div className="hero__logo">
              {/* Замените следующую строку на <img src="/путь/к/логотипу.png" alt="Логотип" /> */}
              <img src={logo} alt="Логотип" />
            </div>
            <div className="hero__badge">
              Инжиниринговые услуги <br />
              для нефтегазовой отрасли
            </div>
            <p className="lead">
              Снижение рисков и повышение эффективности бурения и капитального ремонта скважин
            </p>
            <div className="cta">
              <span className="cta__marker" />
              <a className="cta__link" href="#metrics">
                Ключевые показатели
              </a>
            </div>
          </div>
          <p className="hero__ghost">СИЛА <br />РУССКОЙ <br />ЗЕМЛИ</p>
        </section>

        <section className="metrics" id="metrics">
          <div className="section-heading">
            <p className="eyebrow">Главная</p>
            <h2>
              Ключевые <span>показатели</span>
            </h2>
          </div>
          <div className="metrics__timeline">
            <span className="metrics__rail" />
            {metrics.map((item, idx) => (
              <div key={item.value} className={`metric metric--${item.side}`}>
                <div className="metric__marker">
                  <span />
                </div>
                <div className="metric__content">
                  <p className="metric__value">{item.value}</p>
                  <p className="metric__label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="more-link" href="#services">
            подробнее
          </a>
        </section>

        <section className="directions" id="services">
          <div className="section-heading">
            <p className="eyebrow">Главная</p>
            <h2>
              Основные <span>направления</span>
            </h2>
          </div>
          <div className="cards">
            {directions.map((direction) => (
              <article key={direction.number} className="card">
                <div className="card__tag">{direction.number}</div>
                <div className="card__icon" aria-hidden />
                <h3>{direction.title}</h3>
                <p>{direction.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about__content">
            <p className="eyebrow">О компании</p>
            <h2>
              Главное о <span>компании</span>
            </h2>
            <div className="about__text">
              <p>
                Снижение пластового давления до расчетных значений с использованием автоматизированной лаборатории,
                газоанализаторов и емкостей с вытяжной системой.
              </p>
              <p>
                Техническое и технологическое сопровождение спуска обсадных колонн в сложных геолого-технических условиях,
                применение моментоповышающих колец и специализированного оборудования.
              </p>
              <p>
                Применение специализированного оборудования. Техническое и технологическое сопровождение спуска обсадных
                колонн. Работы с верхним силовым приводом при вырезке окон.
              </p>
            </div>
          </div>
          <div className="about__visual">
            <div className="about__photo">Фото заглушка</div>
            <div className="about__drill" aria-hidden />
          </div>
        </section>

        <section className="placeholder" id="equipment">
          <div className="section-heading">
            <p className="eyebrow">Оборудование</p>
            <h2>
              Парк <span>оборудования</span>
            </h2>
          </div>
          <p className="placeholder__text">Раздел в подготовке — добавим детали и фото техники после согласования.</p>
        </section>

        <section className="contact" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Главная</p>
            <h2>
              Связаться <span>с нами</span>
            </h2>
          </div>
          <p className="contact__note">
            Расскажите о задаче — подготовим решения и подберем команду под проект в сфере бурения или капитального ремонта
            скважин.
          </p>
          <div className="contact__actions">
            <a className="cta-button" href="mailto:info@example.com">
              Написать
            </a>
            <a className="cta-button ghost" href="tel:+79990000000">
              Позвонить
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;