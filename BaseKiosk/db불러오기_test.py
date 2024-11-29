import csv
import sqlite3
import traceback

# 데이터베이스에 연결
con = sqlite3.connect('data.db')
cursor = con.cursor()

try:
    with open('data.csv', 'r', encoding='utf-8') as file:
        csv_data = csv.reader(file)
        
        # Check if the file is empty
        first_row = next(csv_data, None)  # Try to read the first row (header)
        if first_row is None:
            print("Error: The CSV file is empty.")
        else:
            print("Processing data from CSV...")
            for row in csv_data:
                if len(row) == 7:  # Ensure the row has the correct number of columns
                    cursor.execute(
                        'INSERT INTO menu (id, category, category_num, degree, name, price, info) VALUES (?, ?, ?, ?, ?, ?, ?)',
                        row
                    )
                else:
                    print(f"Skipping invalid row: {row}")
            
            # Only commit if data was inserted
            con.commit()
            print("Data inserted successfully!")

except Exception as e:
    # Print full traceback and error message for debugging
    print("An unexpected error occurred:")
    print(f"Error message: {e}")
    print("Stack trace:")
    traceback.print_exc()  # This will print the stack trace to help identify the issue
finally:
    # 연결 종료
    con.close()
