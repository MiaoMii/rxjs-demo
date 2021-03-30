let initArgs = {};
let main = document.getElementById('main');
let params = {
    chartsData: {
        "columns": [
            {
                "name": "stepName",
                "index": 0,
                "datatype": "string"
            },
            {
                "name": "direction",
                "index": 1,
                "datatype": "string"
            },
            {
                "name": "isOptional",
                "index": 2,
                "datatype": "string"
            },
            {
                "name": "detail",
                "index": 3,
                "datatype": "string"
            },
            {
                "name": "detail列名重复4",
                "index": 4,
                "datatype": "string"
            },
            {
                "name": "exits",
                "index": 5,
                "datatype": "string"
            }
        ],
        "data": [
            [
                "Client Hello",
                "right",
                "false",
                "测试1",
                "测试1",
                "true"
            ],
            [
                "Server Hello",
                "left",
                "false",
                "测试12",
                "测试12",
                "true"
            ],
            [
                "Certificate",
                "left",
                "true",
                "测试13",
                "测试13",
                "false"
            ],
            [
                "Server Key Exchange",
                "left",
                "true",
                "测试14",
                "测试14",
                "false"
            ],
            [
                "Certificate Request",
                "left",
                "true",
                "测试15",
                "测试15",
                "false"
            ],
            [
                "Server Hello Done",
                "left",
                "true",
                "测试16",
                "测试16",
                "false"
            ],
            [
                "Client Key Exchange",
                "right",
                "false",
                "测试17",
                "测试17",
                "true"
            ],
            [
                "Certificate Verify",
                "right",
                "true",
                "测试18",
                "测试18",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ],
            [
                "Change Cipher Spec",
                "right",
                "false",
                "测试19",
                "测试19",
                "true"
            ],
            [
                "Finished",
                "left",
                "false",
                "测试20",
                "测试20",
                "true"
            ]
        ],
        "title": "Excel数据源_2复件1_j4lDRgMx_SSl数据xlsx_Sheet1",
        "theme": "customed",
        "fontSize": '15aaa',
        "fontFamily": 'Microsoft YaHei UI',
        "edit": false
    }
};


let fontSize = isNaN(parseInt(params.chartsData.fontSize)) ? 16 : parseInt(params.chartsData.fontSize);
let fontFamily = params.chartsData.fontFamily || 'Microsoft YaHei UI';
let id = newGuid();
let toolbarId = newGuid();
let columnsObj = {};
let columns = [];
let cols = [];
let data = [];
let rows = [];
let editData = [];
let editHelpData = [];
$(main).append(`<table  id="${id}" style="width: 100%; height: 100%; font-size: ${fontSize}px; font-family:${fontFamily}" data-resizable="true"></table>`);
$(main).append(`<div style="display: flex; align-items: center" id="${toolbarId}"><h5>${params.chartsData.title}</h5></div>`);

//表头
params.chartsData.columns.map(it => {
    let tempObj = {
        title: it.name,
        valign: 'middle',
        align: 'center',
        // width: 100,
        field: it.name,
        sortable: true,
    };
    params.chartsData.edit && (tempObj.editable = {
        type: 'text',
        title: it.name,
        validate: function (v) {
            if (!v) return '不能为空!';
        },
    });
    cols.push(it.name);
    columnsObj[it.name] = it.index;
    columns.push(tempObj);
});
columns.unshift({
    width: 50,
    checkbox: true  //1,设置该列为复选框选择列
});
// columns.push({
//     width: 50,
//     title: '操作',
//     formatter: (value, item, index) => {
//         return `<i class="fas fa-trash table-option-del" style="cursor: pointer;color: red" data-index="${index}"></i>`;
//     }
// })
// let th = ``;
// params.chartsData.columns.map(it => {
//     th += `<th
//                 data-field="${it.name}"
//                 data-sortable="true"
//                 >${it.name}</th>`;
//     columnsObj[it.name] = it.index;
// });
// let theade = `<thead><tr>${th}</tr></thead>`;
// $(`#${id}`).append(theade);

//数据
params.chartsData.data.map((it, i) => {
    let tempObj = {};
    for (const columnsObjKey in columnsObj) {
        tempObj[columnsObjKey] = it[columnsObj[columnsObjKey]];
    }
    tempObj['_index'] = i;
    data.push(tempObj);
});

let $table = $(`#${id}`);


$table.bootstrapTable({
    columns,
    data,
    toolbar: `#${toolbarId}`,
    // maintainSelected :true,      //  分页时缓存checked
    classes: "table table-bordered table-striped",
    // height: 400,
    pagination: true,
    pageNumber: 1,
    pageSize: 10,
    pageList: "[10, 20, 50, 200]",
    paginationHAlign: "left",
    paginationDetailHAlign: "right",
    showColumns: true,
    search: true,
    searchOnEnterKey: true,
    trimOnSearch: true,
    // showToggle: true,
    showRefresh: true,
    showFullscreen: true,
    clickToSelect: true,
    // silent: true,              //静态刷新
    // striped: true,             //是否显示行间隔色
    onRefresh: function (e, d, s) {
        // $tablse.bootstrapTable("refresh");//静态刷新
    },
    onClickRow: (params) => {
    },
    onCheckAll: (rowsAfter) => {
        rowsAfter.map(it => {
            rows.indexOf(it._index) === -1 && rows.push(it._index);
        });
        getFilterData();
    },
    onCheck: (params, $element) => {
        let index = +$element.attr('data-index');
        rows.push(index);
        getFilterData();
    },
    onUncheck: (params, $element) => {
        let index = +$element.attr('data-index');
        rows.splice(rows.indexOf(index), 1);
        getFilterData();
    },
    onUncheckAll: (rowsAfter, rowsBefore) => {
        rowsBefore.map(it => {
            rows.indexOf(it._index) !== -1 && rows.splice(rows.indexOf(it._index), 1);
        });
        getFilterData();
    },
    rowAttributes: function (row, index) {
        return {
            'data-index': index
        };
    },
    onColumnSwitch: function (field, checked) {
        !checked ? cols.splice(rows.indexOf(field), 1) : cols.push(field);
        getFilterData();
    },
    onEditableSave: (field, row, oldValue, $el) => {
        let flag = editHelpData.indexOf(row._index);
        if (flag === -1) {
            editHelpData.push(row._index);
            editData.push(row);
        } else {
            editData[flag] = row;
        }
        console.log(editData);
    },
});

// row delete evn
$(main).find('.table-option-del').click(function (e) {
    e.stopPropagation();
    $(this).attr('data-index');
    //todo id cols
});

function getFilterData() {
    initArgs.selectedData = {tables: []};
    initArgs.selectedData.tables = [{
        // inputTableName: initArgs.paramSetting.tableName,
        rows: rows.map(it => {
            return {row: it};
        }),
        cols: cols.map(it => {
            return {col: it};
        }),
    }];
    console.log(initArgs.selectedData);
}

function newGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
    }
    return guid;
}


