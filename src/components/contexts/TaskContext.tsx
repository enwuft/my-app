import React, { useState, createContext } from 'react'
import moment from 'moment'

import data from './data'

export const TaskContext = createContext({})

const TasksContextProvider = props => {
  const [tasks, setTasks] = useState(data.tasks)
  const [isTaskFormShown, setIsTaskFormShown] = useState(false)
  const [filter, setFilter] = useState({ type: '', value: '' })
  const [filteredTasks, setFilteredTasks] = useState([...tasks])

  const [filterType, setFilterType] = useState('all')

  const [isCompletedFilter, setIsCompletedFilter] = useState(null)
  const [projectFilter, setProjectFilter] = useState(null)
  const [todayFilter, setTodayFilter] = useState(null)

  const filterTasks = filter => {
    let data = tasks
    if (filter.type !== 'isCompleted') setFilterType(filter.type)
    switch (filter.type) {
      case 'all':
        setProjectFilter(null)
        setTodayFilter(null)
        setFilteredTasks(data)
        break
      case 'today':
        setProjectFilter(null)
        setTodayFilter(moment().format('DD/MM/YYYY'))
        data = [...tasks].filter(
          task => task.date === moment().format('DD/MM/YYYY')
        )
        setFilteredTasks(data)
        break
      case 'indox':
        setProjectFilter(0)
        setTodayFilter(null)
        data = [...tasks].filter(task => task.projectId === 0)
        setFilteredTasks(data)
        break
      case 'isCompleted':
        setIsCompletedFilter(filter.value)
        if (filter.value !== null)
          data = [...tasks].filter(task => task.isCompleted === filter.value)
        if (todayFilter !== null)
          data = data.filter(task => task.projectId === projectFilter)
        setFilteredTasks(data)
        break
      case 'project':
        setProjectFilter(filter.value)
        setTodayFilter(null)
        data = [...tasks].filter(task => task.projectId === filter.value)
        setFilteredTasks(data)
        break
      default:
        setFilteredTasks([...tasks])
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        isTaskFormShown,
        filter,
        setFilter,
        filterTasks,
        filteredTasks,
        filterType
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
