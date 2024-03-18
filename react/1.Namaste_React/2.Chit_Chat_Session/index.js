const obj = {
  fn: function () {
    // Here this refers to the obj.
    console.log(`One:-: `, this);

    //--|| Function inside another function. ||--
    return function () {
      // Here, this refers to the Window object.
      console.log(`Two:-: `, this);
    };
  },

  fnArrow: () => {
    // this inside the arrow function refers to the Window object.
    console.log(`Arrow:-: `, this);
  },
};

obj.fn()();
obj.fnArrow(); // this refers to the window Object

/**
 *
 * @Another_Example
 *
 */
const person1 = {
  name: "Mr.",
  print: function () {
    console.log(this);
  },
};

const person2 = {
  name: "Anik",
};

function x() {
  console.log(this);
}

x(); // this refers to the window Object
x.call(person1); // this refers to the person1 Object
x.call(person2); // this refers to the person2 Object

person1.print(); // this refers to the person1 Object
person1.print.call(); // this refers to the window Object
person1.print.call(this); // this refers to the window Object
person1.print.call(person2); // this refers to person2 Object [because of the print function that I called with the person2 object].

/**
 * @Important_Note
 * Summary: How the print function is called determines the value of this.
 */

/**
 *
 *
 * @Another_One
 *
 *
 */
const anotherObj = {
  firstName: "Mr. Anik",
  printName1: () => {
    console.log(this.firstName); // this refers to the Window Object.
  },
  printName2: function () {
    console.log(this.firstName); // this refers to the anotherObj object.
  },
};

anotherObj.printName1(); // undefined, ==> because printName1 is an arrow function, and we know that this inside the arrow function always refers to the window object. So here this.firstName is equal to window.firstName. But there is no firstName in the window object. So, finally, it returns undefined.

anotherObj.printName2(); // Mr. Anik, ==> here, printName2 is a normal function, and this inside the printName2 refers to the anotheObj. So here this.firstName is equal to anotherObj.firstName and firstName properties have existed in the anotherObj object. So, finally, it returns the firstName value, which means Mr. Anik.

/**
 *
 * || ==================== ||
 *
 * @Interview
 *
 * - Our Preparation:
 *     (50%) Tecnical Skills
 *        - Everyone knows
 *
 *     (50%) Communication Skills
 *        - Speak your thoughts while you code
 *             - Practice speaking even when you're coding alone.
 *        - If you can't explain, then the interviewer thinks you don't know about this topic..
 *
 * || ==================== ||
 *
 */
