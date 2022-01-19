const el = document.getElementById("countries");

let countries = [
  { cname: "France", ccode: 1 },
  { cname: "Germany", ccode: 2 },
  { cname: "England", ccode: 3 },
  { cname: "Spain", ccode: 4 },
  { cname: "Belgium", ccode: 5 },
  { cname: "Italy", ccode: 6 },
  { cname: "Portugal", ccode: 7 },
  { cname: "Irland", ccode: 8 },
  { cname: "Luxembourg", ccode: 9 },
];

const Count = function (data) {
  let el = document.getElementById("counter");
  let name = "country";

  if (data) {
    if (data > 1) {
      name = "countries";
    }
    el.innerHTML = data + " " + name;
  } else {
    el.innerHTML = "No " + name;
  }
};

const FetchAll = function () {
  var data = "";

  if (countries.length > 0) {
    for (i = 0; i < countries.length; i++) {
      data += "<tr>";
      data += "<td>" + countries[i]["cname"] + "</td>";
      data += "<td>" + countries[i]["ccode"] + "</td>";
      data += '<td><button onclick="Edit(' + i + ')">Edit</button></td>';
      data += '<td><button onclick="Delete(' + i + ')">Delete</button></td>';
      data += "</tr>";
    }
  }

  Count(countries.length);
  return (el.innerHTML = data);
};

const Add = function () {
  let els = document.getElementById("add-name");
  let codes = document.getElementById("add-code");
  // Get the value
  var country = els.value;
  var code = codes.value;

  if (country) {
    // Add the new value
    countries.push({ cname: country.trim(), ccode: code.trim() });
    // Reset input value
    els.value = "";
    codes.value = "";
    // Dislay the new list
    FetchAll();
  }
};

const Edit = function (item) {
  let el = document.getElementById("edit-name");
  let editCode = document.getElementById("edit-code");
  // Display value in the field
  el.value = countries[item]["cname"];
  editCode.value = countries[item]["ccode"];
  // Display fields
  document.getElementById("spoiler").style.display = "block";
  // self = this;

  document.getElementById("saveEdit").onsubmit = function () {
    // Get value
    var country = el.value;
    var countryCode = editCode.value;
    if (country) {
      // Edit value
      countries.splice(item, 1, {
        cname: country.trim(),
        ccode: countryCode,
      });
      // Display the new list
      FetchAll();
      // Hide fields
      CloseInput();
    }
  };
};

const Delete = function (item) {
  // Delete the current row
  countries.splice(item, 1);
  // Display the new list
  FetchAll();
};

FetchAll();

function CloseInput() {
  document.getElementById("spoiler").style.display = "none";
}

// var app = new function() {

//   this.el = document.getElementById('countries');

//   this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];

//   this.Count = function(data) {
//     var el   = document.getElementById('counter');
//     var name = 'country';

//     if (data) {
//       if (data > 1) {
//         name = 'countries';
//       }
//       el.innerHTML = data + ' ' + name ;
//     } else {
//       el.innerHTML = 'No ' + name;
//     }
//   };

//   this.FetchAll = function() {
//     var data = '';

//     if (this.countries.length > 0) {
//       for (i = 0; i < this.countries.length; i++) {
//         data += '<tr>';
//         data += '<td>' + this.countries[i] + '</td>';
//         data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
//         data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
//         data += '</tr>';
//       }
//     }

//     this.Count(this.countries.length);
//     return this.el.innerHTML = data;
//   };

//   this.Add = function () {
//     el = document.getElementById('add-name');
//     // Get the value
//     var country = el.value;

//     if (country) {
//       // Add the new value
//       this.countries.push(country.trim());
//       // Reset input value
//       el.value = '';
//       // Dislay the new list
//       this.FetchAll();
//     }
//   };

//   this.Edit = function (item) {
//     var el = document.getElementById('edit-name');
//     // Display value in the field
//     el.value = this.countries[item];
//     // Display fields
//     document.getElementById('spoiler').style.display = 'block';
//     self = this;

//     document.getElementById('saveEdit').onsubmit = function() {
//       // Get value
//       var country = el.value;

//       if (country) {
//         // Edit value
//         self.countries.splice(item, 1, country.trim());
//         // Display the new list
//         self.FetchAll();
//         // Hide fields
//         CloseInput();
//       }
//     }
//   };

//   this.Delete = function (item) {
//     // Delete the current row
//     this.countries.splice(item, 1);
//     // Display the new list
//     this.FetchAll();
//   };

// }

// app.FetchAll();

// function CloseInput() {
//   document.getElementById('spoiler').style.display = 'none';
// }
