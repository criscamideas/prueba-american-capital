import json

class UserModel:
    def __init__(self, data_file='database/users.json'):
        self.data_file = data_file
        self.users = self.load_users()

    def load_users(self):
        with open(self.data_file, 'r') as f:
            return json.load(f)

    def validate_user(self, email, password):
        for user in self.users:
            if user['email'] == email and user['password'] == password:
                return user
        return None
