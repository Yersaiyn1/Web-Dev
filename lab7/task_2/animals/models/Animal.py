class Animal:
    def __init__(self, name, age, color):
        self.name=name 
        self.age=age
        self.color=color
    
    def speak(self):
        return f"Hello my name is {self.name}, I am {self.age} old"
    
    def eat(self):
        return "I am eating, do not bother me"
    def __str__(self):
        return f"name: {self.name}, age: {self.age}, color: {self.color}"
    
