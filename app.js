var num = prompt('Enter your Number')

for (var i = 1; i <= 10; i++) {
    document.write('<div>')
    document.write(i + "×" + +num + "=" + i * num);
    document.write('</div>')

}