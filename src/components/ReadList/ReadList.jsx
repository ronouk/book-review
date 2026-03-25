import React from 'react';
import ListItemSingle from '../ListItemSingle/ListItemSingle';

const ReadList = ({ displayReadList, onDelete }) => {

    const listName = "readlist";


    return (
        <div className='flex flex-col gap-6'>
            {
                displayReadList.length > 0 ?
                    displayReadList.map((book, index) => <ListItemSingle
                        key={index}
                        book={book}
                        listName={listName}
                        onDelete = {onDelete}
                    ></ListItemSingle>)
                    :
                    <div>Nothing found</div>
            }
        </div>
    );
};

export default ReadList;