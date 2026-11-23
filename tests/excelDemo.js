const excelJs = require('exceljs');

async function readExcelFile() {

    const workBook = new excelJs.Workbook();
    await workBook.xlsx.readFile("C:/Users/rehan/Downloads/Obsqura Testing.xlsx");
    const workSheet = workBook.getWorksheet('Sheet1');
    workSheet.eachRow((row, rowNumber) => {

        console.log(`row${rowNumber}values:`, row.values);
        
    })

    // workSheet.eachRow((row, rowNumber) => {
    //     row.eachCell((cell, colNumber) => {
    //         console.log(cell.value);
    //     });
    // });

}

readExcelFile();

