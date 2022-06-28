function flexwrap(wrap){
document.getElementById('flex-container').style.flexWrap = wrap
}

function rangeValue(){
    let range = document.getElementById('range')
    let rangeVal = document.getElementById('rangeVal')

    rangeVal.innerHTML = range.value +' px'

    document.getElementById('flex-container').style.maxWidth = range.value +'px'

}