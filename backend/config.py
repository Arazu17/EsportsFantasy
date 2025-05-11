from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["fantasy_league_db"]
league_collection = db["cod_leagues"]
