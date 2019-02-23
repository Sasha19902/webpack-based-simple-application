'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    let result = Object.assign(arg.obj1);
    result.firstName = "zxcvbnm";
    return  result/* variable with result */;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    let result = Object.assign(arg.obj1, arg.obj2);
    result.a = 800;
    return result /* variable with result */;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    arg.obj1.relatives.forEach(elem => {
        if(elem.firstName === "Roma")
          Object.assign(elem, {"gender": "male"});
        else
          Object.assign(elem, {"gender": "female"});
        });

    return arg /* variable with result */;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    let gender = "female";
    let result = {
      greetings: []
    };

    arg.obj1.relatives.forEach( elem => {
      if(elem.gender === gender) {
        result.greetings.push(`Hello, ${elem.firstName} ${elem.lastName}`);
      }
    });
    return result /* variable with result */;
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
    let var1 = document.getElementsByClassName(arg.className)[0];
    var1.style.backgroundColor = arg.color;
    return var1;
  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    let result = Object.assign(arg);
    while (result.hostNames.indexOf(document.location.hostname) !== -1) {
      result.hostNames.splice(result.hostNames.indexOf(document.location.hostname), 1);
    }
    return result;
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    let el = {};

    for(let i in arg) {
      el[arg[i]] = i;
    }

    return el;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
    let arr = [];
    arr = arg.arr1.concat(arg.arr2);
    let result = {};

    for(let i = 1; i < arr.length; i+= 2) {
      result[arr[i - 1]] = arr[i];
    }

    return result;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
    let result = {};

    arg.users.forEach(elem => {
      let idVal = elem.id;
      result[idVal] = elem;
    });
    return result;
  }

  /*for(var i = 0; i < document.getElementsByClassName(arg.className).childNodes.length; i++) {
      arg.childrenInfo.push({
        tag: elem.childNodes[i].tagName,
        className: elem.childNodes[i].className
      });
    }*/

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
    var elem = document.body.getElementsByClassName(arg.className).item(0).childNodes;

    for(let i = 0; i < elem.length; i++) {
      arg.childrenInfo.push({
        tag: elem[i].tagName,
        className: elem[i].className
      });
    }

    return arg;
  }
}

export default OperationExecutor;
