const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(elementColors => elementColors === "черный" || elementColors === "красный" || elementColors === "желтый").join('-');
}

console.log(createColorString());

