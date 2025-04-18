import Answer from './answers'; // Correct import path

const QuestionAnswer = ({ item, index }) => {
  if (item.type === 'q') {
    return (
      <div key={`message-${index}`} className='flex justify-end'>
        <li className='text-right p-1 mb-4 border-8 bg-zinc-700 border-zinc-700 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit'>
          <span className='text-blue-300 font-semibold'>You:</span>
          <div className='ml-4 text-sm text-zinc-400'>
            <Answer ans={item.text} totalResult={1} index={index} type={item.type} />
          </div>
        </li>
      </div>
    );
  } else {
    return item.text.map((ansItem, ansIndex) => (
      <li key={`ans-${index}-${ansIndex}`} className='text-left p-1 mb-4'>
        {ansIndex === 0 && (
          <span className='text-green-400 font-semibold'>Bot:</span>
        )}
        <div className='ml-4 text-white text-sm'>
          <Answer ans={ansItem} totalResult={item.text.length} index={ansIndex} type={item.type} />
        </div>
      </li>
    ));
  }
};

export default QuestionAnswer;
