const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.despia.nutribemplus';

const features = [
  ['📸', 'Análise por foto com IA', 'Tire uma foto da refeição e receba uma estimativa nutricional de forma rápida e prática.'],
  ['🧠', 'Nutricionista IA', 'Converse com uma IA para tirar dúvidas, receber sugestões de refeições e ajustar escolhas à sua rotina.'],
  ['⏱️', 'Técnica Pomodoro', 'Use ciclos de foco para organizar estudos, trabalho, treinos e preparação alimentar com mais disciplina.'],
  ['📊', 'Controle alimentar completo', 'Acompanhe refeições, consumo diário, calorias e hábitos alimentares em um só lugar.'],
  ['🎯', 'Planejamento personalizado', 'Organize sua rotina de acordo com seu objetivo: emagrecer, manter ou ganhar massa.'],
  ['🍅', 'Receitas saudáveis', 'Tenha ideias práticas para montar refeições equilibradas e variar sua alimentação.'],
  ['💧', 'Controle de água', 'Monitore sua hidratação e mantenha constância ao longo da semana.'],
  ['⚖️', 'Acompanhamento de progresso', 'Visualize peso, evolução e histórico com mais clareza e organização.'],
  ['📅', 'Calendário nutricional', 'Organize sua rotina alimentar e mantenha previsibilidade nas refeições do dia a dia.']
];

function PlayStoreButton() {
  return (
    <a className="btn-playstore" href={playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Baixar no Google Play">
      <svg viewBox="0 0 64 64" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6.8C7 7.8 6.4 9.4 6.4 11.5V52.5C6.4 54.6 7 56.2 8 57.2L35.1 32L8 6.8Z" fill="#00C4FF" />
        <path d="M35.1 32L44.4 22.7L56 29.2C59.3 31 59.3 33 56 34.8L44.4 41.3L35.1 32Z" fill="#FFD400" />
        <path d="M35.1 32L8 57.2C9.3 58.5 11.4 58.7 14 57.3L44.4 41.3L35.1 32Z" fill="#00D26A" />
        <path d="M35.1 32L44.4 22.7L14 6.7C11.4 5.3 9.3 5.5 8 6.8L35.1 32Z" fill="#FF5C5C" />
      </svg>
      <span>
        <small>Disponível no</small>
        <strong>Google Play</strong>
      </span>
    </a>
  );
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand">
            <div className="brand-mark">NB+</div>
            <div className="brand-text">
              <strong>Nutri Bem Plus</strong>
              <span>Saúde, controle e evolução</span>
            </div>
          </a>
          <nav className="nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#nutricionista-ia">Nutricionista IA</a>
            <a href="#premium">Premium</a>
            <a href="#baixar">Baixar</a>
          </nav>
          <a className="btn btn-primary" href={playStoreUrl} target="_blank" rel="noopener noreferrer">Baixar agora</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">🌿 Nutrição inteligente, rotina saudável e foco real</div>
              <h1 className="title">Controle sua alimentação com <span>tecnologia, IA e praticidade</span></h1>
              <p className="subtitle">Registre refeições, acompanhe calorias, hidratação, evolução, receba apoio da Nutricionista IA e organize sua rotina com recursos inteligentes dentro do Nutri Bem Plus.</p>
              <div className="btn-row">
                <a className="btn btn-primary" href={playStoreUrl} target="_blank" rel="noopener noreferrer">Baixar no Google Play</a>
                <a className="btn btn-secondary" href="#como-funciona">Ver como funciona</a>
              </div>
              <div className="hero-points">
                <div className="pill">📸 Análise por foto com IA</div>
                <div className="pill">🧠 Nutricionista IA</div>
                <div className="pill">🍅 Receitas saudáveis</div>
                <div className="pill">⏱️ Técnica Pomodoro</div>
              </div>
            </div>

            <div className="phone-shell">
              <div className="phone-screen">
                <div className="app-card">
                  <div className="card-head">
                    <div><div className="muted small">Resumo de hoje</div><h3>Seu progresso</h3></div>
                    <div className="premium-chip">Premium</div>
                  </div>
                  <div className="muted small mt">Meta diária</div>
                  <div className="metric-row"><strong>1.850 kcal</strong><span>No ritmo certo</span></div>
                  <div className="progress"><span /></div>
                </div>
                <div className="mini-grid">
                  <div className="mini-card"><div className="muted small">Água</div><strong>2,3 L</strong><div className="muted small mt-xs">Hoje</div></div>
                  <div className="mini-card"><div className="muted small">Pomodoro</div><strong>25m</strong><div className="accent small mt-xs">Foco ativo</div></div>
                </div>
                <div className="app-card no-margin">
                  <div className="card-head center">
                    <div><div className="muted small">Nutricionista IA</div><div className="question">“O que posso comer no jantar?”</div></div>
                    <div className="large-icon">🧠</div>
                  </div>
                  <div className="analysis-grid">
                    <div className="macro-card"><div className="muted micro">Calorias</div><strong>540</strong></div>
                    <div className="macro-card"><div className="muted micro">Proteína</div><strong>32g</strong></div>
                    <div className="macro-card"><div className="muted micro">Carbo.</div><strong>48g</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="highlight-band section compact">
          <div className="container highlight-grid">
            <div className="highlight-item">IA para facilitar escolhas alimentares</div>
            <div className="highlight-item">Receitas saudáveis no app</div>
            <div className="highlight-item">Pomodoro para foco e rotina</div>
            <div className="highlight-item">Visual premium verde NutriBem</div>
          </div>
        </section>

        <section id="como-funciona" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Como funciona</div>
              <h2>Uma experiência simples, rápida e eficiente</h2>
              <p>O Nutri Bem Plus reduz o atrito da rotina saudável: você registra, acompanha, recebe sugestões e organiza hábitos em poucos toques.</p>
            </div>
            <div className="steps-grid">
              <article className="step-card"><div className="step-number">1</div><h3>Registre sua alimentação</h3><p>Use foto, receitas e registros para manter seu histórico alimentar mais organizado.</p></article>
              <article className="step-card"><div className="step-number">2</div><h3>Receba apoio inteligente</h3><p>A Nutricionista IA ajuda com dúvidas, sugestões de refeições e orientações práticas.</p></article>
              <article className="step-card"><div className="step-number">3</div><h3>Mantenha constância</h3><p>Acompanhe água, calorias, metas e use Pomodoro para criar uma rotina mais disciplinada.</p></article>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="section feature-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Funcionalidades</div>
              <h2>Recursos centrais do Nutri Bem Plus</h2>
              <p>Uma combinação de nutrição, organização e produtividade para apoiar uma rotina mais saudável.</p>
            </div>
            <div className="features-grid">
              {features.map(([icon, title, description]) => (
                <article className="feature-card" id={title === 'Nutricionista IA' ? 'nutricionista-ia' : undefined} key={title}>
                  <div className="feature-icon">{icon}</div><h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <article className="split-card">
              <div className="eyebrow">Para quem é</div><h3>Feito para diferentes objetivos</h3>
              <div className="list">
                <div className="list-item">✔ Quem quer emagrecer com mais controle</div>
                <div className="list-item">✔ Quem deseja ganhar massa muscular</div>
                <div className="list-item">✔ Quem busca melhorar a alimentação</div>
                <div className="list-item">✔ Quem quer foco, rotina e praticidade no dia a dia</div>
              </div>
            </article>
            <article className="split-card premium" id="premium">
              <div className="eyebrow light">Plano premium</div><h3>Leve sua experiência a outro nível</h3>
              <p>Desbloqueie recursos avançados, tenha uma experiência mais completa e aproveite ainda mais praticidade no seu dia a dia.</p>
              <div className="list">
                <div className="list-item">✨ Relatórios mais completos</div>
                <div className="list-item">✨ Mais recursos com IA</div>
                <div className="list-item">✨ Ferramentas extras para organização</div>
                <div className="list-item">✨ Experiência aprimorada no Nutri Bem Plus</div>
              </div>
            </article>
          </div>
        </section>

        <section id="baixar" className="section cta-section">
          <div className="container">
            <div className="cta-box">
              <div className="eyebrow white">Baixe agora</div>
              <h2>Comece hoje a cuidar melhor da sua alimentação</h2>
              <p>Use tecnologia, organização e inteligência artificial para simplificar sua rotina saudável com o Nutri Bem Plus.</p>
              <div className="btn-row center-row"><PlayStoreButton /><a className="btn btn-secondary" href="#top">Ver apresentação</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>© 2026 Nutri Bem Plus. Todos os direitos reservados.</div>
          <div className="footer-links"><a href="#">Política de Privacidade</a><a href="#">Termos de Uso</a><a href="#">Suporte</a></div>
        </div>
      </footer>
    </>
  );
}
