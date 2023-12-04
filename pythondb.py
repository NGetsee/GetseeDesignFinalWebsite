import sqlite3

 

# Connect to the database (or create it if it doesn't exist)

conn = sqlite3.connect("mydatabase.db")

 

# Create a cursor object

cursor = conn.cursor()

 

# Create a table (for demonstration purposes)

cursor.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)''')

 

# Insert some data

cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("John Doe", "john@example.com"))

 

# Commit the changes and close the connection

conn.commit()

conn.close()