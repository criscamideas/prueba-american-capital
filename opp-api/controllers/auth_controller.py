import jwt
import datetime
from models.user_model import UserModel

SECRET_KEY = "opp"

class AuthController:
    def __init__(self):
        self.user_model = UserModel()

    def login(self, email, password):
        user = self.user_model.validate_user(email, password)
        if not user:
            return {"error": "Usuario o contraseña incorrecta"}, 401
        
        token = self.generate_token(user)
        user_data = {
            "email": user['email']
        }

        return {"token": token, "user": user_data}, 200

    def generate_token(self, user):
        payload = {
            "email": user['email'],
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
        return token
