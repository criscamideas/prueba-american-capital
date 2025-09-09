from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from controllers.auth_controller import AuthController

HOST = 'localhost'
PORT = 8000
auth_controller = AuthController()

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def _set_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_POST(self):
        if self.path == "/auth/login":
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data)
            except Exception:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "JSON inválido"}).encode())
                return

            email = data.get("email")
            password = data.get("password")

            if not email or not password:
                self._set_headers(400)
                self.wfile.write(json.dumps({"error": "Correo y contraseña requeridas"}).encode())
                return
            
            response, status = auth_controller.login(email, password)

            self._set_headers(status)
            self.wfile.write(json.dumps(response).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({"error": "Ruta no encontrada"}).encode())


if __name__ == "__main__":
    server = HTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
    print(f"Servidor corriendo en http://{HOST}:{PORT}")
    server.serve_forever()
