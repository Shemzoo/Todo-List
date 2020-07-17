import React, { useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');

    const ref = useRef<HTMLInputElement>(null);

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value) 
    // };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }


    return (
        <div className="input-field mt2">
            <input 
                ref={ref}
                onKeyPress={keyPressHandler}
                // onChange={changeHandler}
                // value={title} 
                type="text" 
                id="title" 
                placeholder="Enter your text here" />
            <label htmlFor="title" className="active">
                What are you planning to do?
            </label>
        </div>
    )
}