class Hashmap {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for(let i=0;i<key.length;i++) {
      hash = (hash + key.charCodeAt(i) * 23 ) % this.dataMap.length;
    }
    return hash
  }

  set(key,value) {
    let index = this._hash(key);
    if(!this.dataMap[index]) {
      this.dataMap[index] = []
    }
    this.dataMap[index].push([key,value]);
  }
  
  get(key) {
    let index = this._hash(key);
    if(this.dataMap[index]) {
      for(let i=0;i<this.dataMap[index].length;i++) {
        if(this.dataMap[index][i][0] === key) {
          return this.dataMap[index][1];
        }
      }
    }
    return undefined;
  }

  keys()  {
    let allKeys = [];
    for(let i=0;i<this.dataMap.length;i++) {
      if(this.dataMap[i]) {
        for(let a=0;a<this.dataMap[i].length;a++) {
          allKeys.push(this.dataMap[i][a][0])
        }
      }
    }
    console.log(allKeys)
  }

}

const hasnew = new Hashmap(7)
hasnew.set('washers',50);
hasnew.set('lambers',70);
hasnew.set('bolts',70);
hasnew.get('bolts');
console.log(hasnew.get('bolts'));
hasnew.keys()