
var TempData = {

    lastChecked: undefined,

    todoList: [
      { item: 'get milk' },
      { item: 'homework',     priority: 5, due: new Date().getTime() + 3*24*60*60*1000 },
      { item: 'net homework', priority: 2, due: new Date().getTime() + 3*24*60*60*1000 },
      { item: 'end homework', priority: 5, due: new Date().getTime() + 6*24*60*60*1000 },
      { item: 'fix server',   priority: 9 },
      { item: 'check alarm',  priority: 3 },
      { item: 'read Candide'  },
      { item: 'get coffee',   priority: 8, due: new Date().getTime() + 4*60*60*1000 }
    ]

};
