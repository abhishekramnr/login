from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for React frontend (localhost:3000)
CORS(app)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    username = data.get('username', '').strip()
    password = data.get('password', '').strip()

    # Verify credentials
    if username == 'aildc' and password == 'Devdlc@123':
        return jsonify({
            'status': 'success',
            'username': 'aildc',
            'name': 'AILDC User'
        }), 200

    return jsonify({
        'status': 'error',
        'message': 'Invalid username or password'
    }), 401

if __name__ == '__main__':
    app.run(port=5000, debug=True)
