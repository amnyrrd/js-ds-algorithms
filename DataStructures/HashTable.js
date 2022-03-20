class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let weirdPrime = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let val = char.charCodeAt(0) - 96;
            total = (total * weirdPrime + val) % this.keyMap.length;
        }
        return total
    }

    set(key, val) {
        let idx = this._hash(key);
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [];
        }
        this.keyMap[idx].push([key, val]);
    }

    get(key) {
        let idx = this._hash(key);
        if (this.keyMap[idx]) {
            for (let i = 0; i < this.keyMap[idx].length; i++) {
                if (this.keyMap[idx][i][0] === key) {
                    return this.keyMap[idx][i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }

    vals() {
        let valsArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valsArr.includes(this.keyMap[i][j][1])) {
                        valsArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valsArr
    }

}

// hashing function as arrow function
// const hash = (key, arrayLen) => {
//     let total = 0;
//     let weirdPrime = 31
//     for(let i = 0; i < Math.min(key.length, 100); i++){
//         let char = key[i]
//         let val = char.charCodeAt(0) - 96;
//         total = (total * weirdPrime + val) % arrayLen;
//     }
//     return total
// }

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

ht.keys().forEach(function(key){
    console.log(ht.get(key));
  })

console.log('ya')