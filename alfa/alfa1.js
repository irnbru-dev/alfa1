const arr = [
    {"date": "2017-07-31", "amount": 5422},
    {"date": "2017-07-30", "amount": 5220},
    {"date": "2017-07-29", "amount": 5365},
    {"date": "2017-07-27", "amount": 5451},
    {"date": "2017-07-26", "amount": 5303},
    {"date": "2017-07-25", "amount": 5654}
];

arr.forEach((v,k) => {
    let date = new Date(v.date).getTime()/1000;

    if(k !== 0) {
        let prevEl = arr[k-1];
        let prevDate = new Date(prevEl.date).getTime()/1000;
        let diff = prevDate - date;

        if (diff > 3600*24) {

            let res = new Date((date+3600*24)*1000);
            let y = res.getFullYear();
            let m = (parseInt(res.getMonth()) + 1).toString();
            let d = res.getDate();

            if( m.length === 1 ) {
                m = '0' + m;
            }
            console.log( y + '-' + m  + '-' + d );
        }
    }
});
