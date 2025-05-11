from flask import Flask, request, jsonify
from flask_cors import CORS
from models.league import create_league

app = Flask(__name__)
CORS(app)

@app.route("/api/create-league", methods=["POST"])
def create_cod_league():
    data = request.get_json()
    
    # You can add validation here
    if not data.get("leagueName"):
        return jsonify({"error": "League name is required"}), 400
    
    create_league(data)
    return jsonify({"message": "League created successfully"}), 201

if __name__ == "__main__":
    app.run(debug=True)
