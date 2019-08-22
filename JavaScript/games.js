var schedules =[{"month":"september", "games":
[
{"id":"1","date": "1-sep", "teams":["U1","U4"], "location": "AJ Katzenmaier", "time": "9:30 a.m."},
{"id":"2","date": "1-sep", "teams":["U3","U2"], "location": "Greenbay", "time": "1:00 p.m."},
{"id":"3","date": "8-sep", "teams":["U5","U6"], "location": "Howard A Yeager", "time": "9:30 a.m."},
{"id":"4","date": "8-sep", "teams":["U6","U1"], "location": "Marjorie P Hart", "time": "1:00 p.m."},
{"id":"5","date": "15-sep", "teams":["U2","U4"], "location": "North", "time": "9:30 a.m."},
{"id":"6","date": "15-sep", "teams":["U3","U5"], "location": "AJ Katzenmaier", "time": "1:00 p.m."},
{"id":"7","date": "22-sep", "teams":["U1","U3"], "location": "South", "time": "9:30 a.m."},
{"id":"8","date": "22-sep", "teams":["U2","U6"], "location": "Howard A Yeager", "time": "1:00 p.m."},
{"id":"9","date": "29-sep", "teams":["U4","U5"], "location": "Greenbay", "time": "9:30 a.m."}
]},

{"month":"october", "games":
[
{"id":"1","date": "6-oct", "teams":["U2","U5"], "location": "Marjorie P Hart", "time": "9:30 a.m."},
{"id":"2","date": "6-oct", "teams":["U1","U6"], "location": "South", "time": "1:00 p.m."},
{"id":"3","date": "8-oct", "teams":["U3","U4"], "location": "Howard A Yeager", "time": "9:30 a.m."},
{"id":"4","date": "8-oct", "teams":["U5","U1"], "location": "Greenbay", "time": "1:00 p.m."},
{"id":"5","date": "20-oct", "teams":["U6","U3"], "location": "North", "time": "9:30 a.m."},
{"id":"6","date": "20-oct", "teams":["U2","U4"], "location": "Marjorie P Hart", "time": "1:00 p.m."},
{"id":"7","date": "27-oct", "teams":["U3","U1"], "location": "AJ Katzenmaier", "time": "9:30 a.m."},
{"id":"8","date": "27-oct", "teams":["U5","U6"], "location": "Howard A Yeager", "time": "1:00 p.m."}
]}
]

var places = 
[
{"location": "AJ Katzenmaier", "map":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2969.657202866899!2d-87.6312527!3d41.9002288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ+Katzenmaier+Elementary!5e0!3m2!1snl!2snl!4v1529921617659"},
{"location": "Greenbay", "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.022981686598!2d-87.64002218463192!3d41.91386467921929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay+Elementary!5e0!3m2!1snl!2snl!4v1529921727575"},
{"location": "Howard A Yeager", "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585850578759!2d-87.6651101846316!3d41.92326097921857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward+A+Yeager+Elementary!5e0!3m2!1snl!2snl!4v1529921775262"},
{"location": "Marjorie P Hart", "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2898393489722!2d-87.64816138463141!3d41.92962287921815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie+P+Hart+Elementary!5e0!3m2!1snl!2snl!4v1529921827716"},
{"location": "North", "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.33554870362!2d-87.64831158463211!3d41.90714487921998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af14860a5%3A0x5736e62f19086c62!2sNorth+Elementary!5e0!3m2!1sen!2snl!4v1529921916281"},
{"location": "South", "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d536843.7647596224!2d-88.25831650403464!3d41.98586739823682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb7ad3bfd4bef%3A0xa8117f91d1697cd!2sSouth+Elementary+School!5e0!3m2!1sen!2snl!4v1529921997842"}
]