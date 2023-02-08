import { component$ } from '@builder.io/qwik';

export const Question = component$((props:any) => {
    const {question} = props;
    return (
        <div>
            <h1>질문지</h1>
            <div>{question}</div>
        </div>
    )
})