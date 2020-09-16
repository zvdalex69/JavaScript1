function chess(num) {

    const $chess = document.getElementById("chess");
    const $table = document.createElement("table");
    const rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];

    for (let i = 0; i <= num; i++) {
        const $tr = document.createElement("tr");
        for (let j = 0; j <= num; j++) {
            const $td = document.createElement("td");
            if (i == num && j > 0) {
                $td.classList.add("coordinates");
                $td.textContent = rows[j - 1];
            } else if (i != num && j == 0) {
                $td.classList.add("coordinates");
                $td.textContent = num - i;
            } else if (i != num) {
                if ((i + j) % 2 == 0) {
                    $td.classList.add("white");
                } else {
                    $td.classList.add("black");
                }
            }

            $tr.appendChild($td);
        }
        $table.appendChild($tr);
    }

    $chess.appendChild($table);
}


chess(8);
