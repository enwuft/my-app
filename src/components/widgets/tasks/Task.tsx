import React, { useState, useContext, useEffect } from 'react'
import {
  Table,
  Icon,
  Text,
  Tooltip,
  IconButton,
  Badge,
  Heading,
  Dialog,
  Pane,
  Position
} from 'evergreen-ui'
import { TaskContext } from '~/components/contexts/TaskContext'

const Task = ({ task }) => {
  const { tasks, setsTasks } = useContext(TaskContext)

  const [isDetailViewShown, setIsDetailsViewShown] = useState(false)
  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState(false)

  const [doneIcon, setDoneIcon] = useState(
    task.isCompleted ? 'tick-circle' : 'circle'
  )

  useEffect(() => {
    setDoneIcon(task.isCompleted ? 'tick-circle' : 'circle')
  }, [tasks])
}
