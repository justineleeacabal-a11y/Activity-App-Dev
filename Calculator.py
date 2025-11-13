def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Cannot divide by zero."

def average(a, b):
    return (a + b) / 2

def get_number(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("Invalid input. Please enter a number.")

def main():
    print("=== Simple Calculator App ===")
    
    while True:
        # Input numbers with error handling
        num1 = get_number("Enter first number: ")
        num2 = get_number("Enter second number: ")

        print("\nResults:")
        print(f"Addition: {add(num1, num2)}")
        print(f"Subtraction: {subtract(num1, num2)}")
        print(f"Multiplication: {multiply(num1, num2)}")
        print(f"Division: {divide(num1, num2)}")
        print(f"Average: {average(num1, num2)}")

        # Loop control
        choice = input("\nDo you want to perform another calculation? (yes/no): ").strip().lower()
        if choice not in ("yes", "y"):
            print("Exiting program... Goodbye!")
            break

if __name__ == "__main__":
    main()