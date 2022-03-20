// write function collectStrings which accepts an obj and returns an arr of all vals in the obj that have a typeof str

const collectStrings = (obj) => {
    let strArr = [];
    
    const gatherStrings = (o) => {
        for (let key in o) {
            if (typeof o[key] === 'string') {
                strArr.push(o[key]);
            } else if (typeof o[key] === 'object') {
                return gatherStrings(o[key])
            }
        }
    }
    gatherStrings(obj)
    return strArr
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])