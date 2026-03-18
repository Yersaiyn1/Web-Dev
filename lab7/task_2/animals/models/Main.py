from Dog import Dog
from Cat import Cat
from Animal import Animal


def main():
    animal = Animal("Generic Animal", 5, "Gray")
    dog = Dog("Buddy", 3, "Brown", "Labrador")
    cat = Cat("Whiskers", 2, "White", True)

    animals = [animal, dog, cat]

    for a in animals:
        print(a)
        print(a.speak())   # polymorphism
        print(a.eat())
        print("-" * 30)

    print(dog.fetch())
    print(cat.climb())


if __name__ == "__main__":
    main()