import { useEffect, useState } from "react";

export default function NutriBemPlusLandingPage() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.despia.nutribemplus";
  const supportEmail = "suporte@eniacinfotech.com.br";
  const [liveUsers, setLiveUsers] = useState(127);
  const [countdown, setCountdown] = useState(299);
  const [showTopTrigger, setShowTopTrigger] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLiveUsers((current) => {
        const nextValue = current + Math.floor(Math.random() * 3);
        return nextValue > 180 ? 120 : nextValue;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown((current) => (current <= 0 ? 300 : current - 1));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowTopTrigger(true);
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const names = ["João", "Maria", "Carlos", "Ana", "Lucas", "Fernanda", "Bruno", "Camila"];
    const actions = [
      "acabou de acessar a página",
      "clicou para baixar o app",
      "está conferindo o Nutri Bem Plus",
      "voltou para ver os recursos premium",
    ];

    const interval = window.setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];

      setNotifications((current) => [
        { id: Date.now(), text: `${name} ${action}` },
        ...current.slice(0, 2),
      ]);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const formattedCountdown = `${String(Math.floor(countdown / 60)).padStart(2, "0")}:${String(countdown % 60).padStart(2, "0")}`;

  const ratingRows = [
    { label: "5 estrelas", width: "85%" },
    { label: "4 estrelas", width: "10%" },
    { label: "3 estrelas", width: "3%" },
    { label: "2 estrelas", width: "1%" },
    { label: "1 estrela", width: "1%" },
  ];

  const testimonials = [
    {
      name: "Carlos",
      text: "Muito mais fácil controlar calorias. Antes eu desistia, agora virou rotina.",
    },
    {
      name: "Juliana",
      text: "A Nutricionista IA ajuda muito quando não sei o que comer.",
    },
    {
      name: "Rafael ",
      text: "O app me deu clareza. Hoje sei exatamente onde estou errando.",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --bg: #06130f;
          --bg-soft: #0b2119;
          --card: #0f2b21;
          --card-2: #14382b;
          --line: rgba(213, 255, 231, 0.11);
          --text: #f4fff9;
          --muted: #b5d7c5;
          --primary: #22c55e;
          --primary-2: #86efac;
          --primary-dark: #15803d;
          --accent: #d9f99d;
          --success: #34d399;
          --blue: #38bdf8;
          --yellow: #fde047;
          --shadow: 0 24px 80px rgba(0, 0, 0, 0.36);
          --radius-xl: 32px;
          --radius-lg: 24px;
          --radius-md: 18px;
          --container: 1180px;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Inter, Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at top right, rgba(34, 197, 94, 0.25), transparent 25%),
            radial-gradient(circle at left, rgba(217, 249, 157, 0.09), transparent 20%),
            linear-gradient(180deg, #06130f 0%, #081710 100%);
          color: var(--text);
          line-height: 1.6;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(calc(100% - 32px), var(--container));
          margin: 0 auto;
        }

        .section {
          padding: 96px 0;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.14);
          border: 1px solid rgba(134, 239, 172, 0.28);
          color: #d9f99d;
          font-size: 14px;
          font-weight: 700;
        }

        .eyebrow {
          color: var(--primary-2);
          text-transform: uppercase;
          letter-spacing: 0.24em;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .title {
          font-size: clamp(32px, 6vw, 62px);
          line-height: 1.05;
          font-weight: 950;
          letter-spacing: -0.03em;
        }

        .title span {
          color: var(--primary-2);
        }

        .subtitle {
          font-size: 18px;
          color: var(--muted);
          margin-top: 22px;
          max-width: 640px;
        }

        .btn-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 56px;
          padding: 0 26px;
          border-radius: 18px;
          font-weight: 900;
          font-size: 16px;
          transition: 0.22s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          box-shadow: 0 14px 36px rgba(34, 197, 94, 0.25);
        }

        .btn-secondary {
          border: 1px solid rgba(213, 255, 231, 0.14);
          background: rgba(255, 255, 255, 0.045);
          color: white;
        }

        .store-buttons {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-playstore,
        .btn-appstore {
          background: #ffffff;
          color: #111;
          padding: 12px 18px;
          min-height: auto;
          border-radius: 16px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: 0;
        }

        .btn-appstore {
          background: #101820;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.18);
          cursor: not-allowed;
          opacity: 0.92;
        }

        .btn-playstore svg,
        .btn-appstore svg {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }

        .btn-playstore small,
        .btn-appstore small {
          display: block;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.1;
        }

        .btn-playstore strong,
        .btn-appstore strong {
          display: block;
          font-size: 18px;
          line-height: 1.1;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(14px);
          background: rgba(6, 19, 15, 0.78);
          border-bottom: 1px solid var(--line);
        }

        .topbar-inner {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          display: grid;
          place-items: center;
          font-size: 15px;
          font-weight: 950;
          letter-spacing: 0.04em;
          box-shadow: 0 12px 28px rgba(34, 197, 94, 0.24);
        }

        .brand-text strong {
          display: block;
          font-size: 18px;
          font-weight: 950;
        }

        .brand-text span {
          display: block;
          color: var(--muted);
          font-size: 13px;
        }

        .nav {
          display: flex;
          gap: 24px;
          color: var(--muted);
          font-size: 15px;
        }

        .nav a:hover {
          color: white;
        }

        .hero {
          padding: 72px 0 90px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 42px;
          align-items: center;
        }

        .hero-points {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 34px;
        }

        .pill {
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 14px 16px;
          color: #e2f8eb;
          font-size: 14px;
        }

        .phone-shell {
          background: linear-gradient(180deg, #082017, #0d261c);
          border: 1px solid rgba(213, 255, 231, 0.12);
          border-radius: 38px;
          padding: 16px;
          box-shadow: var(--shadow);
          max-width: 420px;
          margin-left: auto;
        }

        .phone-screen {
          background: linear-gradient(180deg, #0e2b20, #091c15);
          border: 1px solid rgba(213, 255, 231, 0.08);
          border-radius: 30px;
          padding: 22px;
        }

        .app-card,
        .mini-card,
        .macro-card,
        .step-card,
        .feature-card,
        .split-card,
        .legal-card,
        .cta-box {
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.04);
          border-radius: var(--radius-lg);
        }

        .app-card {
          padding: 18px;
          margin-bottom: 16px;
        }

        .app-card h3 {
          font-size: 26px;
          font-weight: 950;
        }

        .muted {
          color: var(--muted);
        }

        .progress {
          height: 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
          margin-top: 16px;
        }

        .progress span {
          display: block;
          height: 100%;
          width: 68%;
          background: linear-gradient(90deg, var(--primary), var(--primary-2));
          border-radius: inherit;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 16px;
        }

        .mini-card,
        .macro-card {
          padding: 16px;
        }

        .mini-card strong,
        .macro-card strong {
          display: block;
          font-size: 28px;
          line-height: 1.1;
          margin-top: 8px;
        }

        .analysis-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 16px;
        }

        .macro-card {
          text-align: center;
        }

        .highlight-band {
          background: rgba(255, 255, 255, 0.03);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .highlight-grid,
        .steps-grid,
        .features-grid,
        .split-grid,
        .legal-grid {
          display: grid;
          gap: 22px;
        }

        .highlight-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .highlight-item {
          text-align: center;
          padding: 24px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.04);
          font-weight: 800;
        }

        .section-head {
          max-width: 760px;
          margin-bottom: 42px;
        }

        .section-head h2 {
          font-size: clamp(28px, 5vw, 46px);
          line-height: 1.1;
          font-weight: 950;
        }

        .section-head p {
          margin-top: 16px;
          font-size: 18px;
          color: var(--muted);
        }

        .steps-grid,
        .features-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .split-grid,
        .legal-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .step-card,
        .feature-card,
        .split-card,
        .legal-card {
          padding: 28px;
        }

        .step-number {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          font-size: 22px;
          font-weight: 950;
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.22);
        }

        .step-card h3,
        .feature-card h3,
        .split-card h3 {
          font-size: 24px;
          font-weight: 900;
          margin-top: 18px;
        }

        .step-card p,
        .feature-card p,
        .split-card p {
          color: var(--muted);
          margin-top: 12px;
        }

        .feature-icon {
          font-size: 42px;
        }

        .feature-card:hover,
        .step-card:hover,
        .split-card:hover,
        .highlight-item:hover {
          transform: translateY(-3px);
          transition: 0.2s ease;
          border-color: rgba(134, 239, 172, 0.28);
        }

        .list {
          display: grid;
          gap: 14px;
          margin-top: 22px;
        }

        .list-item {
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid var(--line);
          color: #e2f8eb;
        }

        .split-card.premium {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(217, 249, 157, 0.07));
          border-color: rgba(134, 239, 172, 0.28);
        }

        .cta-box {
          background:
            radial-gradient(circle at top left, rgba(217, 249, 157, 0.2), transparent 28%),
            linear-gradient(135deg, var(--primary), var(--primary-dark));
          padding: 54px 36px;
          text-align: center;
          box-shadow: 0 28px 80px rgba(34, 197, 94, 0.22);
        }

        .cta-box p {
          color: rgba(255, 255, 255, 0.92);
          font-size: 18px;
          max-width: 760px;
          margin: 18px auto 0;
        }

        .legal-card h2 {
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1.12;
          font-weight: 950;
          margin-bottom: 14px;
        }

        .legal-card h3 {
          font-size: 18px;
          margin-top: 24px;
          margin-bottom: 8px;
          color: var(--primary-2);
        }

        .legal-card p,
        .legal-card li {
          color: var(--muted);
          font-size: 15px;
        }

        .legal-card a {
          color: var(--accent);
          font-weight: 800;
        }

        .rating-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .rating-label {
          width: 80px;
          font-size: 12px;
        }

        .rating-track {
          flex: 1;
          height: 8px;
          background: rgba(255,255,255,0.08);
          border-radius: 999px;
        }

        .rating-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 999px;
        }

        .conversion-note {
          font-size: 12px;
          color: var(--muted);
          margin-top: 10px;
        }

        .floating-cta {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 9999;
          border-radius: 999px;
          padding: 14px 20px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          font-weight: 950;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .top-trigger {
          position: fixed;
          top: 92px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.96);
          color: white;
          font-weight: 900;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.18);
          text-align: center;
        }

        .notification-stack {
          position: fixed;
          left: 20px;
          bottom: 20px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: min(330px, calc(100vw - 40px));
        }

        .notification-card {
          padding: 13px 16px;
          border-radius: 16px;
          background: rgba(15, 43, 33, 0.96);
          border: 1px solid rgba(213, 255, 231, 0.14);
          color: #f4fff9;
          font-size: 14px;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.36);
          backdrop-filter: blur(10px);
        }

        footer {
          border-top: 1px solid var(--line);
          padding: 30px 0 36px;
          color: var(--muted);
          font-size: 14px;
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        @media (max-width: 1080px) {
          .hero-grid,
          .steps-grid,
          .features-grid,
          .highlight-grid,
          .split-grid,
          .legal-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hero-grid {
            grid-template-columns: 1fr;
          }

          .phone-shell {
            margin: 0 auto;
          }
        }

        @media (max-width: 760px) {
          .nav {
            display: none;
          }

          .section,
          .hero {
            padding: 72px 0;
          }

          .hero-points,
          .mini-grid,
          .analysis-grid,
          .highlight-grid,
          .steps-grid,
          .features-grid,
          .split-grid,
          .legal-grid {
            grid-template-columns: 1fr;
          }

          .topbar-inner {
            min-height: 70px;
          }

          .btn,
          .btn-playstore,
          .btn-appstore {
            width: 100%;
          }

          .store-buttons {
            width: 100%;
          }

          .btn-row {
            flex-direction: column;
          }

          .floating-cta {
            left: 16px;
            right: 16px;
            bottom: 16px;
            justify-content: center;
          }

          .notification-stack {
            display: none;
          }

          .top-trigger {
            top: 82px;
            width: calc(100vw - 32px);
          }
        }
      `}</style>

      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand">
            <div className="brand-mark">NB+</div>
            <div className="brand-text">
              <strong>NutriBem Plus</strong>
              <span>Saúde, controle e evolução</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#premium">Premium</a>
            <a href="#politica">Privacidade</a>
            <a href="#termos">Termos</a>
            <a href="#baixar">Baixar</a>
          </nav>

          <a className="btn btn-primary" href="#baixar">Baixar agora</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">🌿 Nutrição inteligente, rotina saudável e foco real</div>
              <h1 className="title">
                Controle sua alimentação com <span>tecnologia, IA e praticidade</span>
              </h1>
              <p className="subtitle">
                Registre refeições, acompanhe calorias, hidratação, evolução, receba apoio da Nutricionista IA e organize sua rotina com recursos inteligentes dentro do Nutri Bem Plus.
              </p>
              <p style={{ marginTop: 12, color: "var(--muted)", fontWeight: 800 }}>
                +3.241 pessoas já conheceram o Nutri Bem Plus no Brasil.
              </p>

              <div className="btn-row">
                <a className="btn btn-primary" href={playStoreUrl} target="_blank" rel="noopener noreferrer">Baixar no Google Play</a>
                <a className="btn btn-secondary" href="#como-funciona">Ver como funciona</a>
              </div>
              <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 13, fontWeight: 800 }}>
                ✔ Sem complicação • ✔ Comece em segundos • ✔ Disponível para Android
              </p>

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
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "flex-start" }}>
                    <div>
                      <div className="muted" style={{ fontSize: 14 }}>Resumo de hoje</div>
                      <h3>Seu progresso</h3>
                    </div>
                    <div style={{ padding: "8px 12px", borderRadius: 14, background: "rgba(34,197,94,0.16)", color: "#d9f99d", fontSize: 13, fontWeight: 800 }}>Premium</div>
                  </div>
                  <div style={{ marginTop: 16, fontSize: 14 }} className="muted">Meta diária</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, marginTop: 8 }}>
                    <strong style={{ fontSize: 36, lineHeight: 1 }}>1.850 kcal</strong>
                    <span style={{ color: "var(--success)", fontSize: 14, fontWeight: 800 }}>No ritmo certo</span>
                  </div>
                  <div className="progress"><span /></div>
                </div>

                <div className="mini-grid">
                  <div className="mini-card">
                    <div className="muted" style={{ fontSize: 14 }}>Água</div>
                    <strong>2,3 L</strong>
                    <div className="muted" style={{ fontSize: 14, marginTop: 4 }}>Hoje</div>
                  </div>
                  <div className="mini-card">
                    <div className="muted" style={{ fontSize: 14 }}>Pomodoro</div>
                    <strong>25m</strong>
                    <div style={{ color: "var(--accent)", fontSize: 14, marginTop: 4 }}>Foco ativo</div>
                  </div>
                </div>

                <div className="app-card" style={{ marginBottom: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                    <div>
                      <div className="muted" style={{ fontSize: 14 }}>Nutricionista IA</div>
                      <div style={{ fontWeight: 900, marginTop: 4 }}>“O que posso comer no jantar?”</div>
                    </div>
                    <div style={{ fontSize: 36 }}>🧠</div>
                  </div>
                  <div className="analysis-grid">
                    <div className="macro-card">
                      <div className="muted" style={{ fontSize: 13 }}>Calorias</div>
                      <strong>540</strong>
                    </div>
                    <div className="macro-card">
                      <div className="muted" style={{ fontSize: 13 }}>Proteína</div>
                      <strong>32g</strong>
                    </div>
                    <div className="macro-card">
                      <div className="muted" style={{ fontSize: 13 }}>Carbo.</div>
                      <strong>48g</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="highlight-band section" style={{ padding: "56px 0" }}>
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
              <article className="step-card">
                <div className="step-number">1</div>
                <h3>Registre sua alimentação</h3>
                <p>Use foto, receitas e registros para manter seu histórico alimentar mais organizado.</p>
              </article>
              <article className="step-card">
                <div className="step-number">2</div>
                <h3>Receba apoio inteligente</h3>
                <p>A Nutricionista IA ajuda com dúvidas, sugestões de refeições e orientações práticas.</p>
              </article>
              <article className="step-card">
                <div className="step-number">3</div>
                <h3>Mantenha constância</h3>
                <p>Acompanhe água, calorias, metas e use Pomodoro para criar uma rotina mais disciplinada.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="section" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Funcionalidades</div>
              <h2>Recursos centrais do Nutri Bem Plus</h2>
              <p>Uma combinação de nutrição, organização e produtividade para apoiar uma rotina mais saudável.</p>
            </div>

            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon">📸</div>
                <h3>Análise por foto com IA</h3>
                <p>Tire uma foto da refeição e receba uma estimativa nutricional de forma rápida e prática.</p>
              </article>
              <article className="feature-card" id="nutricionista-ia">
                <div className="feature-icon">🧠</div>
                <h3>Nutricionista IA</h3>
                <p>Converse com uma IA para tirar dúvidas, receber sugestões de refeições e ajustar escolhas à sua rotina.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">⏱️</div>
                <h3>Técnica Pomodoro</h3>
                <p>Use ciclos de foco para organizar estudos, trabalho, treinos e preparação alimentar com mais disciplina.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Controle alimentar completo</h3>
                <p>Acompanhe refeições, consumo diário, calorias e hábitos alimentares em um só lugar.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Planejamento personalizado</h3>
                <p>Organize sua rotina de acordo com seu objetivo: emagrecer, manter ou ganhar massa.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🍅</div>
                <h3>Receitas saudáveis</h3>
                <p>Tenha ideias práticas para montar refeições equilibradas e variar sua alimentação.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">💧</div>
                <h3>Controle de água</h3>
                <p>Monitore sua hidratação e mantenha constância ao longo da semana.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>Acompanhamento de progresso</h3>
                <p>Visualize peso, evolução e histórico com mais clareza e organização.</p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Calendário nutricional</h3>
                <p>Organize sua rotina alimentar e mantenha previsibilidade nas refeições do dia a dia.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <article className="split-card">
              <div className="eyebrow">Para quem é</div>
              <h3>Feito para diferentes objetivos</h3>
              <div className="list">
                <div className="list-item">✔ Quem quer emagrecer com mais controle</div>
                <div className="list-item">✔ Quem deseja ganhar massa muscular</div>
                <div className="list-item">✔ Quem busca melhorar a alimentação</div>
                <div className="list-item">✔ Quem quer foco, rotina e praticidade no dia a dia</div>
              </div>
            </article>

            <article className="split-card premium" id="premium">
              <div className="eyebrow" style={{ color: "#d9f99d" }}>Plano premium</div>
              <h3>Leve sua experiência a outro nível</h3>
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

        <section id="baixar" className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-box">
              <div className="eyebrow" style={{ color: "#f4fff9", marginBottom: 14 }}>Baixe agora</div>
              <h2 style={{ fontSize: "clamp(30px,5vw,52px)", lineHeight: 1.08, fontWeight: 950 }}>Comece hoje a cuidar melhor da sua alimentação</h2>
              <p>Use tecnologia, organização e inteligência artificial para simplificar sua rotina saudável com o Nutri Bem Plus.</p>

              <div className="btn-row" style={{ justifyContent: "center", marginTop: 34 }}>
                <div className="store-buttons">
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

                  <button className="btn-appstore" type="button" aria-label="Em breve na App Store" disabled>
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
                    </svg>
                    <span>
                      <small>Em breve na</small>
                      <strong>App Store</strong>
                    </span>
                  </button>
                </div>

                <a className="btn btn-secondary" href="#top">Ver apresentação</a>
              </div>
            </div>
          </div>
        </section>

        <section id="legal" className="section" style={{ paddingTop: 0 }}>
          <div className="container legal-grid">
            <article className="legal-card" id="politica">
              <div className="eyebrow">Política de Privacidade</div>
              <h2>Como o Nutri Bem Plus protege seus dados</h2>
              <p>Última atualização: 2026. O Nutri Bem Plus valoriza sua privacidade e trata seus dados com finalidade limitada às funcionalidades do aplicativo.</p>

              <h3>1. Informações coletadas</h3>
              <p>Podemos coletar dados de cadastro, como nome, e-mail e login; dados de uso do aplicativo; informações relacionadas à alimentação, rotina, consumo, metas, peso, hidratação e preferências; imagens enviadas para análise de alimentos; e informações técnicas do dispositivo, como modelo, sistema operacional e identificadores necessários ao funcionamento do app.</p>

              <h3>2. Uso das informações</h3>
              <p>Os dados são utilizados para entregar as funcionalidades do Nutri Bem Plus, processar análises de alimentos por imagem, gerar histórico alimentar, relatórios, metas, recomendações, recursos de Nutricionista IA, calendário nutricional, controle de água e melhoria da experiência do usuário.</p>

              <h3>3. Câmera e imagens</h3>
              <p>O acesso à câmera é usado exclusivamente para registrar ou analisar alimentos quando o usuário decide utilizar essa função. As imagens não são usadas para outras finalidades sem consentimento.</p>

              <h3>4. Retenção de dados</h3>
              <p>Os dados são mantidos enquanto a conta estiver ativa ou pelo período necessário para prestação do serviço, cumprimento de obrigações legais, prevenção de fraude, segurança e suporte. O usuário pode solicitar exclusão ou revisão de dados pelo e-mail de suporte.</p>

              <h3>5. Suporte e solicitações</h3>
              <p>Para dúvidas, solicitações de privacidade ou suporte, entre em contato pelo e-mail <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
            </article>

            <article className="legal-card" id="termos">
              <div className="eyebrow">Termos de Uso</div>
              <h2>Condições de uso do aplicativo</h2>
              <p>Ao utilizar o Nutri Bem Plus, o usuário concorda com estes termos e reconhece que o app é uma ferramenta de apoio à organização alimentar, rotina saudável e acompanhamento pessoal.</p>

              <h3>1. Finalidade do aplicativo</h3>
              <p>O Nutri Bem Plus oferece recursos de controle alimentar, análise por foto com IA, Nutricionista IA, receitas, calendário nutricional, controle de água, acompanhamento de progresso, Pomodoro e funcionalidades premium.</p>

              <h3>2. Não substitui profissional de saúde</h3>
              <p>O aplicativo não substitui consulta, diagnóstico, avaliação, prescrição ou acompanhamento médico, nutricional, psicológico ou de qualquer outro profissional de saúde. As informações fornecidas são estimativas e apoio informativo.</p>

              <h3>3. Responsabilidade do usuário</h3>
              <p>O usuário é responsável pelas informações inseridas, pelas decisões tomadas com base no uso do app e por buscar orientação profissional quando necessário, especialmente em casos de doenças, restrições alimentares, gestação, uso de medicamentos ou condições clínicas específicas.</p>

              <h3>4. Assinatura e recursos premium</h3>
              <p>Alguns recursos podem depender de assinatura ou liberação premium. As condições de pagamento, renovação e cancelamento seguem as regras da loja de aplicativos utilizada.</p>

              <h3>5. Contato</h3>
              <p>Para suporte, dúvidas ou solicitações relacionadas ao uso do app, envie uma mensagem para <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
            </article>
          </div>
        </section>

        <section className="section" id="avaliacoes">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Avaliações</div>
              <h2>Mais de 4.8★ de satisfação dos usuários</h2>
              <p>Usuários relatam mais controle, praticidade e consistência ao usar o Nutri Bem Plus no dia a dia.</p>
            </div>

            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ fontSize: 48, fontWeight: 900 }}>4.8 ★</div>
              <div style={{ color: "var(--muted)", marginTop: 6 }}>Exemplo ilustrativo de avaliação</div>

              <div style={{ maxWidth: 400, margin: "20px auto", textAlign: "left" }}>
                {ratingRows.map((item) => (
                  <div className="rating-row" key={item.label}>
                    <span className="rating-label">{item.label}</span>
                    <div className="rating-track">
                      <div className="rating-fill" style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="features-grid">
              {testimonials.map((item) => (
                <article className="feature-card" key={item.name}>
                  <div style={{ color: "#fde047", fontSize: 20 }}>★★★★★</div>
                  <h3>{item.name}</h3>
                  <p>“{item.text}”</p>
                  <p className="conversion-note">Exemplo ilustrativo de experiência</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 40 }}>
          <div className="container" style={{ textAlign: "center" }}>
            <div style={{ marginBottom: 30 }}>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>🔥 Atividade recente na página</div>
              <div style={{ fontSize: 28, fontWeight: 900 }}>
                <span>{liveUsers}</span> visualizações recentes
              </div>
              <div className="conversion-note">Indicador visual de engajamento da landing.</div>
            </div>

            <div className="cta-box" style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900 }}>Você ainda vai adiar ou começar agora?</h2>
              <p style={{ marginTop: 10 }}>Cada dia sem controle é um passo mais longe do seu objetivo.</p>

              <div className="btn-row" style={{ justifyContent: "center", marginTop: 24 }}>
                <a className="btn btn-primary" href={playStoreUrl} target="_blank" rel="noopener noreferrer">Baixar agora</a>
              </div>
            </div>

            <div style={{ maxWidth: 500, margin: "0 auto" }}>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>⏳ Bônus de lançamento para novos usuários</div>
              <div style={{ fontSize: 26, fontWeight: 900, marginTop: 6 }}>{formattedCountdown}</div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>© 2026 Nutri Bem Plus. Todos os direitos reservados.</div>
          <div className="footer-links">
            <a href="#politica">Política de Privacidade</a>
            <a href="#termos">Termos de Uso</a>
            <a href={`mailto:${supportEmail}`}>Suporte</a>
          </div>
        </div>
      </footer>

      {showTopTrigger && (
        <div className="top-trigger">
          🚀 Comece agora sua evolução com o Nutri Bem Plus
        </div>
      )}

      <div className="notification-stack" aria-live="polite">
        {notifications.map((notification) => (
          <div className="notification-card" key={notification.id}>
            🔥 {notification.text}
          </div>
        ))}
      </div>

      <a className="floating-cta" href={playStoreUrl} target="_blank" rel="noopener noreferrer">
        Baixar App Agora
      </a>
    </>
  );
}
