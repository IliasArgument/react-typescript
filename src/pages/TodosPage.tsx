import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (str: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodos: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodos, ...todos])
        setTodos(prev => [newTodos, ...prev])
    }
    const onToggle = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
        console.log('dd')

    }
    const onRemove = (id: number) => {
        const shoudRemove = confirm('Вы уверены что хотите удалить?') //или просо window.confirm
        if (shoudRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))

        }
    }
    return <>
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
}