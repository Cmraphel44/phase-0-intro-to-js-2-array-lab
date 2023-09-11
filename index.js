const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)

}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)

}

function appendCat(name) {
    const copyCats = [...cats]
copyCats.push(name)
return copyCats;
}

function prependCat(name) {
    const copyCats = [...cats]
    copyCats.unshift(name)
    return copyCats;
}

function removeLastCat() {
    const copyCats = [...cats]
    copyCats.pop()
    return copyCats;
}

function removeFirstCat() {
    const copyCats = [...cats]
    copyCats.shift()
    return copyCats;
}
