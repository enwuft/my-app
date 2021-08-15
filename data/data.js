const data = {
  header: [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/enwuft/image/upload/v1628959441/cad_wv2imb.png',
      name: 'เขียนเเบไฟฟ้าด้วยคอมพิวเตอร์',
      level: 'ประกาศณียบัตรวิชาชีพชั้นสูง'
    }
  ],
  colors: [
    { id: 1, name: 'blue', code: '#1070CA', createdAt: '09/11/2019' },
    { id: 2, name: 'green', code: '#47B881', createdAt: '09/11/2019' },
    { id: 3, name: 'yellow', code: '#F7D154', createdAt: '09/11/2019' },
    { id: 4, name: 'red', code: '#EC4C47', createdAt: '09/11/2019' },
    { id: 5, name: 'orange', code: '#D9822B', createdAt: '09/11/2019' },
    { id: 6, name: 'purple', code: '#735DD0', createdAt: '09/11/2019' },
    { id: 7, name: 'teal', code: '#14B5D0', createdAt: '09/11/2019' }
  ],
  projects: [
    { id: 1, name: 'Project', colorId: 1, createdAt: '09/11/2019' },
    { id: 2, name: 'Another project', colorId: 2, createdAt: '09/11/2019' },
    { id: 3, name: 'Third project', colorId: 1, createdAt: '09/11/2019' },
    { id: 4, name: 'Project 4', colorId: 3, createdAt: '09/11/2019' }
  ],
  tasks: [
    {
      id: 1,
      name: 'task1',
      projectId: 1,
      description: '',
      isCompleted: false,
      date: '12/01/2020',
      time: '16:00',
      createdAt: '09/11/2019'
    },
    {
      id: 2,
      name: 'task2',
      projectId: 2,
      description: '',
      isCompleted: false,
      date: '12/01/2020',
      time: '16:00',
      createdAt: '09/11/2019'
    },
    {
      id: 3,
      name: 'task3',
      projectId: 2,
      description: '',
      isCompleted: false,
      date: '12/01/2020',
      time: '16:00',
      createdAt: '09/11/2019'
    },
    {
      id: 4,
      name: 'task4',
      projectId: 2,
      description: '',
      isCompleted: false,
      date: '12/01/2020',
      time: '16:00',
      createdAt: '09/11/2019'
    },
    {
      id: 5,
      name: 'task5',
      projectId: 3,
      description: '',
      isCompleted: false,
      date: '17/11/2019',
      time: '16:00',
      createdAt: '09/11/2019'
    },
    {
      id: 6,
      name: 'task6',
      projectId: 0,
      description: '',
      isCompleted: false,
      date: '16/11/2019',
      time: '16:00',
      createdAt: '09/11/2019'
    }
  ]
}

export default data
