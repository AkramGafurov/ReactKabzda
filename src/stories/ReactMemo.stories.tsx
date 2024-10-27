import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import React, {ChangeEvent, ChangeEventHandler, useMemo, useState} from "react";
import {number} from "prop-types";

export default {
    title: 'useMemo',
};

export const DifficultExampleCounting = () => {
    let [a, setA] = useState<number>(0)
    let [b, setB] = useState<number>(0)

    const changeHandlerA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }
    const changeHandlerB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }
    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake = fake + 1
                let fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);

// for (let i=1; i<=a;i++){
//     let fake = 0;
//     while(fake<100000000){
//         fake = fake+1
//         let fakeValue = Math.random()
//     }
//     resultA = resultA*i
// }

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input type="text" value={a} onChange={changeHandlerA}/>
        <input type="text" value={b} onChange={changeHandlerB}/>
        <div>
            <div>result a: {resultA}</div>
            <div>result b: {resultB}</div>
        </div>
    </>
}

// --------------------------------- //
const UsersSecrets = (props: { users: Array<string> }) => {
    console.log('UsersSecrets')
    return <div>
        {props.users.map((user,i) => <div key={i}>{user}</div>)}
    </div>
}

const Users = React.memo(UsersSecrets)

export const HelpToReactMemo = () => {

    console.log('HelpToReactMemo')

    const [counter, setCounter] = useState<number>(0)

    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

let newArray = useMemo(()=>{
    let filtredUsers = users.filter(i=>i.toLowerCase().includes('a'))
    return filtredUsers;
},[users])

    let filtredUsers = users.filter(i=>i.toLowerCase().includes('a'))


    const addUser = ()=>{
        setUsers([...users, 'Sveta '+ new Date().getTime()])
    }
    return <div>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>AddUser
        </button>
        {counter}
        <Users users={newArray}/>
    </div>
}

// --------------------------------- //

const BooksSecrets = (props: { books: Array<string> }) => {
    console.log('BooksSecrets')
    return <div>
        {props.books.map((book,i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecrets)

export const LikeUseCallback = () => {

    console.log('LikeUseCallback')

    const [counter, setCounter] = useState<number>(0)

    const [books, setUsers] = useState(["react", "js", "css", "html"])

let newArray = useMemo(()=>{
    let filtredBooks = books.filter(i=>i.toLowerCase().includes('a'))
    return filtredBooks;
},[books])


    const addBook = ()=>{
        setUsers([...books, 'Angular '+ new Date().getTime()])
    }
    return <div>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addBook}>AddUser
        </button>
        {counter}
        <Books books={newArray}/>
    </div>
}
