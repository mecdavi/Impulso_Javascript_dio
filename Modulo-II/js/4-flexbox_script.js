function flexwrap(wrap){
    document.documentElement.style.cssText = '--quebra:' + wrap
}
function flexdirection(direction){
    document.documentElement.style.cssText = '--direcao:' + direction
}
function rangeValue(){
    let range = document.getElementById('range')
    let rangeVal = document.getElementById('rangeVal')

    rangeVal.innerHTML = range.value +' px'

    document.getElementById('flex-container').style.maxWidth = range.value +'px'

}