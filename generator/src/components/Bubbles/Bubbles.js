import "./Bubbles.css";

export default function Bubbles() {
    return (
        <div className="bubble-container">
            {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className="bubble" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }} />
            ))}
        </div>
    );
}
