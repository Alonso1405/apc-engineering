import { useState } from "react";
import { FaWaze } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Swal from "sweetalert2";

export default function Footer() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    if (!nombre || !email || !mensaje) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor completa todos los campos.",
        confirmButtonColor: "#dc2626",
      });
      return;
    }

    const texto = `
*FEDRA LUBRICANTES*
━━━━━━━━━━━━━━━━━━

*Nombre:*
${nombre}

*Email:*
${email}

*Mensaje:*
${mensaje}

━━━━━━━━━━━━━━━━━━
Mensaje enviado desde el sitio web
`;

    const numero = "5214425066505";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    // Limpiar formulario
    setNombre("");
    setEmail("");
    setMensaje("");

    Swal.fire({
      icon: "success",
      title: "Mensaje preparado",
      text: "Se abrió WhatsApp con la información capturada.",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <footer id="contacto" className="bg-red-600 pt-20 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tarjeta blanca */}
        <div
          className="
        bg-white
        rounded-xl
        shadow-2xl
        p-8
        md:p-12
      "
        >
          <div className="grid md:grid-cols-3 gap-10">
            {/* Columna izquierda */}
            <div>
              <img
                src="/logo.png"
                alt="Fedra Lubricantes"
                className="h-28 mb-6"
              />

              <h3 className="text-4xl font-bold text-red-600 mb-4">
                Fedra Lubricantes
              </h3>

              <p className="text-gray-700 mb-6">
                Pirineos 515-B, bodega 22, Parque Industrial Benito Juárez,
                Querétaro Qro. C.P. 76120
              </p>

              <div className="flex gap-3 mb-6">
                <a
                  href="https://waze.com/ul/h9g8t6q4gt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-4xl hover:scale-110 transition"
                >
                  <FaWaze />
                </a>

                <a
                  href="https://maps.app.goo.gl/jKVWs9G9MTjsBeCW7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 text-4xl hover:scale-110 transition"
                >
                  <SiGooglemaps />
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:ventasqro@fedralub.com.mx"
                    className="text-blue-600"
                  >
                    ventasqro@fedralub.com.mx
                  </a>
                </div>

                <div>
                  <strong>Teléfonos:</strong>
                  <br />
                  442-209-5233
                  <br />
                  442-210-5115
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold text-red-600 mb-8">
                Contáctenos
              </h2>

              <form className="space-y-5" onSubmit={enviarWhatsApp}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="border rounded p-4 w-full"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded p-4 w-full"
                  />
                </div>

                <textarea
                  rows="6"
                  placeholder="Mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="border rounded p-4 w-full"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  transition
                "
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white mt-6">
          <small>Fedra Lubricantes S.A. de C.V. 2024</small>
        </div>
      </div>
    </footer>
  );
}
