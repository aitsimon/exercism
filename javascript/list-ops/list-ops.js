//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(arrayInts=[]) {
    this.values = arrayInts;
  }

  append(anotherList) {
       if(anotherList.values.length>0){
         anotherList.values.forEach(item => this.values.push(item));
       }
       return this;
  }

  concat(otherLists) {
    let tempArr = this.values;
      otherLists.values.forEach(list=>{
        tempArr.push(...list.values);
      })
    return new List(tempArr);
  }

  filter(predicate) {
    return new List([...this.values.filter(predicate)]);
  }

  map(fn) {
    return new List([...this.values.map(fn)]);
  }

  length() {
    return this.values.length;
  }

  foldl(fn, initialAccumulator) {
    let accumulator = initialAccumulator;
    for (let i=0;i<this.values.length; i++) {
      accumulator = fn(accumulator, this.values[i]);
    }
    return accumulator;
}

  foldr(fn, initialAccumulator) {
    let accumulator = initialAccumulator;
    for (let i = this.values.length - 1; i >= 0; i--) {
      accumulator = fn(accumulator,this.values[i]);
    }
    return accumulator;
  }

  reverse() {
    return new List([...this.values.reverse()]);
  }
}
