            /* global i, k */

            var nameList = ["Hamsa"];
            var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
            var newCars;

            
            var divs = document.getElementsByTagName("div");        
            function changeColors(divarr) {
                for (k in divs) {
                    divarr[k].style.backgroundColor = "red";
                }
            }
            //changeColors(divs);
            
            function giveRandomCol(divarr) {
                for (i in divarr) {
                    var r = Math.floor(Math.random() * 256);
                    var g = Math.floor(Math.random() * 256);
                    var b = Math.floor(Math.random() * 256);
                    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
                    
                    divarr[i].style.backgroundColor = bgColor;
                }
            }
            
            function sayHelloFromDiv(div) {
                alert("Hello from " + div.id);
            }
            
            
            var toHtml = function (array) {
                var res = array.map(x => "<li>" + x + "</li>");
                res.unshift("<ul>");
                res.push("</ul>");
                return res.join(''); 
            };
            
            function addToList(name, e) {
                var node = document.createElement("li");
                var textnode = document.createTextNode(name);
                node.appendChild(textnode);
                document.getElementById("thelist").appendChild(node);
            };
       
            document.getElementById("listWrapper").innerHTML = toHtml(nameList);
            
            // not the way they want me to do it, but I'm running out if time so now I'm doing it this way.
                function toHTMLTable(arr) {
                var startString = '<table style="width:100%"><tr><th>id</th><th>year</th><th>make</th><th>model</th><th>price</th></tr>';

                    newCars = arr.map(function(car) {
                        var id = car.id, year = car.year, make = car.make, model = car.model, price = car.price;
                        return [id, year, make, model, price];
                    });
                    
                    for (var i in newCars) {
                        startString += "<tr>";
                        for (var j = 0; j < newCars[i].length; j++) {
                            startString += "<td>" + newCars[i][j] + "</td>";
                        }
                        startString += "</tr>";
                    }
                
                    startString += "</table>";
                
                return startString;
           }
           
           function filterWithPrice(p) {
                var filteredTbl = cars.filter(function(car) {
                   return car.price < p;
                });
                
                console.log(filteredTbl);
                console.log(toHTMLTable(filteredTbl));
                document.getElementById("carWrapper").innerHTML = toHTMLTable(filteredTbl);
           }
            
            function putTable() {
                document.getElementById("carWrapper").innerHTML = toHTMLTable(cars);
                
                
            };

            