var checkboxes = document.getElementsByName('flexCheckDefault');
var quantity = document.getElementsByName('line');
var map = new Map();
var result = "";
var i;
var key, value;
var table;
function displaySelected() {
    

    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value + "\xa0\xa0\xa0:\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + quantity[i].value + "\n";

            map.set(checkboxes[i].value, quantity[i].value);

        }
    }

    // var checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
          
    table = document.createElement('table');
    table.setAttribute("id", "tblCustomers");
    table.setAttribute("class", "optable");

    for (let [key, value] of map) {
        console.log(key, value);
        var tr1 = document.createElement('tr');
        tr1.setAttribute("class", "optr1");
        var td1 = document.createElement('td');
        td1.setAttribute("class", "optd1");
        var td2 = document.createElement('td');
        td2.setAttribute("class", "optd2");
        var text1 = "";
        var text2 = "";

        text1 = document.createTextNode(key);
        text2 = document.createTextNode(value);

        td1.appendChild(text1);
        td2.appendChild(text2);
        tr1.appendChild(td1);
        tr1.appendChild(td2);

        table.appendChild(tr1);

        document.body.appendChild(table);
    }
    // var dataSource = shield.DataSource.create({
    //     data: "#tblCustomers",
    //     schema: {
    //         type: "table",
    //         fields: {
    //             key: { type: String },
    //             value: { type: Number }


    //         }
    //     }
    // });
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value + "\xa0\xa0\xa0:\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + quantity[i].value + "\n";

            map.set(checkboxes[i].value, quantity[i].value);

        }
    }
    console.log("loggin from PDF2-" + key, value);
    //console.log(checkboxes[i].value,quantity[i].value);
    for (let [key, value] of map) {
        console.log(key, value);
    }
    // // when parsing is done, export the data to PDF
    // dataSource.read().then(function (data) {
    //     var pdf = new shield.exp.PDFDocument({
    //         author: "Prasad",
    //         created: new Date()
    //     });

    //     pdf.addPage("a4", "portrait");

    //     pdf.table(
    //         50,
    //         50,
    //         data,
    //         [
    //             { field: "checkboxes[i].value", title: "Item(s)", width: 200 },
    //             { field: "quantity[i].value", title: "Quantity", width: 50 }

    //         ],
    //         {
    //             margins: {
    //                 top: 50,
    //                 left: 50
    //             }
    //         }
    //     );

    //     pdf.saveAs({
    //         fileName: "PDF"
    //   });
       
        //  });
     
        
         var divContents = $("#tblCustomers").html();
            var printWindow = window.open('', '', 'height=auto,width=auto');
            printWindow.document.write('<html><head><title>Groccery</title>');
            printWindow.document.write('</head><body>');
            printWindow.document.write("<h3><u><Center>Groccery List</u></h3></center>");
           // printWindow.document.write('<table style="width:80%; border=1; align=left; text-color:#0d065c"><thead><th>Item</th><th>Quantity</th></thead>');
            printWindow.document.write('<table style="margin-left: auto;margin-right: auto;width:60%; border: 1px solid black;border-collapse: separate; border-spacing: 5px; color:#0d065c"><thead><th>Item</th><th>Quantity</th></thead>');
            printWindow.document.write('<tbody><table style="margin-left:auto;margin-right:auto;width:60%; border: 1px solid black;border-collapse: separate; border-spacing:5px; color:#0d065c><tr>'+divContents+'</tr></table></tbody>'); 
            printWindow.document.write("</table>");
            printWindow.document.write('</body></html>');
            
            printWindow.document.close();
           printWindow.print();
            
}


