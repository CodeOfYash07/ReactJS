import { NavLink } from "react-router";
import { FaBolt, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const FEATURES = [
    { icon: <FaBolt />, name: "Genuine Products", desc: "100% authentic, brand-authorized gadgets with full warranty." },
    { icon: <FaTruck />, name: "Express Delivery", desc: "Same-day dispatch, next-day delivery across major cities." },
    { icon: <FaShieldAlt />, name: "Secure Payments", desc: "Bank-grade encryption on every transaction." },
    { icon: <FaHeadset />, name: "24/7 Support", desc: "Expert tech support whenever you need it." },
];

const STATS = [
    { v: "50K+", l: "Products Sold" },
    { v: "4.9★", l: "Avg Rating" },
    { v: "24hr", l: "Fast Delivery" },
];

export default function HomePage() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Jost:wght@300;400;500;600&display=swap');

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes floatCard {
                    0%, 100% { transform: translateY(0) rotate(-1deg); }
                    50%      { transform: translateY(-10px) rotate(-1deg); }
                }

                .hp-a1 { animation: fadeUp .7s .1s both; }
                .hp-a2 { animation: fadeUp .7s .25s both; }
                .hp-a3 { animation: fadeUp .7s .4s both; }
                .hp-a4 { animation: fadeUp .7s .55s both; }
                .hp-a5 { animation: fadeUp .7s .7s both; }

                .hp-btn-blk {
                    padding: 13px 32px; background: #0a0a0a; color: #fff;
                    font-size: 11px; font-weight: 500;
                    letter-spacing: .15em; text-transform: uppercase;
                    border: none; cursor: pointer; transition: all .3s;
                    font-family: 'Jost', sans-serif;
                    text-decoration: none; display: inline-block;
                }
                .hp-btn-blk:hover { background: #222; transform: translateX(3px); }

                .hp-btn-ghost {
                    font-size: 11px; font-weight: 500;
                    letter-spacing: .15em; text-transform: uppercase;
                    color: #999; border: none; background: none; cursor: pointer;
                    display: inline-flex; align-items: center; gap: 6px;
                    transition: color .2s; font-family: 'Jost', sans-serif;
                    text-decoration: none;
                }
                .hp-btn-ghost:hover { color: #333; }

                .hp-stat {
                    position: relative; cursor: default;
                }
                .hp-stat::after {
                    content: ''; position: absolute;
                    bottom: -4px; left: 0; right: 0;
                    height: 1px; background: #0a0a0a;
                    transform: scaleX(0); transform-origin: left;
                    transition: transform .4s;
                }
                .hp-stat:hover::after { transform: scaleX(1); }

                .hp-feat-item {
                    padding: 28px 32px;
                    border-right: 1px solid #ece9e3;
                    transition: background .25s; cursor: pointer;
                }
                .hp-feat-item:last-child { border-right: none; }
                .hp-feat-item:hover { background: #fff; }

                .hp-feat-icon {
                    font-size: 18px; color: #777;
                    margin-bottom: 12px; display: block;
                    transition: color .25s;
                }
                .hp-feat-item:hover .hp-feat-icon { color: #0a0a0a; }

                .hp-product-card {
                    animation: floatCard 5s ease-in-out infinite;
                    background: #faf9f7;
                    border: 1px solid #ece9e3;
                    padding: 28px;
                }
            `}</style>

            {/* Offset for the 72px fixed sidebar */}
            <div style={{
                marginLeft: "72px",
                minHeight: "100vh",
                background: "#fff",
                fontFamily: "'Jost', sans-serif",
            }}>

                {/* ── Topbar ── */}
                <div style={{
                    padding: "20px 48px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    borderBottom: "1px solid #f0ede8",
                }}>
                    <span style={{
                        fontSize: "11px", letterSpacing: ".2em",
                        textTransform: "uppercase", color: "#bbb", fontWeight: 500,
                    }}>
                        Products
                    </span>
                    <span style={{ fontSize: "12px", color: "#ccc", letterSpacing: ".05em" }}>
                        Search catalogue
                    </span>
                </div>

                {/* ── Hero ── */}
                <div style={{
                    padding: "64px 48px 52px",
                    display: "grid",
                    gridTemplateColumns: "1fr 340px",
                    gap: "56px",
                    alignItems: "start",
                }}>
                    {/* Left copy */}
                    <div>
                        {/* Eyebrow */}
                        <div className="hp-a1" style={{
                            fontSize: "10px", letterSpacing: ".3em",
                            textTransform: "uppercase", color: "#bbb", fontWeight: 500,
                            marginBottom: "20px",
                            display: "flex", alignItems: "center", gap: "10px",
                        }}>
                            <span style={{ width: "24px", height: "1px", background: "#ccc", display: "inline-block" }} />
                            Next-Gen Tech Store
                        </div>

                        {/* Heading */}
                        <h1 className="hp-a2" style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "3.8rem", fontWeight: 300,
                            color: "#0a0a0a", lineHeight: 1.08,
                            letterSpacing: "-.01em", marginBottom: "24px",
                        }}>
                            Power Up<br />
                            Your <em>Digital</em><br />
                            <strong style={{ fontWeight: 600 }}>Life.</strong>
                        </h1>

                        {/* Body */}
                        <p className="hp-a3" style={{
                            fontSize: ".9rem", color: "#888",
                            lineHeight: 1.85, maxWidth: "380px",
                            marginBottom: "36px", fontWeight: 300,
                        }}>
                            Premium gadgets, cutting-edge tech — curated for those who demand the best.{" "}
                            <strong style={{ color: "#333", fontWeight: 500 }}>
                                Fast delivery, genuine products.
                            </strong>
                        </p>

                        {/* CTAs */}
                        <div className="hp-a4" style={{
                            display: "flex", alignItems: "center",
                            gap: "24px", marginBottom: "52px",
                        }}>
                            <NavLink to="/product" className="hp-btn-blk">Shop Now</NavLink>
                            <NavLink to="/addProduct" className="hp-btn-ghost">Add Product →</NavLink>
                        </div>

                        {/* Stats */}
                        <div className="hp-a5" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                            {STATS.map((s, i) => (
                                <>
                                    {i > 0 && (
                                        <div key={`sep-${i}`} style={{
                                            width: "1px", height: "32px", background: "#e8e6e1",
                                        }} />
                                    )}
                                    <div key={s.v} className="hp-stat">
                                        <div style={{
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "1.75rem", fontWeight: 300, color: "#0a0a0a",
                                        }}>
                                            {s.v}
                                        </div>
                                        <div style={{
                                            fontSize: "10px", color: "#bbb",
                                            letterSpacing: ".1em", textTransform: "uppercase",
                                            marginTop: "4px", fontWeight: 500,
                                        }}>
                                            {s.l}
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                    {/* Right — Product Card */}
                    <div className="hp-product-card">
                        <div style={{
                            display: "flex", justifyContent: "space-between",
                            alignItems: "center", marginBottom: "20px",
                        }}>
                            <span style={{
                                fontSize: "9px", letterSpacing: ".2em",
                                textTransform: "uppercase", color: "#bbb", fontWeight: 500,
                            }}>
                                Smartphones
                            </span>
                            <span style={{
                                background: "#0a0a0a", color: "#fff",
                                padding: "3px 10px", fontSize: "9px", letterSpacing: ".1em",
                            }}>
                                Best Seller
                            </span>
                        </div>

                        <div style={{
                            height: "200px", display: "flex",
                            alignItems: "center", justifyContent: "center",
                            marginBottom: "24px", background: "#fff",
                            border: "1px solid #f0ede8",
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400"
                                alt="iPhone 15 Pro"
                                style={{ height: "180px", objectFit: "contain", filter: "grayscale(10%)" }}
                            />
                        </div>

                        <div style={{ height: "1px", background: "#ece9e3", marginBottom: "20px" }} />

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <div>
                                <div style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "1.2rem", fontWeight: 600, color: "#0a0a0a",
                                }}>
                                    iPhone 15 Pro
                                </div>
                                <div style={{
                                    fontSize: "10px", color: "#bbb",
                                    letterSpacing: ".08em", textTransform: "uppercase", marginTop: "4px",
                                }}>
                                    A17 Pro · Titanium
                                </div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "1.4rem", fontWeight: 300, color: "#0a0a0a",
                                }}>
                                    ₹1,34,900
                                </div>
                                <div style={{
                                    fontSize: "9px", color: "#888",
                                    letterSpacing: ".1em", textTransform: "uppercase", marginTop: "4px",
                                }}>
                                    In Stock
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Features ── */}
                <div style={{ borderTop: "1px solid #f0ede8", background: "#faf9f7" }}>
                    <div style={{ padding: "36px 48px 0" }}>
                        <div style={{
                            fontSize: "9px", letterSpacing: ".3em",
                            textTransform: "uppercase", color: "#bbb", fontWeight: 500,
                            marginBottom: "28px",
                            display: "flex", alignItems: "center", gap: "10px",
                        }}>
                            <span style={{ width: "16px", height: "1px", background: "#ccc", display: "inline-block" }} />
                            Why TechZone
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                        {FEATURES.map((f, i) => (
                            <div key={i} className="hp-feat-item">
                                <span className="hp-feat-icon">{f.icon}</span>
                                <div style={{
                                    fontSize: "12px", fontWeight: 600,
                                    color: "#0a0a0a", marginBottom: "6px", letterSpacing: ".02em",
                                }}>
                                    {f.name}
                                </div>
                                <div style={{
                                    fontSize: "11px", color: "#aaa",
                                    lineHeight: 1.65, fontWeight: 300,
                                }}>
                                    {f.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}