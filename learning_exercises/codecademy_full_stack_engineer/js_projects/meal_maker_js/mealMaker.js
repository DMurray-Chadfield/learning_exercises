let menu = {
    _courses : {
      appetizers : [],
      mains : [],
      desserts : [],
    },
    get appetizers() {
      if (this._courses.appetizers) {
        return this._courses.appetizers;
      };
    },
    set appetizers(newAppetizer) {
      if (typeof newAppetizer === 'string') {
        this._courses.appetizers.push(newAppetizer);
      } else {
        console.log('Appetizer item should be a string.')
      };
    },
    get mains() {
      if (this._courses.mains) {
        return this._courses.mains;
      };
    },
    set mains(newMain) {
      if (typeof newMain === 'string') {
        this._courses.appetizers.push(newMain);
      } else {
        console.log('Main item should be a string.')
      };
    },
    get desserts() {
      if (this._courses.desserts) {
        return this._courses.desserts;
      }; 
    },
    set desserts(newDessert) {
      if (typeof newDessert === 'string') {
        this._courses.appetizers.push(newDessert);
      } else {
        console.log('Dessert item should be a string.')
      };
    },
    get courses() {
      return {
        appetizers : this.appetizers,
        mains : this.mains,
        desserts : this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      let dish = {
        name : dishName,
        price : dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      price = appetizer.price + main.price + dessert.price;
      return `${appetizer.name}, ${main.name}, ${dessert.name}. Total: £${price}`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Soup', 3.10);
  menu.addDishToCourse('appetizers', 'Breadsticks', 2.10);
  menu.addDishToCourse('appetizers', 'Salad', 1.55);
  menu.addDishToCourse('mains', 'Chicken', 6.10);
  menu.addDishToCourse('mains', 'Pork', 7.10);
  menu.addDishToCourse('mains', 'Beef', 8.10);
  menu.addDishToCourse('desserts', 'Sticky Toffee Pudding', 4.50);
  menu.addDishToCourse('desserts', 'Ice Cream', 3);
  menu.addDishToCourse('desserts', 'Chocolate Cake', 5);
  
  let meal = menu.generateRandomMeal()
  console.log(meal);