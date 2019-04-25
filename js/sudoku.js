var set = [0, 9, 5, 3, 0, 8, 7, 0, 1, 8, 2, 1, 0, 7, 0, 0, 6, 0, 6, 7, 0, 4, 0, 0, 8, 0, 0, 2, 4, 0, 0, 0, 9, 0, 5, 0, 0, 0, 9, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 4, 8, 0, 0, 4, 0, 0, 2, 0, 8, 9, 0, 6, 0, 0, 3, 0, 1, 7, 2, 1, 0, 2, 8, 0, 7, 6, 3, 0]


var box = document.querySelector(".sudoku");

for (var j=0; j<box.children.length; j++)
{
    if (set[j] != 0)
    {
        box.children[j].children[0].value = set[j];
        box.children[j].children[0].disabled = true;
    }
}