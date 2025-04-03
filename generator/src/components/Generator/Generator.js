import { useState } from "react";
import "./Generator.css";

const Generator = () => {
    const [text, setText] = useState("");
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    const generateQRCode = () => {
        let url;

        //if e else de urls especificas 

        if (text.trim().toLowerCase() === "atila") {
            url = "https://www.instagram.com/p/C_jKryxReG_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
        } else if (text.trim().toLowerCase() === "gay") {
            url = "https://www.instagram.com/_fe.bruxo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
        } else {
            url = text;
        }

        if (url.trim() !== "") {
            setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`);
        }
    };

    return (
        <div className="container">
            <h2 className="title">Gerador de QR Code</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite algo..."
                className="input"
            />
            <button onClick={generateQRCode} className="button">Gerar QR Code</button>
            {qrCodeUrl && (
                <div className="qrContainer">
                    <img src={qrCodeUrl} alt="QR Code" />
                </div>
            )}
        </div>
    );
};

export default Generator;
