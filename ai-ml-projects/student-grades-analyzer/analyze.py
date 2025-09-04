import pandas as pd

df = pd.read_csv("students.csv")

# prints the first 5 rows
print(df.head(5))

# 10 rows and 3 columns
print(df.shape)

# prints the column names
print(df.columns)

# Average grade
print(df["grade"].mean())

# Average age
print(df["age"].mean())

# Max grade
print(df["grade"].max())

# Min grade
print(df["grade"].min())

# Filter for students with grades greater than 85
print(df[df["grade"] > 85])

# Sort grades from highest to lowest
print(df.sort_values("grade", ascending=False))

# Create new csv file for highest grades
top_grades = df[df["grade"] > 85]
top_grades_sorted = top_grades.sort_values("grade", ascending=False)

top_grades_sorted.to_csv("top_students.csv", index=False)