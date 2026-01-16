import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Camera,
  Code,
  Coffee,
  Sparkles,
  Terminal,
  BookOpen,
} from "lucide-react";
import "./index.css";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    console.log("HomePage mounted", activeSection);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-content">
          <span className="logo" onClick={() => scrollToSection("home")}>
            MyProfile.
          </span>
          <div className="nav-links">
            {["教育", "职业", "兴趣"].map((item, idx) => {
              const id = ["education", "career", "hobbies"][idx];
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="nav-link"
                >
                  {item}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-contact"
            >
              联系我
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container hero">
        <div className="avatar-placeholder">
          <span>Amy</span>
        </div>

        <p className="hero-title">胡欣婷</p>

        <p className="hero-desc">
          谨此网站<br></br>记录我的职业探索之旅
        </p>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingBottom: "80px" }}>
        {/* Education Section */}
        <section id="education" className="section">
          <h2 className="section-title">教育经历</h2>
          <div className="grid-2">
            <div className="card edu-card col-span-2">
              <div className="icon-box">
                <GraduationCap size={40} color="#0071e3" />
              </div>
              <div>
                <span className="meta-tag">2020 - 2027</span>
                <h3 className="card-title">计算机科学与技术 (学士)</h3>
                <p className="card-subtitle">
                  北京邮电大学 · School of Electronics Engineering
                </p>
                <p className="card-desc">
                  主修课程：数据结构、算法分析、人机交互设计。在校期间曾获得国家奖学金，并担任学生科技协会主席，主导了校园导航小程序的开发。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Plan Section */}
        <section id="career" className="section">
          <h2 className="section-title">职业规划</h2>
          <div className="grid-3">
            <div className="card card-dark col-span-2">
              <div className="blob"></div>
              <div className="card-content">
                <Briefcase
                  size={32}
                  style={{ marginBottom: "16px", color: "#86868b" }}
                />
                <h3 className="card-title">全栈架构师</h3>
                <p
                  className="card-desc dark-desc"
                  style={{ maxWidth: "400px" }}
                >
                  短期目标是深耕前端工程化与 Node.js 后端服务。未来 3-5
                  年，我计划成为一名能够独立负责大型复杂系统架构的技术专家。
                </p>
              </div>
            </div>

            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Terminal
                size={32}
                color="#1d1d1f"
                style={{ marginBottom: "16px" }}
              />
              <div>
                <h4 className="card-title" style={{ fontSize: "1.25rem" }}>
                  持续开源
                </h4>
                <p className="card-desc" style={{ fontSize: "0.875rem" }}>
                  积极参与 GitHub 社区，每年贡献至少 2 个高质量开源库。
                </p>
              </div>
            </div>

            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Sparkles
                size={32}
                color="#f5a623"
                style={{ marginBottom: "16px" }}
              />
              <div>
                <h4 className="card-title" style={{ fontSize: "1.25rem" }}>
                  产品思维
                </h4>
                <p className="card-desc" style={{ fontSize: "0.875rem" }}>
                  不仅仅写代码，更要理解商业逻辑，打造用户真正喜爱的产品。
                </p>
              </div>
            </div>

            <div
              className="card card-gradient col-span-2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4 className="card-title" style={{ color: "#003e75" }}>
                  目前的重点
                </h4>
                <ul
                  style={{
                    marginTop: "8px",
                    paddingLeft: 0,
                    listStyle: "none",
                    color: "#005bb5",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  <li style={{ marginBottom: "4px" }}>
                    • 深入学习 Rust 与 WebAssembly
                  </li>
                  <li style={{ marginBottom: "4px" }}>
                    • 探索 AI 辅助编程的最佳实践
                  </li>
                  <li>• 提升团队技术领导力</li>
                </ul>
              </div>
              <div
                style={{
                  display: "none",
                  // "@media (min-width: 768px)": { display: "block" },
                }}
              >
                {/* Note: In inline JS styles, media queries don't work directly like this, relying on CSS class instead */}
                <div className="desktop-only-icon">
                  <BookOpen size={48} color="#a6c8ff" />
                </div>
                <style>{`
                    .desktop-only-icon { display: none; }
                    @media (min-width: 768px) { .desktop-only-icon { display: block; } }
                 `}</style>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="section">
          <h2 className="section-title">兴趣爱好</h2>
          <div className="grid-4">
            <HobbyCard icon={<Camera />} title="摄影" desc="街头 / 风光" />
            <HobbyCard icon={<Code />} title="Side Project" desc="独立开发" />
            <HobbyCard icon={<Coffee />} title="手冲咖啡" desc="浅烘焙爱好者" />
            <HobbyCard icon={<MapPin />} title="徒步" desc="探索自然" />
          </div>
        </section>
      </div>
    </div>
  );
};

// --- Helper Components ---
interface HobbyCardProps {
  icon: React.ReactElement<{ size?: number }>;
  title: string;
  desc: string;
}
const HobbyCard = ({ icon, title, desc }: HobbyCardProps) => (
  <div className="hobby-card">
    <div className="hobby-icon-circle">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div className="hobby-title">{title}</div>
    <div className="hobby-desc">{desc}</div>
  </div>
);

export default Portfolio;
