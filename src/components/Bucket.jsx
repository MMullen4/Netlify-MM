import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({ // We initialize the edit state with an object that has an id, value, and eagerness key
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value);
    setEdit({ id: null, value: '', eagerness: '' });
  };

  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `bucket-row complete ${item.eagerness}`
          : `bucket-row ${item.eagerness}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
        {/* setEdit is a function that updates the edit state with the id, value, and eagerness of the item being edited */} 
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
