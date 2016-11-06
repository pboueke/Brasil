// this is just a buch of functions that simulates the real backend for the mockup
/*global fakeresources*/
/*jslint browser:true */

var data = {
        filtertables: ["Categorias", "Departamentos", "Disponibilidade"],
        filters: {
            categories: [],
            departments: [],
            statuses: []
        }
    };

function doLogin() {
    "use strict";
    if (document.getElementById('username').value === "admin") {
        if (document.getElementById('userpass').value === "admin") {
            window.location = "catalog.html";
            return true;
        }
    }
    document.getElementById('loginfail').style.display = "inline";
    return false;
}

function applyFilters() {
    "use strict";
    var tables = data.filtertables,

        it;
    for (it = 0; it < tables.length; it += 1) {
    }
}

function hideTable(table) {
    "use strict";
    var i,
        elements = document.getElementsByClassName("table-el-" + table),
        displayState = (elements[0].style.display === "none") ? "" : "none";
    for (i = 0; i < elements.length; i += 1) {
        elements[i].style.display = displayState;
    }
    document.getElementById('table-nm-' + table).innerHTML = (displayState === "") ? table + '<i class="material-icons">expand_less</i>' : table + ' <i class="material-icons">expand_more</i>';
}

function fillFilters() {
    "use strict";
    var resources = fakeresources,
        html = "",
        categories = [data.filtertables[0]],
        departments = [data.filtertables[1]],
        statuses = [data.filtertables[2]],
        tables,
        it,
        jt;
    // get unique filter values
    for (it = 0; it < resources.length; it += 1) {
        if (categories.indexOf(resources[it].category) < 0) {
            categories.push(resources[it].category);
        }
        if (departments.indexOf(resources[it].department) < 0) {
            departments.push(resources[it].department);
        }
        if (statuses.indexOf(resources[it].status) < 0) {
            statuses.push(resources[it].status);
        }
    }
    // create tables
    tables = [categories, departments, statuses];
    for (it = 0; it < tables.length; it += 1) {
        // set table head
        html += '<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"  width="80%" id="table-' + tables[it][0] + '">';
        html += '<thead>';
        html += '<tr>';
        html += '<th class="mdl-data-table__cell--non-numeric"> <a id="table-nm-' + tables[it][0] + '" style="cursor: pointer;" onclick="hideTable(\'' + tables[it][0] + '\')">' + tables[it][0] + '<i class="material-icons">expand_more</i></a></th>';
        html += '</tr>';
        html += '</thead>';
        html += '<tbody>';
        // set table values
        for (jt = 1; jt < tables[it].length; jt += 1) {
            html += '<tr class="table-el-' + tables[it][0] + '" style="display: none;">';
            html += '<td class="mdl-data-table__cell--non-numeric">' + tables[it][jt] + '</td>';
            html += '</tr>';
        }
        // end table
        html += '</tbody>';
        html += '</table>';
        html += '<br>';
    }
    document.getElementById('filter-tables').innerHTML = html;
}
