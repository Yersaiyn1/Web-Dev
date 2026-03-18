from Animal import Animal

class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return f"{self.name} says: Meow!"

    def climb(self):
        return f"{self.name} is climbing a tree."

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, indoor={self.indoor})"
