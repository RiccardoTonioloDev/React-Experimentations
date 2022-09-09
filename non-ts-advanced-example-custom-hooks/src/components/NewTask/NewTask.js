import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
    const { isLoading, error, sendRequests: sendTaskRequest } = useHttp();

    const createTask = (taskText, data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
    };

    const enterTaskHandler = async (taskText) => {
        sendTaskRequest(
            {
                url: 'INSERT_HERE_FIREBASE_LINK/tasks.json',
                method: 'POST',
                body: { text: taskText },
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            //Bind in questo caso ci aiuta a settare il primo argomento.
            //Il primo argomento di bind indica a che this deve puntare.
            //Dal secondo in poi, va a preconfigurare dal primo argomento della funzione in poi.
            createTask.bind(null, taskText)
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
