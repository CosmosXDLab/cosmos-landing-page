const functions = require('firebase-functions');
const cors = require('cors')({ origin: true }); // Importamos CORS para permitir las peticiones desde cualquier origen

// Función HTTP para recibir el formulario de contacto
exports.contactForm = functions.https.onRequest((req, res) => {
  cors(req, res, () => {  // Usamos cors para evitar problemas con CORS en el front-end
    if (req.method !== 'POST') {
      return res.status(405).send('Método no permitido');
    }

    const { name, email, phone, subject, message } = req.body;

    // Validamos que los campos del formulario no estén vacíos
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    // Aquí puedes guardar los datos en Firestore, enviar un correo, etc.
    console.log('Datos del formulario recibidos:', req.body);

    // Respuesta exitosa
    return res.status(200).send('Mensaje recibido correctamente');
  });
});