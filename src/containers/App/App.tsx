import './App.css';
import {useState} from "react";
import Reset from "../../components/Reset/Reset.tsx";
import Cell from "../../components/Cell/Cell.tsx";

function App() {
    const createItems = () => {
        const cell = [];

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                cell.push({hasItem: false, clicked: false});
            }
        }

        const ranCell =  Math.floor(Math.random() * cell.length);
        cell[ranCell].hasItem = true;

        return cell;
    };

    const [items, setItems] = useState(createItems());

    const cellItems = () => {
        const copyItems = items.map((item) => ({...item}));
        const ranCell = Math.floor(Math.random() * copyItems.length);
        copyItems[ranCell].hasItem = true;

        setItems(copyItems);
    }

    const openCell: React.MouseEventHandler<Element> = (event) => {
        const index = Number(event.currentTarget.id);
        const copyItems = items.map((item) => ({ ...item }));
        copyItems[index].clicked = true;

        if (copyItems[index].clicked !== false) {
            return (
                <div className={'open-cell'}></div>
            );
        }

        console.log(items);
    };

    return (
        <div className='main-block'>
            {items.map((elem, index) => (
                <Cell id={index} cellClick={openCell} key={index}></Cell>
            ))}
            <Reset resetClick={cellItems}></Reset>
        </div>
    );

}

export default App;