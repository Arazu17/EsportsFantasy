def create_league(data):
    from config import league_collection
    league_collection.insert_one(data)
